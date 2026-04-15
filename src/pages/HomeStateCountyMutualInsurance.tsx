import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function HomeStateCountyMutualInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - Home State County Mutual Authorized Agent",
    "description": "Get affordable Home State County Mutual insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in Home State non-standard auto insurance & 56 carriers.",
    "url": "https://rainbowinsuranceoffice.com/home-state-county-mutual-insurance",
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
      title: "Home State County Mutual Insurance in Fort Worth: Affordable Auto Protection",
      content: `Home State County Mutual Insurance Company specializes in providing non-standard auto insurance solutions for drivers who may have difficulty finding coverage elsewhere. As an authorized agent for Home State in Fort Worth, Rainbow Insurance Agency is proud to offer our clients access to their flexible and competitive products.

      When you choose Home State through Rainbow Insurance, you're getting the combined expertise of Susan and her expert team. We understand how to navigate Home State's specialized rating system to find the absolute lowest rates for your specific needs. Home State is particularly strong in the non-standard auto market, often offering the best value for drivers in the DFW metroplex with less-than-perfect driving records or those who need SR-22 filings.

      Our team doesn't just stop at one quote. We compare Home State's offerings with our 56+ other top-rated carriers to ensure you're getting the absolute best deal available in Tarrant County. We believe in providing the best service and the best rates, and Home State is a key partner in helping us achieve that for our clients.`
    },
    {
      title: "The Advantages of Home State County Mutual Insurance with Rainbow Insurance Agency",
      content: `Working with an independent agent like Rainbow Insurance Agency to secure your Home State policy offers several key advantages. First is our local expertise. We know the Fort Worth and Dallas areas, and we understand the unique risks and requirements of Texas drivers. We can provide personalized advice that you won't get from a generic call center.

      Home State is known for its commitment to providing "Insurance for the Real World," focusing on accessible coverage and competitive pricing. They understand that everyone's situation is unique, and they work to provide coverage that fits your life and budget. This shared commitment to personal service and flexibility makes Home State a natural fit for our clients.

      Furthermore, Home State offers a variety of specialized features that we can help you unlock. From low down payments to flexible payment plans and fast SR-22 filings, we'll make sure you're taking full advantage of every opportunity to lower your premium and stay on the road. We've been serving the North Texas community since 1993, and our reputation for integrity and honesty is built on finding the best solutions for our clients.`
    },
    {
      title: "Home State Auto Insurance Features",
      content: `Home State specializes in providing comprehensive insurance coverage for vehicles. Some of the key features of their policies include:

      • Affordable Liability Coverage: Essential protection that meets Texas state requirements at a price you can afford.
      • Non-Standard Auto Specialist: Coverage options for drivers with accidents, tickets, or lapses in coverage.
      • SR-22 Filings: Fast and efficient SR-22 filings for drivers who need to prove financial responsibility to the state.
      • Low Down Payments: Get covered today with a minimal initial payment.
      • Flexible Payment Plans: A variety of payment options designed to fit your budget.
      • 24/7 Claims Service: Home State is committed to handling claims quickly and fairly, ensuring you get back on the road as soon as possible.

      At Rainbow Insurance Agency, we'll help you understand these features and ensure you have the right level of protection for your needs. We're dedicated to providing the best service and the best rates in the business, and Home State's reliable products are a big part of that.`
    },
    {
      title: "Serving the Entire DFW Metroplex with Home State Insurance",
      content: `Whether you're driving in the heart of Fort Worth, commuting to Dallas, or living in one of the many vibrant communities in Arlington or Garland, Home State County Mutual Insurance and Rainbow Insurance Agency have you covered. We serve the entire DFW metroplex, providing expert advice and the best insurance rates to thousands of satisfied clients.

      Our team is particularly skilled at helping clients who need high-quality and affordable insurance solutions for their vehicles. Home State's competitive pricing and flexible plan options often make them the best choice for those looking for reliable protection at a price they can afford. We believe that everyone deserves the best protection at a price they can afford.

      Believe in us for your Home State insurance needs. Susan and her expert team have the experience, the carriers, and the dedication to ensure you're always getting the best value. Experience the Rainbow difference today and see why we're the top choice for insurance in Fort Worth and beyond.`
    }
  ];

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Home State County Mutual Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get affordable Home State County Mutual insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in Home State non-standard auto insurance & 56 carriers. Call Susan & team!"
        schema={carrierSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop" 
            alt="Home State County Mutual Insurance Protection" 
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
              <span>Authorized Home State Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              Home State <br />
              <span className="text-rainbow-gold relative text-4xl md:text-6xl">
                County Mutual
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Get the best Home State County Mutual rates and service in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates and most comprehensive coverage.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get Home State Quote
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
            { label: "Carriers", value: "56", icon: Award },
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
          <ExpandableText 
            className="space-y-24"
            buttonClassName="text-rainbow-pink"
          >
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
                      <span>Expert Home State Advice</span>
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
                    { title: "Local Experts", desc: "We know Fort Worth traffic and risks.", icon: MapPin },
                    { title: "Fast Quotes", desc: "Get covered in minutes, not days.", icon: Zap },
                    { title: "56 Carriers", desc: "We shop so you don't have to.", icon: Award },
                    { title: "Home State Pros", desc: "Reliable protection for you.", icon: ShieldCheck }
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
                    "Home State through Rainbow was the best decision for my car insurance. Susan and her expert team were so helpful and the rates were unbeatable!"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">H</div>
                    <div>
                      <div className="text-2xl font-black text-white">Hannah S.</div>
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
              <span className="text-rainbow-gold">Home State Today</span>
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
