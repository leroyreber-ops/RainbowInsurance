import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, MessageSquare, Phone, ArrowRight, Shield, Zap, Heart } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

const faqs = [
  {
    category: "General Insurance",
    questions: [
      {
        q: "What is an independent insurance agency?",
        a: "An independent agency like Rainbow Insurance Agency represents multiple insurance companies (we shop 56+ carriers!) rather than just one. This allows us to compare rates and coverage options to find the best fit for your specific needs and budget. We work for you, not the insurance company."
      },
      {
        q: "How much insurance coverage do I really need?",
        a: "The amount of coverage you need depends on your individual circumstances, including your assets, lifestyle, and risk tolerance. Susan and her team specialize in personalizing coverage. We'll review your situation and recommend limits that protect you without overcharging you for unnecessary extras."
      },
      {
        q: "What factors affect my insurance premiums?",
        a: "Premiums are determined by various factors including your claims history, location (like specific Fort Worth neighborhoods), the type of property or vehicle being insured, and even your credit score in some cases. By shopping 56+ carriers, we can find companies that favor your specific profile."
      }
    ]
  },
  {
    category: "Auto Insurance",
    questions: [
      {
        q: "What is SR-22 insurance and do I need it?",
        a: "An SR-22 is not actually 'insurance' but a certificate of financial responsibility filed with the state (Texas DPS). It's often required after certain violations like a DWI or driving without insurance. We specialize in fast SR-22 filings to help you get your license back quickly."
      },
      {
        q: "Does my auto insurance cover me if I drive for Uber or Lyft?",
        a: "Standard personal auto policies often exclude coverage for commercial activities like ridesharing. You likely need a 'Rideshare Endorsement' or a specific commercial policy. We can help you find the right coverage so you're protected while you work."
      },
      {
        q: "What is the difference between collision and comprehensive coverage?",
        a: "Collision covers damage to your car from an accident with another vehicle or object. Comprehensive covers 'acts of God' or non-collision events like theft, vandalism, fire, or hail damage (which is very common in Fort Worth!)."
      }
    ]
  },
  {
    category: "Home & Property",
    questions: [
      {
        q: "Is flood insurance included in my homeowners policy?",
        a: "No, standard homeowners policies almost never include flood insurance. In Texas, where flash flooding can occur, we highly recommend a separate flood policy. We can help you determine if your home is in a high-risk zone and find affordable coverage."
      },
      {
        q: "What is 'Replacement Cost' vs. 'Actual Cash Value'?",
        a: "Replacement Cost pays to replace your property with new items of similar quality. Actual Cash Value pays the depreciated value of the items at the time of loss. We generally recommend Replacement Cost to ensure you can truly rebuild after a disaster."
      },
      {
        q: "Does my home insurance cover my home business?",
        a: "Most homeowners policies provide very limited coverage for business equipment and liability. If you run a business from your Fort Worth home, you likely need a home-based business endorsement or a separate commercial policy."
      }
    ]
  }
];

export default function FAQs({ navigateTo, openQuoteForm }: PageProps) {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Frequently Asked Questions | Rainbow Insurance Agency Fort Worth"
        description="Have questions about auto, home, or business insurance in Fort Worth? Find answers in our comprehensive FAQ or contact Susan and her team for personal help."
        canonical="https://rainbowinsuranceoffice.com/faqs"
      />

      {/* Hero Section */}
      <section className="bg-rainbow-ink text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rainbow-gold rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rainbow-pink rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-rainbow-gold font-black uppercase tracking-wider mb-8 border border-white/20"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Got Questions? We Have Answers</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Insurance <span className="text-rainbow-gold">FAQs</span>
            </h1>
            <p className="text-2xl text-gray-300 font-medium leading-relaxed">
              Navigating the world of insurance can be confusing. Susan and her team are here to simplify things. Browse our most common questions below or reach out for personalized advice.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Categories */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-widest">Categories</h3>
              {faqs.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveCategory(cat.category);
                    setOpenIndex(0);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-between group ${
                    activeCategory === cat.category 
                    ? 'bg-rainbow-pink text-white shadow-xl scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
                  }`}
                >
                  {cat.category}
                  <ArrowRight className={`w-5 h-5 transition-transform ${activeCategory === cat.category ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
              
              <div className="mt-12 p-8 bg-rainbow-ink rounded-3xl text-white space-y-6">
                <h4 className="text-xl font-black text-rainbow-gold">Still need help?</h4>
                <p className="text-gray-400 font-medium">Susan and her team are ready to answer any specific questions you have.</p>
                <a 
                  href="tel:817-922-8031"
                  className="flex items-center gap-3 text-2xl font-black hover:text-rainbow-gold transition-colors"
                >
                  <Phone className="w-6 h-6" /> 817-922-8031
                </a>
              </div>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-4xl font-black text-gray-900 mb-8">{activeCategory} Questions</h2>
              {faqs.find(f => f.category === activeCategory)?.questions.map((item, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-xl"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-8 py-8 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="text-2xl font-black text-gray-900 group-hover:text-rainbow-pink transition-colors">{item.q}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-rainbow-pink text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-rainbow-pink/10 group-hover:text-rainbow-pink'}`}>
                      {openIndex === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-8 text-xl text-gray-600 font-medium leading-relaxed border-t border-gray-50 pt-6">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extensive Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="prose prose-2xl prose-gray max-w-none font-medium leading-relaxed text-gray-600">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Why Insurance Education Matters</h2>
            <p>
              Insurance is often seen as a necessary evil, but it's actually one of the most powerful financial tools you have. At Rainbow Insurance Agency, we believe that the more you understand your coverage, the more value you get from your premiums. Susan has spent over 30 years educating Fort Worth families on how to protect their hard-earned assets.
            </p>
            <p>
              Many people don't realize that insurance policies are legal contracts. The specific wording in your policy determines what is covered and what is excluded. That's why having an expert like Susan on your side is so important. We don't just sell you a policy; we explain it to you.
            </p>
            <h3 className="text-3xl font-black text-gray-900 mt-12 mb-6">The Importance of Regular Reviews</h3>
            <p>
              Your insurance needs change as your life changes. Buying a new car, remodeling your kitchen, starting a home-based business, or even getting a new dog can all impact your insurance requirements. We recommend an annual review of all your policies to ensure your coverage still aligns with your current reality.
            </p>
            <p>
              Because we shop 56+ carriers, we can often find better rates even if your needs haven't changed. The insurance market is constantly shifting, and what was the best rate last year might not be the best rate today.
            </p>
          </div>
          
          <div className="bg-rainbow-gold/5 p-12 rounded-[3rem] border border-rainbow-gold/10 text-center">
            <Heart className="w-16 h-16 text-rainbow-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-6">Have a question we didn't cover?</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium">Susan and her team are just a phone call away.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="tel:817-922-8031"
                className="bg-rainbow-ink text-white px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105 shadow-2xl flex items-center gap-3"
              >
                <Phone className="w-6 h-6" /> 817-922-8031
              </a>
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-pink hover:bg-rainbow-rose text-white px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105 shadow-2xl"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
