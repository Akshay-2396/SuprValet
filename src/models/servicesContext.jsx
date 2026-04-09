import { createContext, useContext, useState, useEffect } from 'react'

const ServicesContext = createContext(null)

export const useServices = () => {
  const context = useContext(ServicesContext)
  if (!context) {
    throw new Error('useServices must be used within a ServicesProvider')
  }
  return context
}

const initialServices = [
  {
    id: '1',
    name: 'Premium Car Wash',
    date: '2026-04-08',
    time: '10:00 AM',
    status: 'confirmed',
    price: '$45',
  },
  {
    id: '2',
    name: 'Interior Detailing',
    date: '2026-04-10',
    time: '2:00 PM',
    status: 'in-progress',
    price: '$120',
  },
  {
    id: '3',
    name: 'Oil Change & Filter',
    date: '2026-03-15',
    time: '9:00 AM',
    status: 'completed',
    price: '$65',
  },
  {
    id: '4',
    name: 'Tire Rotation',
    date: '2026-03-20',
    time: '11:00 AM',
    status: 'completed',
    price: '$35',
  },
  {
    id: '5',
    name: 'Full Body Polish',
    date: '2026-02-28',
    time: '3:00 PM',
    status: 'completed',
    price: '$150',
  },
]

export function ServicesProvider({ children }) {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedServices = localStorage.getItem('services')
    if (storedServices) {
      setServices(JSON.parse(storedServices))
    } else {
      setServices(initialServices)
      localStorage.setItem('services', JSON.stringify(initialServices))
    }
    setLoading(false)
  }, [])

  const saveServices = (newServices) => {
    setServices(newServices)
    localStorage.setItem('services', JSON.stringify(newServices))
  }

  const cancelService = (serviceId) => {
    const updatedServices = services.map((service) =>
      service.id === serviceId ? { ...service, status: 'cancelled' } : service
    )
    saveServices(updatedServices)
  }

  const addService = (serviceData) => {
    const newService = {
      id: Date.now().toString(),
      ...serviceData,
      status: 'confirmed',
    }
    saveServices([newService, ...services])
    return newService
  }

  const ongoingServices = services.filter(
    (s) => s.status === 'confirmed' || s.status === 'in-progress' || s.status === 'pending'
  )

  const completedServices = services.filter(
    (s) => s.status === 'completed' || s.status === 'cancelled'
  )

  const value = {
    services,
    loading,
    ongoingServices,
    completedServices,
    cancelService,
    addService,
  }

  return (
    <ServicesContext.Provider value={value}>{children}</ServicesContext.Provider>
  )
}