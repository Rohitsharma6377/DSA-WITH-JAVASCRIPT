import axiosInstance from './axios'

// Task API endpoints
export const taskAPI = {
    getAllTasks: () => axiosInstance.get('/api/tasks'),
    getTaskById: (id) => axiosInstance.get(`/api/tasks/${id}`),
    createTask: (data) => axiosInstance.post('/api/tasks', data),
    updateTask: (id, data) => axiosInstance.put(`/api/tasks/${id}`, data),
    deleteTask: (id) => axiosInstance.delete(`/api/tasks/${id}`),
    deleteAllTasks: () => axiosInstance.delete('/api/tasks'),
}

// User API endpoints (example)
export const userAPI = {
    login: (credentials) => axiosInstance.post('/api/auth/login', credentials),
    register: (userData) => axiosInstance.post('/api/auth/register', userData),
    getProfile: () => axiosInstance.get('/api/auth/profile'),
    updateProfile: (data) => axiosInstance.put('/api/auth/profile', data),
}

// Health check
export const healthAPI = {
    check: () => axiosInstance.get('/health'),
}

export default {
    taskAPI,
    userAPI,
    healthAPI,
}
