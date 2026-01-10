import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './slices/taskSlice'
import userReducer from './slices/userSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import categoryReducer from './slices/categorySlice'
export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        user: userReducer,
        categories: categoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
