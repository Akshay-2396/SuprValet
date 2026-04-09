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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,200,83,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,200,83,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary-500/20 text-primary-500 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 pulse-green" />
            India's #1 Premium Valet Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight mb-6"
          >
            Your <span className="gradient-text">Driver</span>
            <br />
             One Tap <span className="gradient-text">Away</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg leading-7 max-w-lg mb-8"
          >
            Your car, your schedule — our drivers.
            <br className="my-1" />
            Premium valet parking and driver services starting at ₹149/hr.
            <br className="my-1" />
            Fast booking. Trusted professionals. Available 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/booking"
              className="btn-primary flex items-center justify-center gap-2 text-sm py-2.5 px-5"
            >
              Book Now
              <ChevronRight size={16} />
            </Link>
            <Link
              to="/services"
              className="btn-outline flex items-center justify-center gap-2 text-sm py-2.5 px-5"
            >
              View Services
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-5 justify-center lg:justify-start"
          >
            {[
              { val: "50K+", label: "Happy Customers" },
              { val: "500+", label: "Expert Drivers" },
              { val: "12+", label: "Cities" },
              { val: "4.9★", label: "App Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-display font-black text-2xl gradient-text">
                  {stat.val}
                </p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 relative w-full max-w-sm lg:max-w-md"
        >
          {/* Main card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative glass-card rounded-3xl p-8 gradient-border"
          >
            {/* Car icon large */}
            <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-500/5 flex items-center justify-center mb-6 border border-primary-500/10 overflow-hidden">
              <img
                src="/Hero.png"
                alt="Valet Service"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-1">
              Your valet is here
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Driver Arjun is 2 min away
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-500 font-bold text-sm">
                  A
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Arjun Kumar</p>
                  <p className="text-[10px] text-gray-500">
                    4.9★ · 2,340 trips
                  </p>
                </div>
              </div>
              <span
                className="text-xs text-primary-500 font-semibold px-2 py-1 rounded-full"
                style={{ background: "rgba(0,200,83,0.1)" }}
              >
                En Route
              </span>
            </div>
          </motion.div>

          {/* Floating badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className={`absolute glass-card rounded-xl px-3 py-2 flex items-center gap-2 bg-gradient-to-r ${badge.color}`}
              style={{
                top: i === 0 ? "-20px" : i === 1 ? "40%" : undefined,
                bottom: i === 2 ? "-20px" : undefined,
                right: i === 1 ? "-30px" : undefined,
                left: i === 0 ? "-20px" : i === 2 ? "10px" : undefined,
              }}
              animate={{ y: [0, -8 + i * 3, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <badge.icon size={14} className="text-primary-500" />
              <div>
                <p className="text-white text-xs font-semibold">
                  {badge.label}
                </p>
                <p className="text-gray-500 text-[10px]">{badge.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent" />
        <span className="text-[10px] text-gray-600 tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
