import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function BoatInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'lake-life',
      title: 'Protecting Your Lake Life in Fort Worth',
      content: `In North Texas, the water is where we go to escape the heat and recharge our spirits. From the bustling activity of Eagle Mountain Lake and Lake Worth to the quiet coves of Benbrook Lake and the expansive waters of Joe Pool Lake, boating is a fundamental part of the Fort Worth lifestyle. Whether you're a serious fisherman in a high-performance bass boat, a family enjoying a leisurely afternoon on a pontoon, or a thrill-seeker on a wakeboard boat, your vessel is a significant investment and a source of endless joy. Boat insurance is the essential protection that ensures your time on the water remains a pleasure, not a financial disaster. It's about aquatic security in a region where the weather can change in an instant. We understand that for many in Fort Worth, a boat is more than just a vehicle; it's a floating family room, a gateway to summer memories, and a prized possession.

A common mistake many Fort Worth boat owners make is assuming their homeowners insurance will adequately cover their boat. In reality, most homeowners policies provide very limited coverage for watercraft, often restricted to small boats with low-horsepower engines and only while they are on your own property. If your boat is damaged in a sudden North Texas storm, involved in an accident on a crowded lake, or stolen from a marina, a standard home policy will often leave you with dangerous gaps. Boat insurance is specifically designed to address these unique risks, providing the financial shield you need for the water. It's about ensuring your lifestyle is protected against the unexpected. Without a dedicated policy, a single mishap on the water could lead to a massive financial loss and the end of your lake days for good.

At Rainbow Insurance Agency, we've been helping Fort Worth boaters protect their vessels since 1993. Susan and her expert team understand the local lake culture and the specific risks of boating in North Texas. We don't just provide a policy; we help you build a comprehensive protection plan that covers your boat, your trailer, and your liability. We are your local advocates for aquatic security, ensuring that you can focus on the fun while we handle the details of your protection. We take the time to learn about your boating habits, your vessel's storage location, and your goals, ensuring that every policy we recommend is a perfect fit for your needs.

We shop 56 A+ rated carriers to find the best rates and the most robust coverage for your specific boat. Whether you have a sleek runabout, a sturdy fishing boat, or a luxurious yacht, we have the expertise to guide you. Believe in us to protect your time on the water and your future. We've been the trusted choice for Tarrant County for over 30 years because we treat every boater like family. We are your partners in progress, dedicated to keeping the spirit of the lake alive and well in Fort Worth, your neighbors in the marina, and your advocates on the water.`
    },
    {
      id: 'fishing-tournament-coverage',
      title: 'Tournament Ready: Coverage for Serious Anglers',
      content: `Fort Worth is home to some of the most dedicated anglers in Texas. If you participate in bass tournaments on Eagle Mountain Lake or travel across the state for competitions, your insurance needs are specialized.

We offer policies that include "Tournament Coverage," which can reimburse you for entry fees and even provide a replacement boat if yours is damaged during a competition. We also ensure your high-end electronics, custom rods, and expensive tackle are fully protected.

Susan and her expert team provide the best service by understanding the competitive fishing world. We help you find a policy that recognizes the value of your gear and your commitment to the sport. Believe in the Rainbow Insurance advantage for your tournament success. We are your partners in professional angling.`
    },
    {
      id: 'off-season-storage-savings',
      title: 'Off-Season Savings: Protecting Your Boat in the Garage',
      content: `Many boaters in Fort Worth store their vessels during the cooler months. While you might not be on the water, your boat still needs protection from theft, fire, and storm damage while it's in your garage or a storage facility.

We can help you find "Lay-up" coverage, which reduces your premiums during the months your boat is out of the water. This allows you to save money while maintaining essential protection for your investment.

Susan and her expert team provide the best service by helping you manage your insurance costs year-round. We ensure your boat is protected even when the lake is quiet. Believe in the Rainbow Insurance advantage for your smart seasonal protection. We are your partners in financial optimization.`
    },
    {
      id: 'towing-and-assistance-deep',
      title: 'On-Water Towing: Never Stranded in Tarrant County',
      content: `A mechanical breakdown on the lake can be more than just an inconvenience; it can be a safety risk. The cost of a professional tow on the water can be hundreds of dollars.

Most of the boat policies we recommend include robust "On-Water Towing" and "Emergency Assistance." Whether you run out of fuel, have a dead battery, or experience an engine failure, help is just a radio call or a phone call away.

At Rainbow Insurance, we provide the best service by ensuring you have a safety net for every outing. We help you find policies that include these essential services, giving you the confidence to explore every corner of our local lakes. Believe in us to keep you moving. We are your partners in aquatic reliability.`
    },
    {
      id: 'yacht-insurance',
      title: 'Yacht and Luxury Vessel Insurance',
      content: `For those who have graduated to larger vessels or luxury yachts, the insurance requirements become even more complex. Yacht insurance is a specialized field that requires a deep understanding of maritime law, navigation limits, and the unique risks associated with larger craft.

At Rainbow Insurance, we have the expertise to handle these complex policies. We look for coverage that includes "Agreed Value" for the hull, as well as specialized protection for your crew, your expensive onboard electronics, and your personal effects. We also help you navigate the "Navigation Limits" of your policy, ensuring you're covered whether you're cruising the Texas coast or exploring international waters.

Susan and her expert team work with specialized marine underwriters to ensure your yacht is protected by a policy that is as sophisticated as the vessel itself. We provide the best service by being your expert guide in the world of luxury marine insurance.`
    },
    {
      id: 'marina-requirements',
      title: 'Why Local Marinas Require Insurance',
      content: `If you plan to keep your boat at a marina in the Fort Worth area, such as at Eagle Mountain Lake or Lake Worth, you'll likely be required to provide proof of insurance. Marinas have a vested interest in ensuring that all vessels in their care are properly protected.

There are several reasons for this requirement:
1. Liability Protection: If your boat causes damage to the marina's docks or to another vessel, your liability insurance will cover the costs.
2. Fuel Spill Coverage: As mentioned before, fuel spills are a major environmental risk. Marinas require this coverage to ensure that any cleanup costs are covered.
3. Wreckage Removal: If your boat sinks in its slip, the marina needs to know that you have the resources to have it removed quickly.

At Rainbow Insurance, we provide the necessary certificates of insurance to your marina, ensuring that your docking arrangements are seamless and compliant. We are your local partners in making lake life as easy as possible.`
    },
    {
      id: 'pwc-insurance',
      title: 'Personal Watercraft (PWC) Insurance: Jet Skis and More',
      content: `For many Fort Worth thrill-seekers, the ultimate lake experience involves a Personal Watercraft (PWC) like a Jet Ski, Sea-Doo, or Waverunner. These high-performance machines offer incredible agility and speed, but they also carry unique risks. Because of their size and speed, PWCs are often involved in different types of accidents than larger boats, and they require specialized insurance. It's about high-speed security.

PWC insurance provides liability protection, physical damage coverage, and medical payments specifically tailored for these nimble vessels. We also look for policies that include coverage for "towed water sports," ensuring you are protected if you're pulling a tuber or a skier. Susan and her expert team are experts at finding the best PWC rates in North Texas, ensuring you can enjoy the thrill of the ride with the peace of mind of full protection.

We provide the best service by explaining the specific safety requirements and coverage limitations for PWCs. Believe in the Rainbow Insurance advantage for your high-energy lake days. We are your partners in progress. We also discuss the importance of "operator age" restrictions, which are common in PWC policies and can affect your coverage if an underage rider is at the helm.`
    },
    {
      id: 'wreckage-and-spill',
      title: 'The Importance of Wreckage Removal and Fuel Spill Coverage',
      content: `In the unfortunate event of a major boating accident or a sinking, the costs can extend far beyond the value of the boat itself. If your vessel becomes a hazard to navigation or sinks in a sensitive area, you may be legally required to have it removed. "Wreckage Removal" coverage pays for the professional salvage and removal of your boat, which can cost thousands or even tens of thousands of dollars. It's about environmental and financial accountability.

Similarly, "Fuel Spill Liability" is a critical coverage that many boaters overlook. If your boat leaks oil or fuel into the lake, you could be held responsible for the cleanup costs and any environmental fines. Many marinas in the Fort Worth area now require proof of fuel spill liability before they will allow you to dock.

At Rainbow Insurance Agency, we ensure that every boat policy we write includes robust wreckage removal and fuel spill protection. We believe that "Best Service" means protecting our clients from these "hidden" but potentially devastating costs. We handle the complex details so you can focus on the fun. Believe in us to be your safety net for every aspect of your boating life. We are your partners in progress. We also provide advice on how to properly maintain your fuel systems to prevent accidental spills.`
    },
    {
      id: 'coverage-details',
      title: 'What Does Boat Insurance Cover?',
      content: `Boat insurance is a specialized policy that combines elements of auto and property insurance. Understanding the scope of this coverage is essential for any Fort Worth boater. It's about total vessel defense.

Key components of coverage include:
1. Physical Damage Coverage: Protects your boat, motor, and trailer from accidents, theft, fire, vandalism, and damage from storms. In Fort Worth, where sudden thunderstorms and hail are common, this is your most important protection. We also discuss "Agreed Value" vs. "Actual Cash Value" settlements for your vessel.
2. Liability Protection: Protects you if you accidentally injure someone or damage their property while operating your boat. It covers legal defense costs and medical payments. This is essential if you boat on crowded lakes like Eagle Mountain or Lake Worth.
3. Uninsured/Underinsured Watercraft: Protects you if you are hit by another boater who doesn't have insurance or doesn't have enough to cover your injuries or damage. This is a vital safety net in a state where boat insurance is not always mandatory.
4. Medical Payments: Covers medical expenses for you and your passengers if you're injured in a boating accident, regardless of who is at fault.
5. Specialized Equipment: Protects your expensive fishing gear, water sports equipment, and navigation electronics.

At Rainbow Insurance, we help you identify the specific limits and deductibles you need. We also look for policies that include "On-Water Towing" and "Emergency Assistance," ensuring you're never stranded on the lake. We provide the best service by ensuring your policy matches the way you use your boat. Believe in the Rainbow Insurance advantage for your life on the water. We cover the gaps that others miss. We are your boat insurance experts. We also discuss specialized coverages like "Ice and Freeze" protection for those who keep their boats in the water year-round.`
    },
    {
      id: 'safety-and-discounts',
      title: 'Boating Safety: Protecting Your Family and Your Wallet',
      content: `At Rainbow Insurance Agency, we believe that a safe boater is a protected boater. Taking proactive steps to improve your safety can not only prevent an accident but also lead to significant discounts on your insurance premiums. It's about proactive preservation.

We recommend the following for any Fort Worth boater:
- Take a Boater Education Course: Many insurance companies offer discounts for completing an approved boater safety course. In Texas, this is required for many younger operators.
- Maintain Your Vessel: Regularly check your engine, hull, and safety equipment. A well-maintained boat is less likely to have a breakdown or an accident.
- Use a Kill Switch: Always use the engine cut-off switch to prevent your boat from running away if you're thrown from the helm.
- Bundle Your Policies: Combining your boat insurance with your auto or home policy is one of the most effective ways to save money.

Susan and her expert team are experts at finding every possible discount for our clients. We shop 56+ carriers to find the absolute best rates in North Texas. We provide the best service by being your partner in safety and savings. Believe in us to protect your vessel and your budget. We are your partners in progress.`
    },
    {
      id: 'custom-and-vintage',
      title: 'Bass Boats and Specialized Craft: Protecting Your Passion',
      content: `Many of our clients in Fort Worth are serious fishermen who have invested heavily in their bass boats and specialized equipment. If you participate in tournaments or have high-end electronics and trolling motors, your insurance needs are different. It's about protecting your passion from the unique risks of the water and the road.

We can help you find policies that recognize the value of your specialized gear and provide coverage for tournament fees and replacement vessels. Susan and her expert team have helped many local anglers find the perfect balance of protection and value, ensuring that their expensive rods, reels, and electronics are fully covered. We provide the best service by being as responsive and flexible as your fishing schedule requires. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local boating insurance partners, dedicated to your success on the lake.`
    },
    {
      id: 'storm-preparedness',
      title: 'Protecting Your Boat from North Texas Weather',
      content: `The weather in Fort Worth can be brutal, and your boat is often at the mercy of the elements. From the intense sun that can damage upholstery to the sudden hailstorms that can crack hulls and windshields, your boat needs a policy that is prepared for the worst.

We look for policies that offer comprehensive coverage for storm damage, including hail and wind. We also provide advice on how to properly secure your boat during a storm, whether it's on a trailer or in a slip. At Rainbow Insurance, we are your local experts in weather-related protection. We've seen the damage that a single Texas storm can do, and we are dedicated to ensuring our clients are fully protected. We provide the best service by being your partner in preparedness as well as your advocate in recovery.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Fort Worth Boaters',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands and respects your love for the water. We've been a part of the Fort Worth community since 1993, and we've helped our neighbors protect their vessels and their memories for over 30 years. We are your neighbors, and we share your love for the lakes of North Texas.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive boat insurance for your specific vessel and lifestyle. We don't work for a big insurance company; we work for YOU. If your boating adventures take you to new lakes or you upgrade to a more powerful craft, we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners, always looking out for your best interests.

Susan and her expert team are dedicated to providing a "tight professional look" to your family's insurance portfolio. We provide the best service, the best rates, and the best policies because we know your boat is a big part of your life and your family's happiness. Believe in the Rainbow Insurance advantage today and protect your time on the water with the expertise you deserve. We are here for you, now and always, as your trusted local insurance advocates in Fort Worth.`
    }
  ];

  const faqs = [
    {
      q: "Does my homeowners insurance cover my boat?",
      a: "Generally, no. Most homeowners policies provide very limited coverage for boats, usually restricted to small, low-horsepower craft and only while on your property. For full protection on the water, you need a dedicated boat policy that addresses the unique risks of navigation and aquatic use."
    },
    {
      q: "What is 'Fuel Spill Liability'?",
      a: "Fuel spill liability covers the cost of cleaning up oil or fuel that accidentally spills from your boat. This can be extremely expensive and is often required by marinas in the Fort Worth area. It's a standard feature in the dedicated boat policies we recommend."
    },
    {
      q: "Do I need insurance to use a public boat ramp in Texas?",
      a: "While not always legally required to use a ramp, having liability insurance is essential for your financial security. Many marinas and private clubs in North Texas do require proof of insurance before you can dock or launch from their facilities."
    },
    {
      q: "How much does boat insurance cost in Fort Worth?",
      a: "For many boats, a comprehensive policy can cost between $200 and $500 per year. The price depends on the value of the boat, its horsepower, and your boating experience. We shop 56 carriers to find the absolute best rates for your specific vessel."
    },
    {
      q: "Does boat insurance cover my trailer?",
      a: "Yes, most dedicated boat policies include coverage for your trailer as well. This protects you if the trailer is damaged in an accident or stolen while it's parked. We ensure that your entire boating setup is fully protected."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Boat Insurance",
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
    "description": "Cheap boat insurance in Fort Worth. Protect your vessel, trailer, and liability on North Texas lakes. We shop 56 carriers for the best rates."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1544413647-ad539ca32a9f?w=800&h=600&fit=crop", alt: "Modern boat on Eagle Mountain Lake in Fort Worth" },
    { src: "https://images.unsplash.com/photo-1540946484063-a40da2134fe0?w=800&h=600&fit=crop", alt: "Family enjoying a day of boating in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&h=600&fit=crop", alt: "Fishing boat on a quiet North Texas lake" },
    { src: "https://images.unsplash.com/photo-1544413647-ad539ca32a9f?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth boaters" }
  ];

  return (
    <ProductPage
      title="Fort Worth Boat Insurance"
      seoTitle="Boat Insurance Fort Worth | Best Watercraft Rates & Service"
      seoDescription="Protect your boat or personal watercraft with the best rates on boat insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Boat Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="The lake is calling, and we're here to make sure you're ready. At Rainbow Insurance Agency, we help you protect your boat, your trailer, and your liability. Susan and her expert team compare 56 A+ rated carriers to find the perfect policy for your aquatic lifestyle."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
