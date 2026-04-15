import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, MapPin, Zap, Car, Home, Building2, ShieldCheck, Info } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { useState } from 'react';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function McKinneyInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const mckinneySchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - McKinney",
    "description": "Cheap car insurance and SR-22 specialists in McKinney, TX. We shop 56+ carriers to find the best rates for McKinney drivers.",
    "url": "https://rainbowinsuranceoffice.com/mckinney-insurance",
    "telephone": "817-922-8031",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "McKinney",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.1972",
      "longitude": "-96.6398"
    },
    "areaServed": {
      "@type": "City",
      "name": "McKinney"
    }
  };

  const contentBlocks = [
    {
      title: "Affordable Auto Insurance in McKinney, TX",
      content: `McKinney is a city that consistently ranks as one of the best places to live in America, known for its historic charm and rapid growth. From the cobblestone streets of Chestnut Square to the modern developments in Craig Ranch, McKinney drivers need insurance that reflects the city's high standards. At Rainbow Insurance Agency, we specialize in finding the absolute lowest rates on car insurance for McKinney residents.

Whether you're commuting to work via Highway 75, the Sam Rayburn Tollway (121), or Highway 380, we ensure you're protected. Susan and her expert team are experts at shopping over 56 A+ rated carriers to find the policy that fits your specific needs. We understand that McKinney families value both quality and community, and we deliver both.

Finding "cheap car insurance" in McKinney doesn't mean you have to compromise on coverage. As independent agents, we have access to a wide range of companies that many direct-to-consumer insurers can't match. We look for every possible discount, from multi-policy savings to safe driver rewards, ensuring that you get the most comprehensive coverage at the best possible price.`
    },
    {
      title: "McKinney SR-22 and High-Risk Insurance Experts",
      content: `If you've had a few driving infractions in McKinney, such as tickets, accidents, or a requirement for an SR-22 filing, Rainbow Insurance Agency is here to help. We are the premier SR-22 specialists in the McKinney area, providing expert guidance and affordable options for high-risk drivers.

An SR-22 is a certificate of financial responsibility required by the state of Texas. Many standard insurance companies will shy away from drivers who need an SR-22, but we embrace the challenge. Because we represent 56+ carriers, we know exactly which ones offer the best rates for SR-22 filings in McKinney.

Susan and her expert team provide a supportive and professional environment to help you navigate the SR-22 process. We handle all the paperwork and ensure your filing is processed correctly with the Texas DPS. We believe that everyone in McKinney deserves a second chance and the ability to drive safely and legally.`
    },
    {
      title: "Comprehensive Protection for McKinney Homes and Businesses",
      content: `McKinney is a city of beautiful neighborhoods and thriving businesses. At Rainbow Insurance Agency, we offer a full range of insurance products tailored to the needs of McKinney residents and business owners. Our Homeowners Insurance policies provide robust protection against the unpredictable Texas weather, ensuring your home is covered from roof to foundation.

For McKinney's thriving business community, we offer specialized Commercial Insurance solutions. Whether you're a small business in the historic downtown or a growing company in the industrial district, we can protect your business from liability, property damage, and more. Our commercial lines include general liability, workers' compensation, and commercial auto insurance, all backed by our commitment to "Best Rates, Best Service."

We also offer Renters Insurance for those living in McKinney's many vibrant apartment communities, as well as specialized coverage for motorcycles, RVs, and boats. Whatever you need to protect in McKinney, Rainbow Insurance has the expertise and the carrier network to find you the perfect policy.`
    },
    {
      title: "The Rainbow Insurance Advantage in McKinney",
      content: `Why choose Rainbow Insurance Agency for your McKinney insurance needs? It's our combination of local expertise and massive shopping power. When you call us, you're not just a number; you're a neighbor. You'll speak with Susan and her expert team—experts who are dedicated to finding you the best value.

We are proud to serve all of McKinney, including:
• Historic Downtown McKinney
• Craig Ranch & West McKinney
• Stonebridge Ranch & Adriatica
• McKinney North & Prosper border
• McKinney East & Fairview border
• All surrounding Collin County communities

Our independence is your greatest asset. We don't work for the insurance companies; we work for you. This means we are always on your side, looking for ways to save you money and improve your coverage. Believe in us for your McKinney insurance needs, and experience the best rates and the best service in North Texas today.`
    }
  ];

  return (
    <div className="bg-slate-50">
      <SEO 
        title="McKinney Car Insurance & SR-22 | Cheap Rates & Best Service"
        description="Looking for cheap car insurance in McKinney, TX? Rainbow Insurance Agency shops 56+ carriers to find the best rates. SR-22 specialists. Call Susan & team today!"
        schema={mckinneySchema}
        canonical="https://rainbowinsuranceoffice.com/mckinney-insurance"
      />

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop" 
            alt="McKinney Landscape" 
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
              className="inline-flex items-center gap-2 bg-rainbow-gold text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-2xl border border-white/20"
            >
              <MapPin className="w-4 h-4" />
              <span>Serving the Entire McKinney Area</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              Cheap McKinney <br />
              <span className="text-rainbow-gold relative">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Get the best Cheap McKinney Insurance rates and service in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates and most comprehensive coverage.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get Free Quote
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

      {/* Content Sections */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 gap-24">
            {contentBlocks.map((block, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full text-sm font-black mb-8 shadow-sm border ${
                    idx % 3 === 0 ? 'bg-rainbow-pink/10 text-rainbow-pink border-rainbow-pink/20' :
                    idx % 3 === 1 ? 'bg-rainbow-gold/10 text-rainbow-gold border-rainbow-gold/20' :
                    'bg-slate-900/10 text-slate-900 border-slate-900/20'
                  }`}>
                    <Zap className="w-4 h-4" />
                    <span>Expert McKinney Insurance Advice</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 leading-tight">{block.title}</h2>
                  <div className="text-xl text-gray-600 leading-relaxed font-medium space-y-6">
                    {block.content.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 relative group">
                  <div className={`absolute inset-0 rounded-[4rem] rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-transform ${
                    idx % 3 === 0 ? 'bg-rainbow-pink' :
                    idx % 3 === 1 ? 'bg-rainbow-gold' :
                    'bg-slate-900'
                  }`} />
                  <img 
                    src={`https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=1600&h=900&fit=crop`} 
                    alt={block.title} 
                    className="relative z-10 rounded-[4rem] shadow-3xl border-8 border-white w-full h-[500px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
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
                  <span className="text-rainbow-gold">In McKinney</span>
                </h2>
                <p className="text-2xl text-white/70 mb-12 leading-relaxed font-medium">
                  We don't just sell insurance; we provide peace of mind. Our team is dedicated to finding you the best rates and providing the best service in McKinney.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Local Experts", desc: "We know McKinney traffic and risks.", icon: MapPin },
                    { title: "Fast Quotes", desc: "Get covered in minutes, not days.", icon: Zap },
                    { title: "56+ Carriers", desc: "We shop so you don't have to.", icon: Award },
                    { title: "SR-22 Pros", desc: "We handle the hard cases.", icon: ShieldCheck }
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
                    "Susan and her expert team are the best! They saved me $950 a year on my McKinney car insurance. I wouldn't go anywhere else."
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">S</div>
                    <div>
                      <div className="text-2xl font-black text-white">Sarah J.</div>
                      <div className="text-rainbow-gold font-bold">McKinney Resident</div>
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
              Start Saving in <br className="hidden md:block" />
              <span className="text-rainbow-gold">McKinney Today</span>
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed font-medium">
              Join thousands of McKinney drivers who have found the best rates and best service with Rainbow Insurance.
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
