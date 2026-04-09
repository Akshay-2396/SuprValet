import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'
import { Car, User2, PartyPopper, Building2, ChevronRight } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const services = [
  {
    icon: Car,
    title: 'Valet Parking',
    description: 'Professional valet attendants park your car safely at hotels, malls, restaurants, and more.',
    price: '₹149/hr',
    features: ['Trained professionals', 'Real-time tracking', 'Insurance backed', '24/7 availability'],
  },
  {
    icon: User2,
    title: 'Personal Driver',
    description: 'Hire a personal chauffeur for daily commute, airport transfers, or outstation trips.',
    price: '₹299/hr',
    features: ['Verified drivers', 'Hourly/daily packages', 'Outstation available', 'Uniformed chauffeur'],
  },
  {
    icon: PartyPopper,
    title: 'Event Valet',
    description: 'Seamless valet management for weddings, corporate events, and private parties.',
    price: '₹199/hr',
    features: ['Bulk car handling', 'Custom branding', 'Event coordinators', 'Premium experience'],
  },
  {
    icon: Building2,
    title: 'Corporate',
    description: 'Monthly valet and driver subscription for offices and corporate campuses.',
    price: '₹399/hr',
    features: ['Monthly billing', 'Dedicated fleet', 'Priority support', 'Analytics dashboard'],
  },
]

const testimonials = [
  {
    name: 'Priya Mehta',
    role: 'Hotel GM · Mumbai',
    review: 'SuprValet transformed our guest experience. Our clients absolutely love the seamless valet service. Professional, on-time, and superbly managed.',
    rating: 5,
  },
  {
    name: 'Karan Patel',
    role: 'CEO · Patel Industries',
    review: 'We use SuprValet for all our corporate events. They handled 200+ cars at our annual meet without a single hitch. Truly five-star service!',
    rating: 5,
  },
  {
    name: 'Aishwarya Rao',
    role: 'Event Planner · Delhi',
    review: 'Absolutely fantastic! My wedding guests were stunned by the valet handling. Zero complaints, swift service, and super polite staff. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Rohit Verma',
    role: 'Regular Customer',
    review: 'The app and booking process is insanely smooth. My driver is always on time and very professional. Worth every rupee for this premium experience.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <Hero />

      {/* Services Overview */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-glow opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">What We Offer</span>
            <h2 className="section-title mt-3 mb-4">
              Premium Services for<br />Every Occasion
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From quick valet parking to full-day chauffeur hire — we have it all. Book in seconds, experience in style.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/services" className="btn-outline inline-flex items-center gap-2">
              Explore All Services <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Simple Process</span>
            <h2 className="section-title mt-3">How It Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

            {[
              { step: '01', title: 'Choose Service', desc: 'Select valet, driver, or event service from our easy-to-use booking form.' },
              { step: '02', title: 'Book & Pay', desc: 'Enter your details, pick date & time, get instant price quote and confirm.' },
              { step: '03', title: 'Sit Back & Relax', desc: 'Our professional arrives on time. Track in real-time via the dashboard.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-2xl glass-card border border-primary-500/20 flex items-center justify-center mb-4 gradient-border">
                  <span className="font-display font-black text-2xl gradient-text">{item.step}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/booking" className="btn-primary inline-flex items-center gap-2 text-base py-4 px-10">
              Book Your Service <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="section-title mt-3">Loved by Thousands</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <Testimonial key={t.name} {...t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 gradient-border flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Mobile App</span>
              <h2 className="section-title mt-3 mb-4">
                Download the<br /><span className="gradient-text">SuprValet App</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-md">
                Book, track, and manage your valet and driver services from your smartphone. Available on iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 glass-card rounded-xl px-5 py-3 border border-white/10 hover:border-primary-500/40 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-7 h-7">
                    <path fill="#A2AAAD" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400">Download on the</p>
                    <p className="text-sm font-bold text-white">App Store</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 glass-card rounded-xl px-5 py-3 border border-white/10 hover:border-primary-500/40 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400">Get it on</p>
                    <p className="text-sm font-bold text-white">Google Play</p>
                  </div>
                </motion.a>
              </div>
            </div>
            {/* Phone mockup */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex-shrink-0"
            >
              {/* Phone shadow */}
              <div className="absolute inset-x-4 bottom-0 h-8 bg-black/40 blur-xl rounded-[100%] scale-y-50" />
              {/* Phone body */}
              <div className="w-56 h-[28rem] rounded-[3rem] border-4 border-dark-300 bg-dark-100 overflow-hidden shadow-2xl relative">
                {/* Screen reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full flex items-center justify-between px-4">
                  <div className="w-2 h-2 rounded-full bg-dark-800" />
                  <div className="w-10 h-1.5 bg-dark-700 rounded-full" />
                </div>
                {/* Status bar time */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[8px] font-medium text-white/70">9:41</div>
{/* Screen content */}
                  <div className="flex-1 pt-12 pb-20 px-4 flex flex-col justify-between">
                    {/* App header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <div>
                          <p className="text-xs text-white font-bold">SuprValet</p>
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(s => <span key={s} className="text-[6px] text-yellow-400">★</span>)}
                          </div>
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white/80" />
                      </div>
                    </div>
                    <br />
                    
                    {/* Active booking card */}
                    <div className="rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-500/5 p-3.5 border border-primary-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[9px] text-primary-500 font-bold uppercase tracking-wider">Active Booking</p>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                      <p className="text-sm text-white font-semibold">Arjun is 2 min away</p>
                      <div className="w-full h-1.5 bg-dark-400/50 rounded-full mt-3 overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" />
                      </div>
                      <div className="flex justify-between mt-1.5">
                        <p className="text-[7px] text-gray-500">Arriving...</p>
                        <p className="text-[7px] text-primary-500 font-medium">75%</p>
                      </div>
                    </div>
                   
                    {/* Recent activity */}
                    <div className="space-y-2 mt-2">
                      <p className="text-[8px] text-gray-500 font-medium uppercase tracking-wider">Recent</p>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Car size={10} className="text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] text-white truncate">Hotel Grand ₹299</p>
                          <p className="text-[7px] text-gray-500">Yesterday, 8:30 PM</p>
                        </div>
                        <p className="text-[7px] text-green-400 font-medium">Completed</p>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                        <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center">
                          <User2 size={10} className="text-primary-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] text-white truncate">Airport Drop ₹599</p>
                          <p className="text-[7px] text-gray-500">Mar 28, 6:00 AM</p>
                        </div>
                        <p className="text-[7px] text-green-400 font-medium">Completed</p>
                      </div>
                    </div>
                    <div className="flex-1" />
                  </div>
                  {/* Quick actions - at bottom */}
                  <div className="absolute bottom-6 left-4 right-4 flex flex-col gap-2">
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { icon: '🚗', label: 'Valet' },
                        { icon: '👤', label: 'Driver' },
                        { icon: '🎉', label: 'Events' },
                        { icon: '🏢', label: 'Corp' },
                      ].map(s => (
                        <div key={s.label} className="bg-dark-200/50 rounded-xl p-2 text-center border border-white/5 hover:border-primary-500/30 transition-colors">
                          <p className="text-lg mb-0.5">{s.icon}</p>
                          <p className="text-[7px] text-gray-400">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    {/* Bottom nav hint */}
                    <div className="flex justify-center gap-1.5">
                      <div className="w-8 h-1 rounded-full bg-white/20" />
                      <div className="w-2 h-1 rounded-full bg-white/10" />
                      <div className="w-2 h-1 rounded-full bg-white/10" />
                      <div className="w-2 h-1 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
