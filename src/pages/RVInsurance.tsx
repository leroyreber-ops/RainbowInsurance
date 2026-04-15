import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function RVInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'road-trip-freedom',
      title: 'Protecting Your Road Trip Freedom in Fort Worth',
      content: `In the vast and varied landscape of Texas, the open road is an invitation to adventure that many of our neighbors simply can't resist. From the scenic drives through the Hill Country to the long stretches of highway leading to the Gulf Coast, RVs, motorhomes, and travel trailers are the ultimate vessels for freedom and family memories. Whether you're a "weekend warrior" exploring the state parks around Tarrant County like Cedar Hill State Park or Dinosaur Valley, or a "full-timer" who has made the road your permanent home, your RV is a significant investment and a source of immense pride. RV insurance is the specialized protection that ensures your journey remains a joy, not a financial burden. It's about travel security in a world where the unexpected can happen at any mile marker. We understand that for many in Fort Worth, an RV is more than just a vehicle; it's a mobile sanctuary, a gateway to the great outdoors, and a repository of cherished family stories.

A common mistake many Fort Worth RV owners make is assuming their auto insurance will adequately cover their motorhome or that their homeowners insurance will cover their travel trailer. In reality, RVs are unique hybrids—part vehicle and part home—and they require a specialized policy that addresses both aspects of their nature. If your RV is damaged in a sudden North Texas storm, involved in an accident on a busy highway like I-30 or I-20, or if someone is injured inside your unit while it's parked at a campsite, a standard auto or home policy will often leave you with dangerous gaps. RV insurance is specifically designed to fill these gaps, providing the financial shield you need for the water. It's about ensuring your lifestyle is protected against the unique risks of the road. Without the right policy, a single mishap could lead to a massive financial loss and the end of your travel dreams for good.

At Rainbow Insurance Agency, we've been helping Fort Worth travelers protect their homes-on-wheels since 1993. Susan and her expert team understand the local RV culture and the specific risks of traveling in North Texas and beyond. We don't just provide a policy; we help you build a comprehensive protection plan that covers your vehicle, your personal property, and your liability. We are your local advocates for travel security, ensuring that you can focus on the destination while we handle the details of your protection. We take the time to learn about your travel habits, your RV's storage location, and your goals, ensuring that every policy we recommend is a perfect fit for your needs.

We shop 56 A+ rated carriers to find the best rates and the most robust coverage for your specific RV. Whether you have a luxury Class A motorhome, a versatile Class C, or a rugged fifth-wheel, we have the expertise to guide you. Believe in us to protect your journey and your future. We've been the trusted choice for Tarrant County for over 30 years because we treat every traveler like family. We are your partners in progress, dedicated to keeping the spirit of the road alive and well in Fort Worth, your neighbors in the RV park, and your advocates on the highway.`
    },
    {
      id: 'personal-effects-replacement-deep',
      title: 'Personal Effects Replacement: Protecting Your Home Inside',
      content: `When you're in your RV, it's not just a vehicle; it's your home. That means you have your clothes, your kitchenware, your electronics, and your personal treasures with you. Standard auto insurance provides almost no coverage for these items.

We look for RV policies that offer "Replacement Cost Personal Effects" coverage. This ensures that if your belongings are stolen or destroyed in a covered loss, you can replace them with brand-new items of comparable quality.

Susan and her expert team provide the best service by helping you inventory your belongings and choose the right coverage limits. We ensure that your home-on-wheels is fully protected, inside and out. Believe in the Rainbow Insurance advantage for your personal property security. We are your partners in residential protection.`
    },
    {
      id: 'adjacent-structures-coverage',
      title: 'Adjacent Structures: Protecting Your Long-Term Site',
      content: `Many RVers in Fort Worth keep their units at long-term campsites or RV resorts. In these situations, you may have added structures like a deck, a storage shed, or a custom carport.

Standard RV insurance may not cover these "adjacent structures." We help you find policies that include specific coverage for these additions, ensuring your entire site is protected from storm damage, fire, and theft.

Susan and her expert team provide the best service by understanding the nuances of long-term RV living. We help you build a comprehensive protection plan that covers every aspect of your site. Believe in the Rainbow Insurance advantage for your site security. We are your partners in property protection.`
    },
    {
      id: 'full-timer-lifestyle-deep',
      title: 'The Full-Timer Lifestyle: Specialized Needs for a Mobile Life',
      content: `Choosing to live in your RV full-time is a bold and rewarding choice. But it also means your insurance needs to work harder. You need a policy that provides the same level of protection as a traditional homeowners policy, including robust personal liability and medical payments.

We specialize in "Full-Timer" coverage for our Fort Worth clients. We help you navigate the requirements for "Loss of Use" coverage, which pays for your living expenses if your RV becomes uninhabitable. This is your essential safety net when your home is on wheels.

At Rainbow Insurance, we provide the best service by being your expert guide in the world of full-time RVing. We help you find the best rates and the most comprehensive protection for your unique lifestyle. Believe in us to protect your mobile home. We are your partners in residential freedom.`
    },
    {
      id: 'storage-protection',
      title: 'Protecting Your RV During the Off-Season',
      content: `Many RV owners in Fort Worth store their vehicles for several months out of the year. During these times, your insurance needs change, but they don't disappear. Your RV is still vulnerable to theft, fire, vandalism, and the unpredictable North Texas weather.

"Storage Only" or "Lay-up" coverage allows you to maintain comprehensive protection for your RV while significantly reducing your liability and collision premiums while the vehicle is not being driven. This is a smart way to save money during the off-season without leaving your investment vulnerable. We also look for policies that include coverage for "Pest Damage," which is a common concern for stored RVs in our area.

Susan and her expert team can help you manage these seasonal transitions, ensuring you're always protected when you're on the road and always saving when you're not. We provide the best service by being proactive and attentive to the rhythms of your travel life.`
    },
    {
      id: 'towing-safety',
      title: 'Towing and "Toad" Insurance Considerations',
      content: `If you tow a smaller vehicle (often called a "toad") behind your motorhome, or if you tow a large fifth-wheel with a heavy-duty truck, your insurance needs become even more complex. You need to ensure that both the towing vehicle and the towed unit are properly protected, and that your liability coverage extends to the entire "rig."

We help you understand how your liability limits apply to your towed vehicle and ensure you have the right physical damage coverage for both units. We also look for policies that include "Towing and Labor" coverage that is specifically designed for the unique challenges of recovering a large RV and its towed companion.

At Rainbow Insurance, we are your experts in the technical details of RV towing insurance. We've helped many Fort Worth travelers ensure their entire setup is fully protected, giving them the peace of mind to explore the country with confidence.`
    },
    {
      id: 'total-loss-replacement',
      title: 'The Importance of Total Loss Replacement for New RVs',
      content: `If you've recently purchased a brand-new RV, you know how quickly its value can depreciate the moment you drive it off the lot. In the unfortunate event that your new RV is totaled in an accident or destroyed in a storm, a standard "Actual Cash Value" policy may only pay you what the RV is worth at the time of the loss—which could be significantly less than what you still owe on your loan. It's about financial protection.

"Total Loss Replacement" is a critical coverage for new RV owners. If your RV is totaled within the first few years of ownership, this coverage ensures that the insurance company will replace it with a brand-new, comparable unit. This is a massive safety net that protects your significant investment and ensures you can continue your travels without a major financial setback.

Susan and her expert team are experts at finding policies that offer robust total loss replacement options. We explain the specific time limits and requirements for this coverage, ensuring you have the right protection for your new home-on-wheels. We provide the best service by looking out for your long-term financial interests. Believe in the Rainbow Insurance advantage for your new RV. We are your partners in progress. We also discuss "Purchase Price" protection for those who may not qualify for total loss replacement but still want to protect their initial investment.`
    },
    {
      id: 'specialized-roadside',
      title: 'Specialized Roadside Assistance: Why It Matters for Big Rigs',
      content: `A mechanical breakdown or a flat tire is a major inconvenience for any driver, but for an RV owner, it can be a logistical nightmare. Being stranded on the side of a busy North Texas highway like I-20 or I-35 in a 40-foot motorhome is the last thing any traveler wants. That's why we strongly recommend adding "Specialized Roadside Assistance" to your RV insurance policy. It's about travel resilience.

RV-specific roadside assistance is different from standard auto plans. It ensures that the towing company has the heavy-duty equipment and the expertise to transport your large vehicle safely without causing further damage. It also typically covers services like mobile mechanic assistance, fuel delivery for large tanks, and even "interruption of travel" benefits that pay for a hotel if your RV is in the shop.

At Rainbow Insurance Agency, we look for policies that offer the most comprehensive roadside assistance programs in the industry. We believe that "Best Service" means being there for our clients when they are most vulnerable. We handle the insurance, but we also provide the peace of mind that help is just a phone call away. Believe in us to keep you moving forward, even when the road gets rough. We are your partners in progress. We also provide tips on how to perform basic roadside checks to prevent common breakdowns.`
    },
    {
      id: 'coverage-details',
      title: 'What Does RV Insurance Cover?',
      content: `RV insurance is a comprehensive policy that combines elements of auto and homeowners insurance. Understanding the scope of this coverage is essential for any Fort Worth traveler. It's about total vehicle and home defense.

Key components of coverage include:
1. Collision and Comprehensive: Protects your RV from accidents, theft, fire, vandalism, and damage from storms or falling objects. In Fort Worth, where hail and high winds are frequent, this is your most important protection. We also discuss "Agreed Value" vs. "Actual Cash Value" settlements for your unit.
2. Liability Protection: Protects you if you accidentally injure someone or damage their property while driving or while your RV is parked. It covers legal defense costs and medical payments. This is the bedrock of your financial defense.
3. Personal Property Coverage: Protects your belongings inside the RV—furniture, electronics, clothing, and kitchenware. We look for policies that offer "Replacement Cost" coverage so you can buy new items if yours are destroyed. We also discuss the importance of "Scheduled Personal Property" for high-value items.
4. Vacation Liability: Provides liability protection when your RV is used as a temporary residence at a campsite. This is a critical feature that standard auto insurance does not provide.
5. Roadside Assistance: Provides towing and labor services if your RV breaks down or you have a flat tire. Given the size of many RVs, specialized roadside assistance is essential.

At Rainbow Insurance, we help you identify the specific limits and deductibles you need. We also look for policies that include "Emergency Expense" coverage, which pays for your living expenses if your RV is in the shop while you're on a trip. We provide the best service by ensuring your policy matches the way you travel. Believe in the Rainbow Insurance advantage for your life on the road. We cover the gaps that others miss. We are your RV insurance experts. We also discuss specialized coverages like "Pest Protection" for those who store their RVs for long periods.`
    },
    {
      id: 'full-timer-protection',
      title: 'Full-Timer Insurance: When Your RV is Your Home',
      content: `For those who have chosen to live in their RV full-time in Fort Worth or across the country, your insurance needs are significantly different. You need "Full-Timer" coverage, which provides protection similar to a standard homeowners policy. It's about residential resilience for those who have traded four walls for four wheels.

Full-timer policies include higher liability limits, medical payments for guests, and broader personal property protection. They also provide "Loss of Use" coverage, which pays for your living expenses if your RV becomes uninhabitable due to a covered loss. This is critical when your RV is your only home. Susan and her expert team are experts at finding the best full-timer rates in Tarrant County, ensuring that your primary residence is protected by a policy that understands your unique lifestyle.

We also look for policies that include "Adjacent Structures" coverage, which protects items like your storage shed, your deck, or your carport at your long-term campsite. We provide the best service by explaining the nuances of full-timer coverage and helping you choose the policy that fits your unique lifestyle. Believe in us to handle the technical details so you can enjoy the freedom of the road with absolute confidence.`
    },
    {
      id: 'full-timer-liability',
      title: 'Deep Dive: Liability Risks for Full-Time RVers',
      content: `When your RV is your primary residence, your liability risks extend far beyond the road. You need protection for incidents that happen while your RV is parked, such as a guest tripping on your steps or a fire that spreads to a neighbor's unit.

Full-timer liability coverage is designed to address these risks. It provides "Personal Liability" protection that follows you wherever you go, similar to the liability coverage in a standard homeowners policy. It also includes "Medical Payments to Others," which can cover the medical bills of a guest who is injured on your property.

At Rainbow Insurance, we ensure that our full-timer clients have the robust liability protection they need to protect their assets and their future. We've seen how a single liability claim can be devastating for someone living on a fixed income or a retirement budget, and we are dedicated to ensuring our clients are fully protected.`
    },
    {
      id: 'safety-and-savings',
      title: 'Travel Safety: Protecting Your Family and Your Wallet',
      content: `At Rainbow Insurance Agency, we believe that a safe traveler is a protected traveler. Taking proactive steps to improve your safety can not only prevent an accident but also lead to significant discounts on your insurance premiums. It's about proactive preservation.

We recommend the following for any Fort Worth RV owner:
- Take an RV Safety Course: Many insurance companies offer discounts for completing an approved RV safety and handling course.
- Maintain Your Vehicle: Regularly check your tires, brakes, and systems. A well-maintained RV is less likely to have a breakdown or an accident.
- Use a Surge Protector: Protect your RV's electrical system from power surges at campsites.
- Bundle Your Policies: Combining your RV insurance with your auto or home policy is one of the most effective ways to save money.

Susan and her expert team are experts at finding every possible discount for our clients. We shop 56+ carriers to find the absolute best rates in North Texas. We provide the best service by being your partner in safety and savings. Believe in us to protect your journey and your budget. We are your partners in progress.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for RV Travelers',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands and respects your love for the open road. We've been a part of the Fort Worth community since 1993, and we've helped our neighbors protect their homes-on-wheels for over 30 years. We are your neighbors, and we share your passion for the freedom of the road in North Texas.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive RV insurance for your specific vehicle and lifestyle. We don't work for a big insurance company; we work for YOU. If your travels take you to new horizons or you upgrade to a larger unit, we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners, always looking out for your best interests.

Susan and her expert team are dedicated to providing a "tight professional look" to your family's insurance portfolio. We provide the best service, the best rates, and the best policies because we know your RV is more than just a vehicle—it's your home on the road and a repository of your family's memories. Believe in the Rainbow Insurance advantage today and protect your journey with the expertise you deserve. We are here for you, now and always, as your trusted local insurance advocates in Fort Worth.`
    }
  ];

  const faqs = [
    {
      q: "Can't I just add my RV to my auto insurance?",
      a: "While some carriers allow you to add a motorhome to an auto policy, it often provides very limited coverage for the 'home' aspects of the RV (like personal property and vacation liability). A dedicated RV policy is almost always the better choice for full protection of your vehicle and your lifestyle."
    },
    {
      q: "What is 'Vacation Liability' coverage?",
      a: "Vacation liability provides liability protection when your RV is parked and used as a temporary residence at a campsite. It protects you if someone is injured inside or around your RV while you're on vacation. This is a critical feature of a dedicated RV policy that standard auto insurance does not provide."
    },
    {
      q: "Does RV insurance cover my travel trailer?",
      a: "Yes! RV insurance covers motorhomes (Class A, B, and C) as well as towable units like travel trailers, fifth-wheels, and pop-up campers. We can help you find the right policy for whatever you're towing, ensuring your entire rig is fully protected."
    },
    {
      q: "How much does RV insurance cost in Fort Worth?",
      a: "The cost varies significantly based on the type of RV, its value, and how often you use it. For a travel trailer, it can start around $200 per year. For a luxury motorhome, it will be higher. We shop 56 carriers to find the absolute best rates for your journey."
    },
    {
      q: "Does RV insurance cover my personal belongings inside?",
      a: "Yes, a dedicated RV policy includes coverage for your personal property inside the unit. This is often far more comprehensive than the limited coverage provided by an auto policy. We can help you choose the right limits for your belongings."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "RV Insurance",
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
    "description": "Cheap RV and motorhome insurance in Fort Worth. Protect your home-on-wheels from accidents, theft, and liability. We shop 56 carriers for the best rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&h=600&fit=crop", alt: "Modern motorhome parked in a scenic Texas location" },
    { src: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&h=600&fit=crop", alt: "Family enjoying their RV at a Tarrant County campsite" },
    { src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&h=600&fit=crop", alt: "Travel trailer being towed on a North Texas highway" },
    { src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth RV travelers" }
  ];

  return (
    <ProductPage
      title="Fort Worth RV Insurance"
      seoTitle="RV Insurance Fort Worth | Best Motorhome Rates & Service"
      seoDescription="Protect your RV or motorhome with the best rates on RV insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth RV Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="The open road is your home, and we're here to make sure it's protected. At Rainbow Insurance Agency, we help you safeguard your RV, your motorhome, or your travel trailer from the unexpected. Susan and her expert team compare 56 A+ rated carriers to find the perfect policy for your travels."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
