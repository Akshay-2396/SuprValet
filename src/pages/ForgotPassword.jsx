import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, KeyRound, CheckCircle } from 'lucide-react'
import { useAuth } from '../models/authContext'
import { validateEmail } from '../controllers/validation'
import FormInput from '../views/components/FormInput'
import Button from '../views/components/Button'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { forgotPassword } = useAuth()

  const handleChange = (e) => {
    setEmail(e.target.value)
    if (error) setError('')
  }

  const handleBlur = (e) => {
    const value = e.target.value
    const emailError = validateEmail(value)
    if (emailError) setError(emailError)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const emailError = validateEmail(email)

    if (emailError) {
      setError(emailError)
      return
    }

    setLoading(true)
    setError('')

    try {
      await forgotPassword(email)
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md text-center"
        >
          <div className="bg-dark-200 rounded-3xl border border-dark-300 p-8 shadow-card">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary-500/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary-500" />
            </div>
            <h1 className="text-2xl font-display font-bold text-white mb-4">
              Reset Link <span className="text-primary-500">Sent</span>
            </h1>
            <p className="text-gray-400 mb-8">
              We've sent a password reset link to{' '}
              <span className="text-white font-medium">{email}</span>
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <Link
              to="/login"
              className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
            >
              Back to Sign In
            </Link>
          </div>
        </motion.div>
      </div>
    )
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
              Reset <span className="text-primary-500">Password</span>
            </h1>
            <p className="text-gray-400">
              Enter your email to receive a reset link
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 text-sm"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={error}
              placeholder="Enter your email"
              required
              icon={Mail}
            />

            <Button
              type="submit"
              fullWidth
              loading={loading}
              icon={KeyRound}
            >
              Send Reset Link
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Remember your password?{' '}
              <Link
                to="/login"
                className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}