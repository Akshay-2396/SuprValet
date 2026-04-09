export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    return 'Email is required'
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address'
  }
  return null
}

export const validatePassword = (password) => {
  if (!password) {
    return 'Password is required'
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters'
  }
  return null
}

export const validateName = (name) => {
  if (!name) {
    return 'Name is required'
  }
  if (name.length < 2) {
    return 'Name must be at least 2 characters'
  }
  return null
}

export const validatePhone = (phone) => {
  if (!phone) {
    return 'Phone number is required'
  }
  const phoneRegex = /^[6-9]\d{9}$/
  if (!phoneRegex.test(phone)) {
    return 'Please enter a valid 10-digit phone number'
  }
  return null
}

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return 'Please confirm your password'
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match'
  }
  return null
}

export const getPasswordStrength = (password) => {
  if (!password) return { strength: 0, label: '', color: '' }

  let strength = 0
  if (password.length >= 6) strength += 25
  if (password.length >= 8) strength += 25
  if (/[A-Z]/.test(password)) strength += 15
  if (/[0-9]/.test(password)) strength += 15
  if (/[^A-Za-z0-9]/.test(password)) strength += 20

  let label, color
  if (strength < 30) {
    label = 'Weak'
    color = 'bg-red-500'
  } else if (strength < 60) {
    label = 'Fair'
    color = 'bg-yellow-500'
  } else if (strength < 80) {
    label = 'Good'
    color = 'bg-blue-500'
  } else {
    label = 'Strong'
    color = 'bg-primary-500'
  }

  return { strength, label, color }
}