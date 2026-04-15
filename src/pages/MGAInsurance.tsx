import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ReadMore from '../components/ReadMore';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function MGAInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - MGA Insurance Authorized Agent",
    "description": "Get affordable MGA insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in MGA non-standard auto insurance & 56+ carriers.",
    "url": "https://rainbowinsuranceoffice.com/mga-insurance",
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

  const contentBlocks = [
    {
      title: "MGA Insurance in Fort Worth: Affordable Auto Protection",
      content: `MGA Insurance Company (now part of GAINSCO) specializes in providing non-standard auto insurance solutions for drivers who may have difficulty finding coverage elsewhere. As an authorized agent for MGA in Fort Worth, Rainbow Insurance Agency is proud to offer our clients access to their flexible and competitive products.
      
      When you choose MGA through Rainbow Insurance, you're getting the combined expertise of Susan and her expert team. We understand how to navigate MGA's specialized rating system to find the absolute lowest rates for your specific needs. MGA is particularly strong in the non-standard auto market, often offering the best value for drivers in the DFW metroplex with less-than-perfect driving records or those who need SR-22 filings.
      
      Our team doesn't just stop at one quote. We compare MGA's offerings with our 56+ other top-rated carriers to ensure you're getting the absolute best deal available in Tarrant County. We believe in providing the best service and the best rates, and MGA is a key partner in helping us achieve that for our clients.`
    },
    {
      title: "The Advantages of MGA Insurance with Rainbow Insurance Agency",
      content: `Working with an independent agent like Rainbow Insurance Agency to secure your MGA policy offers several key advantages. First is our local expertise. We know the Fort Worth and Dallas areas, and we understand the unique risks and requirements of Texas drivers. We can provide personalized advice that you won't get from a generic call center.
      
      MGA is known for its commitment to providing "Insurance for the Real World," focusing on accessible coverage and competitive pricing. They understand that everyone's situation is unique, and they work to provide coverage that fits your life and budget. This shared commitment to personal service and flexibility makes MGA a natural fit for our clients.
      
      Furthermore, MGA offers a variety of specialized features that we can help you unlock. From low down payments to flexible payment plans and fast SR-22 filings, we'll make sure you're taking full advantage of every opportunity to lower your premium and stay on the road. We've been serving the North Texas community since 1993, and our reputation for integrity and honesty is built on finding the best solutions for our clients.`
    },
    {
      title: "MGA Auto Insurance Features",
      content: `MGA specializes in providing comprehensive insurance coverage for vehicles. Some of the key features of their policies include:
      
      • Affordable Liability Coverage: Essential protection that meets Texas state requirements at a price you can afford.
      • Non-Standard Auto Specialist: Coverage options for drivers with accidents, tickets, or lapses in coverage.
      • SR-22 Filings: Fast and efficient SR-22 filings for drivers who need to prove financial responsibility to the state.
      • Low Down Payments: Get covered today with a minimal initial payment.
      • Flexible Payment Plans: A variety of payment options designed to fit your budget.
      • 24/7 Claims Service: MGA is committed to handling claims quickly and fairly, ensuring you get back on the road as soon as possible.
      
      At Rainbow Insurance Agency, we'll help you understand these features and ensure you have the right level of protection for your needs. We're dedicated to providing the best service and the best rates in the business, and MGA's reliable products are a big part of that.`
    },
    {
      title: "Serving the Entire DFW Metroplex with MGA Insurance",
      content: `Whether you're driving in the heart of Fort Worth, commuting to Dallas, or living in one of the many vibrant communities in Arlington or Mesquite, MGA Insurance and Rainbow Insurance Agency have you covered. We serve the entire DFW metroplex, providing expert advice and the best insurance rates to thousands of satisfied clients.
      
      Our team is particularly skilled at helping clients who need high-quality and affordable insurance solutions for their vehicles. MGA's competitive pricing and flexible plan options often make them the best choice for those looking for reliable protection at a price they can afford. We believe that everyone deserves the best protection at a price they can afford.
      
      Believe in us for your MGA insurance needs. Susan and her expert team have the experience, the carriers, and the dedication to ensure you're always getting the best value. Experience the Rainbow difference today and see why we're the top choice for insurance in Fort Worth and beyond.`
    }
  ];

  return (
    <div className="bg-slate-50">
      <SEO 
        title="MGA Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get affordable MGA insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in MGA non-standard auto insurance & 56+ carriers. Call Susan & team!"
        schema={carrierSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop" 
            alt="MGA Insurance Protection" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
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
              className="inline-flex items-center gap-2 bg-[#004a99] text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-2xl border border-white/20"
            >
              <Award className="w-4 h-4" />
              <span>Authorized MGA Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              MGA <br />
              <span className="text-rainbow-gold relative">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Get the best MGA Insurance rates and service in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates and most comprehensive coverage.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get MGA Quote
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                <Phone className="w-8 h-8" />
                817-922-8031
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-3xl border border-gray-100 p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Carriers", value: "56+", icon: Award },
            { label: "Years", value: "30+", icon: Clock },
            { label: "Rating", value: "4.9", icon: Star },
            { label: "Clients", value: "10k+", icon: Users }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-rainbow-pink/5 rounded-2xl flex items-center justify-center mb-2">
                <stat.icon className="w-8 h-8 text-rainbow-pink" />
              </div>
              <div className="text-4xl font-black text-gray-900">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest font-black text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Reliable Protection with <span className="text-rainbow-pink">MGA Insurance</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              MGA Insurance is a trusted provider known for high-quality protection and exceptional service. As an authorized agent in Fort Worth, Rainbow Insurance Agency makes the process simple, transparent, and affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Why Choose MGA with Rainbow?</h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  When you choose MGA through Rainbow Insurance, you're getting the combined expertise of Susan and her team. We know how to navigate MGA's specialized rating system to find the absolute lowest rates for your specific needs.
                </p>
                <p>
                  We believe in transparency and personalized service. By shopping 56+ carriers, we ensure you're getting the most competitive options available in the market.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
                alt="MGA Insurance Protection" 
                className="rounded-3xl shadow-2xl border border-gray-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <ReadMore>
            <div className="space-y-12">
              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Comprehensive MGA Insurance Solutions in Fort Worth</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  MGA Insurance has established itself as a premier provider of property insurance solutions, known for its commitment to high-quality protection, innovative coverage options, and exceptional customer service. For residents of Fort Worth, Texas, navigating the complexities of insurance can be daunting, but with MGA Insurance, you gain access to robust policies designed to safeguard your most valuable assets. At Rainbow Insurance Agency, we are proud to serve as your authorized MGA agent, simplifying the insurance process and ensuring you receive the coverage you deserve at an affordable price.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Whether you are a homeowner, a renter, or a condo owner, MGA offers tailored solutions that address the unique risks associated with living in Tarrant County. From severe weather events to unexpected property damage, MGA's comprehensive policies provide the peace of mind you need to focus on what matters most. Our team at Rainbow Insurance Agency works tirelessly to ensure that your MGA policy is not just a document, but a reliable safety net that stands ready when you need it most.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Why Choose MGA Insurance?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Innovative Coverage</h4>
                    <p className="text-gray-600">MGA is at the forefront of insurance innovation, offering flexible coverage options that can be customized to fit your specific lifestyle and property needs. Their policies are designed to evolve with you, ensuring you never pay for coverage you don't need while maintaining protection where it matters most.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-2xl font-bold mb-4 text-rainbow-pink">Financial Strength</h4>
                    <p className="text-gray-600">With a solid reputation for financial stability, MGA Insurance provides the assurance that they have the resources to honor claims promptly and efficiently, even in the face of widespread disasters or significant property damage.</p>
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
                  Fort Worth homeowners face unique environmental challenges, including severe thunderstorms, hail, and occasional tornadoes. These weather patterns make robust property insurance not just a luxury, but a necessity. MGA Insurance policies are designed to provide the specific protections needed to recover from these common Texas weather events. Our agents at Rainbow Insurance Agency can help you assess your property's vulnerability and ensure your policy includes adequate coverage for wind and hail damage.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">The Rainbow Insurance Agency Advantage</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Choosing the right insurance carrier is only half the battle; choosing the right insurance agency is equally critical. At Rainbow Insurance Agency, we don't just sell policies; we build relationships. Susan and her dedicated team bring decades of experience to the table, providing you with the local expertise necessary to navigate the unique insurance landscape of Fort Worth.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600 leading-relaxed">
                  <li><strong>Personalized Consultations:</strong> We take the time to understand your unique situation, ensuring your MGA policy is perfectly tailored to your needs.</li>
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
                  Filing an insurance claim can be stressful. To make the process smoother, document everything. Take photos of damage, keep receipts for temporary repairs, and maintain a detailed inventory of your belongings. With MGA's 24/7 claims support and Rainbow Insurance Agency's advocacy, you have a strong support system in place to help you through the recovery process.
                </p>
              </section>

              <section>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Key MGA Insurance Features</h3>
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
                    { q: "Is MGA Insurance good for Fort Worth homes?", a: "Yes, MGA offers robust coverage tailored to the specific risks faced by Fort Worth homeowners, including severe weather protection." },
                    { q: "Can I bundle my auto insurance with MGA?", a: "Absolutely. Bundling your policies through Rainbow Insurance Agency can lead to significant discounts." },
                    { q: "How do I file a claim with MGA?", a: "MGA offers 24/7 claims support. Our team at Rainbow Insurance Agency can also assist you in initiating and managing your claim." }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-gray-200 pb-6">
                      <h4 className="text-xl font-bold mb-2 text-gray-900">{faq.q}</h4>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </ReadMore>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rainbow-gold/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
                  The Best Service <br />
                  <span className="text-rainbow-gold">In Fort Worth</span>
                </h2>
                <p className="text-2xl text-white/70 mb-12 leading-relaxed font-medium">
                  We don't just sell insurance; we provide peace of mind. Our team is dedicated to finding you the best rates and providing the best service in Tarrant County.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Local Experts", desc: "We know Fort Worth traffic and risks.", icon: MapPin },
                    { title: "Fast Quotes", desc: "Get covered in minutes, not days.", icon: Zap },
                    { title: "56+ Carriers", desc: "We shop so you don't have to.", icon: Award },
                    { title: "MGA Pros", desc: "Reliable protection for you.", icon: ShieldCheck }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-rainbow-gold transition-all border border-white/10">
                        <item.icon className="w-6 h-6 text-rainbow-gold group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-white mb-1">{item.title}</h4>
                        <p className="text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-rainbow-pink rounded-[3rem] rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform" />
                <div className="bg-white/5 backdrop-blur-md p-12 rounded-[3rem] border border-white/10 relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-rainbow-gold fill-rainbow-gold" />)}
                  </div>
                  <p className="text-3xl text-white italic font-medium mb-10 leading-relaxed">
                    "MGA through Rainbow was the best decision for my car insurance. Susan and her expert team were so helpful and the rates were unbeatable!"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">M</div>
                    <div>
                      <div className="text-2xl font-black text-white">Michael B.</div>
                      <div className="text-rainbow-gold font-bold">Fort Worth Resident</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rainbow-pink to-rainbow-rose rounded-[4rem] p-12 md:p-24 text-white shadow-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rainbow-gold/20 rounded-full -ml-48 -mb-48 blur-[100px]" />
            
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tight">
              Start Saving with <br className="hidden md:block" />
              <span className="text-rainbow-gold">MGA Today</span>
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed font-medium">
              Join thousands of Fort Worth residents who have found the best rates and best service with Rainbow Insurance.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <button 
                onClick={openQuoteForm}
                className="bg-white text-rainbow-pink hover:bg-gray-100 px-14 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get My Free Quote
                <ArrowRight className="w-8 h-8" />
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-14 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4 border-2 border-white/20"
              >
                <Phone className="w-8 h-8" />
                817-922-8031
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
