const Category = require('../models/Category');

const formatCategory = (c) => ({
    id: c._id,
    name: c.name,
    description: c.description,
    status: c.status,
    priority: c.priority,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,
});

// GET all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: categories.length, data: categories.map(formatCategory) });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching categories', error: error.message });
    }
};

// GET category by id
exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
        res.status(200).json({ success: true, data: formatCategory(category) });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching category', error: error.message });
    }
};

// CREATE category
exports.createCategory = async (req, res) => {
    try {
        const { name, description, status, priority } = req.body;
        if (!name) return res.status(400).json({ success: false, message: 'Name is required' });
        const category = await Category.create({ name, description, status: status || 'active', priority: priority || 'medium' });
        res.status(201).json({ success: true, message: 'Category created successfully', data: formatCategory(category) });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating category', error: error.message });
    }
};

// UPDATE category
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, status, priority } = req.body;
        const updates = {};
        if (name !== undefined) updates.name = name;
        if (description !== undefined) updates.description = description;
        if (status !== undefined) updates.status = status;
        if (priority !== undefined) updates.priority = priority;

        if (Object.keys(updates).length === 0) return res.status(400).json({ success: false, message: 'No fields to update' });

        const category = await Category.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
        res.status(200).json({ success: true, message: 'Category updated', data: formatCategory(category) });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating category', error: error.message });
    }
};

// DELETE category
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
        res.status(200).json({ success: true, message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting category', error: error.message });
    }
};

// DELETE all categories
exports.deleteAllCategories = async (req, res) => {
    try {
        const result = await Category.deleteMany({});
        res.status(200).json({ success: true, message: 'All categories deleted', deletedCount: result.deletedCount });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting categories', error: error.message });
    }
};

