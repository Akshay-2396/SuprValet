import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  fullWidth = false,
  icon: Icon,
}) {
  const baseClasses = `relative font-bold rounded-full transition-all duration-300 outline-none flex items-center justify-center gap-2`

  const variants = {
    primary: `bg-primary-500 text-black hover:bg-primary-400 shadow-glow hover:shadow-glow-lg`,
    secondary: `bg-dark-200 text-white border-2 border-dark-300 hover:border-primary-500`,
    outline: `border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black`,
    ghost: `text-gray-300 hover:text-white hover:bg-white/5`,
    danger: `bg-red-600 text-white hover:bg-red-500`,
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledClasses = disabled || loading
    ? 'opacity-50 cursor-not-allowed hover:transform-none'
    : 'hover:-translate-y-0.5 active:translate-y-0'

  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {Icon && <Icon size={20} />}
          {children}
        </>
      )}
    </motion.button>
  )
}