import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Home, Zap, Heart, Award, Info, Gift, Lock } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthHomeInsuranceDiscounts({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Home Insurance Discounts Fort Worth | Rainbow Insurance Agency"
        description="Want to save on your home insurance? Susan and her team at Rainbow Insurance Agency help Fort Worth homeowners find every available discount to lower their premiums."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-home-insurance-discounts"
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
                <Gift className="w-4 h-4" />
                <span>Maximize Your Savings</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Fort Worth <span className="text-rainbow-pink">Home</span> Insurance Discounts
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                You work hard for your home; your insurance should work hard for you. Susan and her team specialize in finding every available discount to lower your Fort Worth homeowners insurance premiums.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Find My Discounts <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/home-discounts/800/600" 
                alt="Home Insurance Discounts Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Discounts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Top <span className="text-rainbow-gold">Ways to Save</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We help you identify the features of your home and your lifestyle that can lead to significant insurance savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bundling Discount",
                icon: Zap,
                text: "Combine your home and auto insurance with the same carrier for one of the largest discounts available."
              },
              {
                title: "Impact-Resistant Roof",
                icon: Shield,
                text: "In Fort Worth, a Class 4 impact-resistant roof can save you up to 20-30% on your annual premium."
              },
              {
                title: "Home Security",
                icon: Lock,
                text: "Monitored alarm systems, smoke detectors, and deadbolts can all lead to additional savings."
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
                The <span className="text-rainbow-gold">Best</span> Service for Homeowners
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been serving the Fort Worth community since 1993. She knows exactly which carriers offer the best discounts for North Texas homes.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Personalized Reviews", text: "We review your home's features in detail to ensure no discount is overlooked." },
                  { title: "Independent Choice", text: "We shop 56+ carriers to find the companies that truly reward safe and well-maintained homes." },
                  { title: "Ongoing Support", text: "As you make improvements to your home, Susan and her team are here to update your policy and find new savings." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Other Potential Discounts:</h3>
              <ul className="space-y-6">
                {[
                  "New Home Discount (for homes built in the last 10-15 years)",
                  "Claims-Free Discount (for homeowners with no recent losses)",
                  "Loyalty Discount (for staying with the same carrier)",
                  "Senior/Mature Homeowner Discount",
                  "Gated Community or HOA Discounts"
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Unlocking Hidden Savings for Your Fort Worth Home</h2>
            <p>
              At Rainbow Insurance Agency, we believe that you shouldn't pay a penny more than necessary for your home insurance. In Fort Worth, where property values and insurance rates are on the rise, finding every available discount is more important than ever. Susan and her team have been helping local homeowners maximize their savings since 1993, providing the expert knowledge and personalized attention needed to lower your premiums without sacrificing protection.
            </p>
            <p>
              Many homeowners are unaware of the various factors that can impact their insurance rates. For example, the age of your home's roof, the type of plumbing you have, and even your proximity to a fire hydrant can all lead to discounts. As an independent agency, we have the freedom to shop 56+ carriers to find the ones that offer the most generous discounts for your specific home and lifestyle.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">The Power of Bundling and Beyond</h3>
            <p>
              Bundling your home and auto insurance is often the single most effective way to save. Most carriers offer a substantial "multi-policy" discount that can save you hundreds of dollars a year. But Susan doesn't stop there. We also look for specialized discounts, such as those for impact-resistant roofing materials—a vital consideration in our hail-prone North Texas environment. We'll also check for discounts related to home security systems, smoke detectors, and even your professional affiliations or alumni associations.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to be your partner in savings. We'll proactively review your policy every year to ensure you're still getting the best possible rate and that all eligible discounts are applied. If you make improvements to your home, like installing a new roof or a security system, let us know! We'll update your policy and find you even more ways to save. Trust Susan and her team to help you protect your home and your budget.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Home className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Are you getting all your discounts?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will review your current policy for free and find you more ways to save.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Find My Discounts
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
