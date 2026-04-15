import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function FloodInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'rising-waters',
      title: 'Protecting Your Home from Rising Waters in Fort Worth',
      content: `In Fort Worth, we're no strangers to heavy rain. From the intense spring thunderstorms that can dump inches of water in a matter of hours to the remnants of tropical systems that move inland from the Gulf, the risk of flooding is a real and growing concern for many Tarrant County residents. Whether you live near the Trinity River, a local creek like Mary's Creek or Sycamore Creek, or simply in an area with poor drainage in the older neighborhoods of the Near Southside or Riverside, flood insurance is the essential protection that ensures your home and your belongings are safe from the devastating impact of rising water. It's about environmental resilience in a city that's constantly growing.

A critical fact that every Fort Worth homeowner must understand is that standard homeowners insurance almost always excludes "flood" damage. If a heavy rain causes water to rise from the ground and enter your home, your standard policy will provide zero coverage. Flood insurance is specifically designed to fill this dangerous gap, ensuring that a single storm event doesn't lead to financial ruin. It's about ensuring your family's security in the face of unpredictable Texas weather.

At Rainbow Insurance Agency, we've been helping Fort Worth families protect their homes from flood risks since 1993. Susan and her expert team understand the local topography and the specific flood zones of North Texas. We don't just provide a policy; we help you build a comprehensive protection plan that covers your dwelling and your personal property. We are your local advocates for flood security, your neighbors in the storm, and your partners in progress.`
    },
    {
      id: 'urban-flooding-fort-worth',
      title: 'Urban Flooding: The Hidden Risk in Tarrant County',
      content: `Many people in Fort Worth believe they don't need flood insurance because they aren't near a river or a designated flood plain. However, "urban flooding" is a major risk in our city. As more concrete and asphalt are laid down for new developments in areas like North Fort Worth and Alliance, the natural drainage of the land is altered.

During intense downpours, our city's storm drains can become overwhelmed, causing water to back up into streets and eventually into homes. This type of flooding can happen anywhere, regardless of your FEMA flood zone.

Susan and her expert team provide the best service by helping you understand these hidden risks. We look at the history of your neighborhood and the local drainage patterns to find the most affordable flood protection. Believe in the Rainbow Insurance advantage for your urban home's security. We are your partners in local risk assessment.`
    },
    {
      id: 'excess-flood-protection',
      title: 'Excess Flood Insurance: Protection for High-Value Homes',
      content: `The National Flood Insurance Program (NFIP) has a maximum limit of $250,000 for residential buildings. For many homeowners in Fort Worth—especially in neighborhoods like Tanglewood, Westover Hills, or Mira Vista—this limit is simply not enough to cover the full value of their home.

"Excess Flood Insurance" provides an additional layer of protection that sits on top of your primary NFIP or private policy. It ensures that if your home is a total loss due to flooding, you have the resources to rebuild to the same high standard.

Susan and her expert team are experts at coordinating these complex layers of protection. We provide the best service by ensuring your high-value assets are fully protected from the ground up. Believe in the Rainbow Insurance advantage for your total property security. We are your partners in comprehensive protection.`
    },
    {
      id: 'flood-mitigation-tips',
      title: 'Local Mitigation: Reducing Your Risk in North Texas',
      content: `While insurance is your financial safety net, taking steps to mitigate your flood risk can lower your premiums and protect your home from minor events. In Fort Worth, simple steps can make a big difference.

We recommend ensuring your gutters and downspouts are clear and directed away from your foundation. If you live in a low-lying area, consider installing a sump pump with a battery backup. For those near creeks, landscaping that encourages drainage away from the home is essential.

At Rainbow Insurance, we provide the best service by being your proactive partner in home safety. We help you identify these mitigation opportunities and find carriers that offer discounts for your efforts. Believe in us to help you build a more resilient home. We are your partners in local home protection.`
    },
    {
      id: 'coverage-details',
      title: 'What Does Flood Insurance Cover?',
      content: `Flood insurance is a specialized policy that provides two main types of protection. Understanding the scope of this coverage is essential for any Fort Worth resident. It's about total property defense.

Key components of coverage include:
1. Building Property Coverage: Protects the physical structure of your home, including the foundation, electrical and plumbing systems, central air conditioning, and built-in appliances. It also covers detached garages.
2. Personal Property Coverage: Protects your belongings inside the home—furniture, electronics, clothing, and appliances. We look for policies that offer the best value for your personal items.
3. Debris Removal: Covers the significant cost of removing mud and debris from your property after a flood event.
4. Mitigation Equipment: Often covers the cost of sandbags and other materials used to prevent water from entering your home during a flood threat.

At Rainbow Insurance, we help you identify the specific limits you need based on the value of your home and your belongings. We look for policies that offer the most flexible terms and the fastest claims processing. We provide the best service by ensuring your flood coverage is thorough and affordable. Believe in the Rainbow Insurance advantage for your home's stability. We cover the gaps that others miss. We are your flood insurance experts.`
    },
    {
      id: 'flood-zones',
      title: 'Understanding Fort Worth Flood Zones: Are You at Risk?',
      content: `Every property in Fort Worth is in a flood zone, but the level of risk varies significantly. The Federal Emergency Management Agency (FEMA) maps these zones to help determine insurance requirements and rates. It's about strategic risk management.

- High-Risk Zones (Special Flood Hazard Areas): If your home is in a zone starting with A or V, you have a 1 in 4 chance of flooding during a 30-year mortgage. If you have a federally backed mortgage, flood insurance is required.
- Moderate-to-Low Risk Zones (Preferred Risk Areas): Even if you're not in a high-risk zone, you're still at risk. In fact, more than 25% of flood claims occur in these "low-risk" areas. In Fort Worth, where urban flooding from overwhelmed drainage systems is common, this risk is real.

Susan and her expert team are experts at reading flood maps and helping you understand your specific risk. We can often find "Preferred Risk Policies" for homes in low-risk areas that provide massive protection for a very small annual premium. We provide the best service by being thorough and detail-oriented. Believe in us to protect the life you've built. We are your partners in progress.`
    },
    {
      id: 'private-vs-nfip',
      title: 'Private Flood Insurance: A Modern Alternative',
      content: `For many years, the NFIP was the only option for flood insurance. However, in recent years, a robust private flood insurance market has emerged in Texas. Private policies often offer higher limits, broader coverage (such as "Loss of Use"), and more competitive rates than the government program. It's about financial optimization.

We shop 56+ A+ rated carriers, including several private flood specialists, to find the absolute best rates for your specific property. We often find that private flood insurance can save our clients hundreds of dollars per year while providing superior protection. Susan and her expert team have helped many local residents find the perfect balance of protection and value. We provide the best service by being as responsive and flexible as your life requires. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local flood insurance partners. We are your advocates for a secure future.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Flood Protection',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands the unique environmental challenges of Fort Worth. We've been a part of the local community since 1993, and we've helped our neighbors protect their homes from every type of storm for over 30 years. We are your neighbors, and your home's safety is our mission.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive flood insurance for your specific home and budget. We don't work for a big insurance company; we work for YOU. If your life changes—you buy a new home or your area's flood maps are updated—we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners, dedicated to providing the personal touch that only a local agency can offer.

Susan and her expert team are dedicated to providing a "tight professional look" to your family's insurance portfolio. We provide the best service, the best rates, and the best policies because we know your home is your sanctuary. Believe in the Rainbow Insurance advantage today and protect your home with the expertise you deserve. We are here for you, now and always. We are your partners in prosperity, your advocates in protection, and your neighbors in progress.`
    }
  ];

  const faqs = [
    {
      q: "Doesn't my homeowners insurance cover flooding?",
      a: "No. Standard homeowners policies specifically exclude damage caused by rising water from the ground. You need a separate flood insurance policy for this protection."
    },
    {
      q: "Is there a waiting period for flood insurance?",
      a: "Yes. For NFIP policies, there is typically a 30-day waiting period before the coverage becomes effective. Some private flood policies have shorter waiting periods (often as little as 10-14 days). This is why it's vital to get covered before the storm clouds gather!"
    },
    {
      q: "Do I need flood insurance if I'm not in a high-risk zone?",
      a: "Yes. More than 25% of all flood claims occur in moderate-to-low risk areas. In Fort Worth, urban flooding from heavy rain can happen anywhere. Preferred Risk Policies are very affordable and provide essential peace of mind."
    },
    {
      q: "How much does flood insurance cost in Fort Worth?",
      a: "For homes in low-risk areas, a Preferred Risk Policy can cost as little as $500 per year. For homes in high-risk zones, the cost will be higher. We shop 56 carriers and the NFIP to find the absolute best rates for your property."
    },
    {
      q: "What is the difference between NFIP and Private Flood insurance?",
      a: "The NFIP is a government-backed program with set limits and rates. Private flood insurance is offered by private companies and often provides higher limits, broader coverage, and more competitive rates for certain properties."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Flood Insurance",
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
    "description": "Cheap flood insurance in Fort Worth. Protect your home from rising water and Texas storms. We shop 56 carriers and NFIP for the best rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop", alt: "Heavy rain and potential flooding in a Fort Worth neighborhood" },
    { src: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&h=600&fit=crop", alt: "Storm clouds over Tarrant County" },
    { src: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth homeowners during storm season" },
    { src: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop", alt: "Protecting your home from rising water in North Texas" }
  ];

  return (
    <ProductPage
      title="Fort Worth Flood Insurance"
      seoTitle="Flood Insurance Fort Worth | Best Rates & NFIP Filing"
      seoDescription="Protect your home from rising water with the best rates on flood insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Flood Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Water is a powerful force, but your protection can be stronger. At Rainbow Insurance Agency, we provide the best Fort Worth Flood Insurance to help you safeguard your home from the devastating impact of flooding. Susan and her expert team compare 56 A+ rated carriers and the NFIP to find the perfect policy for your family."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
