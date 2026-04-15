import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Home, Zap, Heart, Award, Info, Clock, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthLandlordInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Landlord Insurance Fort Worth | Rainbow Insurance Agency"
        description="Own rental property in Fort Worth? Protect your investment and your income with the best landlord insurance. Susan and her team at Rainbow Insurance Agency offer expert advice."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-landlord-insurance"
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
                <Briefcase className="w-4 h-4" />
                <span>Protecting Your Investment</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Expert <span className="text-rainbow-pink">Landlord</span> Insurance
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Your rental property is a vital asset. Susan and her team at Rainbow Insurance Agency help Fort Worth landlords find the best insurance to protect their building, their liability, and their rental income.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Landlord Quote <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/landlord-insurance/800/600" 
                alt="Landlord Insurance Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">What <span className="text-rainbow-gold">Landlord</span> Insurance Covers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Landlord insurance (DP-3) provides robust protection for the unique risks associated with owning rental property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dwelling Coverage",
                icon: Home,
                text: "Covers the physical structure of your rental property from fire, wind, hail, and other covered perils."
              },
              {
                title: "Liability Protection",
                icon: Shield,
                text: "Protects you if a tenant or guest is injured on your property and you are found legally responsible."
              },
              {
                title: "Loss of Rental Income",
                icon: Zap,
                text: "Covers your lost rental income if your property becomes uninhabitable due to a covered loss."
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
                The <span className="text-rainbow-gold">Best</span> Choice for Real Estate Investors
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been helping Fort Worth landlords protect their investments since 1993. We understand the unique risks and requirements of rental property insurance.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Customized Policies", text: "We tailor your coverage to fit your specific property and your investment goals, from single-family homes to multi-unit complexes." },
                  { title: "Independent Choice", text: "We shop 56+ carriers to find the best rates and the most reliable companies for your landlord insurance." },
                  { title: "Expert Advice", text: "Susan and her team are here to help you understand the nuances of landlord coverage and ensure you're fully protected." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">Susan's Landlord Tips:</h3>
              <ul className="space-y-6">
                {[
                  "Require your tenants to carry their own renters insurance.",
                  "Regularly inspect your property and document its condition.",
                  "Understand the difference between 'replacement cost' and 'actual cash value'.",
                  "Consider adding 'wrongful eviction' and other specialized liability coverages.",
                  "Susan can help you find policies with low deductibles for common claims."
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Protecting Your Real Estate Assets in Fort Worth</h2>
            <p>
              At Rainbow Insurance Agency, we know that your rental property is more than just a building; it's a source of income and a key part of your financial future. In Fort Worth, where the rental market is strong and property values are rising, protecting your investment is more important than ever. Susan and her team have been helping local landlords find affordable and robust insurance since 1993, providing the expert knowledge needed for peace of mind.
            </p>
            <p>
              Landlord insurance is different from homeowners insurance in several key ways. It typically offers higher liability limits, covers the physical structure of the building from a wider range of perils, and can include specialized protections like loss of rental income. Susan and her team specialize in navigating these complexities and finding the perfect DP-3 policy for your specific property and investment style.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Tailored to Your Investment</h3>
            <p>
              We offer a wide range of landlord insurance options from top-rated carriers, allowing us to find the perfect fit for your specific needs and budget. Whether you own a single-family home in a quiet neighborhood or a multi-unit complex downtown, Susan and her team will help you navigate the options. We'll explain the importance of "loss of rental income" coverage, help you choose the right liability limits, and ensure you're getting the best value for your insurance dollar.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to be your partner in real estate. We'll proactively review your policy as your portfolio grows and your properties change. If you ever have to file a claim, we'll be there to advocate for you and ensure the process is handled efficiently, so you can get back to managing your business. Trust Susan and her team to help you protect your investment and your future.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Briefcase className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to protect your rental property?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will find you the best landlord insurance for your investment.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Landlord Quote
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
