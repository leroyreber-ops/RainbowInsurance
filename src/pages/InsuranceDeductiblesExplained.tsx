import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Info, Zap, Heart, Award, Scale, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function InsuranceDeductiblesExplained({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Insurance Deductibles Explained | Rainbow Insurance Agency Fort Worth"
        description="Confused by insurance deductibles? Susan and her team at Rainbow Insurance Agency explain how deductibles work and how to choose the right one for your budget."
        canonical="https://rainbowinsuranceoffice.com/insurance-deductibles-explained-fort-worth"
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
                <HelpCircle className="w-4 h-4" />
                <span>Knowledge is Power</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Insurance <span className="text-rainbow-pink">Deductibles</span> Explained
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Choosing the right deductible is a balancing act between your monthly premium and your out-of-pocket costs. Susan and her team help you find the perfect fit for your Fort Worth budget.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Expert Advice <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/deductible-info/800/600" 
                alt="Insurance Deductibles Explained" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">How Deductibles <span className="text-rainbow-gold">Work</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              A deductible is the amount you agree to pay out-of-pocket before your insurance coverage kicks in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "High Deductible",
                icon: Zap,
                benefits: [
                  "Lower monthly premiums",
                  "Best for those with emergency savings",
                  "Ideal if you rarely file claims",
                  "Can save you thousands over time"
                ],
                drawback: "Higher out-of-pocket cost during a claim."
              },
              {
                title: "Low Deductible",
                icon: Shield,
                benefits: [
                  "Lower out-of-pocket cost during a claim",
                  "More predictable expenses",
                  "Peace of mind for frequent drivers",
                  "Easier to manage after an accident"
                ],
                drawback: "Higher monthly premiums."
              }
            ].map((option, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  <option.icon className="w-10 h-10 text-rainbow-gold" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">{option.title}</h3>
                <ul className="space-y-6 mb-8">
                  {option.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-4 text-xl text-gray-600 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-rainbow-pink flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-lg font-black text-rainbow-pink italic">The Trade-off:</p>
                  <p className="text-lg text-gray-500 font-medium">{option.drawback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Deductibles */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Types of <span className="text-rainbow-gold">Deductibles</span> in Texas
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan and her team have been helping Fort Worth residents navigate complex Texas insurance policies since 1993. Different types of coverage often have different deductibles.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Flat Deductible", text: "A specific dollar amount (e.g., $500 or $1,000) that applies to each claim." },
                  { title: "Percentage Deductible", text: "Common in Texas for wind and hail damage; usually 1% or 2% of your home's insured value." },
                  { title: "Vanishing Deductible", text: "A loyalty reward where your deductible decreases for every year you drive without an accident." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Susan's Pro Tips:</h3>
              <ul className="space-y-6">
                {[
                  "Match your deductible to your emergency fund savings.",
                  "If you have a car loan, check your lender's maximum allowed deductible.",
                  "Consider a higher deductible to lower your rates, then save the difference.",
                  "Don't forget that some glass claims may have a $0 deductible.",
                  "Susan can help you find policies with 'disappearing' deductibles."
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Mastering Your Insurance Strategy</h2>
            <p>
              At Rainbow Insurance Agency, we believe that an educated client is a protected client. One of the most common points of confusion for insurance buyers is the deductible. It's a simple concept with significant financial implications. Susan and her team have spent over 30 years helping Fort Worth residents understand how to use deductibles as a tool to manage their insurance costs and their risk.
            </p>
            <p>
              The relationship between your deductible and your premium is inverse: the higher your deductible, the lower your premium. This is because you are taking on more of the initial risk yourself. For many people, a higher deductible is a smart financial move, especially if they have a healthy emergency fund. However, if an unexpected $1,000 or $2,500 expense would cause a financial crisis, a lower deductible might be the safer choice.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">The Texas Wind & Hail Factor</h3>
            <p>
              In North Texas, we have to be particularly careful with homeowners insurance deductibles. Because hailstorms are so frequent in Fort Worth, many insurance companies have moved away from flat dollar deductibles for wind and hail damage. Instead, they use a percentage of the home's dwelling coverage. If your home is insured for $300,000 and you have a 2% hail deductible, you'll be responsible for the first $6,000 of any roof claim. Susan and her team specialize in finding policies that offer manageable wind and hail options.
            </p>
            <p>
              Susan's commitment to "Best Service" means we don't just give you a quote; we give you a strategy. We'll walk you through different deductible scenarios, show you the impact on your monthly budget, and help you make a decision that aligns with your financial goals. Trust Susan and her team to help you navigate the complexities of insurance and find the perfect balance for your life.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <HelpCircle className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Still have questions about deductibles?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team are ready to provide the expert advice you need.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Expert Advice
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
