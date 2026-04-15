import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Home, Zap, Heart, Award, Info, Clock, Lock } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthRentersInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Renters Insurance Fort Worth | Rainbow Insurance Agency"
        description="Renting in Fort Worth? Protect your belongings and your liability with the best renters insurance. Susan and her team at Rainbow Insurance Agency offer affordable plans."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-renters-insurance"
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
                <Home className="w-4 h-4" />
                <span>Protecting Your Space</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Affordable <span className="text-rainbow-pink">Renters</span> Insurance
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Your landlord's insurance doesn't cover your belongings. Susan and her team at Rainbow Insurance Agency help Fort Worth renters find the best insurance to protect their stuff and their liability for just pennies a day.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Renters Quote <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/renters-insurance/800/600" 
                alt="Renters Insurance Fort Worth" 
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
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">What <span className="text-rainbow-gold">Renters</span> Insurance Covers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Renters insurance provides vital protection for your personal property and your financial security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Property",
                icon: Heart,
                text: "Covers your furniture, electronics, clothing, and other belongings from theft, fire, and other covered losses."
              },
              {
                title: "Liability Protection",
                icon: Shield,
                text: "Protects you if someone is injured in your rental or if you accidentally damage someone else's property."
              },
              {
                title: "Additional Living Expenses",
                icon: Home,
                text: "Covers the cost of temporary housing if your rental becomes uninhabitable due to a covered loss."
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
                The <span className="text-rainbow-gold">Best</span> Choice for Renters
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been helping Fort Worth renters protect their belongings since 1993. We understand that your rental is your home, and we provide the protection you need.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Incredibly Affordable", text: "Renters insurance is one of the cheapest types of coverage, often costing less than a few cups of coffee a month." },
                  { title: "Independent Choice", text: "We shop 56+ carriers to find the best rates and the most reliable companies for your renters insurance." },
                  { title: "Bundling Savings", text: "Susan can help you bundle your renters insurance with your auto policy for even more savings." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Susan's Renters Tips:</h3>
              <ul className="space-y-6">
                {[
                  "Take a photo or video inventory of your belongings.",
                  "Keep receipts for major purchases like electronics and furniture.",
                  "Understand that your landlord's insurance ONLY covers the building.",
                  "Ask about 'replacement cost' coverage for your belongings.",
                  "Susan can help you find policies with low deductibles."
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Protecting Your Lifestyle in Fort Worth</h2>
            <p>
              At Rainbow Insurance Agency, we know that your rental is more than just a place to stay; it's where your life happens. Whether you're renting an apartment in the Cultural District, a loft downtown, or a house in a quiet neighborhood, your belongings represent a significant investment. Susan and her team have been helping Fort Worth renters protect their stuff since 1993, providing the expert knowledge and affordable coverage needed for peace of mind.
            </p>
            <p>
              Many renters mistakenly believe that their landlord's insurance will cover their personal property in the event of a fire, theft, or water damage. However, the landlord's policy only protects the physical structure of the building. Without your own renters insurance, you would be responsible for replacing everything you own out-of-pocket. Susan and her team specialize in finding policies that provide robust protection for your belongings and your liability for a very low cost.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Tailored to Your Needs</h3>
            <p>
              We offer a wide range of renters insurance options from top-rated carriers, allowing us to find the perfect fit for your specific needs and budget. Whether you're a student with a few belongings or a family with a house full of furniture, Susan and her team will help you navigate the options. We'll explain the differences between "actual cash value" and "replacement cost" coverage, help you choose the right liability limits, and ensure you're getting the best value for your insurance dollar.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to be your partner in protection. We'll proactively review your policy as your life changes and you acquire more belongings. If you ever have to file a claim, we'll be there to advocate for you and ensure the process is handled efficiently, so you can get back to your life as soon as possible. Trust Susan and her team to help you protect your home and your future.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Home className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to protect your belongings?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will find you the best renters insurance for your home.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Renters Quote
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
