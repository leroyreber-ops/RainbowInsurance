import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ShieldCheck, Star, Users, Award, CheckCircle2, HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import SEO from '../components/SEO';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function ContactUs({ navigateTo, openQuoteForm }: PageProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, pageSource: '/contact' }),
      });

      if (response.ok) {
        alert('Thank you! Susan and her expert team will contact you shortly.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your request. Please call us directly at 817-922-8031.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "InsuranceAgency",
      "name": "Rainbow Insurance Agency",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2209 8th Ave",
        "addressLocality": "Fort Worth",
        "addressRegion": "TX",
        "postalCode": "76110"
      },
      "telephone": "817-922-8031",
      "email": "rainbowins@yahoo.com",
      "openingHours": "Mo-Fr 09:00-17:00, Sa 09:00-13:00"
    }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Contact Rainbow Insurance Agency | Fort Worth, TX"
        description="Contact Susan and her expert team at Rainbow Insurance Agency in Fort Worth. Call 817-922-8031 for the best rates on car, home, and business insurance."
        schema={contactSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop" 
            alt="Contact Rainbow Insurance" 
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
              Contact <span className="text-rainbow-red">Rainbow Insurance</span>
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

      {/* Contact Info Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-xl border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-rainbow-pink/10 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <Phone className="w-8 h-8 text-rainbow-pink" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Call Us</h3>
              <p className="text-gray-600 mb-6">Talk to Susan and her expert team directly for immediate assistance.</p>
              <a href="tel:817-922-8031" className="text-2xl font-black text-rainbow-pink hover:text-rainbow-rose transition-colors">817-922-8031</a>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-xl border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-rainbow-gold/10 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <MapPin className="w-8 h-8 text-rainbow-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Visit Our Office</h3>
              <p className="text-gray-600 mb-6">We're located in the heart of Fort Worth. Walk-ins are always welcome!</p>
              <p className="text-xl font-bold text-gray-900">2209 8th Ave<br />Fort Worth, TX 76110</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-xl border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-slate-900/10 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <Clock className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Business Hours</h3>
              <p className="text-gray-600 mb-6">We're here to serve you throughout the week.</p>
              <div className="space-y-2 text-gray-900 font-medium">
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Send Us a <span className="text-rainbow-pink">Message</span></h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Have a specific question or request? Fill out the form below, and one of our experts from Susan and her expert team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rainbow-pink focus:border-transparent transition-all outline-none" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rainbow-pink focus:border-transparent transition-all outline-none" 
                      placeholder="(817) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rainbow-pink focus:border-transparent transition-all outline-none" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rainbow-pink focus:border-transparent transition-all outline-none"
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                  >
                    <option>General Inquiry</option>
                    <option>New Quote Request</option>
                    <option>Policy Question</option>
                    <option>Claims Assistance</option>
                    <option>Billing Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    rows={6} 
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rainbow-pink focus:border-transparent transition-all outline-none" 
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-rainbow-pink hover:bg-rainbow-rose text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <Send className="w-6 h-6" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="sticky top-24">
              <div className="bg-gray-200 rounded-[40px] overflow-hidden shadow-2xl h-[600px] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=1000&fit=crop" 
                  alt="Fort Worth Map Placeholder" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-rainbow-pink/10 pointer-events-none" />
                <div className="absolute bottom-10 left-10 right-10 bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-rainbow-gold rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rainbow Insurance Agency</h4>
                      <p className="text-gray-600">2209 8th Ave, Fort Worth, TX 76110</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=2209+8th+Ave+Fort+Worth+TX+76110" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-900 text-white text-center py-4 rounded-xl font-bold hover:bg-black transition-all"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Content Section for Word Count */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Support for Your Insurance Needs</h2>
            <div className="w-24 h-1 bg-rainbow-gold mx-auto" />
          </div>

          <div className="space-y-12">
            {/* Our Commitment */}
            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to the Fort Worth Community</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  At Rainbow Insurance Agency, we believe that being a local business means more than just having an address in Fort Worth. It means being a part of the fabric of this city. Since 1993, we've been dedicated to providing the best service and the best rates to our neighbors in Tarrant County. When you contact us, you're not just reaching an insurance agency; you're reaching a team of local experts who live, work, and raise families right here in North Texas.
                </p>
                <p>
                  Susan, our founder, started this agency with a simple mission: to treat every client like family. That mission continues today with her expert team. We understand the unique challenges of living in the DFW metroplex—from the intense hailstorms that sweep through every spring to the complex traffic patterns of I-35W and I-30. Our local knowledge allows us to provide advice that national call centers simply can't match.
                </p>
                <p>
                  We know that insurance can be confusing and, at times, overwhelming. That's why we prioritize clear, honest communication. Whether you're calling to get a quote on a new car, asking about how to protect your home from flood damage, or needing help with an SR-22 filing, we take the time to explain your options in plain English. We don't use jargon or try to sell you coverage you don't need. Our goal is to find the perfect balance of protection and affordability for your specific situation.
                </p>
              </div>

              <AnimatePresence>
                {expandedSections['commitment'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="text-gray-600 leading-relaxed space-y-4 pt-6 border-t border-gray-200 mt-6">
                      <p>
                        Furthermore, our commitment extends beyond the initial sale. We are your advocates throughout the life of your policy. If you have a claim, we're the first people you should call. We'll help you navigate the process, ensure you're treated fairly by the insurance company, and help you get back on your feet as quickly as possible. We've seen how the right insurance policy can be a lifesaver during a crisis, and we take that responsibility seriously.
                      </p>
                      <p>
                        We also believe in giving back to the community that has supported us for over three decades. Whether it's supporting local schools, participating in community events, or simply being a reliable resource for our neighbors, Rainbow Insurance Agency is proud to be a part of Fort Worth. We value the relationships we've built with our clients over the years, and we look forward to serving you and your family for many more years to come.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                onClick={() => toggleSection('commitment')}
                className="mt-8 flex items-center gap-2 text-rainbow-pink font-bold hover:text-rainbow-rose transition-colors"
              >
                {expandedSections['commitment'] ? (
                  <>Read Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Read More <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>

            {/* Why Call Us */}
            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Calling an Independent Agent is Your Best Move</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  In the age of online "instant" quotes, you might wonder why you should pick up the phone and call an agent. The truth is, insurance is not a one-size-fits-all product. A website can't understand the nuances of your life, your assets, or your risk tolerance. When you call Rainbow Insurance Agency, you're getting the expertise of Susan and her expert team—experts who can identify gaps in your coverage that an algorithm might miss.
                </p>
                <p>
                  As an independent agency, we represent 56 different insurance carriers. This is a massive advantage for you. When you call a "captive" agent (one who only represents one company), they can only offer you that company's rates. If those rates go up, they can't help you. But when you call us, we can shop your policy across the entire market. If one carrier raises their rates, we can easily switch you to another top-rated company without you having to find a new agent.
                </p>
                <p>
                  Our independence means we work for YOU, not the insurance company. We are your strategic partners in finding the best rates and the best service. We know which companies are currently offering the best discounts for Fort Worth drivers, which ones have the best claims service for homeowners, and which ones specialize in high-risk auto insurance or SR-22 filings. We do the heavy lifting so you don't have to.
                </p>
              </div>

              <AnimatePresence>
                {expandedSections['independent'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="text-gray-600 leading-relaxed space-y-4 pt-6 border-t border-gray-200 mt-6">
                      <p>
                        Additionally, calling us allows for a comprehensive review of your insurance portfolio. Many people don't realize that bundling their auto and home insurance can lead to massive savings—often up to 25% off both policies. We can also look at your umbrella coverage and specialty policies for boats or RVs. By having all your insurance in one place with an agent you trust, you ensure that there are no overlaps or gaps in your protection.
                      </p>
                      <p>
                        We also provide a level of personal service that a national call center simply can't match. When you call 817-922-8031, you're talking to a real person in Fort Worth. You don't have to navigate a complex phone tree or wait on hold for an hour. We value your time and we value your business. They took care of us like nobody else could, and that's the level of service we aim to provide every single time you reach out.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                onClick={() => toggleSection('independent')}
                className="mt-8 flex items-center gap-2 text-rainbow-pink font-bold hover:text-rainbow-rose transition-colors"
              >
                {expandedSections['independent'] ? (
                  <>Read Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Read More <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>

            {/* Claims and Support */}
            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support When You Need It Most: Filing a Claim</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  One of the most important reasons to have a local agent is for support during the claims process. An accident or a major storm is a stressful event. The last thing you want to do is deal with a faceless insurance corporation on your own. At Rainbow Insurance Agency, we are your advocates. If you've been in an accident or your home has been damaged, your first call should be to us at 817-922-8031.
                </p>
                <p>
                  Susan and her expert team have decades of experience navigating the claims process. We can help you understand what information you need to gather, how to document the damage, and what to expect from the insurance company's adjuster. We can even recommend reputable local body shops and contractors in Fort Worth that we know provide quality work and fair pricing.
                </p>
                <p>
                  We stay involved throughout the process to ensure your claim is handled fairly and efficiently. If there's a delay or a dispute, we have the relationships and the expertise to push for a resolution. We've seen how a poorly handled claim can turn a bad situation into a nightmare, and we are dedicated to ensuring that doesn't happen to our clients. Our goal is to get you back to normal as quickly as possible.
                </p>
              </div>

              <AnimatePresence>
                {expandedSections['claims'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="text-gray-600 leading-relaxed space-y-4 pt-6 border-t border-gray-200 mt-6">
                      <p>
                        We also provide advice on whether or not to file a claim in the first place. Not every incident should be reported. If the damage is only slightly above your deductible, it might be more cost-effective to pay for the repair out of pocket to avoid a potential rate increase. We provide honest, expert advice based on your specific policy and history, always keeping your long-term financial interests in mind.
                      </p>
                      <p>
                        Our support doesn't end when the claim is closed. We follow up to make sure you're satisfied with the outcome and that your vehicle or home has been restored to its proper condition. We believe that true service is about being there for our clients during the most difficult times. Believe in us for your insurance needs, and we'll prove why we're the best in Fort Worth.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                onClick={() => toggleSection('claims')}
                className="mt-8 flex items-center gap-2 text-rainbow-pink font-bold hover:text-rainbow-rose transition-colors"
              >
                {expandedSections['claims'] ? (
                  <>Read Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Read More <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location - Massive Content Block */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-12 text-gray-900 leading-tight">
                Visit Us in <br />
                <span className="text-rainbow-pink">Fort Worth</span>
              </h2>
              <div className="space-y-8 text-2xl text-gray-600 leading-relaxed font-medium">
                <p>
                  Our office at 2209 8th Ave is more than just a place of business; it's a hub of insurance expertise in the heart of Fort Worth. We've been at this location for years, serving as a beacon of reliability for drivers, homeowners, and business owners throughout Tarrant County. When you visit us, you aren't just a client; you're a neighbor, and we treat you with the respect and personal attention you deserve.
                </p>
                <p>
                  Located just south of downtown Fort Worth, our office is easily accessible from all parts of the DFW metroplex. Whether you're coming from the historic Stockyards, the modern Sundance Square, or the bustling suburbs of Arlington or Keller, you'll find that we're conveniently located to serve your insurance needs. We love it when our clients stop by to say hello, ask a question, or just share a story about their day.
                </p>
                <p>
                  Inside our office, you'll find a welcoming environment where Susan and her expert team are ready to help. We believe in face-to-face service because we know that insurance is a personal matter. We take the time to sit down with you, listen to your concerns, and build a customized insurance portfolio that provides maximum protection at the lowest possible price. At Rainbow Insurance Agency, we're here for you, in person and in spirit.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 shadow-xl">
                <h3 className="text-3xl font-black mb-6 text-gray-900">A Local Landmark for Protection</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
                  For over 30 years, our office has been a constant in the ever-changing landscape of Fort Worth. We've seen the city grow and evolve, and we've been there every step of the way, protecting the homes and businesses that make this community great. Our deep roots in the area allow us to provide insights that national companies simply can't. We know the local risks, the local laws, and the local people.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  We are proud to be a part of the Fort Worth community and are dedicated to its continued growth and prosperity. When you choose Rainbow Insurance Agency, you're choosing a local partner who is invested in your future. We are your neighbors, your friends, and your advocates, and we're honored to be your trusted choice for insurance in North Texas.
                </p>
              </div>
              <div className="bg-rainbow-gold/5 p-12 rounded-[3rem] border border-rainbow-gold/20 shadow-xl">
                <h3 className="text-3xl font-black mb-6 text-gray-900">Convenience and Accessibility</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
                  We know your time is valuable, so we've made our office as accessible as possible. We offer convenient business hours, including Saturday mornings, to ensure you can get the help you need when it's most convenient for you. We also offer plenty of free parking and a comfortable waiting area where you can relax while we shop for your best rates.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  If you can't make it to our office in person, don't worry. We offer a full range of digital services, allowing you to get a quote, manage your policy, and even file a claim from the comfort of your own home. But no matter how you choose to interact with us, you can always expect the same level of personal service and expert advice that has made us the best in Fort Worth for over three decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us - Massive Content Block */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-12 rounded-[4rem] shadow-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-rainbow-gold" />
                <h3 className="text-3xl font-black mb-8 text-gray-900">The Power of Personal Connection</h3>
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                  <p>
                    In a world of automated phone systems and faceless websites, Rainbow Insurance Agency stands out by prioritizing personal connection. When you contact us, you're not just a policy number; you're a valued member of our agency family. We take the time to get to know you, to understand your needs, and to provide the expert advice you deserve.
                  </p>
                  <p>
                    Whether you're calling to get a quote on a new car, asking about how to protect your home from Texas weather, or needing help with an SR-22 filing, you'll always talk to a real person in Fort Worth. Susan and her expert team are here to listen, to answer your questions, and to find the perfect insurance solution for your specific situation.
                  </p>
                  <p>
                    We believe that this personal touch is what makes the "Rainbow Difference." It's why we've been the trusted choice for thousands of Fort Worth residents for over 30 years. We are your local advocates, your strategic partners, and your friends, and we're dedicated to your financial well-being.
                  </p>
                  <div className="pt-8 border-t border-gray-100">
                    <p className="italic text-rainbow-pink font-bold">
                      "We don't just sell insurance; we build relationships. Every contact is an opportunity to help a neighbor protect what matters most." — Susan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black mb-12 text-gray-900 leading-tight">
                Why <br />
                <span className="text-rainbow-gold">Contact Us?</span>
              </h2>
              <div className="space-y-8 text-2xl text-gray-600 leading-relaxed font-medium">
                <p>
                  There are many reasons to reach out to Rainbow Insurance Agency. Perhaps you're looking for a better rate on your car insurance, or you're a new homeowner needing comprehensive protection for your dream house. Maybe you're a business owner looking for a reliable partner to secure your livelihood, or you're a driver needing an SR-22 filing to get back on the road.
                </p>
                <p>
                  Whatever your needs, we have the expertise and the resources to help. By representing 56 A+ rated carriers, we can shop the entire market to find you the absolute best combination of price and coverage. We do the heavy lifting so you don't have to, ensuring you never pay a penny more than necessary for the protection you deserve.
                </p>
                <p>
                  At Rainbow Insurance Agency, we believe that "Best Service" isn't just a slogan; it's our daily practice. Contact us today and experience the difference for yourself. We look forward to serving you!
                </p>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Save on Your Insurance?</h2>
          <p className="text-2xl mb-16 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Don't wait another day to find the best rates and the best service in Fort Worth. Contact us now for a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a 
              href="tel:817-922-8031"
              className="bg-rainbow-gold hover:bg-rainbow-amber text-white px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4"
            >
              <Phone className="w-8 h-8" />
              817-922-8031
            </a>
            <button 
              onClick={openQuoteForm}
              className="bg-white text-rainbow-pink hover:bg-gray-100 px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-2xl hover:scale-105"
            >
              Get My Free Quote
            </button>
          </div>
          <div className="mt-20 flex flex-col items-center gap-4 text-lg opacity-80">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>2209 8th Ave, Fort Worth, TX 76110</span>
            </div>
            <p>Serving Tarrant County and the DFW Metroplex since 1993</p>
          </div>
        </div>
      </section>
    </div>
  );
}
