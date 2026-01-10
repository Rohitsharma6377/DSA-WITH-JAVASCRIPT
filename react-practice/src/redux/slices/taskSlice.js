import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { taskAPI } from '../../services/api'
import { toast } from 'react-toastify'

// Async thunks
export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await taskAPI.getAllTasks()
            return response.data
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to fetch tasks')
            return rejectWithValue(error.response?.data)
        }
    }
)

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (taskData, { rejectWithValue }) => {
        try {
            const response = await taskAPI.createTask(taskData)
            toast.success('Task created successfully!')
            return response.data
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to create task')
            return rejectWithValue(error.response?.data)
        }
    }
)

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const response = await taskAPI.updateTask(id, data)
            toast.success('Task updated successfully!')
            return response.data
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to update task')
            return rejectWithValue(error.response?.data)
        }
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id, { rejectWithValue }) => {
        try {
            await taskAPI.deleteTask(id)
            toast.success('Task deleted successfully!')
            return id
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to delete task')
            return rejectWithValue(error.response?.data)
        }
    }
)

// Slice
const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        loading: false,
        error: null,
        selectedTask: null,
    },
    reducers: {
        setSelectedTask: (state, action) => {
            state.selectedTask = action.payload
        },
        clearSelectedTask: (state) => {
            state.selectedTask = null
        },
        clearError: (state) => {
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch tasks
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload.data || []
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // Create task
            .addCase(createTask.pending, (state) => {
                state.loading = true
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false
                state.items.unshift(action.payload.data)
            })
            .addCase(createTask.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // Update task
            .addCase(updateTask.pending, (state) => {
                state.loading = true
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.loading = false
                const index = state.items.findIndex(
                    (task) => task.id === action.payload.data.id || task._id === action.payload.data._id
                )
                if (index !== -1) {
                    state.items[index] = action.payload.data
                }
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // Delete task
            .addCase(deleteTask.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.loading = false
                state.items = state.items.filter(
                    (task) => task.id !== action.payload && task._id !== action.payload
                )
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})

export const { setSelectedTask, clearSelectedTask, clearError } = taskSlice.actions
export default taskSlice.reducer

// Selectors
export const selectTasks = (state) => state.tasks.items
export const selectTasksLoading = (state) => state.tasks.loading
export const selectTasksError = (state) => state.tasks.error
export const selectSelectedTask = (state) => state.tasks.selectedTask
