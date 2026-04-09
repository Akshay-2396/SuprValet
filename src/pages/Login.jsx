import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Mail, Lock, LogIn } from 'lucide-react'
import { useAuth } from '../models/authContext'
import { validateName, validateEmail, validatePassword } from '../controllers/validation'
import FormInput from '../views/components/FormInput'
import Button from '../views/components/Button'

export default function Login() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const { login, redirectAfterLogin, clearRedirect } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = redirectAfterLogin || location.state?.from?.pathname || '/dashboard'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    let error = ''
    if (name === 'name') error = validateName(value)
    if (name === 'email') error = validateEmail(value)
    if (name === 'password') error = validatePassword(value)
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)

    if (nameError || emailError || passwordError) {
      setErrors({ name: nameError, email: emailError, password: passwordError })
      return
    }

    setLoading(true)
    setErrors({})

    try {
      await login(formData.name, formData.email, formData.password)
      setSuccessMessage('Login successful!')
      clearRedirect()
      navigate(from, { replace: true })
    } catch (error) {
      setErrors({ general: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-dark-200 rounded-3xl border border-dark-300 p-8 shadow-card">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold text-white mb-2">
              Welcome <span className="text-primary-500">Back</span>
            </h1>
            <p className="text-gray-400">Sign in to access your account</p>
          </div>

          {errors.general && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 text-sm"
            >
              {errors.general}
            </motion.div>
          )}

          {successMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-primary-500/10 border border-primary-500/30 rounded-xl text-primary-500 text-sm"
            >
              {successMessage}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              placeholder="Enter your full name"
              required
              icon={User}
            />

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              placeholder="Enter your email"
              required
              icon={Mail}
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              placeholder="Enter your password"
              required
              icon={Lock}
            />

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-primary-500 hover:text-primary-400 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              fullWidth
              loading={loading}
              icon={LogIn}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}