import { motion } from 'framer-motion'
import { Check, X, Clock, Shield, Info } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const pricingPlans = [
  {
    name: 'Valet Parking',
    price: '₹149',
    unit: '/hour',
    description: 'Perfect for hotels, restaurants, malls, and events',
    features: [
      { name: 'Professional valet attendant', included: true },
      { name: 'Real-time car tracking', included: true },
      { name: 'Fully insured service', included: true },
      { name: '24/7 availability', included: true },
      { name: 'Swift key handover', included: true },
      { name: 'Multiple locations', included: false },
    ],
    cta: 'Book Valet',
    popular: false,
  },
  {
    name: 'Personal Driver',
    price: '₹299',
    unit: '/hour',
    description: 'For daily commute, airport transfers, and outstation trips',
    features: [
      { name: 'Background-verified driver', included: true },
      { name: 'Uniformed chauffeur', included: true },
      { name: 'GPS tracking', included: true },
      { name: 'Hourly/daily packages', included: true },
      { name: 'Airport transfers', included: true },
      { name: 'Outstation available', included: true },
    ],
    cta: 'Hire Driver',
    popular: true,
  },
  {
    name: 'Event Valet',
    price: '₹199',
    unit: '/hour',
    description: 'Professional valet management for weddings and corporate events',
    features: [
      { name: 'Handles 50-500+ cars', included: true },
      { name: 'Dedicated event coordinator', included: true },
      { name: 'Custom branding', included: true },
      { name: 'Pre-event planning', included: true },
      { name: 'Multi-lane entry setup', included: true },
      { name: 'Post-event report', included: true },
    ],
    cta: 'Get Quote',
    popular: false,
  },
  {
    name: 'Corporate',
    price: '₹399',
    unit: '/hour',
    description: 'Monthly subscriptions for offices and corporate campuses',
    features: [
      { name: 'Dedicated fleet assignment', included: true },
      { name: 'Monthly billing', included: true },
      { name: 'Analytics dashboard', included: true },
      { name: 'Priority support', included: true },
      { name: 'Employee portal', included: true },
      { name: 'Custom SLA', included: true },
    ],
    cta: 'Contact Us',
    popular: false,
  },
]

const pricingDetails = [
  {
    title: 'Base Price',
    icon: Clock,
    items: [
      { label: 'Valet Parking', price: '₹149/hr' },
      { label: 'Personal Driver', price: '₹299/hr' },
      { label: 'Event Valet', price: '₹199/hr' },
      { label: 'Corporate', price: '₹399/hr' },
    ],
  },
  {
    title: 'Night Charges (10 PM - 6 AM)',
    icon: Shield,
    items: [
      { label: 'Additional per hour', price: '+₹50/hr' },
    ],
  },
  {
    title: 'Peak Charges (Festival Days)',
    icon: Info,
    items: [
      { label: 'Surge pricing', price: '1.5x' },
    ],
  },
]

const discounts = [
  { label: '4+ hours booking', discount: '10% off' },
  { label: '8+ hours booking', discount: '20% off' },
  { label: 'Monthly corporate', discount: 'Custom' },
]

const cancellationPolicy = [
  { condition: 'Free cancellation', detail: 'Up to 2 hours before service' },
  { condition: 'Partial charge', detail: 'Within 2 hours - 50% fee' },
  { condition: 'No refund', detail: 'After driver arrives / No-show' },
]

export default function Pricing() {
  const navigate = useNavigate()

  const handleCtaClick = (cta) => {
    if (cta === 'Contact Sales') {
      window.open('https://wa.me/918428527015?text=Hi, I want to know more about your corporate services', '_blank')
    } else if (cta === 'Get Quote') {
      window.open('https://wa.me/918428527015?text=Hi, I want to get a quote for event valet services', '_blank')
    } else {
      navigate('/booking')
    }
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Pricing</span>
            <h1 className="section-title mt-3 mb-4">Simple, Transparent<br /><span className="gradient-text">Pricing</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              No hidden fees. No surprises. Just premium service at transparent prices.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-3xl p-6 gradient-border relative ${
                  plan.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 rounded-full text-xs font-bold text-black">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-bold text-xl text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="font-display font-black text-4xl gradient-text">{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.unit}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      {feature.included ? (
                        <Check size={16} className="text-primary-500 flex-shrink-0" />
                      ) : (
                        <X size={16} className="text-gray-600 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleCtaClick(plan.cta)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-primary-500 text-black hover:bg-primary-400'
                      : 'bg-dark-200 text-white hover:bg-dark-300 border border-dark-300'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Price Breakdown</span>
            <h2 className="section-title mt-3">Understanding Our Pricing</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingDetails.map((detail, i) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 gradient-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <detail.icon className="text-primary-500" size={18} />
                  </div>
                  <h3 className="font-bold text-white">{detail.title}</h3>
                </div>
                <div className="space-y-3">
                  {detail.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <span className="text-primary-500 font-semibold text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass-card rounded-2xl p-6 gradient-border"
          >
            <h3 className="font-bold text-white text-lg mb-6 text-center">Discounts & Offers</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {discounts.map((d, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={16} className="text-primary-500" />
                  <span className="text-gray-300">{d.label}</span>
                  <span className="text-primary-500 font-bold">{d.discount}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Policy</span>
            <h2 className="section-title mt-3">Cancellation Policy</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 gradient-border"
          >
            <div className="space-y-4">
              {cancellationPolicy.map((policy, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                  <div>
                    <span className="font-semibold text-white">{policy.condition}</span>
                    <p className="text-gray-400 text-sm mt-1">{policy.detail}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    i === 0 ? 'bg-green-500' : i === 1 ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-dark-100/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">Need a Custom Quote?</h2>
            <p className="text-gray-400 mb-8">
              For corporate events, weddings, or large-scale bookings, we offer customized pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                Contact Us
              </a>
              <a href="tel:+91842852015" className="btn-outline inline-flex items-center gap-2">
                Call: +91 842852015
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}