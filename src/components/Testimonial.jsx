import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonial({ name, role, review, rating = 5, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="glass-card rounded-2xl p-6 flex flex-col justify-between"
    >
      <div>
        <Quote className="text-primary-500/40 mb-4" size={32} />
        <p className="text-gray-300 text-sm leading-relaxed mb-6">"{review}"</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-black font-bold text-sm">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm text-white">{name}</p>
            <p className="text-gray-500 text-xs">{role}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
