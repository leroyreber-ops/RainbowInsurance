import { Phone, ShieldCheck, Star, CheckCircle2, Clock, Award, MapPin, Zap, HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import SEO from './SEO';
import ExpandableText from './ExpandableText';

interface Section {
  title: string;
  content: string;
  id: string;
  image?: string;
  imageAlt?: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface ProductPageProps {
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  heroSubtitle: string;
  mainContent: string;
  sections: Section[];
  faqs: FAQ[];
  schema: any;
  openQuoteForm: () => void;
  navigateTo: (page: string) => void;
  bodyImages?: { src: string; alt: string }[];
}

export default function ProductPage({
  title,
  seoTitle,
  seoDescription,
  heroImage,
  heroSubtitle,
  mainContent,
  sections,
  faqs,
  schema,
  openQuoteForm,
  navigateTo,
  bodyImages = []
}: ProductPageProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const trustFeatures = [
    { icon: Star, text: "4.9 Star Rating", sub: "Google Verified" },
    { icon: Award, text: "A+ Rated Carriers", sub: "56 Top Brands" },
    { icon: Clock, text: "Since 1993", sub: "30+ Years Experience" },
    { icon: CheckCircle2, text: "Instant Coverage", sub: "Fast & Easy" }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rainbow-ink/95 via-rainbow-ink/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl text-white"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-rainbow-red/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-8 shadow-xl border border-white/20 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 fill-rainbow-gold text-rainbow-gold" />
              <span>Fort Worth's #1 Rated Agency Since 1993</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === title.split(' ').length - 1 ? 'text-rainbow-red' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed drop-shadow-lg font-medium text-gray-200">
              {heroSubtitle || `Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates and best service in Fort Worth. We're here to protect what matters most.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-red hover:bg-red-800 text-white px-10 py-5 rounded-xl font-black text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
              >
                Get Free Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-black text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6 text-rainbow-gold" />
                817-922-8031
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar - Enhanced */}
      <div className="relative z-20 -mt-10 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-rainbow-red/5 rounded-xl flex items-center justify-center mb-1">
                <feature.icon className="w-6 h-6 text-rainbow-red" />
              </div>
              <div>
                <div className="font-black text-rainbow-ink text-lg">{feature.text}</div>
                <div className="text-xs text-rainbow-gray font-bold uppercase tracking-widest">{feature.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-rainbow-cream/30 opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-rainbow-ink leading-tight">
              Comprehensive Protection for <span className="text-rainbow-red relative">
                Fort Worth
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-rainbow-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h2>
            <div className="text-xl text-rainbow-gray leading-relaxed font-medium">
              <ExpandableText 
                maxLines={2} 
                buttonClassName="text-rainbow-red mx-auto"
              >
                {mainContent}
              </ExpandableText>
            </div>
          </div>

          {/* First Body Image Highlight */}
          {bodyImages.length > 0 && (
            <div className="mb-24">
              <div className="relative group max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-rainbow-red rounded-[3rem] -rotate-1 scale-102 opacity-5 group-hover:rotate-0 transition-transform" />
                <img 
                  src={bodyImages[0].src} 
                  alt={bodyImages[0].alt} 
                  className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-rainbow-gold px-6 py-3 rounded-xl shadow-2xl text-white font-black text-xl z-20">
                  Trusted Local Expertise
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-rainbow-red/5 rounded-full -mr-32 -mt-32" />
              <h3 className="text-3xl font-black mb-8 text-rainbow-ink relative">The Best Team Looking Out For You</h3>
              <div className="space-y-6 text-lg text-rainbow-gray leading-relaxed relative font-medium">
                <p>
                  At Rainbow Insurance Agency, we've been an integral part of the Fort Worth community since 1993. Our team—<strong>Susan and her expert team</strong>—are the best there is. They took care of us like nobody else could, and they'll do the same for you.
                </p>
                <p>
                  We believe in providing the best service, the best rates, and the best policies because we know you're counting on us for your family's protection. Believe in us for your insurance needs.
                </p>
                <div className="bg-rainbow-ink p-8 rounded-[2rem] shadow-2xl transform hover:-rotate-1 transition-transform relative text-white">
                  <Star className="absolute top-4 right-4 w-8 h-8 text-rainbow-gold/20 fill-rainbow-gold/20" />
                  <p className="font-black italic text-xl leading-relaxed">
                    "Susan and her expert team are truly the best in Fort Worth! They saved us money and gave us peace of mind."
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-rainbow-gold text-rainbow-gold" />)}
                    </div>
                    <span className="text-white/60 font-black text-sm uppercase tracking-widest">— Local Client</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="relative group">
              <div className="absolute inset-0 bg-rainbow-gold rounded-[3rem] rotate-2 scale-102 opacity-10 group-hover:rotate-4 transition-transform" />
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop" 
                alt="Professional insurance service in Fort Worth" 
                className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white object-cover w-full h-[600px]"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="absolute -bottom-8 -right-8 z-20 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 text-center min-w-[200px]"
              >
                <div className="text-5xl font-black text-rainbow-red mb-1">56+</div>
                <div className="text-base font-black text-rainbow-ink leading-tight">A+ Rated Carriers Shopped Daily</div>
                <div className="mt-3 h-1.5 w-12 bg-rainbow-gold mx-auto rounded-full" />
              </motion.div>
            </div>
          </div>

          {/* Second Body Image Highlight */}
          {bodyImages.length > 1 && (
            <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative group h-[400px]">
                <div className="absolute inset-0 bg-rainbow-gold rounded-[3rem] rotate-1 opacity-5" />
                <img 
                  src={bodyImages[1].src} 
                  alt={bodyImages[1].alt} 
                  className="relative z-10 rounded-[3rem] shadow-2xl border-4 border-white w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {bodyImages.length > 2 && (
                <div className="relative group h-[400px]">
                  <div className="absolute inset-0 bg-rainbow-red rounded-[3rem] -rotate-1 opacity-5" />
                  <img 
                    src={bodyImages[2].src} 
                    alt={bodyImages[2].alt} 
                    className="relative z-10 rounded-[3rem] shadow-2xl border-4 border-white w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          )}

          {/* Detailed Content Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <motion.div 
                key={section.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group p-10 rounded-[3rem] border transition-all hover:shadow-xl relative overflow-hidden ${
                  idx % 3 === 0 ? 'bg-white border-gray-100' : 
                  idx % 3 === 1 ? 'bg-rainbow-red/5 border-rainbow-red/10' : 
                  'bg-rainbow-gold/5 border-rainbow-gold/10'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform ${
                  idx % 3 === 0 ? 'bg-rainbow-red text-white' : 
                  idx % 3 === 1 ? 'bg-white text-rainbow-red' : 
                  'bg-white text-rainbow-gold'
                }`}>
                  {idx % 4 === 0 ? <ShieldCheck className="w-7 h-7" /> :
                   idx % 4 === 1 ? <Zap className="w-7 h-7" /> :
                   idx % 4 === 2 ? <Award className="w-7 h-7" /> :
                   <CheckCircle2 className="w-7 h-7" />}
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-6 leading-tight">{section.title}</h3>
                <div className="text-lg text-rainbow-gray leading-relaxed font-medium">
                  <ExpandableText 
                    maxLines={3} 
                    buttonClassName={idx % 3 === 1 ? 'text-rainbow-red' : 'text-rainbow-gold'}
                  >
                    {section.content}
                  </ExpandableText>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fourth Body Image Highlight */}
          {bodyImages.length > 3 && (
            <div className="mt-24">
              <div className="relative group max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-rainbow-ink rounded-[3rem] rotate-1 scale-102 opacity-5" />
                <img 
                  src={bodyImages[3].src} 
                  alt={bodyImages[3].alt} 
                  className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-rainbow-ink text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-rainbow-gold/20 text-rainbow-gold px-6 py-2 rounded-full font-black mb-6 border border-rainbow-gold/30 text-sm uppercase tracking-widest">
              <HelpCircle className="w-5 h-5" />
              <span>Got Questions? We Have Answers</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-8">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10 hover:border-rainbow-gold/50 transition-colors group"
              >
                <h3 className="text-2xl font-black mb-6 flex gap-4 items-start group-hover:text-rainbow-gold transition-colors">
                  <span className="text-rainbow-gold font-black text-3xl leading-none">Q.</span> 
                  {faq.q}
                </h3>
                <div className="flex gap-4 items-start">
                  <span className="text-rainbow-red font-black text-3xl leading-none opacity-50">A.</span>
                  <p className="text-xl text-white/70 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-rainbow-red rounded-[4rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rainbow-gold/20 rounded-full -ml-48 -mb-48 blur-[100px]" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tight">
                Ready to Start <br className="hidden md:block" />
                <span className="text-rainbow-gold">Saving Money?</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed font-medium">
                Join the thousands of Fort Worth families who have trusted Rainbow Insurance Agency for their protection since 1993.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button 
                  onClick={openQuoteForm}
                  className="bg-white text-rainbow-red hover:bg-gray-100 px-12 py-6 rounded-xl font-black text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4"
                >
                  Get My Free Quote
                  <ArrowRight className="w-8 h-8" />
                </button>
                <a 
                  href="tel:817-922-8031"
                  className="bg-rainbow-gold hover:bg-yellow-600 text-white px-12 py-6 rounded-xl font-black text-2xl transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-4 border-2 border-white/20"
                >
                  <Phone className="w-8 h-8" />
                  817-922-8031
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
