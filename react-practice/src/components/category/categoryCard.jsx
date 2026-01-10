import PropTypes from "prop-types";


const CategoryCard = ({category, onEdit , onDelete})=>{

    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        'in-progress': 'bg-blue-100 text-blue-800 border-blue-300',
        completed: 'bg-green-100 text-green-800 border-green-300',
    }

        const priorityColors = {
        low: 'bg-gray-100 text-gray-800',
        medium: 'bg-orange-100 text-orange-800',
        high: 'bg-red-100 text-red-800',
    }


    return(
       <>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
               <div className="flex gap-2">
                <button onClick={()=>onEdit(category)} className="text-blue-600 hover:text-blue-800 transition-colors" title="Edit">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                </button>
                <button onClick={()=>onDelete(category.id ||category._id)} 
                className="text-red-600 hover:text-red-800 transition-colors" title="Delete">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                </button>                
               </div>
             </div>
        </div>

        {category.description && (
            <p>{category.description}</p>
        )}
       <div>
           <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[category.status]}`}>
                {category.status}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[category.priority]}`}>
                {category.priority} priority
            </span>
       </div>

       <div>
        Created: {new Date(category.createdAt || category.created_at).toLocaleDateString()}
       </div>

       </>
    )
}



CategoryCard.propTypes={
    category:PropTypes.shape({
        id:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        _id:PropTypes.string,
        name:PropTypes.string.isRequired,
        description:PropTypes.string,
        status:PropTypes.string,
        priority:PropTypes.string,
        createdAt:PropTypes.string,
        created_at:PropTypes.string,
    }),
    onEdit:PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired,
}