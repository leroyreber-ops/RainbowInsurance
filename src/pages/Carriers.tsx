import { Shield, CheckCircle2, Star, Award, ExternalLink, Search, ArrowRight, Heart, Clock, Zap, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function Carriers({ navigateTo, openQuoteForm }: PageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const carriers = [
    { name: "ACCC Insurance Company", rating: "A-", specialty: "Non-Standard Auto", path: "accc-insurance" },
    { name: "Aegis Security Insurance Company", rating: "A-", specialty: "Mobile Home, Cycle", path: "aegis-security-insurance" },
    { name: "Affirmative Insurance Company", rating: "B", specialty: "Auto Insurance", path: "affirmative-insurance" },
    { name: "Agricultural Workers Mutual Auto Insurance Company", rating: "A", specialty: "Agri Auto", path: "agricultural-workers-mutual-auto-insurance" },
    { name: "Alinsco Insurance Company", rating: "A", specialty: "Non-Standard Auto", path: "alinsco-insurance" },
    { name: "American Access Casualty Company", rating: "B", specialty: "Auto Insurance", path: "american-access-casualty-insurance" },
    { name: "American Casualty Company of Reading, Pennsylvania", rating: "A", specialty: "Commercial", path: "american-casualty-insurance" },
    { name: "American Mercury Insurance Company", rating: "A", specialty: "Auto, Home", path: "american-mercury-insurance" },
    { name: "American Modern Lloyd's Insurance Company", rating: "A+", specialty: "Specialty Property", path: "american-modern-lloyds-insurance" },
    { name: "American Modern Property and Casualty Insurance Company", rating: "A+", specialty: "Specialty Property", path: "american-modern-property-and-casualty-insurance" },
    { name: "American Risk Insurance Company, Inc.", rating: "A", specialty: "Home Insurance", path: "american-risk-insurance" },
    { name: "AssuranceAmerica Insurance Company", rating: "A", specialty: "Non-Standard Auto", path: "assuranceamerica-insurance" },
    { name: "Aventus Insurance Company", rating: "A", specialty: "Specialty Insurance", path: "aventus-insurance" },
    { name: "Berkshire Hathaway Homestate Insurance Company", rating: "A++", specialty: "Commercial", path: "berkshire-hathaway-insurance" },
    { name: "Consumers County Mutual Insurance Company", rating: "A", specialty: "Auto Insurance", path: "consumers-county-mutual-insurance" },
    { name: "Continental Casualty Company", rating: "A", specialty: "Commercial", path: "continental-casualty-insurance" },
    { name: "Continental Insurance Company, The", rating: "A", specialty: "Commercial", path: "the-continental-insurance" },
    { name: "Contractors Bonding and Insurance Company", rating: "A", specialty: "Surety Bonds", path: "contractors-bonding-and-insurance" },
    { name: "Falcon Insurance Company", rating: "A", specialty: "Non-Standard Auto", path: "falcon-insurance" },
    { name: "Foremost County Mutual Insurance Company", rating: "A", specialty: "Auto Insurance", path: "foremost-county-mutual-insurance" },
    { name: "Foremost Insurance Company Grand Rapids, Michigan", rating: "A", specialty: "Specialty Property", path: "foremost-insurance" },
    { name: "Foremost Lloyds of Texas", rating: "A", specialty: "Home Insurance", path: "foremost-lloyds-of-texas" },
    { name: "Gateway Insurance Company", rating: "B", specialty: "Commercial Auto", path: "gateway-insurance" },
    { name: "GEICO County Mutual Insurance Company", rating: "A++", specialty: "Auto Insurance", path: "geico-county-mutual-insurance" },
    { name: "General Automobile Insurance Company, Inc., The", rating: "A", specialty: "Auto Insurance", path: "the-general-insurance" },
    { name: "Home State County Mutual Insurance Company", rating: "A", specialty: "Non-Standard Auto", path: "home-state-county-mutual-insurance" },
    { name: "Homebound Insurance Exchange", rating: "A", specialty: "Home Insurance", path: "homebound-insurance" },
    { name: "Homeowners of America Insurance Company", rating: "A", specialty: "Home Insurance", path: "homeowners-of-america-insurance" },
    { name: "Homesite Insurance Company", rating: "A", specialty: "Home Insurance", path: "homesite-insurance" },
    { name: "Incline Casualty Company", rating: "A", specialty: "Specialty Insurance", path: "incline-casualty-insurance" },
    { name: "Infinity County Mutual Insurance Company", rating: "A", specialty: "Commercial Auto", path: "infinity-county-mutual-insurance" },
    { name: "Integon Indemnity Corporation", rating: "A", specialty: "Auto Insurance", path: "integon-indemnity-insurance" },
    { name: "Integon National Insurance Company", rating: "A", specialty: "Auto Insurance", path: "integon-national-insurance" },
    { name: "Lemonade Insurance Company", rating: "A", specialty: "Renters, Pet", path: "lemonade-insurance" },
    { name: "Markel American Insurance Company", rating: "A", specialty: "Specialty Insurance", path: "markel-american-insurance" },
    { name: "Mercury County Mutual Insurance Company", rating: "A", specialty: "Auto Insurance", path: "mercury-county-mutual-insurance" },
    { name: "Mercury Insurance Company of Texas", rating: "A", specialty: "Auto, Home", path: "mercury-insurance" },
    { name: "MGA Insurance Company, Inc.", rating: "A", specialty: "Non-Standard Auto", path: "mga-insurance" },
    { name: "MIC General Insurance Corporation", rating: "A", specialty: "Auto Insurance", path: "mic-general-insurance" },
    { name: "MS Transverse Insurance Company", rating: "A", specialty: "Specialty Insurance", path: "ms-transverse-insurance" },
    { name: "National Summit Insurance Company", rating: "A", specialty: "Home Insurance", path: "national-summit-insurance" },
    { name: "Obsidian Insurance Company", rating: "A", specialty: "Specialty Insurance", path: "obsidian-insurance" },
    { name: "Old American County Mutual Fire Insurance Company", rating: "A", specialty: "Texas Specialty", path: "old-american-insurance" },
    { name: "Palomar Specialty Insurance Company", rating: "A", specialty: "Catastrophe Insurance", path: "palomar-specialty-insurance" },
    { name: "Porch Insurance Reciprocal Exchange", rating: "A", specialty: "Home Insurance", path: "porch-insurance" },
    { name: "Progressive Casualty Insurance Company", rating: "A+", specialty: "Auto, Home", path: "progressive-insurance" },
    { name: "Redpoint County Mutual Insurance Company", rating: "A", specialty: "Non-Standard Auto", path: "redpoint-county-mutual-insurance" },
    { name: "Redwood Fire and Casualty Insurance Company", rating: "A", specialty: "Commercial", path: "redwood-fire-and-casualty-insurance" },
    { name: "RLI Insurance Company", rating: "A+", specialty: "Umbrella", path: "rli-insurance" },
    { name: "Safeway Insurance Company", rating: "A-", specialty: "Non-Standard Auto", path: "safeway-insurance" },
    { name: "Southern Vanguard Insurance Company", rating: "A", specialty: "Home Insurance", path: "southern-vanguard-insurance" },
    { name: "Spinnaker Insurance Company", rating: "A-", specialty: "Home, Business", path: "spinnaker-insurance" },
    { name: "Sutton National Insurance Company", rating: "A", specialty: "Specialty Insurance", path: "sutton-national-insurance" },
    { name: "Trisura Insurance Company", rating: "A", specialty: "Commercial", path: "trisura-insurance" },
    { name: "United Security Insurance Company", rating: "A", specialty: "Auto Insurance", path: "united-security-insurance" },
    { name: "Western Surety Company", rating: "A", specialty: "Surety Bonds", path: "western-surety-insurance" }
  ];

  const filteredCarriers = carriers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const carriersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": carriers.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      "description": `A rated insurance carrier specializing in ${c.specialty}.`
    }))
  };

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Our Insurance Carriers | 56 A+ Rated Partners"
        description="We represent 56 top-rated insurance carriers including Progressive, GEICO, and Mercury. We shop them all to find you the best policy in Fort Worth."
        schema={carriersSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop" 
            alt="Insurance Partners" 
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
              Fort Worth's Top <span className="text-rainbow-red">Insurance Carriers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed drop-shadow-lg font-medium text-gray-200">
              Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates in Fort Worth. We believe in you, and we're here to protect what matters most.
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

      {/* Search & Stats - Sticky Bar */}
      <section className="py-12 bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="relative w-full md:w-[500px] group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-rainbow-pink transition-colors" />
            <input 
              type="text" 
              placeholder="Search carriers or specialties..." 
              className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 border-gray-100 focus:border-rainbow-pink focus:ring-4 focus:ring-rainbow-pink/10 outline-none shadow-sm text-xl font-medium transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-12">
            <div className="text-center">
              <div className="text-4xl font-black text-rainbow-pink">56</div>
              <div className="text-sm uppercase tracking-[0.2em] text-gray-400 font-black">Total Carriers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-rainbow-gold">A+</div>
              <div className="text-sm uppercase tracking-[0.2em] text-gray-400 font-black">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrier Grid - Modern Cards */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCarriers.map((carrier, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 9) * 0.05 }}
                className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl hover:shadow-3xl hover:border-rainbow-gold transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className="w-16 h-16 bg-rainbow-pink/5 rounded-2xl flex items-center justify-center group-hover:bg-rainbow-pink transition-all shadow-lg">
                    <Shield className="w-8 h-8 text-rainbow-pink group-hover:text-white transition-colors" />
                  </div>
                  <div className="bg-rainbow-gold/10 text-rainbow-gold px-4 py-2 rounded-full text-sm font-black shadow-sm border border-rainbow-gold/20">
                    {carrier.rating} Rated
                  </div>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4 relative z-10">{carrier.name}</h3>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed relative z-10 font-medium">
                  Specializing in: <br />
                  <span className="font-black text-gray-900 text-2xl">{carrier.specialty}</span>
                </p>
                <div className="flex flex-col gap-4 relative z-10">
                  {carrier.path && (
                    <button 
                      onClick={() => navigateTo(carrier.path!)}
                      className="w-full bg-rainbow-gold text-white py-5 rounded-2xl font-black text-xl hover:bg-rainbow-amber transition-all flex items-center justify-center gap-3 shadow-xl group/btn"
                    >
                      View Details
                      <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                  <button 
                    onClick={openQuoteForm}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-rainbow-pink transition-all flex items-center justify-center gap-3 shadow-xl group/btn"
                  >
                    Get Quote 
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCarriers.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[4rem] shadow-2xl border border-gray-100">
              <div className="text-9xl mb-10 animate-bounce">🔍</div>
              <h3 className="text-4xl font-black text-gray-900 mb-4">No carriers found</h3>
              <p className="text-2xl text-gray-600 font-medium">Try searching for a different name or insurance type.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why We Represent These Carriers - Massive Content Block */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-12 text-gray-900 leading-tight">
                Quality <span className="text-rainbow-pink">Partnerships</span>
              </h2>
              <div className="space-y-8 text-2xl text-gray-600 leading-relaxed font-medium">
                <p>
                  At Rainbow Insurance Agency, we believe that the quality of your insurance is only as good as the company standing behind it. That's why we are incredibly selective about the carriers we choose to represent. We have carefully vetted our 56 partners to ensure they meet our high standards for financial stability, claims handling, and customer service. We don't just partner with anyone; we partner with the best.
                </p>
                <p>
                  We prioritize carriers with "A" ratings or better from A.M. Best, the industry standard for financial strength. This gives our clients the peace of mind that comes with knowing their insurance company has the resources to pay claims, even after a catastrophic event like a major North Texas hailstorm or a widespread weather emergency. We don't just look for the cheapest rates; we look for the best value—a combination of competitive pricing and rock-solid reliability. In Fort Worth, where weather can be unpredictable, having a strong carrier is non-negotiable.
                </p>
                <p>
                  Our relationships with these carriers are built on decades of trust and mutual respect. Susan and her expert team have direct lines to underwriters and claims adjusters at many of these companies. This means that if a complex situation arises, we have the leverage to advocate for our clients and ensure they are treated fairly. We aren't just a number to these companies; we are a valued partner, and that translates into better service for you. When you have a claim, we're not just handing you a 1-800 number; we're actively working with our carrier partners to ensure a smooth resolution.
                </p>
                <p>
                  Furthermore, our carrier list is constantly evolving. We stay on top of industry trends and financial reports to ensure our partners remain the best choice for our clients. If a company's service levels drop or their financial stability is questioned, we take proactive steps to protect our clients. This ongoing vigilance is part of the "Rainbow Difference" that has kept us in business for over 30 years.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 shadow-xl">
                <h3 className="text-3xl font-black mb-6 text-gray-900">A Diverse Portfolio for Every Need</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
                  One of the primary benefits of representing 56 carriers is the incredible diversity of products we can offer. We have partners that specialize in every imaginable niche of the insurance market. Whether you're looking for high-net-worth protection for a luxury estate, specialized coverage for a classic car collection, or affordable liability for a new business venture, we have a carrier that fits.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  We also have strong partnerships with "non-standard" carriers. These companies specialize in providing coverage for drivers who might be turned away by other agencies due to tickets, accidents, or the need for an SR-22 filing. Susan and her expert team are experts at navigating these specialty markets to find reliable protection for clients who need a second chance. No matter your situation, we have a partner that can help.
                </p>
              </div>
              <div className="bg-rainbow-gold/5 p-12 rounded-[3rem] border border-rainbow-gold/20 shadow-xl">
                <h3 className="text-3xl font-black mb-6 text-gray-900">The Claims Experience Matters</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
                  The true test of an insurance company is how they handle a claim. We constantly monitor the claims performance of our carrier partners. We listen to our clients' feedback and keep detailed records of how quickly and fairly each company resolves issues. If we see a pattern of poor service or unfair denials, we won't hesitate to stop recommending that carrier.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  Our goal is to ensure that if you ever have to use your insurance, the process is as smooth and stress-free as possible. We work with carriers that share our commitment to the "Best Service" standard. When you choose a policy through Rainbow Insurance Agency, you're not just getting a piece of paper; you're getting a promise of support from some of the most respected names in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrier Selection Process - Massive Content Block */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-12 rounded-[4rem] shadow-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-rainbow-gold" />
                <h3 className="text-3xl font-black mb-8 text-gray-900">How We Choose Our Partners</h3>
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                  <p>
                    Our carrier selection process is rigorous and ongoing. We don't just sign up with every company that offers us a contract. Instead, we look for partners that align with our values and can provide real benefits to our clients in Fort Worth and the DFW metroplex.
                  </p>
                  <p>
                    First, we analyze their financial health. We look at their surplus, their loss ratios, and their ratings from independent agencies. We want to be certain that they will be there for our clients for the long haul. Next, we evaluate their product offerings. Do they have unique features that provide better protection? Are their rates competitive in the North Texas market?
                  </p>
                  <p>
                    Finally, we look at their technology and support. In today's fast-paced world, our clients need to be able to access their information easily and get answers quickly. We prefer carriers that offer robust online portals, mobile apps, and 24/7 claims reporting. We also value companies that provide excellent support to us as agents, allowing us to serve you more efficiently.
                  </p>
                  <div className="pt-8 border-t border-gray-100">
                    <p className="italic text-rainbow-pink font-bold">
                      "We shop the market so you don't have to. Our carrier list is a curated selection of the best the insurance industry has to offer." — Susan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black mb-12 text-gray-900 leading-tight">
                A Rigorous <br />
                <span className="text-rainbow-gold">Selection</span>
              </h2>
              <div className="space-y-8 text-2xl text-gray-600 leading-relaxed font-medium">
                <p>
                  We are constantly reviewing our carrier list to ensure it remains the best in the business. As new companies enter the market and existing ones change their focus, we adapt. We've recently added several "insurtech" partners like Lemonade, which use advanced data and technology to provide faster quotes and more modern coverage options. These companies are revolutionizing the industry, and we're proud to bring those innovations to our clients in Fort Worth.
                </p>
                <p>
                  We also maintain strong ties with traditional Texas-based carriers like Redpoint and Old American. These companies have a deep understanding of the unique risks and regulations in our state, providing a level of local expertise that is hard to match. They understand the specific challenges of insuring property in the DFW metroplex, from soil-related foundation issues to the frequency of wind and hail damage.
                </p>
                <p>
                  At Rainbow Insurance Agency, we believe that having more choices leads to better outcomes. By representing 56 carriers, we ensure that no matter how unique your needs are, we have the perfect partner to protect what matters most to you. Our commitment to variety is a commitment to your freedom of choice. We don't find you a one-size-fits-all policy; we build a custom solution from the best the market has to offer.
                </p>
                <p>
                  Our selection process also considers the carrier's commitment to the independent agency channel. We prefer partners who value the local expertise and personal service that an agency like ours provides. This shared commitment ensures that you get the best of both worlds: the financial power of a national carrier and the personal touch of a local Fort Worth neighbor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
