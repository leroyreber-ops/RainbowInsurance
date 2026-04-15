import { 
  Phone, 
  CheckCircle2, 
  Users, 
  History, 
  Heart, 
  MapPin, 
  Award, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Store
} from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function AboutUs({ navigateTo, openQuoteForm }: PageProps) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "InsuranceAgency",
      "name": "Rainbow Insurance Agency",
      "description": "Serving Fort Worth families and businesses with integrity, honesty, and personalized service since 1993.",
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2209 8th Ave",
        "addressLocality": "Fort Worth",
        "addressRegion": "TX",
        "postalCode": "76110",
        "addressCountry": "US"
      },
      "telephone": "817-922-8031",
      "url": "https://rainbowinsuranceoffice.com/about",
      "founder": {
        "@type": "Person",
        "name": "Susan"
      },
      "member": [
        { "@type": "Person", "name": "Sonia" },
        { "@type": "Person", "name": "Elaine" },
        { "@type": "Person", "name": "Holly" },
        { "@type": "Person", "name": "Dominique" },
        { "@type": "Person", "name": "Julie" },
        { "@type": "Person", "name": "Joanna" }
      ]
    }
  };

  return (
    <div className="bg-slate-50">
      <SEO 
        title="About Our Independent Insurance Agency"
        description="Meet Susan and her expert team. Serving Fort Worth since 1993 with personal care and the best insurance rates in Tarrant County."
        schema={aboutSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img1.wsimg.com/isteam/ip/8978f467-2df7-4539-a800-434d5ed54414/susan-rainbow-insurance-office.jpg" 
            alt="Susan - Founder of Rainbow Insurance" 
            className="w-full h-full object-cover object-[center_10%]"
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
              About <span className="text-rainbow-red">Rainbow Insurance Agency in Fort Worth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed drop-shadow-lg font-medium text-gray-200">
              Meet the expert team at Rainbow Insurance Agency. Susan and her expert team shop 56 A+ rated carriers to find you the absolute lowest rates and best service in Fort Worth.
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

      {/* Our Story Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-10 text-gray-900 leading-tight">
                Our Story: A Legacy of <span className="text-rainbow-pink relative">
                  Trust
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-rainbow-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h2>
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-medium">
                <ExpandableText maxLines={3} buttonClassName="text-rainbow-pink">
                  <p>
                    In 1993, Rainbow Insurance Agency was founded in the heart of Fort Worth with a singular vision: to provide our neighbors with the same level of care and protection we would want for our own families. What started as a small local office has grown into one of the most respected independent insurance agencies in North Texas. Our founder, Susan, realized that the big "captive" agencies often prioritized corporate quotas over individual needs, and she wanted to create a place where the client always came first.
                  </p>
                  <p>
                    For over 30 years, we have navigated the changing landscape of the insurance industry, always keeping our clients' needs at the forefront. We've seen Fort Worth grow from a "cowtown" into a bustling metropolis, and we've been there every step of the way, protecting the homes, vehicles, and businesses that make this city great. From the historic homes in the Near Southside to the new developments in North Fort Worth, we understand the unique risks that come with living in Tarrant County.
                  </p>
                  <p>
                    As independent agents, we don't work for one specific insurance company—we work for YOU. This independence allows us to shop the entire market, comparing rates and coverage from 56 top-rated carriers to ensure you get the best value possible. Whether you're a first-time homebuyer in Fairmount or a seasoned business owner in the Stockyards, we have the expertise and the partnerships to find the right fit for your specific situation.
                  </p>
                  <p>
                    Susan and her expert team are more than just a group of insurance professionals. We are your neighbors, your friends, and your advocates. We take the time to listen to your concerns, explain your options in plain English, and stand by your side if you ever need to file a claim. That's the Rainbow Insurance promise.
                  </p>
                </ExpandableText>
              </div>
            </motion.div>
            <div className="relative group">
              <div className="absolute inset-0 bg-rainbow-gold rounded-[4rem] rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-transform" />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=800&fit=crop" 
                  alt="Office meeting" 
                  className="rounded-[3rem] shadow-2xl mt-12 border-4 border-white object-cover h-[500px]"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop" 
                  alt="Team collaboration" 
                  className="rounded-[3rem] shadow-2xl border-4 border-white object-cover h-[500px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 z-20 bg-white p-10 rounded-[2.5rem] shadow-3xl border border-gray-100 text-center">
                <div className="text-6xl font-black text-rainbow-pink mb-2">30+</div>
                <div className="text-xl font-bold text-gray-800">Years of Service</div>
                <div className="mt-4 h-1.5 w-16 bg-rainbow-gold mx-auto rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "30+", label: "Years in Business", icon: History },
              { val: "56", label: "Insurance Carriers", icon: Award },
              { val: "10k+", label: "Clients Protected", icon: Users },
              { val: "4.9", label: "Star Rating", icon: Star }
            ].map((stat, i) => (
              <div key={i} className="space-y-4 group">
                <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto group-hover:bg-rainbow-gold group-hover:scale-110 transition-all border border-white/10">
                  <stat.icon className="w-10 h-10 text-rainbow-gold group-hover:text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-black text-white">{stat.val}</div>
                <div className="text-sm uppercase tracking-[0.2em] font-black text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Modern Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 leading-tight">Our Core <span className="text-rainbow-gold">Values</span></h2>
            <p className="text-2xl text-gray-600 font-medium">These principles guide every interaction we have and every policy we write.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: Heart, 
                title: "Client-Centric", 
                desc: "We put your needs first. Our goal is to find the coverage that fits your life and budget, not just the policy with the highest commission.",
                color: "bg-rainbow-pink"
              },
              { 
                icon: CheckCircle2, 
                title: "Integrity", 
                desc: "Honesty is our only policy. We provide transparent advice and clear explanations so you always know exactly what you're paying for.",
                color: "bg-rainbow-gold"
              },
              { 
                icon: Users, 
                title: "Community", 
                desc: "We are proud to be a part of Fort Worth. We support local businesses, schools, and charities to help our city thrive.",
                color: "bg-slate-900"
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 hover:border-rainbow-gold transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <div className={`w-20 h-20 ${value.color} rounded-[2rem] flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform relative z-10`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-gray-900 relative z-10">{value.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed relative z-10 font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Collapsible Content Section - Redesigned */}
      <ExpandableText 
        isManual 
        preview={
          <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div>
                  <h2 className="text-5xl md:text-7xl font-black mb-12 text-gray-900 leading-tight">
                    A Legacy of <span className="text-rainbow-pink">Service</span>
                  </h2>
                  <div className="space-y-8 text-2xl text-gray-600 leading-relaxed font-medium">
                    <p>
                      The story of Rainbow Insurance Agency is deeply intertwined with the growth and evolution of Fort Worth itself. When Susan opened our doors in 1993, the city was a different place. The skyline was smaller, the traffic was lighter, and the insurance industry was far less digital.
                    </p>
                    <p>
                      Susan's journey began with a simple desk, a telephone, and a commitment to treat every person who walked through her door like a neighbor. She didn't just want to sell policies; she wanted to build a community resource. Over the years, that commitment has never wavered.
                    </p>
                  </div>
                </div>
                <div className="space-y-12">
                  <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group">
                    <div className="w-16 h-16 bg-rainbow-pink/10 rounded-2xl flex items-center justify-center text-rainbow-pink mb-8 group-hover:scale-110 transition-transform">
                      <History className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-black mb-6 text-gray-900">Three Decades of Change</h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                      We've moved from paper files to advanced digital platforms that compare 56 carriers in an instant. We've weathered storms—from the 2000 Fort Worth tornado to historic freezes—always being the first point of contact for our clients.
                    </p>
                  </div>
                  <div className="bg-rainbow-gold/5 p-12 rounded-[3rem] border border-rainbow-gold/20 shadow-xl hover:shadow-2xl transition-all group">
                    <div className="w-16 h-16 bg-rainbow-gold/10 rounded-2xl flex items-center justify-center text-rainbow-gold mb-8 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-black mb-6 text-gray-900">The Power of Independence</h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                      One of the most significant decisions Susan made was to remain an independent agency. It allows us to put our clients first, every single time. We aren't pressured to meet corporate quotas; we shop the entire market for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        } 
        buttonClassName="text-rainbow-pink mx-auto py-8 bg-white w-full border-t border-gray-100 font-black text-xl hover:bg-slate-50 transition-all"
      >
        {/* Rest of History */}
        <section className="py-24 bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100">
                <h3 className="text-3xl font-black mb-6 text-gray-900">A Multi-Generational Legacy</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  Today, we are proud to be a multi-generational agency, with Susan's daughter Elaine helping to lead the way into the future. We've insured the first cars of teenagers who are now successful business owners themselves. This long-term perspective allows us to provide advice that isn't just about today's premium, but about your family's long-term financial security.
                </p>
              </div>
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100">
                <h3 className="text-3xl font-black mb-6 text-gray-900">Your Strategic Partners</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  We are your strategic partners, constantly monitoring the market to ensure you're always getting the best value. If one carrier raises their rates in North Texas, we can quickly pivot and find a better deal with another top-rated company. At Rainbow Insurance Agency, our independence is your advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Involvement - Redesigned */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rainbow-gold/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <GraduationCap className="w-10 h-10 text-rainbow-gold mb-6" />
                    <h4 className="text-xl font-black mb-4">Supporting Schools</h4>
                    <p className="text-white/70 font-medium">Proud supporters of Fort Worth ISD and Keller ISD initiatives.</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <Store className="w-10 h-10 text-rainbow-pink mb-6" />
                    <h4 className="text-xl font-black mb-4">Local Business</h4>
                    <p className="text-white/70 font-medium">We prioritize recommending local body shops and contractors.</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <Heart className="w-10 h-10 text-rainbow-red mb-6" />
                    <h4 className="text-xl font-black mb-4">Giving Back</h4>
                    <p className="text-white/70 font-medium">Active contributors to local food drives and youth sports.</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <MapPin className="w-10 h-10 text-rainbow-gold mb-6" />
                    <h4 className="text-xl font-black mb-4">Stockyards & More</h4>
                    <p className="text-white/70 font-medium">Deeply involved in Sundance Square and Stockyards events.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">
                  Heart of <br />
                  <span className="text-rainbow-gold">Fort Worth</span>
                </h2>
                <div className="space-y-8 text-2xl text-white/80 leading-relaxed font-medium">
                  <p>
                    Our office on 8th Ave is more than just a place of business; it's a part of the neighborhood. We've been at this location for years, and we've seen the area grow and change.
                  </p>
                  <p>
                    Whether you're coming from the Medical District, TCU, or the Southside, our doors are always open for a cup of coffee and a real conversation about your needs. We are Fort Worth, through and through.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section - Redesigned */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-24">
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 leading-tight">The Best Team in <span className="text-rainbow-pink">Fort Worth</span></h2>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Our team took care of us like nobody else could. They are the best there is, dedicated to looking out for you and your family.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                { 
                  name: "Susan", 
                  role: "Owner & Founder", 
                  bio: "With over 30 years of experience, Susan is the visionary behind Rainbow Insurance. She treats every client like family." 
                },
                { 
                  name: "Elaine", 
                  role: "Client Advocate", 
                  bio: "Susan's daughter, Elaine, carries on the family legacy of care. She is a dedicated advocate for our clients." 
                },
                { 
                  name: "Holly", 
                  role: "Service Expert", 
                  bio: "Holly is known for her meticulous attention to detail and her unwavering commitment to client satisfaction." 
                },
                { 
                  name: "Dominique", 
                  role: "Insurance Specialist", 
                  bio: "Dominique is an expert at navigating the complexities of the insurance market, especially SR-22 filings." 
                },
                { 
                  name: "Sonia", 
                  role: "Insurance Specialist", 
                  bio: "Sonia's expertise in home and auto bundles has saved our clients thousands of dollars." 
                },
                { 
                  name: "Julie", 
                  role: "Service Expert", 
                  bio: "Julie is a pro at handling commercial insurance and specialty bonds for local business owners." 
                },
                { 
                  name: "Joanna", 
                  role: "Client Advocate", 
                  bio: "Joanna's friendly demeanor and deep insurance knowledge make her a favorite among our clients." 
                }
              ].map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-10 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-3xl transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-rainbow-pink/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
                  <div className="w-24 h-24 bg-gradient-to-br from-rainbow-pink to-rainbow-rose rounded-[2rem] flex items-center justify-center text-white text-4xl font-black mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform relative z-10">
                    {member.name[0]}
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2 relative z-10">{member.name}</h3>
                  <div className="text-rainbow-pink font-black text-lg mb-6 relative z-10">{member.role}</div>
                  <p className="text-lg text-gray-600 leading-relaxed relative z-10 font-medium">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ExpandableText>

      {/* Meet the Owner Section - High Impact */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[4rem] shadow-3xl overflow-hidden border border-white/10 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rainbow-gold/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[500px] lg:h-auto relative">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/8978f467-2df7-4539-a800-434d5ed54414/susan-rainbow-insurance-office.jpg" 
                  alt="Susan - Owner of Rainbow Insurance" 
                  className="w-full h-full object-cover object-[center_10%] grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent" />
              </div>
              <div className="p-12 lg:p-24 flex flex-col justify-center text-white relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">Meet Susan, <br /><span className="text-rainbow-gold">Our Founder</span></h2>
                <div className="relative">
                  <span className="absolute -top-10 -left-10 text-9xl text-white/10 font-serif">"</span>
                  <p className="text-2xl text-white/80 leading-relaxed mb-12 font-medium relative italic">
                    I started Rainbow Insurance Agency because I saw a need for an agency that truly listened to people. In Fort Worth, we value handshakes and honest talk. That's exactly what you'll find here. My team and I are dedicated to making sure you feel confident and protected every time you get behind the wheel or close your front door. We take care of our clients like nobody else could.
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-rainbow-gold rounded-[1.5rem] flex items-center justify-center text-white text-3xl font-black shadow-2xl">S</div>
                  <div>
                    <div className="font-black text-3xl text-white">Susan</div>
                    <div className="text-rainbow-gold font-black text-xl">Owner & Principal Agent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - High Impact */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-br from-rainbow-pink to-rainbow-rose rounded-[4rem] p-12 md:p-24 text-center text-white shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rainbow-gold/20 rounded-full -ml-48 -mb-48 blur-[100px]" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tight">
                Experience the <br className="hidden md:block" />
                <span className="text-rainbow-gold text-glow">Rainbow Difference</span>
              </h2>
              <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed font-medium">
                Let us show you why thousands of Fort Worth residents have trusted us for over three decades.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <button 
                  onClick={openQuoteForm}
                  className="bg-white text-rainbow-pink hover:bg-gray-100 px-14 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4"
                >
                  Start Your Quote
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
        </div>
      </section>
    </div>
  );
}
