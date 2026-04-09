import { motion } from 'framer-motion'
import { Shield, Users, MapPin, TrendingUp, Award, Heart } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const stats = [
  { val: '50,000+', label: 'Happy Customers', icon: Users },
  { val: '500+', label: 'Expert Drivers', icon: Shield },
  { val: '12+', label: 'Cities Covered', icon: MapPin },
  { val: '3+ Yrs', label: 'In Business', icon: TrendingUp },
]

const values = [
  { icon: Shield, title: 'Trust & Safety', desc: 'Every driver is background-verified, trained, and insured. Your vehicle and safety are our highest priority.' },
  { icon: Award, title: 'Premium Quality', desc: 'We deliver five-star valet and driver experiences every single time — no compromises.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'We continuously improve our technology and processes to deliver a faster, smarter experience.' },
  { icon: Heart, title: 'Customer First', desc: 'Every decision we make puts our customers at the center. Your satisfaction is our success.' },
]

const team = [
  { name: 'Arun Kumar', role: 'Founder', initial: 'AK', color: '#F97316' },
  { name: 'Vijaysree', role: ' Co-Founder', initial: 'VS', color: '#3B82F6' },
]

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-500/4 rounded-full blur-2xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">About SuprValet</span>
              <h1 className="section-title mt-3 mb-6">
                Redefining Parking &<br /><span className="gradient-text">Driver Services</span>
              </h1>
              <p className="text-gray-400 leading-relaxed mb-4">
                SuprValet was founded with a singular mission: to bring world-class valet and chauffeur services to every corner of India. We believe luxury mobility should be accessible, reliable, and seamless.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From our humble beginnings in Mumbai in 2022, we have grown to serve 50,000+ customers across 12 cities, with a network of 500+ trained professionals who live and breathe the SuprValet standard.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center gradient-border"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-primary-500" size={18} />
                  </div>
                  <p className="font-display font-black text-3xl gradient-text">{stat.val}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Our Values</span>
            <h2 className="section-title mt-3">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 gradient-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-4">
                  <v.icon className="text-primary-500" size={22} />
                </div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Leadership</span>
            <h2 className="section-title mt-3">Meet the Team</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-6 text-center gradient-border cursor-default w-full sm:w-auto sm:min-w-[280px] max-w-sm"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl font-display font-black"
                  style={{ background: `${member.color}20`, border: `2px solid ${member.color}40`, color: member.color }}
                >
                  {member.initial}
                </div>
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center gradient-border"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center mx-auto mb-6 green-glow">
              <span className="text-black font-display font-black text-3xl">S</span>
            </div>
            <h2 className="section-title mb-4">Our Mission</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              "To make premium valet and personal driver services accessible to every Indian, setting a new global standard for luxury mobility — one booking at a time."
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
