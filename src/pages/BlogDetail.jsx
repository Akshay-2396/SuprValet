import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const blogs = {
  1: {
    title: 'Why Valet Parking is Essential for Events',
    excerpt: 'Discover how professional valet services can elevate your event from ordinary to extraordinary.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop',
    date: 'February 15, 2026',
    category: 'Events',
    readTime: '5 min read',
    author: 'SuprValet Team',
    content: `
      <p class="text-gray-300 leading-relaxed mb-6">When planning a memorable event, the small details often make the biggest difference. One such detail that can significantly impact your guests' experience is valet parking service.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">First Impressions Matter</h2>
      <p class="text-gray-300 leading-relaxed mb-6">The moment your guests arrive sets the tone for the entire event. A professional valet service ensures a smooth, elegant arrival that immediately communicates sophistication and attention to detail.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">Eliminate Parking Hassles</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Finding parking in busy venues can be stressful for guests. Professional valet services eliminate this concern, allowing your guests to focus on enjoying the event rather than circling parking lots.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">Enhanced Security</h2>
      <p class="text-gray-300 leading-relaxed mb-6">With professional valet services, your vehicles are in safe hands. Our trained valets ensure proper handling and security throughout the event.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">Time Efficiency</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Professional valets can manage multiple vehicles efficiently, reducing wait times and keeping traffic flowing smoothly at your venue.</p>
      
      <div class="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6 mt-8" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
        <h3 class="font-semibold text-white mb-2" style="font-size: 1.125rem;">Ready to elevate your event?</h3>
        <p class="text-gray-400 text-sm mb-4" style="color: #9ca3af; font-size: 0.875rem;">Book our professional event valet services today.</p>
        <a href="/booking" class="btn-primary inline-flex items-center gap-2 text-sm" style="display: inline-flex; align-items: center; gap: 0.5rem; background: #00C853; color: black; padding: 0.75rem 2rem; border-radius: 9999px; font-weight: 700; text-decoration: none; box-shadow: 0 0 20px rgba(0,200,83,0.3);">
          Book Now
        </a>
      </div>
    `
  },
  2: {
    title: 'How to Hire a Safe Personal Driver',
    excerpt: 'A comprehensive guide on what to look for when hiring a personal driver.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=600&fit=crop',
    date: 'February 10, 2026',
    category: 'Safety',
    readTime: '7 min read',
    author: 'SuprValet Team',
    content: `
      <p class="text-gray-300 leading-relaxed mb-6">Hiring a personal driver is a significant decision that requires careful consideration. Your safety and peace of mind should be the top priority.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">Verify Credentials</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Always verify the driver's license, identification, and any certifications. At SuprValet, every driver undergoes thorough background verification including criminal record checks and driving history verification.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">Check Experience</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Experience matters when it comes to professional driving. Look for drivers with proven track records in handling different vehicles and road conditions.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">Professional Training</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Professional drivers should have formal training in defensive driving, customer service, and vehicle maintenance.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">Insurance Coverage</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Ensure that the service provides comprehensive insurance coverage for both the vehicle and passengers.</p>
    `
  },
  3: {
    title: 'Top 10 Benefits of Valet Parking for Hotels',
    excerpt: 'Hotels that offer valet parking see increased guest satisfaction and better reviews.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop',
    date: 'February 5, 2026',
    category: 'Business',
    readTime: '4 min read',
    author: 'SuprValet Team',
    content: `
      <p class="text-gray-300 leading-relaxed mb-6">In the hospitality industry, every detail contributes to the guest experience. Valet parking has become a hallmark of premium hospitality.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">1. Enhanced Guest Experience</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Valet parking provides convenience that modern travelers appreciate, especially after long journeys.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">2. Increased Security</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Professional valet services add an extra layer of security for guest vehicles.</p>
      
      <h2 class="text-xl font-600 text-white mb-4 mt-8">3. Better Space Management</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Valets can optimize parking space more efficiently than self-parking.</p>
    `
  },
  4: {
    title: 'Corporate Driver Services: The Future of Business Travel',
    excerpt: 'How premium driver services are replacing traditional taxi and rental car options.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=1200&h=600&fit=crop',
    date: 'January 28, 2026',
    category: 'Corporate',
    readTime: '6 min read',
    author: 'SuprValet Team',
    content: `
      <p class="text-gray-300 leading-relaxed mb-6">The corporate travel landscape is evolving, with premium driver services becoming the preferred choice for business travelers. Gone are the days of unreliable taxis and the hassle of rental cars.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">Why Companies Are Switching to Premium Driver Services</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Corporate driver services offer a level of reliability and professionalism that traditional transportation options simply cannot match. Companies report increased productivity and reduced travel stress among employees.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">Cost-Effectiveness of Premium Services</h2>
      <p class="text-gray-300 leading-relaxed mb-6">While premium driver services may seem expensive upfront, they prove cost-effective when considering vehicle maintenance, parking costs, and the value of employee time.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">The Technology Advantage</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Modern corporate driver services integrate with booking apps, provide real-time tracking, and offer detailed reporting for expense management and compliance purposes.</p>
    `
  },
  5: {
    title: 'What Makes a Great Professional Driver',
    excerpt: 'The essential qualities every professional driver should have.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=600&fit=crop',
    date: 'January 20, 2026',
    category: 'Industry',
    readTime: '5 min read',
    author: 'SuprValet Team',
    content: `
      <p class="text-gray-300 leading-relaxed mb-6">Being a professional driver involves more than just driving skills. It requires a combination of soft skills, technical knowledge, and professional attitude that sets exceptional drivers apart from the rest.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">Defensive Driving Skills</h2>
      <p class="text-gray-300 leading-relaxed mb-6">A great professional driver always stays alert and anticipates potential hazards. Defensive driving training is essential for ensuring the safety of passengers and vehicles.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">Excellent Communication</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Professional drivers must communicate clearly with clients, understand their needs, and provide a comfortable experience throughout the journey.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">Time Management</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Punctuality is crucial. Great drivers plan routes efficiently, account for traffic, and ensure clients reach their destinations on time, every time.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">Vehicle Maintenance Knowledge</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Understanding basic vehicle maintenance helps drivers identify issues early and ensure the car is always in top condition for clients.</p>
    `
  },
  6: {
    title: 'Wedding Valet: Making Your Big Day Flawless',
    excerpt: 'How professional valet services at weddings ensure a grand entrance.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop',
    date: 'January 15, 2026',
    category: 'Events',
    readTime: '4 min read',
    author: 'SuprValet Team',
    content: `
      <p class="text-gray-300 leading-relaxed mb-6">Your wedding day is one of the most important days of your life, and every detail matters. A professional valet service can make a significant difference in creating a seamless experience for you and your guests.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">First-Class Guest Experience</h2>
      <p class="text-gray-300 leading-relaxed mb-6">From the moment guests arrive, they should feel welcomed and valued. Professional valet services ensure a grand entrance that sets the tone for the entire celebration.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">Stress-Free Parking for Guests</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Wedding venues can be challenging to navigate, especially with large numbers of guests. Valet services eliminate parking stress, allowing guests to focus on celebrating with you.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">Protecting Your Special Day</h2>
      <p class="text-gray-300 leading-relaxed mb-6">Professional valets are trained to handle vehicles carefully and professionally, ensuring the safety of your guests' cars throughout the event.</p>
      
      <h2 class="text-xl font-semibold text-white mb-4 mt-8">Creating Memorable Moments</h2>
      <p class="text-gray-300 leading-relaxed mb-6">The attention to detail provided by wedding valet services reflects the thought and care you put into every aspect of your special day.</p>
    `
  },
}

export default function BlogDetail() {
  const { id } = useParams()
  const blog = blogs[id] || blogs[1]

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20">
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-500 transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">{blog.category}</span>
            <h1 className="text-3xl md:text-4xl font-display font-black text-white mt-3 mb-6">{blog.title}</h1>
            
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={14} /> {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} /> {blog.readTime}
              </span>
              <span>By {blog.author}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden mb-10 relative"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Share this article:</span>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-500 transition-colors">
                    <Facebook size={16} />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-500 transition-colors">
                    <Twitter size={16} />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-500 transition-colors">
                    <Linkedin size={16} />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-500 transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}