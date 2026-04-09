import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, Check, ChevronRight, Star, Shield, Car } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const services = [
  {
    name: 'Valet Parking',
    price: '₹149/hr',
    description: 'Professional valet at hotels, malls, restaurants',
  },
  {
    name: 'Personal Driver',
    price: '₹299/hr',
    description: 'Chauffeur for commute, airport, outstation',
  },
  {
    name: 'Event Valet',
    price: '₹199/hr',
    description: 'Wedding & corporate event valet services',
  },
  {
    name: 'Corporate',
    price: '₹399/hr',
    description: 'Monthly subscription for offices',
  },
]

const venues = [
  { name: 'The Leela Palace', type: 'Hotel' },
  { name: 'Taj Coromandel', type: 'Hotel' },
  { name: 'Phoenix Marketcity', type: 'Mall' },
  { name: 'Express Avenue', type: 'Mall' },
  { name: 'ITC Grand Chola', type: 'Hotel' },
  { name: 'Park Hyatt', type: 'Hotel' },
]

const features = [
  { icon: Clock, title: '24/7 Service', desc: 'Available round the clock' },
  { icon: Shield, title: 'Fully Insured', desc: 'Every booking insured' },
  { icon: Car, title: 'Verified Drivers', desc: 'Background-checked pros' },
  { icon: Star, title: '4.9 Rating', desc: 'Top-rated service' },
]

export default function LocationChennai() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-500/4 rounded-full blur-2xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-primary-500 text-sm font-semibold mb-4">
            <MapPin size={16} />
            Tamil Nadu, India
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="section-title mb-6">
              Premium Valet Services<br />
              in <span className="gradient-text">Chennai</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mb-8">
              Experience luxury valet parking and professional driver services across Chennai. 
              From T Nagar to OMR, we serve at premium hotels, restaurants, malls, and corporate campuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-8">
                Book Now <ChevronRight size={16} />
              </Link>
              <a href="tel:+91842852015" className="btn-outline inline-flex items-center gap-2 text-sm py-3 px-8">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center gradient-border"
              >
                <f.icon className="text-primary-500 mx-auto mb-3" size={24} />
                <p className="font-semibold text-white">{f.title}</p>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Services</span>
            <h2 className="section-title mt-3">What We Offer in Chennai</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 gradient-border"
              >
                <h3 className="font-bold text-white text-lg mb-2">{s.name}</h3>
                <p className="font-display font-black text-2xl gradient-text mb-2">{s.price}</p>
                <p className="text-gray-400 text-sm">{s.description}</p>
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
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Where We Serve</span>
            <h2 className="section-title mt-3">Popular Venues in Chennai</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, i) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-4 gradient-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-500" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">{venue.name}</p>
                  <p className="text-gray-500 text-sm">{venue.type}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            + Many more restaurants, malls, and corporate offices across Chennai
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">Book Valet in Chennai Today</h2>
            <p className="text-gray-400 mb-8">
              Serving all major areas: T Nagar, Nungambakkam, Anna Nagar, OMR, Mount Road, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-8">
                Book Now <ChevronRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline inline-flex items-center gap-2 text-sm py-3 px-8">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}