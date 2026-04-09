import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Valet Parking', path: '/services' },
    { label: 'Personal Driver', path: '/services' },
    { label: 'Event Valet', path: '/corporate' },
    { label: 'Corporate Services', path: '/corporate' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Careers', path: '/driver' },
  ],
  Support: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Book Now', path: '/booking' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Pricing', path: '/pricing' },
  ],
  'Drive With Us': [
    { label: 'Become a Driver', path: '/driver' },
    { label: 'Apply Now', path: '/driver-apply' },
    { label: 'Driver FAQ', path: '/faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center green-glow">
                <img src="/logo.png" alt="SuprValet" className="h-8 w-auto" style={{ filter: 'sepia(10) saturate(5) hue-rotate(79deg) brightness(85%) contrast(90%)' }} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Supr<span className="text-primary-500">Valet</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              India's premium valet parking & driver booking platform. Professional, reliable, and available 24/7.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="tel:+91842852015" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                <Phone size={14} /> +91 842852015
              </a>
              <a href="mailto:contact@suprvalet.com" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                <Mail size={14} /> contact@suprvalet.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Chennai, Tamil Nadu
              </span>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/suprvalet/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-500/40 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://x.com/Parkqwik_India"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-500/40 transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-500/40 transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/@parkqwik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-500/40 transition-all"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">{title}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 SuprValet. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-primary-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}