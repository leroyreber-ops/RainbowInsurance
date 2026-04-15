import { 
  Phone, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Car, 
  Clock, 
  Award, 
  MapPin, 
  Users, 
  Zap, 
  ArrowRight,
  History,
  Home as HomeIcon,
  Briefcase,
  Anchor,
  FileText,
  Heart,
  TrendingUp,
  Shield,
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function Home({ navigateTo, openQuoteForm }: PageProps) {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": "https://rainbowinsurance.com/#agency",
        "name": "Rainbow Insurance Agency",
        "description": "Fort Worth's #1 rated auto insurance agency since 1993. We shop 56+ carriers to find you the best rates on Fort Worth Auto Insurance.",
        "url": "https://rainbowinsurance.com",
        "telephone": "817-922-8031",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2209 8th Ave",
          "addressLocality": "Fort Worth",
          "addressRegion": "TX",
          "postalCode": "76110"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "32.7167",
          "longitude": "-97.3333"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://rainbowinsurance.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I find the cheapest Fort Worth Auto Insurance?",
            "content": "To find the cheapest Fort Worth Auto Insurance, you need to compare multiple carriers. Rainbow Insurance Agency shops over 56 A+ rated carriers to find you the absolute lowest rates and best discounts available in the Tarrant County area."
          },
          {
            "@type": "Question",
            "name": "Does Rainbow Insurance offer SR-22 filings in Fort Worth?",
            "content": "Yes, we are Fort Worth's SR-22 specialists. We provide instant SR-22 filings with the Texas DPS, helping high-risk drivers get back on the road legally and affordably, often on the same day."
          },
          {
            "@type": "Question",
            "name": "What factors affect my Fort Worth Auto Insurance rates?",
            "content": "Several factors affect your Fort Worth Auto Insurance rates, including your driving record, the type of vehicle you drive, your age, your zip code, and even your credit score. Local factors like Fort Worth traffic density and weather risks (hail) also play a role."
          },
          {
            "@type": "Question",
            "name": "Can I bundle my home and auto insurance in Fort Worth?",
            "content": "Absolutely! Bundling your Fort Worth Auto Insurance with home, renters, or condo insurance is one of the most effective ways to save money, often resulting in discounts of up to 25% across both policies."
          },
          {
            "@type": "Question",
            "name": "Why should I choose a local agent for Fort Worth Auto Insurance?",
            "content": "Choosing a local agent like Rainbow Insurance means you get personalized service from experts who understand the unique risks of driving in North Texas. We provide advocacy during claims and a level of care that national call centers simply cannot match."
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Fort Worth Auto Insurance | Cheap Rates & SR-22 Specialists"
        description="Get the best Fort Worth Auto Insurance rates with Rainbow Insurance. We shop 56+ carriers to find you the lowest premiums. Specializing in SR-22 and high-risk drivers since 1993."
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img1.wsimg.com/isteam/ip/8978f467-2df7-4539-a800-434d5ed54414/susan-rainbow-insurance-office.jpg" 
            alt="Susan - Founder of Rainbow Insurance" 
            className="w-full h-full object-cover object-[center_10%] opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-rainbow-red/5 text-rainbow-red px-4 py-2 rounded-full text-sm font-bold mb-6 border border-rainbow-red/10">
                <Star className="w-4 h-4 fill-rainbow-red" />
                <span>Fort Worth's #1 Rated Agency Since 1993</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-rainbow-ink leading-[1.1] tracking-tight mb-8">
                Fort Worth <br />
                <span className="text-rainbow-red">Auto Insurance</span>
              </h1>
              <div className="text-xl md:text-2xl text-rainbow-gray mb-10 leading-relaxed font-medium">
                <p className="mb-4">
                  Finding the best <strong>Fort Worth Auto Insurance</strong> doesn't have to be a struggle. At Rainbow Insurance Agency, we specialize in helping our neighbors find the absolute lowest rates by shopping over 56 A+ rated carriers. Whether you have a perfect driving record or need an SR-22 filing, Susan and her expert team are here to protect you and your family.
                </p>
                <p>
                  Since 1993, we have been the trusted choice for thousands of Tarrant County residents. We believe in providing the best service, the best rates, and the best coverage options tailored specifically to the unique needs of Fort Worth drivers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <button 
                  onClick={openQuoteForm}
                  className="bg-rainbow-red hover:bg-red-800 text-white px-10 py-5 rounded-xl font-black text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Get Free Quote
                  <ArrowRight className="w-6 h-6" />
                </button>
                <a 
                  href="tel:817-922-8031"
                  className="bg-white hover:bg-gray-50 text-rainbow-ink border-2 border-gray-200 px-10 py-5 rounded-xl font-black text-xl transition-all flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6 text-rainbow-red" />
                  817-922-8031
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-16 lg:mt-0 lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/8978f467-2df7-4539-a800-434d5ed54414/DSC_5246.jpg" 
                  alt="Rainbow Insurance Team" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rainbow-ink/40 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rainbow-gold rounded-full flex items-center justify-center text-white font-black">56</div>
                  <div className="font-black text-rainbow-ink">Insurance Carriers</div>
                </div>
                <p className="text-sm text-rainbow-gray font-medium">We shop the entire market so you don't have to. Average savings of $642/year on your auto policy.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-rainbow-cream border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-black text-rainbow-gray uppercase tracking-widest mb-8">We Compare Rates From Top-Rated Carriers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {['Progressive', 'Travelers', 'Mercury', 'Nationwide', 'Foremost', 'The Hartford'].map((name) => (
              <span key={name} className="text-2xl font-black tracking-tighter text-rainbow-ink">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Read More */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-rainbow-ink mb-6">Why Rainbow Insurance is the Best Choice for <span className="text-rainbow-red">Fort Worth Auto Insurance</span></h2>
            <p className="text-xl text-rainbow-gray font-medium">When it comes to protecting your vehicle and your financial future, you need an agency that combines local expertise with the power of choice.</p>
          </div>

          <ExpandableText 
            isManual 
            preview={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-rainbow-red/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-rainbow-red transition-colors">
                    <MapPin className="w-10 h-10 text-rainbow-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-rainbow-ink mb-4">Local Fort Worth Expertise</h3>
                  <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                    We live and work in Tarrant County. We understand the specific risks of driving on I-35W, the impact of North Texas hailstorms, and the insurance requirements unique to our local community.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-rainbow-gold/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-rainbow-gold transition-colors">
                    <ShieldCheck className="w-10 h-10 text-rainbow-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-rainbow-ink mb-4">The Power of 56 Carriers</h3>
                  <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                    Unlike "captive" agents who only represent one company, we shop 56 different A+ rated carriers to find you the absolute best value for your <strong>Fort Worth Auto Insurance</strong>.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 transition-colors">
                    <Users className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-rainbow-ink mb-4">Personalized Advocacy</h3>
                  <p className="text-lg text-rainbow-gray font-medium leading-relaxed">
                    Susan and her expert team are your advocates. If you have a claim, we're here to help you navigate the process and ensure you're treated fairly. You aren't just a policy number to us.
                  </p>
                </div>
              </div>
            }
            buttonClassName="text-rainbow-red font-black text-xl mx-auto mt-12 py-4 px-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-all"
          >
            <div className="space-y-24 mt-24">
              {/* Detailed Content Blocks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-4xl font-black text-rainbow-ink mb-8">Comprehensive Coverage Options for <span className="text-rainbow-red">Fort Worth Drivers</span></h2>
                  <div className="space-y-6 text-lg text-rainbow-gray font-medium leading-relaxed">
                    <p>
                      Every driver in Fort Worth has different needs. Whether you're a daily commuter navigating the "Mixmaster" or a weekend adventurer heading to Joe Pool Lake, your <strong>Fort Worth Auto Insurance</strong> should reflect your lifestyle. We offer a full range of coverage options to ensure you're protected against every eventuality.
                    </p>
                    <p>
                      <strong>Liability Insurance:</strong> This is the foundation of your policy, covering bodily injury and property damage to others if you're at fault in an accident. While Texas requires minimum limits of 30/60/25, we often recommend higher limits to protect your personal assets from lawsuits.
                    </p>
                    <p>
                      <strong>Collision & Comprehensive:</strong> These coverages protect your own vehicle. Collision covers damage from accidents with other cars, while Comprehensive covers "acts of God" like the frequent North Texas hailstorms, theft, and vandalism.
                    </p>
                    <p>
                      <strong>Uninsured/Underinsured Motorist:</strong> This is critical in Texas, where many drivers carry only the bare minimum or no insurance at all. This coverage ensures you aren't left holding the bill if you're hit by someone who can't pay.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=1000&fit=crop" 
                    alt="Car Insurance Fort Worth" 
                    className="rounded-[3rem] shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-rainbow-gold p-8 rounded-3xl shadow-2xl text-white max-w-xs">
                    <div className="text-4xl font-black mb-2">30+</div>
                    <div className="text-lg font-bold opacity-90">Years of Local Experience</div>
                  </div>
                </div>
              </div>

              <div className="bg-rainbow-cream rounded-[4rem] p-12 md:p-20 border border-gray-100">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-black text-rainbow-ink mb-8 text-center">The Benefits of Working with a Local <span className="text-rainbow-red">Fort Worth Auto Insurance</span> Agency</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-white p-10 rounded-3xl shadow-xl">
                      <div className="w-12 h-12 bg-rainbow-red/10 rounded-xl flex items-center justify-center text-rainbow-red mb-6">
                        <History className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black text-rainbow-ink mb-4">Deep Community Roots</h3>
                      <p className="text-rainbow-gray font-medium leading-relaxed">
                        Since 1993, Rainbow Insurance has been more than just a business; we're a part of the Fort Worth fabric. We support local schools, charities, and businesses because we believe in the strength of our community.
                      </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-xl">
                      <div className="w-12 h-12 bg-rainbow-gold/10 rounded-xl flex items-center justify-center text-rainbow-gold mb-6">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black text-rainbow-ink mb-4">Lightning Fast Service</h3>
                      <p className="text-rainbow-gray font-medium leading-relaxed">
                        We know your time is valuable. Our team works with incredible speed to find you the best rates and process your paperwork, often getting you covered in less than 15 minutes.
                      </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-xl">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                        <Heart className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black text-rainbow-ink mb-4">Real Human Connection</h3>
                      <p className="text-rainbow-gray font-medium leading-relaxed">
                        When you call us, you talk to a real person in Fort Worth. We take the time to listen to your needs and explain your options in plain English (or Spanish), ensuring you feel confident in your choice.
                      </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-xl">
                      <div className="w-12 h-12 bg-rainbow-pink/10 rounded-xl flex items-center justify-center text-rainbow-pink mb-6">
                        <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black text-rainbow-ink mb-4">Claims Advocacy</h3>
                      <p className="text-rainbow-gray font-medium leading-relaxed">
                        If the unthinkable happens, we're your first call. We help you navigate the claims process, working with the carriers to ensure your claim is handled fairly and efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1533558701576-23c65e926363?w=800&h=1000&fit=crop" 
                    alt="Driving in Fort Worth" 
                    className="rounded-[3rem] shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-black text-rainbow-ink mb-8">What Sets Rainbow Insurance Apart for <span className="text-rainbow-red">Fort Worth Auto Insurance</span></h2>
                  <div className="space-y-6 text-lg text-rainbow-gray font-medium leading-relaxed">
                    <p>
                      In a world of automated call centers and generic algorithms, Rainbow Insurance Agency stands out by providing a "Best Service" standard that is increasingly rare. We don't just sell policies; we build relationships. Our goal is to be your lifelong partner for all your insurance needs.
                    </p>
                    <p>
                      <strong>Specialized SR-22 Filings:</strong> We are Fort Worth's leading specialists for high-risk drivers. We understand that mistakes happen, and we're here to help you get back on the road legally with instant SR-22 filings and affordable rates.
                    </p>
                    <p>
                      <strong>Bilingual Service:</strong> Our team is proud to serve our diverse community in both English and Spanish. We believe that clear communication is essential for understanding your protection.
                    </p>
                    <p>
                      <strong>Continuous Rate Monitoring:</strong> We don't just set it and forget it. At every renewal, we can re-shop your policy across our 56 carriers to ensure you're still getting the best possible rate in the current market.
                    </p>
                    <div className="pt-8">
                      <button 
                        onClick={() => navigateTo('fort-worth-car-insurance')}
                        className="bg-rainbow-ink text-white px-8 py-4 rounded-xl font-black hover:bg-black transition-all flex items-center gap-3"
                      >
                        Explore Car Insurance Options <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-rainbow-ink rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-rainbow-red/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
                <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to Experience the <span className="text-rainbow-gold">Rainbow Difference?</span></h2>
                <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto font-medium relative z-10">
                  Join the thousands of Fort Worth families who have trusted Susan and her expert team since 1993. We'll find you the best rates and provide the best service in Tarrant County.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                  <button 
                    onClick={openQuoteForm}
                    className="bg-rainbow-red hover:bg-red-800 text-white px-12 py-6 rounded-xl font-black text-2xl transition-all shadow-xl hover:scale-105"
                  >
                    Get My Free Quote
                  </button>
                  <a 
                    href="tel:817-922-8031"
                    className="bg-white text-rainbow-ink hover:bg-gray-100 px-12 py-6 rounded-xl font-black text-2xl transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Phone className="w-8 h-8 text-rainbow-red" />
                    817-922-8031
                  </a>
                </div>
              </div>
            </div>
          </ExpandableText>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-rainbow-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-rainbow-ink mb-6">Insurance for <span className="text-rainbow-red">Everything</span></h2>
              <p className="text-xl text-rainbow-gray font-medium">From your first car to your growing business, we have the coverage you need at a price you'll love.</p>
            </div>
            <button 
              onClick={() => navigateTo('sitemap')}
              className="text-rainbow-red font-black text-xl flex items-center gap-2 hover:gap-4 transition-all"
            >
              View All Products <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Auto Insurance", path: "fort-worth-car-insurance", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop", desc: "The lowest rates for every driver, including SR-22 filings." },
              { title: "Home Insurance", path: "fort-worth-home-insurance", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop", desc: "Protect your home from Texas storms and unexpected events." },
              { title: "Business Insurance", path: "fort-worth-business-insurance", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", desc: "Keep your business moving with comprehensive commercial coverage." },
              { title: "Motorcycle Insurance", path: "fort-worth-motorcycle-insurance", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&h=600&fit=crop", desc: "Adventure with confidence. We cover all your recreational toys." },
              { title: "Commercial Auto Insurance", path: "fort-worth-commercial-auto-insurance", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop", desc: "Protect your business vehicles and drivers with specialized coverage." },
              { title: "Surety Bonds", path: "surety-bonds", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop", desc: "Fast, reliable bonds for businesses and individuals." }
            ].map((product, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group cursor-pointer"
                onClick={() => navigateTo(product.path)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-rainbow-ink mb-3">{product.title}</h3>
                  <p className="text-rainbow-gray font-medium mb-6">{product.desc}</p>
                  <div className="flex items-center gap-2 text-rainbow-red font-black">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-rainbow-ink mb-6">Frequently Asked Questions About <span className="text-rainbow-red">Fort Worth Auto Insurance</span></h2>
            <p className="text-xl text-rainbow-gray font-medium">Everything you need to know about getting insured in the Panther City.</p>
          </div>
          <div className="space-y-6">
            {[
              { 
                q: "How much can I save on my Fort Worth Auto Insurance by switching to Rainbow?", 
                a: "Our clients save an average of $642 per year when they switch their Fort Worth Auto Insurance to us. Because we are an independent agency shopping 56 different carriers, we can find discounts and rates that single-company agents simply cannot access. We leave no stone unturned to find you the absolute lowest premium." 
              },
              { 
                q: "What is an SR-22 and do I need one in Fort Worth?", 
                a: "An SR-22 is a certificate of financial responsibility required by the Texas DPS for drivers who have had their license suspended due to DUIs, multiple tickets, or driving without insurance. We are Fort Worth's SR-22 specialists and can file your certificate electronically and instantly, often getting you back on the road the same day." 
              },
              { 
                q: "What are the minimum requirements for Fort Worth Auto Insurance?", 
                a: "In Texas, the legal minimum liability requirements are 30/60/25. This means $30,000 for bodily injury per person, $60,000 for bodily injury per accident, and $25,000 for property damage. However, given the high cost of vehicles and medical care in Fort Worth, we strongly recommend higher limits to protect your personal assets." 
              },
              { 
                q: "Can I get Fort Worth Auto Insurance with a bad driving record?", 
                a: "Absolutely! At Rainbow Insurance, we believe everyone deserves a second chance. We specialize in finding affordable Fort Worth Auto Insurance for drivers with tickets, accidents, or even major violations. We have specific carriers that cater to high-risk drivers, ensuring you get the protection you need at a price you can afford." 
              },
              { 
                q: "How fast can I get a Fort Worth Auto Insurance quote?", 
                a: "We pride ourselves on our speed. Most of our clients can get a comprehensive Fort Worth Auto Insurance quote in less than 10 minutes. You can call us at 817-922-8031 or visit our office at 2209 8th Ave for immediate service. We are your fast-track to savings and protection." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-xl font-black text-rainbow-ink mb-4 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-rainbow-red flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-rainbow-gray font-medium leading-relaxed pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-rainbow-cream border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-rainbow-gray">
            <button onClick={() => navigateTo('fort-worth-car-insurance')} className="hover:text-rainbow-red transition-colors">Car Insurance Fort Worth</button>
            <button onClick={() => navigateTo('fort-worth-home-insurance')} className="hover:text-rainbow-red transition-colors">Home Insurance Fort Worth</button>
            <button onClick={() => navigateTo('fort-worth-business-insurance')} className="hover:text-rainbow-red transition-colors">Business Insurance Fort Worth</button>
            <button onClick={() => navigateTo('fort-worth-mexico-insurance')} className="hover:text-rainbow-red transition-colors">Mexico Insurance Fort Worth</button>
            <button onClick={() => navigateTo('fort-worth-notary-services')} className="hover:text-rainbow-red transition-colors">Notary Services Fort Worth</button>
            <button onClick={() => navigateTo('fort-worth-commercial-auto-insurance')} className="hover:text-rainbow-red transition-colors">Commercial Auto Fort Worth</button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-rainbow-red rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tight relative z-10">
              Ready to Start <br />
              <span className="text-rainbow-gold">Saving Money?</span>
            </h2>
            <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-3xl mx-auto font-medium relative z-10">
              Believe in us for your <strong>Fort Worth Auto Insurance</strong> needs. We'll find you the best rates and provide the best service in Tarrant County.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <button 
                onClick={openQuoteForm}
                className="bg-white text-rainbow-red hover:bg-gray-100 px-12 py-6 rounded-xl font-black text-2xl transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3"
              >
                Get Free Quote
                <ArrowRight className="w-8 h-8" />
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-rainbow-gold hover:bg-yellow-600 text-white px-12 py-6 rounded-xl font-black text-2xl transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3 border-2 border-white/20"
              >
                <Phone className="w-8 h-8" />
                817-922-8031
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
