import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Phone, Mail, MapPin, Car, FileText, Calendar, Upload, CheckCircle, ChevronRight } from 'lucide-react'
import { validateName, validatePhone, validateEmail } from '../controllers/validation'
import FormInput from '../views/components/FormInput'
import Button from '../views/components/Button'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 
  'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Kochi'
]

export default function DriverApplication() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    vehicleType: '',
    hasLicense: true,
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    let error = ''
    if (name === 'fullName') error = validateName(value)
    if (name === 'phone') error = validatePhone(value)
    if (name === 'email') error = validateEmail(value)
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const nameError = validateName(formData.fullName)
    const phoneError = validatePhone(formData.phone)
    const emailError = validateEmail(formData.email)
    
    if (nameError || phoneError || emailError) {
      setErrors({ 
        fullName: nameError, 
        phone: phoneError, 
        email: emailError 
      })
      return
    }

    if (!formData.city || !formData.experience || !formData.vehicleType) {
      setErrors({ general: 'Please fill in all required fields' })
      return
    }

    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="text-primary-500" size={40} />
          </motion.div>
          <h1 className="text-3xl font-display font-bold text-white mb-4">Application Received!</h1>
          <p className="text-gray-400 mb-8">
            Thank you for applying to become a SuprValet driver. Our team will review your application and contact you within 2-3 business days.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            Back to Home <ChevronRight size={16} />
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Driver Application</span>
            <h1 className="section-title mt-3 mb-4">Join the <span className="gradient-text">SuprValet</span> Team</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Fill out the form below and our team will get in touch with you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-3xl p-8 gradient-border"
          >
            {errors.general && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 text-sm">
                {errors.general}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.fullName}
                  placeholder="Enter your full name"
                  required
                  icon={User}
                />

                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  placeholder="Enter your email"
                  required
                  icon={Mail}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone}
                  placeholder="Enter your phone number"
                  required
                  icon={Phone}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-dark-100 border border-dark-300 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                      required
                    >
                      <option value="">Select your city</option>
                      {cities.map((city) => (
                        <option key={city} value={city} className="bg-dark-100">{city}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Driving Experience</label>
                  <div className="relative">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-dark-100 border border-dark-300 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                      required
                    >
                      <option value="">Select experience</option>
                      <option value="1" className="bg-dark-100">1 year</option>
                      <option value="2" className="bg-dark-100">2 years</option>
                      <option value="3" className="bg-dark-100">3 years</option>
                      <option value="5" className="bg-dark-100">5+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Vehicle Type</label>
                  <div className="relative">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-dark-100 border border-dark-300 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                      required
                    >
                      <option value="">Select vehicle</option>
                      <option value="sedan" className="bg-dark-100">Sedan</option>
                      <option value="suv" className="bg-dark-100">SUV</option>
                      <option value="luxury" className="bg-dark-100">Luxury Car</option>
                      <option value="none" className="bg-dark-100">No vehicle (will be provided)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 bg-dark-100/50 border border-dark-300">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Upload size={18} className="text-primary-500" />
                  Document Upload (UI Demo)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border-2 border-dashed border-dark-300 rounded-xl p-4 text-center hover:border-primary-500/50 transition-colors cursor-pointer">
                    <FileText size={24} className="mx-auto mb-2 text-gray-500" />
                    <p className="text-xs text-gray-400">License</p>
                  </div>
                  <div className="border-2 border-dashed border-dark-300 rounded-xl p-4 text-center hover:border-primary-500/50 transition-colors cursor-pointer">
                    <FileText size={24} className="mx-auto mb-2 text-gray-500" />
                    <p className="text-xs text-gray-400">ID Proof</p>
                  </div>
                  <div className="border-2 border-dashed border-dark-300 rounded-xl p-4 text-center hover:border-primary-500/50 transition-colors cursor-pointer">
                    <FileText size={24} className="mx-auto mb-2 text-gray-500" />
                    <p className="text-xs text-gray-400">Photo</p>
                  </div>
                </div>
              </div>

              <Button type="submit" fullWidth loading={loading} icon={FileText}>
                Submit Application
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}