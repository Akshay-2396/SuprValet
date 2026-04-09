import { motion } from 'framer-motion'
import { Calendar, Clock, Trash2, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import Button from './Button'

const statusConfig = {
  confirmed: {
    icon: CheckCircle,
    color: 'text-primary-500',
    bg: 'bg-primary-500/10',
    label: 'Confirmed',
  },
  'in-progress': {
    icon: AlertCircle,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    label: 'In Progress',
  },
  pending: {
    icon: Clock,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    label: 'Pending',
  },
  completed: {
    icon: CheckCircle,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    label: 'Completed',
  },
  cancelled: {
    icon: XCircle,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    label: 'Cancelled',
  },
}

export default function ServiceCard({
  service,
  onCancel,
  showCancel = false,
  index = 0,
}) {
  const { name, date, time, status, price } = service
  const statusStyle = statusConfig[status] || statusConfig.pending
  const StatusIcon = statusStyle.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative bg-dark-200 rounded-2xl border border-dark-300 p-5 hover:border-primary-500/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-white truncate mb-3">{name}</h4>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar size={16} className="text-primary-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock size={16} className="text-primary-500" />
              <span>{time}</span>
            </div>
            {price && (
              <div className="flex items-center gap-2 text-primary-500 font-medium">
                <span>{price}</span>
              </div>
            )}
          </div>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusStyle.bg}`}>
          <StatusIcon size={16} className={statusStyle.color} />
          <span className={`text-sm font-medium ${statusStyle.color}`}>
            {statusStyle.label}
          </span>
        </div>
      </div>

      {showCancel && status !== 'cancelled' && status !== 'completed' && (
        <div className="mt-4 pt-4 border-t border-dark-300 flex justify-end">
          <Button
            variant="danger"
            size="sm"
            icon={Trash2}
            onClick={() => onCancel(service.id)}
          >
            Cancel Service
          </Button>
        </div>
      )}
    </motion.div>
  )
}