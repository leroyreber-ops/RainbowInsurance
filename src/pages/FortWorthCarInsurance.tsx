import { Phone, ShieldCheck, Star, CheckCircle2, Car, Clock, Award, MapPin, Users, Shield, Zap, Heart, TrendingUp, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthCarInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const carInsuranceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Auto Insurance",
    "provider": {
      "@type": "InsuranceAgency",
      "name": "Rainbow Insurance Agency",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2209 8th Ave",
        "addressLocality": "Fort Worth",
        "addressRegion": "TX",
        "postalCode": "76110"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Fort Worth"
    },
    "description": "Cheap car insurance in Fort Worth. We shop 56+ carriers to find you the best rates. Specializing in SR-22 and high-risk drivers."
  };

  const faqs = [
    {
      q: "How much does car insurance cost in Fort Worth?",
      a: "Car insurance rates in Fort Worth vary based on your driving history, age, and vehicle. On average, Fort Worth drivers pay slightly more than the national average due to traffic density and weather risks like hail. However, Rainbow Insurance compares 56+ carriers to find you the absolute lowest rate possible, often saving clients 20-40% off their current premiums."
    },
    {
      q: "What is the minimum car insurance required in Texas?",
      a: "Texas law requires 30/60/25 coverage: $30,000 for bodily injury per person, $60,000 for bodily injury per accident, and $25,000 for property damage. While this is the legal minimum, we strongly recommend higher limits to protect your personal assets from lawsuits in the event of a major accident."
    },
    {
      q: "Can I get SR-22 insurance in Fort Worth today?",
      a: "Yes! Rainbow Insurance specializes in instant SR-22 filings. We can process your paperwork and file it with the Texas DPS immediately, often getting you back on the road the same day your license is eligible for reinstatement."
    },
    {
      q: "Do you offer discounts for TCU students or military?",
      a: "Absolutely. We offer various discounts including good student discounts for TCU, UNTHSC, and local college students, military discounts for our service members at the NAS Joint Reserve Base, and multi-car discounts for families."
    },
    {
      q: "Does my policy cover hail damage in Fort Worth?",
      a: "If you have Comprehensive coverage, yes. Hail damage is extremely common in North Texas, and we always recommend including comprehensive protection on your policy to cover 'acts of God' like the frequent spring hailstorms."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Cheap Car Insurance Fort Worth | SR-22 & Auto Coverage"
        description="Get the best rates on Fort Worth car insurance. Susan and her expert team shop 56+ carriers to save you up to 40%. Instant SR-22 filings available."
        schema={carInsuranceSchema}
      />
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533558701576-23c65e926363?w=1600&h=900&fit=crop" 
            alt="Car driving in Fort Worth" 
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
              <span>Fort Worth's #1 Rated Auto Insurance Agency</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Cheap Car Insurance in <span className="text-rainbow-gold">Fort Worth</span>
            </h1>
            <div className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed drop-shadow-md">
              <ExpandableText maxLines={2} buttonClassName="text-rainbow-gold">
                Get the best Cheap Car Insurance in Fort Worth rates and service in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates and most comprehensive coverage.
              </ExpandableText>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-pink hover:bg-rainbow-rose text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Quote
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
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <Star className="w-8 h-8 text-rainbow-gold fill-rainbow-gold" />
              <span>4.9 Star Rating</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <Award className="w-8 h-8 text-rainbow-gold" />
              <span>A+ Rated Carriers</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <Clock className="w-8 h-8 text-rainbow-gold" />
              <span>Since 1993</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <CheckCircle2 className="w-8 h-8 text-rainbow-gold" />
              <span>Instant Coverage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Intro & Local Context */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Navigating the Roads of <span className="text-rainbow-pink">Fort Worth</span> with Total Confidence
            </h2>
            <div className="text-xl text-gray-600 leading-relaxed">
              <ExpandableText maxLines={3} buttonClassName="text-rainbow-pink mx-auto">
                Fort Worth is a city that prides itself on its unique blend of Western heritage and modern urban living. From the historic Stockyards to the modern skyline of Downtown, and the bustling campuses of TCU and UNT Health Science Center, our roads are the lifeblood of the Panther City. But with our rapid growth comes increased traffic, and with traffic comes risk. Whether you're commuting daily on I-35W, heading out for a weekend at Joe Pool Lake, or navigating the construction on I-30, having the right car insurance isn't just a legal requirement—it's your financial safety net.
              </ExpandableText>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-900">The Best Team Looking Out For You</h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  National insurance companies often treat every driver the same, using broad algorithms that don't account for the unique realities of living in North Texas. At Rainbow Insurance Agency, we've been an integral part of the Fort Worth community since 1993. Our team—<strong>Susan and her expert team</strong>—are the best there is. They took care of us like nobody else could, and they'll do the same for you.
                </p>
                <p>
                  Located at 2209 8th Ave, we are right here in your neighborhood. When you call us, you aren't reaching a call center; you're talking to <strong>Susan and her expert team</strong>—local experts who understand exactly where you're driving. We believe in providing the best service, the best rates, and the best policies because we know you're counting on us for your family's protection.
                </p>
                <div className="bg-gradient-to-r from-pink-50 to-white p-8 rounded-3xl border-l-8 border-rainbow-pink shadow-inner">
                  <p className="text-rainbow-pink font-bold italic text-xl">
                    "Susan and her expert team took care of us like nobody else could. They are truly the best in Fort Worth!"
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517672651691-24622a91b550?w=800&h=1000&fit=crop" 
                alt="Fort Worth traffic and skyline" 
                className="rounded-3xl shadow-2xl border border-gray-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-rainbow-gold p-8 rounded-3xl shadow-2xl text-white max-w-xs">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-lg font-semibold opacity-90">Years of Protecting Fort Worth Drivers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Coverage Types Deep Dive */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-rainbow-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-rainbow-pink rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Understanding Your <span className="text-rainbow-gold">Coverage Options</span></h2>
            <p className="text-xl text-gray-400">Insurance can be confusing, but it doesn't have to be. Here's a detailed breakdown of the essential coverages every Fort Worth driver should consider.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-rainbow-gold/50 transition-all"
            >
              <div className="w-16 h-16 bg-rainbow-gold/20 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck className="w-10 h-10 text-rainbow-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Liability Coverage</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                This is the foundation of any Texas auto policy. It covers bodily injury and property damage to others if you are at fault in an accident. While the state minimum is 30/60/25, we often recommend higher limits to protect your personal assets from lawsuits. In a litigious world, having only the minimum can leave your home and savings at risk.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-gold" /> Bodily Injury per Person</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-gold" /> Bodily Injury per Accident</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-gold" /> Property Damage Protection</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-rainbow-pink/50 transition-all"
            >
              <div className="w-16 h-16 bg-rainbow-pink/20 rounded-2xl flex items-center justify-center mb-8">
                <Car className="w-10 h-10 text-rainbow-pink" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Collision & Comprehensive</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Often called "Full Coverage," these protect your own vehicle. Collision covers damage from accidents with other cars or objects. Comprehensive covers "acts of God" like hail (extremely common in FW!), theft, fire, and vandalism. If you are financing or leasing your vehicle, these coverages are almost always required by your lender.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-pink" /> Hail & Storm Damage</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-pink" /> Theft & Vandalism</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-pink" /> Accident Repair Costs</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-6">UM / UIM Coverage</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Uninsured and Underinsured Motorist coverage is critical in Texas. Statistics show that a significant percentage of Texas drivers are either completely uninsured or carry only the bare minimum. If you're hit by someone who can't pay for your medical bills or car repairs, this policy steps in to ensure you aren't left holding the bill.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Hit & Run Protection</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Medical Bill Coverage</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Underinsured Protection</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: The Independent Advantage */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop" 
                alt="Modern car interior and technology" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">The Power of Choice: Why an <span className="text-rainbow-pink">Independent Agent</span> Wins</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <ExpandableText maxLines={3} buttonClassName="text-rainbow-pink">
                  <p>
                    When you go to a "captive" agent (like State Farm, Farmers, or Allstate), they can only offer you one company's products. If their rates go up, your only choice is to pay more or go through the hassle of finding a completely new agent. 
                  </p>
                  <p>
                    As an independent agency, Rainbow Insurance represents over 56 different insurance carriers. This means we work for YOU, not the insurance company. We shop the entire market to find the best combination of price and coverage. If your current carrier raises their rates at renewal, we can easily switch you to another top-rated company without you having to find a new agent or build a new relationship.
                  </p>
                </ExpandableText>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                  <div className="p-6 bg-amber-50 rounded-2xl border border-rainbow-gold/20">
                    <Zap className="w-8 h-8 text-rainbow-gold mb-4" />
                    <div className="font-bold text-gray-900 text-2xl mb-2">56+ Carriers</div>
                    <p className="text-sm text-gray-600">We compare the biggest names and specialty local insurers to find the absolute best rates in Fort Worth. Our independence is your greatest advantage, allowing us to pivot quickly if a carrier raises their rates at renewal. We are your strategic partners in financial optimization.</p>
                  </div>
                  <div className="p-6 bg-pink-50 rounded-2xl border border-rainbow-pink/20">
                    <Clock className="w-8 h-8 text-rainbow-pink mb-4" />
                    <div className="font-bold text-gray-900 text-2xl mb-2">15 Minutes</div>
                    <p className="text-sm text-gray-600">Our average time to find you a better rate than your current policy. We know your time is valuable, so we work with lightning speed to get you the protection you deserve without the long wait times of national call centers. We are your fast-track to savings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: SR-22 and High Risk */}
      <section className="py-24 bg-rainbow-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Need an <span className="text-gray-900">SR-22</span> in Fort Worth?</h2>
              <p className="text-xl mb-8 leading-relaxed">
                If your license has been suspended due to a DUI, multiple tickets, or driving without insurance, the state of Texas may require you to file an SR-22 certificate. Many big-name insurance companies will drop you or charge astronomical rates for this.
              </p>
              <p className="text-lg mb-10 opacity-90 leading-relaxed">
                At Rainbow Insurance, we specialize in helping "high-risk" drivers get back on the road legally and affordably. We offer instant SR-22 filings and can often find rates that are surprisingly competitive. We don't judge your past; we protect your future. Our team handles the electronic filing with the Texas DPS so you don't have to worry about the red tape.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openQuoteForm}
                  className="bg-gray-900 hover:bg-black text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl"
                >
                  Get Your SR-22 Quote
                </button>
                <a 
                  href="tel:817-922-8031"
                  className="bg-white text-rainbow-gold hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl flex items-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[40px] shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">SR-22 Filing Process</h3>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Contact Us", desc: "Call 817-922-8031 or visit our office at 2209 8th Ave." },
                  { step: "02", title: "Get a Quote", desc: "We find the most affordable high-risk policy that includes the SR-22 filing." },
                  { step: "03", title: "Instant Filing", desc: "We electronically submit your certificate to the Texas DPS immediately." },
                  { step: "04", title: "Drive Legally", desc: "Once the DPS processes the filing, your license is reinstated and you're good to go!" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-rainbow-gold/20">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Detailed Local Factors & Discounts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Maximizing Your <span className="text-rainbow-pink">Savings</span></h2>
            <p className="text-xl text-gray-600">We leave no stone unturned when it comes to finding you discounts. Here are the most effective ways our Fort Worth clients save on their premiums.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Shield, 
                title: "Multi-Policy", 
                desc: "The single biggest way to save. Bundle your auto with home, renters, or condo insurance for up to 25% off both policies." 
              },
              { 
                icon: Star, 
                title: "Safe Driver", 
                desc: "Maintaining a clean record pays off. If you haven't had an accident or ticket in 3 years, you qualify for our best rates." 
              },
              { 
                icon: Award, 
                title: "Good Student", 
                desc: "We reward hard work. TCU, UTA, and high school students with a 3.0 GPA or higher can save significantly on their coverage." 
              },
              { 
                icon: TrendingUp, 
                title: "Telematics", 
                desc: "Many of our carriers offer 'pay-how-you-drive' programs. Safe drivers can see immediate discounts of 10-30%." 
              }
            ].map((discount, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-[32px] shadow-xl hover:shadow-2xl transition-all group text-center">
                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-rainbow-pink transition-colors">
                  <discount.icon className="w-8 h-8 text-rainbow-pink group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{discount.title}</h3>
                <p className="text-gray-600 leading-relaxed">{discount.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Commercial Auto */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">Protecting Your <span className="text-rainbow-gold">Business on the Move</span></h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Do you use your vehicle for work? Whether you're a contractor with a fleet of trucks, a delivery driver, or a real estate agent driving clients around Fort Worth, a personal auto policy may not cover you in the event of an accident while working.
                </p>
                <p>
                  Rainbow Insurance offers comprehensive commercial auto insurance for Fort Worth businesses of all sizes. We can cover everything from single delivery vans to large fleets, ensuring your business assets are protected from liability and physical damage. We also provide certificates of insurance (COI) quickly so you can get on the job site without delay.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-gold" /> General Contractors</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-gold" /> Delivery Services</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-gold" /> Landscapers</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-rainbow-gold" /> HVAC & Plumbers</li>
                </ul>
                <button 
                  onClick={() => navigateTo('fort-worth-business-insurance')}
                  className="mt-10 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center gap-3"
                >
                  Explore Business Insurance <rt className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop" 
                alt="Commercial work truck in Fort Worth" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-rainbow-gold rounded-full flex items-center justify-center text-white font-bold text-center p-4 shadow-xl">
                Business Experts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Massive Content Block for Word Count */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Ultimate Guide to Auto Insurance in Fort Worth</h2>
            <div className="w-20 h-1 bg-rainbow-gold mx-auto" />
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Reality of Driving in the Panther City</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                  <p>
                    Driving in Fort Worth is a unique experience that blends the high-speed intensity of the DFW metroplex with the sprawling, often unpredictable terrain of North Texas. As one of the fastest-growing cities in the United States, Fort Worth presents a set of challenges that every driver must navigate daily. From the historic brick streets of the Stockyards to the multi-level interchanges of the "Mixmaster," our roads are as diverse as our population.
                  </p>
                  <p>
                    The rapid growth of Tarrant County has led to a significant increase in traffic density. Commutes that once took twenty minutes now often take forty-five. This congestion isn't just a nuisance; it's a major factor in insurance rates. More cars on the road statistically lead to more frequent "fender benders" and, unfortunately, more serious collisions. Whether you're navigating the constant construction on I-35W or taking a scenic drive through the Trinity River trails area, the risks are real and ever-present.
                  </p>
                  <p>
                    At Rainbow Insurance Agency, we believe that car insurance shouldn't just be a bill you pay every month—it should be a tailored strategy to protect your financial future. A single accident without proper coverage can lead to years of financial hardship. Between medical bills, vehicle repair costs, and potential legal fees, the costs add up fast. That's why we take the time to sit down with our clients (or talk over the phone) to explain exactly what they are buying. Susan and her expert team have seen how the right policy can save a family from ruin, and they are dedicated to ensuring you have that same level of protection.
                  </p>
                  <p>
                    Furthermore, the geographic spread of Fort Worth means that many residents are putting significant mileage on their vehicles. Whether you're driving from the far north Alliance area down to the medical district, or commuting from Westover Hills to a job in Dallas, those miles add up. High mileage increases your exposure to risk, and it's something we consider when shopping your policy across our 56+ carriers. We look for companies that offer competitive rates for high-mileage commuters while still providing top-tier claims service.
                  </p>
                  <p>
                    We also recognize the specific hazards of our local environment. The "Panther City" isn't just a nickname; it represents a community that is rugged and resilient. However, even the most resilient driver can't predict a sudden flash flood on University Drive or a stray piece of debris on I-30. Our goal is to provide you with a policy that acts as a shield, allowing you to focus on your life while we handle the "what ifs."
                  </p>
                </ExpandableText>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Texas Liability Laws: Protecting Your Assets</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                  <p>
                    Texas operates under a "fault" or "at-fault" system when it comes to car accidents. This means that the person who is determined to be legally responsible for causing the accident is also responsible for paying for the resulting damages. To ensure that drivers can meet this responsibility, the state requires a minimum amount of liability insurance.
                  </p>
                  <p>
                    Currently, the state-mandated minimums are 30/60/25. This translates to $30,000 for bodily injury per person, $60,000 for bodily injury per accident, and $25,000 for property damage. While these numbers might have seemed sufficient a decade ago, in today's economy, they are dangerously low. Consider the cost of a modern pickup truck or a luxury SUV—many of these vehicles cost well over $60,000. If you are at fault in an accident that totals one of these vehicles, your $25,000 property damage limit will be exhausted instantly, leaving you personally liable for the remaining $35,000 or more.
                  </p>
                  <p>
                    The same logic applies to medical costs. A single night in a Fort Worth hospital can easily exceed $30,000. If multiple people are injured in an accident you cause, that $60,000 limit will disappear before they even leave the emergency room. At Rainbow Insurance, we often suggest our clients look at 50/100/50 or even 100/300/100 limits. While it sounds like a lot more coverage, the difference in monthly premium is often less than the cost of a single lunch out.
                  </p>
                  <p>
                    Protecting your future wages and your home from a judgment is worth the small extra investment. In Texas, your primary residence is generally protected from creditors, but your savings, secondary properties, and future earnings are not. A significant judgment against you can lead to wage garnishment or the seizure of non-exempt assets. Our agents are experts at finding the "sweet spot" where you have excellent protection without overpaying. We analyze your net worth and your risk tolerance to recommend limits that make sense for your specific situation.
                  </p>
                  <p>
                    We also educate our clients on the importance of Personal Injury Protection (PIP) and Medical Payments coverage. While liability covers the other person, these coverages protect you and your passengers, regardless of who was at fault. In a state where medical costs are rising faster than inflation, having an extra $2,500 or $5,000 in PIP can be a lifesaver for covering deductibles and lost wages after an accident.
                  </p>
                </ExpandableText>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The "Hail Alley" Factor: Weathering the Storm</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                  <p>
                    Fort Worth residents know that when the sky turns that specific shade of green in the spring, it's time to get the cars under cover. North Texas is part of a region often referred to as "Hail Alley," where severe thunderstorms frequently produce large, damaging hail. These storms can appear with very little warning, leaving drivers caught in the open.
                  </p>
                  <p>
                    Hail damage is one of the most frequent claims we handle at Rainbow Insurance. A single storm can cause thousands of dollars in damage to a vehicle's body, glass, and lights. Without Comprehensive coverage, you are 100% responsible for those repair costs. Comprehensive insurance is often called "other than collision" coverage because it handles risks that are outside of your control—hail, wind, fire, theft, and animal strikes.
                  </p>
                  <p>
                    We work with carriers that have excellent reputations for handling weather-related claims quickly. When a major hailstorm hits Fort Worth, the local body shops fill up fast. Having an insurance company that responds immediately and has a streamlined appraisal process is critical. Susan and her expert team have helped thousands of clients through these "catastrophe" events, ensuring they get their vehicles repaired by quality local shops and back on the road as soon as possible.
                  </p>
                  <p>
                    We also discuss the importance of "Gap Insurance" with our clients who have newer vehicles. If you bought a car recently and it's totaled in a storm or accident, the insurance company will only pay you the "Actual Cash Value" of the car at the time of the loss. Because cars depreciate so quickly, you might actually owe the bank more than the car is worth. Gap insurance covers that "gap," ensuring you aren't left paying for a car you can no longer drive.
                  </p>
                  <p>
                    Additionally, we look at glass coverage. Many modern cars have advanced safety systems (like lane departure warnings) built into the windshield. Replacing one of these windshields can cost $1,000 or more because of the necessary recalibration. We help you find policies that offer $0 deductible glass repair or replacement, saving you from a significant out-of-pocket expense for a simple rock chip or hail crack.
                  </p>
                </ExpandableText>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insuring the Next Generation: Teen Drivers in Fort Worth</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                  <p>
                    Adding a teen driver to your policy is a major milestone, but it can also be a major shock to your budget. Statistically, young drivers are at a much higher risk for accidents due to inexperience and distractions. Insurance companies reflect this risk in their premiums. However, at Rainbow Insurance, we specialize in finding ways to make teen driver insurance more affordable for Fort Worth families.
                  </p>
                  <p>
                    We look for every possible discount. The "Good Student" discount is one of the most effective—students at Fort Worth ISD, Keller ISD, or private schools like All Saints' or Country Day who maintain a B average or higher can see significant savings. We also encourage our young clients to take defensive driving courses, which not only makes them safer on the road but also provides a multi-year discount on their premiums.
                  </p>
                  <p>
                    Susan and her expert team are mothers and grandmothers themselves; they understand the worry that comes with a new driver. They take the time to talk to the teens about the responsibility of driving and the impact of their choices on their insurance rates. We believe in being a resource for the whole family, providing the best service and the best advice to keep your young drivers safe and your premiums manageable.
                  </p>
                  <p>
                    We also discuss vehicle selection. Putting a teen in a high-performance sports car or a massive SUV can drastically increase insurance costs. We help parents understand which vehicles are the most "insurance-friendly" for new drivers—typically mid-sized sedans or small SUVs with high safety ratings. By choosing the right car, you can save hundreds of dollars a year in premiums.
                  </p>
                  <p>
                    Finally, we talk about the importance of "Telematics" or usage-based insurance for teens. Many of our carriers offer apps that track driving behavior (speed, braking, time of day). Safe driving habits can lead to immediate and substantial discounts. It's a great way to provide an incentive for your teen to drive responsibly while lowering your overall household insurance costs.
                  </p>
                </ExpandableText>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When the Unthinkable Happens: The Claims Process</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                  <p>
                    The true test of an insurance policy isn't when you buy it; it's when you have to use it. At Rainbow Insurance Agency, we pride ourselves on being your advocate during the claims process. If you're involved in an accident in Fort Worth, your first call should be to us. Susan and her expert team are here to guide you through every step, from the initial report to the final repair.
                  </p>
                  <p>
                    We help you understand what information you need to gather at the scene—photos, witness contact info, and the police report number. We then help you navigate the interaction with the insurance company's adjusters. Sometimes, adjusters may try to settle a claim quickly for less than what is fair. Because we are an independent agency, we have the leverage to ensure our clients are treated fairly and that their claims are handled with the urgency they deserve.
                  </p>
                  <p>
                    We also have deep connections with local Fort Worth businesses. We can recommend reputable body shops, glass repair specialists, and rental car agencies that we know provide excellent service to our clients. We believe that "Best Service" means being there for you when you need us most. They took care of us like nobody else could, and that's the standard we strive for every single day.
                  </p>
                  <p>
                    We also help you understand the long-term impact of a claim on your rates. Not every incident should be filed as a claim. If the damage is only slightly above your deductible, it might be more cost-effective in the long run to pay for the repair out of pocket to avoid a rate increase. We provide honest, expert advice on when to file and when to hold off, always keeping your best financial interests in mind.
                  </p>
                  <p>
                    Our commitment to you doesn't end when the claim is closed. We follow up to ensure you are satisfied with the repairs and that your vehicle is back to its pre-accident condition. We believe in building lifelong relationships with our Fort Worth neighbors, and that starts with exceptional service during the most stressful times.
                  </p>
                </ExpandableText>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of Auto Insurance: Technology and Trends</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                  <p>
                    The world of auto insurance is changing rapidly, driven by advances in vehicle technology and data analytics. From electric vehicles (EVs) to advanced driver-assistance systems (ADAS), the cars we drive in Fort Worth are more complex than ever. This complexity affects both the frequency of accidents and the cost of repairs.
                  </p>
                  <p>
                    Electric vehicles, for example, often have higher repair costs due to their specialized batteries and components. However, they also offer unique opportunities for savings through "green vehicle" discounts. Similarly, cars equipped with automatic emergency braking and lane-keep assist are less likely to be involved in certain types of collisions, which can lead to lower premiums. At Rainbow Insurance, we stay on the cutting edge of these trends to ensure our clients are getting the full benefit of their vehicle's safety features.
                  </p>
                  <p>
                    We also embrace the digital revolution in insurance service. Our clients can manage their policies, access ID cards, and even start the quote process through our modern digital tools. But we never lose the human touch. While technology makes things faster, it's the expertise of Susan and her expert team that ensures you have the *right* coverage. We combine the best of modern technology with the best of old-fashioned personal service.
                  </p>
                  <p>
                    We also monitor the legislative landscape in Austin. Changes in Texas insurance laws can have a direct impact on your rates and your rights as a policyholder. Whether it's a change in minimum liability requirements or new regulations on how insurance companies use credit scores, we are your eyes and ears. We advocate for fair and transparent insurance practices that benefit the hard-working people of Fort Worth.
                  </p>
                  <p>
                    As we look to the future, we see a world where insurance becomes even more personalized. "Usage-based" insurance is just the beginning. We envision a future where your policy adapts to your life in real-time, providing protection exactly when and where you need it. Rainbow Insurance Agency will be there, leading the way and ensuring that Fort Worth drivers always have access to the best rates and the best service in an ever-changing world.
                  </p>
                </ExpandableText>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Why Choose Rainbow - Massive Content Block */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-black mb-6 text-gray-900">The Rainbow Difference</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                  <p>
                    What sets Rainbow Insurance Agency apart from the hundreds of other options in Fort Worth? It's our unwavering commitment to the "Best Service" standard. Since Susan founded this agency in 1993, we've operated on the principle that insurance is about people, not just policies. We don't just sell you a piece of paper; we provide a promise of protection and a partnership for your financial well-being.
                  </p>
                  <p>
                    Susan and her expert team are more than just agents; they are your local advocates. We live in the same neighborhoods, shop at the same stores, and drive the same roads as you. This local connection gives us a unique perspective on the risks you face every day. We know which intersections are the most dangerous, which neighborhoods are most prone to hail damage, and which local body shops provide the best repairs.
                  </p>
                  <p>
                    When you choose Rainbow Insurance, you're choosing an agency that has been a pillar of the Fort Worth community for over three decades. We've weathered the storms—literally and figuratively—alongside our clients. We've seen families grow, businesses thrive, and the city evolve. Through it all, our mission has remained the same: to provide the best protection at the best price with the best service. That's the Rainbow Difference.
                  </p>
                </ExpandableText>
              </div>
            </div>

      {/* Our Commitment to Fort Worth - Massive Content Block */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-12 rounded-[4rem] shadow-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-rainbow-gold" />
                <h3 className="text-3xl font-black mb-8 text-gray-900">Deep Roots in Tarrant County</h3>
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                  <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                    <p>
                      Fort Worth isn't just where we do business; it's our home. We are proud to be a part of the vibrant culture and rich history of the Panther City. From supporting local schools and charities to participating in community events, we are dedicated to giving back to the city that has supported us for over three decades.
                    </p>
                    <p>
                      Our office at 2209 8th Ave is a local landmark for protection. We've been at this location for years, serving as a reliable resource for our neighbors. We love it when our clients stop by to say hello, ask a question, or just share a story. This personal connection is what makes our work so rewarding. We don't just see you as a policyholder; we see you as a friend and a neighbor.
                    </p>
                    <p>
                      As Fort Worth continues to grow and change, Rainbow Insurance Agency will be there, adapting and evolving to meet the needs of our community. We are committed to providing the same high level of service and expert advice that Susan founded this agency on in 1993. When you choose us, you're choosing a local partner who is invested in the future of Fort Worth.
                    </p>
                    <div className="pt-8 border-t border-gray-100">
                      <p className="italic text-rainbow-pink font-bold">
                        "We are proud to be Fort Worth's trusted choice for insurance. Our roots are deep, and our commitment is unwavering." — Susan
                      </p>
                    </div>
                  </ExpandableText>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black mb-12 text-gray-900 leading-tight">
                Dedicated to <br />
                <span className="text-rainbow-gold">Our Neighbors</span>
              </h2>
              <div className="space-y-8 text-2xl text-gray-600 leading-relaxed font-medium">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-gold">
                  <p>
                    We believe that a strong community is built on trust and mutual support. That's why we go above and beyond to ensure our clients are well-protected and well-informed. We don't just sell insurance; we provide peace of mind. We want you to be able to focus on your life, your family, and your business, knowing that we have the "what ifs" covered.
                  </p>
                  <p>
                    Our commitment to our neighbors extends beyond insurance. We are active participants in the local economy, supporting other small businesses and contributing to the overall prosperity of Tarrant County. We believe that by working together, we can make Fort Worth an even better place to live and work.
                  </p>
                  <p>
                    At Rainbow Insurance Agency, we are honored to be a part of your journey. Whether you're buying your first car, your dream home, or starting a new business, we're here to protect your milestones. Thank you for trusting us with your most valuable assets.
                  </p>
                </ExpandableText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-rainbow-pink text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rainbow-gold/20 rounded-full -ml-48 -mb-48 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Start Saving?</h2>
          <p className="text-2xl mb-16 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join the thousands of Fort Worth families who have trusted Rainbow Insurance Agency for their protection since 1993.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button 
              onClick={openQuoteForm}
              className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-2xl hover:scale-105"
            >
              Get My Free Quote
            </button>
            <a 
              href="tel:817-922-8031"
              className="bg-white text-rainbow-pink hover:bg-gray-100 px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4"
            >
              <Phone className="w-8 h-8" />
              817-922-8031
            </a>
          </div>
          <div className="mt-20 flex flex-col items-center gap-4 text-lg opacity-80">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>2209 8th Ave, Fort Worth, TX 76110</span>
            </div>
            <p>Open Monday - Saturday | Walk-ins Welcome</p>
          </div>
        </div>
      </section>
    </div>
  );
}
