import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function BusinessInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'entrepreneurial-spirit',
      title: 'Protecting the Entrepreneurial Spirit of Fort Worth',
      content: `Fort Worth is a city built on hard work, innovation, and the courage of business owners. From the historic charm of the Stockyards and the cultural richness of the Museum District to the modern energy of Clearfork and the bustling commerce of the North Side, small and medium-sized businesses are the heartbeat of our community. Whether you're opening your first boutique on Magnolia Avenue, managing a growing tech firm in the Near Southside, or running a multi-generational manufacturing plant near Meacham Airport, your business is your passion and your livelihood. Business insurance (also known as Commercial insurance) is the essential foundation that protects your investment from the unexpected. It's about operational resilience. We are your partners in progress.

The modern business landscape in Tarrant County is full of opportunities, but it also carries significant risks. A single fire, a major lawsuit, a cyberattack, or an employee injury can quickly derail years of progress and threaten your financial future. Business insurance is specifically designed to address these complex risks, providing the financial shield you need to weather any storm. It's about ensuring your legacy. We understand that as a business owner, you wear many hats, and insurance shouldn't be another source of stress. Our goal is to simplify the process and provide you with the peace of mind to focus on what you do best—growing your business. We are your local advocates.

At Rainbow Insurance Agency, we've been supporting Fort Worth entrepreneurs since 1993. Susan and her expert team understand the local business environment and the specific challenges of operating in North Texas. We don't just provide a policy; we help you build a comprehensive protection plan that covers your property, your liability, and your people. We are your local advocates for business security. We take the time to learn about your unique operations, your goals, and your concerns, ensuring that every policy we recommend is a perfect fit for your needs. We are your strategic partners.

We shop 56+ A+ rated carriers to find the best rates and the most robust coverage for your specific industry. Whether you're in retail, hospitality, construction, or professional services, we have the expertise to guide you. Believe in us to protect your hard work and your investment. We've been the trusted choice for Tarrant County for over 30 years because we treat your business like our own. We are your partners in progress. We also keep a close eye on the local economy and regulatory changes in Austin that could affect your business, providing you with proactive advice to stay ahead of the curve. We also discuss how "Business Continuity Planning" can help you prepare for the unexpected.`
    },
    {
      id: 'local-business-risks',
      title: 'Navigating Local Business Risks in Tarrant County',
      content: `Operating a business in Fort Worth comes with its own set of unique challenges. From the potential for severe weather damage to the complexities of local zoning and regulations, we help you navigate the risks that are specific to our region. It's about local market awareness.

For example, businesses in the "Stockyards" area may face different liability risks than those in the "Medical District." We understand these nuances and tailor your coverage accordingly. We also consider the impact of local events, such as the "Fort Worth Stock Show & Rodeo," on your business operations and insurance needs.

We provide the best service by being your local eyes and ears, helping you stay protected against the risks that matter most to your business. Believe in the Rainbow Insurance advantage for your commercial security. We are your partners in progress. We also discuss how "Local Networking" can help you build a stronger business community.`
    },
    {
      id: 'employee-benefits',
      title: 'Employee Benefits and Retention Strategies',
      content: `In a competitive labor market like Fort Worth, attracting and retaining top talent is essential for any business. Offering a comprehensive benefits package, including health insurance and retirement plans, can be a major competitive advantage. It's about human capital investment.

While Rainbow Insurance specializes in commercial property and liability, we can also provide guidance on how to integrate employee benefits into your overall business strategy. Susan and her expert team can help you understand the options available and how they can impact your bottom line and employee satisfaction.

We provide the best service by being your comprehensive business partner, helping you protect your most valuable asset—your people. Believe in the Rainbow Insurance advantage for your team's well-being. We are your partners in progress. We also discuss how "Workplace Culture" can play a role in employee retention.`
    },
    {
      id: 'coverage-details',
      title: 'Comprehensive Protection: What Your Business Needs',
      content: `Business insurance is not a single policy, but a combination of coverages tailored to your specific risks. Understanding the components of this protection is essential for any Fort Worth owner. It's about total asset defense.

Key components of a comprehensive plan include:
1. General Liability: Protects your business from claims of bodily injury, property damage, and personal injury (like libel or slander) that occur as a result of your business operations. This is the bedrock of business protection and is often required by landlords and clients.
2. Commercial Property: Protects your building, equipment, inventory, and furniture from perils like fire, theft, and Texas storms. Whether you own your building or lease your space, this coverage is critical for protecting your physical assets.
3. Business Income (Business Interruption): Provides the funds to cover your ongoing expenses (like rent and payroll) and lost profits if your business is forced to close temporarily due to a covered loss. This is vital for long-term survival and can be the difference between reopening and closing your doors for good.
4. Workers' Compensation: Protects your employees if they are injured on the job, covering medical bills and lost wages. It also protects you from related lawsuits. In Texas, while not always legally mandated, it is highly recommended to protect both your staff and your business.
5. Professional Liability (E&O): Protects you if your professional advice or services cause a client a financial loss. This is essential for consultants, accountants, lawyers, and other service providers.
6. Cyber Liability: Protects your business from the devastating impact of data breaches and cyberattacks. In an increasingly digital world, this coverage is becoming a necessity for businesses of all sizes.

At Rainbow Insurance, we help you identify the specific combination of coverages you need based on your industry and the scale of your operations. We look for "Business Owner's Policies" (BOPs) that combine several of these coverages into one affordable package. We provide the best service by ensuring your protection is thorough and cost-effective. Believe in the Rainbow Insurance advantage for your business's stability. We cover the gaps that others miss. We are your commercial insurance experts. We also discuss specialized coverages like Employment Practices Liability (EPLI), which protects you against claims of discrimination or wrongful termination. We also review your "Director's and Officer's" (D&O) liability for your leadership team.`
    },
    {
      id: 'commercial-auto',
      title: 'Commercial Auto and Fleet Insurance: Protection on the Move',
      content: `If your business uses vehicles—whether it's a single delivery van, a fleet of service trucks, or personal cars used for business purposes—you need Commercial Auto insurance. Personal auto policies almost always exclude coverage for business use, leaving you with a massive liability gap. It's about mobile risk management.

In Fort Worth, where many businesses rely on transportation to reach clients across the DFW metroplex, having the right auto coverage is essential. Commercial Auto insurance protects your business from the financial impact of accidents involving your company vehicles. It covers bodily injury and property damage to others, as well as physical damage to your own vehicles. We also offer "Hired and Non-Owned Auto" coverage, which protects your business if an employee has an accident while using their own car for company business.

Susan and her expert team are experts at managing fleet risks. We work with carriers that offer competitive rates for businesses with multiple vehicles and provide tools to help you monitor driver safety. We understand that your vehicles are essential tools for your business, and we ensure they are protected so you can keep moving forward. We provide the best service by finding the most efficient and cost-effective ways to insure your mobile assets. Believe in us to keep your business on the road to success. We are your fleet insurance specialists.`
    },
    {
      id: 'coi-importance',
      title: 'The Importance of Certificates of Insurance (COI)',
      content: `In the business world, a Certificate of Insurance (COI) is often your ticket to getting on the job site or securing a new contract. It's a document that provides proof of your insurance coverage to a third party, such as a landlord, a general contractor, or a client. It's about professional credibility.

At Rainbow Insurance Agency, we understand that when you need a COI, you usually need it *now*. A delay in getting a certificate can mean a delay in starting a project or even losing a contract. That's why we prioritize COI requests, ensuring our business clients have the documentation they need quickly and accurately. We also help you review the insurance requirements in your contracts to ensure your current policies meet the necessary standards.

Our team is dedicated to providing the best service to our Fort Worth business community. We know that these "small" details are what keep your operations running smoothly. We handle the paperwork so you can handle the business. Believe in the Rainbow Insurance advantage for all your commercial documentation needs. We are your partners in professional efficiency. We also provide advice on "Additional Insured" endorsements, which are often required by major clients to provide them with an extra layer of protection under your policy.`
    },
    {
      id: 'industry-specialization',
      title: 'Tailored Solutions for Every Fort Worth Industry',
      content: `Every industry in Fort Worth has its own unique set of risks and requirements. A restaurant in Sundance Square needs a vastly different insurance plan than a contractor in Arlington or a medical practice in the Hospital District. It's about industry-specific resilience.

We offer specialized solutions for:
- Contractors and Trades: Including General Liability, Workers' Comp, and Inland Marine for your tools and equipment. We understand the specific bonding requirements for local projects.
- Retail and Boutiques: Protecting your inventory, your storefront, and your liability to customers. We also offer coverage for "Peak Season" inventory increases.
- Restaurants and Hospitality: Including Liquor Liability, Food Spoilage, and Equipment Breakdown for your kitchen appliances. We understand the unique risks of the Fort Worth dining scene.
- Professional Services: Including Errors and Omissions (E&O) and Cyber Liability for consultants, lawyers, and architects.
- Manufacturing and Industrial: Including Product Liability and Equipment Breakdown for your production lines.
- Non-Profit Organizations: Protecting your mission, your volunteers, and your directors and officers.

Susan and her expert team are experts at finding specialized insurance for each of these sectors. We understand the specific "standard of care" expected in your industry and we find policies that align with those expectations. We provide the best service by being your partner in professional excellence. Believe in us to protect your reputation and your future. We are your partners in progress. We also look at specialized risks like "Bailee's Customer" coverage for businesses that take possession of others' property, such as dry cleaners or repair shops.`
    },
    {
      id: 'risk-management',
      title: 'Proactive Risk Management: Protecting Your Bottom Line',
      content: `At Rainbow Insurance Agency, we believe that the best way to manage a claim is to prevent it from happening in the first place. We work with our clients to implement proactive risk management strategies that can lower your insurance rates and protect your employees and customers. It's about proactive preservation.

We recommend the following for any Fort Worth business:
- Implement Safety Programs: Regular training and safety protocols can significantly reduce workplace injuries and lower your Workers' Comp costs.
- Use Clear Contracts: Well-drafted contracts with clients and vendors can help shift liability and protect your interests.
- Maintain Your Property: Regular maintenance of your building and equipment can prevent fires, leaks, and accidents.
- Cyber Security Training: Educating your employees on how to spot phishing and other cyber threats is your first line of defense against a data breach.

Susan and her expert team are experts at finding every possible discount for our clients. We shop 56+ carriers to find the absolute best rates in North Texas. We provide the best service by being your partner in safety and savings. Believe in us to protect your business and your budget. We are your partners in progress.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Fort Worth Businesses',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands the importance of your business to the community. We've been a part of the local business landscape since 1993, and we've helped our neighbors build their dreams for over 30 years. We are your neighbors.

Our independence is your greatest advantage. We represent 56+ A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive business insurance for your specific needs and budget. We don't work for a big insurance company; we work for YOU. If your business grows, you add new locations, or you expand your services, we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners.

Susan and her expert team are dedicated to providing a "tight professional look" to your business's insurance portfolio. We provide the best service, the best rates, and the best policies because we know your business is your passion. Believe in the Rainbow Insurance advantage today and protect your legacy with the expertise you deserve. We are here for you, now and always. We are your partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "What is a Business Owner's Policy (BOP)?",
      a: "A BOP is a cost-effective package that combines General Liability and Commercial Property insurance into one policy. It's designed for small to medium-sized businesses and often includes additional coverages like Business Income protection."
    },
    {
      q: "Is business insurance required in Texas?",
      a: "While not all types of business insurance are legally required, many are required by contracts, leases, and professional licenses. More importantly, the financial risk of operating without insurance far outweighs the cost of the premium."
    },
    {
      q: "Does my business insurance cover my personal car?",
      a: "Generally, no. If you use your personal car for business purposes, you need a 'Commercial Auto' policy or a specific endorsement on your personal policy. Susan and her expert team can help you find the right solution."
    },
    {
      q: "How much does business insurance cost in Fort Worth?",
      a: "The cost varies significantly based on your industry, revenue, and the amount of coverage you need. For a small consultant, it can be as low as $500 per year. For a large contractor, it will be higher. We shop 56+ carriers to find the absolute best rates for your business."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Insurance",
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
    "description": "Cheap business insurance in Fort Worth. Protect your company with general liability, property, and workers' comp. We shop 56 carriers for the best commercial rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1454165833767-027ff33027ef?w=800&h=600&fit=crop", alt: "Modern business office in downtown Fort Worth" },
    { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop", alt: "Professional team working together in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop", alt: "Local retail shop protected by business insurance" },
    { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth entrepreneurs" }
  ];

  return (
    <ProductPage
      title="Fort Worth Business Insurance"
      seoTitle="Business Insurance Fort Worth | Best Commercial Rates & Service"
      seoDescription="Protect your business with the best rates on commercial insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Business Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Your business is your passion, and we're here to make sure it's protected. At Rainbow Insurance Agency, we provide the best Fort Worth Business Insurance to help you safeguard your assets, your liability, and your people. Susan and her expert team compare 56 A+ rated carriers to find the perfect policy for your company."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={[
        { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", alt: "Modern business office in downtown Fort Worth" },
        { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop", alt: "Professional team working together in Tarrant County" },
        { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop", alt: "Local retail shop protected by business insurance" },
        { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth entrepreneurs" }
      ]}
    />
  );
}
