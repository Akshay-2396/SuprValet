import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const userData = {
            id: '1',
            name: name || email.split('@')[0],
            email,
            createdAt: new Date().toISOString(),
          }
          localStorage.setItem('user', JSON.stringify(userData))
          setUser(userData)
          resolve(userData)
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 1000)
    })
  }

  const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const userData = {
            id: Date.now().toString(),
            name,
            email,
            createdAt: new Date().toISOString(),
          }
          localStorage.setItem('user', JSON.stringify(userData))
          setUser(userData)
          resolve(userData)
        } else {
          reject(new Error('Please fill all fields'))
        }
      }, 1000)
    })
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  const forgotPassword = (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Reset link sent to ' + email })
      }, 1000)
    })
  }

  const setRedirect = (path) => {
    setRedirectAfterLogin(path)
  }

  const clearRedirect = () => {
    setRedirectAfterLogin(null)
  }

  const value = {
    user,
    loading,
    redirectAfterLogin,
    login,
    register,
    logout,
    forgotPassword,
    setRedirect,
    clearRedirect,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}