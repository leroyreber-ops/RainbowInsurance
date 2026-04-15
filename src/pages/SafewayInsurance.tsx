import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function SafewayInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - Safeway Authorized Agent",
    "description": "Get cheap Safeway car insurance quotes in Fort Worth. Rainbow Insurance Agency shops Safeway & 56+ carriers to find the best rates. SR-22 specialists.",
    "url": "https://rainbowinsuranceoffice.com/safeway-insurance",
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

  const contentBlocks = [
    {
      title: "Safeway Insurance in Fort Worth: Reliable Coverage for Every Driver",
      content: `Safeway Insurance has been providing affordable and reliable car insurance for over 60 years. As an authorized Safeway agent in Fort Worth, Rainbow Insurance Agency is proud to offer our clients access to Safeway's straightforward and competitive products. Safeway is particularly well-known for its commitment to personal service and its ability to provide coverage for a wide range of drivers.

When you choose Safeway through Rainbow Insurance, you're getting the combined expertise of Susan and her expert team. We understand how to navigate Safeway's rating system to find the absolute lowest rates for your specific needs. Whether you're a first-time driver, someone with a few marks on your record, or you need an SR-22, Safeway often has some of the best rates in the DFW metroplex.

Our team doesn't just provide one quote. We compare Safeway's offerings with our 56+ other A+ rated carriers to ensure you're getting the absolute best value available in Tarrant County. We believe in providing the best service and the best rates, and Safeway is a key partner in helping us achieve that for our clients.`
    },
    {
      title: "The Benefits of Safeway Insurance with Rainbow Insurance Agency",
      content: `Working with an independent agent like Rainbow Insurance Agency to secure your Safeway policy offers several key advantages. First is our local expertise. We know the Fort Worth and Dallas areas, and we understand the unique risks and requirements of Texas drivers. We can provide personalized advice that you won't get from a generic call center.

Safeway is known for its "Back to Basics" approach to insurance, focusing on what matters most: affordable premiums and efficient claims handling. They pride themselves on being a family-owned and operated company, much like Rainbow Insurance Agency. This shared commitment to family values and personal service makes Safeway a natural fit for our clients.

Furthermore, Safeway offers a variety of flexible payment options that we can help you set up. Whether you prefer to pay in full or need a monthly plan that fits your budget, we'll make sure your insurance is affordable and easy to manage. We've been serving the North Texas community since 1993, and our reputation for integrity and honesty is built on finding the best solutions for our clients.`
    },
    {
      title: "Safeway Car Insurance Features & SR-22 Filings",
      content: `Safeway specializes in providing essential car insurance coverage that meets or exceeds Texas state requirements. Some of the key features of their policies include:

• Liability Coverage: Protects you if you're at fault in an accident that causes injury or property damage to others.
• Physical Damage Coverage: Includes collision and comprehensive coverage to protect your own vehicle from damage.
• SR-22 Filings: Safeway is a leader in providing SR-22 filings for drivers who need to prove financial responsibility to the state.
• Flexible Underwriting: Safeway is often able to provide coverage for drivers that other companies might turn away.
• 24/7 Claims Reporting: You can report a claim at any time, ensuring that the process gets started as quickly as possible.

At Rainbow Insurance Agency, we'll help you understand these features and ensure you have the right level of protection for your needs. We're dedicated to providing the best service and the best rates in the business, and Safeway's reliable products are a big part of that.`
    },
    {
      title: "Serving the Entire DFW Metroplex with Safeway Insurance",
      content: `Whether you're driving in the heart of Fort Worth, commuting to Dallas, or living in one of the many vibrant communities in Arlington or Garland, Safeway Insurance and Rainbow Insurance Agency have you covered. We serve the entire DFW metroplex, providing expert advice and the best insurance rates to thousands of satisfied clients.

Our team is particularly skilled at helping drivers who need an SR-22 or have had challenges finding affordable coverage in the past. Safeway's competitive pricing for high-risk drivers often makes them the best choice for those looking to get back on the road legally and affordably. We believe that everyone deserves the best protection at a price they can afford.

Believe in us for your Safeway insurance needs. Susan and her expert team have the experience, the carriers, and the dedication to ensure you're always getting the best value. Experience the Rainbow difference today and see why we're the top choice for insurance in Fort Worth and beyond.`
    }
  ];

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Safeway Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get cheap Safeway insurance quotes in Fort Worth. Rainbow Insurance Agency shops Safeway & 56+ carriers to find the best rates. SR-22 specialists. Call Susan & team today!"
        schema={carrierSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop" 
            alt="Safeway Car Insurance" 
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
              <span>Authorized Safeway Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              Safeway <br />
              <span className="text-rainbow-gold relative">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Get the best Safeway Insurance rates and service in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates and most comprehensive coverage.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get Safeway Quote
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
                    <span>Expert Safeway Advice</span>
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
                    src={`https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&h=900&fit=crop`} 
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
                    "Safeway Insurance through Rainbow saved me so much money on my car insurance. Susan and her expert team were so helpful and made the whole process easy!"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">S</div>
                    <div>
                      <div className="text-2xl font-black text-white">Sarah W.</div>
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
              <span className="text-rainbow-gold">Safeway Today</span>
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed font-medium">
              Join thousands of Fort Worth drivers who have found the best rates and best service with Rainbow Insurance.
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
