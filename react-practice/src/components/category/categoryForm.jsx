import {useState, useEffect, use} from 'react';
import PropTypes from 'prop-types';


const CategoryFrom = ({category , onSubmit, onCancel})=>{
    const [formData ,setFormData] = useState({
        name: '',
        description: '',
        status: 'pending',
        priority: 'medium',
    })
}

useEffect(()=>{
    if(category){
        setFormData({
            name: category.name || '',
            description: category.description || '',
            status: category.status || 'pending',
            priority: category.priority || 'medium',
        })
    }
}, [category]);

const handleChange = (e)=>{
    const {name , value} = e.target;
    setFormData((prev)=>({
        ...prev,
        [name]: value,
    }))
}


const handleSubmit = (e)=>{
    e.preventDefault();
    onSubmit(formData);
    if(!category){
        setFormData({
            name: '',
            description: '',
            status: 'pending',
            priority: 'medium',
        })
    }
}


return(
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <h2>{category ? 'Edit Category' : 'Add Category'}</h2>

        <div>
            <div>
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
        <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter task description"
                    />
                </div>

                {/* Status */}
                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                {/* Priority */}
                <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                        Priority
                    </label>
                    <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
                <button
                    type="submit"
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                    {task ? 'Update Task' : 'Create Task'}
                </button>
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                    >
                        Cancel
                    </button>
                )}
            </div>
    </form>
)

CategoryFrom.propTypes = {
    category: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
}
export default CategoryFrom;