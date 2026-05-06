// import { useState, useEffect, useRef } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Menu, X, ChevronRight, User, LogOut, Settings } from 'lucide-react'
// import { useAuth } from '../models/authContext'

// const navLinks = [
//   { path: '/', label: 'Home' },
//   { path: '/services', label: 'Services' },
//   { path: '/pricing', label: 'Pricing' },
//   { path: '/insights', label: 'Insights & Help' },
//   { path: '/driver', label: 'Drive with Us' },
//   { path: '/contact', label: 'Contact' },
// ]

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [userMenuOpen, setUserMenuOpen] = useState(false)
//   const { user, isAuthenticated, logout } = useAuth()
//   const location = useLocation()
//   const navigate = useNavigate()
//   const userMenuRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     setIsOpen(false)
//     setUserMenuOpen(false)
//   }, [location])

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
//         setUserMenuOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   const handleNav = (e, path) => {
//     e.preventDefault()
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
//     navigate(path)
//     setIsOpen(false)
//   }

//   const handleLogout = () => {
//     logout()
//     navigate('/')
//     setUserMenuOpen(false)
//   }

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-black/90 backdrop-blur-xl shadow-2xl'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           <a
//             href="/"
//             onClick={(e) => handleNav(e, '/')}
//             className="flex items-center gap-2 group"
//           >
//             <div className="w-9 h-9 rounded-xl  flex items-center justify-center green-glow">
//               <img src="/logo.png" alt="SuprValet" className="h-8 w-auto" style={{ filter: 'sepia(10) saturate(5) hue-rotate(79deg)  brightness(85%) contrast(90%)' }} />
//             </div>
//             <span className="font-display font-bold text-xl tracking-tight">
//               Supr<span className="text-primary-500">Valet</span>
//             </span>
//           </a>

//           <div className="hidden md:flex items-center gap-1">
//             {navLinks.map((link) => (
//               <a
//                 key={link.path}
//                 href={link.path}
//                 onClick={(e) => handleNav(e, link.path)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
//                   location.pathname === link.path
//                     ? 'text-primary-500 bg-primary-500/10'
//                     : 'text-gray-300 hover:text-white hover:bg-white/5'
//                 }`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           <div className="hidden md:flex items-center gap-4">
//             {isAuthenticated ? (
//               <div className="flex items-center gap-3">
//                 <a
//                   href="/booking"
//                   onClick={(e) => handleNav(e, '/booking')}
//                   className="btn-primary flex items-center justify-center gap-2 text-sm py-2.5 px-6 cursor-pointer"
//                 >
//                   Book Now <ChevronRight size={16} />
//                 </a>
//                 <div className="relative" ref={userMenuRef}>
//                 <button
//                   onClick={() => setUserMenuOpen(!userMenuOpen)}
//                   className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-200 border border-dark-300 hover:border-primary-500 transition-colors"
//                 >
//                   <User size={18} className="text-primary-500" />
//                   <span className="text-sm font-medium">{user?.name}</span>
//                 </button>
//                 <AnimatePresence>
//                   {userMenuOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       className="absolute right-0 mt-2 w-48 bg-dark-200 rounded-xl border border-dark-300 shadow-xl overflow-hidden"
//                     >
//                       <button
//                         onClick={() => {
//                           navigate('/dashboard')
//                           setUserMenuOpen(false)
//                         }}
//                         className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:text-white hover:bg-dark-300 flex items-center gap-2 transition-colors"
//                       >
//                         <User size={16} />
//                         Dashboard
//                       </button>
//                       <button
//                         onClick={handleLogout}
//                         className="w-full px-4 py-3 text-left text-sm text-red-500 hover:bg-dark-300 flex items-center gap-2 transition-colors"
//                       >
//                         <LogOut size={16} />
//                         Logout
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex items-center gap-4">
//                 <a
//                   href="/login"
//                   onClick={(e) => handleNav(e, '/login')}
//                   className="text-gray-300 hover:text-primary-500 underline decoration-primary-500 underline-offset-[12px] cursor-pointer"
//                 >
//                   Sign In
//                 </a>
//                 <a
//                   href="/booking"
//                   onClick={(e) => handleNav(e, '/booking')}
//                   className="btn-primary flex items-center justify-center gap-2 text-sm py-2.5 px-6 cursor-pointer"
//                 >
//                   Book Now <ChevronRight size={16} />
//                 </a>
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
//             id="mobile-menu-toggle"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden bg-black/95 backdrop-blur-xl"
//           >
//             <div className="px-4 py-4 flex flex-col gap-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.path}
//                   href={link.path}
//                   onClick={(e) => handleNav(e, link.path)}
//                   className={`px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
//                     location.pathname === link.path
//                       ? 'text-primary-500 bg-primary-500/10'
//                       : 'text-gray-300 hover:text-white hover:bg-white/5'
//                   }`}
//                 >
//                   {link.label}
//                 </a>
//               ))}
//               {isAuthenticated ? (
//                 <>
//                   <a
//                     href="/dashboard"
//                     onClick={(e) => handleNav(e, '/dashboard')}
//                     className="px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
//                   >
//                     Dashboard
//                   </a>
//                   <button
//                     onClick={handleLogout}
//                     className="px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-dark-300 transition-colors text-left"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <div className="flex flex-col gap-2 mt-2">
//                   <a
//                     href="/login"
//                     onClick={(e) => handleNav(e, '/login')}
//                     className="text-gray-300 hover:text-primary-500 underline decoration-primary-500 underline-offset-[12px] cursor-pointer text-center transition-colors"
//                   >
//                     Sign In
//                   </a>
//                   <a
//                     href="/booking"
//                     onClick={(e) => handleNav(e, '/booking')}
//                     className="btn-primary text-center text-sm cursor-pointer flex items-center justify-center gap-2"
//                   >
//                     Book Now <ChevronRight size={16} />
//                   </a>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   )
// }

import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  User,
  LogOut,
} from "lucide-react";
import { useAuth } from "../models/authContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/pricing", label: "Pricing" },
  { path: "/insights", label: "Insights & Help" },
  { path: "/driver", label: "Drive with Us" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  // Click outside user menu
  useEffect(() => {
    const handler = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setUserMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NAV BAR */}
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">

          {/* LOGO */}
          <div
            onClick={(e) => handleNav(e, "/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="logo"
              className="h-7 sm:h-8"
              style={{
                filter:
                  "sepia(10) saturate(5) hue-rotate(79deg) brightness(85%) contrast(90%)",
              }}
            />
            <span className="font-bold text-lg sm:text-xl">
              Supr<span className="text-primary-500">Valet</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={(e) => handleNav(e, link.path)}
                className={`px-3 lg:px-4 py-2 rounded-full text-sm transition ${
                  location.pathname === link.path
                    ? "text-primary-500 bg-primary-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <button
                  onClick={(e) => handleNav(e, "/booking")}
                  className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5"
                >
                  Book Now <ChevronRight size={16} />
                </button>

                {/* USER MENU */}
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-dark-200 border border-dark-300"
                  >
                    <User size={16} className="text-primary-500" />
                    <span className="text-sm">{user?.name}</span>
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute right-0 mt-2 w-44 bg-dark-200 rounded-xl border border-dark-300 shadow-lg overflow-hidden"
                      >
                        <button
                          onClick={() => {
                            navigate("/dashboard");
                            setUserMenuOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-sm hover:bg-dark-300"
                        >
                          Dashboard
                        </button>

                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-3 text-left text-sm text-red-500 hover:bg-dark-300"
                        >
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={(e) => handleNav(e, "/login")}
                  className="text-gray-300 hover:text-primary-500 text-sm"
                >
                  Sign In
                </button>

                <button
                  onClick={(e) => handleNav(e, "/booking")}
                  className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5"
                >
                  Book Now <ChevronRight size={16} />
                </button>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={(e) => handleNav(e, link.path)}
                  className={`text-left px-4 py-3 rounded-lg text-sm ${
                    location.pathname === link.path
                      ? "bg-primary-500/10 text-primary-500"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="border-t border-white/10 my-2" />

              {isAuthenticated ? (
                <>
                  <button
                    onClick={(e) => handleNav(e, "/dashboard")}
                    className="px-4 py-3 text-left text-sm text-gray-300"
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 text-left text-sm text-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={(e) => handleNav(e, "/login")}
                    className="px-4 py-3 text-center text-sm text-gray-300"
                  >
                    Sign In
                  </button>

                  <button
                    onClick={(e) => handleNav(e, "/booking")}
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    Book Now <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}