import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function FormInput({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  error,
  success,
  placeholder,
  required = false,
  icon: Icon,
  disabled = false,
  className = '',
}) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type

  const baseClasses = `w-full px-4 py-3.5 rounded-xl bg-dark-200 border-2 transition-all duration-300 outline-none font-medium`
  const stateClasses = error
    ? 'border-red-500 focus:border-red-500'
    : success
    ? 'border-primary-500 focus:border-primary-500'
    : 'border-dark-300 focus:border-primary-500'

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 ml-1">
          {label}
          {required && <span className="text-primary-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {Icon && <Icon size={20} />}
        </div>
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={`${baseClasses} ${stateClasses} ${
            Icon ? 'pl-12 pr-12' : 'pr-12'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : 'text-white'}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
        {success && !isPassword && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm ml-1 animate-pulse">{error}</p>
      )}
    </div>
  )
}