import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function CommercialAutoInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'business-mobility',
      title: 'Protecting Your Business Mobility in Fort Worth',
      content: `In the sprawling and dynamic landscape of North Texas, your vehicles are the literal lifeblood of your business operations. From the nimble delivery vans navigating the busy, historic streets of Downtown Fort Worth to the heavy-duty trucks hauling essential equipment across Tarrant County and the service vehicles visiting clients in Arlington, Mansfield, and Keller, your fleet is the engine of your success. Commercial Auto insurance is the specialized protection that ensures your business stays on the move, even when the unexpected happens on our busy highways like I-30, I-35W, or the Chisholm Trail Parkway. It's about operational resilience in a region where distance is a daily reality. We understand that for many in Fort Worth, your vehicles are your mobile office, your warehouse, and your primary tool for delivering excellence to your customers.

A critical fact that every Fort Worth business owner must understand is that standard personal auto insurance almost always explicitly excludes "business use." If an employee is involved in an accident while driving for work, or if you're using your personal vehicle to transport goods, tools, or equipment, your personal policy will likely provide zero coverage, leaving your business assets exposed. Commercial Auto insurance is specifically designed to fill this dangerous and often overlooked gap, ensuring your business is protected from the massive financial risk of accidents, injuries, and property damage. It's about providing a clear, secure boundary between your personal finances and your professional liabilities.

At Rainbow Insurance Agency, we've been helping Fort Worth businesses protect their fleets and their livelihoods since 1993. Susan and her expert team deeply understand the local driving environment—from the congestion of the DFW metroplex to the specific risks of commercial transportation in North Texas. We don't just provide a generic policy; we help you build a comprehensive protection plan that covers your vehicles, your drivers, and your business's reputation. We are your local advocates for commercial mobility security, ensuring that every mile driven for your company is a mile covered by the best protection available.

We shop 56 A+ rated carriers to find the best rates and the most robust coverage for your specific fleet, no matter the size. Whether you have a single delivery car for a local florist or a large fleet of heavy trucks for a construction firm, we have the expertise to guide you. Believe in us to protect your hard work, your team, and your investment. We've been the trusted choice for Tarrant County for over 30 years because we treat your business like our own. We are your partners in progress, dedicated to keeping the wheels of Fort Worth business turning safely and securely.`
    },
    {
      id: 'towing-and-recovery',
      title: 'Towing and Recovery Insurance: Specialized Protection',
      content: `Fort Worth's busy roads mean that towing and recovery businesses are always in demand. However, this industry faces unique risks that standard commercial auto policies may not fully address.

We offer specialized "On-Hook" and "Garagekeepers" coverage for towing operations. On-Hook insurance protects the vehicles you are towing from damage while they are in your care, while Garagekeepers insurance protects those vehicles while they are stored at your lot.

Susan and her expert team are experts at navigating the complex requirements for towing businesses in North Texas. We provide the best service by ensuring your specialized equipment and your clients' property are fully protected, allowing you to focus on the road.`
    },
    {
      id: 'food-truck-insurance',
      title: 'Food Truck Insurance: Protecting Your Mobile Kitchen',
      content: `The food truck scene in Fort Worth is thriving, from the Clearfork Food Park to the various pop-up events around the city. A food truck is a unique combination of a commercial vehicle and a professional kitchen, requiring a specialized insurance approach.

Your policy needs to cover not only the vehicle itself but also the expensive cooking equipment, inventory, and the liability risks associated with serving food to the public. We can help you find comprehensive food truck insurance that covers your mobile kitchen from bumper to bumper.

At Rainbow Insurance, we love supporting local entrepreneurs. We provide the best service by helping you understand the specific health and safety requirements for food trucks in Tarrant County and ensuring your insurance meets those standards. Believe in us to protect your culinary dream on wheels.`
    },
    {
      id: 'cargo-insurance',
      title: 'The Importance of Cargo Insurance',
      content: `If your business involves transporting goods for others or moving your own valuable inventory, commercial auto insurance alone may not be enough. Cargo insurance is a critical addition that protects the items you are carrying from theft, damage, or loss while in transit. In Fort Worth, a major logistics hub, this coverage is essential for many businesses. It's about protecting your payload.

Whether you're hauling construction materials, retail inventory, or specialized equipment, the financial impact of a lost or damaged load can be significant. Cargo insurance provides the funds needed to replace the goods and maintain your reputation with your clients. Susan and her expert team can help you find affordable cargo insurance solutions that fit your business's specific needs.

We provide the best service by helping you understand your potential exposure and choosing a policy that offers the most robust protection. Believe in the Rainbow Insurance advantage for your cargo and your peace of mind. We are your partners in progress. We also discuss "Inland Marine" coverage for tools and equipment that are frequently moved between job sites.`
    },
    {
      id: 'rideshare-delivery',
      title: 'Commercial Auto for Rideshare and Delivery Apps',
      content: `With the explosion of rideshare and delivery apps in Fort Worth, many individuals are using their personal vehicles for business purposes. It's important to understand that standard personal auto policies often have "livery" exclusions that can leave you unprotected while you're "on the clock" for an app. It's about modern mobility protection.

We offer specialized commercial auto solutions for rideshare and delivery drivers that fill the gaps left by personal policies and the limited coverage provided by the apps themselves. This ensures you are protected from the moment you turn on the app until you finish your last delivery. Susan and her expert team can help you find affordable coverage that keeps you legal and protected.

We provide the best service by staying ahead of the latest trends in the gig economy and helping you choose a policy that provides the most comprehensive protection. Believe in the Rainbow Insurance advantage for your modern career. We are your partners in progress. We also discuss how "Gap Insurance" can be important for newer vehicles used for commercial purposes.`
    },
    {
      id: 'coverage-details',
      title: 'What Does Commercial Auto Insurance Cover?',
      content: `Commercial Auto insurance is a comprehensive policy designed to protect your business from the unique risks of the road. Understanding the scope of this coverage is essential for any Fort Worth owner. It's about total fleet defense.

Key components of coverage include:
1. Liability Protection: Protects your business if an employee accidentally injures someone or damages their property while driving for work. It covers legal defense costs and medical payments. This is your most important protection. We also look for "Combined Single Limit" (CSL) options for greater flexibility.
2. Physical Damage Coverage: Protects your vehicles from accidents (Collision) and non-collision events like theft, fire, vandalism, and storm damage (Comprehensive). In Fort Worth, where hail and theft are real risks, this is critical. We also discuss "Agreed Value" vs. "Actual Cash Value" for specialized vehicles.
3. Uninsured/Underinsured Motorist: Protects your business if one of your drivers is hit by someone who doesn't have insurance or doesn't have enough to cover the injuries or damage. This is a vital protection in the DFW area.
4. Medical Payments: Covers medical expenses for your drivers and passengers if they're injured in an accident, regardless of who is at fault. This provides immediate care without the need for a lawsuit.
5. Hired and Non-Owned Auto: Protects your business when you or your employees are driving vehicles that the business doesn't own (like rental cars or personal vehicles used for work). This is a common gap in many business insurance portfolios.

At Rainbow Insurance, we help you identify the specific limits and deductibles you need based on the size and usage of your vehicles. We also look for policies that include "Towing and Labor" and "Rental Reimbursement" to keep your business moving after an accident. We provide the best service by ensuring your coverage is thorough and affordable. Believe in the Rainbow Insurance advantage for your business's mobility. We cover the gaps that others miss. We are your commercial auto experts. We also review your driver list regularly to ensure your rates are as low as possible.`
    },
    {
      id: 'driver-safety',
      title: 'Driver Safety: Protecting Your Team and Your Bottom Line',
      content: `At Rainbow Insurance Agency, we believe that a safe driver is a protected driver. Taking proactive steps to improve your team's safety can not only prevent an accident but also lead to significant discounts on your insurance premiums. It's about proactive preservation.

We recommend the following for any Fort Worth business:
- Implement a Driver Safety Program: Regular training and safety protocols can significantly reduce accidents and lower your insurance costs.
- Check MVRs Regularly: Reviewing the Motor Vehicle Records (MVRs) of your drivers ensures you have safe and responsible people behind the wheel.
- Maintain Your Fleet: Regular maintenance of your vehicles prevents mechanical failures and accidents.
- Use Telematics: Consider using GPS and telematics systems to monitor driver behavior and improve efficiency.

Susan and her expert team are experts at finding every possible discount for our clients. We shop 56 carriers to find the absolute best rates in North Texas. We provide the best service by being your partner in safety and savings. Believe in us to protect your fleet and your budget. We are your partners in progress.`
    },
    {
      id: 'specialized-fleets',
      title: 'Specialized Fleets: From Delivery to Heavy Hauling',
      content: `Every business in Fort Worth has different transportation needs. A florist in Sundance Square needs a vastly different policy than a construction firm in North Richland Hills or a trucking company operating across the DFW metroplex. It's about specialized resilience.

We offer tailored solutions for:
- Delivery and Courier Services: Including high-frequency urban driving.
- Contractors and Trades: Protecting your trucks and the equipment they carry.
- Heavy Trucking and Hauling: Including specialized liability and cargo coverage.
- Passenger Transportation: Including limousines and shuttle services.
- Sales and Professional Fleets: Protecting your team while they're on the road to see clients.

Susan and her expert team have helped many local businesses find the perfect balance of protection and value for their specific fleets. We provide the best service by being as responsive and flexible as your business requires. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local commercial auto insurance partners. We are your advocates for a mobile and successful business.`
    },
    {
      id: 'seasonal-usage',
      title: 'Seasonal Usage and Fleet Flexibility',
      content: `Many businesses in Fort Worth have seasonal fluctuations in their vehicle usage. For example, a landscaping company may have a large fleet in the summer but only a few vehicles on the road in the winter.

We can help you find policies that offer "Lay-up" coverage or flexible premium structures for seasonal vehicles. This allows you to maintain essential comprehensive coverage while the vehicle is stored, while significantly reducing your liability premiums during the off-season.

Susan and her expert team are experts at managing fleet flexibility for our clients. We provide the best service by ensuring you're never paying for more coverage than you actually need. Believe in the Rainbow Insurance advantage for a fleet that adapts to your business's rhythm.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Fort Worth Fleets',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands the critical importance of your vehicles to your business's success and your family's livelihood. We've been a deeply rooted part of the local business community since 1993, and we've helped our neighbors protect their fleets for over 30 years. We are your neighbors, and we share your commitment to the prosperity of Fort Worth.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive commercial auto insurance for your specific fleet, your industry, and your budget. We don't work for a big insurance company; we work for YOU. If your business grows, you add new vehicles, or you expand your service area across the DFW metroplex, we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners, always looking for ways to save you money while improving your protection.

Susan and her expert team are dedicated to providing a "tight professional look" to your business's insurance portfolio. We provide the best service, the best rates, and the best policies because we know your fleet is your lifeline. Believe in the Rainbow Insurance advantage today and protect your mobility with the expertise and local care you deserve. We are here for you, now and always, as your trusted partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "Does my personal auto insurance cover my business use?",
      a: "Generally, no. Personal auto policies specifically exclude 'business use' or 'livery' services. If you use your vehicle for work-related tasks, you need a commercial auto policy or a specific endorsement to ensure you're fully covered."
    },
    {
      q: "What is 'Hired and Non-Owned Auto' coverage?",
      a: "This coverage protects your business if an employee is involved in an accident while driving a vehicle the business doesn't own, such as their personal car or a rental car, for business purposes. It's a vital and often overlooked protection for many Fort Worth companies."
    },
    {
      q: "How can I lower my commercial auto premiums?",
      a: "Maintaining a clean driving record for all your drivers, implementing a formal safety program, and choosing higher deductibles can all help. However, the most effective way is to have an independent agent like Rainbow Insurance shop 56 carriers for the best rates."
    },
    {
      q: "Does commercial auto insurance cover the equipment in my truck?",
      a: "Commercial auto insurance covers the vehicle itself. To cover the tools, equipment, or inventory inside, you typically need an 'Inland Marine' or 'Cargo' policy. Susan and her expert team can help you bundle these for complete protection."
    },
    {
      q: "What is 'On-Hook' coverage for tow trucks?",
      a: "On-Hook coverage is a specialized insurance for towing businesses that protects the vehicle being towed from damage while it is in transit. It is a critical component of a comprehensive towing insurance plan."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Auto Insurance",
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
    "description": "Cheap commercial auto insurance in Fort Worth. Protect your business fleet, trucks, and delivery vans. We shop 56 carriers for the best commercial vehicle rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop", alt: "Commercial delivery truck in Fort Worth" },
    { src: "https://images.unsplash.com/photo-1501700493717-9ae711cba0c2?w=800&h=600&fit=crop", alt: "Fleet of service vehicles in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1586333247342-2c59b143f752?w=800&h=600&fit=crop", alt: "Heavy duty truck on a North Texas highway" },
    { src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth business fleets" }
  ];

  return (
    <ProductPage
      title="Fort Worth Commercial Auto Insurance"
      seoTitle="Commercial Auto Insurance Fort Worth | Best Fleet Rates & Service"
      seoDescription="Protect your business fleet with the best rates on commercial auto insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1533558701576-23c65e926363?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Commercial Auto Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Your vehicles are your business, and we're here to make sure they're protected. At Rainbow Insurance Agency, we help you safeguard your fleet, your drivers, and your liability. Susan and her expert team compare 56 A+ rated carriers to find the perfect policy for your company."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
