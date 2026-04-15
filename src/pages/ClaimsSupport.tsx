import { motion } from 'motion/react';
import { Shield, Phone, Clock, FileText, CheckCircle2, AlertTriangle, ArrowRight, MessageSquare, HelpCircle, Zap, Heart } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function ClaimsSupport({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Claims Support & Assistance | Rainbow Insurance Agency Fort Worth"
        description="Need to file an insurance claim? Susan and her team at Rainbow Insurance Agency provide expert claims support and advocacy for our clients in Fort Worth."
        canonical="https://rainbowinsuranceoffice.com/claims-support"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-rainbow-pink/10 text-rainbow-pink px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider border border-rainbow-pink/20">
                <Shield className="w-4 h-4" />
                <span>We're in Your Corner</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Expert <span className="text-rainbow-pink">Claims</span> Support When You Need It Most
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                An accident or loss is stressful enough. Susan and her team are here to guide you through the claims process, advocate for your rights, and ensure you get back on your feet as quickly as possible.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:817-922-8031"
                  className="bg-rainbow-ink text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-black transition-colors shadow-xl"
                >
                  <Phone className="w-6 h-6" /> Call for Support
                </a>
                <button 
                  onClick={() => navigateTo('/contact')}
                  className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-black text-lg hover:border-rainbow-gold transition-colors"
                >
                  Contact Us Online
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-rainbow-gold/20 rounded-[3rem] -rotate-3 scale-105" />
              <img 
                src="https://picsum.photos/seed/claims-support/800/600" 
                alt="Claims Support Assistance" 
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
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">What to Do <span className="text-rainbow-gold">Immediately</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              If you've experienced a loss, follow these critical steps to ensure your claim is handled correctly from the start.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Ensure Safety",
                icon: AlertTriangle,
                text: "First, make sure everyone is safe. If there are injuries, call 911 immediately."
              },
              {
                step: "02",
                title: "Document Everything",
                icon: FileText,
                text: "Take photos and videos of the damage. Collect contact info from all parties involved."
              },
              {
                step: "03",
                title: "Prevent Further Loss",
                icon: Shield,
                text: "Take reasonable steps to protect your property from further damage (like covering a broken window)."
              },
              {
                step: "04",
                title: "Call Susan",
                icon: Phone,
                text: "Contact Rainbow Insurance Agency right away. We'll help you start the process with your carrier."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all">
                <div className="text-6xl font-black text-gray-100 absolute top-4 right-8 group-hover:text-rainbow-gold/10 transition-colors">{item.step}</div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                  <item.icon className="w-8 h-8 text-rainbow-gold" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 relative z-10">{item.title}</h3>
                <p className="text-lg text-gray-600 font-medium leading-relaxed relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrier Directory Placeholder */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Direct Carrier <span className="text-rainbow-gold">Claims</span> Lines
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                While we are here to support you, many insurance carriers offer 24/7 direct claims reporting. Reporting directly to your carrier can often speed up the initial processing of your claim.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Progressive", phone: "1-800-776-4737" },
                  { name: "Mercury", phone: "1-800-503-3724" },
                  { name: "Foremost", phone: "1-800-527-3907" },
                  { name: "GEICO", phone: "1-800-841-3000" },
                  { name: "Safeway", phone: "1-888-203-5129" },
                  { name: "The General", phone: "1-800-280-1466" }
                ].map((carrier, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-2">
                    <div className="font-black text-rainbow-gold text-xl">{carrier.name}</div>
                    <a href={`tel:${carrier.phone}`} className="text-white hover:text-rainbow-pink transition-colors font-bold text-lg">{carrier.phone}</a>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => navigateTo('/carriers')}
                className="inline-flex items-center gap-2 text-rainbow-gold font-black text-xl hover:text-white transition-colors"
              >
                View All Carriers <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 space-y-8">
              <div className="w-20 h-20 bg-rainbow-gold/20 rounded-3xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-rainbow-gold" />
              </div>
              <h3 className="text-3xl font-black">Why report through us?</h3>
              <ul className="space-y-6">
                {[
                  "We help you understand your coverage before you file.",
                  "We can advise on whether a claim is likely to be covered.",
                  "We assist with documentation and evidence gathering.",
                  "We follow up with the carrier to ensure progress.",
                  "We advocate for you if there are disputes or delays."
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-gray-300 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-rainbow-gold flex-shrink-0 mt-1" />
                    {benefit}
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Understanding the Claims Process</h2>
            <p>
              At Rainbow Insurance Agency, we believe that an informed client is a protected client. The claims process can seem daunting, but it generally follows a standard sequence of events. Understanding these steps can help manage expectations and reduce anxiety during a difficult time.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">1. Reporting the Loss</h3>
            <p>
              The moment you contact us or your carrier, the "First Notice of Loss" (FNOL) is recorded. This is where you provide the basic details of what happened, when, and where. Accuracy is key here, as this information forms the foundation of your claim.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">2. Investigation & Adjustment</h3>
            <p>
              An insurance adjuster will be assigned to your case. Their job is to investigate the circumstances of the loss, review your policy coverage, and determine the extent of the damage. They may visit the site of the loss, interview witnesses, or request additional documentation.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">3. Evaluation & Settlement</h3>
            <p>
              Once the investigation is complete, the carrier will provide a settlement offer based on the terms of your policy. This may include payments for repairs, replacement of property, or liability coverage for third parties. Susan and her team review these offers with you to ensure they are fair and comprehensive.
            </p>
            <p>
              Remember, Susan has been serving Fort Worth since 1993. Her deep relationships with carriers and local repair shops can be a significant asset during this phase. We're not just your agent; we're your advocate.
            </p>
          </div>
          
          <div className="bg-rainbow-pink/5 p-12 rounded-[3rem] border border-rainbow-pink/10 text-center">
            <Heart className="w-16 h-16 text-rainbow-pink mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Need immediate help?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team are standing by to assist you.</p>
            <a 
              href="tel:817-922-8031"
              className="inline-block bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
            >
              Call 817-922-8031
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
