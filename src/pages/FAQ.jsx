import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Support</span>
            <h1 className="section-title mt-3 mb-4">Frequently Asked<br /><span className="gradient-text">Questions</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Got questions? We have answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </motion.div>
        </div>
      </section>

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
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  {openIndex === i ? (
                    <ChevronUp className="text-primary-500 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-primary-500 flex-shrink-0" size={20} />
                  )}
                </button>
                {openIndex === i && (
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
    </motion.div>
  )
}