import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, HardHat, Hammer, Zap, Heart, Award, Briefcase, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthContractorInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Contractor Insurance Fort Worth | Rainbow Insurance Agency"
        description="Are you a contractor in Fort Worth? Susan and her team at Rainbow Insurance Agency provide the best general liability, workers' comp, and tool insurance for contractors."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-contractor-insurance"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-rainbow-pink/10 text-rainbow-pink px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider border border-rainbow-pink/20">
                <HardHat className="w-4 h-4" />
                <span>Built for Builders</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Solid <span className="text-rainbow-pink">Contractor</span> Insurance in Fort Worth
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                From general liability to workers' comp, Susan and her team provide the specialized coverage Fort Worth contractors need to protect their business, their crew, and their tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-ink text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-black transition-colors shadow-xl"
                >
                  Get Contractor Quote <ArrowRight className="w-6 h-6" />
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop" 
                alt="Contractor Insurance Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trades We Insure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Trades We <span className="text-rainbow-gold">Protect</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We provide specialized insurance solutions for all types of contractors and construction professionals in Fort Worth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "General Contractors", icon: Briefcase },
              { name: "Electricians", icon: Zap },
              { name: "Plumbers", icon: Wrench },
              { name: "HVAC Techs", icon: Hammer },
              { name: "Roofers", icon: Shield },
              { name: "Landscapers", icon: Heart },
              { name: "Painters", icon: Award },
              { name: "Carpenters", icon: HardHat }
            ].map((trade, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-gray-100 mx-auto group-hover:scale-110 transition-transform">
                  <trade.icon className="w-8 h-8 text-rainbow-gold" />
                </div>
                <div className="font-black text-gray-900 text-lg">{trade.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Coverages */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Essential <span className="text-rainbow-gold">Contractor</span> Coverage
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan and her team shop 56+ carriers to find the best combination of coverage and price for your contracting business.
              </p>
              <div className="space-y-6">
                {[
                  { title: "General Liability", text: "Protects against third-party bodily injury and property damage claims." },
                  { title: "Workers' Compensation", text: "Required in many contracts; covers medical costs and lost wages for injured employees." },
                  { title: "Inland Marine (Tools)", text: "Protects your expensive tools and equipment while in transit or at the job site." },
                  { title: "Commercial Auto", text: "Covers your work trucks, vans, and trailers with higher limits than personal auto." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Why Contractors Choose Susan:</h3>
              <ul className="space-y-6">
                {[
                  "Fast Certificates of Insurance (COI) so you can get to work.",
                  "Expertise in North Texas construction risks.",
                  "Access to 56+ A+ rated insurance carriers.",
                  "Personalized service from a local Fort Worth expert.",
                  "Bilingual support for your diverse crew."
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
          <ExpandableText 
            className="prose prose-2xl prose-gray max-w-none font-medium leading-relaxed text-gray-600"
            buttonClassName="text-rainbow-pink"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-8">Protecting Your Hard Work in Fort Worth</h2>
            <p>
              As a contractor in Fort Worth, your business is built on your reputation and your ability to deliver quality work. But even the most careful professionals face risks every day. From a slip-and-fall accident at a job site to the theft of expensive tools from your truck, one unforeseen event can threaten everything you've worked so hard to build. At Rainbow Insurance Agency, Susan and her team specialize in providing the robust protection contractors need to stay in business and stay profitable.
            </p>
            <p>
              Since 1993, we've been a trusted partner for North Texas builders and tradespeople. We understand that in the construction industry, time is money. That's why we've streamlined our quoting and certificate processes. When you need a COI to get on a job site, we're on it. When you need to add a new vehicle to your fleet, we make it happen fast.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">The Independent Agency Advantage</h3>
            <p>
              Contractor insurance is not one-size-fits-all. A roofer has very different risks than an interior painter. Because we are an independent agency, we can shop 56+ carriers to find the specific policy that matches your trade and your budget. We compare terms, exclusions, and deductibles to ensure you're getting the best value for your insurance dollar.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here for you long after the policy is signed. We help you navigate audits, assist with claims, and proactively review your coverage as your business grows. Whether you're a solo operator or manage a large crew, you deserve the best protection in Fort Worth.
            </p>
          </ExpandableText>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <HardHat className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to protect your business?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team are ready to build the perfect insurance plan for you.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Contractor Quote
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
