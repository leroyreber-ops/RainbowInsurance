import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function CondoInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'condo-living',
      title: 'Protecting Your Condo Lifestyle in Fort Worth',
      content: `Condo living in Fort Worth offers a unique blend of urban convenience and community. From the luxury high-rises in Downtown and the trendy lofts in the West 7th district to the quiet townhomes in the suburbs of North Richland Hills, your condo is your sanctuary. However, condo insurance (also known as an HO-6 policy) is fundamentally different from standard homeowners insurance. It's about protecting what's yours within a shared environment. It's about lifestyle security. We understand that condo owners have different needs than traditional homeowners, and we're here to provide the specialized expertise you deserve.

A critical fact that every Fort Worth condo owner must understand is that your Homeowners Association (HOA) master policy only covers the "shell" of the building and the common areas. It does *not* cover your personal belongings, your liability, or the interior of your unit—the floors, the cabinets, the fixtures, and the upgrades you've made. Condo insurance is the essential tool that fills this dangerous gap, ensuring that if a fire, a leak, or a storm occurs, your personal investment is protected. It's about ensuring your home's integrity. Without your own policy, you could be left with a massive financial burden even if the building itself is fully insured.

At Rainbow Insurance Agency, we've been helping Fort Worth condo owners protect their unique lifestyles since 1993. Susan and her expert team understand the local real estate landscape and the specific challenges of condo ownership in North Texas. We don't just provide a policy; we help you build a comprehensive protection plan that covers your unit, your belongings, and your liability. We are your local advocates for urban living security. We take the time to learn about your specific building and your HOA's requirements, ensuring your coverage is perfectly aligned.

We shop 56 A+ rated carriers to find the best rates and the most robust coverage for your specific condo. Whether you're a first-time buyer or a seasoned urban dweller, we have the expertise to guide you. Believe in us to protect your home and your future. We've been the trusted choice for Tarrant County for over 30 years because we understand the complexities of the local market. We are your partners in progress. We also keep a close eye on the local real estate market and the growth of the Fort Worth skyline, providing you with proactive advice as your property value increases.`
    },
    {
      id: 'hoa-policy-review',
      title: 'The Importance of Reviewing Your HOA Master Policy',
      content: `One of the most critical steps in securing the right condo insurance is understanding exactly what your Homeowners Association's master policy covers. These policies typically fall into one of three categories: "Bare Walls," "Single Entity," or "All-In." Knowing which one your HOA has is the only way to ensure you don't have a gap in your protection. It's about strategic alignment.

- Bare Walls: Covers the building's structure and common areas but nothing inside your unit—not even the drywall or the flooring.
- Single Entity: Covers the structure and the original finishes in your unit (like standard cabinets and floors) but not any upgrades you've made.
- All-In: Covers the structure and all the fixtures and improvements within your unit.

At Rainbow Insurance Agency, we help our clients decode their HOA's bylaws and insurance requirements. We look for the "Insurance" section of your HOA documents to determine the exact boundaries of their responsibility. This allows us to tailor your HO-6 policy to cover exactly what's missing, ensuring you aren't paying for duplicate coverage while also making sure you aren't left exposed. We provide the best service by being your expert guide through the fine print. Believe in the Rainbow Insurance advantage for your condo's total protection. We are your partners in professional clarity. We also discuss the importance of "Additional Insured" status for the HOA on your policy, which is a common requirement in many Fort Worth buildings.`
    },
    {
      id: 'loss-assessment-deep',
      title: 'Loss Assessment: A Deeper Dive into a Critical Coverage',
      content: `Loss Assessment coverage is perhaps the most unique and important part of a condo insurance policy. In a shared living environment, you are partially responsible for the common areas. If the HOA suffers a major loss—such as a fire in the lobby, a storm that destroys the pool area, or a liability lawsuit involving a guest in the gym—and their master policy doesn't cover the full cost, they can assess every unit owner for a portion of the shortfall. It's about shared financial responsibility.

Without Loss Assessment coverage, you could be hit with a surprise bill for thousands or even tens of thousands of dollars. We've seen cases in Fort Worth where owners were assessed for major roof repairs or structural issues that exceeded the HOA's reserves. We typically recommend at least $10,000 to $50,000 in Loss Assessment coverage, which is incredibly affordable but provides a massive safety net.

Susan and her expert team are experts at evaluating the risk of assessments for different types of buildings. We look at the age of your building, the quality of its management, and the history of its insurance claims to help you choose the right limit. We provide the best service by looking out for the "hidden" risks of condo ownership. Believe in us to protect your savings from the unexpected. We are your partners in progress. We also explain how this coverage can apply to deductibles on the master policy that are passed down to individual owners.`
    },
    {
      id: 'coverage-details',
      title: 'What Does Condo Insurance Cover?',
      content: `Condo insurance is a specialized policy designed to complement your HOA's master policy. Understanding the "walls-in" nature of this coverage is essential for any Fort Worth owner. It's about total unit defense.

Key components of coverage include:
1. Dwelling Coverage (Walls-In): Protects the interior of your unit, including flooring, cabinetry, countertops, and fixtures. In Fort Worth, where many condos feature high-end finishes, ensuring this limit is high enough to replace your upgrades is vital. We also discuss "Building Additions and Alterations" coverage for any major renovations you've completed.
2. Personal Property: Covers your belongings—furniture, electronics, clothing, and appliances—from perils like fire, theft, and vandalism. We look for policies that offer "Replacement Cost" coverage so you can buy new items if yours are destroyed. We also discuss the importance of "Scheduled Personal Property" for high-value items like jewelry or art.
3. Liability Protection: Protects you if someone is injured in your unit and sues you for negligence. It also covers you if you accidentally damage another unit (e.g., a bathtub overflow that floods the unit below). It's about legal security.
4. Loss of Use (Additional Living Expenses): If a covered loss makes your condo uninhabitable, this coverage pays for the extra costs of living elsewhere while repairs are made. This is vital for maintaining your lifestyle during a crisis.
5. Loss Assessment: This protects you if the HOA issues a special assessment to all owners for a major loss in a common area that exceeds the master policy's limits.

At Rainbow Insurance, we help you review your HOA's bylaws to determine exactly where their coverage ends and yours must begin. We provide the best service by ensuring your policy is perfectly coordinated with the master policy. Believe in the Rainbow Insurance advantage for your condo. We cover the gaps that others miss. We are your condo insurance experts. We also look at specialized coverages like "Earthquake" or "Flood" if your building's location warrants it.`
    },
    {
      id: 'water-damage',
      title: 'The Risk of Water: Protecting Your Unit and Your Neighbors',
      content: `In a condo environment, water is often the biggest threat. A leak in your unit can quickly become a disaster for your neighbors, and vice versa. Whether it's a burst pipe, a leaking water heater, or an overflowing appliance, the resulting damage can be extensive and expensive. It's about shared risk management.

We look for condo policies that include robust "Water Backup" and "Sewer Overflow" coverage. We also discuss the importance of liability protection for "neighbor-to-neighbor" damage. Susan and her expert team are experts at navigating these complex scenarios, ensuring you are protected from the financial impact of accidental water damage. It's about proactive preservation.

We also recommend installing leak detection systems, which can not only prevent a claim but also lead to discounts on your insurance premiums. We provide the best service by helping you be a proactive and responsible condo owner. Believe in us to protect your unit and your relationships with your neighbors. We are your partners in progress.`
    },
    {
      id: 'urban-risks',
      title: 'Fort Worth Urban Risks: Theft and Vandalism',
      content: `Living in the heart of Fort Worth means being close to the action, but it also means being aware of urban risks like theft and vandalism. Whether your condo is in a secure high-rise or a street-level townhome, protecting your belongings is a top priority. It's about urban resilience.

We ensure your condo policy includes strong protection for theft and vandalism, providing peace of mind even when you're away from home. We also look for policies that offer "Scheduled Personal Property" coverage for high-value items like jewelry, art, or specialized electronics that may exceed standard policy limits. Susan and her expert team have helped many local urban dwellers find the perfect balance of protection and value. We provide the best service by being as responsive and flexible as your urban lifestyle requires. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local condo insurance partners. We are your advocates for a secure urban life.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Condo Owners',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands the unique challenges of the Fort Worth condo market. We've been a part of the local community since 1993, and we've helped our neighbors protect their urban homes for over 30 years. We are your neighbors.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive condo insurance for your specific unit and budget. We don't work for a big insurance company; we work for YOU. If your life changes—you renovate your unit or you buy a new home—we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners.

Susan and her expert team are dedicated to providing a "tight professional look" to your family's insurance portfolio. We provide the best service, the best rates, and the best policies because we know your condo is your sanctuary. Believe in the Rainbow Insurance advantage today and protect your urban home with the expertise you deserve. We are here for you, now and always. We are your partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "Doesn't my HOA's insurance cover my condo?",
      a: "Only partially. The HOA's master policy covers the building's exterior and common areas. It does NOT cover your personal belongings, your liability, or the interior finishes (floors, cabinets, etc.) of your unit. You need an HO-6 condo policy for full protection."
    },
    {
      q: "What is 'Loss Assessment' coverage?",
      a: "This is a vital part of condo insurance. If the HOA has a major loss (like a fire in the lobby) that exceeds their insurance limits, they may assess each owner for a portion of the cost. Loss Assessment coverage helps pay your share of that bill."
    },
    {
      q: "Do I need flood insurance for my condo?",
      a: "If your condo building is in a high-risk flood zone, the HOA likely has a master flood policy. However, this may not cover your personal belongings or the interior of your unit. We can help you determine if you need a separate 'excess' flood policy for your unit."
    },
    {
      q: "How much does condo insurance cost in Fort Worth?",
      a: "Condo insurance is typically very affordable, often costing between $300 and $700 per year. The price depends on the value of your belongings, the amount of interior coverage you need, and your location. We shop 56 carriers to find the absolute best rates for your unit."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Condo Insurance",
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
    "description": "Cheap condo insurance in Fort Worth. Protect your unit, belongings, and liability. We shop 56 carriers for the best HO-6 rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop", alt: "Modern condo building in downtown Fort Worth" },
    { src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&h=600&fit=crop", alt: "Luxury townhome in a Tarrant County community" },
    { src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop", alt: "Interior of a well-protected Fort Worth condo" },
    { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop", alt: "Peace of mind for North Texas condo owners" }
  ];

  return (
    <ProductPage
      title="Fort Worth Condo Insurance"
      seoTitle="Condo Insurance Fort Worth | Best HO-6 Rates & Service"
      seoDescription="Protect your condo with the best rates on condo insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Condo Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Your condo is your sanctuary in the city. At Rainbow Insurance Agency, we help you protect your unit, your belongings, and your liability. Susan and her expert team compare 56 A+ rated carriers to find the perfect policy for your urban lifestyle."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
