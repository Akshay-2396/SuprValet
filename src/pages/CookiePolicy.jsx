import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const sections = [
  {
    title: '1. What Are Cookies',
    content: 'Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences, improve your user experience, and analyze how our Service is used. Cookies are widely used to make websites work more efficiently.'
  },
  {
    title: '2. How We Use Cookies',
    content: 'We use cookies for the following purposes: To keep you logged in and remember your preferences; To understand how you use our Service so we can improve it; To personalize your experience with relevant content and recommendations; To analyze traffic patterns and optimize our website performance.'
  },
  {
    title: '3. Types of Cookies We Use',
    content: 'Essential Cookies: Required for basic site functionality like booking and payment processing. These cannot be disabled. Analytics Cookies: Help us understand how visitors navigate and use our site. Performance Cookies: Allow us to analyze site performance and identify improvements. Functional Cookies: Enable enhanced features and personalization.'
  },
  {
    title: '4. Third-Party Cookies',
    content: 'We may also use third-party cookies from trusted partners for analytics and marketing purposes. These include: Google Analytics for site analytics; Payment processors for secure transactions; Social media platforms for sharing features. We do not control these third-party cookies.'
  },
  {
    title: '5. Managing Cookies',
    content: 'You can control and manage cookies in your browser settings. Most browsers allow you to block or delete cookies. However, please note that blocking essential cookies may affect the functionality of our Service and you may not be able to access certain features.'
  },
  {
    title: '6. Cookie Categories',
    content: 'Session Cookies: Temporary cookies that are deleted when you close your browser. Persistent Cookies: Remain on your device for a set period or until you delete them. First-Party Cookies: Set directly by SuprValet. Third-Party Cookies: Set by our partners and service providers.'
  },
  {
    title: '7. Specific Cookies We Use',
    content: 'Session ID: Maintains your login state during a session. Preferences: Remembers your language and location settings. Analytics: Tracks page views and user behavior for improvement. Marketing: Helps us show relevant offers based on your interests.'
  },
  {
    title: '8. Your Choices',
    content: 'You have the right to opt-out of non-essential cookies. You can manage your cookie preferences using our cookie banner or your browser settings. Note that opting out of analytics cookies may limit our ability to improve our Service based on user behavior.'
  },
  {
    title: '9. Updates to This Policy',
    content: 'We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will post any changes on this page and update the "Last Updated" date.'
  },
  {
    title: '10. Contact Us',
    content: 'If you have any questions about our Cookie Policy or how we use cookies, please contact us at contact@suprvalet.com or call +91 842852015.'
  }
]

export default function CookiePolicy() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Legal</span>
            <h1 className="section-title mt-3 mb-4">Cookie<span className="gradient-text">Policy</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Learn how we use cookies to enhance your experience on SuprValet.
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
            <p className="text-gray-400">Questions about our Cookie Policy?</p>
            <a href="/contact" className="text-primary-500 hover:text-primary-400 transition-colors mt-2 inline-block">Contact Us</a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}