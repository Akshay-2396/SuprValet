import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Building2, PartyPopper, Users, Calendar, Check, ChevronRight, Star } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const eventTypes = [
  {
    icon: PartyPopper,
    title: 'Weddings',
    description: 'Make your special day even more memorable with professional valet services for you and your guests.',
    features: [
      'Grand entrance for bride & groom',
      'Coordination with wedding planner',
      'Handles 100-500+ vehicles',
      'Branded uniform options',
      'Priority parking for VIP guests',
      'Post-event vehicle distribution',
    ],
    color: '#F97316',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Elevate your corporate gatherings with seamless parking management for conferences and seminars.',
    features: [
      'Conference & seminar handling',
      'Multi-day event support',
      'Employee & visitor separation',
      'Real-time traffic management',
      'Analytics & reporting',
      'Dedicated event coordinator',
    ],
    color: '#3B82F6',
  },
  {
    icon: Users,
    title: 'Private Parties',
    description: 'From birthday celebrations to anniversary parties, ensure your guests arrive in style.',
    features: [
      'Guest arrival coordination',
      'Valet stand management',
      'Quick vehicle retrieval',
      'Custom signage options',
      'Security integration',
      'Post-party cleanup',
    ],
    color: '#A855F7',
  },
]

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Wedding Planner, Mumbai',
    review: 'SuprValet handled 200+ cars at our client\'s wedding flawlessly. The coordination with our team was seamless. Highly recommend for any upscale event!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Event Manager, Hilton Chennai',
    review: 'We\'ve partnered with SuprValet for our corporate events for over a year. Their professionalism and efficiency are unmatched in the industry.',
    rating: 5,
  },
]

const pastEvents = [
  { name: 'Annual Tech Summit 2025', type: 'Corporate', vehicles: '450+' },
  { name: 'Wedding Celebration - Patel Family', type: 'Wedding', vehicles: '320+' },
  { name: 'Product Launch - Luxury Brand', type: 'Corporate', vehicles: '180+' },
  { name: 'New Year Eve Gala', type: 'Party', vehicles: '500+' },
]

export default function Corporate() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-500/4 rounded-full blur-2xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Corporate & Events</span>
              <h1 className="section-title mt-3 mb-6">
                Premium Event Services<br />
                <span className="gradient-text">For Every Occasion</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                From grand weddings to corporate conferences, our professional valet services ensure 
                your guests experience luxury from the moment they arrive. Let us handle the logistics 
                while you focus on making memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-8">
                  Get Custom Quote <ChevronRight size={16} />
                </Link>
                <a href="tel:+91842852015" className="btn-outline inline-flex items-center gap-2 text-sm py-3 px-8">
                  Call: +91 842852015
                </a>
              </div>
            </motion.div>
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
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
            <h2 className="section-title mt-3">Events We Specialize In</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl p-8 gradient-border"
                style={{ borderColor: `${event.color}20` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${event.color}15`, border: `1px solid ${event.color}30` }}
                >
                  <event.icon size={28} style={{ color: event.color }} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">{event.title}</h3>
                <p className="text-gray-400 mb-6">{event.description}</p>
                <ul className="space-y-3">
                  {event.features.slice(0, 4).map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check size={14} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
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
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Our Track Record</span>
            <h2 className="section-title mt-3">Past Events</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 gradient-border"
              >
                <h4 className="font-semibold text-white mb-2">{event.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{event.type}</span>
                  <span className="text-primary-500 font-semibold text-sm">{event.vehicles}</span>
                </div>
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
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="section-title mt-3">What Event Planners Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 gradient-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-500 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10 gradient-border text-center"
          >
            <Calendar className="text-primary-500 mx-auto mb-6" size={40} />
            <h2 className="section-title mb-4">Ready to Book Your Event?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Tell us about your event and we'll create a custom quote tailored to your needs. 
              Our team typically responds within 2 hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-8">
                Get Custom Quote <ChevronRight size={16} />
              </Link>
              <a href="mailto:events@suprvalet.com" className="btn-outline inline-flex items-center gap-2 text-sm py-3 px-8">
                Email: events@suprvalet.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}