import { motion } from 'motion/react';
import { 
  Shield, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Phone, 
  Globe, 
  Car, 
  Zap, 
  Heart, 
  Award, 
  MapPin, 
  Compass, 
  ShieldCheck, 
  HeartPulse, 
  Scale, 
  AlertTriangle,
  HelpCircle,
  FileText
} from 'lucide-react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthMexicoInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const mexicoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mexico Tourist Auto Insurance",
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
    "description": "Specialized Mexico tourist auto insurance for Fort Worth residents. Legal liability, bail bonds, and legal assistance included."
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Mexico Tourist Auto Insurance Fort Worth | Drive Safe"
        description="Planning a trip to Mexico? Susan and her team at Rainbow Insurance Agency provide the best Mexico tourist auto insurance in Fort Worth. Legal liability and bail bonds included."
        schema={mexicoSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1920&h=1080&fit=crop" 
            alt="Driving in Mexico" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <div className="inline-flex items-center gap-2 bg-rainbow-gold/90 text-gray-900 px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Globe className="w-4 h-4" />
              <span>Official Mexico Tourist Protection</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight drop-shadow-lg">
              Mexico Tourist Auto Insurance in <span className="text-rainbow-gold">Fort Worth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed drop-shadow-md">
              Planning a trip south? Susan and her team provide the best Mexico Tourist Auto Insurance in Fort Worth. Your US auto insurance stops at the border, but our specialized policies meet all legal requirements to protect you while you travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-gold hover:bg-rainbow-amber text-gray-900 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Mexico Quote <ArrowRight className="w-6 h-6" />
              </button>
              <a 
                href="tel:817-922-8031"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6 text-rainbow-gold" />
                817-922-8031
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-gray-50 border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <Shield className="w-8 h-8 text-rainbow-gold" />
              <span>Legal Liability Included</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <Scale className="w-8 h-8 text-rainbow-gold" />
              <span>Bail Bond Coverage</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <Award className="w-8 h-8 text-rainbow-gold" />
              <span>A+ Rated Carriers</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <CheckCircle2 className="w-8 h-8 text-rainbow-gold" />
              <span>Instant Policy Issuance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Why You Need It */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Why You Need Specialized <span className="text-rainbow-gold">Mexico Tourist Insurance</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <ExpandableText maxLines={5} buttonClassName="text-rainbow-gold">
                  <p>
                    Planning a road trip to Mexico is an exciting adventure, but it requires careful preparation. One of the most critical steps is securing proper auto insurance. At Rainbow Insurance Agency, we've been helping Fort Worth residents navigate the complexities of Mexico tourist insurance since 1993. Susan and her team understand the unique requirements of the Mexican legal system and provide policies that offer real protection.
                  </p>
                  <p>
                    It's a common misconception that US auto insurance provides coverage in Mexico. While some US policies may offer limited physical damage coverage near the border, they almost never provide the required civil liability coverage. In Mexico, an auto accident is considered both a civil and a criminal matter. Without a valid Mexican insurance policy, you could face significant fines, vehicle impoundment, or even jail time.
                  </p>
                  <p>
                    The Mexican legal system is based on Napoleonic Code, which differs significantly from the US system. In Mexico, you are essentially "guilty until proven innocent" in the event of an auto accident involving injuries or significant property damage. If you cannot prove you have the financial means to pay for the damages (via a valid Mexican insurance policy), the authorities have the right to detain you and impound your vehicle until the matter is settled.
                  </p>
                </ExpandableText>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1512813588311-5494ec682312?w=800&h=1000&fit=crop" 
                alt="Mexico Border Crossing" 
                className="rounded-3xl shadow-2xl border border-gray-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-rainbow-gold p-8 rounded-3xl shadow-2xl text-gray-900 max-w-xs">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg font-semibold opacity-90">Legal Compliance Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Risks */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-rainbow-gold rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Risks of <span className="text-rainbow-gold">No Coverage</span></h2>
            <p className="text-xl text-gray-400">Driving in Mexico without a recognized policy is a serious risk. Here's what's at stake.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10 hover:border-rainbow-gold/50 transition-all"
            >
              <div className="w-16 h-16 bg-rainbow-gold/20 rounded-2xl flex items-center justify-center mb-8">
                <AlertTriangle className="w-10 h-10 text-rainbow-gold" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-rainbow-gold">Financial Devastation</h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                Without insurance, you are personally responsible for all damages, including property damage to other vehicles, public property, and medical expenses for injured parties. In the event of a fatality, the compensation required by Mexican law can reach hundreds of thousands of dollars.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10 hover:border-rainbow-gold/50 transition-all"
            >
              <div className="w-16 h-16 bg-rainbow-gold/20 rounded-2xl flex items-center justify-center mb-8">
                <Scale className="w-10 h-10 text-rainbow-gold" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-rainbow-gold">Legal Detention</h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                In Mexico, if you cannot prove your ability to pay for damages at the scene of an accident, the police have the authority to detain you. You could be held in a local jail until the financial obligations are met. A valid policy includes a "Bail Bond" provision that prevents this.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Coverage Deep Dive */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Coverage <span className="text-rainbow-gold">Deep Dive</span></h2>
            <p className="text-xl text-gray-600">Our policies are designed to provide comprehensive protection across all of Mexico.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Third-Party Liability", desc: "Covers bodily injury and property damage to others. We recommend $300k-$500k limits." },
              { icon: Car, title: "Physical Damage", desc: "Protects your vehicle against collisions, overturning, fire, and natural disasters." },
              { icon: HeartPulse, title: "Medical Expenses", desc: "Covers medical costs for you and your passengers regardless of fault." },
              { icon: Scale, title: "Legal & Bail", desc: "Provides a bilingual attorney and funds for bail bonds if you are detained." },
              { icon: Zap, title: "Roadside Aid", desc: "Includes towing, flat tire changes, fuel delivery, and jump-starts across Mexico." },
              { icon: Award, title: "Gap Coverage", desc: "Bridges the gap between your loan balance and the vehicle's cash value if totaled." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-[32px] shadow-xl hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rainbow-gold transition-colors">
                  <item.icon className="w-8 h-8 text-rainbow-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Comparison Table */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">US vs. <span className="text-rainbow-gold">Mexico</span> Insurance</h2>
            <p className="text-xl text-gray-600">Don't assume your US policy has you covered. See the critical differences.</p>
          </div>

          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-8 px-10 text-xl font-bold">Feature</th>
                    <th className="py-8 px-10 text-xl font-bold opacity-60">Standard US Policy</th>
                    <th className="py-8 px-10 text-xl font-bold text-rainbow-gold">Mexico Tourist Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: 'Civil Liability', us: 'Not Recognized', mx: 'Fully Compliant' },
                    { feature: 'Legal Assistance', us: 'None in Mexico', mx: 'Included (Bilingual)' },
                    { feature: 'Bail Bond', us: 'None', mx: 'Included' },
                    { feature: 'Medical Expenses', us: 'Limited/None', mx: 'Full Coverage' },
                    { feature: 'Theft/Collision', us: 'Rarely Covered', mx: 'Standard Coverage' },
                    { feature: 'Roadside Aid', us: 'US Only', mx: 'Mexico-Wide' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-6 px-10 font-bold text-gray-900 text-lg">{row.feature}</td>
                      <td className="py-6 px-10 text-gray-500 text-lg">{row.us}</td>
                      <td className="py-6 px-10 text-rainbow-gold font-black text-lg">{row.mx}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Travel Tips */}
      <section className="py-24 bg-rainbow-ink text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Expert <span className="text-rainbow-gold">Travel Tips</span></h2>
              <p className="text-xl mb-12 opacity-80">Drive safe and stay legal with these essential tips from Susan and her team.</p>
              <div className="space-y-8">
                {[
                  { title: "Stick to Toll Roads", desc: "Use 'Cuota' roads; they are better maintained and generally safer than 'Libre' roads." },
                  { title: "Avoid Night Driving", desc: "Visibility is poor, and hazards like unlit vehicles or livestock are common after dark." },
                  { title: "Keep Your FMM Ready", desc: "Always have your tourist card (FMM) and vehicle registration with you." }
                ].map((tip, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-rainbow-gold" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{tip.title}</h4>
                      <p className="text-white/60">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-2xl text-gray-900">
              <h3 className="text-3xl font-bold mb-8">Required Docs</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <FileText className="w-6 h-6 text-rainbow-gold flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-lg">Valid US Driver's License</span>
                    <span className="text-gray-600">Must be current and valid for the duration of your stay.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FileText className="w-6 h-6 text-rainbow-gold flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-lg">Vehicle Registration</span>
                    <span className="text-gray-600">Original registration and multiple printed copies.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FileText className="w-6 h-6 text-rainbow-gold flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-lg">Proof of Mexico Insurance</span>
                    <span className="text-gray-600">Printed copies of your policy from a Mexican carrier.</span>
                  </div>
                </li>
              </ul>
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-6">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center">
                  <Compass className="w-10 h-10 text-rainbow-gold" />
                </div>
                <div>
                  <div className="font-bold text-xl">Ready to Go?</div>
                  <div className="text-gray-500">Get your policy in minutes.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Massive Content Block */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Ultimate Guide to Mexico Tourist Insurance</h2>
            <div className="w-24 h-1 bg-rainbow-gold mx-auto" />
          </div>

          <div className="space-y-12">
            <div className="prose prose-xl prose-gray max-w-none">
              <ExpandableText maxLines={8} buttonClassName="text-rainbow-gold">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding the "Civil Liability" Requirement</h3>
                <p>
                  Civil Liability (Responsabilidad Civil) is the core of any Mexican insurance policy. It covers the damage you cause to others. Under Mexican law, if you are at fault in an accident, you are legally obligated to restore the injured party to their previous state. This includes repairing their car, paying their medical bills, and compensating them for lost wages. If you don't have insurance, the government will step in to ensure these obligations are met, often at your personal expense and through the seizure of your assets (including your vehicle).
                </p>
                <p>
                  Furthermore, Mexican law dictates that liability limits are determined by the state in which the accident occurs. In some states, the required liability for a fatality can be as high as $300,000 to $500,000 USD. If your policy doesn't meet these specific state requirements, you could be personally liable for the difference. Susan and her team ensure that every policy we issue meets or exceeds these critical legal thresholds.
                </p>
                <p>
                  Many travelers don't realize that driving conditions and risks can vary significantly depending on where you are in Mexico. For example, driving in the Baja Peninsula is often considered more straightforward than driving in the mainland's mountainous interior. However, Baja has its own unique risks, such as long stretches of desert road with no cell service and limited gas stations.
                </p>
                <p>
                  In mainland Mexico, you may encounter more complex traffic patterns in major cities like Mexico City or Guadalajara, as well as narrow, winding roads in the Sierra Madre mountains. Regardless of your destination, having a policy that includes 24/7 roadside assistance is essential. Susan and her team can help you choose a policy that is tailored to your specific travel itinerary, ensuring you have the right level of protection for the regions you'll be visiting.
                </p>
                <p>
                  The most important thing to remember if you are involved in an accident in Mexico is: **Do not leave the scene.** You must wait for the authorities and your insurance adjuster to arrive. Leaving the scene of an accident is a serious crime in Mexico and can void your insurance coverage. Once you call the 01-800 number provided in your policy, a bilingual adjuster will be dispatched to your location. They will handle the communication with the police and the other parties involved.
                </p>
              </ExpandableText>
            </div>

            <div className="prose prose-xl prose-gray max-w-none">
              <ExpandableText maxLines={8} buttonClassName="text-rainbow-gold">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Insuring Towed Units: Boats, Trailers, and RVs</h3>
                <p>
                  If you are towing a boat, a utility trailer, or a travel trailer, it is crucial that these units are specifically listed on your Mexico insurance policy. In the event of an accident, if the towed unit is not listed, your entire policy could be voided. This is a common pitfall for travelers who assume their US policy's towing coverage will extend across the border.
                </p>
                <p>
                  When you insure a towed unit, you must provide its make, model, year, and value. The policy will then provide liability and physical damage coverage for the unit while it is attached to your vehicle. If you plan to unhook the trailer and leave it at a campsite or marina, you may need additional coverage for when it is stationary. Susan and her team can help you navigate these details to ensure your entire rig is fully protected.
                </p>
                <p>
                  Being involved in a hit-and-run accident in a foreign country is a stressful experience. In Mexico, the process for handling this is similar to the US, but with a few key differences. First, try to get as much information as possible about the other vehicle—license plate number, make, model, and color. If there are any witnesses, try to get their contact information.
                </p>
                <p>
                  Immediately call your insurance company's emergency number. Even if the other driver fled, you must still file a police report and have an insurance adjuster assess the damage to your vehicle. Most comprehensive Mexico insurance policies include coverage for hit-and-run accidents under the "Physical Damage" section, provided you follow the proper reporting procedures. Susan's team is always available to help our clients understand their policy's specific requirements for these unfortunate situations.
                </p>
              </ExpandableText>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Common Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about driving in Mexico.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "Can I buy Mexico insurance at the border?", a: "Yes, but it's often more expensive and the coverage options may be limited. Susan recommends buying in advance for better rates and correct coverage." },
              { q: "Does my US policy cover my rental car?", a: "Almost certainly not. Even if your credit card offers collision, it won't provide the legally required third-party liability. You must purchase a specific Mexico policy." },
              { q: "What if I'm in an accident?", a: "Stay calm. Do not move the vehicles. Call the 800 number on your policy immediately. An adjuster and attorney will be dispatched to assist you." },
              { q: "Is my boat or trailer covered?", a: "Trailers, boats, and towed vehicles must be specifically listed on your policy to be covered. Susan can help you add these to your quote." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-rainbow-gold" />
                  {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Explore Our Other Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Car Insurance', path: '/fort-worth-car-insurance' },
              { name: 'Home Insurance', path: '/fort-worth-home-insurance' },
              { name: 'Notary Services', path: '/fort-worth-notary-services' },
              { name: 'Commercial Auto', path: '/fort-worth-commercial-auto-insurance' }
            ].map((service) => (
              <button
                key={service.path}
                onClick={() => navigateTo(service.path)}
                className="p-6 bg-gray-50 rounded-2xl font-bold text-gray-700 hover:bg-rainbow-gold hover:text-gray-900 transition-all text-center"
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-rainbow-pink text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready for Your Mexico Adventure?</h2>
          <p className="text-2xl mb-16 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Don't wait until the border. Get your official Mexico tourist insurance today and drive with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button 
              onClick={openQuoteForm}
              className="bg-rainbow-gold text-gray-900 hover:bg-rainbow-amber px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-2xl hover:scale-105"
            >
              Get My Free Quote
            </button>
            <a 
              href="tel:817-922-8031"
              className="bg-rainbow-ink text-white hover:bg-black px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-2xl flex items-center justify-center gap-4"
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
