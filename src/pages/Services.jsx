import { motion } from 'framer-motion'
import { Car, User2, PartyPopper, Building2, Check, ChevronRight, Clock, Shield, Star, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const services = [
  {
    icon: Car,
    title: 'Valet Parking',
    tagline: 'Park Smart, Live Easy',
    description:
      'Our professional valet attendants handle your car with absolute care. From luxury hotels to busy restaurants — we are here 24/7 to make parking effortless.',
    price: '₹149',
    unit: '/hour',
    color: 'from-primary-500/20 to-transparent',
    accent: '#00C853',
    features: [
      'Uniformed & trained valets',
      'Real-time car tracking',
      'Fully insured service',
      '24/7 availability',
      'Hotels, malls & restaurants',
      'Swift key handover',
    ],
  },
  {
    icon: User2,
    title: 'Personal Driver',
    tagline: 'Your Chauffeur, On Demand',
    description:
      'Hire a professional personal driver for your daily commute, airport transfers, business meetings, or outstation travel. Our chauffeurs are background-verified and trained.',
    price: '₹299',
    unit: '/hour',
    color: 'from-blue-500/10 to-transparent',
    accent: '#3B82F6',
    features: [
      'Background-verified drivers',
      'Hourly, daily & outstation',
      'Airport & railway transfers',
      'Uniformed chauffeur',
      'GPS tracking',
      'Easy extension of hours',
    ],
  },
  {
    icon: PartyPopper,
    title: 'Event Valet',
    tagline: 'Elevate Every Occasion',
    description:
      'Make your events unforgettable with our premium valet management service. From intimate private parties to grand corporate events with 500+ guests.',
    price: '₹199',
    unit: '/hour',
    color: 'from-purple-500/10 to-transparent',
    accent: '#A855F7',
    features: [
      'Handles 50 to 500+ cars',
      'Custom branded uniforms',
      'Dedicated event coordinator',
      'Pre-event planning',
      'Multi-lane entry setup',
      'Post-event report',
    ],
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    tagline: 'Fleet Solutions for Business',
    description:
      'Monthly driver and valet subscriptions for offices, tech parks, and corporate campuses. Streamline your employee transport and parking management.',
    price: '₹399',
    unit: '/hour',
    color: 'from-orange-500/10 to-transparent',
    accent: '#F97316',
    features: [
      'Monthly subscription model',
      'Dedicated fleet assignment',
      'Employee portal access',
      'Real-time analytics',
      'Priority 24/7 support',
      'Custom SLA agreement',
    ],
  },
]

const whyUs = [
  { icon: Shield, label: 'Fully Insured', desc: 'Every booking is backed by comprehensive insurance.' },
  { icon: Star, label: '4.9/5 Rated', desc: 'Consistently top-rated by 50,000+ happy customers.' },
  { icon: Clock, label: '24/7 Service', desc: 'Round the clock availability, every day of the year.' },
  { icon: Zap, label: 'Instant Booking', desc: 'Book in under 2 minutes with real-time confirmations.' },
]

export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <h1 className="section-title mt-3 mb-4">Everything You Need,<br />Done Right</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Every service is designed with one goal: give you a premium, hassle-free experience every single time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-10 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ border: `1px solid ${service.accent}20` }}
            >
              {/* Left / Visual */}
              <div className="flex-1 flex flex-col justify-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}30` }}
                >
                  <service.icon size={28} style={{ color: service.accent }} />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: service.accent }}>
                  {service.tagline}
                </span>
                <h2 className="font-display font-black text-4xl text-white mb-4">{service.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">{service.description}</p>

                {/* Price */}
                <div className="flex items-end gap-2 mb-6">
                  <span className="font-display font-black text-5xl" style={{ color: service.accent }}>
                    {service.price}
                  </span>
                  <span className="text-gray-400 mb-2">{service.unit}</span>
                </div>

                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-full transition-all duration-300 w-fit"
                  style={{ background: service.accent, color: '#000', boxShadow: `0 0 20px ${service.accent}40` }}
                >
                  Book Now <ChevronRight size={16} />
                </Link>
              </div>

              {/* Right / Features */}
              <div className="flex-1 flex flex-col justify-center">
                <div
                  className="rounded-2xl p-6"
                  style={{ background: `${service.accent}08`, border: `1px solid ${service.accent}15` }}
                >
                  <h3 className="font-semibold text-white mb-4 text-lg">What's Included</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${service.accent}20` }}
                        >
                          <Check size={12} style={{ color: service.accent }} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Why SuprValet</span>
            <h2 className="section-title mt-3">The SuprValet Difference</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center gradient-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary-500" size={22} />
                </div>
                <h3 className="font-bold text-white mb-2">{item.label}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
