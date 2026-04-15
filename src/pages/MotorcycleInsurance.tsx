import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function MotorcycleInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'two-wheel-freedom',
      title: 'Protecting Your Two-Wheel Freedom in Fort Worth',
      content: `In the open spaces of North Texas, there's nothing quite like the feeling of the wind in your face and the road stretching out before you. From the urban cruises through Sundance Square and the Stockyards to the scenic backroads of Tarrant and Parker counties, motorcycles are the ultimate expression of freedom and individuality. Whether you're a daily commuter on a sleek sportbike, a weekend cruiser on a classic Harley-Davidson, or a long-distance tourer, your motorcycle is a significant investment and a source of immense pride. Motorcycle insurance is the essential protection that ensures your ride remains a joy, not a financial disaster. It's about rider security in an increasingly busy DFW metroplex. We understand that for many in Fort Worth, a motorcycle isn't just a vehicle; it's a lifestyle, a community, and a way of life.

A common mistake many Fort Worth riders make is assuming their auto insurance will adequately cover their motorcycle. In reality, motorcycles are unique vehicles with their own set of risks and requirements, and they need a specialized policy. If your bike is stolen from your garage, damaged in a collision, or if you're involved in an accident with another vehicle, a standard auto policy will provide zero coverage. Motorcycle insurance is specifically designed to address these unique risks, providing the financial shield you need for the road. It's about ensuring your passion is protected against the unexpected. Without the right policy, a single accident could mean the end of your riding days and a massive financial loss that could impact your family's future.

At Rainbow Insurance Agency, we've been helping Fort Worth riders protect their bikes since 1993. Susan and her expert team understand the local riding culture and the specific risks of motorcycling in North Texas. We don't just provide a policy; we help you build a comprehensive protection plan that covers your bike, your liability, and your specialized gear. We are your local advocates for rider security, ensuring that you can focus on the road ahead while we handle the details of your protection. We take the time to learn about your riding habits, your bike's modifications, and your goals, ensuring that every policy we recommend is a perfect fit for your needs.

We shop 56 A+ rated carriers to find the best rates and the most robust coverage for your specific motorcycle. Whether you have a custom chopper, a vintage classic, or a modern touring bike, we have the expertise to guide you. Believe in us to protect your ride and your future. We've been the trusted choice for Tarrant County for over 30 years because we treat every rider like family. We are your partners in progress, dedicated to keeping the spirit of the road alive and well in Fort Worth.`
    },
    {
      id: 'off-road-insurance',
      title: 'Off-Road Adventures: Dirt Bikes and ATVs',
      content: `Fort Worth isn't just about the paved roads; many of our neighbors enjoy the thrill of off-road adventures on dirt bikes, ATVs, and side-by-sides. Whether you're hitting the trails at a local park or exploring private land in the surrounding counties, these vehicles require their own specialized insurance protection.

Off-road insurance provides coverage for physical damage to your vehicle, as well as liability protection in case you accidentally injure someone or damage their property while riding. It's also important to consider coverage for your trailer and the gear you use for your off-road excursions. At Rainbow Insurance, we can help you find a policy that covers your off-road vehicles both on and off the trailer, ensuring you're protected from the moment you leave your driveway.

We understand the unique risks of off-roading, from mechanical failures in remote areas to the potential for collisions in challenging terrain. Susan and her expert team can help you identify the right coverage limits and deductibles for your off-road lifestyle, ensuring that your weekend fun doesn't turn into a financial headache.`
    },
    {
      id: 'theft-prevention',
      title: 'Keeping Your Bike Safe in the DFW Metroplex',
      content: `Motorcycle theft is a significant concern in any major metropolitan area, and Fort Worth is no exception. While insurance provides a financial safety net, the best protection is preventing the theft from happening in the first place.

We recommend several strategies for our local riders:
1. Use High-Quality Locks: Invest in a heavy-duty disc lock or a high-security chain and lock. Always lock your bike, even if you're only leaving it for a few minutes.
2. Park in Well-Lit Areas: When you're out and about in Sundance Square or the Near Southside, try to park in areas with plenty of foot traffic and good lighting.
3. Use a Cover: A simple motorcycle cover can make your bike less attractive to opportunistic thieves by hiding its make and model.
4. Install a Tracking Device: Modern GPS tracking devices can significantly increase the chances of recovering your bike if it is stolen.

At Rainbow Insurance, we also look for policies that offer "Theft Protection" discounts for riders who use these safety measures. We provide the best service by being your partner in prevention as well as your advocate in protection.`
    },
    {
      id: 'passenger-liability',
      title: 'Passenger Liability: Protecting Your Co-Rider',
      content: `Many Fort Worth riders enjoy sharing the road with a passenger. Whether it's a spouse, a friend, or a family member, having someone on the back of your bike adds a new dimension to the riding experience. However, it also adds a new dimension of responsibility. If you are involved in an accident and your passenger is injured, you could be held legally responsible for their medical bills and other damages. It's about shared safety.

Standard motorcycle insurance policies often include "Guest Passenger Liability" coverage, but the limits can vary significantly. We help you understand the specific passenger-related provisions in your policy and ensure you have the right limits to protect both yourself and your co-rider. This is a critical safety net that ensures your loved ones are protected in the event of the unexpected.

Susan and her expert team are dedicated to the safety of the entire riding community. We provide the best service by ensuring your liability protection is comprehensive and covers everyone on your bike. Believe in the Rainbow Insurance advantage for your shared adventures. We are your partners in progress. We also discuss the importance of proper gear for passengers, ensuring they are as protected as the rider.`
    },
    {
      id: 'roadside-assistance',
      title: 'The Importance of Roadside Assistance for Bikers',
      content: `A mechanical breakdown or a flat tire is a major inconvenience for any driver, but for a motorcyclist, it can be a dangerous situation. Being stranded on the side of a busy North Texas highway like I-30 or I-35W is the last thing any rider wants. That's why we strongly recommend adding "Roadside Assistance" to your motorcycle insurance policy. It's about rider resilience.

Motorcycle-specific roadside assistance is different from standard auto plans. It ensures that the towing company has the specialized equipment (like a flatbed trailer with proper tie-downs) to transport your bike safely without causing further damage. It also typically covers services like fuel delivery, battery jump-starts, and flat tire assistance.

At Rainbow Insurance Agency, we look for policies that offer robust roadside assistance programs. We believe that "Best Service" means being there for our clients when they are most vulnerable. We handle the insurance, but we also provide the peace of mind that help is just a phone call away. Believe in us to keep you moving forward, even when the road gets rough. We are your partners in progress. We also provide tips on how to perform basic roadside checks to prevent common breakdowns.`
    },
    {
      id: 'coverage-details',
      title: 'What Does Motorcycle Insurance Cover?',
      content: `Motorcycle insurance is a specialized policy that combines elements of auto and property insurance. Understanding the scope of this coverage is essential for any Fort Worth rider. It's about total vehicle defense.

Key components of coverage include:
1. Collision Coverage: Pays for damage to your motorcycle if you hit another vehicle or an object, or if you lay your bike down. This is vital for protecting your investment on the road. We also discuss "Total Loss" settlements and how they apply to your specific bike.
2. Comprehensive Coverage: Protects your bike from non-collision events like theft, fire, vandalism, and damage from storms or falling objects. In Fort Worth, where motorcycle theft is a real risk, this is critical. We also look at coverage for "Animal Strikes," which are common on North Texas backroads.
3. Liability Protection: Protects you if you accidentally injure someone or damage their property while riding. It covers legal defense costs and medical payments. This is the bedrock of your financial defense.
4. Uninsured/Underinsured Motorist: Protects you if you are hit by another driver who doesn't have insurance or doesn't have enough to cover your injuries or damage. This is especially important for motorcyclists, who are more vulnerable in an accident.
5. Medical Payments: Covers medical expenses for you and your passenger if you're injured in an accident, regardless of who is at fault.

At Rainbow Insurance, we help you identify the specific limits and deductibles you need. We also look for policies that include coverage for "Custom Parts and Equipment" (CPE), ensuring your expensive chrome, paint, and accessories are protected. We provide the best service by ensuring your policy matches the way you ride. Believe in the Rainbow Insurance advantage for your life on two wheels. We cover the gaps that others miss. We are your motorcycle insurance experts. We also discuss specialized coverages like "Trip Interruption" for long-distance tourers.`
    },
    {
      id: 'safety-and-discounts',
      title: 'Rider Safety: Protecting Yourself and Your Wallet',
      content: `At Rainbow Insurance Agency, we believe that a safe rider is a protected rider. Taking proactive steps to improve your safety can not only prevent an accident but also lead to significant discounts on your insurance premiums. It's about proactive preservation.

We recommend the following for any Fort Worth rider:
- Take a Motorcycle Safety Course: Many insurance companies offer discounts for completing an approved safety course (like the MSF course). In Texas, this is also a requirement for your M endorsement.
- Wear Protective Gear: Always wear a helmet, gloves, and appropriate clothing. While it doesn't directly lower your premium, it's the best way to protect yourself.
- Maintain Your Bike: Regularly check your tires, brakes, and lights. A well-maintained motorcycle is less likely to have a mechanical failure or an accident.
- Bundle Your Policies: Combining your motorcycle insurance with your auto or home policy is one of the most effective ways to save money.

Susan and her expert team are experts at finding every possible discount for our clients. We shop 56 carriers to find the absolute best rates in North Texas. We provide the best service by being your partner in safety and savings. Believe in us to protect your ride and your budget. We are your partners in progress.`
    },
    {
      id: 'custom-and-vintage',
      title: 'Custom and Vintage Bikes: Protecting Your Masterpiece',
      content: `Many of our clients in Fort Worth have invested thousands of dollars and countless hours into their custom or vintage motorcycles. If you have a one-of-a-kind build or a perfectly restored classic, your insurance needs are different. It's about protecting your masterpiece from the unique risks of the road and the elements.

We can help you find policies that offer "Agreed Value" coverage, ensuring you get the full appraised value of your bike if it's totaled, rather than just its depreciated market value. This is essential for bikes that have seen significant investment in custom paint, chrome, or performance parts. Susan and her expert team have helped many local enthusiasts find the perfect balance of protection and value, ensuring that their hard work is fully recognized by the insurance carrier.

We also look for policies that include "Custom Parts and Equipment" (CPE) coverage as a standard feature or a low-cost add-on. This ensures that your modifications are protected from the same risks as the rest of your bike. We provide the best service by being as responsive and flexible as your passion requires. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local motorcycle insurance partners, dedicated to preserving the beauty and the value of your ride.`
    },
    {
      id: 'winter-storage',
      title: 'Winter Storage and Seasonal Considerations',
      content: `While Fort Worth enjoys relatively mild winters, there are still times when you might choose to put your bike in storage for a few months. During these times, your insurance needs change, but they don't disappear.

"Lay-up" or "Storage" coverage allows you to maintain comprehensive protection for your bike (against theft, fire, and storm damage) while significantly reducing your liability and collision premiums while the bike is not being ridden. This is a great way to save money during the off-season without leaving your investment vulnerable.

However, it's critical to remember to "reactivate" your full coverage before you take your first ride of the spring. At Rainbow Insurance, we help you manage these seasonal transitions, ensuring you're always protected when you're on the road and always saving when you're not. We provide the best service by being proactive and attentive to the rhythms of your riding life.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Fort Worth Riders',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands and respects your love for the road. We've been a part of the Fort Worth community since 1993, and we've helped our neighbors protect their bikes and their freedom for over 30 years. We are your neighbors, and we share your passion for the open road in North Texas.

Our independence is your greatest advantage. We represent 56 A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most comprehensive motorcycle insurance for your specific bike and lifestyle. We don't work for a big insurance company; we work for YOU. If your riding adventures take you to new horizons or you upgrade to a more powerful machine, we are here to adjust your coverage and ensure you remain fully protected. We are your strategic insurance partners, always looking out for your best interests.

Susan and her expert team are dedicated to providing a "tight professional look" to your family's insurance portfolio. We provide the best service, the best rates, and the best policies because we know your motorcycle is a big part of your life and your identity. Believe in the Rainbow Insurance advantage today and protect your ride with the expertise you deserve. We are here for you, now and always, as your trusted local insurance advocates in Fort Worth.`
    }
  ];

  const faqs = [
    {
      q: "Does my auto insurance cover my motorcycle?",
      a: "No. Motorcycles require a specialized policy that addresses their unique risks and requirements. A standard auto policy will specifically exclude coverage for motorcycles. You need a dedicated motorcycle policy to be legally and financially protected."
    },
    {
      q: "What is 'Agreed Value' coverage for a motorcycle?",
      a: "Agreed Value coverage ensures that if your bike is totaled, you receive the full appraised value that you and the insurance company agreed upon when the policy was written. This is critical for custom and vintage bikes where the market value doesn't reflect the true investment."
    },
    {
      q: "Do I need insurance to ride a motorcycle in Texas?",
      a: "Yes. Texas law requires all motorcycle operators to carry minimum liability insurance. Furthermore, you must have a valid Class M driver's license to legally operate a motorcycle on public roads in the state of Texas."
    },
    {
      q: "How much does motorcycle insurance cost in Fort Worth?",
      a: "For many riders, a basic policy can cost as little as $100 to $300 per year. The price depends on the type of bike, your riding experience, and the coverage limits you choose. We shop 56 carriers to find the absolute best rates for your specific ride."
    },
    {
      q: "Does motorcycle insurance cover my helmet and gear?",
      a: "Many policies include a certain amount of coverage for 'Safety Apparel' as a standard feature. This can cover your helmet, jacket, and boots if they are damaged in an accident. We can help you find a policy that provides the right level of protection for your gear."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Motorcycle Insurance",
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
    "description": "Cheap motorcycle insurance in Fort Worth. Protect your bike from theft, accidents, and liability. We shop 56 carriers for the best rates on cruiser, sportbike, and touring insurance."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop", alt: "Classic cruiser motorcycle on a Fort Worth road" },
    { src: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&h=600&fit=crop", alt: "Modern sportbike in a Tarrant County setting" },
    { src: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&h=600&fit=crop", alt: "Motorcycle safety gear and protection in North Texas" },
    { src: "https://images.unsplash.com/photo-1558981424-80aa721fe365?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth riders" }
  ];

  return (
    <ProductPage
      title="Fort Worth Motorcycle Insurance"
      seoTitle="Motorcycle Insurance Fort Worth | Best Bike Rates & Service"
      seoDescription="Protect your motorcycle with the best rates on bike insurance in Fort Worth. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Motorcycle Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="The road is calling, and we're here to make sure you're ready. At Rainbow Insurance Agency, we help you protect your motorcycle from theft, accidents, and liability. Susan and her expert team compare 56 A+ rated carriers to find the perfect policy for your riding lifestyle."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
