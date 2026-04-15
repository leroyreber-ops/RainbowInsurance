import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function SR22Insurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'what-is-sr22',
      title: 'What is SR-22 Insurance? (Getting Back on the Road in Fort Worth)',
      content: `If you've had your driver's license suspended or revoked in Texas due to a DUI, multiple traffic violations, or driving without insurance, you've likely been told you need an SR-22. First, it's important to understand that an SR-22 is not actually "insurance"—it's a certificate of financial responsibility that your insurance company files with the Texas Department of Public Safety (DPS). It's a guarantee to the state that you are carrying at least the minimum required liability insurance. It's about professional restoration. We are your partners in progress.

In Fort Worth, navigating the SR-22 process can feel overwhelming and stressful. You're dealing with legal requirements, potential fees, and the loss of your mobility in a city where a car is essential for everything from getting to work to picking up groceries. SR-22 insurance is the tool that helps you regain your driving privileges and get your life back on track. It's about moving forward. We understand that the loss of a license can have a ripple effect on your entire life, affecting your job, your family, and your mental well-being. Our goal is to make the restoration process as quick and painless as possible. We are your local advocates.

At Rainbow Insurance Agency, we've been helping Fort Worth drivers navigate these challenging situations since 1993. Susan and her expert team understand that everyone makes mistakes, and we believe in providing a path to redemption without judgment. We don't just provide a certificate; we help you find the most affordable insurance that meets the state's requirements, ensuring you can legally get back on the road. We are your local advocates for driver restoration. We take the time to explain the legal jargon and the steps you need to take, providing a clear roadmap to license reinstatement. We are your strategic partners.

We shop 56+ A+ rated carriers to find the best rates for SR-22 filings. Many national carriers will significantly raise your rates or even cancel your policy if you need an SR-22, but we represent specialized companies that focus on helping drivers in your situation. Believe in us to find you a fair deal and handle the paperwork quickly. We've been the trusted choice for Tarrant County for over 30 years because we treat every client with respect and professionalism. We are your partners in progress. We also provide advice on how to avoid future violations and maintain a clean driving record, helping you move toward a more stable and affordable insurance future. We also discuss how "Defensive Driving" can help you lower your rates.`
    },
    {
      id: 'dps-requirements',
      title: 'Navigating Texas DPS Requirements and Fees',
      content: `Reinstating your license in Texas involves more than just filing an SR-22. You must also satisfy all other requirements set by the Texas Department of Public Safety (DPS). This often includes paying reinstatement fees, which can range from $100 to $1,000 depending on the reason for your suspension. It's about procedural awareness.

Susan and her expert team can help you understand exactly what you need to do to satisfy the DPS. We can provide guidance on how to pay your fees online and what documentation you need to provide. We also discuss the importance of the "Occupational Driver's License" (ODL) if you need to drive for work or essential household duties while your license is still suspended.

We provide the best service by being your comprehensive guide through the legal maze. Believe in the Rainbow Insurance advantage for your driver's license restoration. We are your partners in progress. We also discuss how "Ignition Interlock Devices" (IID) may be required in some cases.`
    },
    {
      id: 'high-risk-specialization',
      title: 'Specializing in High-Risk and Non-Standard Auto Insurance',
      content: `At Rainbow Insurance Agency, we don't shy away from "high-risk" drivers. In fact, we specialize in helping individuals with less-than-perfect driving records find affordable and reliable insurance. Whether you have multiple accidents, tickets, or a history of lapses in coverage, we have the expertise to help you. It's about non-standard expertise.

We work with 56+ carriers, many of which specialize in the "non-standard" market. This allows us to find options that major national carriers simply can't offer. Susan and her expert team take the time to understand your specific situation and find a policy that fits your needs and your budget.

We provide the best service by being your advocate in the high-risk market. Believe in the Rainbow Insurance advantage for your second chance on the road. We are your partners in progress. We also discuss how "Improving Your Credit Score" can eventually lead to lower insurance rates.`
    },
    {
      id: 'how-it-works',
      title: 'How the SR-22 Process Works in Texas',
      content: `The process of obtaining and maintaining an SR-22 in Fort Worth follows a specific set of steps. Understanding these is essential for a smooth restoration of your license. It's about procedural clarity.

Key steps in the process include:
1. Notification: You receive a notice from the Texas DPS stating that you must file an SR-22 to reinstate your license. This notice will also outline any other requirements, such as paying reinstatement fees or completing a drug and alcohol education program.
2. Finding a Carrier: You must find an insurance company that is willing to file the SR-22 on your behalf. Not all companies do this, and some may charge an additional fee for the service. At Rainbow Insurance, we work with several carriers that specialize in SR-22 filings.
3. Filing the Certificate: Your insurance company electronically files the SR-22 with the DPS. At Rainbow Insurance, we ensure this is done accurately and immediately, often while you are still on the phone with us.
4. Maintaining Coverage: You must keep the SR-22 on file for a specific period, usually two years from the date of your conviction. If your policy cancels for any reason—even if you are just a day late on a payment—the insurance company is legally required to notify the state, which will result in an immediate re-suspension of your license.
5. Reinstatement: Once the SR-22 is filed and any other requirements are met, your license is restored. You can check your status on the Texas DPS website to confirm you are legally allowed to drive.

At Rainbow Insurance, we help you manage the entire timeline. We look for policies that offer flexible payment options to ensure you never have a lapse in coverage. We provide the best service by being your guide through the bureaucracy. Believe in the Rainbow Insurance advantage for your driver's license. We cover the gaps that others miss. We are your SR-22 experts. We also provide reminders for your renewal dates to ensure your filing remains active and your license stays valid. We also review your "Financial Responsibility" status regularly.`
    },
    {
      id: 'lapse-consequences',
      title: 'The Legal Consequences of a Lapse: Why Consistency is Key',
      content: `When you are required to have an SR-22, a lapse in your insurance coverage is more than just a financial inconvenience—it's a legal crisis. The insurance company is mandated by Texas law to file an SR-26 form with the DPS if your policy cancels or expires. This form notifies the state that you are no longer meeting your financial responsibility requirements. It's about legal accountability.

The consequences of an SR-26 filing are immediate and severe:
- Automatic License Suspension: Your driving privileges will be suspended again, often without further notice.
- Resetting the Clock: In many cases, the two-year requirement for the SR-22 will "reset," meaning you have to start the entire period over again from day one.
- Additional Fees: You will likely have to pay another reinstatement fee to the DPS once you secure a new policy.
- Higher Premiums: A lapse in coverage makes you an even higher risk in the eyes of insurance companies, leading to even higher premiums on your next policy.

At Rainbow Insurance Agency, we emphasize the importance of consistent payments. We help our clients set up automatic payments or provide multiple reminders to ensure they never face the stress of a re-suspension. We provide the best service by looking out for your long-term interests. Believe in us to help you stay on the right side of the law. We are your partners in legal compliance. We understand that life happens, and if you are facing a financial struggle, we encourage you to call us *before* your payment is due so we can explore options to keep your policy active.`
    },
    {
      id: 'moving-beyond',
      title: 'Moving Beyond the SR-22: Your Path to Lower Rates',
      content: `Needing an SR-22 is a temporary situation, and our goal at Rainbow Insurance is to help you move beyond it as quickly as possible. Once you have completed your required filing period (usually two years), you can request that the SR-22 be removed from your policy. This is a major milestone on your path to more affordable insurance. It's about financial recovery.

Once the SR-22 requirement is lifted, we proactively re-shop your coverage across our 56+ carriers. As your driving record improves and the time since your violation increases, you will qualify for better rates and more standard insurance companies. We are here to celebrate this progress with you and ensure you are getting the full benefit of your improved standing.

Susan and her expert team are dedicated to your long-term success. We don't just want to help you through the crisis; we want to help you build a more secure financial future. We provide the best service by being your lifelong insurance partners. Believe in the Rainbow Insurance advantage for every stage of your driving journey. We are here for you, now and always. We are your partners in progress. We also provide advice on how to monitor your own driving record and when to expect further rate decreases as violations "fall off" your history.`
    },
    {
      id: 'non-owner-sr22',
      title: 'Non-Owner SR-22: Protection Without a Car',
      content: `What if you need an SR-22 to get your license back, but you don't actually own a car? This is a common situation in Fort Worth, and we have a specific solution: Non-Owner SR-22 insurance. This policy provides the required liability coverage when you are driving a vehicle that you do not own, satisfying the state's requirement for financial responsibility. It's about strategic compliance.

Non-owner policies are typically much more affordable than standard auto insurance because they don't cover a specific vehicle. They are a great way to get your license reinstated while you are saving for a new car or using public transportation and rideshares. However, it's important to note that a non-owner policy does *not* cover vehicles owned by you or anyone in your household. It is strictly for vehicles you borrow or rent on an occasional basis.

Susan and her expert team are experts at finding the best non-owner rates in Tarrant County. We explain the limitations and benefits of this type of coverage, ensuring you have the right protection for your specific situation. We provide the best service by finding the most efficient path to restoration. Believe in us to help you navigate the "gray areas" of the law. We are your partners in progress. We also help you transition to a standard policy once you do purchase a vehicle, ensuring there is no gap in your SR-22 filing during the switch.`
    },
    {
      id: 'cost-and-savings',
      title: 'Managing the Cost of SR-22 Insurance',
      content: `It's no secret that needing an SR-22 usually means your insurance premiums will increase. However, this doesn't mean you have to pay an arm and a leg. At Rainbow Insurance Agency, we specialize in finding the absolute lowest rates for drivers with "high-risk" profiles. It's about financial optimization.

We shop 56+ A+ rated carriers to find those that offer the most competitive rates for SR-22 filings in North Texas. We also look for every possible discount—such as defensive driving credits or bundling with other policies—to help offset the increased cost. Our goal is to make your restoration as affordable as possible.

Susan and her expert team take the time to walk you through the quotes and explain exactly what you're paying for. We provide the best service and the best rates by being your advocate in the market. They took care of us like nobody else could, and we are committed to doing the same for you. We are your local restoration partners. We are your advocates for a second chance.`
    },
    {
      id: 'rainbow-advantage',
      title: 'The Rainbow Advantage for Driver Restoration',
      content: `Choosing Rainbow Insurance Agency means choosing a partner who understands the unique challenges of the Fort Worth legal and insurance landscape. We've been a part of the local community since 1993, and we've helped thousands of our neighbors get back on the road for over 30 years. We are your neighbors.

Our independence is your greatest advantage. We represent 56+ A+ rated carriers, which means we can shop the entire market to find the absolute best rates and the most reliable SR-22 solutions for your specific situation. We don't work for a big insurance company; we work for YOU. If your situation improves—your driving record clears or you buy a new car—we are here to adjust your coverage and ensure you're always getting the best value. We are your strategic insurance partners.

Susan and her expert team are dedicated to providing a "tight professional look" to your insurance plan. We provide the best service, the best rates, and the best policies because we know your mobility is your freedom. Believe in the Rainbow Insurance advantage today and get back on the road with the expertise you deserve. We are here for you, now and always. We are your partners in progress.`
    }
  ];

  const faqs = [
    {
      q: "Is an SR-22 a type of insurance?",
      a: "No. An SR-22 is a certificate of financial responsibility that your insurance company files with the state. It proves that you have the minimum required liability insurance. You still need an underlying auto insurance policy."
    },
    {
      q: "How long do I need to keep an SR-22 in Texas?",
      a: "In most cases, you must maintain an SR-22 on file for two years from the date of your conviction. If your policy cancels during this time, your license will be immediately re-suspended. We help you stay on track."
    },
    {
      q: "Can I get an SR-22 if I don't own a car?",
      a: "Yes! You can purchase a 'Non-Owner SR-22' policy. This provides the required liability coverage and allows the insurance company to file the certificate with the state so you can get your license back."
    },
    {
      q: "How much does an SR-22 filing cost in Fort Worth?",
      a: "The filing fee itself is usually small (around $25), but your insurance premiums will likely increase because of the underlying violation. We shop 56+ carriers to find the absolute best rates to keep your costs as low as possible."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SR-22 Insurance",
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
    "description": "Cheap SR-22 insurance in Fort Worth. Fast filing and best rates for license reinstatement. We shop 56+ carriers for the best high-risk auto insurance."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop", alt: "Driver back on the road in Fort Worth" },
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop", alt: "Legal documents for license reinstatement in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop", alt: "Safe driving on North Texas highways" },
    { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop", alt: "Peace of mind for Fort Worth drivers" }
  ];

  return (
    <ProductPage
      title="Fort Worth SR-22 Insurance"
      seoTitle="SR-22 Insurance Fort Worth | Fast License Reinstatement"
      seoDescription="Get back on the road with the best rates on SR-22 insurance in Fort Worth. Susan and her expert team shop 56+ carriers for fast filing and low rates."
      heroImage="https://images.unsplash.com/photo-1533558701576-23c65e926363?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth SR-22 Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Everyone deserves a second chance. At Rainbow Insurance Agency, we help you navigate the SR-22 process and get your license back quickly and affordably. Susan and her expert team compare 56+ A+ rated carriers to find the perfect policy for your restoration."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
