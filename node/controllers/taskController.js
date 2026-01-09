const Task = require('../models/Task');
const { DB_TYPE, mysqlPool, pgPool } = require('../config/database');

// Helper function to format SQL task
const formatSQLTask = (task) => {
    return {
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        createdAt: task.created_at,
        updatedAt: task.updated_at
    };
};

// GET all tasks
exports.getAllTasks = async (req, res) => {
    try {
        let tasks;

        if (DB_TYPE === 'mongodb') {
            tasks = await Task.find().sort({ createdAt: -1 });
        } else if (DB_TYPE === 'mysql') {
            const [rows] = await mysqlPool().query('SELECT * FROM tasks ORDER BY created_at DESC');
            tasks = rows.map(formatSQLTask);
        } else if (DB_TYPE === 'postgres' || DB_TYPE === 'postgresql') {
            const result = await pgPool().query('SELECT * FROM tasks ORDER BY created_at DESC');
            tasks = result.rows.map(formatSQLTask);
        }

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching tasks',
            error: error.message
        });
    }
};

// GET single task by ID
exports.getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        let task;

        if (DB_TYPE === 'mongodb') {
            task = await Task.findById(id);
            if (!task) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }
        } else if (DB_TYPE === 'mysql') {
            const [rows] = await mysqlPool().query('SELECT * FROM tasks WHERE id = ?', [id]);
            if (rows.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }
            task = formatSQLTask(rows[0]);
        } else if (DB_TYPE === 'postgres' || DB_TYPE === 'postgresql') {
            const result = await pgPool().query('SELECT * FROM tasks WHERE id = $1', [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }
            task = formatSQLTask(result.rows[0]);
        }

        res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching task',
            error: error.message
        });
    }
};

// CREATE new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;

        // Validation
        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required'
            });
        }

        let task;

        if (DB_TYPE === 'mongodb') {
            task = await Task.create({
                title,
                description,
                status: status || 'pending',
                priority: priority || 'medium'
            });
        } else if (DB_TYPE === 'mysql') {
            const [result] = await mysqlPool().query(
                'INSERT INTO tasks (title, description, status, priority) VALUES (?, ?, ?, ?)',
                [title, description || null, status || 'pending', priority || 'medium']
            );
            const [rows] = await mysqlPool().query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
            task = formatSQLTask(rows[0]);
        } else if (DB_TYPE === 'postgres' || DB_TYPE === 'postgresql') {
            const result = await pgPool().query(
                'INSERT INTO tasks (title, description, status, priority) VALUES ($1, $2, $3, $4) RETURNING *',
                [title, description || null, status || 'pending', priority || 'medium']
            );
            task = formatSQLTask(result.rows[0]);
        }

        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message
        });
    }
};

// UPDATE task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, priority } = req.body;

        let task;

        if (DB_TYPE === 'mongodb') {
            task = await Task.findByIdAndUpdate(
                id,
                { title, description, status, priority },
                { new: true, runValidators: true }
            );

            if (!task) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }
        } else if (DB_TYPE === 'mysql') {
            const updateFields = [];
            const values = [];

            if (title !== undefined) {
                updateFields.push('title = ?');
                values.push(title);
            }
            if (description !== undefined) {
                updateFields.push('description = ?');
                values.push(description);
            }
            if (status !== undefined) {
                updateFields.push('status = ?');
                values.push(status);
            }
            if (priority !== undefined) {
                updateFields.push('priority = ?');
                values.push(priority);
            }

            if (updateFields.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'No fields to update'
                });
            }

            values.push(id);
            const [result] = await mysqlPool().query(
                `UPDATE tasks SET ${updateFields.join(', ')} WHERE id = ?`,
                values
            );

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }

            const [rows] = await mysqlPool().query('SELECT * FROM tasks WHERE id = ?', [id]);
            task = formatSQLTask(rows[0]);
        } else if (DB_TYPE === 'postgres' || DB_TYPE === 'postgresql') {
            const updateFields = [];
            const values = [];
            let paramCount = 1;

            if (title !== undefined) {
                updateFields.push(`title = $${paramCount++}`);
                values.push(title);
            }
            if (description !== undefined) {
                updateFields.push(`description = $${paramCount++}`);
                values.push(description);
            }
            if (status !== undefined) {
                updateFields.push(`status = $${paramCount++}`);
                values.push(status);
            }
            if (priority !== undefined) {
                updateFields.push(`priority = $${paramCount++}`);
                values.push(priority);
            }

            if (updateFields.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'No fields to update'
                });
            }

            values.push(id);
            const result = await pgPool().query(
                `UPDATE tasks SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = $${paramCount} RETURNING *`,
                values
            );

            if (result.rows.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }

            task = formatSQLTask(result.rows[0]);
        }

        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating task',
            error: error.message
        });
    }
};

// DELETE task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        if (DB_TYPE === 'mongodb') {
            const task = await Task.findByIdAndDelete(id);

            if (!task) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }
        } else if (DB_TYPE === 'mysql') {
            const [result] = await mysqlPool().query('DELETE FROM tasks WHERE id = ?', [id]);

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }
        } else if (DB_TYPE === 'postgres' || DB_TYPE === 'postgresql') {
            const result = await pgPool().query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);

            if (result.rows.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found'
                });
            }
        }

        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting task',
            error: error.message
        });
    }
};

// DELETE all tasks
exports.deleteAllTasks = async (req, res) => {
    try {
        let result;

        if (DB_TYPE === 'mongodb') {
            result = await Task.deleteMany({});
        } else if (DB_TYPE === 'mysql') {
            [result] = await mysqlPool().query('DELETE FROM tasks');
        } else if (DB_TYPE === 'postgres' || DB_TYPE === 'postgresql') {
            result = await pgPool().query('DELETE FROM tasks');
        }

        res.status(200).json({
            success: true,
            message: 'All tasks deleted successfully',
            deletedCount: result.deletedCount || result.affectedRows || result.rowCount
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting tasks',
            error: error.message
        });
    }
};
