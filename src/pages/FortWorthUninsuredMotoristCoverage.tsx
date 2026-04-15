import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Car, Zap, Heart, Award, AlertTriangle, Info, Scale } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthUninsuredMotoristCoverage({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Uninsured Motorist Coverage Fort Worth | Rainbow Insurance Agency"
        description="Are you protected from uninsured drivers? Susan and her team at Rainbow Insurance Agency explain why uninsured motorist coverage is vital for Fort Worth drivers."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-uninsured-motorist-coverage"
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
                <Shield className="w-4 h-4" />
                <span>Your Safety Net</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Uninsured <span className="text-rainbow-pink">Motorist</span> Coverage
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                What happens if you're hit by someone with no insurance? Susan and her team at Rainbow Insurance Agency explain why UM/UIM coverage is one of the most important parts of your Fort Worth auto policy.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Check My Coverage <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/uninsured-driver/800/600" 
                alt="Uninsured Motorist Coverage Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why You Need It */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Why <span className="text-rainbow-gold">UM/UIM</span> is Essential</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              In Texas, a significant number of drivers are either uninsured or underinsured. UM/UIM coverage protects you when they can't.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Uninsured Motorist (UM)",
                icon: AlertTriangle,
                text: "Covers your medical bills and car repairs if you're hit by a driver who has no insurance at all, or in a hit-and-run accident."
              },
              {
                title: "Underinsured Motorist (UIM)",
                icon: Scale,
                text: "Kicks in when the at-fault driver has insurance, but their limits are too low to cover the full extent of your damages."
              },
              {
                title: "Bodily Injury & Property Damage",
                icon: Heart,
                text: "UM/UIM typically covers both your medical expenses and the cost to repair or replace your vehicle."
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
                Protecting <span className="text-rainbow-gold">Fort Worth</span> Drivers
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been serving the Fort Worth community since 1993. She knows that North Texas traffic can be unpredictable, and she's dedicated to ensuring her clients have the best possible protection.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Personalized Advice", text: "We explain the risks and help you choose UM/UIM limits that provide real security for your family." },
                  { title: "Independent Choice", text: "We shop 56+ carriers to find the best rates for policies that include robust UM/UIM coverage." },
                  { title: "Claims Advocacy", text: "If you're hit by an uninsured driver, Susan and her team are in your corner to help you navigate the claim with your own carrier." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Did You Know?</h3>
              <ul className="space-y-6">
                {[
                  "Texas law requires insurers to offer UM/UIM coverage.",
                  "You must reject it in writing if you don't want it.",
                  "Hit-and-run accidents are covered under UM property damage.",
                  "UM/UIM can cover medical bills, lost wages, and pain and suffering.",
                  "The cost of adding UM/UIM is often very low compared to the protection it provides."
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">The Vital Importance of UM/UIM in Texas</h2>
            <p>
              At Rainbow Insurance Agency, we believe that your safety shouldn't depend on the choices of other drivers. Unfortunately, in Fort Worth and across Texas, many drivers choose to ignore the law and drive without insurance. Others carry only the bare minimum liability limits, which are often insufficient to cover the costs of a serious accident. This is where Uninsured/Underinsured Motorist (UM/UIM) coverage becomes your most valuable asset. Susan and her team have been educating North Texas drivers on the importance of this coverage since 1993.
            </p>
            <p>
              Think of UM/UIM as insurance for yourself. While liability insurance protects others from your mistakes, UM/UIM protects you from the mistakes of others. If you're involved in an accident with an at-fault driver who has no insurance, your UM coverage will step in to pay for your medical bills, lost wages, and car repairs. If the other driver has insurance but their limits are too low to cover your total damages, your UIM coverage will pay the difference up to your policy limits.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">A Small Price for Massive Protection</h3>
            <p>
              One of the most common reasons people skip UM/UIM coverage is to save a few dollars on their monthly premium. However, Susan always points out that the cost of adding this protection is typically very low—often just a few dollars a month. Compared to the potential financial devastation of a major accident with an uninsured driver, it's one of the best values in the insurance world.
            </p>
            <p>
              Susan's commitment to "Best Service" means we don't just check a box on your application. We take the time to explain how UM/UIM works, why it's so important in our local Fort Worth environment, and help you choose limits that provide real security for your family. Trust Susan and her team to ensure you're protected from the unexpected on North Texas roads.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Shield className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Are you fully protected?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will review your current policy for free and ensure you have the UM/UIM coverage you need.</p>
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
