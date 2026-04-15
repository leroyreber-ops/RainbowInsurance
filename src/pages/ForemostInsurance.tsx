import { Phone, ArrowRight, Shield, Award, Star, Clock, Users, CheckCircle2, Zap, ShieldCheck, Info, ExternalLink, MapPin, History, HomeIcon, Car, Anchor, Briefcase, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function ForemostInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carrierSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Rainbow Insurance Agency - Foremost Authorized Agent",
    "description": "Get cheap Foremost insurance quotes in Fort Worth. Rainbow Insurance Agency shops Foremost & 56 carriers to find the best rates. SR-22 specialists.",
    "url": "https://rainbowinsuranceoffice.com/foremost-insurance",
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
      title: "Foremost Insurance in Fort Worth: Specialized Protection for Your Unique Needs",
      content: `Foremost Insurance, a Farmers Insurance company, has been a leader in specialized insurance for over 60 years. As an authorized Foremost agent in Fort Worth, Rainbow Insurance Agency is proud to offer our clients access to their unique products, including mobile home, motorcycle, and off-road vehicle insurance.

When you choose Foremost through Rainbow Insurance, you're getting the combined expertise of Susan and her dedicated team. We understand how to navigate Foremost's specialized rating system to find the absolute lowest rates for your specific needs. Foremost is particularly strong in the non-standard auto and specialty property markets, often offering the best value for clients with unique risks in the DFW metroplex.

Our team doesn't just stop at one quote. We compare Foremost's offerings with our 56+ other A+ rated carriers to ensure you're getting the absolute best deal available in Tarrant County. We believe in providing the best service and the best rates, and Foremost is a key partner in helping us achieve that for our clients.`
    },
    {
      title: "The Advantages of Foremost Insurance with Rainbow Insurance Agency",
      content: `Working with an independent agent like Rainbow Insurance Agency to secure your Foremost policy offers several key advantages. First is our local expertise. We know the Fort Worth and Dallas areas, and we understand the unique risks and requirements of Texas drivers and homeowners. We can provide personalized advice that you won't get from a generic call center.

Foremost is known for its commitment to providing "Insurance for the Way You Live," focusing on specialized coverage and competitive pricing. They understand that everyone's situation is unique, and they work to provide coverage that fits your life and budget. This shared commitment to personal service and flexibility makes Foremost a natural fit for our clients.

Furthermore, Foremost offers a variety of specialized discounts that we can help you unlock. From multi-policy savings to discounts for safe driving and vehicle safety features, we'll make sure you're taking full advantage of every opportunity to lower your premium. We've been serving the North Texas community since 1993, and our reputation for integrity and honesty is built on finding the best solutions for our clients.`
    },
    {
      title: "Foremost Specialty Auto & Property Features",
      content: `Foremost specializes in providing comprehensive insurance coverage for unique vehicles and properties. Some of the key features of their policies include:

• Mobile Home Insurance: A comprehensive insurance product that provides robust protection for your mobile or manufactured home and personal belongings.
• Motorcycle & Off-Road Vehicle Insurance: Offers a variety of coverage options for riders of all types, with specialized features like accessory coverage and roadside assistance.
• SR-22 Filings: Fast and efficient SR-22 filings for drivers who need to prove financial responsibility to the state.
• Flexible Payment Options: A variety of payment plans designed to fit your budget.
• 24/7 Claims Service: Foremost is committed to handling claims quickly and fairly, ensuring you get back on the road or back to your life as soon as possible.

At Rainbow Insurance Agency, we'll help you understand these features and ensure you have the right level of protection for your needs. We're dedicated to providing the best service and the best rates in the business, and Foremost's reliable products are a big part of that.`
    },
    {
      title: "Serving the Entire DFW Metroplex with Foremost Insurance",
      content: `Whether you're driving in the heart of Fort Worth, commuting to Dallas, or living in one of the many vibrant communities in Arlington or Garland, Foremost Insurance and Rainbow Insurance Agency have you covered. We serve the entire DFW metroplex, providing expert advice and the best insurance rates to thousands of satisfied clients.

Our team is particularly skilled at helping clients who need specialized and affordable insurance solutions. Foremost's competitive pricing and flexible underwriting often make them the best choice for those looking for reliable protection at a price they can afford. We believe that everyone deserves the best protection at a price they can afford.

Believe in us for your Foremost insurance needs. Susan and her expert team have the experience, the carriers, and the dedication to ensure you're always getting the best value. Experience the Rainbow difference today and see why we're the top choice for insurance in Fort Worth and beyond.`
    }
  ];

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Foremost Insurance Fort Worth | Authorized Agent | Best Rates"
        description="Get cheap Foremost insurance quotes in Fort Worth. Rainbow Insurance Agency shops Foremost & 56 carriers to find the best rates. SR-22 specialists. Call Susan & team today!"
        canonical="https://rainbowinsuranceoffice.com/foremost-insurance"
        schema={carrierSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop" 
            alt="Foremost Insurance Protection" 
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
              className="inline-flex items-center gap-2 bg-[#d91e18] text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-2xl border border-white/20"
            >
              <Award className="w-4 h-4" />
              <span>Authorized Foremost Agent</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              Foremost <br />
              <span className="text-rainbow-gold relative">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rainbow-pink/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed drop-shadow-lg font-medium max-w-2xl">Get the best Foremost Insurance rates and service in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates and most comprehensive coverage.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openQuoteForm}
                className="group bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
              >
                Get Foremost Quote
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
              Foremost Insurance <br />
              <span className="text-rainbow-red">Fort Worth</span> Specialists
            </h2>
            <p className="text-2xl text-rainbow-gray font-medium max-w-3xl mx-auto">
              Explore why Foremost is the leader in specialty insurance for Tarrant County and how Rainbow Insurance Agency secures your unique assets.
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
                  <h3 className="text-2xl font-black text-rainbow-ink mb-4">60 Years of Specialty</h3>
                  <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                    Foremost Insurance has spent over six decades perfecting the art of specialty insurance. From mobile homes to high-performance motorcycles, they cover what others won't.
                  </p>
                </div>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-rainbow-gold/10 rounded-2xl flex items-center justify-center text-rainbow-gold mb-8 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-rainbow-ink mb-4">Fort Worth's Choice</h3>
                  <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                    In a diverse city like Fort Worth, one-size-fits-all insurance doesn't work. Foremost's flexible underwriting is ideal for the unique lifestyles of North Texas residents.
                  </p>
                </div>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-rainbow-red/10 rounded-2xl flex items-center justify-center text-rainbow-red mb-8 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-rainbow-ink mb-4">Farmers Family Strength</h3>
                  <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                    As part of the Farmers Insurance Group, Foremost combines the agility of a specialty carrier with the massive financial backing of a global leader.
                  </p>
                </div>
              </div>
            }
            buttonClassName="text-rainbow-red font-black text-xl mx-auto mt-12 py-4 px-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-all"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-pink/10 rounded-2xl flex items-center justify-center text-rainbow-pink mb-8 group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">Mobile & Manufactured</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Foremost is the undisputed leader in mobile home insurance. Whether you live in a classic manufactured home or a modern modular build in Tarrant County, Foremost provides specialized protection that covers the structure, your belongings, and liability. Their policies are designed for the specific risks associated with mobile home living in North Texas, including specialized coverage for wind and hail damage.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-gold/10 rounded-2xl flex items-center justify-center text-rainbow-gold mb-8 group-hover:scale-110 transition-transform">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">Specialty Auto & SR-22</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Not every driver fits into a standard box. Foremost specializes in non-standard auto insurance, providing a path forward for those with less-than-perfect driving records. At Rainbow Insurance Agency, we use Foremost to help Fort Worth drivers secure SR-22 filings and high-risk coverage at rates that are surprisingly affordable. We believe in second chances, and Foremost helps us deliver them.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-red/10 rounded-2xl flex items-center justify-center text-rainbow-red mb-8 group-hover:scale-110 transition-transform">
                  <Anchor className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">Motorcycle & Off-Road</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  From cruisers to dirt bikes and ATVs, Foremost understands the passion of the ride. Their recreational policies offer specialized features like optional equipment coverage and roadside assistance designed specifically for riders. Whether you're exploring the trails around Lake Worth or cruising the open highways of North Texas, Foremost ensures your adventure is protected.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-pink/10 rounded-2xl flex items-center justify-center text-rainbow-pink mb-8 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">Landlord & Rental</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Fort Worth's real estate market is thriving. If you're a landlord, Foremost offers specialized rental property insurance that protects your investment from tenant damage, loss of rent, and liability. Their flexible policies are ideal for those with multiple rental units or those just starting their real estate portfolio in Tarrant County.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-gold/10 rounded-2xl flex items-center justify-center text-rainbow-gold mb-8 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">The Rainbow Advantage</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  Why choose Foremost through Rainbow Insurance Agency? Because specialty insurance requires a specialist's touch. Susan and her expert team know how to navigate Foremost's unique underwriting to find the best fit for your specific needs. We don't just sell you a policy; we advocate for you. Plus, we'll always compare Foremost's rates against our 56 other carriers to ensure you're getting the absolute best value.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-rainbow-red/10 rounded-2xl flex items-center justify-center text-rainbow-red mb-8 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-rainbow-ink mb-4">Claims Excellence</h3>
                <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                  When the unexpected happens, Foremost's claims service is second to none. They have specialized adjusters who understand the unique construction of mobile homes and the intricacies of powersports equipment. This expertise ensures that your claim is handled fairly and quickly, getting you back to your life in Fort Worth as soon as possible.
                </p>
              </div>
            </div>

            <div className="mt-16 prose prose-xl max-w-none text-rainbow-gray font-medium leading-relaxed bg-slate-50 p-12 rounded-[3rem] border border-gray-100">
              <p>
                Foremost's commitment to the specialty market is what makes them such a valuable partner for Rainbow Insurance Agency. They don't just offer standard policies with a few endorsements; they build products from the ground up for specific needs. This is particularly evident in their mobile home insurance, where they've been the industry standard for decades. They understand the unique risks of manufactured housing, from the importance of proper tie-downs to the specific liability concerns of mobile home communities in Tarrant County.
              </p>
              <p>
                For motorcycle enthusiasts in Fort Worth, Foremost offers a level of customization that is hard to find elsewhere. You can choose coverage for your custom paint job, your expensive chrome accessories, and even your safety apparel. Their "First Accident Forgiveness" program is another example of their rider-friendly approach, ensuring that one mistake doesn't result in a massive premium spike. At Rainbow Insurance Agency, we help you navigate these options to build a policy that reflects your passion and protects your investment.
              </p>
              <p>
                The financial stability of Foremost is a major selling point. Being part of the Farmers Insurance Group means they have the resources to handle large-scale claims events, such as the severe hailstorms and wind events that frequently impact North Texas. This peace of mind is what our clients look for when they choose an insurance partner. Susan and her expert team have seen firsthand how Foremost takes care of their policyholders during difficult times, and we are proud to stand behind their products.
              </p>
              <p>
                In conclusion, Foremost Insurance offers a unique and powerful set of solutions for those with specialized insurance needs. When paired with the local expertise and independent advocacy of Rainbow Insurance Agency, you get an insurance experience that is truly tailored to your life in Fort Worth. We invite you to experience the Rainbow difference today. Let us show you how Foremost can protect your unique assets while keeping more money in your pocket. Believe in us, and we'll show you why we're Tarrant County's #1 choice for Foremost insurance.
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
                    { title: "Specialty Pros", desc: "We handle the hard cases.", icon: ShieldCheck }
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
                    "Foremost through Rainbow was the best decision for my mobile home and motorcycle insurance. Susan and her expert team were so helpful and the rates were unbeatable!"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rainbow-gold rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">F</div>
                    <div>
                      <div className="text-2xl font-black text-white">Frank M.</div>
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
              <span className="text-rainbow-gold">Foremost Today</span>
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
