// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ChevronRight, Star, Shield, Clock } from "lucide-react";

// const floatingBadges = [
//   {
//     icon: Star,
//     label: "4.9★ Rated",
//     sub: "50K+ Reviews",
//     color: "from-yellow-500/20 to-yellow-600/5",
//   },
//   {
//     icon: Shield,
//     label: "100% Insured",
//     sub: "Vehicles Protected",
//     color: "from-blue-500/20 to-blue-600/5",
//   },
//   {
//     icon: Clock,
//     label: "24/7 Service",
//     sub: "Always Available",
//     color: "from-primary-500/20 to-primary-600/5",
//   },
// ];

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black" />
//         {/* Glow orbs */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
//         {/* Grid lines */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(0,200,83,0.5) 1px, transparent 1px),
//                               linear-gradient(90deg, rgba(0,200,83,0.5) 1px, transparent 1px)`,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-16">
//         {/* Left Content */}
//         <div className="flex-1 text-center lg:text-left">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary-500/20 text-primary-500 text-sm font-medium mb-6"
//           >
//             <span className="w-2 h-2 rounded-full bg-primary-500 pulse-green" />
//             India's #1 Premium Valet Service
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight mb-6"
//           >
//             Your <span className="gradient-text">Driver</span>
//             <br />
//              One Tap <span className="gradient-text">Away</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-gray-400 text-lg leading-7 max-w-lg mb-8"
//           >
//             Your car, your schedule — our drivers.
//             <br className="my-1" />
//             Premium valet parking and driver services starting at ₹149/hr.
//             <br className="my-1" />
//             Fast booking. Trusted professionals. Available 24/7.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//           >
//             <Link
//               to="/booking"
//               className="btn-primary flex items-center justify-center gap-2 text-sm py-2.5 px-5"
//             >
//               Book Now
//               <ChevronRight size={16} />
//             </Link>
//             <Link
//               to="/services"
//               className="btn-outline flex items-center justify-center gap-2 text-sm py-2.5 px-5"
//             >
//               View Services
//             </Link>
//           </motion.div>

//           {/* Stats row */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="flex flex-wrap gap-8 mt-5 justify-center lg:justify-start"
//           >
//             {[
//               { val: "50K+", label: "Happy Customers" },
//               { val: "500+", label: "Expert Drivers" },
//               { val: "12+", label: "Cities" },
//               { val: "4.9★", label: "App Rating" },
//             ].map((stat) => (
//               <div key={stat.label} className="text-center lg:text-left">
//                 <p className="font-display font-black text-2xl gradient-text">
//                   {stat.val}
//                 </p>
//                 <p className="text-gray-500 text-xs">{stat.label}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Right — Floating Cards */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="flex-1 relative w-full max-w-sm lg:max-w-md"
//         >
//           {/* Main card */}
//           <motion.div
//             animate={{ y: [0, -12, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             className="relative glass-card rounded-3xl p-8 gradient-border"
//           >
//             {/* Car icon large */}
//             <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-500/5 flex items-center justify-center mb-6 border border-primary-500/10 overflow-hidden">
//               <img
//                 src="/Hero.png"
//                 alt="Valet Service"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="font-display font-bold text-xl text-white mb-1">
//               Your valet is here
//             </h3>
//             <p className="text-gray-400 text-sm mb-4">
//               Driver Arjun is 2 min away
//             </p>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-500 font-bold text-sm">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-xs font-medium text-white">Arjun Kumar</p>
//                   <p className="text-[10px] text-gray-500">
//                     4.9★ · 2,340 trips
//                   </p>
//                 </div>
//               </div>
//               <span
//                 className="text-xs text-primary-500 font-semibold px-2 py-1 rounded-full"
//                 style={{ background: "rgba(0,200,83,0.1)" }}
//               >
//                 En Route
//               </span>
//             </div>
//           </motion.div>

//           {/* Floating badges */}
//           {floatingBadges.map((badge, i) => (
//             <motion.div
//               key={badge.label}
//               className={`absolute glass-card rounded-xl px-3 py-2 flex items-center gap-2 bg-gradient-to-r ${badge.color}`}
//               style={{
//                 top: i === 0 ? "-20px" : i === 1 ? "40%" : undefined,
//                 bottom: i === 2 ? "-20px" : undefined,
//                 right: i === 1 ? "-30px" : undefined,
//                 left: i === 0 ? "-20px" : i === 2 ? "10px" : undefined,
//               }}
//               animate={{ y: [0, -8 + i * 3, 0] }}
//               transition={{
//                 duration: 4 + i,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.5,
//               }}
//             >
//               <badge.icon size={14} className="text-primary-500" />
//               <div>
//                 <p className="text-white text-xs font-semibold">
//                   {badge.label}
//                 </p>
//                 <p className="text-gray-500 text-[10px]">{badge.sub}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 1.5, repeat: Infinity }}
//       >
//         <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent" />
//         <span className="text-[10px] text-gray-600 tracking-widest uppercase">
//           Scroll
//         </span>
//       </motion.div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ChevronRight, Star, Shield, Clock } from "lucide-react";

// const floatingBadges = [
//   {
//     icon: Star,
//     label: "4.9★ Rated",
//     sub: "50K+ Reviews",
//     color: "from-yellow-500/20 to-yellow-600/5",
//   },
//   {
//     icon: Shield,
//     label: "100% Insured",
//     sub: "Vehicles Protected",
//     color: "from-blue-500/20 to-blue-600/5",
//   },
//   {
//     icon: Clock,
//     label: "24/7 Service",
//     sub: "Always Available",
//     color: "from-primary-500/20 to-primary-600/5",
//   },
// ];

// export default function Hero() {
//   return (
//     <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black" />

//         {/* Glow */}
//         <div className="absolute top-1/4 left-1/4 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-primary-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-52 sm:w-72 md:w-80 h-52 sm:h-72 md:h-80 bg-primary-500/5 rounded-full blur-3xl" />

//         {/* Grid */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(0,200,83,0.5) 1px, transparent 1px),
//                               linear-gradient(90deg, rgba(0,200,83,0.5) 1px, transparent 1px)`,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       {/* Container */}
//       <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-16">
        
//         {/* LEFT */}
//         <div className="flex-1 text-center lg:text-left">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card border border-primary-500/20 text-primary-500 text-xs sm:text-sm font-medium mb-5"
//           >
//             <span className="w-2 h-2 rounded-full bg-primary-500 pulse-green" />
//             India's #1 Premium Valet Service
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-5"
//           >
//             Your <span className="gradient-text">Driver</span>
//             <br />
//             One Tap <span className="gradient-text">Away</span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-6"
//           >
//             Your car, your schedule — our drivers.
//             <br />
//             Premium valet parking and driver services starting at ₹149/hr.
//             <br />
//             Fast booking. Trusted professionals. Available 24/7.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
//             <Link
//               to="/booking"
//               className="btn-primary flex items-center justify-center gap-2 text-sm px-5 py-2.5"
//             >
//               Book Now <ChevronRight size={16} />
//             </Link>

//             <Link
//               to="/services"
//               className="btn-outline flex items-center justify-center text-sm px-5 py-2.5"
//             >
//               View Services
//             </Link>
//           </motion.div>

//           {/* Stats */}
//           <motion.div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mt-6">
//             {[
//               { val: "50K+", label: "Happy Customers" },
//               { val: "500+", label: "Expert Drivers" },
//               { val: "12+", label: "Cities" },
//               { val: "4.9★", label: "App Rating" },
//             ].map((stat) => (
//               <div key={stat.label} className="text-center lg:text-left">
//                 <p className="font-display font-black text-lg sm:text-xl md:text-2xl gradient-text">
//                   {stat.val}
//                 </p>
//                 <p className="text-gray-500 text-[10px] sm:text-xs">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* RIGHT */}
//         <motion.div className="flex-1 relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          
//           {/* Card */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 5, repeat: Infinity }}
//             className="relative glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 gradient-border"
//           >
//             <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-4 border border-primary-500/10">
//               <img
//                 src="/Hero.png"
//                 alt="Valet"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <h3 className="font-bold text-base sm:text-lg text-white">
//               Your valet is here
//             </h3>
//             <p className="text-gray-400 text-xs sm:text-sm mb-3">
//               Driver Arjun is 2 min away
//             </p>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 text-xs font-bold">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-xs text-white">Arjun Kumar</p>
//                   <p className="text-[10px] text-gray-500">
//                     4.9★ · 2,340 trips
//                   </p>
//                 </div>
//               </div>

//               <span className="text-[10px] sm:text-xs text-primary-500 px-2 py-1 rounded-full bg-primary-500/10">
//                 En Route
//               </span>
//             </div>
//           </motion.div>

//           {/* Floating badges (FIXED responsiveness) */}
//           {floatingBadges.map((badge, i) => (
//             <motion.div
//               key={badge.label}
//               className={`hidden sm:flex absolute glass-card rounded-lg px-2 py-1.5 items-center gap-2 bg-gradient-to-r ${badge.color}`}
//               style={{
//                 top: i === 0 ? "-10px" : i === 1 ? "45%" : undefined,
//                 bottom: i === 2 ? "-10px" : undefined,
//                 left: i === 0 ? "-10px" : i === 2 ? "0px" : undefined,
//                 right: i === 1 ? "-10px" : undefined,
//               }}
//               animate={{ y: [0, -6, 0] }}
//               transition={{
//                 duration: 4 + i,
//                 repeat: Infinity,
//               }}
//             >
//               <badge.icon size={12} className="text-primary-500" />
//               <div>
//                 <p className="text-white text-[10px] font-semibold">
//                   {badge.label}
//                 </p>
//                 <p className="text-gray-500 text-[9px]">{badge.sub}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 1.5, repeat: Infinity }}
//       >
//         <div className="w-px h-10 bg-gradient-to-b from-primary-500 to-transparent" />
//         <span className="text-[10px] text-gray-600 uppercase">
//           Scroll
//         </span>
//       </motion.div>
//     </section>
//   );
// }

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
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black" />

        {/* Glow */}
        <div className="absolute top-1/4 left-1/4 w-72 md:w-[400px] h-72 md:h-[400px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-[350px] h-64 md:h-[350px] bg-primary-500/5 rounded-full blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,200,83,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,200,83,0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Container */}
      <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary-500/20 text-primary-500 text-xs sm:text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 pulse-green" />
            India's #1 Premium Valet Service
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Your <span className="gradient-text">Driver</span>
            <br />
            One Tap <span className="gradient-text">Away</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-8"
          >
            Your car, your schedule — our drivers.
            Premium valet parking and driver services starting at ₹149/hr.
            Fast booking. Trusted professionals. Available 24/7.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/booking"
              className="btn-primary flex items-center justify-center gap-2 px-6 py-3"
            >
              Book Now <ChevronRight size={18} />
            </Link>

            <Link
              to="/services"
              className="btn-outline flex items-center justify-center px-6 py-3"
            >
              View Services
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { val: "50K+", label: "Happy Customers" },
              { val: "500+", label: "Expert Drivers" },
              { val: "12+", label: "Cities" },
              { val: "4.9★", label: "App Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.val}
                </p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
          
          {/* Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative glass-card rounded-3xl p-6 md:p-8 gradient-border"
          >
            <div className="w-full h-52 md:h-64 rounded-xl overflow-hidden mb-5 border border-primary-500/10">
              <img
                src="/Hero.png"
                alt="Valet"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-white">
              Your valet is here
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Driver Arjun is 2 min away
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 font-bold">
                  A
                </div>
                <div>
                  <p className="text-sm text-white">Arjun Kumar</p>
                  <p className="text-xs text-gray-500">
                    4.9★ · 2,340 trips
                  </p>
                </div>
              </div>

              <span className="text-xs text-primary-500 px-3 py-1 rounded-full bg-primary-500/10">
                En Route
              </span>
            </div>
          </motion.div>

          {/* Floating badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className={`hidden md:flex absolute glass-card rounded-lg px-3 py-2 items-center gap-2 bg-gradient-to-r ${badge.color}`}
              style={{
                top: i === 0 ? "-15px" : i === 1 ? "45%" : undefined,
                bottom: i === 2 ? "-15px" : undefined,
                left: i === 0 ? "-15px" : i === 2 ? "0px" : undefined,
                right: i === 1 ? "-15px" : undefined,
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
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
        </div>
      </div>
    </section>
  );
}