const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type : String,
        require:[true,]
    },
    description:{
        type: String
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    priority:{
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    }

},
{    timestamps: true
});

const Category = mongoose.model('Category' , categorySchema)
