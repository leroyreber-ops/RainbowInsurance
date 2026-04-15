import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Car, Zap, Heart, Award, Info, Clock, Camera } from 'lucide-react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthClassicCarInsurance({ navigateTo, openQuoteForm }: PageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Classic Car Insurance Fort Worth | Rainbow Insurance Agency"
        description="Protect your vintage ride with the best classic car insurance. Susan and her team at Rainbow Insurance Agency offer specialized coverage for collectors in Fort Worth."
        canonical="https://rainbowinsuranceoffice.com/fort-worth-classic-car-insurance"
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
                <Star className="w-4 h-4" />
                <span>Protecting Your Passion</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Specialized <span className="text-rainbow-pink">Classic</span> Car Insurance
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Your vintage vehicle is more than just a car; it's a labor of love. Susan and her team at Rainbow Insurance Agency help Fort Worth collectors find the best specialized insurance to protect their investment and their passion.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-gold text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-rainbow-amber transition-colors shadow-xl"
                >
                  Get Classic Quote <ArrowRight className="w-6 h-6" />
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
                src="https://picsum.photos/seed/classic-car/800/600" 
                alt="Classic Car Insurance Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Specialized Coverage? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Why <span className="text-rainbow-gold">Specialized</span> Coverage?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Standard auto insurance isn't designed for the unique needs of classic and collector vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Agreed Value",
                icon: Shield,
                text: "We insure your car for its full appraised value, not a depreciated amount, ensuring you're fully compensated in a total loss."
              },
              {
                title: "Low Mileage Rates",
                icon: Clock,
                text: "Since classic cars are typically driven less, you can enjoy significantly lower premiums than a daily driver."
              },
              {
                title: "Specialized Repair",
                icon: Zap,
                text: "Coverage that allows you to choose the best restoration shops and use original equipment manufacturer (OEM) parts."
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
                The <span className="text-rainbow-gold">Best</span> Choice for Collectors
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Susan has been helping Fort Worth car enthusiasts protect their vintage rides since 1993. We understand the value of your collection and provide tailored insurance solutions.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Expert Appraisals", text: "We help you determine the correct agreed value for your vehicle based on its condition and rarity." },
                  { title: "Independent Choice", text: "We shop 56+ carriers, including specialized classic car insurers, to find the best rates and coverage." },
                  { title: "Personalized Service", text: "Susan and her team are here to answer your questions and provide support for your unique insurance needs." }
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
              <h3 className="text-3xl font-black text-rainbow-gold">What's Covered?</h3>
              <ul className="space-y-6">
                {[
                  "Agreed value coverage for total loss",
                  "Spare parts coverage for restoration projects",
                  "Towing and roadside assistance specialized for classics",
                  "Coverage for auto shows and events",
                  "Liability protection for your unique risks"
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Protecting Your Automotive Legacy</h2>
            <p>
              At Rainbow Insurance Agency, we know that a classic car is more than just a machine; it's a piece of history and a personal achievement. In Fort Worth, where car culture is vibrant and diverse, we've been helping collectors protect their vintage vehicles since 1993. Susan and her team provide the expert knowledge and specialized coverage needed to ensure your automotive legacy is preserved for years to come.
            </p>
            <p>
              Standard auto insurance policies are designed for daily drivers that depreciate over time. Classic cars, however, often appreciate or maintain their value. This is why "Agreed Value" coverage is so critical. We work with you to determine a fair value for your vehicle, and that's the amount you'll receive in the event of a total loss. No depreciation, no surprises.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">Tailored to Your Collection</h3>
            <p>
              Whether you have a single muscle car, a pristine vintage convertible, or a collection of rare exotics, Susan and her team will help you find the right level of coverage. We shop 56+ carriers, including industry leaders in classic car insurance, to find the best rates and the most flexible policies. We can also provide coverage for restoration projects, spare parts, and even specialized towing services.
            </p>
            <p>
              Susan's commitment to "Best Service" means we're here to be your partner in the collector car community. We'll help you navigate the requirements for appraisals, provide advice on storage and security, and ensure you're fully protected when you're out on the road or at a local car show. Trust Susan and her team to protect your passion and your investment.
            </p>
          </div>
          
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 text-center">
            <Camera className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Ready to protect your classic car?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team will find you the best specialized insurance for your vintage ride.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
              >
                Get Classic Quote
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
