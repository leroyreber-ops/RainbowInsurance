import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, CloudLightning, Home, Car, Zap, Heart, Award, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthHailDamageInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Hail Damage Insurance Fort Worth | Rainbow Insurance Agency"
        description="Is your home and car protected from North Texas hailstorms? Susan and her team at Rainbow Insurance Agency provide the best hail damage coverage in Fort Worth."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-hail-damage-insurance"
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
                <CloudLightning className="w-4 h-4" />
                <span>Storm-Ready Protection</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Protect Your Assets from <span className="text-rainbow-pink">Hail</span> Damage
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                In Fort Worth, it's not a matter of if it will hail, but when. Susan and her team ensure your home and vehicles have the robust coverage needed to weather the next big North Texas storm.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Storm Quote <ArrowRight className="w-6 h-6" />
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
              <div className="absolute inset-0 bg-rainbow-pink/20 rounded-[3rem] rotate-3 scale-105" />
              <img 
                src="https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=1600&h=900&fit=crop" 
                alt="Hail Damage Protection Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Comprehensive <span className="text-rainbow-gold">Hail</span> Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We ensure your most valuable assets are protected from the devastating effects of North Texas hailstorms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Home & Property",
                icon: Home,
                items: [
                  "Roof Repair & Replacement",
                  "Siding & Gutter Damage",
                  "Window & Skylight Protection",
                  "Outdoor Structures (Fences, Sheds)",
                  "Personal Property Coverage"
                ]
              },
              {
                title: "Auto & Vehicles",
                icon: Car,
                items: [
                  "Paintless Dent Repair (PDR)",
                  "Windshield & Glass Replacement",
                  "Total Loss Protection",
                  "Rental Car Reimbursement",
                  "Comprehensive Coverage Options"
                ]
              }
            ].map((cat, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  <cat.icon className="w-10 h-10 text-rainbow-gold" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-8">{cat.title}</h3>
                <ul className="space-y-6">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-4 text-xl text-gray-600 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-rainbow-pink flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storm Prep */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Don't Wait for the <span className="text-rainbow-gold">Storm</span>
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan and her team have been helping Fort Worth families recover from storms since 1993. We know exactly what to look for in a policy to ensure you're not left with massive out-of-pocket costs.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Review Your Deductible", text: "Many Texas policies have a separate, higher deductible for wind and hail. We'll help you understand yours." },
                  { title: "Check Coverage Limits", text: "Ensure your policy limits are high enough to cover a full roof replacement at today's material costs." },
                  { title: "Document Your Assets", text: "Take 'before' photos of your roof and car now to make the claims process smoother later." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-rainbow-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-rainbow-gold" />
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
              <h3 className="text-3xl font-black text-rainbow-gold">After the Hail Falls:</h3>
              <ul className="space-y-6">
                {[
                  "Inspect your property safely for damage.",
                  "Take photos of hailstones next to a common object (like a coin).",
                  "Cover any broken windows or holes to prevent water damage.",
                  "Call Susan and her team immediately to start the claim.",
                  "Beware of 'storm chaser' contractors; we can recommend local pros."
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-gray-300 font-medium">
                    <AlertTriangle className="w-6 h-6 text-rainbow-gold flex-shrink-0 mt-1" />
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
          <ExpandableText 
            className="prose prose-2xl prose-gray max-w-none font-medium leading-relaxed text-gray-600"
            buttonClassName="text-rainbow-pink"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-8">Navigating North Texas Hail Season</h2>
            <p>
              Fort Worth is located in the heart of "Hail Alley." Every spring and fall, our community faces the threat of severe thunderstorms that can produce hailstones ranging from pea-sized to softball-sized. At Rainbow Insurance Agency, we've seen the devastation these storms can cause. Susan and her team have helped thousands of clients navigate the claims process and rebuild after a major storm.
            </p>
            <p>
              The key to surviving hail season is preparation. Many homeowners and car owners don't realize the specifics of their hail coverage until it's too late. In Texas, it's common for insurance companies to apply a percentage-based deductible for wind and hail damage, which can be significantly higher than your standard deductible. We work with you to find policies that offer manageable deductibles and comprehensive protection.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">The Importance of Quality Coverage</h3>
            <p>
              Not all insurance policies are created equal when it comes to hail. Some lower-cost policies may use "Actual Cash Value" for roof replacement, which takes depreciation into account and can leave you with a massive bill. We advocate for "Replacement Cost" coverage whenever possible, ensuring that your insurance company pays for a brand-new roof of similar quality.
            </p>
            <p>
              For your vehicles, comprehensive coverage is essential. This is the part of your auto policy that covers non-collision events like hail. Susan and her team shop 56+ carriers to find the best comprehensive rates in Fort Worth, ensuring your car is protected whether it's parked in your driveway or at the office.
            </p>
          </ExpandableText>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <CloudLightning className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Is your coverage storm-ready?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will review your current policies for free and ensure you're protected.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Check My Coverage
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
