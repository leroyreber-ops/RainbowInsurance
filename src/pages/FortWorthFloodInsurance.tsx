import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Home, Zap, Heart, Award, Info, Clock, Droplets } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthFloodInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Flood Insurance Fort Worth | Rainbow Insurance Agency"
        description="Is your home protected from flooding? Susan and her team at Rainbow Insurance Agency provide the best flood insurance in Fort Worth for homeowners and renters."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-flood-insurance"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rainbow-pink/5 -skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-rainbow-pink/10 text-rainbow-pink px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider border border-rainbow-pink/20">
                <Droplets className="w-4 h-4" />
                <span>Protecting Against the Unexpected</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Fort Worth <span className="text-rainbow-pink">Flood</span> Insurance
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Standard home insurance doesn't cover flood damage. Susan and her team at Rainbow Insurance Agency help Fort Worth residents find the best flood insurance to protect their home and their belongings from rising water.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Flood Quote <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/flood-insurance/800/600" 
                alt="Flood Insurance Fort Worth" 
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
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">What <span className="text-rainbow-gold">Flood</span> Insurance Covers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Flood insurance provides vital protection for the damage caused by rising water, which is excluded from standard homeowners policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Building Property",
                icon: Home,
                text: "Covers the physical structure of your home, including foundation, plumbing, electrical, and HVAC systems."
              },
              {
                title: "Personal Contents",
                icon: Heart,
                text: "Protects your belongings inside the home, from furniture and electronics to clothing and appliances."
              },
              {
                title: "Debris Removal",
                icon: Zap,
                text: "Covers the cost of removing debris and cleaning up after a flood event."
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
                The <span className="text-rainbow-gold">Best</span> Choice for Flood Protection
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been helping Fort Worth residents protect their homes from flood damage since 1993. We understand the unique flood risks in North Texas and provide expert guidance.
              </p>
              <div className="space-y-6">
                {[
                  { title: "NFIP & Private Options", text: "We offer flood insurance through the National Flood Insurance Program (NFIP) and private carriers for more flexible coverage." },
                  { title: "Independent Choice", text: "We shop 56+ carriers to find the best rates and the most reliable companies for your flood insurance." },
                  { title: "Expert Advice", text: "Susan and her team are here to help you understand your flood risk and ensure you have the right level of protection." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Susan's Flood Tips:</h3>
              <ul className="space-y-6">
                {[
                  "Don't wait for a storm—flood insurance typically has a 30-day waiting period.",
                  "Even if you're not in a high-risk zone, you can still experience flooding.",
                  "Understand that 'rising water' is the key definition for flood claims.",
                  "Take a photo inventory of your home and belongings before a flood event.",
                  "Susan can help you find policies with low deductibles for flood damage."
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Protecting Your Fort Worth Home from Rising Water</h2>
            <p>
              At Rainbow Insurance Agency, we know that water can be a powerful and destructive force. In Fort Worth, where heavy rains and flash flooding are common, protecting your home from rising water is essential. Susan and her team have been helping local residents find affordable and robust flood insurance since 1993, providing the expert knowledge needed for peace of mind.
            </p>
            <p>
              Many homeowners are surprised to learn that their standard homeowners insurance policy does not cover damage caused by flooding. This means that if a nearby creek overflows or if heavy rain causes water to rise into your home, you would be responsible for the repairs out-of-pocket. Susan and her team specialize in finding flood insurance policies that fill this critical gap and ensure you're fully protected.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Tailored to Your Risk</h3>
            <p>
              We offer flood insurance options through both the National Flood Insurance Program (NFIP) and private carriers. This allows us to find the perfect fit for your specific needs and budget, whether you're in a high-risk flood zone or a low-to-moderate risk area. Susan and her team will help you understand your flood risk, explain the differences between NFIP and private policies, and ensure you're getting the best value for your insurance dollar.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to be your partner in protection. We'll proactively review your policy as flood maps change and your risk evolves. If you ever have to file a claim, we'll be there to advocate for you and ensure the process is handled efficiently, so you can get back to your life as soon as possible. Trust Susan and her team to help you protect your home and your future.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Droplets className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to protect your home from flooding?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will find you the best flood insurance for your home.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Flood Quote
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
