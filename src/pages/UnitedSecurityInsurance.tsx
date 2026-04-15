import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin, History, Car, Home as HomeIcon, Briefcase, Heart, Anchor, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ReadMore from '../components/ReadMore';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function UnitedSecurityInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - United Security Authorized Agent",
    "description": "Get affordable United Security insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in United Security auto insurance & 56+ carriers.",
    "url": "https://rainbowinsuranceoffice.com/united-security-insurance",
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
        title="United Security Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get affordable United Security insurance quotes in Fort Worth. Rainbow Insurance Agency shops United Security & 56 carriers to find the best rates. Call Susan & team!"
        canonical="https://rainbowinsuranceoffice.com/united-security-insurance"
        schema={carrierSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533558701576-23c65e926363?w=1600&h=900&fit=crop" 
            alt="United Security Insurance Protection" 
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
              <span>Authorized United Security Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              United <br />
              <span className="text-rainbow-gold relative">
                Security
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Reliable auto protection for every driver. Susan and her expert team at Rainbow Insurance shop United Security and 56+ A+ rated carriers to find you the absolute lowest rates in Fort Worth.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get United Security Quote
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
              United Security Insurance <br />
              <span className="text-rainbow-red">Fort Worth</span> Experts
            </h2>
            <p className="text-2xl text-rainbow-gray font-medium max-w-3xl mx-auto">
              Reliable auto insurance for every driver. Discover how United Security and Rainbow Insurance Agency keep you protected on the road.
            </p>
          </div>

          <ReadMore>
            <div className="space-y-12">
              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Expert United Security Insurance Solutions in Fort Worth</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  United Security Insurance Company is a leading provider of auto insurance solutions, known for its commitment to providing reliable and affordable coverage for a wide range of drivers. In a busy city like Fort Worth, where traffic and road conditions can be challenging, having a partner that understands the local landscape is essential. United Security offers flexible and competitive products that meet the specific needs of the Texas market, ensuring that every driver has access to the protection they deserve.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Whether you have a perfect driving record or have encountered some challenges on the road, United Security's specialized approach provides the protection you need at a price that fits your budget. At Rainbow Insurance Agency, Susan and her team have extensive experience working with United Security, ensuring that our clients in Tarrant County get the best possible rates and service. We believe that every driver deserves reliable protection, and United Security is a key partner in making that a reality for our community.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Why Choose United Security Insurance?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Reliable Protection</h4>
                    <p className="text-gray-600">United Security is known for its commitment to providing reliable and comprehensive auto insurance, ensuring that your vehicle and liability are well-shielded against a wide range of perils.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Competitive Rates</h4>
                    <p className="text-gray-600">United Security offers affordable protection for a wide range of drivers, making it a top choice for those looking for a great value on their auto insurance.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Comprehensive Auto Protection for Fort Worth Drivers</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Driving in the DFW metroplex requires robust auto insurance. United Security Insurance offers a range of products to ensure you're protected against the unexpected on the road.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li><strong>Liability Coverage:</strong> Meeting Texas state requirements for bodily injury and property damage.</li>
                  <li><strong>Collision & Comprehensive:</strong> Protecting your vehicle against accidents, theft, and environmental damage.</li>
                  <li><strong>Uninsured/Underinsured Motorist:</strong> Essential protection against drivers who don't have adequate insurance.</li>
                  <li><strong>Personal Injury Protection:</strong> Coverage for medical expenses and lost wages for you and your passengers.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">The Rainbow Insurance Agency Advantage</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  While United Security provides the coverage, Rainbow Insurance Agency provides the local expertise and advocacy. We've been serving Fort Worth for over 30 years, and we know how to get our clients the best results.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li><strong>Market Comparison:</strong> We shop United Security against 56+ other carriers to ensure your auto policy is also a great value.</li>
                  <li><strong>Local Knowledge:</strong> We understand the specific traffic patterns and risk areas of Fort Worth and Tarrant County.</li>
                  <li><strong>Personalized Service:</strong> Susan and her team take the time to understand your driving history and find the best fit for your budget.</li>
                  <li><strong>Claims Support:</strong> If you're ever in an accident, we're here to help you navigate the claims process and get back on the road fast.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Navigating Auto Insurance in Texas</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Auto insurance in Texas can be complex, with various coverage options and legal requirements to consider. By working with a reliable carrier like United Security, you can find coverage that fits your unique situation. Our agents at Rainbow Insurance Agency are experts in the Texas auto market and can help you identify every possible discount and savings opportunity. We believe in providing the best service and the best rates, regardless of your driving history.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Key United Security Insurance Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Affordable Premiums", desc: "Competitive pricing for a wide range of drivers." },
                    { title: "Flexible Payments", desc: "Choose a payment plan that fits your monthly budget." },
                    { title: "Fast Quotes", desc: "Get a comprehensive auto insurance quote in minutes." },
                    { title: "Reliable Claims", desc: "Efficient claims handling to get you back on the road fast." },
                    { title: "Local Support", desc: "Professional guidance from Fort Worth-based insurance experts." },
                    { title: "Comprehensive Shield", desc: "Protection that meets or exceeds industry standards." }
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
                    { q: "Is United Security Insurance a reliable choice for Fort Worth drivers?", a: "Yes, United Security is a well-regarded provider that specializes in reliable and affordable auto insurance." },
                    { q: "Does United Security offer coverage for drivers with accidents?", a: "Yes, United Security provides coverage for a wide range of drivers, including those with less-than-perfect records." },
                    { q: "How do I get a United Security quote through Rainbow Insurance Agency?", a: "As an authorized agent, we can provide you with a competitive United Security quote in minutes." }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-gray-200 pb-6">
                      <h4 className="text-xl font-bold mb-2 text-gray-900">{faq.q}</h4>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </ReadMore>
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
                    { title: "Local Experts", desc: "We know Fort Worth traffic and risks.", icon: MapPin },
                    { title: "Fast Quotes", desc: "Get covered in minutes, not days.", icon: Zap },
                    { title: "56+ Carriers", desc: "We shop so you don't have to.", icon: Award },
                    { title: "Auto Pros", desc: "We handle the hard cases.", icon: ShieldCheck }
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
                    "United Security through Rainbow was the best decision for my car insurance. Susan and her team were so helpful and the rates were unbeatable!"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">D</div>
                    <div>
                      <div className="text-2xl font-black text-white">David S.</div>
                      <div className="text-rainbow-gold font-bold">Fort Worth Resident</div>
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
              <span className="text-rainbow-gold">United Security Today</span>
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed font-medium">
              Join thousands of Fort Worth residents who have found the best rates and best service with Rainbow Insurance.
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
