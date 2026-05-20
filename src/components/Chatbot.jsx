import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'

// Predefined smart responses for AI chatbot
const smartReplies = {
  greet: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'namaste'],
  pricing: ['price', 'cost', 'rate', 'charge', 'fee', 'how much', 'pricing'],
  booking: ['book', 'reserve', 'schedule', 'appointment', 'booking'],
  valet: ['valet', 'parking', 'park'],
  driver: ['driver', 'chauffeur', 'personal driver', 'hire driver'],
  event: ['event', 'wedding', 'party', 'function', 'corporate'],
  time: ['time', 'hours', 'available', 'availability', 'working hours', '24'],
  location: ['city', 'cities', 'location', 'mumbai', 'delhi', 'bangalore', 'where'],
  cancel: ['cancel', 'refund', 'cancellation'],
}

const responses = {
  greet: "👋 Hello! Welcome to SuprValet. I'm your AI assistant. How can I help you today? You can ask about our services, pricing, or bookings.",
  pricing: "💰 Our pricing starts at ₹149/hr for valet parking. Personal drivers start from ₹299/hr. We offer great discounts for bookings longer than 4 hours! You can use our booking page for instant quotes.",
  booking: "📅 Booking is super easy! Visit our Booking page and fill in your details — name, location, date/time, and service type. You'll get an instant price estimate. Or I can guide you through it!",
  valet: "🚗 Our Valet Parking service is available 24/7. We serve hotels, malls, restaurants, and private events. Trained professionals handle your vehicle with utmost care. Starts at ₹149/hr!",
  driver: "🧑‍✈️ Our personal driver service lets you hire a professional chauffeur on hourly, daily, or outstation basis. All drivers are verified, trained, and uniformed. From ₹299/hr!",
  event: "🎉 We provide premium event valet solutions for weddings, corporate events, and parties. We can manage 50–500+ cars seamlessly. Contact us for custom event packages!",
  time: "⏰ SuprValet operates 24/7 — round the clock, every day of the year! Our support team is always available. You can book online anytime.",
  location: "📍 We currently operate in Mumbai, Delhi, Bangalore, Pune, and Hyderabad — and expanding rapidly! Check our Contact page for city-specific details.",
  cancel: "✅ Cancellations made 2+ hours before service are fully refunded. Late cancellations may incur a nominal fee. For help, reach us on WhatsApp or call us directly!",
  default: "🤔 That's a great question! For detailed assistance, you can:\n\n• 📞 Call: +91 8428527015\n• 💬 WhatsApp us using the green button\n• 📧 Email: contact@suprvalet.com\n\nOr visit our Booking page to get started!",
}

function getBotResponse(input) {
  const lower = input.toLowerCase()
  for (const [key, keywords] of Object.entries(smartReplies)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return responses[key]
    }
  }
  return responses.default
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: "👋 Hi! I'm SuprBot, your AI assistant. Ask me anything about valet, drivers, pricing, or bookings!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text) return

    const userMsg = {
      id: Date.now(),
      role: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate AI response delay
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 600))

    const botText = getBotResponse(text)
    setIsTyping(false)
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        role: 'bot',
        text: botText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ])
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        id="chatbot-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary-500 text-black flex items-center justify-center shadow-2xl green-glow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-window"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[480px] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: 'rgba(15,15,15,0.97)', border: '1px solid rgba(0,200,83,0.2)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-primary-500/5">
              <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                <Bot size={16} className="text-black" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">SuprBot</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 pulse-green" />
                  <span className="text-xs text-primary-500">Online · AI Powered</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs mt-1 ${
                    msg.role === 'bot' ? 'bg-primary-500 text-black' : 'bg-dark-300 text-white'
                  }`}>
                    {msg.role === 'bot' ? <Bot size={12} /> : <User size={12} />}
                  </div>
                  <div className={`max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-0.5`}>
                    <div className={`px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === 'bot'
                        ? 'bg-dark-200 text-gray-200 rounded-tl-sm'
                        : 'bg-primary-500 text-black font-medium rounded-tr-sm'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-gray-600">{msg.time}</span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-center"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                    <Bot size={12} className="text-black" />
                  </div>
                  <div className="bg-dark-200 px-4 py-2 rounded-xl rounded-tl-sm flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-gray-400"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/5">
              <div className="flex gap-2 items-center bg-dark-200 rounded-xl px-3 py-2">
                <input
                  ref={inputRef}
                  id="chatbot-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                />
                <button
                  id="chatbot-send-btn"
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className="w-7 h-7 rounded-lg bg-primary-500 text-black flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                >
                  <Send size={13} />
                </button>
              </div>
              <p className="text-[10px] text-gray-600 text-center mt-2">Powered by SuprValet AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
