import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isAuthenticated: false,
        theme: 'light',
    },
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.currentUser = null
            state.isAuthenticated = false
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
    },
})

export const { setUser, logout, toggleTheme } = userSlice.actions
export default userSlice.reducer
