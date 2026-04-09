import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  User, Phone, MapPin, Calendar, Clock, Car, ChevronRight,
  Loader2, CheckCircle2
} from 'lucide-react'
import { useAuth } from '../models/authContext'
import { useServices } from '../models/servicesContext'

const PRICE_BASE = {
  valet: 149,
  driver: 299,
  event: 199,
  corporate: 399,
}

function calcPrice(serviceType, duration) {
  const h = parseInt(duration) || 1
  const base = PRICE_BASE[serviceType] || 149
  let total = base * h
  if (h >= 8) total = total * 0.8
  else if (h >= 4) total = total * 0.9
  return Math.round(total)
}

export default function BookingForm({ inline = false }) {
  const { isAuthenticated, setRedirect, user } = useAuth()
  const { addService } = useServices()
  const navigate = useNavigate()
  const location = useLocation()
  
  const [form, setForm] = useState({
    name: user?.name || '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    serviceType: 'valet',
    duration: '1',
    notes: '',
  })
  const [price, setPrice] = useState(149)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    setPrice(calcPrice(form.serviceType, form.duration))
  }, [form.serviceType, form.duration])

  useEffect(() => {
    if (user?.name) {
      setForm(prev => ({ ...prev, name: user.name }))
    }
  }, [user])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!isAuthenticated) {
      setRedirect('/booking')
      navigate('/login', { state: { from: location } })
      return
    }
    
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1800))
    
    addService({
      name: form.name,
      phone: form.phone,
      pickup: form.pickup,
      drop: form.drop,
      date: form.date,
      time: form.time,
      serviceType: form.serviceType,
      duration: form.duration,
      price: price,
      notes: form.notes,
    })
    
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-12 gap-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center"
        >
          <CheckCircle2 className="text-primary-500" size={40} />
        </motion.div>
        <h3 className="text-2xl font-display font-bold text-white">Booking Confirmed!</h3>
        <p className="text-gray-400 max-w-sm">
          Your {form.serviceType} booking has been received. Our team will contact you shortly on <strong className="text-white">{form.phone}</strong>.
        </p>
        <div className="glass-card rounded-xl px-6 py-4 text-center">
          <p className="text-gray-400 text-sm">Estimated Total</p>
          <p className="text-3xl font-bold text-primary-500">₹{price}</p>
          <p className="text-xs text-gray-500 mt-1">for {form.duration} hour(s)</p>
        </div>
        <button onClick={() => setStatus('idle')} className="btn-outline mt-2">
          Book Another
        </button>
      </motion.div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        <div className="w-20 h-20 rounded-full bg-dark-300 flex items-center justify-center">
          <User className="text-gray-500" size={40} />
        </div>
        <h3 className="text-xl font-display font-bold text-white">Sign In Required</h3>
        <p className="text-gray-400 text-center max-w-sm">
          Please sign in to complete your booking. We'll redirect you after login.
        </p>
        <Link
          to="/login"
          state={{ from: { pathname: '/booking' } }}
          className="btn-primary flex items-center gap-2"
        >
          Sign In to Book <ChevronRight size={18} />
        </Link>
        <p className="text-gray-500 text-sm">
          Don't have an account? <Link to="/register" className="text-primary-500 hover:underline">Sign up</Link>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</label>
          <div className="flex items-center gap-2 glass-card rounded-xl px-3 py-3">
            <User size={16} className="text-gray-500 flex-shrink-0" />
            <input
              id="booking-name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Rahul Sharma"
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
          <div className="flex items-center gap-2 glass-card rounded-xl px-3 py-3">
            <Phone size={16} className="text-gray-500 flex-shrink-0" />
            <input
              id="booking-phone"
              name="phone"
              required
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Pickup Location</label>
          <div className="flex items-center gap-2 glass-card rounded-xl px-3 py-3">
            <MapPin size={16} className="text-primary-500 flex-shrink-0" />
            <input
              id="booking-pickup"
              name="pickup"
              required
              value={form.pickup}
              onChange={handleChange}
              placeholder="Hotel name / Address"
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Drop Location</label>
          <div className="flex items-center gap-2 glass-card rounded-xl px-3 py-3">
            <MapPin size={16} className="text-gray-500 flex-shrink-0" />
            <input
              id="booking-drop"
              name="drop"
              value={form.drop}
              onChange={handleChange}
              placeholder="Destination (optional)"
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</label>
          <div className="flex items-center gap-2 glass-card rounded-xl px-3 py-3">
            <Calendar size={16} className="text-gray-500 flex-shrink-0" />
            <input
              id="booking-date"
              name="date"
              required
              type="date"
              min={new Date().toISOString().split('T')[0]}
              value={form.date}
              onChange={handleChange}
              className="flex-1 bg-transparent text-sm text-white outline-none [color-scheme:dark]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Time</label>
          <div className="flex items-center gap-2 glass-card rounded-xl px-3 py-3">
            <Clock size={16} className="text-gray-500 flex-shrink-0" />
            <input
              id="booking-time"
              name="time"
              required
              type="time"
              value={form.time}
              onChange={handleChange}
              className="flex-1 bg-transparent text-sm text-white outline-none [color-scheme:dark]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Service Type</label>
          <div className="flex items-center gap-2 glass-card rounded-xl px-3 py-3">
            <Car size={16} className="text-gray-500 flex-shrink-0" />
            <select
              id="booking-service"
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              className="flex-1 bg-transparent text-sm text-white outline-none cursor-pointer"
            >
              <option value="valet" className="bg-dark-100">Valet Parking</option>
              <option value="driver" className="bg-dark-100">Personal Driver</option>
              <option value="event" className="bg-dark-100">Event Valet</option>
              <option value="corporate" className="bg-dark-100">Corporate Service</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Duration (Hours)</label>
          <div className="flex items-center gap-2 glass-card rounded-xl px-3 py-3">
            <Clock size={16} className="text-gray-500 flex-shrink-0" />
            <select
              id="booking-duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="flex-1 bg-transparent text-sm text-white outline-none cursor-pointer"
            >
              {[1,2,3,4,5,6,8,10,12,24].map((h) => (
                <option key={h} value={h} className="bg-dark-100">
                  {h} hour{h > 1 ? 's' : ''} {h >= 8 ? '(20% off)' : h >= 4 ? '(10% off)' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Special Instructions</label>
        <textarea
          id="booking-notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Any special requirements or notes..."
          className="glass-card rounded-xl px-3 py-3 text-sm text-white placeholder-gray-600 outline-none resize-none"
        />
      </div>

      <motion.div
        key={price}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="rounded-xl p-4 flex items-center justify-between"
        style={{ background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.2)' }}
      >
        <div>
          <p className="text-sm text-gray-400">Estimated Price</p>
          <p className="text-3xl font-bold text-primary-500">₹{price}</p>
          <p className="text-xs text-gray-500">
            ₹{PRICE_BASE[form.serviceType]}/hr × {form.duration}hr
            {parseInt(form.duration) >= 8 ? ' · 20% discount applied' : parseInt(form.duration) >= 4 ? ' · 10% discount applied' : ''}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Taxes included</p>
          <p className="text-xs text-primary-500 font-medium mt-1">Free Cancellation</p>
        </div>
      </motion.div>

      <motion.button
        id="booking-submit-btn"
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary flex items-center justify-center gap-2 w-full py-4 text-base"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Processing Booking...
          </>
        ) : (
          <>
            Confirm Booking — ₹{price}
            <ChevronRight size={18} />
          </>
        )}
      </motion.button>
    </form>
  )
}