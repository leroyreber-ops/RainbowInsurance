import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Car, Zap, Heart, Award, Info, Briefcase, Truck } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthCommercialAutoInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Commercial Auto Insurance Fort Worth | Rainbow Insurance Agency"
        description="Need insurance for your business vehicles? Susan and her team at Rainbow Insurance Agency provide the best commercial auto insurance in Fort Worth for all business types."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-commercial-auto-insurance"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rainbow-gold/5 -skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-rainbow-pink/10 text-rainbow-pink px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider border border-rainbow-pink/20">
                <Briefcase className="w-4 h-4" />
                <span>Protecting Your Business</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Fort Worth <span className="text-rainbow-pink">Commercial</span> Auto Insurance
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Your business vehicles are vital to your success. Susan and her team at Rainbow Insurance Agency help Fort Worth business owners find the best commercial auto insurance to protect their fleet and their livelihood.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Business Quote <ArrowRight className="w-6 h-6" />
                </button>
                <a 
                  href="tel:817-922-8031"
                  className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-black text-lg hover:border-rainbow-gold transition-colors flex items-center gap-3"
                >
                  <Phone className="w-6 h-6" /> 817-922-8031
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-rainbow-gold/20 rounded-[3rem] rotate-3 scale-105" />
              <img 
                src="https://picsum.photos/seed/commercial-auto/800/600" 
                alt="Commercial Auto Insurance Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Cover */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Coverage for <span className="text-rainbow-gold">Every Business</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We provide commercial auto insurance for a wide range of businesses and vehicle types in the Fort Worth area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Contractors & Trades",
                icon: Briefcase,
                text: "Insurance for pickup trucks, vans, and trailers used by plumbers, electricians, and landscapers."
              },
              {
                title: "Delivery & Courier",
                icon: Truck,
                text: "Coverage for vehicles used to deliver goods, food, or packages throughout the DFW Metroplex."
              },
              {
                title: "Service Vehicles",
                icon: Car,
                text: "Protection for cars and SUVs used by real estate agents, sales professionals, and consultants."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-gray-100 text-center hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 mx-auto group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10 text-rainbow-gold" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Susan */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                The <span className="text-rainbow-gold">Best</span> Choice for Business Owners
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been helping Fort Worth business owners protect their assets since 1993. We understand the unique risks and requirements of commercial auto insurance.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Customized Policies", text: "We tailor your coverage to fit your specific business needs, from liability limits to cargo protection." },
                  { title: "Independent Choice", text: "We shop 56+ carriers to find the best rates and the most reliable companies for your commercial fleet." },
                  { title: "Expert Advice", text: "Susan and her team are here to help you understand the nuances of commercial coverage and ensure you're fully protected." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-rainbow-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-rainbow-gold" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rainbow-pink/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-3xl font-black text-rainbow-gold">What's Covered?</h3>
              <ul className="space-y-6">
                {[
                  "Liability for bodily injury and property damage",
                  "Collision and comprehensive coverage for your vehicles",
                  "Uninsured/Underinsured Motorist protection",
                  "Medical payments or Personal Injury Protection (PIP)",
                  "Hired and non-owned auto liability"
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-gray-300 font-medium">
                    <Info className="w-6 h-6 text-rainbow-gold flex-shrink-0 mt-1" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Extensive Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="prose prose-2xl prose-gray max-w-none font-medium leading-relaxed text-gray-600">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Protecting Your Business on the Move</h2>
            <p>
              At Rainbow Insurance Agency, we know that your business vehicles are more than just transportation; they are essential tools for your success. Whether you have a single van or a fleet of trucks, a single accident can have a significant impact on your operations and your bottom line. Susan and her team have been helping Fort Worth business owners find affordable and robust commercial auto insurance since 1993, providing the expert guidance needed to protect your livelihood.
            </p>
            <p>
              Commercial auto insurance is different from personal auto insurance in several key ways. It typically offers higher liability limits, covers a wider range of vehicle types, and can include specialized protections like cargo insurance and hired/non-owned auto liability. Susan and her team specialize in navigating these complexities and finding the perfect policy for your specific business needs.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Tailored to Your Industry</h3>
            <p>
              We understand that every industry has its own unique risks. A contractor hauling heavy equipment has different needs than a florist delivering delicate arrangements. Susan takes the time to understand your business, your vehicles, and your drivers. We'll help you choose the right liability limits, deductibles, and endorsements to ensure you're fully protected without paying for coverage you don't need.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to be your partner in business. We'll proactively review your policy as your business grows and your fleet changes. If you ever have to file a claim, we'll be there to advocate for you and ensure the process is handled efficiently, so you can get back to work as soon as possible. Trust Susan and her team to help you protect your business and your future.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Briefcase className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to protect your business vehicles?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will find you the best commercial auto insurance for your business.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Business Quote
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-rainbow-ink text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl flex items-center gap-3"
              >
                <Phone className="w-8 h-8" /> 817-922-8031
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
