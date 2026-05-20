import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Shield, Clock } from "lucide-react";

const floatingBadges = [
  {
    icon: Star,
    label: "4.9★ Rated",
    sub: "50K+ Reviews",
    color: "from-yellow-500/20 to-yellow-600/5",
  },
  {
    icon: Shield,
    label: "100% Insured",
    sub: "Vehicles Protected",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Clock,
    label: "24/7 Service",
    sub: "Always Available",
    color: "from-primary-500/20 to-primary-600/5",
  },
];

const heroImages = [
  "https://storage.googleapis.com/www.suprvalet.com/Hero.png",
  "https://storage.googleapis.com/www.suprvalet.com/Hero1.png",
  "https://storage.googleapis.com/www.suprvalet.com/Hero2.png",
  "https://storage.googleapis.com/www.suprvalet.com/Hero3.png",
  "https://storage.googleapis.com/www.suprvalet.com/Hero4.png",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Preload images on mount
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-slide interval (3000ms = 3 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScrollClick = useCallback(() => {
    const nextSection = document.getElementById("services-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="relative w-full max-w-full min-w-0 overflow-x-hidden flex items-center justify-center min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black" />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 lg:w-80 lg:h-80 bg-primary-500/10 rounded-full blur-3xl max-w-full" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 lg:w-72 lg:h-72 bg-primary-500/5 rounded-full blur-3xl max-w-full" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,200,83,0.5) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0,200,83,0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* LEFT - Text Content */}
        <div className="flex-1 w-full min-w-0 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card border border-primary-500/20 text-primary-500 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 pulse-green" />
            India's #1 Premium Valet Service
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-4 sm:mb-6"
          >
            Your <span className="gradient-text">Driver</span>
            <br />
            One Tap <span className="gradient-text">Away</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8"
          >
            Your car, your schedule — our drivers.
            <br className="hidden sm:block" />
            Premium valet parking and driver services starting at ₹149/hr.
            <br className="hidden sm:block" />
            Fast booking. Trusted professionals. Available 24/7.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto mb-8 md:mb-10"
          >
            <Link
              to="/booking"
              className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 w-full sm:w-auto"
            >
              Book Now <ChevronRight size={16} />
            </Link>

            <Link
              to="/services"
              className="btn-outline flex items-center justify-center text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 w-full sm:w-auto"
            >
              View Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-8"
          >
            {[
              { val: "50K+", label: "Happy Customers" },
              { val: "500+", label: "Expert Drivers" },
              { val: "12+", label: "Cities" },
              { val: "4.9★", label: "App Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left min-w-[80px]">
                <p className="font-display font-black text-xl sm:text-2xl lg:text-3xl gradient-text">
                  {stat.val}
                </p>
                <p className="text-gray-500 text-[10px] sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT - Floating Card with Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 gradient-border w-full max-w-full overflow-visible"
          >
            {/* Image container - with slider */}
            <div className="w-full h-40 sm:h-48 md:h-52 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden mb-4 border border-primary-500/10 relative">
              {heroImages.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`Valet ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
              Your valet is here
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Driver Arjun is 2 min away
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-500 font-bold text-sm">
                  A
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white">Arjun Kumar</p>
                  <p className="text-[10px] text-gray-500">
                    4.9★ · 2,340 trips
                  </p>
                </div>
              </div>

              <span className="text-[10px] sm:text-xs text-primary-500 font-semibold px-2 py-1 rounded-full bg-primary-500/10">
                En Route
              </span>
            </div>
          </motion.div>

          {/* Floating badges */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                className={`absolute glass-card rounded-lg px-2 py-1.5 items-center gap-2 bg-gradient-to-r ${badge.color}`}
                style={{
                  top: i === 0 ? "-12px" : i === 1 ? "45%" : undefined,
                  bottom: i === 2 ? "-12px" : undefined,
                  left: i === 0 ? "-12px" : i === 2 ? "2px" : undefined,
                  right: i === 1 ? "-12px" : undefined,
                }}
                animate={{ y: [0, -6 + i * 2, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <badge.icon size={12} className="text-primary-500" />
                <div>
                  <p className="text-white text-[10px] font-semibold">
                    {badge.label}
                  </p>
                  <p className="text-gray-500 text-[9px]">{badge.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={handleScrollClick}
        role="button"
        tabIndex={0}
        aria-label="Scroll to services section"
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleScrollClick(); }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-primary-500 to-transparent scroll-line"
          animate={{ scaleY: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[10px] text-gray-400 uppercase tracking-widest transition-colors duration-300 hover:text-primary-500">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}