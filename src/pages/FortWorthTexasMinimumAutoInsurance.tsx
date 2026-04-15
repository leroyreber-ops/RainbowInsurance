import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Car, Zap, Heart, Award, AlertTriangle, Scale, Info } from 'lucide-react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthTexasMinimumAutoInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Texas Minimum Auto Insurance Fort Worth | Rainbow Insurance Agency"
        description="Need the legal minimum auto insurance in Texas? Susan and her team at Rainbow Insurance Agency provide the cheapest 30/60/25 liability coverage in Fort Worth."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-texas-minimum-auto-insurance"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-rainbow-pink/10 text-rainbow-pink px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider border border-rainbow-pink/20">
                <Scale className="w-4 h-4" />
                <span>Legal & Compliant</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Texas <span className="text-rainbow-pink">Minimum</span> Auto Insurance
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Need to get legal fast? Susan and her team specialize in finding the absolute cheapest Texas minimum liability insurance (30/60/25) for Fort Worth drivers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Cheapest Quote <ArrowRight className="w-6 h-6" />
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
              <div className="absolute inset-0 bg-rainbow-gold/20 rounded-[3rem] -rotate-3 scale-105" />
              <img 
                src="https://picsum.photos/seed/texas-driving/800/600" 
                alt="Texas Minimum Auto Insurance" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is 30/60/25? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Understanding <span className="text-rainbow-gold">30/60/25</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              In Texas, you are required by law to carry at least these minimum liability limits to drive legally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "$30,000",
                subtitle: "Bodily Injury Per Person",
                icon: Heart,
                text: "The maximum amount your insurance will pay for injuries to one person in an accident you cause."
              },
              {
                title: "$60,000",
                subtitle: "Bodily Injury Per Accident",
                icon: Shield,
                text: "The total maximum amount your insurance will pay for all injuries in a single accident you cause."
              },
              {
                title: "$25,000",
                subtitle: "Property Damage",
                icon: Car,
                text: "The maximum amount your insurance will pay for damage to someone else's property (like their car or fence)."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-gray-100 text-center hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 mx-auto group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10 text-rainbow-gold" />
                </div>
                <div className="text-4xl font-black text-rainbow-pink mb-2">{item.title}</div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{item.subtitle}</h3>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Susan for Minimums */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                The <span className="text-rainbow-gold">Cheapest</span> Way to Stay Legal
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan and her team shop 56+ carriers, including non-standard companies that specialize in low-cost liability-only policies.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Instant ID Cards", text: "Get your proof of insurance immediately via email or text." },
                  { title: "Low Down Payments", text: "We find policies with the lowest possible upfront costs to get you started." },
                  { title: "No-Hassle Quoting", text: "We don't judge. Whether you have a clean record or a few tickets, we'll find you a rate." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Important Considerations:</h3>
              <ul className="space-y-6">
                {[
                  "Minimum liability does NOT cover damage to your own car.",
                  "If you have a car loan, your lender will likely require full coverage.",
                  "30/60/25 may not be enough if you're in a serious accident.",
                  "We can add Uninsured Motorist coverage for a very low cost.",
                  "Susan can help you bundle with renters insurance for even more savings."
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
          <ExpandableText>
            <div className="prose prose-2xl prose-gray max-w-none font-medium leading-relaxed text-gray-600">
              <h2 className="text-4xl font-black text-gray-900 mb-8">Staying Legal on a Budget in Fort Worth</h2>
              <p>
                We understand that for many Fort Worth residents, insurance is a significant monthly expense. If you're looking for the absolute lowest cost to meet the legal requirements in Texas, "minimum liability" is the way to go. At Rainbow Insurance Agency, Susan and her team have been helping drivers find affordable 30/60/25 coverage since 1993. We believe that everyone deserves access to the protection they need to drive legally and confidently.
              </p>
              <p>
                Texas law is very clear: you must be able to pay for any accidents you cause. The 30/60/25 limits are the minimum amounts the state requires. While these limits provide a basic level of protection, it's important to understand that they only pay for the other person's injuries and property damage. They do not provide any coverage for your own vehicle or your own medical bills.
              </p>
              <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Why Shop with an Independent Agent?</h3>
              <p>
                If you go to a major "brand name" insurance company for minimum liability, you might be surprised by the high cost. These companies often prefer "preferred" drivers with high limits. Susan and her team, however, have access to 56+ carriers, including many that specialize in "non-standard" or "liability-only" policies. These companies are often much more affordable for drivers who just need to get legal.
              </p>
              <p>
                Susan's commitment to "Best Service" means we don't just give you the first price we find. We shop the market, compare discounts, and find the policy that fits your budget perfectly. Whether you're a student, a senior, or just looking to save money, we're here to help you find the best value in Fort Worth.
              </p>
            </div>
          </ExpandableText>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Car className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Need to get legal today?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team can get you insured in minutes. Call or click for the cheapest rate.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Cheapest Quote
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
