import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './models/authContext'
import { ServicesProvider } from './models/servicesContext'
import ProtectedRoute from './controllers/ProtectedRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Booking from './pages/Booking'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Dashboard from './pages/Dashboard'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import BecomeDriver from './pages/BecomeDriver'
import DriverApplication from './pages/DriverApplication'
import Pricing from './pages/Pricing'
import Corporate from './pages/Corporate'
import LocationChennai from './pages/LocationChennai'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/driver" element={<BecomeDriver />} />
        <Route path="/driver-apply" element={<DriverApplication />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/chennai" element={<LocationChennai />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <ServicesProvider>
          <div className="min-h-screen bg-dark text-white flex flex-col">
            <Navbar />
            <main className="flex-1">
              <AppRoutes />
            </main>
            <Footer />
            <Chatbot />
            <WhatsAppButton />
          </div>
        </ServicesProvider>
      </AuthProvider>
    </Router>
  )
}

export default App