import { Star, Quote, User, MapPin, CheckCircle2, Award, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function Testimonials({ navigateTo, openQuoteForm }: PageProps) {
  const testimonials = [
    {
      name: "Maria R.",
      location: "Fort Worth, TX",
      text: "Susan was absolutely amazing! She took the time to explain everything and found me a rate that was $800 cheaper than my previous company. I feel so much better knowing my family is protected by the best.",
      agent: "Susan"
    },
    {
      name: "David T.",
      location: "Arlington, TX",
      text: "Elaine is the best! She helped me bundle my home and auto and made the whole process so easy. She's Susan's daughter and you can tell she has that same dedication to service. Highly recommend!",
      agent: "Elaine"
    },
    {
      name: "Sarah L.",
      location: "Dallas, TX",
      text: "Holly was so helpful when I needed to get my SR-22 filed. She didn't judge me and got me back on the road in no time. The rates were the best I could find anywhere in DFW.",
      agent: "Holly"
    },
    {
      name: "Robert M.",
      location: "Hurst, TX",
      text: "Dominique worked tirelessly to find the best commercial auto insurance for my small business. He's an expert at finding the best rates and the best coverage. I'm so glad I found Rainbow Insurance.",
      agent: "Dominique"
    },
    {
      name: "Jennifer K.",
      location: "Keller, TX",
      text: "Sonia is a lifesaver! She found me a great policy for my new home when everyone else was giving me crazy high quotes. She really goes above and beyond for her clients.",
      agent: "Sonia"
    },
    {
      name: "Michael B.",
      location: "Southlake, TX",
      text: "Julie provided the best service I've ever had from an insurance agency. She got me signed up with the best rates possible and was so patient with all my questions. She's the best!",
      agent: "Julie"
    },
    {
      name: "Linda G.",
      location: "North Richland Hills, TX",
      text: "Joanna is dedicated to helping her clients. She helped me navigate a difficult claim and made sure everything was handled professionally. I wouldn't go anywhere else for my insurance.",
      agent: "Joanna"
    },
    {
      name: "Carlos V.",
      location: "Fort Worth, TX",
      text: "Susan and her expert team are the best in Fort Worth. I've been with them for 10 years and they always find me the best rates. They treat you like family here.",
      agent: "Susan"
    },
    {
      name: "Karen S.",
      location: "Mansfield, TX",
      text: "Holly was so fast at getting my new car insured. I was at the dealership and she had the ID cards emailed to me in minutes. That's what I call the best service!",
      agent: "Holly"
    },
    {
      name: "James D.",
      location: "Euless, TX",
      text: "Dominique found me a great rate on my motorcycle insurance. He knows his stuff and made sure I had the right coverage for my bike. Great guy to work with!",
      agent: "Dominique"
    },
    {
      name: "Patricia H.",
      location: "Bedford, TX",
      text: "Sonia helped me with my renters insurance and it was so affordable. She's very professional and really cares about getting you the best deal.",
      agent: "Sonia"
    },
    {
      name: "William P.",
      location: "Colleyville, TX",
      text: "Julie is an expert at what she does. She saved me a ton of money on my business insurance. If you want the best rates in Tarrant County, go see Julie!",
      agent: "Julie"
    },
    {
      name: "Elizabeth M.",
      location: "Grapevine, TX",
      text: "Joanna was so kind and helpful when I was looking for auto insurance. She explained all my options clearly and helped me find a policy that fits my budget.",
      agent: "Joanna"
    },
    {
      name: "Thomas B.",
      location: "Fort Worth, TX",
      text: "Elaine is wonderful! She's so knowledgeable and always has a smile on her face. She makes insurance easy to understand and always gets the best rates.",
      agent: "Elaine"
    }
  ];

  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((t, i) => ({
      "@type": "Review",
      "position": i + 1,
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    }))
  };

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Testimonials | What Our Fort Worth Clients Say"
        description="Read reviews from our satisfied clients in Fort Worth and DFW. See why Susan and her expert team are the best in the business."
        schema={testimonialsSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=1600&h=900&fit=crop" 
            alt="Happy Insurance Clients" 
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
              Fort Worth Insurance <span className="text-rainbow-red">Reviews</span>
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

      {/* Testimonials Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 hover:border-rainbow-gold transition-all group relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-rainbow-pink/10 group-hover:text-rainbow-pink/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-rainbow-gold fill-rainbow-gold" />)}
                </div>
                <p className="text-xl text-gray-700 italic mb-8 leading-relaxed font-medium relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 border-t pt-8">
                  <div className="w-14 h-14 bg-rainbow-pink/10 rounded-2xl flex items-center justify-center text-rainbow-pink font-black text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-lg">{t.name}</div>
                    <div className="text-gray-500 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {t.location}
                    </div>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 bg-rainbow-gold/10 text-rainbow-gold px-3 py-1 rounded-full text-xs font-black">
                  <CheckCircle2 className="w-3 h-3" /> Assisted by {t.agent}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Testimonials Matter - Massive Content Block */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-12 text-gray-900 leading-tight">
                The Voice of Our <span className="text-rainbow-pink">Community</span>
              </h2>
              <div className="space-y-8 text-2xl text-gray-600 leading-relaxed font-medium">
                <p>
                  At Rainbow Insurance Agency, we believe that our clients' experiences are the true measure of our success. Since 1993, we've been collecting stories of protection, savings, and peace of mind from families and business owners across Fort Worth and the DFW metroplex. These testimonials aren't just words on a page; they are a testament to the "Rainbow Difference" that Susan founded this agency on over 30 years ago.
                </p>
                <p>
                  When a client takes the time to share their experience, it's a reflection of the hard work and dedication of Susan and her expert team. Whether it's a story of saving hundreds of dollars on a car insurance policy, getting an SR-22 filed in record time, or having a complex commercial claim handled with care, these reviews highlight the personal touch that national insurance companies simply can't provide.
                </p>
                <p>
                  We are proud to maintain a 4.9-star rating on Google, but we are even prouder of the relationships we've built. Many of the people sharing their stories here have been with us for decades, trusting us to protect their first cars, their first homes, and now their children's futures. This multi-generational trust is what drives us to continue providing the best service and the best rates in Tarrant County every single day.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 shadow-xl">
                <h3 className="text-3xl font-black mb-6 text-gray-900">A Culture of Excellence</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
                  The reviews you see here are a direct result of our agency's culture. Susan has always emphasized that we are in the business of helping people, not just selling policies. This philosophy is shared by every member of our team. When you talk to Holly or Elaine, you're talking to someone who genuinely cares about your well-being. When Dominique or Julie shops for your rates, they are doing so with the same intensity they would use for their own families.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  This commitment to excellence is what has allowed us to thrive for over three decades. We don't just aim for "good enough"; we aim for the "Best Service" in Fort Worth. We are constantly looking for ways to improve, using client feedback to refine our processes and ensure we are always meeting and exceeding expectations. Your trust is our most valuable asset, and we work hard every day to earn it.
                </p>
              </div>
              <div className="bg-rainbow-gold/5 p-12 rounded-[3rem] border border-rainbow-gold/20 shadow-xl">
                <h3 className="text-3xl font-black mb-6 text-gray-900">Real People, Real Savings</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
                  One of the most common themes in our testimonials is the incredible savings our clients achieve. By representing 56 A+ rated carriers, we have the unique ability to find the absolute lowest rates in the market. We've helped families save $500, $800, and even over $1,000 per year just by switching to Rainbow Insurance Agency.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  But savings are only part of the story. Our clients also highlight the ease of our process. We know your time is valuable, so we've streamlined everything from getting a quote to filing a claim. Whether you're visiting our office on 8th Ave or calling us at 817-922-8031, you can expect fast, efficient, and friendly service. At Rainbow Insurance Agency, we make insurance easy, affordable, and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Excellence - Massive Content Block */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-12 rounded-[4rem] shadow-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-rainbow-gold" />
                <h3 className="text-3xl font-black mb-8 text-gray-900">Our Promise to You</h3>
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                  <p>
                    Every testimonial we receive is a reminder of the promise we make to every client: to provide the best protection at the best price with the best service. This isn't just a marketing slogan; it's the foundation of our agency. We promise to always be transparent, to always be honest, and to always put your interests first.
                  </p>
                  <p>
                    We also promise to be there when you need us most. Insurance is about more than just a policy; it's about having a partner you can rely on when things go wrong. Whether it's a minor fender bender or a major house fire, Susan and her expert team are here to guide you through the claims process and ensure you get the support you deserve.
                  </p>
                  <p>
                    Finally, we promise to stay local. We are proud to be a part of the Fort Worth community, and we have no intention of changing that. Our roots are deep in Tarrant County, and we are dedicated to serving our neighbors for many years to come. When you choose Rainbow Insurance Agency, you're choosing a local partner who knows your name and cares about your future.
                  </p>
                  <div className="pt-8 border-t border-gray-100">
                    <p className="italic text-rainbow-pink font-bold">
                      "We don't just sell insurance; we provide peace of mind. Every review is a story of a family we've helped protect." — Susan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black mb-12 text-gray-900 leading-tight">
                A Promise of <br />
                <span className="text-rainbow-gold">Reliability</span>
              </h2>
              <div className="space-y-8 text-2xl text-gray-600 leading-relaxed font-medium">
                <p>
                  We are constantly humbled by the kind words of our clients. It's what keeps us motivated to go above and beyond every single day. We know that insurance can be stressful, and our goal is to take that stress away. By providing clear advice, competitive rates, and exceptional service, we aim to make every client a lifelong member of the Rainbow Insurance family.
                </p>
                <p>
                  We also use these testimonials as a tool for growth. We listen to what our clients love and where we can improve. This feedback is invaluable in our mission to provide the absolute best insurance experience in North Texas.
                </p>
                <p>
                  At Rainbow Insurance Agency, we believe that our reputation is built one client at a time. We are honored to be the trusted choice for thousands of Fort Worth residents, and we look forward to earning your trust as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-gray-900">Ready to Experience the <span className="text-rainbow-pink">Best?</span></h2>
          <p className="text-2xl text-gray-600 mb-12 font-medium">
            Join thousands of satisfied clients in Fort Worth and North Texas. Let Susan and her expert team find you the best rates today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={openQuoteForm}
              className="bg-rainbow-pink hover:bg-rainbow-rose text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
            >
              Get My Free Quote
              <ArrowRight className="w-8 h-8" />
            </button>
            <a 
              href="tel:817-922-8031"
              className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-3xl hover:scale-105 flex items-center justify-center gap-4"
            >
              <Phone className="w-8 h-8" />
              817-922-8031
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
