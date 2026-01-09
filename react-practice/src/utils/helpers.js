// Debounce function
export const debounce = (func, delay = 300) => {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func(...args), delay)
    }
}

// Throttle function
export const throttle = (func, limit = 300) => {
    let inThrottle
    return (...args) => {
        if (!inThrottle) {
            func(...args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

// Deep clone object
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

// Generate unique ID
export const generateId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Capitalize first letter
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// Truncate text
export const truncate = (str, length = 50) => {
    return str.length > length ? `${str.substring(0, length)}...` : str
}
