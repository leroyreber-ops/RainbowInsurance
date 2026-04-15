import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function UmbrellaInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'extra-protection',
      title: 'The Ultimate Safety Net: Why You Need an Umbrella in Fort Worth',
      content: `In a litigious world, your standard auto and homeowners insurance policies may not be enough to protect your family's financial future. A single major accident, a serious injury on your property, or a complex lawsuit can quickly exceed the liability limits of your primary policies, leaving your personal assets—your home, your savings, and your future earnings—vulnerable. Umbrella insurance is the essential extra layer of protection that sits on top of your other policies, providing a massive safety net for the unexpected. It's about total financial resilience in our growing North Texas community.

Think of your standard policies as your primary defense. They cover the most common risks. But when a "catastrophic" event occurs—like a multi-car accident on I-35W or I-30, or a severe injury at your backyard pool in Westover Hills or Mira Vista—the costs can easily reach into the millions. Without an umbrella policy, you would be personally responsible for any amount over your primary policy's limit. Umbrella insurance ensures that if the unthinkable happens, you have the resources to defend yourself and protect your legacy. It's about ensuring your family's security for generations to come.

At Rainbow Insurance Agency, we've been helping Fort Worth families build robust protection plans since 1993. Susan and her expert team understand that true peace of mind comes from knowing you're covered for the "worst-case scenario." We don't just provide a policy; we help you find an affordable umbrella plan that extends your liability protection by $1 million, $2 million, or even $5 million or more. We are your local advocates for comprehensive financial security, your neighbors in protection, and your partners in progress.

We shop 56 A+ rated carriers to find the best rates and the most seamless integration with your existing insurance. Whether you're a young professional, a growing family, or a retiree, we have the expertise to guide you. Believe in us to provide the ultimate protection for your hard work and your future. We've been the trusted choice for Tarrant County for over 30 years because we look at the big picture of your life. We are your partners in progress.`
    },
    {
      id: 'uninsured-umbrella',
      title: 'Uninsured/Underinsured Umbrella: Protecting Yourself from Others',
      content: `Many people in Fort Worth don't realize that an umbrella policy can also protect *you* if you are injured by someone who doesn't have enough insurance. This is called an Uninsured/Underinsured Motorist (UM/UIM) Umbrella.

If you are involved in a serious accident caused by a driver with minimal coverage, your standard UM/UIM limits might not be enough to cover your medical bills and lost wages. A UM/UIM umbrella extension provides an extra layer of protection for you and your family, ensuring you have the resources to recover even if the other driver is irresponsible.

Susan and her expert team are experts at finding carriers that offer this critical "self-protection" feature. We provide the best service by ensuring your umbrella policy works both ways—protecting you from others' claims and protecting you from others' lack of insurance. Believe in the Rainbow Insurance advantage for your total family security.`
    },
    {
      id: 'rental-property-umbrella',
      title: 'Umbrella Protection for Fort Worth Landlords',
      content: `If you own rental properties in Fort Worth—whether it's a duplex in the Near Southside or a single-family home in Tanglewood—your liability risk is significantly higher. A tenant or their guest could be injured on your property, leading to a lawsuit that exceeds your landlord policy's limits.

An umbrella policy is an essential tool for landlords. It provides an extra layer of protection across all your properties, safeguarding your personal assets and your real estate investments from the high cost of a major claim.

Susan and her expert team provide the best service by helping you coordinate your landlord policies with a robust umbrella. We ensure you have the coverage you need to grow your real estate portfolio with confidence. Believe in the Rainbow Insurance advantage for your investment security. We are your partners in property protection.`
    },
    {
      id: 'social-media-liability',
      title: 'Social Media and Personal Injury: Liability in the Digital Age',
      content: `In today's world, a single post on social media can lead to a claim of libel, slander, or invasion of privacy. Standard homeowners policies often have limited coverage for these "personal injury" risks.

Umbrella insurance provides much broader protection for these non-physical liability claims. If you or a family member is accused of disparaging someone online, your umbrella policy provides your legal defense and covers any resulting settlements.

At Rainbow Insurance, we understand the modern risks of the digital age. We provide the best service by ensuring your umbrella policy includes robust personal injury protection, giving you the peace of mind to navigate the online world safely. Believe in us to protect your reputation and your assets. We are your partners in modern risk management.`
    },
    {
      id: 'coverage-details',
      title: 'What Does Umbrella Insurance Cover?',
      content: `Umbrella insurance is a powerful tool that provides broad liability protection across multiple areas of your life. It "kicks in" once the liability limits of your underlying policies (like auto, home, or boat) have been exhausted. Understanding the scope of this coverage is essential for any Fort Worth resident. It's about total asset defense.

Key components of coverage include:
1. Excess Liability: Provides additional millions in coverage for bodily injury and property damage claims that exceed your primary policy limits.
2. Broader Protection: Often covers risks that your primary policies might exclude, such as libel, slander, false arrest, and invasion of privacy. In the age of social media, these "soft" liability risks are more relevant than ever.
3. Legal Defense Costs: Covers the significant fees of attorneys and expert witnesses needed to defend you in a major lawsuit. These costs are often provided in addition to the policy's limit, meaning your $1 million limit stays intact for settlements.
4. Worldwide Coverage: Protects you and your family even when you're traveling outside of Fort Worth or the United States.

At Rainbow Insurance, we help you identify the right amount of umbrella coverage based on your total net worth and your potential future earnings. We look for policies that offer the best value and the most flexible terms. We provide the best service by ensuring your umbrella policy is perfectly coordinated with your other insurance. Believe in the Rainbow Insurance advantage for your family's stability. We cover the gaps that others miss. We are your liability experts.`
    },
    {
      id: 'who-needs-it',
      title: 'Who Needs an Umbrella in Tarrant County?',
      content: `A common misconception is that umbrella insurance is only for the "wealthy." In reality, anyone with assets to protect or a future income to safeguard should consider an umbrella policy. In the diverse Fort Worth community, this includes a wide range of people. It's about strategic risk management.

You should strongly consider an umbrella policy if you:
- Own a home or rental property in Fort Worth.
- Have significant savings or investment accounts.
- Have a high future earning potential (like young professionals).
- Own a pool, a trampoline, or a dog (which increase your liability risk).
- Frequently host guests or parties at your home.
- Have a teenage driver in the household.
- Own a boat, an RV, or an ATV.
- Serve on a non-profit board or participate in community organizations.

Susan and her expert team are experts at helping you assess your personal risk profile. We look at your lifestyle and your assets to find the most cost-effective way to provide the protection you need. We provide the best service by being thorough and detail-oriented. Believe in us to protect the life you've built. We are your partners in progress.`
    },
    {
      id: 'affordability',
      title: 'Surprising Affordability: Big Protection for a Small Price',
      content: `One of the best things about umbrella insurance is how affordable it is. Because it only pays after your other policies have reached their limits, the risk to the insurance company is lower, which means the premiums are surprisingly small. For most Fort Worth families, a $1 million umbrella policy costs less than a dollar a day. It's about financial optimization.

We shop 56+ A+ rated carriers to find the absolute best rates for your umbrella coverage. We often find that by slightly increasing the liability limits on your auto and home policies, we can unlock even lower rates on your umbrella policy. This "bundling" approach ensures you have the most robust protection at the absolute lowest price in North Texas. It's about getting the most value for your insurance dollar.

Susan and her expert team take the time to walk you through the numbers and show you just how easy it is to add this vital layer of security. We provide the best service and the best rates by being your strategic insurance partner. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local financial protection partners. We are your advocates for a secure future.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Total Security',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who looks at every angle of your financial security. We've been a part of the Fort Worth community since 1993, and we've helped our neighbors protect their legacies for over 30 years. We are your neighbors, and your peace of mind is our mission.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive umbrella insurance for your specific needs and budget. We don't work for a big insurance company; we work for YOU. If your life changes—you buy a new home, start a business, or your kids head off to college—we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners, dedicated to providing the personal touch that only a local agency can offer.

Susan and her expert team are dedicated to providing a "tight professional look" to your family's insurance portfolio. We provide the best service, the best rates, and the best policies because we know your peace of mind is priceless. Believe in the Rainbow Insurance advantage today and protect your future with the expertise you deserve. We are here for you, now and always. We are your partners in prosperity, your advocates in protection, and your neighbors in progress.`
    }
  ];

  const faqs = [
    {
      q: "Do I need to have my auto and home insurance with the same company to get an umbrella?",
      a: "Not necessarily, but it often makes it easier and more affordable. Some umbrella carriers require you to have your primary policies with them, while others are 'standalone' and can sit on top of any carrier. We shop 56 carriers to find the best fit for your current situation."
    },
    {
      q: "Does an umbrella policy cover my business liability?",
      a: "Generally, no. A personal umbrella policy only covers your personal liability. If you own a business in Fort Worth, you need a separate 'Commercial Umbrella' policy to protect your business assets. Susan and her expert team can help you with both!"
    },
    {
      q: "What are the 'underlying limits' required for an umbrella?",
      a: "Most umbrella carriers require you to have a minimum amount of liability coverage on your auto and home policies (usually $250,000/$500,000 for auto and $300,000 for home). We can help you adjust your primary policies to meet these requirements and get you covered."
    },
    {
      q: "How much does a $1 million umbrella policy cost in Fort Worth?",
      a: "For most families with two cars and one home, a $1 million umbrella policy costs between $150 and $300 per year. It is one of the best values in the insurance industry. We shop 56 carriers to find the absolute best rates for your family."
    },
    {
      q: "Can an umbrella policy protect me if I'm sued for something I posted online?",
      a: "Yes! Most umbrella policies include 'Personal Injury' coverage, which protects you against claims of libel, slander, and defamation, including those arising from social media activity."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Umbrella Insurance",
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
    "description": "Cheap umbrella insurance in Fort Worth. Protect your personal assets with an extra $1 million or more in liability coverage. We shop 56 carriers for the best rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop", alt: "Suburban home in Fort Worth with a family car" },
    { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop", alt: "Peaceful residential neighborhood in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop", alt: "Family enjoying their home and security in North Texas" },
    { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth families" }
  ];

  return (
    <ProductPage
      title="Fort Worth Umbrella Insurance"
      seoTitle="Umbrella Insurance Fort Worth | Extra Liability Protection"
      seoDescription="Protect your personal assets with the best rates on umbrella insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Umbrella Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Your standard policies have limits, but your protection shouldn't. At Rainbow Insurance Agency, we help you add a powerful layer of liability coverage to protect your home, savings, and future. Susan and her expert team compare 56 A+ rated carriers to find the perfect umbrella for your family."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
