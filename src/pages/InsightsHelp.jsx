import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, Calendar, ArrowRight } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const faqs = [
  {
    question: 'What is valet parking?',
    answer: 'Valet parking is a premium service where a professional attendant parks your vehicle for you. Simply drive up, hand over your keys, and our trained valet takes care of the rest. It\'s perfect for hotels, restaurants, malls, events, and anywhere convenience matters.'
  },
  {
    question: 'Are your drivers verified and background-checked?',
    answer: 'Absolutely. Every driver in the SuprValet network undergoes rigorous background verification, including identity checks, driving history verification, and criminal record screening. We also conduct regular performance reviews to ensure consistent quality.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We currently operate in 12+ major Indian cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, and more. Our services are available at partnered venues like hotels, restaurants, malls, and corporate campuses. We also offer outstation driver services across India.'
  },
  {
    question: 'How does pricing work?',
    answer: 'Our pricing is transparent and based on hourly rates: Valet Parking starts at ₹149/hr, Personal Driver at ₹299/hr, Event Valet at ₹199/hr, and Corporate services at ₹399/hr. We offer discounts for longer bookings (10% off for 4+ hours, 20% off for 8+ hours). Night charges (10 PM - 6 AM) may apply.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'You can cancel free of charge up to 2 hours before your scheduled service time. Cancellations within 2 hours may incur a small fee. No-shows or cancellations after the driver has arrived will be charged the full booking amount.'
  },
  {
    question: 'Is my vehicle insured while in your care?',
    answer: 'Yes, every booking with SuprValet is fully insured. We have comprehensive coverage that protects your vehicle against any damage or theft while in our care. Our valets and drivers are trained to handle vehicles with the utmost care.'
  },
  {
    question: 'Can I book for someone else?',
    answer: 'Yes, you can book a service for someone else. Simply enter their details in the booking form. You\'ll receive the confirmation, and the service recipient will get updates about their booking via SMS and email.'
  },
  {
    question: 'How do I become a driver with SuprValet?',
    answer: 'If you\'re a professional driver with a valid license and clean background, you can apply to join our network. Visit our "Drive with Us" page to fill out an application. We offer flexible hours, weekly payouts, and access to premium customers.'
  },
  {
    question: 'How do I make a booking?',
    answer: 'Booking with SuprValet is simple! Visit our booking page, select your service type (Valet Parking, Personal Driver, Event Valet, or Corporate), choose your date and time, enter your location details, and confirm. You\'ll receive instant confirmation via SMS and email.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including credit/debit cards, UPI (Google Pay, PhonePe, Paytm), net banking, and cash payments. For corporate clients, we also offer invoice-based billing with monthly settlements.'
  },
  {
    question: 'Can I modify my booking after confirmation?',
    answer: 'Yes, you can modify your booking details such as time, location, or service type up to 2 hours before your scheduled pickup. Simply log in to your dashboard or contact our support team to make changes.'
  },
  {
    question: 'What happens if my flight is delayed?',
    answer: 'We track flight statuses in real-time. If your flight is delayed, your driver will adjust the pickup time accordingly at no extra charge. Just ensure you provide your flight details when booking.'
  },
  {
    question: 'Do you provide outstation driver services?',
    answer: 'Yes! We offer outstation driver services across India. Whether you need a driver for a day, a week, or longer trips, our professional drivers can accompany you. Outstation rates are available on request and depend on the distance and duration.'
  },
  {
    question: 'Are your services available 24/7?',
    answer: 'Yes, SuprValet operates 24 hours a day, 7 days a week, including holidays. You can book our services anytime through our website or app. Night charges may apply for bookings between 10 PM and 6 AM.'
  },
  {
    question: 'What types of vehicles can your drivers handle?',
    answer: 'Our trained professionals can handle all types of vehicles including sedans, SUVs, luxury cars, sports cars, and mini vans. Simply specify your vehicle type when booking and we\'ll assign an appropriately skilled driver.'
  },
  {
    question: 'How do you ensure hygiene and safety?',
    answer: 'We follow strict hygiene protocols. All our drivers wear masks, use sanitizers, and maintain social distancing. Vehicles are sanitized before each service. We also conduct regular health checks on our team members.'
  },
  {
    question: 'What if I left something in the vehicle?',
    answer: 'If you\'ve left belongings in a vehicle, contact our support team immediately with details of your booking. We\'ll coordinate with the driver to retrieve your items. We generally aim to return items within 24 hours.'
  },
  {
    question: 'Do you offer corporate accounts?',
    answer: 'Yes, we offer dedicated corporate accounts with preferential rates, priority booking, detailed invoicing, and a dedicated account manager. Contact our corporate team at corporate@suprvalet.com for custom solutions.'
  },
  {
    question: 'How can I track my booking?',
    answer: 'Once your booking is confirmed, you\'ll receive SMS and email updates with driver details and tracking links. You can also track your booking in real-time through your customer dashboard or the link provided in your confirmation.'
  },
  {
    question: 'What is the minimum booking duration?',
    answer: 'The minimum booking duration is 1 hour for most services. For airport transfers, we offer point-to-point pricing. Event valet services typically require a minimum of 4 hours.'
  },
]

const blogs = [
  {
    id: 1,
    title: 'Why Valet Parking is Essential for Events',
    excerpt: 'Discover how professional valet services can elevate your event from ordinary to extraordinary, ensuring a seamless experience for every guest.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop',
    date: 'February 15, 2026',
    category: 'Events',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'How to Hire a Safe Personal Driver',
    excerpt: 'A comprehensive guide on what to look for when hiring a personal driver, from verification checks to professional certifications.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
    date: 'February 10, 2026',
    category: 'Safety',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Top 10 Benefits of Valet Parking for Hotels',
    excerpt: 'Hotels that offer valet parking see increased guest satisfaction, better reviews, and higher retention rates. Here\'s why.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    date: 'February 5, 2026',
    category: 'Business',
    readTime: '4 min read'
  },
  {
    id: 4,
    title: 'Corporate Driver Services: The Future of Business Travel',
    excerpt: 'How premium driver services are replacing traditional taxi and rental car options for corporate travelers.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=800&h=600&fit=crop',
    date: 'January 28, 2026',
    category: 'Corporate',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'What Makes a Great Professional Driver',
    excerpt: 'The essential qualities every professional driver should have and what you should expect from a premium service.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop',
    date: 'January 20, 2026',
    category: 'Industry',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'Wedding Valet: Making Your Big Day Flawless',
    excerpt: 'How professional valet services at weddings ensure a grand entrance and stress-free experience for the bride and groom.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    date: 'January 15, 2026',
    category: 'Events',
    readTime: '4 min read'
  },
]

export default function InsightsHelp() {
  const [activeTab, setActiveTab] = useState('faq')
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Support & Insights</span>
            <h1 className="section-title mt-3 mb-4">Insights & <span className="gradient-text">Help</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Find answers to common questions and read our latest insights about valet services and premium mobility.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'faq'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'blog'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              Blog
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'faq' && (
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-2xl overflow-hidden gradient-border"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openFaqIndex === i ? (
                      <ChevronUp className="text-primary-500 flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-primary-500 flex-shrink-0" size={20} />
                    )}
                  </button>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center glass-card rounded-2xl p-8 gradient-border"
            >
              <p className="text-gray-400 mb-4">Still have questions?</p>
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                Contact Support <ChevronDown size={16} className="rotate-[-90deg]" />
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {activeTab === 'blog' && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, i) => (
                <Link to={`/blog/${blog.id}`} key={blog.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/60 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-500 border border-primary-500/30 backdrop-blur-sm">
                        {blog.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="backdrop-blur-sm bg-black/30 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                          <Calendar size={12} />
                          <span>{blog.date}</span>
                          <span className="mx-2">•</span>
                          <span>{blog.readTime}</span>
                        </div>
                        <h3 className="font-bold text-xl text-white mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm text-green-500 font-medium group-hover:text-green-400 transition-colors">
                          Read More <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}