import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin, History, Car, HomeIcon, Briefcase, Heart, Anchor, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function ProgressiveInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - Progressive Authorized Agent",
    "description": "Get cheap Progressive insurance quotes in Fort Worth. Rainbow Insurance Agency shops Progressive & 56 carriers to find the best rates. SR-22 specialists.",
    "url": "https://rainbowinsuranceoffice.com/progressive-insurance",
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
      title: "Progressive Insurance in Fort Worth: Innovative Protection for Your Life",
      content: `Progressive is one of the largest and most innovative insurance companies in the United States, known for its commitment to providing high-quality protection and exceptional service. As an authorized Progressive agent in Fort Worth, Rainbow Insurance Agency is proud to offer our clients access to their extensive range of products, including auto and home insurance.

When you choose Progressive through Rainbow Insurance, you're getting the combined expertise of Susan and her dedicated team. We understand how to navigate Progressive's sophisticated rating system to find the absolute lowest rates for your specific needs. Progressive is particularly strong in the standard and non-standard auto markets, often offering the best value for clients with diverse needs in the DFW metroplex.

Our team doesn't just stop at one quote. We compare Progressive's offerings with our 56 other A+ rated carriers to ensure you're getting the absolute best deal available in Tarrant County. We believe in providing the best service and the best rates, and Progressive is a key partner in helping us achieve that for our clients.`
    },
    {
      title: "The Advantages of Progressive Insurance with Rainbow Insurance Agency",
      content: `Working with an independent agent like Rainbow Insurance Agency to secure your Progressive policy offers several key advantages. First is our local expertise. We know the Fort Worth and Dallas areas, and we understand the unique risks and requirements of Texas drivers and homeowners. We can provide personalized advice that you won't get from a generic call center.

Progressive is known for its commitment to providing "Insurance for the Way You Live," focusing on comprehensive coverage and competitive pricing. They understand that everyone's situation is unique, and they work to provide coverage that fits your life and budget. This shared commitment to personal service and flexibility makes Progressive a natural fit for our clients.

Furthermore, Progressive offers a variety of specialized discounts that we can help you unlock. From multi-policy savings to discounts for safe driving and vehicle safety features, we'll make sure you're taking full advantage of every opportunity to lower your premium. We've been serving the North Texas community since 1993, and our reputation for integrity and honesty is built on finding the best solutions for our clients.`
    },
    {
      title: "Progressive Auto & Home Insurance Features",
      content: `Progressive specializes in providing comprehensive insurance coverage for vehicles and homes. Some of the key features of their policies include:

• Snapshot®: This usage-based insurance program rewards safe drivers with significant discounts based on their actual driving habits.
• Name Your Price® Tool: Allows you to customize your coverage and premium to fit your budget.
• SR-22 Filings: Fast and efficient SR-22 filings for drivers who need to prove financial responsibility to the state.
• Flexible Payment Options: A variety of payment plans designed to fit your budget.
• 24/7 Claims Service: Progressive is committed to handling claims quickly and fairly, ensuring you get back on the road or back to your life as soon as possible.

At Rainbow Insurance Agency, we'll help you understand these features and ensure you have the right level of protection for your needs. We're dedicated to providing the best service and the best rates in the business, and Progressive's reliable products are a big part of that.`
    },
    {
      title: "Serving the Entire DFW Metroplex with Progressive Insurance",
      content: `Whether you're driving in the heart of Fort Worth, commuting to Dallas, or living in one of the many vibrant communities in Arlington or Garland, Progressive Insurance and Rainbow Insurance Agency have you covered. We serve the entire DFW metroplex, providing expert advice and the best insurance rates to thousands of satisfied clients.

Our team is particularly skilled at helping clients who need high-quality protection for their homes and vehicles. Progressive's competitive pricing and flexible underwriting often make them the best choice for those looking for reliable protection at a price they can afford. We believe that everyone deserves the best protection at a price they can afford.

Believe in us for your Progressive insurance needs. Susan and her expert team have the experience, the carriers, and the dedication to ensure you're always getting the best value. Experience the Rainbow difference today and see why we're the top choice for insurance in Fort Worth and beyond.`
    }
  ];

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Progressive Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get cheap Progressive insurance quotes in Fort Worth. Rainbow Insurance Agency shops Progressive & 56 carriers to find the best rates. SR-22 specialists. Call Susan & team today!"
        canonical="https://rainbowinsuranceoffice.com/progressive-insurance"
        schema={carrierSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533558701576-23c65e926363?w=1600&h=900&fit=crop" 
            alt="Progressive Insurance Protection" 
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
              <span>Authorized Progressive Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              Progressive <br />
              <span className="text-rainbow-gold relative">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Get the best Progressive Insurance rates and service in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates and most comprehensive coverage.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get Progressive Quote
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

      {/* Massive SEO Content Section - Redesigned */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black text-rainbow-ink mb-6 leading-tight">
              Progressive Insurance <br />
              <span className="text-rainbow-red">Fort Worth</span> Experts
            </h2>
            <p className="text-2xl text-rainbow-gray font-medium max-w-3xl mx-auto">
              Deep dive into why Progressive is a top choice for Tarrant County residents and how Rainbow Insurance Agency helps you maximize your savings.
            </p>
          </div>

          <ExpandableText 
            isManual 
            preview={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-rainbow-pink/10 rounded-2xl flex items-center justify-center text-rainbow-pink mb-8 group-hover:scale-110 transition-transform">
                    <History className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-rainbow-ink mb-4">A Legacy of Innovation</h3>
                  <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                    Progressive has been a leader in the insurance industry for decades, known for pioneering usage-based insurance and offering competitive rates for a wide range of drivers. In Fort Worth, Progressive is a household name for reliability.
                  </p>
                </div>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-rainbow-gold/10 rounded-2xl flex items-center justify-center text-rainbow-gold mb-8 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-rainbow-ink mb-4">Local DFW Expertise</h3>
                  <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                    Navigating the traffic on I-35W or the busy streets of Downtown Fort Worth requires robust auto insurance. Progressive's data-driven approach ensures that North Texas drivers get coverage tailored to their specific environment.
                  </p>
                </div>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-rainbow-red/10 rounded-2xl flex items-center justify-center text-rainbow-red mb-8 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-rainbow-ink mb-4">Unbeatable Value</h3>
                  <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                    By combining Progressive's innovative tools with Rainbow Insurance Agency's independent shopping, you get the best of both worlds: a top-tier carrier and the lowest possible rates in the market.
                  </p>
                </div>
              </div>
            }
            buttonClassName="text-rainbow-red font-black text-xl mx-auto mt-12 py-4 px-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-all"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-pink/10 rounded-2xl flex items-center justify-center text-rainbow-pink mb-8 group-hover:scale-110 transition-transform">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">Auto Insurance Mastery</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Progressive's auto insurance is designed for the modern driver. With features like Snapshot, you can save money based on how you actually drive. This is perfect for Fort Worth commuters who take pride in their safe driving habits. Whether you're driving a brand-new truck or a reliable sedan, Progressive offers the protection you need against accidents, theft, and the unpredictable Texas weather.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-gold/10 rounded-2xl flex items-center justify-center text-rainbow-gold mb-8 group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">Home & Property</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Protecting your home in Tarrant County is a top priority. Progressive's home insurance policies are comprehensive, covering everything from hail damage to liability. When you bundle your home and auto insurance through Progressive at Rainbow Insurance Agency, you unlock massive discounts that make high-quality protection surprisingly affordable. We ensure your policy is right for your specific neighborhood, from Tanglewood to North Richland Hills.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-red/10 rounded-2xl flex items-center justify-center text-rainbow-red mb-8 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">Business & Commercial</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Fort Worth is a city of entrepreneurs. Progressive offers robust commercial insurance for small businesses, contractors, and fleet owners. From general liability to commercial auto, we help you build a Progressive policy that protects your livelihood. Our team understands the local business climate and ensures you have the coverage required by Texas law and your specific industry.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-pink/10 rounded-2xl flex items-center justify-center text-rainbow-pink mb-8 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">SR-22 & High Risk</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Progressive is one of the most flexible carriers when it comes to high-risk drivers and SR-22 filings. At Rainbow Insurance Agency, we specialize in helping drivers get back on their feet. Progressive's efficient filing system means we can get your SR-22 processed quickly, often on the same day, so you can maintain your driving privileges and get back to work in Fort Worth.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-gold/10 rounded-2xl flex items-center justify-center text-rainbow-gold mb-8 group-hover:scale-110 transition-transform">
                  <Anchor className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">Recreational Coverage</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Whether you're taking your boat out to Eagle Mountain Lake or riding your motorcycle through the Texas Hill Country, Progressive offers specialized insurance for all your toys. Their recreational policies are among the best in the industry, providing specialized coverage that standard auto policies often miss. We'll help you protect your RV, ATV, or jet ski with the same level of care we give to your home.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-red/10 rounded-2xl flex items-center justify-center text-rainbow-red mb-8 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">The Rainbow Advantage</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Why choose Progressive through Rainbow Insurance Agency instead of going direct? Because we are your local advocates. When you have a question or a claim, you speak to Susan and her expert team, not a random call center agent. We know your name, we know your history, and we know how to make Progressive's systems work for you. Plus, we'll always double-check Progressive's rates against our 56 other carriers to ensure you're still getting the best deal.
                </p>
              </div>
            </div>

            <div className="mt-16 prose prose-xl max-w-none text-rainbow-gray font-medium leading-relaxed bg-slate-50 p-12 rounded-[3rem] border border-gray-100">
              <p>
                Progressive's commitment to innovation is evident in their constant refinement of their pricing models. They use advanced analytics to understand risk better than almost any other carrier, which often translates to lower premiums for responsible drivers in Fort Worth. Their "Name Your Price" tool is a favorite among our clients, allowing for a transparent look at how different coverage levels affect your monthly payment. At Rainbow Insurance Agency, we take this a step further by providing expert guidance on which coverages are essential for North Texas and which ones you might be able to adjust to save money.
              </p>
              <p>
                The claims process with Progressive is equally impressive. They have a massive network of authorized repair shops in the DFW area, ensuring that if you're in an accident, your vehicle is repaired quickly and to the highest standards. Their mobile app makes it easy to report a claim, upload photos, and track the progress of your repairs in real-time. This level of transparency and efficiency is why we've trusted Progressive as one of our core carriers since we opened our doors in 1993.
              </p>
              <p>
                Furthermore, Progressive's financial stability is rock-solid. When you're looking for insurance, you want to know that the company will be there when you need them most. Progressive's A+ rating from A.M. Best is a testament to their ability to pay claims, even in the event of major disasters. This peace of mind is invaluable, especially in a region like North Texas where severe weather is a regular occurrence. Susan and her expert team have seen firsthand how Progressive takes care of their policyholders during difficult times, and we are proud to stand behind their products.
              </p>
              <p>
                In conclusion, Progressive Insurance offers a powerful combination of innovation, reliability, and value. When paired with the local expertise and independent advocacy of Rainbow Insurance Agency, you get an insurance experience that is second to none in Fort Worth. We invite you to experience the Rainbow difference today. Let us show you how Progressive can protect your family, your home, and your business while keeping more money in your pocket. Believe in us, and we'll show you why we're Tarrant County's #1 choice for Progressive insurance.
              </p>
            </div>
          </ExpandableText>
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
                    { title: "56 Carriers", desc: "We shop so you don't have to.", icon: Award },
                    { title: "SR-22 Pros", desc: "We handle the hard cases.", icon: ShieldCheck }
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
                    "Progressive through Rainbow was the best decision for my home and car insurance. Susan and her expert team were so helpful and the rates were unbeatable!"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">P</div>
                    <div>
                      <div className="text-2xl font-black text-white">Peter G.</div>
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
              <span className="text-rainbow-gold">Progressive Today</span>
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
