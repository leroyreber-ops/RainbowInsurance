import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin, History, Car, Home as HomeIcon, Briefcase, Heart, Anchor, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function SpinnakerInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - Spinnaker Authorized Agent",
    "description": "Get affordable Spinnaker insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in Spinnaker home & business insurance & 56+ carriers.",
    "url": "https://rainbowinsuranceoffice.com/spinnaker-insurance",
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

  const seoContent = `
    <h2>Expert Spinnaker Insurance Solutions in Fort Worth</h2>
    <p>Spinnaker Insurance Company is a leading provider of innovative insurance solutions, known for its ability to handle modern risks and provide tailored coverage that standard carriers often overlook. In the dynamic economic landscape of Fort Worth, businesses and individuals frequently encounter unique challenges that require more than just a basic policy. As an authorized agent for Spinnaker, Rainbow Insurance Agency brings this high-level expertise to your doorstep, ensuring that your specific needs are met with precision and care.</p>

    <p>Whether you're managing a specialized business, a unique property, or have specific liability concerns, Spinnaker's innovative approach to insurance provides the flexibility and depth of coverage required for modern risks. At Rainbow Insurance Agency, Susan and her team specialize in translating these complex insurance products into clear, actionable solutions for our clients in Tarrant County. We don't just provide a policy; we provide a strategic partnership designed to protect your future.</p>

    <h2>Why Choose Spinnaker Insurance?</h2>
    <p>Spinnaker excels in niche markets and specialty lines, offering coverage for risks that traditional insurers might find too complex. Their deep understanding of specific industries and risk profiles allows them to create highly effective protection strategies. In a rapidly changing world, Spinnaker's agile underwriting process means they can respond quickly to new risks and market shifts, providing timely coverage when you need it most.</p>

    <h2>Tailored Coverage for Tarrant County</h2>
    <p>The Fort Worth area is home to a diverse range of industries and property types, from historic homes to cutting-edge tech firms. Spinnaker Insurance recognizes this diversity and offers products that can be customized to the specific requirements of the local market.</p>

    <ul>
      <li><strong>Home Insurance:</strong> Comprehensive protection for your primary residence, personal property, and liability.</li>
      <li><strong>Business Insurance:</strong> Robust protection for businesses against common risks and unexpected lawsuits.</li>
      <li><strong>Specialty Property:</strong> Coverage for unique structures, high-value assets, and properties with specific risk factors.</li>
      <li><strong>Professional Liability:</strong> Protection for professionals across various fields against claims of negligence or errors.</li>
    </ul>

    <h2>The Rainbow Insurance Agency Advantage</h2>
    <p>Navigating modern insurance requires a guide who understands both the products and the local community. Rainbow Insurance Agency has been a fixture in Fort Worth for over 30 years, providing the stability and expertise our clients rely on.</p>

    <ul>
      <li><strong>Market Comparison:</strong> We shop Spinnaker against 56+ other carriers to ensure your modern coverage is also competitively priced.</li>
      <li><strong>Local Knowledge:</strong> We understand the specific regulatory and economic environment of Fort Worth and Texas.</li>
      <li><strong>Dedicated Support:</strong> Susan and her team are always available to answer questions and provide guidance as your needs evolve.</li>
      <li><strong>Integrity First:</strong> Our reputation is built on honesty and finding the right solution for the client, every time.</li>
    </ul>

    <h2>Understanding Modern Insurance</h2>
    <p>Modern insurance isn't just for large corporations. Small businesses and individuals with unique assets often find that standard policies leave significant gaps in their protection. Spinnaker fills these gaps, providing the specific language and coverage limits necessary to truly mitigate risk. Our agents at Rainbow Insurance Agency can perform a comprehensive risk assessment to identify where you might be vulnerable and how a Spinnaker policy can provide the necessary shield.</p>
  `;

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Spinnaker Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get affordable Spinnaker insurance quotes in Fort Worth. Rainbow Insurance Agency shops Spinnaker & 56 carriers to find the best rates. Call Susan & team!"
        canonical="https://rainbowinsuranceoffice.com/spinnaker-insurance"
        schema={carrierSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop" 
            alt="Spinnaker Insurance Protection" 
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
              className="inline-flex items-center gap-2 bg-[#004a99] text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-2xl border border-white/20"
            >
              <Award className="w-4 h-4" />
              <span>Authorized Spinnaker Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              Spinnaker <br />
              <span className="text-rainbow-gold relative">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Modern protection for your home and business. Susan and her expert team at Rainbow Insurance shop Spinnaker and 56+ A+ rated carriers to find you the absolute lowest rates in Fort Worth.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get Spinnaker Quote
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

      {/* Massive SEO Content Section Area */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black text-rainbow-ink mb-6 leading-tight">
              Spinnaker Insurance <br />
              <span className="text-rainbow-red">Fort Worth</span> Experts
            </h2>
            <p className="text-2xl text-rainbow-gray font-medium max-w-3xl mx-auto">
              Innovative insurance solutions for modern risks. Discover how Spinnaker and Rainbow Insurance Agency provide the protection you need.
            </p>
          </div>

          <ExpandableText 
            className="prose prose-lg max-w-none"
            buttonClassName="text-rainbow-pink"
          >
            {seoContent}
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
                    { title: "Modern Pros", desc: "We handle the complex cases.", icon: ShieldCheck }
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
                    "Spinnaker through Rainbow was the perfect solution for my modern business. Susan and her team understood exactly what I needed and found a rate that worked."
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
              <span className="text-rainbow-gold">Spinnaker Today</span>
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
