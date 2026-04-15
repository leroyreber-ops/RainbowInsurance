import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function AmericanMercuryInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - American Mercury Insurance Authorized Agent",
    "description": "Get affordable American Mercury Insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in American Mercury auto insurance & 56 carriers.",
    "url": "https://rainbowinsuranceoffice.com/american-mercury-insurance",
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

  const seoContent = `
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">American Mercury Insurance in Fort Worth: Exceptional Value and Protection</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          American Mercury Insurance, a part of the Mercury Insurance Group, is renowned for providing high-quality auto insurance at competitive prices. In the bustling city of Fort Worth, where the commute can take you from the historic Stockyards to the modern skyline of Sundance Square, having reliable and affordable auto insurance is essential. At Rainbow Insurance Agency, we are proud to be an authorized agent for American Mercury, bringing their exceptional value and protection to our neighbors in Tarrant County. Whether you're looking for basic liability or comprehensive coverage, American Mercury offers the security and peace of mind that North Texas drivers deserve. Susan and her expert team have been serving this community since 1993, and we understand how to leverage American Mercury's products to find the best fit for your unique situation.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          The DFW metroplex is a dynamic environment, with busy highways like I-35W and I-30 requiring constant vigilance. American Mercury focuses on providing robust coverage that meets or exceeds Texas state requirements, ensuring you're protected against financial loss in the event of an accident. At Rainbow Insurance Agency, we take the time to explain the nuances of American Mercury's policies, helping you understand exactly what your coverage includes. We believe in transparency and personalized service, ensuring that every client feels confident in their protection. By shopping 56 carriers, including American Mercury, we ensure you're getting the most competitive rates available in the market.
        </p>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-black text-gray-900 mb-6">A Commitment to Affordability and Quality</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          One of the primary strengths of American Mercury is its commitment to providing affordable insurance without compromising on quality. They understand that every driver's budget is different, and they offer a variety of coverage options and discounts that allow you to customize your policy. Susan and her expert team at Rainbow Insurance are masters at working with American Mercury to secure the protection our clients need. We believe that everyone deserves high-quality insurance that is specifically designed for their needs and budget.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our local expertise in Fort Worth allows us to provide personalized advice that you won't get from a generic call center. We understand the specific risks of North Texas and can help you navigate American Mercury's offerings to find the perfect balance of price and protection. Whether you're a first-time driver or have years of experience, we're here to advocate for you and ensure you have the best possible insurance experience. This commitment to our clients' best interests is why Rainbow Insurance has been a trusted name in Tarrant County for over three decades.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-black text-gray-900 mb-6">Comprehensive Coverage for Every Driver</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          American Mercury offers a full suite of auto insurance products, from basic liability to comprehensive and collision coverage. They understand that every driver's needs are different, and they provide the flexibility to customize your policy accordingly. Whether you're looking for protection for a new family vehicle or a reliable truck for work, American Mercury has a solution that fits. At Rainbow Insurance Agency, we'll help you navigate these options and find the perfect balance of price and protection for your specific situation.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          In addition to standard auto coverage, American Mercury also provides options for uninsured/underinsured motorist protection, medical payments, and personal injury protection. These additional layers of security are essential in the DFW metroplex, where the risk of accidents with uninsured drivers is a reality. We'll help you understand the importance of these coverages and ensure you have the robust protection you need to drive with confidence on Texas roads.
        </p>
      </section>

      <section className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
        <h3 className="text-2xl font-black mb-6 text-rainbow-gold">Claims and Support: Reliability When It Matters Most</h3>
        <p className="text-lg text-white/80 leading-relaxed mb-6">
          The true value of an insurance policy is revealed when you have a claim. American Mercury is committed to providing efficient and fair claims handling, ensuring you get the support you need during a difficult time. They offer a streamlined claims process, with dedicated adjusters who work to resolve your case as quickly as possible. At Rainbow Insurance Agency, we're here to advocate for you throughout the entire claims experience. We can help you file the initial report, gather documentation, and communicate with the American Mercury claims team. Our goal is to ensure your claim is handled with the integrity and speed you deserve.
        </p>
        <p className="text-lg text-white/80 leading-relaxed">
          We also provide ongoing support to our American Mercury policyholders. As your life changes, we're here to ensure your insurance keeps pace. Whether you're buying a new car, moving to a different part of Fort Worth, or simply have questions about your coverage, Susan and her expert team are just a phone call away. We believe in building long-term relationships with our clients, providing the expert guidance and personal service that you won't find at a national call center.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-black text-gray-900 mb-6">Local Expertise: The Rainbow Insurance Advantage</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Choosing American Mercury Insurance through Rainbow Insurance Agency means you're getting more than just a policy; you're getting a partner in your protection. We've been a part of the Fort Worth community since 1993, and we understand the local market better than anyone. We know the specific risks of driving in North Texas, from the potential for hail damage to the challenges of navigating construction zones. This local knowledge allows us to provide more accurate advice and to tailor your American Mercury policy to your specific needs.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our independence is your greatest asset. While we are proud to represent American Mercury, we also shop 56 other A+ rated carriers. This means we can compare American Mercury's rates and coverage with the entire market to ensure you're getting the absolute best deal. If American Mercury is the best fit for you today, but your needs change tomorrow, we have the flexibility to move you to another carrier without any interruption in your protection. We work for YOU, not the insurance company.
        </p>
      </section>

      <section className="bg-rainbow-pink/5 rounded-3xl p-8 border border-rainbow-pink/10">
        <h3 className="text-2xl font-black text-gray-900 mb-6">Get Your American Mercury Quote Today: Start Saving in Fort Worth</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Don't wait until you're in an accident to find out if you have the right protection at the right price. Call Rainbow Insurance Agency today at 817-922-8031 and let Susan and her expert team find you the best American Mercury Insurance rates in Fort Worth. We'll take the time to listen to your needs, answer your questions, and provide a free, no-obligation quote. Experience the Rainbow difference and see why thousands of your neighbors trust us with their auto insurance.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Believe in us to find you the absolute lowest rates and the best service in Tarrant County. We've been the trusted choice for Fort Worth since 1993 because we treat every client like family. Whether you're looking for basic liability or comprehensive protection, we have the carriers and the experience to find the perfect solution for you.
        </p>
      </section>
    </div>
  `;

  return (
    <div className="bg-slate-50">
      <SEO 
        title="American Mercury Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get the best American Mercury Insurance rates in Fort Worth with Rainbow Insurance Agency. We shop 56 carriers to find you the absolute lowest rates."
        schema={carrierSchema}
        canonical="https://rainbowinsuranceoffice.com/american-mercury-insurance"
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1600&h=900&fit=crop" 
            alt="American Mercury Auto Insurance" 
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
              className="inline-flex items-center gap-2 bg-[#fdb913] text-black px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-2xl border border-white/20"
            >
              <Award className="w-4 h-4" />
              <span>Authorized American Mercury Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              American Mercury <br />
              <span className="text-rainbow-gold relative">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Get the best American Mercury Insurance rates and service in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get American Mercury Quote
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
            { label: "Carriers", value: "56", icon: Award },
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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ExpandableText 
            className="prose prose-lg max-w-none"
            buttonClassName="text-rainbow-pink"
          >
            {seoContent}
          </ExpandableText>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="py-32 bg-slate-50">
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
                    { title: "56 Carriers", desc: "We shop so you don't have to.", icon: Award },
                    { title: "American Mercury Pros", desc: "Exceptional value for you.", icon: ShieldCheck }
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
                    "American Mercury through Rainbow was a great choice. Susan and her expert team were so helpful and the rates were unbeatable. Highly recommend!"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">D</div>
                    <div>
                      <div className="text-2xl font-black text-white">David K.</div>
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
      <section className="py-32 bg-white relative overflow-hidden">
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
              <span className="text-rainbow-gold">American Mercury Today</span>
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
