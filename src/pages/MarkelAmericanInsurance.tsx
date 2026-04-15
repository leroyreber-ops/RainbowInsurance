import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function MarkelAmericanInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - Markel American Authorized Agent",
    "description": "Get affordable Markel American insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in Markel American insurance & 56+ carriers.",
    "url": "https://rainbowinsuranceoffice.com/markel-american-insurance",
    "telephone": "817-922-8031",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2209 8th Ave",
      "addressLocality": "Fort Worth",
      "addressRegion": "TX",
      "postalCode": "76110",
      "addressCountry": "US"
    }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Markel American Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get affordable Markel American insurance quotes in Fort Worth. Rainbow Insurance Agency shops Markel American & 56+ carriers to find the best rates. Call Susan & team!"
        schema={carrierSchema}
        canonical="https://rainbowinsuranceoffice.com/markel-american-insurance"
      />

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop" 
            alt="Markel American Insurance Protection" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 bg-rainbow-gold/90 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-lg">
              <ShieldCheck className="w-4 h-4" />
              <span>Authorized Markel American Agent</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Markel American <span className="text-rainbow-gold">Insurance</span> in Fort Worth
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed drop-shadow-md">
              Get the best Markel American Insurance rates and service in Fort Worth. Susan and her expert team shop 56+ A+ rated carriers to find you the absolute lowest rates and most comprehensive coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-pink hover:bg-rainbow-rose text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Markel American Quote
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-white hover:bg-gray-100 text-rainbow-pink px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                817-922-8031
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-gray-50 border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { label: "4.9 Star Rating", icon: Star },
              { label: "A+ Rated Carriers", icon: Award },
              { label: "Since 1993", icon: Clock },
              { label: "10k+ Clients", icon: Users }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 font-bold text-2xl text-gray-700">
                <item.icon className="w-8 h-8 text-rainbow-gold fill-rainbow-gold" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Reliable Protection with <span className="text-rainbow-pink">Markel American Insurance</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Markel American Insurance is a trusted provider known for high-quality protection and exceptional service. As an authorized agent in Fort Worth, Rainbow Insurance Agency makes the process simple, transparent, and affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Why Choose Markel American with Rainbow?</h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  When you choose Markel American through Rainbow Insurance, you're getting the combined expertise of Susan and her team. We know how to navigate Markel American's specialized rating system to find the absolute lowest rates for your specific needs.
                </p>
                <p>
                  We believe in transparency and personalized service. By shopping 56+ carriers, we ensure you're getting the most competitive options available in the market.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
                alt="Markel American Insurance Protection" 
                className="rounded-3xl shadow-2xl border border-gray-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <ExpandableText maxLines={20}>
            <div className="space-y-12">
              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Comprehensive Markel American Insurance Solutions in Fort Worth</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Markel American Insurance has established itself as a premier provider of property insurance solutions, known for its commitment to high-quality protection, innovative coverage options, and exceptional customer service. For residents of Fort Worth, Texas, navigating the complexities of insurance can be daunting, but with Markel American Insurance, you gain access to robust policies designed to safeguard your most valuable assets. At Rainbow Insurance Agency, we are proud to serve as your authorized Markel American agent, simplifying the insurance process and ensuring you receive the coverage you deserve at an affordable price.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Whether you are a homeowner, a renter, or a condo owner, Markel American offers tailored solutions that address the unique risks associated with living in Tarrant County. From severe weather events to unexpected property damage, Markel American's comprehensive policies provide the peace of mind you need to focus on what matters most. Our team at Rainbow Insurance Agency works tirelessly to ensure that your Markel American policy is not just a document, but a reliable safety net that stands ready when you need it most.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Markel American Insurance?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Innovative Coverage</h4>
                    <p className="text-gray-600">Markel American is at the forefront of insurance innovation, offering flexible coverage options that can be customized to fit your specific lifestyle and property needs. Their policies are designed to evolve with you, ensuring you never pay for coverage you don't need while maintaining protection where it matters most.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Financial Strength</h4>
                    <p className="text-gray-600">With a solid reputation for financial stability, Markel American Insurance provides the assurance that they have the resources to honor claims promptly and efficiently, even in the face of widespread disasters or significant property damage.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Understanding Your Coverage Options</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A standard homeowners insurance policy is not a one-size-fits-all solution. Depending on your property type and location, you may need additional coverages to be fully protected.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li><strong>Dwelling Coverage:</strong> Protects the structure of your home against covered perils like fire, wind, and hail.</li>
                  <li><strong>Personal Property Coverage:</strong> Covers your belongings—furniture, electronics, clothing—in the event of theft or damage.</li>
                  <li><strong>Liability Coverage:</strong> Provides financial protection if someone is injured on your property and you are found legally responsible.</li>
                  <li><strong>Loss of Use Coverage:</strong> Helps cover living expenses if your home becomes uninhabitable due to a covered loss.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">The Impact of Fort Worth's Climate</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Fort Worth homeowners face unique environmental challenges, including severe thunderstorms, hail, and occasional tornadoes. These weather patterns make robust property insurance not just a luxury, but a necessity. Markel American Insurance policies are designed to provide the specific protections needed to recover from these common Texas weather events. Our agents at Rainbow Insurance Agency can help you assess your property's vulnerability and ensure your policy includes adequate coverage for wind and hail damage.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">The Rainbow Insurance Agency Advantage</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Choosing the right insurance carrier is only half the battle; choosing the right insurance agency is equally critical. At Rainbow Insurance Agency, we don't just sell policies; we build relationships. Susan and her dedicated team bring decades of experience to the table, providing you with the local expertise necessary to navigate the unique insurance landscape of Fort Worth.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li><strong>Personalized Consultations:</strong> We take the time to understand your unique situation, ensuring your Markel American policy is perfectly tailored to your needs.</li>
                  <li><strong>Market Access:</strong> By shopping 56+ carriers, we provide you with a comprehensive view of the market, ensuring you get the most competitive rates available.</li>
                  <li><strong>Claims Advocacy:</strong> Should you ever need to file a claim, our team is here to guide you through the process, acting as your advocate to ensure a fair and timely resolution.</li>
                  <li><strong>Ongoing Support:</strong> Insurance needs change. We are committed to regular policy reviews to ensure your coverage keeps pace with your life.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Common Insurance Myths Debunked</h3>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600"><strong>Myth:</strong> "My home insurance covers everything." <strong>Fact:</strong> Most standard policies exclude events like floods and earthquakes, which require separate coverage.</p>
                  <p className="text-lg text-gray-600"><strong>Myth:</strong> "I only need enough insurance to cover my mortgage." <strong>Fact:</strong> You need enough insurance to cover the full cost of rebuilding your home and replacing your belongings, which may be higher than your mortgage balance.</p>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Navigating the Claims Process</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Filing an insurance claim can be stressful. To make the process smoother, document everything. Take photos of damage, keep receipts for temporary repairs, and maintain a detailed inventory of your belongings. With Markel American's 24/7 claims support and Rainbow Insurance Agency's advocacy, you have a strong support system in place to help you through the recovery process.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Key Markel American Insurance Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Multi-Policy Discount", desc: "Bundle your home and auto insurance for significant savings." },
                    { title: "Comprehensive Coverage", desc: "Protection against fire, theft, wind, hail, and more." },
                    { title: "Competitive Pricing", desc: "Affordable rates without compromising on quality." },
                    { title: "24/7 Claims Service", desc: "Support whenever you need it, day or night." },
                    { title: "Expert Guidance", desc: "Professional advice from licensed insurance experts." },
                    { title: "Flexible Payment Options", desc: "Choose a payment plan that fits your budget." }
                  ].map((feature, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl mb-2 text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {[
                    { q: "Is Markel American Insurance good for Fort Worth homes?", a: "Yes, Markel American offers robust coverage tailored to the specific risks faced by Fort Worth homeowners, including severe weather protection." },
                    { q: "Can I bundle my auto insurance with Markel American?", a: "Absolutely. Bundling your policies through Rainbow Insurance Agency can lead to significant discounts." },
                    { q: "How do I file a claim with Markel American?", a: "Markel American offers 24/7 claims support. Our team at Rainbow Insurance Agency can also assist you in initiating and managing your claim." }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-gray-200 pb-6">
                      <h4 className="text-xl font-bold mb-2 text-gray-900">{faq.q}</h4>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </ExpandableText>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-rainbow-pink text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8">Ready to Start Saving?</h2>
          <p className="text-2xl mb-16 opacity-90">
            Call Rainbow Insurance Agency today at 817-922-8031 and let Susan and her expert team find you the best Markel American Insurance rates in Fort Worth.
          </p>
          <button 
            onClick={openQuoteForm}
            className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-2xl hover:scale-105"
          >
            Get My Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
