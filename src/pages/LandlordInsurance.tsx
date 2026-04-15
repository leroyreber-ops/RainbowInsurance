import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function LandlordInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'investment-protection',
      title: 'Protecting Your Rental Investment in Fort Worth',
      content: `Fort Worth is a thriving city with a robust rental market. Whether you own a single-family home in the growing suburbs of Keller, a historic duplex in the Near Southside, or a multi-unit apartment building near TCU, your rental property is a significant financial asset and a source of income. Landlord insurance (also known as Rental Property insurance) is the essential tool that protects that asset from the unique risks that come with being a property owner. It's about investment security.

A common mistake many new landlords in Tarrant County make is assuming their standard homeowners insurance will cover their rental property. In reality, once you move out and start collecting rent, your homeowners policy is likely void. Landlord insurance is specifically designed to address the risks of tenant-occupied properties, including damage to the structure, liability for tenant injuries, and even the loss of rental income if the property becomes uninhabitable. It's about ensuring your investment continues to work for you.

At Rainbow Insurance Agency, we've been supporting Fort Worth landlords since 1993. Susan and her expert team understand the local real estate landscape and the specific challenges of managing property in North Texas. We don't just provide a policy; we help you build a comprehensive protection plan that covers your building, your liability, and your cash flow. We are your local advocates for rental property security.

We shop 56+ A+ rated carriers to find the best rates and the most robust coverage for your specific rental portfolio. Whether you're a first-time landlord or a seasoned investor, we have the expertise to guide you. Believe in us to protect your hard work and your financial future. We've been the trusted choice for Tarrant County for over 30 years because we treat your investment like our own. We are your partners in progress.`
    },
    {
      id: 'coverage-details',
      title: 'What Does Landlord Insurance Cover?',
      content: `A comprehensive Landlord policy (often referred to as a DP-3 policy) is designed to protect your physical property and your financial interests. Understanding the three main "pillars" of coverage is essential for any Fort Worth landlord. It's about total asset defense.

Key components of coverage include:
1. Dwelling Protection: This is the core of your policy. It protects the physical structure of the rental home—the walls, roof, foundation, and attached structures. In Fort Worth, we ensure your dwelling limit is high enough to cover the actual cost to rebuild at today's labor and material prices. It's about structural integrity.
2. Landlord Liability: This is your financial shield. It protects you if a tenant or guest is injured on your property and sues you for negligence (e.g., a slip-and-fall on an uneven walkway). It covers legal defense costs, settlements, and medical payments. It's about legal security.
3. Loss of Rental Income: If a covered loss (like a fire or a severe storm) makes your property uninhabitable and your tenant moves out, this coverage compensates you for the rent you lose while the property is being repaired. In a high-demand market like Fort Worth, this ensures your mortgage and taxes are still covered. It's about cash flow protection.

At Rainbow Insurance, we look for "Special Form" coverage, which provides the broadest protection against all perils unless they are specifically excluded. We also discuss "Replacement Cost" vs. "Actual Cash Value" to ensure you aren't left with a massive financial shortfall after a claim. We cover the gaps that others miss. We are your comprehensive rental property experts.`
    },
    {
      id: 'tenant-liability',
      title: 'Managing Tenant Risks: Liability and Damage',
      content: `Being a landlord in Fort Worth means being responsible for the actions of your tenants and the safety of your property. One of the most important things you can do to protect yourself is to require your tenants to carry their own Renters Insurance. This simple requirement can save you from significant headaches and financial loss. It's about risk mitigation.

If a tenant accidentally starts a kitchen fire, their renters insurance can help pay for the damage to your building, potentially saving you from having to file a claim on your own policy. Furthermore, if a guest is injured due to the tenant's actions, the tenant's liability coverage acts as the first line of defense. Susan and her expert team can help you draft the right insurance requirements for your lease agreements. It's about strategic partnership.

We also look for landlord policies that include "Wrongful Eviction" and "Libel/Slander" coverage, which protect you from lawsuits brought by tenants regarding the management of the property. In today's litigious world, these "soft" liability coverages are increasingly important for professional landlords. Believe in us to protect your reputation and your assets. We are your partners in progress.`
    },
    {
      id: 'storm-risks',
      title: 'Fort Worth Storms: Protecting Your Roof and Siding',
      content: `Operating a rental property in Fort Worth means dealing with the realities of North Texas weather. We are situated in a high-risk zone for hail and wind, and your rental property's roof is its most vulnerable feature. A standard policy from a national carrier might not fully address these local nuances. It's about geographic awareness.

1. Hail and Wind: These are the most frequent causes of property damage in Tarrant County. We shop 56+ carriers to find those that offer reasonable deductibles and robust "Replacement Cost" coverage for roofs. We want to make sure you aren't stuck with a depreciated check that leaves you thousands of dollars short of a new roof.
2. Vandalism and Malicious Mischief: Rental properties are sometimes at higher risk for vandalism. we ensure your policy includes strong protection for these perils, providing peace of mind even when your property is between tenants.
3. Water Backup: Many Fort Worth rental properties, especially in older areas like Riverside or Arlington Heights, have aging sewer lines. We can add Water Backup coverage to protect you from the messy and expensive cleanup of a sewer backup.

Susan and her expert team have helped many local landlords navigate the claims process after major North Texas storms. They know the local adjusters and the local contractors, and they'll fight to ensure you get a fair and timely settlement. They took care of us like nobody else could, and they'll do the same for you. We are your local storm recovery partners. We are your advocates in the aftermath.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Fort Worth Landlords',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands the unique challenges of the Fort Worth rental market. We've been a part of the local real estate community since 1993, and we've helped our neighbors grow their investment portfolios for over 30 years. We are your neighbors.

Our independence is your greatest advantage. We represent 56+ A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive Landlord insurance for your specific property and budget. We don't work for a big insurance company; we work for YOU. If your current carrier raises their rates, we proactively re-shop your coverage to ensure you're still getting the best value in North Texas. We are your strategic insurance partners.

Susan and her expert team are dedicated to providing a "tight professional look" to your investment portfolio. We provide the best service, the best rates, and the best policies because we know your rental property is a key part of your financial future. Believe in the Rainbow Insurance advantage today and protect your investment with the expertise you deserve. We are here for you, now and always. We are your partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "Can I just use my homeowners insurance for my rental property?",
      a: "No. Standard homeowners insurance is for owner-occupied homes. If you rent out the property, you need a Landlord policy. Using the wrong policy can lead to a denied claim and the cancellation of your insurance. We can help you make the switch easily."
    },
    {
      q: "Does landlord insurance cover my tenant's belongings?",
      a: "No, landlord insurance only covers the building and the property you own (like appliances). Your tenants must have their own Renters Insurance to protect their furniture, electronics, and clothing. We recommend making renters insurance a requirement in your lease."
    },
    {
      q: "What is 'Loss of Rent' coverage?",
      a: "If your rental property is damaged by a covered loss (like a fire) and the tenant has to move out, 'Loss of Rent' coverage pays you the rental income you would have received while the property is being repaired. This ensures you can still pay your mortgage and taxes during the reconstruction."
    },
    {
      q: "How much does landlord insurance cost in Fort Worth?",
      a: "Landlord insurance typically costs about 15-25% more than a standard homeowners policy because of the increased liability and property risks. However, bundling multiple properties or combining it with your personal insurance can lead to significant discounts. We shop 56+ carriers to find the absolute best rates for your portfolio."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Landlord Insurance",
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
    "description": "Cheap landlord insurance in Fort Worth. Protect your rental property, liability, and rental income. We shop 56+ carriers for the best rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop", alt: "Well-maintained rental property in Fort Worth" },
    { src: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop", alt: "Residential duplex investment in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop", alt: "Modern apartment building near TCU" },
    { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth landlords" }
  ];

  return (
    <ProductPage
      title="Fort Worth Landlord Insurance"
      seoTitle="Landlord Insurance Fort Worth | Rental Property Protection"
      seoDescription="Protect your rental investment with the best rates on landlord insurance in Fort Worth. Susan and her expert team shop 56+ carriers for you."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Landlord Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Your rental property is a valuable asset. At Rainbow Insurance Agency, we help you protect your investment from fire, storms, and liability. Susan and her expert team compare 56+ A+ rated carriers to find the perfect policy for your landlord needs."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
