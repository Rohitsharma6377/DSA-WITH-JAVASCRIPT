// Validate email
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

// Validate password (min 8 chars, 1 uppercase, 1 lowercase, 1 number)
export const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
}

// Validate required field
export const isRequired = (value) => {
    return value !== null && value !== undefined && value.toString().trim() !== ''
}

// Validate min length
export const minLength = (value, min) => {
    return value && value.toString().length >= min
}

// Validate max length
export const maxLength = (value, max) => {
    return value && value.toString().length <= max
}
