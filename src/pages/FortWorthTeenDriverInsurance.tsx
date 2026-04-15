import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Car, Zap, Heart, Award, Users, GraduationCap, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthTeenDriverInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Teen Driver Insurance Fort Worth | Rainbow Insurance Agency"
        description="Adding a teen driver to your policy? Susan and her team at Rainbow Insurance Agency provide the best rates and discounts for teen driver insurance in Fort Worth."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-teen-driver-insurance"
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
                <GraduationCap className="w-4 h-4" />
                <span>Protecting New Drivers</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Affordable <span className="text-rainbow-pink">Teen</span> Driver Insurance
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Adding a new driver to your policy doesn't have to break the bank. Susan and her team specialize in finding the best rates and discounts for teen drivers in Fort Worth.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Teen Quote <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/teen-driver/800/600" 
                alt="Teen Driver Insurance Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Smart <span className="text-rainbow-gold">Discounts</span> for Young Drivers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We help you take advantage of every available discount to keep your premiums manageable while ensuring your teen has the best protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Good Student Discount",
                icon: Award,
                text: "Students with a B average or higher can save significantly on their auto insurance premiums."
              },
              {
                title: "Driver Training",
                icon: Shield,
                text: "Completing an approved driver education course can lead to additional savings and safer driving habits."
              },
              {
                title: "Student Away at School",
                icon: Zap,
                text: "If your teen is at college without a car, you may be eligible for a substantial discount on their coverage."
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

      {/* Safety & Advice */}
      <section className="py-24 bg-rainbow-ink text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Safety <span className="text-rainbow-gold">First</span> for Your Teen
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan and her team have been helping Fort Worth families protect their new drivers since 1993. We provide more than just insurance; we provide peace of mind.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Telematics Programs", text: "Many carriers offer apps that track driving habits and reward safe driving with lower rates." },
                  { title: "Higher Liability Limits", text: "New drivers are at higher risk. We often recommend higher limits to protect your family's assets." },
                  { title: "Vehicle Selection", text: "The car your teen drives significantly impacts the rate. We can advise on the most insurance-friendly vehicles." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Susan's Tips for Parents:</h3>
              <ul className="space-y-6">
                {[
                  "Set clear rules about passengers and nighttime driving.",
                  "Lead by example—your teen is watching your driving habits.",
                  "Consider a 'Parent-Teen Driving Contract' to set expectations.",
                  "Review your policy annually as your teen gains experience.",
                  "Don't forget to add your teen as soon as they get their permit!"
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Navigating the Challenges of Teen Driver Insurance</h2>
            <p>
              Adding a teenager to your auto insurance policy is a major milestone for any Fort Worth family. It's a time of newfound independence for the teen, but it can also be a time of significant stress and expense for the parents. At Rainbow Insurance Agency, Susan and her team have been guiding families through this transition since 1993. We understand the unique risks associated with young drivers and the financial impact on your household budget.
            </p>
            <p>
              Statistically, teen drivers are at a higher risk of accidents due to their lack of experience and tendency for distracted driving. This risk is reflected in higher insurance premiums. However, being an independent agency gives us a significant advantage. We shop 56+ carriers to find the companies that are most "teen-friendly" and offer the most competitive rates for young drivers in North Texas.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Maximizing Savings & Protection</h3>
            <p>
              Our goal is to find the perfect balance between affordability and robust protection. We don't just look for the lowest price; we look for the best value. This includes identifying every possible discount, from good student rewards to safe driving app incentives. We also take the time to explain the importance of liability limits and uninsured motorist coverage, ensuring your family is fully protected if an accident does occur.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to answer your questions and provide support long after the policy is issued. We can help you navigate the claims process if your teen is involved in a fender-bender and provide ongoing advice as they gain more experience behind the wheel. Trust Susan and her team to protect your teen and your budget.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Users className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to add your new driver?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will find you the best rates and the best protection for your teen.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Teen Quote
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
