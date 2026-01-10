const Task = require('../models/Task');

// GET all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: tasks.length, data: tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching tasks', error: error.message });
    }
};

// GET single task by ID
exports.getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        res.status(200).json({ success: true, data: task });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching task', error: error.message });
    }
};

// CREATE new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;

        if (!title) {
            return res.status(400).json({ success: false, message: 'Title is required' });
        }

        const task = await Task.create({
            title,
            description,
            status: status || 'pending',
            priority: priority || 'medium'
        });

        res.status(201).json({ success: true, message: 'Task created successfully', data: task });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating task', error: error.message });
    }
};

// UPDATE task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, priority } = req.body;

        const updates = {};
        if (title !== undefined) updates.title = title;
        if (description !== undefined) updates.description = description;
        if (status !== undefined) updates.status = status;
        if (priority !== undefined) updates.priority = priority;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ success: false, message: 'No fields to update' });
        }

        const task = await Task.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }

        res.status(200).json({ success: true, message: 'Task updated successfully', data: task });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating task', error: error.message });
    }
};

// DELETE task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        res.status(200).json({ success: true, message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting task', error: error.message });
    }
};

// DELETE all tasks
exports.deleteAllTasks = async (req, res) => {
    try {
        const result = await Task.deleteMany({});
        res.status(200).json({ success: true, message: 'All tasks deleted successfully', deletedCount: result.deletedCount });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting tasks', error: error.message });
    }
};
