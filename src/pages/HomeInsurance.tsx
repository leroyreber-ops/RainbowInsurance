import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function HomeInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'importance',
      title: 'Why Home Insurance is Critical in Fort Worth',
      content: `Your home is likely your most significant financial investment, representing years of hard work, savings, and memories. In Fort Worth, protecting that investment means more than just having a generic policy; it means having the right coverage specifically tailored for our unique North Texas environment. From the historic, tree-lined streets of the Fairmount district and the elegant mansions of Westover Hills to the rapidly growing modern developments in Alliance, Walsh, and Chisholm Trail, every Fort Worth home faces a distinct set of risks that require a local perspective. It's about protecting your sanctuary. We understand that your home is the heart of your family's life.

Texas is notorious for its volatile weather, and Fort Worth sits right in the crosshairs of some of the most intense meteorological events in the country. We experience a full spectrum of extremes: from blistering summer heat and prolonged droughts that can cause significant foundation shifts and cracks, to severe spring thunderstorms, high-velocity winds, and the ever-present threat of devastating hail that can destroy a roof in minutes. Without comprehensive home insurance, a single major storm could result in tens of thousands of dollars in out-of-pocket repair costs, potentially wiping out your savings or forcing you into high-interest debt. It's about financial resilience.

Susan and her expert team understand these local risks intimately because they live and work in the same neighborhoods you do. They know that a standard, "off-the-shelf" policy might not be enough to cover the true replacement cost of your home in today's rapidly rising real estate market. Construction costs in Tarrant County have soared due to supply chain issues and labor shortages, and if your policy hasn't been updated recently, you might find yourself dangerously underinsured. That's why we shop 56+ A+ rated carriers to find you a policy that offers real, robust protection, not just a piece of paper that satisfies your mortgage lender. We are your local advocates.

We look for policies that include "Replacement Cost" coverage for both your dwelling and your personal property. This ensures that if the unthinkable happens—like a total loss due to fire—you can truly rebuild your life with materials of like kind and quality, rather than receiving a depreciated check that leaves you short. Our team takes the time to explain the nuances of your policy, helping you make an informed decision that safeguards your family's future. Believe in us for your insurance needs; we've been the trusted choice for Fort Worth homeowners since 1993. We are your neighbors, and we are your advocates. We are your partners in progress.

Furthermore, the rapid expansion of the DFW metroplex has led to changes in land use and drainage patterns. Areas that were once considered safe from minor flooding may now face new risks as more concrete and infrastructure are added. We monitor these trends and provide expert advice on how to mitigate these risks through proper insurance and home maintenance. We don't just sell policies; we provide a comprehensive risk management strategy for your most valuable asset. Our commitment to Fort Worth is deep, and our knowledge of the local landscape is unmatched. We are your eyes and ears on the ground. We also discuss how "Home Maintenance" can play a role in preventing claims.`
    },
    {
      id: 'foundation-risks',
      title: 'Foundation Risks and Soil Conditions in North Texas',
      content: `If you've lived in Fort Worth for any length of time, you've likely heard about the "shifting soils" of North Texas. Our region is characterized by highly expansive clay soils that contract during dry periods and expand during wet periods. This constant movement can put immense stress on a home's foundation, leading to cracks in walls, sticking doors, and potentially catastrophic structural damage. It's about geological awareness.

While standard homeowners insurance typically excludes damage caused by "earth movement" or "settling," there are specific endorsements and maintenance strategies that can help protect your investment. Susan and her expert team can provide guidance on how to properly water your foundation during the hot Texas summers and what to look for in terms of early warning signs. We also discuss how "Sewer Line" coverage can be important, as shifting soil can often lead to pipe breaks.

We provide the best service by helping you understand the unique geological challenges of our region and choosing a policy that offers the most robust protection. Believe in the Rainbow Insurance advantage for your home's structural integrity. We are your partners in progress. We also discuss how "Foundation Watering Systems" can be a proactive way to protect your home.`
    },
    {
      id: 'smart-home-tech',
      title: 'Smart Home Technology and Insurance Discounts',
      content: `The rise of smart home technology is changing the way we protect our homes in Fort Worth. From smart thermostats and leak detectors to advanced security systems and video doorbells, these devices can not only make your life more convenient but also lead to significant discounts on your homeowners insurance. It's about modern home protection.

Many of our 56+ carriers offer discounts for homes equipped with monitored security systems, fire alarms, and even automatic water shut-off valves. These devices can prevent a small leak from turning into a major flood or alert you to a fire before it spreads. Susan and her expert team can help you identify which smart home devices will provide the greatest savings on your premiums.

We provide the best service by staying ahead of the latest trends in home technology and helping you choose a policy that rewards you for being a proactive homeowner. Believe in the Rainbow Insurance advantage for your modern sanctuary. We are your partners in progress. We also discuss how "Ring" and "Nest" devices can be integrated into your home's security plan.`
    },
    {
      id: 'coverage-types',
      title: 'Understanding Your Homeowners Coverage Options',
      content: `A standard homeowners insurance policy (often referred to as an HO-3) is a package policy that includes several key types of coverage, each designed to protect a different aspect of your life. Understanding these "buckets" of coverage is the first step in building a secure plan:

1. Dwelling Coverage: This is the core of your policy. It protects the physical structure of your home—the walls, roof, foundation, and attached structures like a garage or deck. In Fort Worth, we ensure your dwelling limit is high enough to cover the actual cost to rebuild your home from the ground up at today's labor and material prices. We don't just look at the market value; we look at the reconstruction cost. It's about structural integrity. We also consider the unique architectural features of Fort Worth homes, from the classic Craftsman bungalows to the modern minimalist estates, ensuring every detail is accounted for in your coverage.

2. Other Structures: This covers buildings on your property that aren't attached to your house. This includes detached garages, storage sheds, fences, and even gazebos or swimming pools. Many Fort Worth properties have significant value tied up in these structures, and we make sure they are adequately protected against the same perils as your main house. It's about total property protection. Whether you have a simple garden shed or a sophisticated guest house, we ensure your policy reflects the true value of your entire estate.

3. Personal Property: This protects your "stuff"—everything from your furniture and electronics to your clothing and kitchen appliances. What many people don't realize is that this coverage often follows you. If your laptop is stolen from your car while you're shopping at University Park Village or if your luggage is lost on a trip, your homeowners policy may cover it. It's about protecting your lifestyle. We also offer advice on how to inventory your belongings, ensuring that in the event of a claim, you have the documentation necessary to receive a full and fair settlement.

4. Loss of Use (Additional Living Expenses): If a covered loss makes your home uninhabitable, this coverage pays for the extra costs of living elsewhere. This includes hotel bills, restaurant meals, and even storage fees. In a tight housing market like Fort Worth, finding a temporary place to live can be incredibly expensive, making this coverage a lifesaver for your family's stability. It's about maintaining your standard of living. We understand the stress of being displaced, and we work quickly to ensure your family has a safe and comfortable place to stay while your home is being restored.

5. Personal Liability: This is your financial shield. It protects you if someone is injured on your property or if you accidentally damage someone else's property and are held legally responsible. Whether it's a slip-and-fall on your sidewalk or your dog accidentally biting a neighbor at the park, liability coverage pays for legal defense and settlements. It's about legal security. In today's litigious society, having robust liability protection is more important than ever. We help you determine the appropriate limits to safeguard your assets and your future earnings.

6. Medical Payments: This provides a small amount of coverage (usually $1,000 to $5,000) for minor medical expenses for guests injured on your property, regardless of who was at fault. It's a "goodwill" coverage that can often prevent a small incident from turning into a major, stressful lawsuit. It's about neighborly protection. It's a simple way to show your guests that you care about their well-being and are prepared for the unexpected.

At Rainbow Insurance, we go far beyond these basics. We help you identify if you need specialized endorsements for high-value items like engagement rings, fine art, or musical instruments. We also discuss critical add-ons like Water Back-up and Sump Pump Overflow. Many Fort Worth homes, especially in older areas like Riverside or Arlington Heights, have aging sewer lines that can back up during heavy rains. This is almost always excluded from a standard policy, but we can add it for a very small annual fee. We cover the gaps that others miss. We are your comprehensive coverage experts. We also look at "Ordinance or Law" coverage, which helps pay for the extra costs of bringing your home up to modern building codes after a loss—a critical consideration for owners of historic Fort Worth properties.`
    },
    {
      id: 'hail-wind',
      title: 'The "Hail Alley" Factor: Protecting Your Roof',
      content: `Fort Worth is situated in the heart of what many meteorologists call "Hail Alley." Every spring and fall, our community faces the threat of significant hailstorms that can devastate roofs, siding, and windows in a matter of minutes. For a Fort Worth homeowner, your roof is your first line of defense, and it's also the most vulnerable part of your home. It's the shield that protects everything you love. It's about structural resilience.

In recent years, many insurance companies in Texas have moved toward "Actual Cash Value" (ACV) settlements for roofs, especially on homes where the roof is more than 10 or 15 years old. This is a major trap for homeowners that can lead to financial ruin. Under an ACV policy, if your roof is damaged by hail, the insurance company will subtract depreciation based on the age of the roof. If you have a 20-year-old roof that needs $20,000 in repairs, you might only receive a check for $5,000, leaving you to find the other $15,000 yourself. It's about financial exposure.

At Rainbow Insurance, we fight for our clients to get "Replacement Cost" coverage for their roofs whenever possible. We know that a new roof in Fort Worth is a massive investment. Having a policy that pays the full cost to replace your roof with new materials of like kind and quality is one of the most important aspects of your homeowners insurance. It's the difference between a minor inconvenience and a major financial crisis. It's about total recovery. We also educate our clients on the benefits of impact-resistant shingles, which can not only better protect your home but also lead to significant discounts on your insurance premiums.

We also look for policies with reasonable wind and hail deductibles. While a 1% or 2% deductible is standard in Texas, we shop our 56+ carriers to find options that won't break the bank when a storm hits. For a $400,000 home, a 2% deductible means you pay the first $8,000 of a claim. We look for carriers that offer lower percentage options or even flat-dollar deductibles for our qualified clients. Susan and her expert team have helped thousands of Fort Worth residents navigate the complex claims process after a hailstorm, ensuring they get the best service and the best rates from their insurance providers. They took care of us like nobody else could during the record-breaking storms of the past, and they will do the same for you. We are your storm recovery partners. We are your advocates in the aftermath.

Furthermore, we provide guidance on how to properly document storm damage. Taking photos and videos of your property before and after a storm can be invaluable during the claims process. We also recommend working with reputable local contractors who understand the specific requirements of Fort Worth building codes. Our team is here to review your contractor's estimates and ensure they align with your insurance coverage, providing an extra layer of protection against unscrupulous "storm chasers." We are your partners in property preservation.`
    },
    {
      id: 'claims-experience',
      title: 'The Rainbow Claims Experience: Your Advocate in Times of Need',
      content: `The true value of an insurance policy is only realized when you have to file a claim. At Rainbow Insurance Agency, we believe that the claims process should be as smooth and stress-free as possible. When disaster strikes your Fort Worth home, you don't want to be dealing with a faceless call center; you want to talk to someone who knows you and understands your situation. That's where we come in.

Susan and her expert team are your dedicated advocates throughout the entire claims journey. From the moment you report the loss to the final settlement check, we are by your side. We help you understand your policy's requirements, assist with the necessary paperwork, and communicate with the insurance company's adjusters on your behalf. We've spent decades building relationships with local adjusters and repair professionals, and we use those connections to ensure your claim is handled with the urgency and fairness it deserves.

We also provide expert advice on how to mitigate further damage after a loss. Whether it's arranging for emergency board-up services after a fire or finding a reputable water restoration company after a burst pipe, we are here to help you take the immediate steps necessary to protect your property. We understand that your home is more than just a building; it's the center of your life. Our goal is to get you back to normal as quickly as possible, with the best service and the best results.

Our commitment to excellence in claims handling is one of the reasons we have such high client retention. We don't just sell you a policy and disappear; we are your lifelong partners in protection. We've seen how the right insurance can make all the difference in a family's recovery, and we are dedicated to ensuring every one of our Fort Worth neighbors has that same level of support. Believe in us to be there when it matters most. We are your claims champions. We are your partners in progress.`
    },
    {
      id: 'community-impact',
      title: 'Local Impact: Why Choosing a Fort Worth Agency Matters',
      content: `When you choose Rainbow Insurance Agency, you're not just buying insurance; you're investing in the Fort Worth community. We are a locally owned and operated business, and we are deeply committed to the success and well-being of our city. Our team lives, works, and volunteers in Tarrant County, and we are proud to support the local economy and various community initiatives.

Choosing a local agency means you're working with people who have a vested interest in your neighborhood. We understand the local market trends, the unique risks of our geography, and the specific needs of Fort Worth homeowners. This local expertise allows us to provide more accurate advice and more tailored coverage than a national company ever could. We aren't just reading from a script; we're sharing our lived experience as your neighbors.

Furthermore, our independence as an agency means we have the flexibility to put your needs first. We aren't pressured by corporate quotas or limited to a single company's products. We work for you, and our success is directly tied to your satisfaction. This client-centric approach is the foundation of our business, and it's what has allowed us to thrive in Fort Worth since 1993.

By supporting a local business like Rainbow Insurance, you're helping to keep Fort Worth vibrant and resilient. We are proud to be a part of the Panther City's story, and we are honored to protect the homes and families that make this city so special. Thank you for choosing us as your insurance partners. We are your local champions. We are your partners in progress. We believe in the power of community, and we are dedicated to making Fort Worth an even better place to call home.`
    },
    {
      id: 'flood-water',
      title: 'Flood Insurance vs. Water Backup: Knowing the Difference',
      content: `One of the most common misconceptions we encounter in Fort Worth is the belief that "water damage" is always covered. In reality, insurance companies categorize water damage very strictly, and understanding these categories is essential for protecting your home. A misunderstanding here can be the most expensive mistake you ever make. It's about risk categorization.

Standard homeowners insurance generally covers water damage that is "sudden and accidental" and comes from *inside* the house—like a burst pipe or a leaking water heater. However, it almost never covers damage from water that comes from the *outside* (flooding) or water that comes from *below* (sewer backup). It's about source identification.

1. Flood Insurance: This covers damage caused by rising surface water. Even if you don't live right next to the Trinity River, heavy North Texas rains can cause localized flooding that can enter your home. Because Fort Worth has seen significant development and increased concrete coverage, the way water flows through our neighborhoods has changed. We can help you assess your flood zone and find an affordable policy through the National Flood Insurance Program (NFIP) or private flood insurers. It's about environmental awareness.

2. Water Backup Coverage: This is an endorsement (an add-on) that protects you if your sewer or drain backs up into your home. This is a common and incredibly messy problem in many parts of Fort Worth with older infrastructure. The cleanup and repair costs for a sewer backup can easily reach $10,000 to $20,000, and the health risks are significant. This coverage is inexpensive but provides massive peace of mind. It's about infrastructural protection.

Susan and her expert team take the time to walk you through these scenarios. We don't want you to find out about a coverage gap while you're standing in two inches of water. We provide the best service by being proactive and ensuring you have the right "buckets" of coverage for every type of water risk. Believe in us to keep your home dry and your finances protected. We look at the risks you haven't even thought of yet. We are your water damage specialists. We are your partners in progress.`
    },
    {
      id: 'liability-deep',
      title: 'Liability Protection: Your Financial Safety Net',
      content: `Liability insurance is often the most overlooked part of a homeowners policy, yet it is arguably the most critical for long-term financial security. In our modern, litigious society, a single accident on your property can lead to a lawsuit that threatens everything you've worked for—your savings, your home, and even your future earnings. It's the safety net that catches you when life takes an unexpected turn. It's about asset preservation.

Consider these common scenarios in Fort Worth:
- A guest trips on an uneven walkway or a loose rug and suffers a serious back injury.
- Your dog, normally friendly, gets spooked by a loud noise and bites a delivery person.
- A neighborhood child is injured while playing on your backyard trampoline or in your swimming pool.
- A fire starts in your kitchen due to a faulty appliance and spreads to your neighbor's house.

In any of these cases, you could be held legally responsible for medical bills, lost wages, and pain and suffering. Most standard policies offer $100,000 in liability coverage, but in today's world, that is often woefully insufficient. A single serious injury can easily result in a judgment exceeding $250,000. It's about legal exposure.

At Rainbow Insurance, we recommend that most Fort Worth homeowners carry at least $300,000 to $500,000 in liability coverage. For many families, we also suggest an "Umbrella" policy. An Umbrella policy provides an extra layer of liability protection (usually starting at $1 million) that sits on top of both your home and auto insurance. It's surprisingly affordable and provides the ultimate peace of mind for your entire family. It's about comprehensive financial defense.

Susan and her expert team are experts at assessing your total risk profile. We look at your assets, your lifestyle, and your specific property features to ensure you have a "safety net" that is strong enough to protect your family. We believe in providing the best service and the best policies, and that starts with a thorough understanding of your liability exposure. Believe in us to protect your legacy and your future. We are your shield. We are your partners in progress.`
    },
    {
      id: 'local-expertise',
      title: 'The Rainbow Advantage: Local Fort Worth Expertise',
      content: `Choosing an insurance agency is about more than just finding the lowest price; it's about finding a partner who understands your community and is there for you when it matters most. Rainbow Insurance Agency has been a fixture in the Fort Worth community since 1993. We've been serving local homeowners for over 30 years, and we've seen the city grow from a "big small town" into a world-class metropolis. We've helped our neighbors through every stage of that growth, from the boom times to the challenging years. We are your neighbors.

Whether you're buying your first "starter home" in Benbrook, moving into a historic bungalow in Ryan Place, or building your dream home in the hills of Aledo, we have the local knowledge to guide you. We understand the specific soil conditions in North Texas that lead to foundation issues, the weather patterns that bring the hail, and the local rebuilding costs that determine your coverage limits. We know the local contractors and the local adjusters. We are your local experts.

As an independent agency, we represent 56+ carriers. This is your greatest advantage. We don't work for a big corporate insurance company; we work for YOU. If your current carrier raises their rates at renewal, we don't just send you a bill; we proactively re-shop your coverage across our entire network to ensure you're still getting the best rates and the best service. We are your personal shoppers for insurance. We are your strategic partners.

Susan and her expert team are dedicated to this community. We aren't just your insurance agents; we're your neighbors. We shop at the same Central Market, we cheer for the same teams, and we care about the future of Fort Worth. That's why we provide the best service and the best rates—because we're looking out for our family. They took care of us like nobody else could, and we are committed to doing the same for you. Believe in the Rainbow Insurance advantage today and experience the difference that local expertise makes. We are here for you, now and always. We are your partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "Does my homeowners insurance cover flood damage?",
      a: "No, standard homeowners insurance policies do not cover damage caused by rising water or flooding. In Fort Worth, many areas near the Trinity River or in low-lying zones require a separate Flood Insurance policy. We can help you determine your flood risk and find an affordable policy through the NFIP or private markets."
    },
    {
      q: "How can I lower my home insurance premium in Fort Worth?",
      a: "There are several ways to save. Bundling your home and auto insurance is the most effective method, often saving 15-25%. Other discounts include having a monitored security system, a newer roof (especially impact-resistant shingles), being claim-free, and having a high credit score. We shop 56+ carriers to find every possible discount for you."
    },
    {
      q: "What is a 'Wind and Hail' deductible?",
      a: "In Texas, many policies have a separate, higher deductible for damage caused by wind or hail. This is usually expressed as a percentage of your home's insured value (e.g., 1% or 2%). For a $300,000 home, a 1% deductible means you pay the first $3,000 of a hail claim. We look for carriers that offer flat-dollar deductibles or lower percentage options."
    },
    {
      q: "Is my home office covered by my homeowners policy?",
      a: "Standard policies provide limited coverage for business property (usually up to $2,500) and often exclude business liability. If you run a business from your Fort Worth home, you may need a home-based business endorsement or a separate small business policy. Susan and her expert team can help you identify the right coverage for your professional needs."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Homeowners Insurance",
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
    "description": "Cheap home insurance in Fort Worth. We shop 56+ carriers to find you the best rates and best service for your homeowners insurance needs."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop", alt: "Beautiful suburban home in Fort Worth" },
    { src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&h=600&fit=crop", alt: "Residential neighborhood in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop", alt: "Cozy home interior and personal property protection" },
    { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop", alt: "Family enjoying their protected home" }
  ];

  return (
    <ProductPage
      title="Fort Worth Home Insurance"
      seoTitle="Cheap Home Insurance Fort Worth | Best Rates & Service"
      seoDescription="Get the best rates on Fort Worth home insurance. Susan and her expert team shop 56+ carriers to find you the best coverage for your home and family."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Home Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Your home is your sanctuary. At Rainbow Insurance Agency, we ensure it's protected against Texas storms, theft, and liability. Susan and her expert team compare 56+ A+ rated carriers to find you the perfect policy at a price you can afford."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
