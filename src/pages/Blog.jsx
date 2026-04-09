import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const blogs = [
  {
    id: 1,
    title: 'Why Valet Parking is Essential for Events',
    excerpt: 'Discover how professional valet services can elevate your event from ordinary to extraordinary, ensuring a seamless experience for every guest.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop',
    date: 'February 15, 2026',
    category: 'Events',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'How to Hire a Safe Personal Driver',
    excerpt: 'A comprehensive guide on what to look for when hiring a personal driver, from verification checks to professional certifications.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
    date: 'February 10, 2026',
    category: 'Safety',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Top 10 Benefits of Valet Parking for Hotels',
    excerpt: 'Hotels that offer valet parking see increased guest satisfaction, better reviews, and higher retention rates. Here\'s why.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    date: 'February 5, 2026',
    category: 'Business',
    readTime: '4 min read'
  },
  {
    id: 4,
    title: 'Corporate Driver Services: The Future of Business Travel',
    excerpt: 'How premium driver services are replacing traditional taxi and rental car options for corporate travelers.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=800&h=600&fit=crop',
    date: 'January 28, 2026',
    category: 'Corporate',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'What Makes a Great Professional Driver',
    excerpt: 'The essential qualities every professional driver should have and what you should expect from a premium service.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop',
    date: 'January 20, 2026',
    category: 'Industry',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'Wedding Valet: Making Your Big Day Flawless',
    excerpt: 'How professional valet services at weddings ensure a grand entrance and stress-free experience for the bride and groom.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    date: 'January 15, 2026',
    category: 'Events',
    readTime: '4 min read'
  },
]

export default function Blog() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Blog</span>
            <h1 className="section-title mt-3 mb-4">Latest Insights &<br /><span className="gradient-text">Updates</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Tips, guides, and industry insights about valet parking, driver services, and premium mobility.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                >
                  {/* Background Image */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay - placed after image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                  
                  {/* Glassmorphism Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/60 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />
                  
                  {/* Category Badge - Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-500 border border-primary-500/30 backdrop-blur-sm">
                      {blog.category}
                    </span>
                  </div>
                  
                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Glassmorphism Text Container */}
                    <div className="backdrop-blur-sm bg-black/30 rounded-xl p-4">
                      {/* Date & Read Time */}
                      <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                        <Calendar size={12} />
                        <span>{blog.date}</span>
                        <span className="mx-2">•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-xl text-white mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors">
                        {blog.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      {/* CTA */}
                      <div className="inline-flex items-center gap-2 text-sm text-green-500 font-medium group-hover:text-green-400 transition-colors">
                        Read More <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}