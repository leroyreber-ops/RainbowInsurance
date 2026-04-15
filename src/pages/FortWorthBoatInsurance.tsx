import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Car, Zap, Heart, Award, Info, Clock, Anchor } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthBoatInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Boat & Watercraft Insurance Fort Worth | Rainbow Insurance Agency"
        description="Heading to the lake? Protect your boat or jet ski with the best watercraft insurance. Susan and her team at Rainbow Insurance Agency offer comprehensive coverage."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-boat-insurance"
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
                <Anchor className="w-4 h-4" />
                <span>Protecting Your Fun</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Fort Worth <span className="text-rainbow-pink">Boat</span> & Watercraft Insurance
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Life is better on the water. Susan and her team at Rainbow Insurance Agency help Fort Worth boaters find the best insurance to protect their watercraft and their peace of mind.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Boat Quote <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/boat-insurance/800/600" 
                alt="Boat and Watercraft Insurance Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Coverage for <span className="text-rainbow-gold">Every Boater</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We provide boat insurance for a wide range of watercraft, from fishing boats and pontoons to jet skis and yachts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Liability Protection",
                icon: Shield,
                text: "Covers bodily injury and property damage to others if you're at fault in a boating accident."
              },
              {
                title: "Physical Damage",
                icon: Zap,
                text: "Protects your boat from damage caused by accidents, theft, vandalism, and weather, both on and off the water."
              },
              {
                title: "Specialized Equipment",
                icon: Anchor,
                text: "Coverage for your fishing gear, water sports equipment, and other specialized tools on board."
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
                The <span className="text-rainbow-gold">Best</span> Choice for Boaters
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been helping Fort Worth boaters protect their watercraft since 1993. We understand the unique risks and requirements of boat and watercraft insurance.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Customized Policies", text: "We tailor your coverage to fit your specific boat type and usage, from weekend lake trips to professional fishing." },
                  { title: "Independent Choice", text: "We shop 56+ carriers to find the best rates and the most reliable companies for your watercraft." },
                  { title: "Specialized Claims", text: "Susan and her team are here to help you navigate the unique aspects of boating claims, ensuring you get back on the water fast." }
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
                  "Collision and comprehensive coverage for your boat",
                  "Uninsured/Underinsured Watercraft protection",
                  "Medical payments for you and your passengers",
                  "Roadside assistance specialized for boat trailers"
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Protecting Your Time on the Water</h2>
            <p>
              At Rainbow Insurance Agency, we know that your boat is more than just a vessel; it's a source of joy and relaxation. In Fort Worth, with beautiful lakes like Eagle Mountain and Lake Worth nearby, we've been helping local boaters protect their watercraft since 1993. Susan and her team provide the expert knowledge and robust protection needed to ensure you can enjoy the water with peace of mind.
            </p>
            <p>
              Boat insurance is different from auto insurance in several key ways. It typically offers specialized protections for your boating equipment, fuel spill liability, and wreck removal. It also takes into account the unique risks associated with operating a watercraft. Susan and her team specialize in navigating these complexities and finding the perfect policy for your specific boat and boating style.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Tailored to Your Watercraft</h3>
            <p>
              Whether you have a high-performance bass boat, a family-friendly pontoon, a sleek jet ski, or a luxurious yacht, Susan and her team will help you find the right level of coverage. We shop 56+ carriers to find the best rates and the most flexible policies, ensuring your insurance fits your specific watercraft and your budget. We can also provide coverage for boat trailers and other specialized equipment.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to be your partner in the boating community. We'll help you find discounts for safe boating, completing safety courses, and bundling with other policies. If you ever have to file a claim, we'll be there to advocate for you and ensure the process is handled efficiently, so you can get back on the water as soon as possible. Trust Susan and her team to help you protect your boat and your future.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Anchor className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to protect your boat?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will find you the best boat insurance for your time on the water.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Boat Quote
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
