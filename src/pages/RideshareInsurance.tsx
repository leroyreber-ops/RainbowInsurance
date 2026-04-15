import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function RideshareInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'rideshare-basics',
      title: 'Essential Rideshare Protection for Fort Worth Drivers',
      content: `Driving for Uber or Lyft in Fort Worth is a great way to earn extra income, but it also introduces unique insurance risks that a standard personal auto policy doesn't cover. Whether you're navigating the busy streets of Downtown, picking up passengers at DFW Airport, or driving fans to a game at AT&T Stadium, you need specialized rideshare insurance to protect yourself and your vehicle. At Rainbow Insurance Agency, we've been helping Fort Worth drivers since 1993, and we understand the complexities of the rideshare economy.

The most important thing to know is that your personal auto insurance policy likely has an exclusion for "business use" or "livery" services. This means that if you're logged into your rideshare app and waiting for a request, or if you're on your way to pick up a passenger, your personal policy may not provide coverage. While Uber and Lyft provide some insurance, there are significant gaps, especially during Period 1 (app on, waiting for a request). Rideshare insurance is the bridge that fills these gaps, ensuring you're protected from the moment you turn on the app until you log off.

Susan and her expert team are experts at navigating the different "periods" of rideshare driving and ensuring you have the right coverage for each one. We don't just sell you a policy; we help you understand your risks and build a protection plan that keeps you on the road and earning safely. We are your local advocates for rideshare security. We take the time to explain how your coverage interacts with the rideshare company's policy, providing you with total clarity and peace of mind.`
    },
    {
      id: 'coverage-gaps',
      title: 'Understanding the Rideshare Insurance Gaps',
      content: `Rideshare companies typically divide your driving time into three distinct periods, each with different insurance implications. It's about strategic risk management.

- Period 1: App is on, waiting for a ride request. This is where the biggest gap exists. Your personal policy likely won't cover you, and the rideshare company's coverage is often minimal (liability only).
- Period 2: Request accepted, on your way to pick up a passenger. The rideshare company's full coverage usually kicks in here, but you may still want your own policy to cover your vehicle's physical damage.
- Period 3: Passenger is in the vehicle. This is when the rideshare company's maximum coverage is active, including high liability limits and uninsured/underinsured motorist protection.

At Rainbow Insurance Agency, we help you find a rideshare endorsement or a specialized policy that provides seamless protection across all three periods. We shop 56 A+ rated carriers to find the best rates and the most comprehensive coverage for your specific driving habits and vehicle. We provide the best service by ensuring you aren't left exposed during any part of your shift. Believe in the Rainbow Insurance advantage for your rideshare business. We are your partners in professional clarity.`
    },
    {
      id: 'dfw-airport-coverage',
      title: 'Specialized Coverage for DFW and Love Field Airport Pickups',
      content: `Airport runs are a major part of the rideshare business in North Texas. Navigating the complex traffic patterns and security requirements at DFW International Airport and Dallas Love Field requires focus and the right insurance protection. It's about operational security.

Many personal auto policies explicitly exclude coverage for airport pickups and drop-offs if you're using your vehicle for hire. We ensure your rideshare policy specifically includes coverage for these high-traffic areas, protecting you from the increased risk of accidents and liability claims. Susan and her expert team are experts at evaluating the risks of airport driving and ensuring you have the right limits to protect your livelihood. We provide the best service by looking out for the specific needs of Fort Worth's professional drivers. Believe in us to protect your business from the unexpected. We are your partners in progress.`
    },
    {
      id: 'vehicle-protection',
      title: 'Protecting Your Vehicle: Comprehensive and Collision',
      content: `Your vehicle is your most important business asset. If it's damaged in an accident while you're driving for a rideshare service, you need to know that you can get it back on the road quickly. It's about asset preservation.

Standard personal auto policies may not pay for repairs to your vehicle if the accident occurred while the rideshare app was on. We look for rideshare policies that offer "Gap Coverage" or specific endorsements that extend your personal comprehensive and collision coverage to your rideshare activities. This ensures that you're protected from the financial impact of a total loss or expensive repairs. Susan and her expert team have helped many local drivers find the perfect balance of protection and value. We provide the best service by being as responsive and flexible as your driving schedule requires. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local rideshare insurance partners.`
    },
    {
      id: 'liability-protection',
      title: 'Maximum Liability Protection for You and Your Passengers',
      content: `Liability is a major concern for any professional driver. If you're involved in an accident that injures a passenger or another driver, the resulting lawsuits can be devastating. It's about legal security.

While rideshare companies provide high liability limits during Period 3, you still need your own protection for Period 1 and to supplement their coverage if a claim exceeds their limits. We help you choose the right liability limits to protect your personal assets and your future earnings. We also discuss the importance of Uninsured/Underinsured Motorist coverage, which is vital in a busy metroplex like DFW where many drivers may be underinsured. We provide the best service by ensuring you have a "tight professional look" to your liability protection. Believe in the Rainbow Insurance advantage for your peace of mind. We are your advocates for a secure driving career.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Rideshare Drivers',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands the unique challenges of the Fort Worth rideshare market. We've been a part of the local community since 1993, and we've helped our neighbors protect their businesses for over 30 years. We are your neighbors.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive rideshare insurance for your specific vehicle and budget. We don't work for a big insurance company; we work for YOU. If your driving habits change—you start driving more hours or you get a new vehicle—we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners.

Susan and her expert team are dedicated to providing the best service, the best rates, and the best policies because we know your vehicle is your livelihood. Believe in the Rainbow Insurance advantage today and protect your rideshare business with the expertise you deserve. We are here for you, now and always. We are your partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "Doesn't Uber/Lyft provide insurance for me?",
      a: "Yes, but only during certain periods of your shift. There are significant gaps, especially when the app is on but you haven't accepted a request yet (Period 1). Rideshare insurance fills these gaps and protects your personal assets."
    },
    {
      q: "Will my personal auto insurance cover me while I'm driving for a rideshare?",
      a: "Generally, no. Most personal auto policies have a 'business use' exclusion that prevents coverage for rideshare activities. You need a specific rideshare endorsement or policy to be fully protected."
    },
    {
      q: "How much does rideshare insurance cost in Fort Worth?",
      a: "Rideshare endorsements are often very affordable, sometimes adding only a small amount to your monthly premium. The cost depends on your vehicle, driving record, and the carrier. We shop 56 carriers to find the absolute best rates for you."
    },
    {
      q: "Do I need rideshare insurance if I only drive a few hours a week?",
      a: "Yes. Even if you only drive occasionally, you are still exposed to the same risks. One accident during Period 1 without the right coverage could be financially devastating."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Rideshare Insurance",
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
    "description": "Cheap rideshare insurance in Fort Worth for Uber and Lyft drivers. Protect your vehicle, your passengers, and your livelihood. We shop 56 carriers for the best rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=800&h=600&fit=crop", alt: "Rideshare driver navigating Fort Worth streets" },
    { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop", alt: "Modern vehicle used for rideshare services" },
    { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop", alt: "Safe transportation in the DFW metroplex" },
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop", alt: "Professional insurance advice for Fort Worth drivers" }
  ];

  return (
    <ProductPage
      title="Fort Worth Rideshare Insurance"
      seoTitle="Rideshare Insurance Fort Worth | Uber & Lyft Driver Protection"
      seoDescription="Protect your rideshare business with the best rates on rideshare insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1533558701576-23c65e926363?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Rideshare Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Driving for a rideshare service is a smart way to earn, but it requires smart protection. At Rainbow Insurance Agency, we help you bridge the gap between your personal policy and the rideshare company's coverage. Susan and her expert team compare 56 A+ rated carriers to find the perfect policy for your driving career."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
