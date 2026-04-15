import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Info, Zap, Heart, Award, Scale, HelpCircle, Gavel } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function UnderstandingTexasInsuranceLaws({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Understanding Texas Insurance Laws | Rainbow Insurance Agency Fort Worth"
        description="Confused by Texas insurance regulations? Susan and her team at Rainbow Insurance Agency explain the key laws and requirements for Fort Worth drivers and homeowners."
        canonical="https://rainbowinsuranceoffice.com/understanding-texas-insurance-laws"
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
                <Gavel className="w-4 h-4" />
                <span>Legal & Compliant</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Texas <span className="text-rainbow-pink">Insurance</span> Laws Explained
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Texas insurance laws can be complex. Susan and her team at Rainbow Insurance Agency help Fort Worth residents navigate the regulations, ensuring they stay legal and fully protected.
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
                src="https://picsum.photos/seed/texas-laws/800/600" 
                alt="Understanding Texas Insurance Laws" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Regulations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Key <span className="text-rainbow-gold">Texas</span> Regulations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Understanding these fundamental laws is essential for every driver and homeowner in the Lone Star State.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Responsibility",
                icon: Scale,
                text: "Texas law requires all drivers to be able to pay for accidents they cause. Most people do this through auto insurance."
              },
              {
                title: "30/60/25 Minimums",
                icon: Shield,
                text: "The legal minimum liability limits for auto insurance in Texas are $30k per person, $60k per accident, and $25k for property damage."
              },
              {
                title: "UM/UIM Offer",
                icon: Zap,
                text: "Texas law requires insurers to offer Uninsured/Underinsured Motorist coverage. You must reject it in writing if you don't want it."
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

      {/* Why Susan Matters */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                The <span className="text-rainbow-gold">Best</span> Advice for Texas Residents
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been helping Fort Worth residents navigate Texas insurance laws since 1993. We ensure you're not just legal, but truly protected.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Compliance Experts", text: "We stay up-to-date on the latest changes to Texas insurance regulations so you don't have to." },
                  { title: "Policy Audits", text: "We review your current coverage to ensure it meets or exceeds all state requirements." },
                  { title: "Independent Choice", text: "We shop 56+ carriers to find the best rates for policies that are fully compliant with Texas law." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Susan's Legal Tips:</h3>
              <ul className="space-y-6">
                {[
                  "Always carry proof of insurance in your vehicle (digital or paper).",
                  "Be aware that Texas is an 'at-fault' state for auto accidents.",
                  "Understand that homeowners insurance is not legally required but is usually required by lenders.",
                  "Know your rights regarding claims handling and settlement timelines.",
                  "Susan can help you understand the 'Texas Consumer Bill of Rights' for insurance."
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Navigating the Lone Star State's Insurance Landscape</h2>
            <p>
              At Rainbow Insurance Agency, we believe that understanding the law is the first step toward true financial security. Texas has a unique set of insurance regulations designed to protect both consumers and the public. Susan and her team have been helping Fort Worth residents master these laws since 1993, providing the expert guidance needed to stay compliant and confident.
            </p>
            <p>
              One of the most important concepts in Texas auto insurance is the "Texas Sure" program. This is the state's electronic verification system that allows law enforcement to instantly check if a vehicle is insured. Driving without insurance in Texas can lead to significant fines, impoundment of your vehicle, and even the suspension of your driver's license. Susan and her team specialize in finding affordable policies that keep you on the right side of the law.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Beyond the Minimums</h3>
            <p>
              While Texas law sets minimum liability limits, Susan always emphasizes that these are just that—minimums. In today's world, a serious accident can easily exceed $30,000 in medical bills or $25,000 in property damage. We help you understand the risks of carrying only the legal minimums and explore options for higher limits that provide more robust protection for your assets.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to be your advocate and your educator. We'll explain the "Texas Consumer Bill of Rights," which outlines your rights regarding policy cancellations, claims handling, and more. We'll also help you understand the nuances of homeowners insurance in Texas, including the unique challenges of wind and hail coverage. Trust Susan and her team to be your guide through the complexities of Texas insurance law.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <HelpCircle className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Confused by Texas insurance laws?</h2>
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
