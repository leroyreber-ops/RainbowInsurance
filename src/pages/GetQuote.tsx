import { motion } from 'motion/react';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, Mail, Clock, MapPin, Zap, Heart, Award } from 'lucide-react';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { useState } from 'react';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function GetQuote({ navigateTo }: PageProps) {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(true);

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      <SEO 
        title="Get a Free Insurance Quote | Rainbow Insurance Agency Fort Worth"
        description="Get an instant, free insurance quote from Susan and her team at Rainbow Insurance Agency. We shop 56+ carriers to find you the best rates in Fort Worth."
        canonical="https://rainbowinsuranceoffice.com/get-quote"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-rainbow-pink/10 text-rainbow-pink px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider border border-rainbow-pink/20">
              <Zap className="w-4 h-4" />
              <span>Fast & Free Quotes</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Start Saving <span className="text-rainbow-pink">Today</span> with a Free Quote
            </h1>
            
            <p className="text-2xl text-gray-600 leading-relaxed font-medium">
              Susan and her expert team are ready to shop the market for you. We compare rates from 56+ A+ rated carriers like Progressive, Mercury, and GEICO to ensure you get the absolute best coverage at the lowest possible price in Fort Worth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "56+ Carriers", desc: "We shop them all" },
                { icon: Clock, title: "Fast Results", desc: "Quotes in minutes" },
                { icon: Heart, title: "Local Expert", desc: "Susan's 30+ years" },
                { icon: Award, title: "A+ Rated", desc: "Top tier partners" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-rainbow-gold/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-rainbow-gold" />
                  </div>
                  <div>
                    <div className="font-black text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500 font-medium">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-rainbow-ink text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-black mb-4 relative z-10">Prefer to speak with Susan?</h3>
              <p className="text-lg opacity-80 mb-6 relative z-10 font-medium">
                Our local Fort Worth experts are standing by to help you navigate your insurance needs personally.
              </p>
              <a 
                href="tel:817-922-8031"
                className="inline-flex items-center gap-3 text-3xl font-black text-rainbow-gold hover:text-white transition-colors"
              >
                <Phone className="w-8 h-8" />
                817-922-8031
              </a>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                At Rainbow Insurance Agency, we understand that your time is valuable. That's why we've streamlined our quoting process to be as efficient as possible. Whether you're looking for auto, home, business, or specialty insurance, our team uses advanced technology combined with decades of local expertise to find the perfect fit for your budget and coverage needs.
              </p>
              <p>
                Susan has been serving the Fort Worth community since 1993, and her commitment to "Best Service" is reflected in every quote we provide. We don't just find you a policy; we find you peace of mind. By shopping 56+ carriers, we often find savings that other agencies miss.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-3xl border border-gray-100 sticky top-32"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Quote Request Form</h2>
              <p className="text-gray-500 font-medium">Fill out the details below and Susan's team will get back to you shortly.</p>
            </div>
            
            {/* We use the existing QuoteForm component logic but styled for a full page */}
            <div className="relative">
              <QuoteForm 
                isOpen={true} 
                onClose={() => {}} 
                isInline={true}
              />
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100 flex items-center justify-center gap-8 opacity-50 grayscale">
              <img src="https://picsum.photos/seed/progressive/100/40" alt="Progressive" className="h-6" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/mercury/100/40" alt="Mercury" className="h-6" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/geico/100/40" alt="GEICO" className="h-6" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Why Thousands Choose <span className="text-rainbow-pink">Susan</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We've been Fort Worth's trusted insurance partner for over 30 years. Our commitment to you is simple: the best coverage, the lowest rates, and the best service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Local Expertise",
                text: "We know Fort Worth. From North Texas hailstorms to local traffic patterns, we understand the risks you face every day."
              },
              {
                title: "Independent Choice",
                text: "We don't work for one insurance company; we work for you. Our independence is your greatest advantage."
              },
              {
                title: "Claims Advocacy",
                text: "If you have an accident, we're in your corner. We help navigate the claims process to ensure you're treated fairly."
              }
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-20 h-20 bg-rainbow-gold/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-rainbow-gold" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">{feature.title}</h3>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
