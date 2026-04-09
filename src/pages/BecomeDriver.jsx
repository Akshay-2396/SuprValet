import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Wallet, Award, Shield, Check, ChevronRight, Calculator, Car, MapPin, FileText } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const benefits = [
  {
    icon: Clock,
    title: 'Flexible Hours',
    desc: 'Work when you want. Choose shifts that fit your schedule.'
  },
  {
    icon: Wallet,
    title: 'Weekly Payouts',
    desc: 'Get paid every week. Fast, transparent, and reliable.'
  },
  {
    icon: Award,
    title: 'Premium Customers',
    desc: 'Serve high-profile clients and earn better tips.'
  },
  {
    icon: Shield,
    title: 'Full Support',
    desc: '24/7 support team and insurance coverage.'
  },
]

const requirements = [
  { icon: Car, text: 'Valid driving license (minimum 2 years)' },
  { icon: MapPin, text: 'Own a smartphone with internet access' },
  { icon: FileText, text: 'Clean background record' },
  { icon: Shield, text: 'Minimum 21 years of age' },
]

export default function BecomeDriver() {
  const [hours, setHours] = useState(8)
  const [days, setDays] = useState(5)
  
  const earnings = hours * 300 * days * 4

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-500/4 rounded-full blur-2xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Drive With Us</span>
              <h1 className="section-title mt-3 mb-6">
                Earn with <span className="gradient-text">SuprValet</span><br />
                Drive on Your Terms
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Join India's fastest-growing premium valet and driver service network. 
                Earn competitive income, work flexible hours, and serve discerning customers 
                who value professionalism and quality service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/driver-apply" className="btn-primary inline-flex items-center justify-center gap-2 text-sm py-3 px-8">
                  Apply Now <ChevronRight size={16} />
                </Link>
                <a href="#calculator" className="btn-outline inline-flex items-center justify-center gap-2 text-sm py-3 px-8">
                  Calculate Earnings
                </a>
              </div>

              <div className="flex flex-wrap gap-8 mt-10">
                {[
                  { val: '₹25K+', label: 'Weekly Earnings' },
                  { val: '500+', label: 'Active Drivers' },
                  { val: '12+', label: 'Cities' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display font-black text-2xl gradient-text">{stat.val}</p>
                    <p className="text-gray-500 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8 gradient-border">
                <div className="w-16 h-16 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6">
                  <Car className="text-primary-500" size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">Why Drive with SuprValet?</h3>
                <div className="flex flex-col gap-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <b.icon className="text-primary-500" size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{b.title}</p>
                        <p className="text-gray-400 text-sm">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-100/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Requirements</span>
            <h2 className="section-title mt-3">What You Need</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-4 gradient-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <req.icon className="text-primary-500" size={20} />
                </div>
                <span className="text-gray-300">{req.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Earnings</span>
            <h2 className="section-title mt-3">Calculate Your Potential</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 gradient-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Hours per day</label>
                  <input
                    type="range"
                    min="4"
                    max="12"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 bg-dark-300 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-500 text-sm">4 hrs</span>
                    <span className="text-white font-semibold">{hours} hrs</span>
                    <span className="text-gray-500 text-sm">12 hrs</span>
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Days per week</label>
                  <input
                    type="range"
                    min="3"
                    max="7"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full h-2 bg-dark-300 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-500 text-sm">3 days</span>
                    <span className="text-white font-semibold">{days} days</span>
                    <span className="text-gray-500 text-sm">7 days</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <Calculator className="text-primary-500 mb-4" size={32} />
                <p className="text-gray-400 text-sm mb-2">Estimated Monthly Earnings</p>
                <p className="font-display font-black text-5xl gradient-text mb-2">₹{earnings.toLocaleString()}</p>
                <p className="text-gray-500 text-xs">*Based on ₹300/hr average rate</p>
              </div>
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
            <h2 className="section-title mb-4">Ready to Hit the Road?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Join hundreds of professional drivers who have transformed their careers with SuprValet.
            </p>
            <Link to="/driver-apply" className="btn-primary inline-flex items-center gap-2 text-sm py-4 px-10">
              Start Your Application <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}