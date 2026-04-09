import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using SuprValet\'s website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our Service.'
  },
  {
    title: '2. Description of Service',
    content: 'SuprValet provides premium valet parking and personal driver services across major Indian cities. Our Services include valet parking at partnered venues, personal driver bookings for travel, event valet services, and corporate transportation solutions.'
  },
  {
    title: '3. User Eligibility',
    content: 'To use our Service, you must be at least 18 years of age and have the legal capacity to enter into binding contracts. Users under 18 may use our services only with parental or guardian consent and supervision.'
  },
  {
    title: '4. Account Registration',
    content: 'When you create an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.'
  },
  {
    title: '5. Booking & Payment',
    content: 'All bookings are subject to availability. Pricing is transparent and displayed before confirmation. We accept payments through secure third-party payment processors. Full payment is required at the time of booking unless alternate arrangements are made for corporate accounts.'
  },
  {
    title: '6. Cancellation & Refund Policy',
    content: 'You may cancel your booking free of charge up to 2 hours before the scheduled service time. Cancellations within 2 hours may incur a 50% cancellation fee. No-shows or cancellations after driver arrival will be charged the full booking amount. Refunds are processed within 5-7 business days.'
  },
  {
    title: '7. Service Conduct',
    content: 'When using our Services, you agree to: Treat our valets and drivers with respect; Provide accurate booking information; Ensure your vehicle is in legal condition for driving; Not request or expect our drivers to engage in illegal activities; Follow all venue-specific rules when using valet services.'
  },
  {
    title: '8. Driver & Venue Partnerships',
    content: 'Our valet services are provided at partnered venues including hotels, restaurants, malls, and corporate campuses. While we ensure all drivers undergo rigorous background verification, the venue operator remains responsible for the premises. Any issues at partnered locations should be reported to both the venue and SuprValet.'
  },
  {
    title: '9. Liability & Insurance',
    content: 'All bookings are insured against damage or theft while your vehicle is in our care. Our comprehensive insurance coverage protects your vehicle up to the declared value. You must report any damage within 24 hours of service completion. We are not liable for pre-existing damage or normal wear and tear.'
  },
  {
    title: '10. Intellectual Property',
    content: 'All content, design, graphics, and intellectual property on our platform are owned by SuprValet and protected by Indian and international copyright laws. You may not copy, reproduce, or distribute any content from our Service without prior written consent.'
  },
  {
    title: '11. Limitation of Liability',
    content: 'SuprValet\'s liability is limited to the amount paid for the specific service in question. We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Service, including but not limited to loss of profits or business opportunities.'
  },
  {
    title: '12. Indemnification',
    content: 'You agree to indemnify, defend, and hold harmless SuprValet, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your breach of these Terms or your illegal conduct.'
  },
  {
    title: '13. Termination',
    content: 'We may terminate or suspend your account and access to our Service at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, our business, or third parties.'
  },
  {
    title: '14. Governing Law',
    content: 'These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our Service will be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.'
  },
  {
    title: '15. Changes to Terms',
    content: 'We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website. Your continued use of our Service after changes are posted constitutes your acceptance of the new Terms.'
  },
  {
    title: '16. Contact Information',
    content: 'If you have any questions about these Terms of Service, please contact us at contact@suprvalet.com or call +91 842852015.'
  }
]

export default function TermsOfService() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Legal</span>
            <h1 className="section-title mt-3 mb-4">Terms of<span className="gradient-text">Service</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Please read these terms carefully before using our premium valet and driver services.
            </p>
            <p className="text-gray-500 text-sm mt-4">Last Updated: April 9, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 gradient-border">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-8 last:mb-0"
              >
                <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                <p className="text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400">Questions about our Terms?</p>
            <a href="/contact" className="text-primary-500 hover:text-primary-400 transition-colors mt-2 inline-block">Contact Us</a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}