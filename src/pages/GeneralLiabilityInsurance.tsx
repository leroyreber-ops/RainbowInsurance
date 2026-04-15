import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function GeneralLiabilityInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'foundation',
      title: 'The Foundation of Business Protection in Fort Worth',
      content: `General Liability insurance is the most fundamental and essential type of coverage for any business operating in the thriving city of Fort Worth. It serves as your primary line of defense against financial ruin resulting from claims of bodily injury, property damage, and personal or advertising injury. It is the critical safety net that allows you to operate with confidence, knowing that a single accident or a frivolous lawsuit won't erase years of hard work, sacrifice, and dedication. Whether you're a small, family-owned boutique in the historic Stockyards, a professional consultant in a Downtown high-rise, or a large-scale construction firm with projects across North Texas, General Liability is the bedrock of your risk management strategy. It's the starting point for every successful venture in our community. We understand that for many in Fort Worth, your business is your life's work, and we are committed to protecting it with the same passion you bring to your craft.

At Rainbow Insurance Agency, we've been helping local businesses build a solid foundation of protection since 1993. We understand that even the most meticulous and safety-conscious business can face a sudden, unexpected lawsuit. A customer could slip on a wet floor on a rainy day, an employee could accidentally damage a client's expensive equipment while on a job site in Arlington or Mansfield, or a competitor could claim that your latest advertising campaign is misleading or defamatory. These are real risks that happen every day in the busy DFW metroplex. We are your local risk experts, dedicated to identifying the vulnerabilities in your business and providing the coverage to close them. We take the time to understand the nuances of your industry, from the specific risks of retail to the complex liabilities of manufacturing and the unique challenges of the service sector.

Without the proper General Liability coverage, these incidents could lead to devastating legal fees, settlements, and judgments that could easily bankrupt a small business. Susan and her expert team are experts at finding the best General Liability policies that provide robust protection at the absolute lowest rates. We shop 56 A+ rated carriers to ensure your business is secure, allowing you to focus on what you do best—serving your customers and growing your company. Believe in us for your insurance needs; we've been the trusted choice for Fort Worth entrepreneurs for over three decades. We are your partners in protection, your advocates for business success, and your neighbors in progress. We also provide advice on how to implement safety protocols to reduce your risk and potentially lower your premiums over time.`
    },
    {
      id: 'liquor-liability',
      title: 'Liquor Liability: Essential for Fort Worth Hospitality',
      content: `Fort Worth is famous for its vibrant nightlife, from the bars and honky-tonks of the Stockyards to the upscale restaurants in Sundance Square and the craft breweries in the Near Southside. If your business sells or serves alcohol, standard general liability is not enough. You need specialized "Liquor Liability" insurance.

This coverage protects your business if an intoxicated patron causes injury or property damage after being served at your establishment. In Texas, "Dram Shop" laws can hold businesses liable for the actions of their customers. Susan and her expert team are experts at finding affordable liquor liability solutions that protect your hospitality business from these significant risks.

We provide the best service by helping you understand the specific legal requirements for alcohol service in Tarrant County and ensuring your insurance provides the protection you need. Believe in the Rainbow Insurance advantage for your bar, restaurant, or event space. We are your partners in hospitality security.`
    },
    {
      id: 'professional-vs-general',
      title: 'Professional Liability vs. General Liability: Knowing the Difference',
      content: `Many professional service providers in Fort Worth—such as accountants, architects, and consultants—often confuse General Liability with Professional Liability (also known as Errors and Omissions or E&O). While both are important, they cover very different risks.

General Liability covers physical accidents (slips and falls) and property damage. Professional Liability covers financial losses caused by your professional advice, mistakes, or failure to perform a service. If you're a consultant and a client claims your advice caused them to lose money, General Liability won't help, but Professional Liability will.

Susan and her expert team are experts at helping you identify which coverages are necessary for your specific profession. We provide the best service by ensuring you have a comprehensive protection plan that covers both your physical and professional risks. Believe in us to provide the clarity and security you need for your professional career.`
    },
    {
      id: 'event-insurance',
      title: 'Special Event Insurance: Short-Term Protection for Local Festivals',
      content: `Fort Worth is a city of festivals and events, from the Main St. Fort Worth Arts Festival to local neighborhood block parties and weddings. If you're organizing an event, you need short-term liability protection.

Special Event insurance provides coverage for a specific period, protecting you from claims of injury or property damage that occur during your event. It can also include coverage for cancellation, liquor liability, and even hired auto.

At Rainbow Insurance, we love being a part of the local community. We provide the best service by helping you find affordable event insurance that meets the requirements of local venues and ensures your celebration is protected. Believe in the Rainbow Insurance advantage for your next big event in North Texas.`
    },
    {
      id: 'product-liability',
      title: 'Product Liability: Protection for What You Sell',
      content: `If your business manufactures, distributes, or sells products, you face a unique set of risks. Product liability insurance is a critical component of your general liability policy that protects you if a product you sold causes injury or damage to a customer. In Fort Worth, where local artisans and manufacturers are a vital part of the economy, this coverage is essential. It's about product integrity.

Whether you're selling handmade furniture, specialized machinery, or locally sourced food products, you could be held liable if a defect causes harm. Product liability covers the cost of legal defense and any settlements or judgments. Susan and her expert team are experts at finding policies that provide comprehensive product liability coverage for a wide range of industries.

We provide the best service by helping you understand your potential exposure and choosing a policy that offers the most robust protection. Believe in the Rainbow Insurance advantage for your products and your reputation. We are your partners in progress. We also discuss how "Recall Insurance" can be added to further protect your business from the massive costs of a product recall.`
    },
    {
      id: 'cyber-liability',
      title: 'Cyber Liability: Protecting Your Digital Assets',
      content: `In today's digital world, every business in Fort Worth is a potential target for cyberattacks. Cyber liability insurance is an increasingly important addition to your business insurance portfolio. It protects your company from the financial consequences of data breaches, ransomware attacks, and other cyber threats. It's about digital security.

If your business stores sensitive customer information, such as credit card numbers or personal data, a breach could lead to massive legal fees, notification costs, and damage to your reputation. Cyber liability coverage can help pay for forensic investigations, legal counsel, and even public relations efforts to restore your brand. Susan and her expert team can help you find affordable cyber liability solutions that fit your business's specific needs.

We provide the best service by staying ahead of the latest cyber threats and helping you choose a policy that provides the most comprehensive protection. Believe in the Rainbow Insurance advantage for your digital security. We are your partners in progress. We also provide resources on how to improve your cybersecurity posture to reduce the likelihood of an attack.`
    },
    {
      id: 'coverage-details-deep',
      title: 'What Does General Liability Actually Cover? (A Deep Dive)',
      content: `A comprehensive General Liability policy provides three main types of protection, each critical to the survival of a modern business in a litigious society:

1. Bodily Injury: This covers injuries to third parties (customers, vendors, or visitors) that occur on your business premises or as a result of your business operations. It pays for their medical expenses, loss of services, and even legal fees if they sue you. In today's litigious environment, a single "slip and fall" can result in a claim for hundreds of thousands of dollars. Whether it's a trip over an uneven sidewalk or a more serious accident, bodily injury coverage is your first line of defense. It's about protecting people and your assets. We also look for "Medical Payments" coverage, which can pay for minor injuries without the need for a lawsuit.

2. Property Damage: This covers damage to someone else's property caused by your business. This is especially critical for contractors, plumbers, electricians, and other service providers who work at client locations. If an employee accidentally starts a fire or causes a major water leak while working in a client's home or office, your General Liability policy is what pays for the repairs. It protects you from the high cost of accidental destruction. It's about accountability and recovery. We also discuss "Care, Custody, and Control" exclusions and how to properly insure against them.

3. Personal and Advertising Injury: This protects your business against non-physical claims, such as libel, slander, copyright infringement, and invasion of privacy. If an employee makes a disparaging comment about a competitor on social media, or if your marketing materials accidentally use a copyrighted image, this coverage provides your legal defense and pays any resulting settlements. In the digital age, this protection is more important than ever. It's about protecting your reputation. We also ensure your policy covers "Electronic Data" liability in certain situations.

Susan and her expert team take the time to explain these coverages in detail, ensuring you understand exactly how your business is protected. We shop 56+ carriers to find the best service and the best rates, so you aren't left with dangerous gaps in your defense. We took care of us like nobody else could, and we are committed to doing the same for your company. We provide the clarity you need. We are your strategic partners. We also review your policy annually to ensure your coverage keeps pace with your business's growth.`
    },
    {
      id: 'contractors-specialized',
      title: 'Specialized Liability for Fort Worth Contractors and Trades',
      content: `Contractors and tradespeople in Fort Worth face a unique and often high-risk set of liability challenges that require a specialized approach to insurance. From the physical risks of plumbing and electrical work to the structural complexities of roofing and landscaping, the potential for property damage or serious injury is ever-present on every job site. It's about managing the inherent risks of your trade.

We offer specialized General Liability policies for contractors that include "Products and Completed Operations" coverage. This is a vital protection that covers your business if a problem arises from your work *after* the project is finished and you've left the site. For example, if a pipe you installed bursts six months later and causes extensive water damage, Completed Operations is what pays for the repairs. Without this, you could be held liable for work done years ago. It's about long-term accountability.

Furthermore, we provide "Blanket Additional Insured" endorsements and "Waiver of Subrogation" clauses, which are almost always required by general contractors, project owners, and commercial landlords before you can even step onto a job site or sign a contract. Susan and her expert team are experts at the technical side of contractor insurance. We know that in the construction industry, time is money. We prioritize providing the Certificates of Insurance (COI) you need quickly and accurately, ensuring you never miss a deadline or a contract opportunity. Believe in us to find you the best value and the most professional support in North Texas. We keep your projects moving. We are your trade specialists.`
    },
    {
      id: 'limits-umbrella',
      title: 'Choosing the Right Liability Limits and the Umbrella Layer',
      content: `How much liability insurance does your business actually need? The answer is not one-size-fits-all and requires a careful analysis of your specific risks. It depends heavily on your industry, the location of your business, the scale of your operations, and the specific requirements of your clients, landlords, or government agencies. It's about tailored protection.

Most small businesses in Fort Worth start with a standard limit of $1 million per occurrence and a $2 million aggregate. However, for businesses with higher risk profiles—such as those in the construction, manufacturing, or professional services sectors—these limits may be insufficient to protect against a major lawsuit. It's about realistic risk assessment.

For an extra layer of protection, we often recommend integrating your General Liability with a Commercial Umbrella policy. An umbrella policy provides additional millions of dollars in coverage that "sits" on top of your primary liability policies. If a major lawsuit results in a judgment that exceeds your $1 million limit, the umbrella policy kicks in to cover the rest, protecting your business's assets, your equipment, and your future earnings. It is an affordable way to get massive protection. It's about ultimate security.

Susan and her expert team are experts at assessing your total risk exposure and recommending the right limits for your specific situation and budget. We shop 56+ carriers to find the perfect balance of price and security, ensuring your business has a true safety net. Believe in us to find you the best rates and the best service in Tarrant County. We protect your future. We are your partners in prosperity.`
    },
    {
      id: 'contractual-liability',
      title: 'Navigating Contractual Liability and Indemnity',
      content: `In the modern business world, contracts are everywhere and they are increasingly complex. Whether it's a lease agreement for your office, a vendor contract for your supplies, or a service agreement with a client, these documents often contain complex "indemnity" clauses that shift liability from one party to another. It's about legal risk management.

At Rainbow Insurance Agency, we help you understand the "Contractual Liability" coverage within your General Liability policy. This coverage protects your business when you have legally assumed the liability of another party through a written contract. It's a technical but critical area of insurance that many agencies overlook, but it can be the difference between being covered and being personally liable for someone else's mistake. It's about thorough legal protection.

Susan and her expert team provide the best service by being proactive advocates for your business. We help you review the insurance requirements in your contracts to ensure your policy is in compliance and that you aren't taking on more risk than you can handle. We believe that true protection comes from a thorough understanding of every legal and financial layer of your business. Believe in the Rainbow Insurance advantage for your professional peace of mind. We are your contract experts. We are your partners in progress.`
    },
    {
      id: 'local-business-advocacy',
      title: 'The Rainbow Advantage: Local Advocacy Since 1993',
      content: `Rainbow Insurance Agency is proud to be a deeply rooted and active part of the Fort Worth business community. We've been serving local companies for over 30 years, and we understand the specific challenges and opportunities of operating in North Texas. We've seen the city grow, we've seen the industries evolve, and we've been here for our neighbors through every economic cycle. We are invested in the success of Fort Worth because this is our home too. We are your neighbors, and your success is our success.

Our independence is your greatest advantage. We don't work for a big corporate insurance company; we work for YOU. When you call our office on 8th Avenue, you aren't talking to a computer or a distant call center; you're talking to a local expert who knows the local business landscape, understands the local economy, and cares about your success. We are your neighbors and your advocates, dedicated to providing the personal touch that only a local agency can offer.

We represent 56 A+ rated carriers, allowing us to find the absolute best rates for every type of business—from sole proprietors and local artisans to large corporations and industrial firms. We provide the best service and the best rates because we are committed to this community. We don't just sell you a policy; we're here to support your business's growth and success, providing the expert advice and the personal touch that only a local agency can offer. They took care of us like nobody else could, and we are committed to doing the same for you. Believe in the Rainbow Insurance advantage and protect your business with the peace of mind you deserve. We are your partners in prosperity, now and always. We are your partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "Is General Liability insurance required in Texas?",
      a: "While Texas law does not technically require most businesses to carry General Liability, it is almost always a requirement for commercial leases, professional licenses, and client contracts. More importantly, the financial risk of a single lawsuit far outweighs the cost of the premium, making it a vital protection for any business."
    },
    {
      q: "Does General Liability cover my employees' injuries?",
      a: "No. General Liability covers injuries to third parties (customers, vendors, visitors). To cover your employees' work-related injuries, you need Workers' Compensation insurance. Susan and her expert team can help you bundle these policies for the best protection and value."
    },
    {
      q: "What is 'Completed Operations' coverage?",
      a: "Completed Operations coverage protects your business if your work causes injury or damage after the job is finished and you have left the site. For example, if a plumber installs a pipe that bursts two weeks later, Completed Operations would cover the resulting water damage. It's a critical protection for all contractors."
    },
    {
      q: "How can I get a Certificate of Insurance (COI) quickly?",
      a: "At Rainbow Insurance, we know that you can't get on the job site or sign a contract without a COI. We prioritize these requests and can often provide them within minutes. Susan and her expert team are experts at ensuring the COI meets your client's specific requirements."
    },
    {
      q: "What is the difference between General Liability and Professional Liability?",
      a: "General Liability covers physical accidents and property damage. Professional Liability (E&O) covers financial losses caused by your professional advice or mistakes. Most service-based businesses in Fort Worth need both for full protection."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "General Liability Insurance",
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
    "description": "Cheap general liability insurance in Fort Worth. We shop 56 carriers to find the best rates for contractors, retailers, and professional services. Get expert liability coverage today."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop", alt: "Professional business meeting in Fort Worth" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop", alt: "Local retail shop protected by liability insurance" },
    { src: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&h=600&fit=crop", alt: "Construction site and contractor liability protection" },
    { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop", alt: "Peace of mind for Tarrant County entrepreneurs" }
  ];

  return (
    <ProductPage
      title="Fort Worth General Liability Insurance"
      seoTitle="Cheap General Liability Insurance Fort Worth | Best Business Rates"
      seoDescription="Protect your Fort Worth business with the best rates on General Liability insurance. Susan and her expert team shop 56 carriers for your commercial protection."
      heroImage="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth General Liability Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Your business is your passion. At Rainbow Insurance Agency, we provide the expert guidance and competitive rates you need to protect it from lawsuits and claims. Susan and her expert team compare 56 A+ rated carriers to find the perfect general liability policy for you."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
