import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Award, Users, ThumbsUp, Heart, Zap } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function BestInsuranceAgency({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Best Insurance Agency in Fort Worth | Rainbow Insurance Agency"
        description="Discover why Rainbow Insurance Agency is rated the best insurance agency in Fort Worth. Susan and her team offer the best rates, best service, and best policies."
        canonical="https://rainbowinsuranceoffice.com/best-insurance-agency"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-rainbow-ink text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rainbow-gold rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rainbow-pink rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-rainbow-gold font-black uppercase tracking-wider mb-8 border border-white/20"
            >
              <Award className="w-5 h-5" />
              <span>Rated #1 in Fort Worth</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
              The <span className="text-rainbow-gold italic">Best</span> Insurance Agency in Fort Worth
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 font-medium leading-relaxed">
              When Susan founded Rainbow Insurance Agency in 1993, she had one simple mission: to provide the best service, the best policies, and the best rates in North Texas. Today, we continue that legacy as the region's premier independent agency.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-pink hover:bg-rainbow-rose text-white px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105 shadow-2xl flex items-center gap-3"
              >
                Get My Free Quote <ArrowRight className="w-6 h-6" />
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all border border-white/20 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" /> 817-922-8031
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Best Service",
                icon: Heart,
                color: "text-rainbow-pink",
                bg: "bg-rainbow-pink/10",
                text: "We treat every client like family. Susan's personal touch and our team's dedication ensure you're never just a policy number. We're here for you 24/7."
              },
              {
                title: "Best Policies",
                icon: Shield,
                color: "text-rainbow-gold",
                bg: "bg-rainbow-gold/10",
                text: "With access to 56+ A+ rated carriers, we find the exact coverage you need. We don't believe in one-size-fits-all insurance; we tailor every policy."
              },
              {
                title: "Best Rates",
                icon: Zap,
                color: "text-blue-600",
                bg: "bg-blue-50",
                text: "Our independence allows us to shop the entire market. We compare prices across dozens of companies to find the absolute lowest rates available."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden group"
              >
                <div className={`w-20 h-20 ${pillar.bg} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`w-10 h-10 ${pillar.color}`} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">{pillar.title}</h3>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Content Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                Why We Are the <span className="text-rainbow-pink">Top Choice</span> for Fort Worth Families
              </h2>
              <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed">
                <p>
                  Finding the right insurance agency is about more than just finding a low price. It's about finding a partner who will be there when things go wrong. At Rainbow Insurance Agency, we've spent over three decades building a reputation for integrity, transparency, and unwavering support for our community.
                </p>
                <p>
                  Susan's philosophy is simple: "If it's not good enough for my family, it's not good enough for yours." This commitment to quality is why we've been recognized as the best insurance agency in Fort Worth year after year. We don't just sell insurance; we provide a safety net for your most valuable assets.
                </p>
                <ul className="space-y-4">
                  {[
                    "30+ Years of Local Experience",
                    "Independent Agency Advantage",
                    "56+ A+ Rated Insurance Carriers",
                    "Personalized Claims Assistance",
                    "Bilingual Support (English & Spanish)",
                    "Community-First Approach"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-900 font-bold">
                      <CheckCircle2 className="w-6 h-6 text-rainbow-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-rainbow-gold/10 rounded-[3rem] rotate-3 scale-105" />
              <img 
                src="https://picsum.photos/seed/fort-worth-agency/800/1000" 
                alt="Best Insurance Agency Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl object-cover w-full h-[600px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-gray-100 max-w-xs">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-rainbow-gold fill-rainbow-gold" />)}
                </div>
                <p className="font-black text-gray-900 text-lg mb-1">"Best in the Business!"</p>
                <p className="text-gray-500 font-medium italic">"Susan saved us $1,200 a year on our home and auto bundle."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Years Serving DFW", value: "30+" },
              { label: "Insurance Carriers", value: "56+" },
              { label: "Happy Clients", value: "10k+" },
              { label: "Claims Resolved", value: "25k+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-5xl md:text-7xl font-black text-rainbow-gold">{stat.value}</div>
                <div className="text-lg text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extensive Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="prose prose-2xl prose-gray max-w-none font-medium leading-relaxed text-gray-600">
            <h2 className="text-4xl font-black text-gray-900 mb-8">What Makes an Agency "The Best"?</h2>
            <p>
              In the crowded world of insurance, many agencies claim to be the best. But at Rainbow Insurance Agency, we define "best" through our actions and our results. To us, being the best means having the depth of knowledge to handle complex commercial risks while maintaining the warmth to help a first-time driver understand their coverage.
            </p>
            <p>
              Our status as an independent agency is a cornerstone of our success. Unlike "captive" agents who can only offer products from a single company, we represent you. We have the freedom to shop around, compare terms, and negotiate on your behalf. This independence ensures that your interests always come first.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">The Susan Standard</h3>
            <p>
              Susan's leadership has shaped every aspect of our agency. She believes that insurance is a people business, not a paper business. This "Susan Standard" means that when you call us, you'll speak to a real person who knows your name and understands your history. It means that we proactively review your policies to ensure you're still getting the best value as your life changes.
            </p>
            <p>
              Whether you're in Fort Worth, Dallas, Arlington, or anywhere in the DFW Metroplex, you deserve an insurance partner who is as committed to your protection as you are. That's the Rainbow Insurance Agency promise.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to experience the best?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Join the thousands of North Texans who trust Susan and her team.</p>
            <button 
              onClick={openQuoteForm}
              className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
            >
              Get Your Best Rate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
