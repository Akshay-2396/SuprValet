import { motion } from 'framer-motion'
import BookingForm from '../components/BookingForm'
import { Clock, Shield, Star, Headphones } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const perks = [
  { icon: Clock, label: 'Instant Confirmation', desc: 'Get confirmed in under 60 seconds' },
  { icon: Shield, label: 'Free Cancellation', desc: 'Cancel up to 2 hours before service' },
  { icon: Star, label: 'Premium Drivers', desc: 'Background-verified professionals only' },
  { icon: Headphones, label: '24/7 Support', desc: 'We\'re always here to help you' },
]

export default function Booking() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Book a Service</span>
            <h1 className="section-title mt-3 mb-4">Book Your<br /><span className="gradient-text">Premium Service</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Fill out the form below and get an instant price estimate. Our team will confirm within minutes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 glass-card rounded-3xl p-8 gradient-border"
            >
              <h2 className="font-display font-bold text-2xl text-white mb-8">Booking Details</h2>
              <BookingForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="glass-card rounded-2xl p-6 gradient-border">
                <h3 className="font-display font-bold text-lg text-white mb-4">Why Book with Us</h3>
                <div className="flex flex-col gap-4">
                  {perks.map((p) => (
                    <div key={p.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <p.icon size={16} className="text-primary-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{p.label}</p>
                        <p className="text-xs text-gray-500">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 gradient-border">
                <h3 className="font-display font-bold text-lg text-white mb-4">Pricing Guide</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Valet Parking', price: '₹149/hr' },
                    { label: 'Personal Driver', price: '₹299/hr' },
                    { label: 'Event Valet', price: '₹199/hr' },
                    { label: 'Corporate', price: '₹399/hr' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-sm text-gray-400">{item.label}</span>
                      <span className="text-sm font-bold text-primary-500">{item.price}</span>
                    </div>
                  ))}
                  <p className="text-xs text-gray-600 mt-2">
                    🏷️ 10% off for 4+ hrs · 20% off for 8+ hrs
                  </p>
                </div>
              </div>

              <div className="rounded-2xl p-6 text-center" style={{ background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.2)' }}>
                <p className="text-sm text-gray-400 mb-1">Need a custom quote?</p>
                <p className="font-bold text-white mb-3">Call or WhatsApp Us</p>
                <a
                  href="tel:+91842852015"
                  className="btn-primary block text-sm py-2.5"
                >
                  +91 842852015
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}