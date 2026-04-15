import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function InsuranceBundles({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'bundling-power',
      title: 'The Power of Bundling: Saving Big in Fort Worth',
      content: `In the competitive insurance market of Fort Worth, one of the most effective ways to lower your premiums while improving your protection is through "bundling." Bundling is simply the practice of placing multiple insurance policies—such as your auto, home, and umbrella—with the same insurance carrier. This not only simplifies your life by having one point of contact and one renewal date, but it also unlocks significant multi-policy discounts that can save you hundreds of dollars every year. It's about financial optimization for the modern Tarrant County family.

At Rainbow Insurance Agency, we are experts at the "art of the bundle." We don't just look at your policies individually; we look at your entire insurance portfolio to find the most strategic way to combine your coverages. Whether you're a homeowner in Tanglewood with two cars and a boat, or a renter in the West 7th district with a motorcycle and an umbrella insurance policy, we can find a bundle that fits your lifestyle and your budget. It's about ensuring your total security in an unpredictable world.

Susan and her expert team have been helping Fort Worth families maximize their savings since 1993. We understand that every dollar counts, especially with the rising cost of living in North Texas. We are committed to finding you the absolute lowest rates by leveraging our relationships with 56 A+ rated carriers. We don't just provide a policy; we help you build a comprehensive protection plan that works together seamlessly. We are your local advocates for smart insurance, ensuring that your hard-earned money stays where it belongs—in your pocket.

We shop 56 A+ rated carriers to find the best bundling opportunities. Many national carriers offer massive discounts for combining home and auto, but we also look for more specialized bundles, such as business and personal insurance or renters and umbrella. Believe in us to find the perfect combination for your needs. We've been the trusted choice for Tarrant County for over 30 years because we treat your money like our own. We are your partners in progress, dedicated to your long-term financial health.`
    },
    {
      id: 'local-bundle-benefits',
      title: 'Local Benefits for Fort Worth Residents',
      content: `Living in the DFW metroplex comes with unique insurance challenges. From the frequent hailstorms that batter our roofs and vehicles to the expansive clay soils that can cause foundation issues, Fort Worth residents need insurance that is as tough as they are. Bundling provides a unique advantage in this environment.

When you bundle your home and auto insurance with a carrier that understands the Texas market, you often gain access to specialized endorsements that are designed for our local conditions. For example, some of our carrier partners offer "Hail Protection" bundles that provide enhanced coverage for both your home's roof and your vehicle's bodywork under a single, streamlined claims process. This is incredibly valuable when a single storm can cause damage to everything you own in a matter of minutes.

Furthermore, bundling with a local independent agency like Rainbow Insurance means you have a team that knows the local landscape. We know which neighborhoods are more prone to certain risks and which carriers are currently offering the best "bundle bonuses" for Fort Worth zip codes. We use this local intelligence to ensure you're not just getting a discount, but you're getting the *right* discount for your specific location.`
    },
    {
      id: 'bundle-myths',
      title: 'Common Bundling Myths Debunked',
      content: `There are several misconceptions about insurance bundling that can prevent people from saving money. At Rainbow Insurance, we want to set the record straight so you can make informed decisions about your protection.

Myth 1: Bundling is always the cheapest option. While bundling *usually* saves you money, it's not a universal rule. Sometimes, a carrier might have an exceptionally low rate on auto insurance but a very high rate on home insurance. In these cases, it might actually be cheaper to have separate policies. As independent agents, we check both bundled and unbundled options to ensure you're truly getting the best deal.

Myth 2: You lose flexibility when you bundle. Some people worry that if they bundle, they're "stuck" with one company. In reality, bundling with an independent agency gives you *more* flexibility. If one of your policies needs to change, we can easily shop the market for a new bundle that fits your new situation. You're never locked in; you're just optimized.

Myth 3: Bundling is only for home and auto. While this is the most common bundle, you can combine almost any type of insurance. We've helped clients bundle renters and motorcycle, business and auto, and even pet and umbrella insurance. If you have multiple insurance needs, there's likely a bundle that can help you save.`
    },
    {
      id: 'common-bundles',
      title: 'Common Insurance Bundles in Tarrant County',
      content: `There are many ways to bundle your insurance in Fort Worth, and the best combination depends on your specific life stage and assets. It's about tailored savings.

Common bundles we recommend include:
1. Home and Auto: The most popular and effective bundle, often resulting in discounts of 15% to 25% on both policies.
2. Renter and Auto: A great way for urban dwellers to save money while protecting their belongings and their vehicle.
3. Auto and Umbrella: Adding an umbrella policy to your auto insurance provides massive liability protection for a very small additional cost.
4. Business and Personal: For business owners in Fort Worth, placing your commercial and personal insurance with the same agency (like Rainbow Insurance) ensures there are no gaps in your protection and simplifies your administration.
5. Umbrella and Liability: Protecting your assets and your family's future together often leads to better rates and more comprehensive coverage.

At Rainbow Insurance, we help you identify the specific bundling opportunities that offer the most value. We provide the best service by being thorough and detail-oriented. Believe in the Rainbow Insurance advantage for your total financial health. We cover the gaps that others miss. We are your bundling experts.`
    },
    {
      id: 'simplification',
      title: 'Simplifying Your Life: One Agency, Total Protection',
      content: `Beyond the financial savings, bundling your insurance with Rainbow Insurance Agency offers incredible convenience. Instead of dealing with multiple companies, multiple websites, and multiple call centers, you have one local team on 8th Avenue that knows you and your family. It's about lifestyle resilience.

When you have a question, need to make a change, or—most importantly—need to file a claim, you only have one number to call. Susan and her expert team are here to handle the details, coordinate between carriers, and ensure you get the best service possible. We provide the best service by taking the stress out of insurance management. It's about strategic support.

We also look for policies that offer "Single Deductible" options. This means if a single event (like a major Fort Worth hailstorm) damages both your home and your car, you only have to pay one deductible instead of two. Believe in us to handle the technical details so you can focus on what matters most. We are your partners in progress.`
    },
    {
      id: 'independent-advantage',
      title: 'The Independent Advantage in Bundling',
      content: `A common misconception is that you can only bundle with a "captive" agent (like State Farm or Allstate). In reality, as an independent agency, Rainbow Insurance has even *more* bundling power. Because we represent 56 A+ rated carriers, we can find the absolute best bundle across the entire market, rather than being limited to just one company's offerings. It's about market optimization for your benefit.

We shop the entire market to find the carrier that offers the best multi-policy discount for your specific combination of risks. We often find that a carrier you've never heard of offers a far better bundle than the big national brands. Susan and her expert team take the time to compare all the options and show you the real savings. We provide the best service and the best rates by being your advocate in the market. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local financial protection partners, ensuring that your insurance works as hard as you do.

Our independence also means we can be more creative with your bundles. For example, we can look at "affinity" bundles that offer discounts based on your profession, your education, or your membership in certain organizations. We leave no stone unturned in our quest to find you the most affordable and comprehensive protection possible. At Rainbow Insurance Agency, our independence is your greatest asset.`
    },
    {
      id: 'bundle-lifecycle',
      title: 'Bundling Through the Stages of Life',
      content: `Your insurance needs aren't static; they evolve as you move through different stages of life. Bundling is a strategy that can grow with you, providing consistent savings and protection as your assets and responsibilities change.

Starting Out: For young professionals in Fort Worth, a renters and auto bundle is often the perfect starting point. It provides essential protection for your belongings and your vehicle while establishing a relationship with a carrier that can grow with you.

Building a Family: As you buy your first home and perhaps add a second vehicle or an umbrella insurance policy, the opportunities for bundling increase significantly. This is often the stage where the largest savings are realized, as carriers compete aggressively for "full household" accounts.

The Golden Years: For retirees, bundling can simplify financial management while protecting a lifetime of assets. Combining your home, auto, and perhaps a specialized policy for an RV or a seasonal property ensures that your retirement is protected by a cohesive and cost-effective insurance plan.

No matter what stage of life you're in, Susan and her expert team at Rainbow Insurance are here to help you navigate your bundling options. We've been helping Fort Worth families through every stage of life since 1993, and we look forward to being your partner for many years to come.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Smart Savings',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who looks at the big picture of your financial life. We've been a part of the Fort Worth community since 1993, and we've helped our neighbors protect their legacies for over 30 years. We are your neighbors, and we understand the value of a dollar in North Texas.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive insurance bundles for your specific needs and budget. We don't work for a big insurance company; we work for YOU. If your life changes—you buy a new home, start a business, or your kids head off to college—we are here to adjust your coverage and ensure you're always getting the best value. We are your strategic insurance partners, always looking out for your best interests.

Susan and her expert team are dedicated to providing a "tight professional look" to your family's insurance portfolio. We provide the best service, the best rates, and the best policies because we know your peace of mind is priceless. We take the time to review your coverage annually, ensuring that your bundles are still providing the maximum possible benefit. Believe in the Rainbow Insurance advantage today and protect your future with the expertise you deserve. We are here for you, now and always, as your trusted local insurance advocates.`
    }
  ];

  const faqs = [
    {
      q: "How much can I really save by bundling?",
      a: "It varies by carrier, but most Fort Worth families save between 15% and 25% on their total premiums by bundling their home and auto insurance. For a typical family in Tarrant County, this can mean $500 to $1,000 or more in annual savings!"
    },
    {
      q: "Can I bundle my business insurance with my personal insurance?",
      a: "Yes! While they are separate policies, placing them with the same agency (like Rainbow Insurance) allows us to coordinate your coverage, ensure there are no gaps, and often find multi-policy discounts from carriers that offer both commercial and personal lines. This is a great strategy for small business owners in Fort Worth."
    },
    {
      q: "What is a 'Single Deductible' bundle?",
      a: "Some carriers offer a single deductible if one event damages multiple insured items. For example, if a hailstorm damages your roof and your car, you would only pay one deductible instead of two. This is a fantastic way to save money during a disaster, which is all too common in North Texas."
    },
    {
      q: "Is it always better to bundle with one company?",
      a: "Usually, yes, but not always. Sometimes, one carrier may have an incredibly low rate on auto but a very high rate on home. As independent agents, we shop 56 carriers to find the absolute best total price, whether that's with one company or two. We always prioritize your total savings."
    },
    {
      q: "Can I bundle umbrella insurance with my auto or home policy?",
      a: "Absolutely! Many carriers offer significant multi-policy discounts on your property and casualty policies when you have an umbrella insurance policy with them. This is a great way to protect your family's future while saving on your current premiums."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Insurance Bundles",
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
    "description": "Cheap insurance bundles in Fort Worth. Save up to 25% by combining your home, auto, and umbrella insurance. We shop 56 carriers for the best multi-policy discounts."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop", alt: "Happy family in their Fort Worth home with their cars" },
    { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop", alt: "Peaceful residential neighborhood in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop", alt: "Total protection and savings for North Texas families" },
    { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop", alt: "Peace of mind through smart insurance bundling" }
  ];

  return (
    <ProductPage
      title="Fort Worth Insurance Bundles"
      seoTitle="Insurance Bundles Fort Worth | Best Home & Auto Multi-Policy Discounts"
      seoDescription="Save big with the best rates on insurance bundles in Fort Worth. Susan and her expert team shop 56 carriers for the best multi-policy discounts."
      heroImage="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Insurance Bundles in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Why pay more for separate policies? At Rainbow Insurance Agency, we help you combine your coverages to unlock massive savings and simplify your life. Susan and her expert team compare 56 A+ rated carriers to find the perfect bundle for your family."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
