import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function MobileHomeInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'mobile-home-basics',
      title: 'Specialized Protection for Fort Worth Mobile and Manufactured Homes',
      content: `Mobile and manufactured homes offer a fantastic and affordable way to own a home in the Fort Worth area. Whether you're located in a quiet community in Haltom City, a family-friendly park in North Richland Hills, or on your own land in rural Tarrant County, your home is your most important asset. However, standard homeowners insurance isn't designed for the unique construction and risks associated with mobile homes. You need specialized mobile home insurance that provides the right protection for your specific dwelling. At Rainbow Insurance Agency, we've been helping Fort Worth residents protect their mobile homes since 1993.

We understand that mobile homes are built differently than site-built homes, and they face different challenges, especially during the severe weather seasons in North Texas. High winds, hail, and heavy rain can cause significant damage to a manufactured home if it's not properly insured. Susan and her expert team are experts at evaluating these risks and finding the most robust coverage for your specific home and location. We don't just provide a policy; we help you build a comprehensive protection plan that covers your home, your belongings, and your liability.

We are your local advocates for manufactured home security. We take the time to learn about your home's age, its manufacturer, and its installation, ensuring your coverage is perfectly aligned with its value. We shop 56 A+ rated carriers to find the best rates and the most comprehensive coverage for your specific needs. Believe in us to protect your home and your future. We've been the trusted choice for Tarrant County for over 30 years because we understand the complexities of the local market. We are your partners in progress.`
    },
    {
      id: 'coverage-details',
      title: 'What Does Mobile Home Insurance Cover?',
      content: `A comprehensive mobile home insurance policy from Rainbow Insurance Agency typically includes several key coverages designed to protect your total investment. It's about strategic asset preservation.

- Dwelling Coverage: Protects the structure of your mobile home from risks like fire, windstorm, hail, and vandalism. We look for policies that offer "Replacement Cost" or "Agreed Value" coverage so you can rebuild or replace your home if it's a total loss.
- Other Structures: Covers detached buildings on your property, such as sheds, carports, or fences.
- Personal Property: Protects your furniture, electronics, clothing, and other belongings. We recommend "Replacement Cost" coverage for your belongings to ensure you can buy new items if yours are destroyed.
- Personal Liability: Protects you if someone is injured on your property or if you accidentally damage someone else's property. This is vital for your financial security.
- Medical Payments to Others: Covers minor medical expenses for guests injured in your home, regardless of fault.

At Rainbow Insurance Agency, we help you choose the right limits for each of these coverages. We shop 56 A+ rated carriers to find the best rates and the most robust protection for your specific home. We provide the best service by ensuring you aren't left exposed to the "hidden" risks of mobile home ownership. Believe in the Rainbow Insurance advantage for your home's total protection. We are your partners in professional clarity.`
    },
    {
      id: 'north-texas-weather',
      title: 'Protecting Your Home from Severe North Texas Weather',
      content: `Living in Fort Worth means dealing with specific environmental risks. Severe thunderstorms, hail, and even the occasional tornado are part of life in North Texas. Mobile homes are particularly vulnerable to high winds and hail damage. It's about proactive risk management.

We ensure your mobile home policy includes strong protection for wind and hail damage, providing a vital safety net during the volatile spring and fall seasons. We also discuss the importance of "Flood Insurance," which is typically not included in a standard mobile home policy. Susan and her expert team are experts at evaluating the weather risks for different parts of Tarrant County and ensuring you have the right coverage to protect your home from the elements. We provide the best service by looking out for the specific needs of Fort Worth's mobile home owners. Believe in us to protect your home from the unexpected. We are your partners in progress.`
    },
    {
      id: 'liability-and-safety',
      title: 'Liability Protection and Safety Discounts',
      content: `Liability is a major concern for any homeowner. If someone is injured on your property, the resulting lawsuits can be devastating. We help you choose the right liability limits to protect your personal assets and your future. It's about legal security.

We also look for ways to save you money on your mobile home insurance. Many carriers offer discounts for having a security system, being a non-smoker, or having a claims-free history. We also discuss the importance of proper tie-downs and skirting, which can not only protect your home from wind damage but also lead to lower insurance premiums. Susan and her expert team have helped many local residents find the perfect balance of protection and value. We provide the best service by being as responsive and flexible as your life requires. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local mobile home insurance partners.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Mobile Home Owners',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands the unique challenges of the Fort Worth mobile home market. We've been a part of the local community since 1993, and we've helped our neighbors protect their homes for over 30 years. We are your neighbors.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive mobile home insurance for your specific home and budget. We don't work for a big insurance company; we work for YOU. If your life changes—you renovate your home or you move to a new location—we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners.

Susan and her expert team are dedicated to providing the best service, the best rates, and the best policies because we know your home is your sanctuary. Believe in the Rainbow Insurance advantage today and protect your mobile home with the expertise you deserve. We are here for you, now and always. We are your partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "Is mobile home insurance different from standard homeowners insurance?",
      a: "Yes. Mobile homes are built differently and face different risks, so they require a specialized policy that addresses their unique construction and vulnerabilities."
    },
    {
      q: "Does my mobile home insurance cover flood damage?",
      a: "Generally, no. Standard mobile home policies do not cover flood damage. If your home is in a flood-prone area of Fort Worth, you may need a separate flood insurance policy. We can help you assess your risk."
    },
    {
      q: "How much does mobile home insurance cost in Fort Worth?",
      a: "The cost depends on the age, value, and location of your home, as well as your driving record and claims history. We shop 56 carriers to find the absolute best rates for you."
    },
    {
      q: "What is 'Replacement Cost' coverage for a mobile home?",
      a: "This coverage pays to replace your home with a new one of similar kind and quality if it's destroyed by a covered loss, rather than just paying the depreciated value."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile Home Insurance",
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
    "description": "Cheap mobile home insurance in Fort Worth. Protect your manufactured home, belongings, and liability. We shop 56 carriers for the best rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop", alt: "Modern manufactured home in a Fort Worth community" },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop", alt: "Residential area in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop", alt: "Safe and secure home in North Texas" },
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop", alt: "Professional insurance advice for Fort Worth homeowners" }
  ];

  return (
    <ProductPage
      title="Fort Worth Mobile Home Insurance"
      seoTitle="Mobile Home Insurance Fort Worth | Manufactured Home Protection"
      seoDescription="Protect your mobile home with the best rates on mobile home insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Mobile Home Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Your mobile home is your sanctuary. At Rainbow Insurance Agency, we help you protect your dwelling, your belongings, and your liability. Susan and her expert team compare 56 A+ rated carriers to find the perfect policy for your lifestyle."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
