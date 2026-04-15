import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Car, Zap, Heart, Award, Users, Clock, Info } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthSeniorAutoInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Senior Auto Insurance Fort Worth | Rainbow Insurance Agency"
        description="Looking for affordable auto insurance for seniors? Susan and her team at Rainbow Insurance Agency provide the best rates and discounts for mature drivers in Fort Worth."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-senior-auto-insurance"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-rainbow-gold/5 skew-x-12 -translate-x-20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-rainbow-pink/10 text-rainbow-pink px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider border border-rainbow-pink/20">
                <Heart className="w-4 h-4" />
                <span>Respecting Experience</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Affordable <span className="text-rainbow-pink">Senior</span> Auto Insurance
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Your years of driving experience should be rewarded. Susan and her team specialize in finding the best rates and specialized discounts for mature drivers in Fort Worth.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Senior Quote <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/senior-driver/800/600" 
                alt="Senior Auto Insurance Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Specialized <span className="text-rainbow-gold">Benefits</span> for Mature Drivers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We understand the unique needs of senior drivers and work with carriers that offer tailored coverage and significant savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mature Driver Discounts",
                icon: Award,
                text: "Many carriers offer lower rates for drivers over 50, 55, or 65 who have a clean driving record."
              },
              {
                title: "Defensive Driving",
                icon: Shield,
                text: "Taking a state-approved mature driver safety course can lead to additional discounts on your premium."
              },
              {
                title: "Low Mileage Savings",
                icon: Zap,
                text: "If you're retired or driving less than you used to, you may qualify for a significant low-mileage discount."
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
                The <span className="text-rainbow-gold">Best</span> Service for Seniors
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been serving the Fort Worth community since 1993. She understands that as you enter a new stage of life, your insurance needs evolve.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Personalized Reviews", text: "We take the time to sit down with you and review your coverage in detail, ensuring you understand every aspect." },
                  { title: "Claims Advocacy", text: "If you're in an accident, Susan and her team are in your corner, handling the details so you don't have to." },
                  { title: "Independent Choice", text: "We shop 56+ carriers to find the companies that truly value and reward mature drivers." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Susan's Advice for Mature Drivers:</h3>
              <ul className="space-y-6">
                {[
                  "Keep your driving record clean to maintain the best rates.",
                  "Consider a vehicle with modern safety features (blind-spot monitoring, etc.).",
                  "Review your policy annually to ensure you're getting all eligible discounts.",
                  "Ask about 'vanishing deductibles' and other loyalty rewards.",
                  "Let us help you bundle with home or renters insurance for extra savings."
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Rewarding Decades of Safe Driving</h2>
            <p>
              At Rainbow Insurance Agency, we believe that experience should be a source of savings. Senior drivers in Fort Worth often have some of the best driving records in the state, yet they are sometimes overlooked by major insurance carriers. Susan and her team have been dedicated to serving the mature driver community since 1993, providing the personalized attention and specialized coverage you deserve.
            </p>
            <p>
              We understand that your priorities may have shifted. Perhaps you're driving less now that you're retired, or you've moved into a different neighborhood in the DFW Metroplex. These changes can significantly impact your insurance rates. As an independent agency, we have the freedom to shop 56+ carriers to find the ones that offer the most competitive rates and the most valuable benefits for seniors.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">More Than Just a Policy</h3>
            <p>
              Susan's commitment to "Best Service" means we're here to be your advocate and your advisor. We don't just sell you a policy; we build a relationship. We take the time to explain the nuances of your coverage, from liability limits to medical payments, ensuring you have the peace of mind that comes with knowing you're fully protected.
            </p>
            <p>
              If you ever have to file a claim, you won't be dealing with a nameless call center. You'll be speaking with Susan and her team, who will guide you through every step of the process. We're proud to be a trusted partner for Fort Worth's senior community, and we look forward to serving you for many years to come.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Users className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to save on your auto insurance?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will find you the best rates and the best protection for your mature driving years.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Senior Quote
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
