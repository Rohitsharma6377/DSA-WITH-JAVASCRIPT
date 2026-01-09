import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, createTask, updateTask, deleteTask } from '../redux/slices/taskSlice'
import TaskCard from '../components/tasks/TaskCard'
import TaskForm from '../components/tasks/TaskForm'
import Loader from '../components/common/Loader'
import Button from '../components/common/Button'

const Tasks = () => {
    const dispatch = useDispatch()
    const { items: tasks, loading } = useSelector((state) => state.tasks)
    const [showForm, setShowForm] = useState(false)
    const [editingTask, setEditingTask] = useState(null)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    const handleCreateTask = (taskData) => {
        dispatch(createTask(taskData))
        setShowForm(false)
    }

    const handleUpdateTask = (taskData) => {
        dispatch(updateTask({ id: editingTask.id || editingTask._id, data: taskData }))
        setEditingTask(null)
        setShowForm(false)
    }

    const handleEditClick = (task) => {
        setEditingTask(task)
        setShowForm(true)
    }

    const handleDeleteTask = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            dispatch(deleteTask(id))
        }
    }

    const handleCancelForm = () => {
        setShowForm(false)
        setEditingTask(null)
    }

    return (
        <div className="animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Task Management</h1>
                    <p className="text-gray-600 mt-2">Manage your tasks efficiently</p>
                </div>
                <Button
                    onClick={() => setShowForm(!showForm)}
                    variant={showForm ? 'secondary' : 'primary'}
                >
                    {showForm ? 'Cancel' : '+ New Task'}
                </Button>
            </div>

            {/* Task Form */}
            {showForm && (
                <div className="mb-8 animate-slide-up">
                    <TaskForm
                        task={editingTask}
                        onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
                        onCancel={handleCancelForm}
                    />
                </div>
            )}

            {/* Loading State */}
            {loading && <Loader />}

            {/* Tasks Grid */}
            {!loading && tasks.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id || task._id}
                            task={task}
                            onEdit={handleEditClick}
                            onDelete={handleDeleteTask}
                        />
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && tasks.length === 0 && (
                <div className="text-center py-16">
                    <svg
                        className="w-24 h-24 mx-auto text-gray-300 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No tasks yet</h3>
                    <p className="text-gray-500 mb-4">Get started by creating your first task</p>
                    <Button onClick={() => setShowForm(true)}>Create Task</Button>
                </div>
            )}
        </div>
    )
}

export default Tasks
