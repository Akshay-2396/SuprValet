import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 84285270155', href: 'tel:+918428527015' },
  { icon: Mail, label: 'Email', value: 'contact@suprvalet.com', href: 'mailto:contact@suprvalet.com?subject=Inquiry from SuprValet Website' },
  { icon: MapPin, label: 'Headquarters', value: 'Chennai', href: 'https://www.google.com/maps/search/Chennai,+Tamil+Nadu,+India' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\nMessage: ${form.message}`
    const waUrl = `https://wa.me/918428527015?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank')
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <h1 className="section-title mt-3 mb-4">We'd Love to <span className="gradient-text">Hear From You</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Whether you have a question, need a custom quote, or just want to say hi — we are here 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 gradient-border hover:border-primary-500/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium text-sm mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918428527015?text=Hi%20I%20want%20to%20book%20a%20valet%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-5 flex items-center gap-4 transition-all hover:opacity-90"
                style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)' }}
              >
                <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-white">
                    <path d="M16.004 0C7.163 0 0 7.163 0 16.004c0 2.824.737 5.476 2.023 7.78L0 32l8.447-2.006A15.955 15.955 0 0016.004 32C24.845 32 32 24.837 32 16.004 32 7.163 24.845 0 16.004 0zm7.293 19.34c-.4-.2-2.368-1.167-2.733-1.301-.366-.133-.633-.2-.9.2s-1.033 1.3-1.267 1.567c-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.983-1.19-1.06-1.993-2.37-2.226-2.77-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.233.266-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.168-1.234-2.967-.324-.78-.654-.674-.9-.686-.233-.011-.5-.014-.766-.014s-.7.1-1.067.5-1.4 1.367-1.4 3.333 1.433 3.866 1.633 4.133c.2.267 2.82 4.3 6.832 6.033.953.413 1.697.66 2.277.845.957.305 1.828.262 2.516.159.767-.115 2.368-.967 2.7-1.9.334-.934.334-1.734.234-1.9-.1-.167-.367-.267-.766-.467z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-green-400 font-medium text-sm mt-0.5">Chat with us instantly</p>
                </div>
              </a>

              {/* Map */}
              <div className="glass-card rounded-2xl overflow-hidden gradient-border h-52">
                <iframe
                  title="SuprValet Location - Chennai"
                  className="w-full h-full grayscale opacity-60"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88621799054!2d80.27074326477642!3d13.082680440319197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526875ea5d3cd1%3A0x394d9772ba060f17!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1682597800000!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
className="lg:col-span-2 glass-card rounded-3xl p-8 gradient-border"
              >
                <h2 className="font-display font-bold text-2xl text-white mb-8">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: 'name', label: 'Full Name', placeholder: 'Rahul Sharma', type: 'text', id: 'contact-name' },
                        { name: 'email', label: 'Email Address', placeholder: 'rahul@email.com', type: 'email', id: 'contact-email' },
                      ].map((f) => (
                        <div key={f.name} className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{f.label}</label>
                          <input
                            id={f.id}
                            name={f.name}
                            type={f.type}
                            required
                            value={form[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            className="glass-card rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none border border-white/5 focus:border-primary-500/40 transition-colors"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: 'phone', label: 'Phone Number', placeholder: '+91 98765 43210', type: 'tel', id: 'contact-phone' },
                        { name: 'subject', label: 'Subject', placeholder: 'Booking inquiry...', type: 'text', id: 'contact-subject' },
                      ].map((f) => (
                        <div key={f.name} className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{f.label}</label>
                          <input
                            id={f.id}
                            name={f.name}
                            type={f.type}
                            value={form[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            className="glass-card rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none border border-white/5 focus:border-primary-500/40 transition-colors"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        className="glass-card rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none resize-none border border-white/5 focus:border-primary-500/40 transition-colors"
                      />
                    </div>
                    <motion.button
                      id="contact-submit-btn"
                      type="submit"
                      className="btn-primary flex items-center justify-center gap-2 py-4 text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={18} /> Send Message
                    </motion.button>
                  </form>
                </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
