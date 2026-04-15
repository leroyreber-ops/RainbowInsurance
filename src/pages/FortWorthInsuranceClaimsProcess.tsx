import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, FileText, Zap, Heart, Award, Clock, AlertTriangle, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthInsuranceClaimsProcess({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Insurance Claims Process Guide | Rainbow Insurance Agency Fort Worth"
        description="Need to file a claim? Susan and her team at Rainbow Insurance Agency explain the insurance claims process step-by-step for our Fort Worth clients."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-insurance-claims-process"
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
                <Clock className="w-4 h-4" />
                <span>Step-by-Step Guidance</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                The Insurance <span className="text-rainbow-pink">Claims</span> Process
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Filing a claim can be overwhelming. Susan and her team at Rainbow Insurance Agency are here to guide you through every step, ensuring you understand the process and get the support you deserve in Fort Worth.
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
                src="https://picsum.photos/seed/claims-process/800/600" 
                alt="Insurance Claims Process Guide" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 5 Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">The <span className="text-rainbow-gold">5 Key Steps</span> of a Claim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              While every claim is unique, most follow this standard sequence of events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Report", icon: Phone, text: "Notify Susan or your carrier immediately after the loss." },
              { step: "02", title: "Investigate", icon: Shield, text: "An adjuster reviews the damage and policy coverage." },
              { step: "03", title: "Evaluate", icon: FileText, text: "The carrier determines the value of the covered loss." },
              { step: "04", title: "Settle", icon: Zap, text: "You receive a settlement offer based on your policy." },
              { step: "05", title: "Repair", icon: Heart, text: "You use the settlement to repair or replace your property." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all group relative">
                <div className="text-5xl font-black text-gray-100 absolute top-4 right-4 group-hover:text-rainbow-gold/10 transition-colors">{item.step}</div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 mx-auto group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-rainbow-gold" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{item.text}</p>
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
                Your <span className="text-rainbow-gold">Advocate</span> in the Process
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been helping Fort Worth residents navigate claims since 1993. We don't just sell you a policy; we stand by you when you need to use it.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Pre-Claim Advice", text: "We help you understand if a claim is likely to be covered and how it might impact your future rates." },
                  { title: "Documentation Help", text: "We assist with gathering the necessary evidence, photos, and reports to support your claim." },
                  { title: "Carrier Liaison", text: "We communicate with the carrier on your behalf to ensure the process stays on track." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Common Claims Pitfalls:</h3>
              <ul className="space-y-6">
                {[
                  "Waiting too long to report the loss to your carrier.",
                  "Failing to document the damage immediately with photos.",
                  "Discarding damaged property before the adjuster sees it.",
                  "Starting permanent repairs before the carrier approves them.",
                  "Not understanding your deductible and how it applies."
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
          <div className="prose prose-2xl prose-gray max-w-none font-medium leading-relaxed text-gray-600">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Navigating the Path to Recovery</h2>
            <p>
              At Rainbow Insurance Agency, we believe that the true value of an insurance policy is revealed during the claims process. It's the moment when the promises made on paper become real-world support. Susan and her team have spent over 30 years guiding Fort Worth families through this path, providing the expert knowledge and compassionate advocacy needed to ensure a fair and timely resolution.
            </p>
            <p>
              The process begins with the "First Notice of Loss" (FNOL). This is your initial report to the insurance company. Accuracy and detail are critical here. We help you gather the necessary information—dates, times, locations, and descriptions—to ensure your claim starts on solid ground. Susan's local expertise is particularly valuable here, as she understands the specific types of losses common in North Texas, from hail damage to complex liability issues.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">The Role of the Adjuster</h3>
            <p>
              Once a claim is filed, the insurance company will assign an adjuster. Their role is to investigate the loss, determine if it's covered under your policy, and estimate the cost of repairs or replacement. This can be a stressful interaction for many policyholders. Susan and her team act as your liaison, helping you communicate effectively with the adjuster and ensuring that all damage is properly accounted for.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to help you evaluate the carrier's settlement offer. We'll review the adjuster's report with you, compare it to your policy terms, and advocate for adjustments if we believe the offer is insufficient. Our goal is to ensure you have the resources you need to fully recover from your loss. Trust Susan and her team to be your partner throughout the entire claims process.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <MessageSquare className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Need to start a claim?</h2>
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
