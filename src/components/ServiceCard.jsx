import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, description, price, features = [], delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 group cursor-pointer gradient-border"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
        <Icon className="text-primary-500" size={24} />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-xl text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

      {/* Price */}
      {price && (
        <div className="mb-4">
          <span className="text-primary-500 font-bold text-lg">{price}</span>
          <span className="text-gray-500 text-sm ml-1">onwards</span>
        </div>
      )}

      {/* Features */}
      {features.length > 0 && (
        <ul className="flex flex-col gap-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Hover line accent */}
      <div className="w-0 group-hover:w-full h-px bg-gradient-to-r from-primary-500 to-transparent mt-4 transition-all duration-500" />
    </motion.div>
  )
}
