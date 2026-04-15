import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function IrvingInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'irving-basics',
      title: 'Comprehensive Insurance Solutions for Irving Residents',
      content: `Irving is a diverse and centrally located city in the DFW metroplex, and living here requires smart and reliable insurance protection. Whether you're a homeowner in the beautiful community of Las Colinas, a renter in a modern apartment near the Toyota Music Factory, or a business owner in the busy industrial areas near DFW Airport, you need an insurance partner who understands the unique risks and opportunities of Irving. At Rainbow Insurance Agency, we've been serving the North Texas community since 1993, and we're proud to offer our expert services to the residents of Irving.

We understand that Irving has its own set of challenges, from the heavy traffic on Highway 114 and I-635 to the severe weather risks that come with living in the heart of North Texas. Susan and her expert team are experts at navigating these risks and finding the most robust coverage for your specific needs. We don't just provide a policy; we help you build a comprehensive protection plan that covers your home, your vehicles, your business, and your family's future.

We are your local advocates for Irving security. We take the time to learn about your specific neighborhood and your lifestyle, ensuring your coverage is perfectly aligned with your needs. We shop 56 A+ rated carriers to find the best rates and the most comprehensive coverage for you. Believe in us to protect your life in Irving. We've been the trusted choice for North Texas for over 30 years because we understand the complexities of the local market. We are your partners in progress.`
    },
    {
      id: 'auto-insurance-irving',
      title: 'Expert Auto Insurance for the Irving Commute',
      content: `Navigating the streets of Irving—from the busy intersections near Las Colinas Boulevard to the high-speed lanes of the President George Bush Turnpike—requires focus and the right auto insurance protection. It's about operational security.

We ensure your auto policy includes strong protection for liability, collision, and comprehensive risks, providing a vital safety net in one of the busiest traffic environments in the country. We also discuss the importance of Uninsured/Underinsured Motorist coverage, which is essential in a major city where many drivers may be underinsured. Susan and her expert team are experts at evaluating the risks of Irving driving and ensuring you have the right limits to protect your assets. We provide the best service by looking out for the specific needs of Irving drivers. Believe in us to protect your commute from the unexpected. We are your partners in progress.`
    },
    {
      id: 'home-insurance-irving',
      title: 'Protecting Your Irving Home from North Texas Risks',
      content: `Your home is your most significant investment. In Irving, where property values are growing and severe weather is a constant threat, having the right homeowners insurance is essential. It's about proactive asset preservation.

We ensure your home policy includes strong protection for windstorm and hail damage, providing a vital safety net during the volatile North Texas storm seasons. We also discuss the importance of "Replacement Cost" coverage for your dwelling and personal property, ensuring you can rebuild or replace your assets if they're destroyed. Susan and her expert team have helped many Irving residents find the perfect balance of protection and value. We provide the best service by being as responsive and flexible as your Irving lifestyle requires. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local Irving insurance partners.`
    },
    {
      id: 'business-insurance-irving',
      title: 'Strategic Business Insurance for Irving Entrepreneurs',
      content: `Irving is a hub of corporate headquarters and international business. If you own a business in Irving, you need an insurance partner who can help you protect your hard work and your future. It's about strategic risk management.

From General Liability and Property insurance to Workers' Compensation and Cyber Liability, we offer a full range of business insurance solutions tailored to the specific needs of Irving companies. We help you identify your risks and build a protection plan that allows you to focus on growing your business. We provide the best service by being your expert guide through the complexities of commercial insurance. Believe in the Rainbow Insurance advantage for your Irving business. We are your partners in professional clarity.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Irving Residents',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands the unique challenges of the Irving market. We've been a part of the local community since 1993, and we've helped our neighbors protect their lives for over 30 years. We are your neighbors.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive insurance for your specific needs and budget. We don't work for a big insurance company; we work for YOU. If your life changes—you buy a new home, start a business, or grow your family—we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners.

Susan and her expert team are dedicated to providing the best service, the best rates, and the best policies because we know your life in Irving is important. Believe in the Rainbow Insurance advantage today and protect your future with the expertise you deserve. We are here for you, now and always. We are your partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "Why should I choose an independent agency in Irving?",
      a: "An independent agency like Rainbow Insurance represents multiple carriers, allowing us to shop the entire market and find the best rates and coverage for you, rather than being limited to a single company's products."
    },
    {
      q: "How can I save money on my insurance in Irving?",
      a: "Bundling your home and auto policies is one of the most effective ways to save. Other discounts may be available for having a security system, a claims-free history, or a good driving record. We'll find every possible discount for you."
    },
    {
      q: "Does my Irving home insurance cover hail damage?",
      a: "Yes, standard homeowners policies in North Texas typically include coverage for wind and hail damage, which is essential given our local weather patterns."
    },
    {
      q: "What types of business insurance do you offer in Irving?",
      a: "We offer a full range of commercial insurance, including General Liability, Property, Workers' Comp, Commercial Auto, and specialized coverages like Cyber Liability and Professional Liability."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Insurance Services",
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
      "name": "Irving"
    },
    "description": "Comprehensive insurance services in Irving. Home, auto, and business protection. We shop 56 carriers for the best rates and service."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop", alt: "Modern residential area in Irving" },
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop", alt: "Professional business environment in Irving" },
    { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop", alt: "Safe transportation in the Irving area" },
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop", alt: "Irving skyline and corporate centers" }
  ];

  return (
    <ProductPage
      title="Irving Insurance Solutions"
      seoTitle="Insurance Irving TX | Best Rates & Local Service | Rainbow Insurance"
      seoDescription="Get the best rates on home, auto, and business insurance in Irving. Susan and her expert team shop 56 carriers for you. Local experts since 1993."
      heroImage="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Irving Insurance Solutions in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Irving is a city of connection, and we're here to help you protect it. At Rainbow Insurance Agency, we specialize in providing comprehensive insurance solutions that protect your home, your vehicles, and your business. Susan and her expert team compare 56 A+ rated carriers to find the perfect policy for your Irving lifestyle."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
