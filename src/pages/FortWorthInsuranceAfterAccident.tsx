import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Car, Zap, Heart, Award, Info, AlertTriangle, MessageSquare, FileText } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthInsuranceAfterAccident({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Insurance After an Accident Fort Worth | Rainbow Insurance Agency"
        description="Just been in an accident? Susan and her team at Rainbow Insurance Agency provide expert guidance on what to do and how it impacts your insurance in Fort Worth."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-insurance-after-accident"
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
                <AlertTriangle className="w-4 h-4" />
                <span>Immediate Support</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Insurance <span className="text-rainbow-pink">After</span> an Accident
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                An accident is stressful enough. Susan and her team at Rainbow Insurance Agency are here to help you navigate the aftermath, from filing the claim to understanding the impact on your Fort Worth policy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:817-922-8031"
                  className="bg-rainbow-ink text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-black transition-colors shadow-xl"
                >
                  <Phone className="w-6 h-6" /> Call for Help
                </a>
                <button 
                  onClick={() => navigateTo('/claims-support')}
                  className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-black text-lg hover:border-rainbow-gold transition-colors"
                >
                  Claims Support Page
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-rainbow-gold/20 rounded-[3rem] rotate-3 scale-105" />
              <img 
                src="https://picsum.photos/seed/accident-aftermath/800/600" 
                alt="Insurance After an Accident Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Immediate Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Immediate <span className="text-rainbow-gold">Steps</span> to Take</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Your actions in the minutes and hours following an accident are critical for your insurance claim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                icon: Shield,
                text: "Move to a safe location, check for injuries, and call 911 if necessary."
              },
              {
                title: "Document Everything",
                icon: FileText,
                text: "Take photos of the scene, all vehicles involved, and exchange information with the other driver."
              },
              {
                title: "Call Susan",
                icon: Phone,
                text: "Contact Susan and her team as soon as possible to report the incident and get expert guidance."
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
                The <span className="text-rainbow-gold">Best</span> Support in a Crisis
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been helping Fort Worth residents through accidents since 1993. We provide the expert knowledge and compassionate advocacy you need to recover.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Claims Advocacy", text: "We act as your liaison with the insurance carrier, ensuring your claim is handled fairly and efficiently." },
                  { title: "Rate Impact Analysis", text: "We help you understand how the accident might impact your future premiums and explore ways to mitigate the cost." },
                  { title: "Independent Choice", text: "If your current carrier raises your rates significantly, Susan and her team can shop 56+ other carriers for a better deal." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Susan's Advice:</h3>
              <ul className="space-y-6">
                {[
                  "Never admit fault at the scene of the accident.",
                  "Get a copy of the police report as soon as it's available.",
                  "Don't sign any settlement documents without speaking to Susan first.",
                  "Keep track of all medical expenses and repair estimates.",
                  "Ask about 'accident forgiveness' programs if you're a long-term client."
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Navigating the Aftermath with Confidence</h2>
            <p>
              At Rainbow Insurance Agency, we know that an accident is more than just a fender-bender; it's a disruption to your life. In the busy streets of Fort Worth and the DFW Metroplex, accidents are unfortunately common. Susan and her team have been helping local drivers through these difficult times since 1993, providing the expert guidance and personalized support needed to get back on the road.
            </p>
            <p>
              The moments immediately following an accident are often a blur of adrenaline and stress. It's easy to forget important steps or say things that could impact your claim later. That's why Susan's first piece of advice is always: stay calm and document everything. The information you gather at the scene—photos, witness statements, and the other driver's details—is the foundation of your insurance claim.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Understanding the Impact on Your Policy</h3>
            <p>
              One of the biggest concerns after an accident is how it will affect your insurance rates. While an at-fault accident can lead to a premium increase, it's not always a guarantee. Susan and her team will help you analyze the situation, explain your carrier's policies on accidents, and explore options like accident forgiveness. If your current carrier does raise your rates significantly, remember that we are an independent agency. We can shop 56+ other carriers to find you a more competitive rate, even with an accident on your record.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to be your advocate throughout the entire recovery process. We'll help you communicate with the adjusters, review settlement offers, and ensure your vehicle is repaired to the highest standards. Trust Susan and her team to be your partner in the aftermath of an accident, providing the peace of mind you need to move forward.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <MessageSquare className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Need help after an accident?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team are ready to assist you. Call us now for immediate support.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="tel:817-922-8031"
                className="bg-rainbow-ink text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl flex items-center gap-3"
              >
                <Phone className="w-8 h-8" /> 817-922-8031
              </a>
              <button 
                onClick={() => navigateTo('/contact')}
                className="bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Contact Us Online
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
