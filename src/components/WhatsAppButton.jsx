import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phoneNumber = '+918428527015'
  const message = encodeURIComponent('Hi! I want to book a valet service with SuprValet.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float-btn"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl pulse-green"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0C7.163 0 0 7.163 0 16.004c0 2.824.737 5.476 2.023 7.78L0 32l8.447-2.006A15.955 15.955 0 0016.004 32C24.845 32 32 24.837 32 16.004 32 7.163 24.845 0 16.004 0zm0 29.3a13.26 13.26 0 01-6.748-1.838l-.484-.29-5.012 1.191 1.215-4.878-.318-.502A13.226 13.226 0 012.7 16.004C2.7 8.7 8.7 2.7 16.004 2.7 23.31 2.7 29.3 8.7 29.3 16.004c0 7.31-5.99 13.296-13.296 13.296zm7.293-9.96c-.4-.2-2.368-1.167-2.733-1.301-.366-.133-.633-.2-.9.2s-1.033 1.3-1.267 1.567c-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.983-1.19-1.06-1.993-2.37-2.226-2.77-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.233.266-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.168-1.234-2.967-.324-.78-.654-.674-.9-.686-.233-.011-.5-.014-.766-.014s-.7.1-1.067.5-1.4 1.367-1.4 3.333 1.433 3.866 1.633 4.133c.2.267 2.82 4.3 6.832 6.033.953.413 1.697.66 2.277.845.957.305 1.828.262 2.516.159.767-.115 2.368-.967 2.7-1.9.334-.934.334-1.734.234-1.9-.1-.167-.367-.267-.766-.467z"/>
      </svg>
    </motion.a>
  )
}
