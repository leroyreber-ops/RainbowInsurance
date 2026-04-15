import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin, History, Car, Home as HomeIcon, Briefcase, Heart, Anchor, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function ObsidianInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - Obsidian Authorized Agent",
    "description": "Get affordable Obsidian insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in Obsidian specialty insurance & 56+ carriers.",
    "url": "https://rainbowinsuranceoffice.com/obsidian-insurance",
    "telephone": "817-922-8031",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2209 8th Ave",
      "addressLocality": "Fort Worth",
      "addressRegion": "TX",
      "postalCode": "76110",
      "addressCountry": "US"
    }
  };

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Obsidian Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get affordable Obsidian insurance quotes in Fort Worth. Rainbow Insurance Agency shops Obsidian & 56 carriers to find the best rates. Call Susan & team!"
        canonical="https://rainbowinsuranceoffice.com/obsidian-insurance"
        schema={carrierSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop" 
            alt="Obsidian Insurance Protection" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl text-white"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-2xl border border-white/20"
            >
              <Award className="w-4 h-4" />
              <span>Authorized Obsidian Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              Obsidian <br />
              <span className="text-rainbow-gold relative">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Specialized protection for unique risks. Susan and her expert team at Rainbow Insurance shop Obsidian and 56+ A+ rated carriers to find you the absolute lowest rates in Fort Worth.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get Obsidian Quote
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                <Phone className="w-8 h-8" />
                817-922-8031
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-3xl border border-gray-100 p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Carriers", value: "56+", icon: Award },
            { label: "Years", value: "30+", icon: Clock },
            { label: "Rating", value: "4.9", icon: Star },
            { label: "Clients", value: "10k+", icon: Users }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-rainbow-pink/5 rounded-2xl flex items-center justify-center mb-2">
                <stat.icon className="w-8 h-8 text-rainbow-pink" />
              </div>
              <div className="text-4xl font-black text-gray-900">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest font-black text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Massive SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black text-rainbow-ink mb-6 leading-tight">
              Obsidian Insurance <br />
              <span className="text-rainbow-red">Fort Worth</span> Solutions
            </h2>
            <p className="text-2xl text-rainbow-gray font-medium max-w-3xl mx-auto">
              Specialized insurance for complex risks. Discover how Obsidian and Rainbow Insurance Agency provide the high-level protection you need.
            </p>
          </div>

          <ExpandableText maxLines={20}>
            <div className="space-y-12">
              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Expert Obsidian Insurance Guidance in Fort Worth</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Obsidian Insurance is a leading provider of specialty insurance solutions, known for its ability to handle complex risks and provide tailored coverage that standard carriers often overlook. In the dynamic economic landscape of Fort Worth, businesses and individuals frequently encounter unique challenges that require more than just a basic policy. As an authorized agent for Obsidian, Rainbow Insurance Agency brings this high-level expertise to your doorstep, ensuring that your specific needs are met with precision and care.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Whether you're managing a specialized business, a unique property, or have specific liability concerns, Obsidian's innovative approach to insurance provides the flexibility and depth of coverage required for modern risks. At Rainbow Insurance Agency, Susan and her team specialize in translating these complex insurance products into clear, actionable solutions for our clients in Tarrant County. We don't just provide a policy; we provide a strategic partnership designed to protect your future.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Obsidian Insurance?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Specialty Expertise</h4>
                    <p className="text-gray-600">Obsidian excels in niche markets and specialty lines, offering coverage for risks that traditional insurers might find too complex. Their deep understanding of specific industries and risk profiles allows them to create highly effective protection strategies.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Agile Underwriting</h4>
                    <p className="text-gray-600">In a rapidly changing world, Obsidian's agile underwriting process means they can respond quickly to new risks and market shifts, providing timely coverage when you need it most.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Tailored Coverage for Tarrant County</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The Fort Worth area is home to a diverse range of industries and property types, from historic homes to cutting-edge tech firms. Obsidian Insurance recognizes this diversity and offers products that can be customized to the specific requirements of the local market.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li><strong>Specialty Property:</strong> Coverage for unique structures, high-value assets, and properties with specific risk factors.</li>
                  <li><strong>Professional Liability:</strong> Protection for professionals across various fields against claims of negligence or errors.</li>
                  <li><strong>General Liability:</strong> Robust protection for businesses against common risks and unexpected lawsuits.</li>
                  <li><strong>Customized Solutions:</strong> The ability to build a policy from the ground up to address your exact risk profile.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">The Rainbow Insurance Agency Advantage</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Navigating specialty insurance requires a guide who understands both the products and the local community. Rainbow Insurance Agency has been a fixture in Fort Worth for over 30 years, providing the stability and expertise our clients rely on.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li><strong>Market Comparison:</strong> We shop Obsidian against 56+ other carriers to ensure your specialty coverage is also competitively priced.</li>
                  <li><strong>Local Knowledge:</strong> We understand the specific regulatory and economic environment of Fort Worth and Texas.</li>
                  <li><strong>Dedicated Support:</strong> Susan and her team are always available to answer questions and provide guidance as your needs evolve.</li>
                  <li><strong>Integrity First:</strong> Our reputation is built on honesty and finding the right solution for the client, every time.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Understanding Specialty Insurance</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Specialty insurance isn't just for large corporations. Small businesses and individuals with unique assets often find that standard policies leave significant gaps in their protection. Obsidian fills these gaps, providing the specific language and coverage limits necessary to truly mitigate risk. Our agents at Rainbow Insurance Agency can perform a comprehensive risk assessment to identify where you might be vulnerable and how an Obsidian policy can provide the necessary shield.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Key Obsidian Insurance Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Custom Limits", desc: "Higher coverage limits for significant assets and liabilities." },
                    { title: "Niche Focus", desc: "Expertise in specific industries like construction, tech, and more." },
                    { title: "Risk Management", desc: "Tools and resources to help you prevent losses before they happen." },
                    { title: "Fast Response", desc: "Quick turnaround on quotes and policy adjustments." },
                    { title: "A-Rated Security", desc: "Backed by strong financial ratings for your peace of mind." },
                    { title: "Expert Claims", desc: "Specialized claims handling for complex and unique losses." }
                  ].map((feature, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl mb-2 text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {[
                    { q: "What makes Obsidian different from standard carriers?", a: "Obsidian focuses on specialty and complex risks that standard carriers often decline, providing more flexible and tailored coverage options." },
                    { q: "Is Obsidian Insurance available for small businesses in Fort Worth?", a: "Yes, Obsidian offers solutions for businesses of all sizes that have unique or specialized insurance needs." },
                    { q: "How do I know if I need specialty insurance?", a: "If your business or assets have unique risks not covered by a standard policy, or if you've been declined by traditional insurers, specialty insurance from Obsidian may be the right choice." }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-gray-200 pb-6">
                      <h4 className="text-xl font-bold mb-2 text-gray-900">{faq.q}</h4>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </ExpandableText>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rainbow-gold/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
                  The Best Service <br />
                  <span className="text-rainbow-gold">In Fort Worth</span>
                </h2>
                <p className="text-2xl text-white/70 mb-12 leading-relaxed font-medium">
                  We don't just sell insurance; we provide peace of mind. Our team is dedicated to finding you the best rates and providing the best service in Tarrant County.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Local Experts", desc: "We know Fort Worth business and risks.", icon: MapPin },
                    { title: "Fast Quotes", desc: "Get covered in minutes, not days.", icon: Zap },
                    { title: "56+ Carriers", desc: "We shop so you don't have to.", icon: Award },
                    { title: "Specialty Pros", desc: "We handle the complex cases.", icon: ShieldCheck }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-rainbow-gold transition-all border border-white/10">
                        <item.icon className="w-6 h-6 text-rainbow-gold group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-white mb-1">{item.title}</h4>
                        <p className="text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-rainbow-pink rounded-[3rem] rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform" />
                <div className="bg-white/5 backdrop-blur-md p-12 rounded-[3rem] border border-white/10 relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-rainbow-gold fill-rainbow-gold" />)}
                  </div>
                  <p className="text-3xl text-white italic font-medium mb-10 leading-relaxed">
                    "Obsidian through Rainbow was the perfect solution for my specialized business. Susan and her team understood exactly what I needed and found a rate that worked."
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">R</div>
                    <div>
                      <div className="text-2xl font-black text-white">Robert K.</div>
                      <div className="text-rainbow-gold font-bold">Fort Worth Business Owner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rainbow-pink to-rainbow-rose rounded-[4rem] p-12 md:p-24 text-white shadow-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rainbow-gold/20 rounded-full -ml-48 -mb-48 blur-[100px]" />
            
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tight">
              Start Saving with <br className="hidden md:block" />
              <span className="text-rainbow-gold">Obsidian Today</span>
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed font-medium">
              Join thousands of Fort Worth residents and businesses who have found the best rates and best service with Rainbow Insurance.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <button 
                onClick={openQuoteForm}
                className="bg-white text-rainbow-pink hover:bg-gray-100 px-14 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get My Free Quote
                <ArrowRight className="w-8 h-8" />
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-14 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4 border-2 border-white/20"
              >
                <Phone className="w-8 h-8" />
                817-922-8031
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
