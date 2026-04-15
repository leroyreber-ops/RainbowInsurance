import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, Tag, Clock, Newspaper, Zap, Shield, Heart } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

const blogPosts = [
  {
    title: "Understanding Texas Auto Insurance Requirements",
    excerpt: "Texas law requires drivers to have at least 30/60/25 coverage. But is that enough to protect your assets in Fort Worth? Susan explains the risks of minimum coverage.",
    date: "April 12, 2026",
    author: "Susan",
    category: "Auto Insurance",
    image: "https://picsum.photos/seed/texas-auto/800/500",
    path: "/blog/understanding-texas-auto-insurance"
  },
  {
    title: "Homeowners Insurance Guide: Protecting Your DFW Home",
    excerpt: "From North Texas hailstorms to foundation issues, owning a home in Fort Worth comes with unique risks. Learn how to choose the right policy for your property.",
    date: "April 10, 2026",
    author: "Susan",
    category: "Home Insurance",
    image: "https://picsum.photos/seed/dfw-home/800/500",
    path: "/blog/homeowners-insurance-guide"
  },
  {
    title: "Small Business Insurance Tips for Local Entrepreneurs",
    excerpt: "Starting a business in Fort Worth? Don't let a single liability claim derail your dreams. Here's what every local business owner needs to know about coverage.",
    date: "April 8, 2026",
    author: "Susan",
    category: "Business Insurance",
    image: "https://picsum.photos/seed/small-business/800/500",
    path: "/blog/small-business-insurance-tips"
  },
  {
    title: "Umbrella Insurance Explained: Do You Really Need It?",
    excerpt: "You might think umbrella insurance is only for the wealthy, but in today's litigious world, it's a vital safety net for many Fort Worth families.",
    date: "April 5, 2026",
    author: "Susan",
    category: "Specialty Insurance",
    image: "https://picsum.photos/seed/umbrella/800/500",
    path: "/blog/umbrella-insurance-explained"
  },
  {
    title: "Fort Worth Weather: How to Prepare Your Insurance",
    excerpt: "Spring in North Texas means severe weather. Is your insurance ready for the next big storm? Susan shares her top tips for storm preparedness.",
    date: "April 2, 2026",
    author: "Susan",
    category: "Local News",
    image: "https://picsum.photos/seed/fort-worth-storm/800/500",
    path: "/blog/fort-worth-weather-insurance"
  },
  {
    title: "SR-22 Insurance Requirements in Texas",
    excerpt: "Need an SR-22 filing to get your license back? Susan and her team specialize in fast, affordable SR-22 solutions for Fort Worth drivers.",
    date: "March 30, 2026",
    author: "Susan",
    category: "Auto Insurance",
    image: "https://picsum.photos/seed/sr22-texas/800/500",
    path: "/blog/sr22-insurance-requirements"
  }
];

export default function Blog({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Insurance Blog & News | Rainbow Insurance Agency Fort Worth"
        description="Stay informed with the latest insurance tips, news, and guides from Susan and her team at Rainbow Insurance Agency. Expert advice for Fort Worth residents."
        canonical="https://rainbowinsuranceoffice.com/blog"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-rainbow-pink/10 text-rainbow-pink px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider border border-rainbow-pink/20 mb-8"
          >
            <Newspaper className="w-4 h-4" />
            <span>The Rainbow Insurance Blog</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
            Insights & <span className="text-rainbow-pink">Advice</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Expert insurance guidance from Susan and her team to help you protect what matters most in Fort Worth and across North Texas.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => navigateTo(post.path)}
              >
                <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-[16/10] shadow-xl">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-black text-rainbow-pink shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 group-hover:text-rainbow-pink transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-lg text-gray-600 font-medium leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-rainbow-gold font-black text-lg group-hover:gap-4 transition-all">
                    Read Article <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-rainbow-pink/20 to-rainbow-gold/20 p-12 md:p-20 rounded-[4rem] border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rainbow-gold/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rainbow-pink/10 rounded-full blur-3xl -ml-48 -mb-48" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Get Susan's <span className="text-rainbow-gold">Best</span> Tips Directly
              </h2>
              <p className="text-xl text-gray-300 font-medium leading-relaxed">
                Join our community of informed Fort Worth residents. We send out monthly updates on how to save money and stay protected in North Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border border-white/20 px-8 py-5 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-rainbow-gold transition-colors text-lg font-medium min-w-[300px]"
                />
                <button className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl">
                  Subscribe Now
                </button>
              </div>
              <p className="text-sm text-gray-500 font-medium">We respect your privacy. No spam, ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extensive Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="prose prose-2xl prose-gray max-w-none font-medium leading-relaxed text-gray-600">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Your Source for Local Insurance Knowledge</h2>
            <p>
              In an era of automated call centers and generic online advice, Rainbow Insurance Agency remains committed to providing local, relevant information for our Fort Worth community. Our blog is more than just a marketing tool; it's an educational resource designed to help you make informed decisions about your financial security.
            </p>
            <p>
              Susan and her team have seen it all in their 30+ years of service. From the massive hailstorms that batter North Texas to the complex insurance laws that govern our state, we bring a wealth of practical experience to every article we write.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Why Local Advice Matters</h3>
            <p>
              Insurance is highly regional. A policy that works in California or New York might be completely inadequate for someone living in Tarrant County. We understand the specific risks associated with our local climate, traffic patterns, and economic environment. This local focus allows us to provide advice that is truly actionable and beneficial for our neighbors.
            </p>
            <p>
              Whether you're a first-time homebuyer in Keller, a small business owner in downtown Fort Worth, or a long-time resident looking to optimize your coverage, our blog has something for you. We invite you to explore our articles and reach out if you have any questions.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Heart className="w-16 h-16 text-rainbow-pink mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Need personalized advice?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team are ready to help you personally.</p>
            <button 
              onClick={openQuoteForm}
              className="bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
