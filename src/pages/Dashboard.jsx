import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Car,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
  User,
  LogOut,
} from 'lucide-react'
import { useAuth } from '../models/authContext'
import { useServices } from '../models/servicesContext'
import Button from '../views/components/Button'
import Modal from '../views/components/Modal'
import ServiceCard from '../views/components/ServiceCard'

const summaryStats = [
  { label: 'Total Bookings', key: 'total', icon: Car, color: '#00C853' },
  { label: 'Active Now', key: 'active', icon: AlertCircle, color: '#F59E0B' },
  { label: 'Completed', key: 'completed', icon: CheckCircle, color: '#3B82F6' },
]

export default function Dashboard() {
  const { user, logout } = useAuth()
  const { ongoingServices, completedServices, cancelService, loading } =
    useServices()
  const [filter, setFilter] = useState('ongoing')
  const [cancelModal, setCancelModal] = useState({ open: false, serviceId: null })
  const navigate = useNavigate()

  const handleCancelClick = (serviceId) => {
    setCancelModal({ open: true, serviceId })
  }

  const handleConfirmCancel = () => {
    if (cancelModal.serviceId) {
      cancelService(cancelModal.serviceId)
      setCancelModal({ open: false, serviceId: null })
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const displayServices =
    filter === 'ongoing' ? ongoingServices : completedServices

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="pt-20 min-h-screen"
    >
      <section className="py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">
                My Account
              </span>
              <h1 className="text-3xl font-display font-bold text-white mt-1">
                Welcome, {user?.name || 'User'}
              </h1>
              <p className="text-gray-400 mt-1">{user?.email}</p>
            </div>
            <Button variant="secondary" icon={LogOut} onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {summaryStats.map((stat, i) => {
              let val
              if (stat.key === 'total')
                val = ongoingServices.length + completedServices.length
              else if (stat.key === 'active') val = ongoingServices.length
              else if (stat.key === 'completed') val = completedServices.length

              return (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card rounded-2xl p-5 gradient-border"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${stat.color}15`,
                        border: `1px solid ${stat.color}30`,
                      }}
                    >
                      <stat.icon size={16} style={{ color: stat.color }} />
                    </div>
                  </div>
                  <p className="font-display font-black text-2xl text-white">
                    {val}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Filter size={16} className="text-gray-500" />
              {['ongoing', 'completed'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                    filter === f
                      ? 'bg-primary-500 text-black'
                      : 'glass-card text-gray-400 hover:text-white'
                  }`}
                >
                  {f === 'ongoing' ? 'Ongoing Services' : 'Completed Services'}
                </button>
              ))}
            </div>

            {filter === 'ongoing' ? (
              ongoingServices.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {ongoingServices.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      showCancel
                      onCancel={handleCancelClick}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 glass-card rounded-2xl">
                  <Clock size={48} className="mx-auto mb-4 text-gray-500 opacity-30" />
                  <p className="text-gray-400 mb-6">No ongoing services</p>
                  <div className="flex justify-center">
                    <Link to="/booking">
                      <Button>Book a Service</Button>
                    </Link>
                  </div>
                </div>
              )
            ) : completedServices.length > 0 ? (
              <div className="flex flex-col gap-4">
                {completedServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    showCancel={false}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 glass-card rounded-2xl">
                <CheckCircle
                  size={48}
                  className="mx-auto mb-4 text-gray-500 opacity-30"
                />
                <p className="text-gray-400">No completed services yet</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Modal
        isOpen={cancelModal.open}
        onClose={() => setCancelModal({ open: false, serviceId: null })}
        title="Cancel Service"
        size="sm"
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-500/10 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-gray-300 mb-6">
            Are you sure you want to cancel this service? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => setCancelModal({ open: false, serviceId: null })}
            >
              Keep Service
            </Button>
            <Button variant="danger" fullWidth onClick={handleConfirmCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </motion.div>
  )
}