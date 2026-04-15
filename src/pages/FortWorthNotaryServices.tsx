import { motion } from 'motion/react';
import { 
  Shield, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Phone, 
  FileText, 
  PenTool, 
  Zap, 
  Heart, 
  Award, 
  Clock, 
  MapPin,
  ShieldCheck,
  Users,
  HelpCircle,
  Home as HomeIcon,
  Briefcase
} from 'lucide-react';
import SEO from '../components/SEO';
import ExpandableText from '../components/ExpandableText';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FortWorthNotaryServices({ navigateTo, openQuoteForm }: PageProps) {
  const notarySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Notary Public",
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
    "description": "Professional Notary Public services in Fort Worth. Fast, reliable, and bilingual. Walk-ins welcome at our 8th Ave office."
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Notary Public Services Fort Worth | Fast & Reliable"
        description="Need a document notarized in Fort Worth? Susan and her team at Rainbow Insurance Agency offer fast, reliable notary public services. Bilingual and walk-ins welcome."
        schema={notarySchema}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&h=900&fit=crop" 
            alt="Notary Public Services Fort Worth" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 bg-rainbow-pink/90 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-lg">
              <PenTool className="w-4 h-4" />
              <span>Official Notary Public Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Professional <span className="text-rainbow-pink">Notary</span> in Fort Worth
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed drop-shadow-md">
              Need a document notarized quickly? Susan and her expert team provide professional notary services for all your legal and business documents. Walk-ins are welcome at our 8th Ave office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:817-922-8031"
                className="bg-rainbow-pink hover:bg-rainbow-rose text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                817-922-8031
              </a>
              <button 
                onClick={() => navigateTo('contact')}
                className="bg-white hover:bg-gray-100 text-rainbow-pink px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <MapPin className="w-6 h-6" />
                Find Our Office
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-gray-50 border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <Star className="w-8 h-8 text-rainbow-pink fill-rainbow-pink" />
              <span>4.9 Star Rating</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <Award className="w-8 h-8 text-rainbow-pink" />
              <span>State Commissioned</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <Clock className="w-8 h-8 text-rainbow-pink" />
              <span>Since 1993</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl text-gray-700">
              <CheckCircle2 className="w-8 h-8 text-rainbow-pink" />
              <span>Walk-ins Welcome</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Intro */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Trusted <span className="text-rainbow-pink">Notary Public</span> Services in the Heart of Fort Worth
            </h2>
            <div className="text-xl text-gray-600 leading-relaxed">
              <ExpandableText maxLines={3} buttonClassName="text-rainbow-pink mx-auto">
                In today's fast-paced world, finding a reliable notary public can be a challenge. At Rainbow Insurance Agency, we've integrated professional notary services into our business to provide a one-stop-shop for our Fort Worth clients. Whether you're signing insurance documents, real estate contracts, or personal legal papers, Susan and her team ensure the process is handled with the utmost professionalism and care. A notary public serves as an impartial witness to the signing of important documents, helping prevent fraud and ensuring that all parties are signing voluntarily.
              </ExpandableText>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Expertise You Can Count On</h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  A Notary Public is a public official appointed by the state government—in our case, the State of Texas—to serve the public as an impartial witness in performing a variety of official fraud-deterrent acts related to the signing of important documents.
                </p>
                <p>
                  Located at 2209 8th Ave, we are right here in your neighborhood. When you visit us, you aren't just getting a stamp; you're getting the expertise of <strong>Susan and her expert team</strong>—local professionals who understand the legal requirements of the State of Texas.
                </p>
                <div className="bg-gradient-to-r from-pink-50 to-white p-8 rounded-3xl border-l-8 border-rainbow-pink shadow-inner">
                  <p className="text-rainbow-pink font-bold italic text-xl">
                    "Susan and her team made the notarization process so easy. They were professional, fast, and very helpful!"
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=1000&fit=crop" 
                alt="Notary signing documents" 
                className="rounded-3xl shadow-2xl border border-gray-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-rainbow-pink p-8 rounded-3xl shadow-2xl text-white max-w-xs">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-lg font-semibold opacity-90">Years of Serving Tarrant County</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Types of Acts */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-rainbow-pink rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Types of <span className="text-rainbow-pink">Notarial Acts</span></h2>
            <p className="text-xl text-gray-400">Not all notarizations are the same. Here's a breakdown of the common acts we perform daily.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Acknowledgments", desc: "The signer acknowledges they signed the document for its intended purpose. Most common for deeds and contracts." },
              { title: "Jurats", desc: "Used for affidavits. The signer must sign in the notary's presence and take an oath that the contents are true." },
              { title: "Oaths", desc: "Administering an oral oath or affirmation, often required for public officials or witnesses giving testimony." },
              { title: "Copy Certifications", desc: "Confirming a copy is a true reproduction of an original (excluding recordable documents like birth certificates)." }
            ].map((act, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-rainbow-pink/50 transition-all"
              >
                <div className="w-16 h-16 bg-rainbow-pink/20 rounded-2xl flex items-center justify-center mb-8">
                  <ShieldCheck className="w-10 h-10 text-rainbow-pink" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{act.title}</h3>
                <p className="text-gray-400 leading-relaxed">{act.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Documents We Notarize */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Documents We <span className="text-rainbow-pink">Notarize</span></h2>
            <p className="text-xl text-gray-600">We handle a wide range of documents for individuals and businesses across Fort Worth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: FileText, 
                title: "Legal & Estate", 
                items: ["Wills & Trusts", "Power of Attorney", "Affidavits", "Guardianship"] 
              },
              { 
                icon: HomeIcon, 
                title: "Real Estate", 
                items: ["Warranty Deeds", "Deeds of Trust", "Closing Docs", "Lease Agreements"] 
              },
              { 
                icon: Briefcase, 
                title: "Business", 
                items: ["Contracts", "Employment Agreements", "Resolutions", "Financial Docs"] 
              },
              { 
                icon: Heart, 
                title: "Personal", 
                items: ["Medical Directives", "Travel Consent", "Adoption Papers", "Name Changes"] 
              }
            ].map((cat, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-[32px] shadow-xl hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-rainbow-pink transition-colors">
                  <cat.icon className="w-8 h-8 text-rainbow-pink group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-rainbow-pink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Process */}
      <section className="py-24 bg-rainbow-pink text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The Notarization <span className="text-gray-900">Process</span></h2>
              <p className="text-xl mb-8 leading-relaxed">
                We make notarization simple and stress-free. Here's what to expect when you visit our Fort Worth office.
              </p>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Identification", desc: "We verify the identity of all signers using valid, government-issued photo IDs." },
                  { step: "02", title: "Verification", desc: "We ensure all parties are signing voluntarily and understand the document's contents." },
                  { step: "03", title: "Execution", desc: "The document is signed in the presence of the notary, and the official seal is applied." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-white/20">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[40px] shadow-2xl text-gray-900">
              <h3 className="text-3xl font-bold mb-8">What to Bring</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-rainbow-pink flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Valid Photo ID</span>
                    <span className="text-gray-600">Current Driver's License, State ID, or Passport.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-rainbow-pink flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Unsigned Documents</span>
                    <span className="text-gray-600">Do not sign beforehand; must be signed in our presence.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-rainbow-pink flex-shrink-0" />
                  <div>
                    <span className="font-bold block">All Parties Present</span>
                    <span className="text-gray-600">Everyone who needs to sign must be physically here.</span>
                  </div>
                </li>
              </ul>
              <div className="mt-10 p-6 bg-pink-50 rounded-2xl border border-rainbow-pink/20">
                <p className="text-sm italic text-gray-600">
                  "I am not an attorney licensed to practice law in Texas and may not give legal advice or accept fees for legal advice."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Massive Content Block */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Ultimate Guide to Notary Services in Fort Worth</h2>
            <div className="w-20 h-1 bg-rainbow-pink mx-auto" />
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Role of a Notary in Modern Society</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                  <p>
                    In today's complex legal and financial landscape, the role of a Notary Public is more critical than ever. A Notary serves as a vital shield against fraud and identity theft, providing a layer of security that is essential for the smooth functioning of commerce and the legal system. When you bring a document to Rainbow Insurance Agency for notarization, you're not just getting a stamp; you're engaging a centuries-old tradition of trust and verification.
                  </p>
                  <p>
                    Our team—Susan and her expert team—takes this responsibility very seriously. We understand that the documents you're signing often represent major life milestones: buying a home, starting a business, or planning for your family's future. That's why we adhere to the strictest standards of the State of Texas, ensuring that every signature is properly witnessed and every identity is thoroughly verified.
                  </p>
                  <p>
                    Furthermore, the office of the Notary Public has a rich history dating back to ancient Rome. Notaries were originally known as "notarius," officials who took notes and recorded legal proceedings. Over centuries, the role evolved into a trusted position responsible for authenticating documents and signatures. In the United States, the tradition was adopted from English Common Law, and today, notaries play a critical role in the legal and financial infrastructure of our society.
                  </p>
                  <p>
                    At Rainbow Insurance, we believe in providing the "Best Service" in every aspect of our business. This means being available when you need us, providing clear explanations of the process, and ensuring a professional environment for all your sensitive document signings. We've been a pillar of the Fort Worth community since 1993, and our notary services are built on that same foundation of trust and reliability.
                  </p>
                </ExpandableText>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notary Public vs. Notario Público: Understanding the Difference</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <ExpandableText maxLines={6} buttonClassName="text-rainbow-pink">
                  <p>
                    For our Spanish-speaking neighbors in Fort Worth, it is vital to understand the difference between a Texas Notary Public and a "Notario Público" in Mexico or other Latin American countries. This is a common point of confusion that can have significant legal implications.
                  </p>
                  <p>
                    In many Spanish-speaking nations, a Notario Público is a highly trained attorney with significant legal authority, often appointed by the government to handle complex legal matters that would require a judge or a specialized lawyer in the United States. They can draft legal documents, provide legal advice, and represent clients in various capacities.
                  </p>
                  <p>
                    In the United States, however, a Notary Public is not an attorney and does not have the authority to give legal advice or prepare legal documents. Using the term "Notario Público" to describe a US Notary is actually prohibited by Texas law because it can be misleading to those who expect the broader powers of a foreign Notario. Susan and her team are committed to transparency, ensuring that all our clients understand the specific, authorized role we play in their document execution.
                  </p>
                  <p>
                    We provide bilingual services to ensure that our Spanish-speaking clients feel comfortable and fully understand the notarization process. However, we always maintain the clear distinction that we are witnesses to signatures, not legal advisors. This commitment to honesty and legal compliance is part of why we've been trusted in Fort Worth for over 30 years.
                  </p>
                </ExpandableText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Common Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our notary services.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "Do I need an appointment?", a: "While appointments are recommended, walk-ins are always welcome at our Fort Worth office during regular business hours. We strive to assist everyone as quickly as possible." },
              { q: "What are the fees?", a: "Notary fees are set by the State of Texas. We charge the standard state-mandated fee per signature. Call 817-922-8031 for current pricing." },
              { q: "Can you notarize in Spanish?", a: "Yes! Susan and her team are bilingual. We can notarize documents written in Spanish, provided the notary understands the document and can communicate directly with the signers." },
              { q: "Can you notarize if the signer isn't present?", a: "No. Under Texas law, the signer must be physically present before the notary at the time of notarization. There are no exceptions." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-rainbow-pink" />
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
              { name: 'Mexico Insurance', path: '/fort-worth-mexico-insurance' },
              { name: 'Commercial Auto', path: '/fort-worth-commercial-auto-insurance' }
            ].map((service) => (
              <button
                key={service.path}
                onClick={() => navigateTo(service.path)}
                className="p-6 bg-gray-50 rounded-2xl font-bold text-gray-700 hover:bg-rainbow-pink hover:text-white transition-all text-center"
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Need a Notary Today?</h2>
          <p className="text-2xl mb-16 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Susan and her team are ready to help you with all your notarization needs. Fast, reliable, and professional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a 
              href="tel:817-922-8031"
              className="bg-white text-rainbow-pink hover:bg-gray-100 px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4"
            >
              <Phone className="w-8 h-8" />
              817-922-8031
            </a>
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-rainbow-ink text-white hover:bg-black px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-4"
            >
              <MapPin className="w-8 h-8 text-rainbow-gold" />
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
