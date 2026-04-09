import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const sections = [
  {
    title: '1. Introduction',
    content: 'Welcome to SuprValet. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and mobile application. By accessing or using our Service, you consent to the practices described in this policy.'
  },
  {
    title: '2. Information We Collect',
    content: 'We collect information you provide directly to us, including: Name, phone number, email address, and location details when you book our services; Payment information through secure third-party processors; Vehicle details including make, model, and license plate number; Driver license and identity verification documents for driver applicants.'
  },
  {
    title: '3. How We Use Your Information',
    content: 'We use the information we collect to: Provide and improve our valet parking and driver services; Process your bookings and payments; Communicate with you about your reservations; Send you service-related updates and notifications; Verify your identity and background for driver applications; Comply with legal obligations.'
  },
  {
    title: '4. Information Sharing',
    content: 'We may share your information with: Service partners including hotels, restaurants, and venues where you book services; Third-party payment processors for secure payment processing; Driver network members necessary to fulfill your booking; Legal authorities when required by law or to protect our rights.'
  },
  {
    title: '5. Data Security',
    content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, destruction, or disclosure. All payment transactions are encrypted using industry-standard SSL/TLS protocols.'
  },
  {
    title: '6. Data Retention',
    content: 'We retain your personal information for as long as your account is active or as needed to provide you services. We will delete or anonymize your information upon request, except where we are required to retain it for legal, accounting, or compliance purposes.'
  },
  {
    title: '7. Your Rights',
    content: 'You have the right to: Access the personal information we hold about you; Request correction of inaccurate data; Request deletion of your personal information; Opt-out of marketing communications; Object to processing of your data for specific purposes.'
  },
  {
    title: '8. Cookies & Tracking Technologies',
    content: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
  },
  {
    title: '9. Third-Party Links',
    content: 'Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to read the privacy policies of any website you visit.'
  },
  {
    title: '10. Children\'s Privacy',
    content: 'Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected data from a child without parental consent, we will delete it promptly.'
  },
  {
    title: '11. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of the Service after any modifications indicates your acceptance of the updated policy.'
  },
  {
    title: '12. Contact Us',
    content: 'If you have any questions about this Privacy Policy, please contact us at contact@suprvalet.com or call +91 842852015. We respond to all inquiries within 24-48 hours.'
  }
]

export default function PrivacyPolicy() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Legal</span>
            <h1 className="section-title mt-3 mb-4">Privacy<span className="gradient-text">Policy</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Your privacy is important to us. This policy outlines how we protect and handle your personal information.
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
            <p className="text-gray-400">Questions about our Privacy Policy?</p>
            <a href="/contact" className="text-primary-500 hover:text-primary-400 transition-colors mt-2 inline-block">Contact Us</a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
