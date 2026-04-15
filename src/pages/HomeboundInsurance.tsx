import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function HomeboundInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - Homebound Authorized Agent",
    "description": "Get affordable Homebound insurance quotes in Fort Worth. Rainbow Insurance Agency specializes in Homebound auto insurance & 56+ carriers.",
    "url": "https://rainbowinsuranceoffice.com/homebound-insurance",
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
    <div className="bg-slate-50">
      <SEO 
        title="Homebound Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get affordable Homebound insurance quotes in Fort Worth. Rainbow Insurance Agency shops Homebound & 56+ carriers to find the best rates. Call Susan & team!"
        schema={carrierSchema}
        canonical="https://rainbowinsuranceoffice.com/homebound-insurance"
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop" 
            alt="Homebound Insurance Protection" 
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
              <span>Authorized Homebound Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              Homebound <br />
              <span className="text-rainbow-gold relative">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Get the best Homebound Insurance rates and service in Fort Worth. Susan and her expert team shop 56+ A+ rated carriers to find you the absolute lowest rates and most comprehensive coverage.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get Homebound Quote
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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ExpandableText 
            className="prose prose-lg max-w-none"
            buttonClassName="text-rainbow-pink"
          >
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">Homebound Insurance in Fort Worth: Reliable Protection</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Homebound Insurance is a modern, tech-forward insurance provider that is changing the way people think about protection. As an authorized agent for Homebound in Fort Worth, Rainbow Insurance Agency is proud to offer our clients access to their innovative and competitive products. We understand that finding the right insurance can be overwhelming, which is why Susan and her expert team are dedicated to making the process simple, transparent, and affordable.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When you choose Homebound through Rainbow Insurance, you're getting the combined expertise of Susan and her expert team. We understand how to navigate Homebound's specialized rating system to find the absolute lowest rates for your specific needs. Homebound is particularly strong in the modern insurance market, often offering the best value for clients who value technology, convenience, and comprehensive coverage. We take the time to explain the nuances of Homebound's policies, helping you understand the unique features and benefits available. We believe in transparency and personalized service, ensuring that every client feels confident in their protection. By shopping 56+ carriers, including Homebound, we ensure you're getting the most competitive options available in the market.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-6">
                  Our deep roots in Fort Worth allow us to provide a level of service that national carriers simply cannot match. We understand the local landscape, the specific risks of our region, and the values of our community. When you choose Homebound through Rainbow Insurance, you're not just getting a policy; you're getting a dedicated partner who is committed to your long-term success and security. We're here to answer your questions, advocate for your interests, and provide the expert guidance you need to navigate the complexities of the insurance market.
                </p>
              </section>

              <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-black text-gray-900 mb-6">The Advantages of Homebound Insurance with Rainbow Insurance Agency</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Working with an independent agent like Rainbow Insurance Agency to secure your Homebound policy offers several key advantages. First is our local expertise. We know the Fort Worth and Dallas areas, and we understand the unique risks and requirements of Texas drivers. We can provide personalized advice that you won't get from a generic call center.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Homebound is known for its commitment to providing "Insurance for the Modern World," focusing on accessible coverage, competitive pricing, and a seamless digital experience. They understand that everyone's situation is unique, and they work to provide coverage that fits your life and budget. This shared commitment to personal service and flexibility makes Homebound a natural fit for our clients.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Furthermore, Homebound offers a variety of specialized features that we can help you unlock. From modern digital claims processing to flexible payment plans, we'll make sure you're taking full advantage of every opportunity to lower your premium and stay on the road. We've been serving the North Texas community since 1993, and our reputation for integrity and honesty is built on finding the best solutions for our clients.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-black text-gray-900 mb-6">Homebound Insurance Features</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Homebound specializes in providing comprehensive insurance coverage. Some of the key features of their policies include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
                  <li><strong>Modern Digital Experience:</strong> Easy-to-use digital tools for managing your policy and claims.</li>
                  <li><strong>Comprehensive Coverage Options:</strong> Flexible protection that meets your specific needs.</li>
                  <li><strong>Competitive Pricing:</strong> Affordable rates designed to fit your budget.</li>
                  <li><strong>Flexible Payment Plans:</strong> A variety of payment options designed to fit your budget.</li>
                  <li><strong>24/7 Claims Service:</strong> Homebound is committed to handling claims quickly and fairly, ensuring you get back on the road or back to your life as soon as possible.</li>
                </ul>
                <p className="text-lg text-gray-600 leading-relaxed mt-6">
                  At Rainbow Insurance Agency, we'll help you understand these features and ensure you have the right level of protection for your needs. We're dedicated to providing the best service and the best rates in the business, and Homebound's reliable products are a big part of that. We've seen firsthand how they support their policyholders during difficult times, and we're proud to represent a company with such a strong track record of reliability.
                </p>
              </section>

              <section className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-black mb-6 text-rainbow-gold">Serving the Entire DFW Metroplex with Homebound Insurance</h3>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Whether you're driving in the heart of Fort Worth, commuting to Dallas, or living in one of the many vibrant communities in Arlington or Garland, Homebound Insurance and Rainbow Insurance Agency have you covered. We serve the entire DFW metroplex, providing expert advice and the best insurance rates to thousands of satisfied clients. Our office on 8th Ave is a hub of activity where we help our neighbors secure their futures every single day. We're proud to be a part of the local economy and to support the growth of our community.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Our team is particularly skilled at helping clients who need high-quality protection. Homebound's competitive pricing and flexible underwriting often make them the best choice for those looking for reliable protection at a price they can afford. We believe that everyone deserves the best protection at a price they can afford, and we work tirelessly to find the right policy for every client.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mt-6">
                  Believe in us for your Homebound insurance needs. Susan and her expert team have the experience, the carriers, and the dedication to ensure you're always getting the best value. Experience the Rainbow difference today and see why we're the top choice for insurance in Fort Worth and beyond.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-black text-gray-900 mb-6">Expert Guidance for Your Insurance Needs</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Choosing Homebound Insurance through Rainbow Insurance Agency means you're getting more than just a policy; you're getting a partner in your protection. We've been a part of the Fort Worth community since 1993, and we understand the local market better than anyone. We know the specific risks of driving and owning property in North Texas, from the potential for hail damage to the challenges of navigating construction zones. This local knowledge allows us to provide more accurate advice and to tailor your Homebound policy to your specific needs.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our independence is your greatest asset. While we are proud to represent Homebound, we also shop 56+ other A+ rated carriers. This means we can compare Homebound's rates and coverage with the entire market to ensure you're getting the absolute best deal. If Homebound is the best fit for you today, but your needs change tomorrow, we have the flexibility to move you to another carrier without any interruption in your protection. We work for YOU, not the insurance company.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  In Fort Worth, we know that community matters. That's why we're involved in local events and support local charities. When you choose Rainbow Insurance, you're supporting a local business that gives back to the city we all love. We treat every client like family, providing the kind of personal service that is becoming increasingly rare in today's digital world. Call us today at 817-922-8031 and experience the difference that local expertise and a client-centric approach can make for your insurance needs.
                </p>
              </section>

              <section className="bg-rainbow-pink/5 rounded-3xl p-8 border border-rainbow-pink/10">
                <h3 className="text-2xl font-black text-gray-900 mb-6">Get Your Quote Today: Start Saving with Homebound in Fort Worth</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Don't wait until you're in an accident or have a loss to find out if you have the right protection at the right price. Call Rainbow Insurance Agency today at 817-922-8031 and let Susan and her expert team find you the best Homebound Insurance rates in Fort Worth. We'll take the time to listen to your needs, answer your questions, and provide a free, no-obligation quote. Experience the Rainbow difference and see why thousands of your neighbors trust us with their insurance.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Believe in us to find you the absolute lowest rates and the best service in Tarrant County. We've been the trusted choice for Fort Worth since 1993 because we treat every client like family. Whether you're looking for personal or commercial protection, we have the carriers and the experience to find the perfect solution for you. Let's start building your perfect protection plan today.
                </p>
              </section>
            </div>
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
                    { title: "56+ Carriers", desc: "We shop so you don't have to.", icon: Award },
                    { title: "Homebound Pros", desc: "Reliable protection for you.", icon: ShieldCheck }
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
                    "Homebound through Rainbow was the best decision for my car insurance. Susan and her expert team were so helpful and the rates were unbeatable!"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">H</div>
                    <div>
                      <div className="text-2xl font-black text-white">Hannah S.</div>
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
              <span className="text-rainbow-gold">Homebound Today</span>
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
