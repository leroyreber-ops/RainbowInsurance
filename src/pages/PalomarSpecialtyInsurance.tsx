import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin, History, Car, Home as HomeIcon, Briefcase, Heart, Anchor, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function PalomarSpecialtyInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - Palomar Specialty Authorized Agent",
    "description": "Get affordable Palomar Specialty insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in Palomar earthquake & catastrophe insurance.",
    "url": "https://rainbowinsuranceoffice.com/palomar-specialty-insurance",
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
        title="Palomar Specialty Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get affordable Palomar Specialty insurance quotes in Fort Worth. Rainbow Insurance Agency shops Palomar & 56 carriers to find the best rates. Call Susan & team!"
        canonical="https://rainbowinsuranceoffice.com/palomar-specialty-insurance"
        schema={carrierSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600&h=900&fit=crop" 
            alt="Palomar Specialty Insurance Protection" 
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
              <span>Authorized Palomar Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              Palomar <br />
              <span className="text-rainbow-gold relative">
                Specialty
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Catastrophe insurance experts. Susan and her expert team at Rainbow Insurance shop Palomar and 56+ A+ rated carriers to find you the absolute lowest rates in Fort Worth.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get Palomar Quote
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
              Palomar Specialty <br />
              <span className="text-rainbow-red">Fort Worth</span> Protection
            </h2>
            <p className="text-2xl text-rainbow-gray font-medium max-w-3xl mx-auto">
              Specialized catastrophe insurance for Texas homeowners. Discover how Palomar and Rainbow Insurance Agency protect you from the unexpected.
            </p>
          </div>

          <ExpandableText maxLines={20}>
            <div className="space-y-12">
              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Expert Palomar Specialty Insurance in Fort Worth</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Palomar Specialty Insurance is a premier provider of catastrophe insurance solutions, specializing in risks that many traditional carriers avoid. In Texas, where weather events can be unpredictable and severe, having a partner like Palomar is essential for comprehensive property protection. As an authorized agent in Fort Worth, Rainbow Insurance Agency is proud to offer Palomar's innovative products to our clients, ensuring that your home and assets are shielded from the most significant risks.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Whether you're concerned about earthquake damage, windstorms, or other catastrophic events, Palomar's data-driven approach to underwriting allows them to provide robust coverage at competitive rates. At Rainbow Insurance Agency, Susan and her team understand the unique environmental challenges of Tarrant County and work tirelessly to ensure your Palomar policy provides the specific safety net you need. We don't just sell insurance; we provide a strategic defense for your most valuable investments.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Palomar Specialty?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Catastrophe Focus</h4>
                    <p className="text-gray-600">Palomar specializes in catastrophe insurance, meaning they have the deep expertise and financial structure necessary to handle large-scale events that might overwhelm standard insurers. Their focus is on being there when you need them most.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Innovative Products</h4>
                    <p className="text-gray-600">From specialized earthquake policies to comprehensive windstorm coverage, Palomar uses advanced technology and data to create products that are both effective and affordable for Texas residents.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Specialized Coverage for Texas Risks</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Texas homeowners face a unique set of risks, from the Gulf Coast to the Panhandle. Palomar Specialty offers products specifically designed to address these challenges, providing peace of mind in the face of nature's power.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li><strong>Earthquake Insurance:</strong> Specialized protection for a risk that is often excluded from standard homeowners policies.</li>
                  <li><strong>Wind & Hail:</strong> Robust coverage for the severe storms that frequently impact the Fort Worth area.</li>
                  <li><strong>Flood Insurance:</strong> Essential protection for properties in flood-prone areas, often offering more flexible options than federal programs.</li>
                  <li><strong>Difference in Conditions (DIC):</strong> Policies designed to fill the gaps in your existing property insurance.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">The Rainbow Insurance Agency Advantage</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Choosing the right catastrophe insurance requires a local partner who knows the landscape. Rainbow Insurance Agency has been serving Fort Worth for over 30 years, providing the expert guidance our community trusts.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li><strong>Comprehensive Shopping:</strong> We compare Palomar against 56+ other carriers to ensure you're getting the best value for your catastrophe protection.</li>
                  <li><strong>Local Expertise:</strong> We understand the specific weather patterns and risk factors of Tarrant County.</li>
                  <li><strong>Personalized Service:</strong> Susan and her team take the time to explain complex catastrophe coverages so you can make informed decisions.</li>
                  <li><strong>Claims Advocacy:</strong> In the event of a disaster, we stand by you, helping you navigate the claims process and get back on your feet.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Understanding Catastrophe Insurance</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Many homeowners don't realize that their standard policy has significant exclusions for major events like earthquakes or specific types of water damage. Palomar Specialty is designed to address these "catastrophic" gaps. Our agents at Rainbow Insurance Agency can review your current coverage and show you how a Palomar policy can provide the complete protection your home deserves. Don't wait for the storm to find out you're underinsured.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Key Palomar Specialty Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Data-Driven Rates", desc: "Competitive pricing based on advanced risk modeling." },
                    { title: "Flexible Deductibles", desc: "Options to adjust your deductible to fit your budget." },
                    { title: "Fast Claims", desc: "Efficient claims handling designed for large-scale events." },
                    { title: "Financial Stability", desc: "Strong financial backing to ensure claims are paid." },
                    { title: "Specialized Wording", desc: "Policy language specifically crafted for catastrophe risks." },
                    { title: "Expert Support", desc: "Access to specialists who understand catastrophic loss." }
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
                    { q: "Does my standard home insurance cover earthquakes?", a: "In most cases, no. Earthquake coverage typically requires a separate policy or endorsement, which Palomar specializes in." },
                    { q: "Is Palomar Specialty Insurance available throughout Texas?", a: "Yes, Palomar offers a range of catastrophe products designed for the unique risks faced by Texas residents." },
                    { q: "How do I know if I need catastrophe insurance?", a: "If you live in an area prone to severe storms, floods, or seismic activity, catastrophe insurance from Palomar is a vital part of a complete protection plan." }
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
                    { title: "Local Experts", desc: "We know Fort Worth risks and weather.", icon: MapPin },
                    { title: "Fast Quotes", desc: "Get covered in minutes, not days.", icon: Zap },
                    { title: "56+ Carriers", desc: "We shop so you don't have to.", icon: Award },
                    { title: "Catastrophe Pros", desc: "We handle the big events.", icon: ShieldCheck }
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
                    "Palomar through Rainbow gave me the extra protection I needed for my home. Susan and her team were so helpful in explaining why I needed it."
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">S</div>
                    <div>
                      <div className="text-2xl font-black text-white">Sarah M.</div>
                      <div className="text-rainbow-gold font-bold">Fort Worth Homeowner</div>
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
              <span className="text-rainbow-gold">Palomar Today</span>
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
