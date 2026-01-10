import { useDispatch, useSelector } from 'react-redux'

// Lightweight wrappers for consistent imports across the app
export const useAppDispatch = () => useDispatch()
export const useAppSelector = (selector) => useSelector(selector)

export default { useAppDispatch, useAppSelector }
