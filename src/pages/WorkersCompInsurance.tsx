import ProductPage from '../components/ProductPage';

interface PageProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function WorkersCompInsurance({ navigateTo, openQuoteForm }: PageProps) {
  const sections = [
    {
      id: 'protection',
      title: 'Protecting Your Workforce and Your Business in Fort Worth',
      content: `In the great state of Texas, Workers' Compensation is a unique and critical component of the business landscape. While it is technically optional for most private employers (Texas is the only state that allows "opting out"), choosing to carry Workers' Comp is one of the smartest and most protective decisions a Fort Worth business owner can make. It's a commitment to your team's well-being and a shield for your company's financial stability. We understand that for many in Fort Worth, your employees are more than just workers; they are the lifeblood of your business, the hands that build, and the hearts that serve our community.

It provides essential medical benefits and wage replacement to employees who are injured on the job, while simultaneously providing the employer with "exclusive remedy" protection. This is a powerful legal concept: it means that an injured employee generally cannot sue you for damages related to their injury, protecting your business from potentially unlimited legal liability and the devastating costs of a personal injury lawsuit. Without this protection, a single workplace accident—whether it's at a construction site in the Stockyards or a warehouse in the Alliance Corridor—could lead to a judgment that wipes out your business entirely. It's about ensuring a fair, predictable, and compassionate outcome for everyone involved.

At Rainbow Insurance Agency, we've been helping local businesses navigate the complexities of the Texas Workers' Comp system since 1993. We understand that your employees are your most valuable asset, and protecting them is synonymous with protecting your company's future. Susan and her expert team are experts at finding affordable Workers' Comp policies that provide the best service and the best rates. We shop 56 A+ rated carriers to ensure your team is looked after like family. Believe in us for your insurance needs; we've been the trusted choice for Tarrant County entrepreneurs for over three decades. We are your partners in workplace safety, your advocates in recovery, and your neighbors in progress. We also provide advice on how to implement safety protocols to reduce your risk and potentially lower your premiums over time.`
    },
    {
      id: 'safety-audits',
      title: 'Safety Audits and Risk Mitigation: A Proactive Approach',
      content: `At Rainbow Insurance Agency, we believe that the best way to handle a workers' comp claim is to prevent it from happening in the first place. That's why we offer guidance on safety audits and risk mitigation strategies tailored to the specific industries of Fort Worth.

Whether you're running a manufacturing plant in North Fort Worth or a retail shop in Sundance Square, we can help you identify potential hazards and implement safety protocols that protect your team. We work with carriers that provide specialized safety resources, including on-site inspections and training materials.

Susan and her expert team provide the best service by being proactive partners in your safety. We help you understand the latest OSHA regulations and industry best practices, ensuring your workplace is as safe as possible. Believe in the Rainbow Insurance advantage for a safer, more productive workforce. We are your partners in prevention.`
    },
    {
      id: 'audit-support',
      title: 'Expert Audit Support: Navigating the Annual Review',
      content: `The annual workers' comp audit can be a stressful time for any business owner. It's the process where the insurance carrier reviews your actual payroll for the year to ensure you paid the correct premium. If your payroll was higher than estimated, you could face a large, unexpected bill.

Susan and her expert team are here to help you navigate the audit process with ease. We provide the best service by helping you organize your records, ensuring your employees are classified correctly (which can save you thousands in premiums), and advocating for you if there are any discrepancies with the carrier's findings.

We provide the clarity and support you need to ensure your audit is fair and accurate. Believe in the Rainbow Insurance advantage for a stress-free audit experience. We are your partners in financial accuracy.`
    },
    {
      id: 'nonsubscriber-risks',
      title: 'The Hidden Risks of Being a Texas Nonsubscriber',
      content: `While Texas allows you to be a "nonsubscriber" (not carrying workers' comp), the risks are immense. Without the "exclusive remedy" protection, you can be sued for negligence, and you lose many of your traditional legal defenses.

In a lawsuit, a nonsubscriber can be held liable for unlimited damages, including pain and suffering, which are not covered by standard workers' comp. Furthermore, many commercial contracts and leases in Fort Worth require proof of workers' comp, meaning being a nonsubscriber could limit your business opportunities.

Susan and her expert team can help you compare the costs and risks of being a nonsubscriber versus carrying a traditional policy. We provide the best service by helping you make an informed decision that protects your business's long-term viability. Believe in us to provide the expert guidance you need to navigate the unique Texas insurance landscape.`
    },
    {
      id: 'return-to-work',
      title: 'The Importance of Return-to-Work Programs',
      content: `A well-designed "Return-to-Work" (RTW) program is a win-win for both the employer and the injured employee. It helps the employee transition back into the workforce in a safe and productive manner, while also reducing the overall cost of the workers' comp claim. In Fort Worth, where the labor market is competitive, keeping your experienced team members engaged is essential. It's about workforce retention.

RTW programs often involve temporary light-duty assignments or modified work schedules that accommodate the employee's physical limitations during their recovery. This keeps the employee connected to the workplace, maintains their sense of purpose, and significantly reduces the amount of income benefits paid out by the insurance carrier. Susan and her expert team can help you develop and implement an effective RTW program that fits your business's specific needs.

We provide the best service by helping you understand the benefits of RTW and choosing a carrier that offers robust support for these programs. Believe in the Rainbow Insurance advantage for your team's recovery and your business's bottom line. We are your partners in progress. We also discuss how "Vocational Rehabilitation" can be used for more serious injuries.`
    },
    {
      id: 'remote-teams',
      title: 'Workers\' Comp for Remote and Hybrid Teams',
      content: `With the rise of remote and hybrid work in Fort Worth and across the DFW metroplex, the boundaries of the "workplace" have shifted. It's important to understand that workers' compensation can still apply to employees who are injured while working from home. If the injury occurs in the course and scope of their employment, it may be covered. It's about evolving protection.

This creates new challenges for employers in terms of safety oversight and claim verification. We help you navigate these complexities by providing guidance on home office safety checklists and clear remote work policies. Susan and her expert team can help you find carriers that are experienced in handling claims for remote workers, ensuring your entire team is protected, no matter where they are working.

We provide the best service by staying ahead of the latest trends in the workplace and helping you choose a policy that provides the most comprehensive protection. Believe in the Rainbow Insurance advantage for your modern workforce. We are your partners in progress. We also discuss how "Telemedicine" can be used to provide quick and convenient care for remote employees.`
    },
    {
      id: 'benefits-deep',
      title: 'What Does Workers\' Comp Actually Cover? (A Deep Dive)',
      content: `A standard Workers' Compensation policy in Texas provides four main types of benefits, each designed to provide a specific layer of security for both the worker and the employer during a difficult time:

1. Medical Benefits: This covers all reasonable and necessary medical care related to the work injury. From emergency room visits and surgeries to physical therapy, chiropractic care, and prescription medications, Workers' Comp ensures the injured employee gets the care they need to recover without the burden of medical bills. It covers the cost of doctors, hospitals, and specialized treatments. We also look for "Network" vs. "Non-Network" options to ensure your team has access to the best providers in Fort Worth.

2. Income Benefits: These benefits replace a portion of the wages lost while the employee is unable to work due to their injury. There are several types of income benefits (Temporary, Impairment, Supplemental, and Lifetime) depending on the severity and duration of the disability. This provides a vital financial lifeline for families when the primary breadwinner is sidelined. We help you understand the "Average Weekly Wage" (AWW) calculation and how it impacts these benefits.

3. Death and Burial Benefits: In the tragic event of a fatal workplace accident, Workers' Comp provides significant financial support to the employee's family and covers burial expenses. It's a small but important comfort in a time of immense grief. We also discuss how these benefits are distributed to legal beneficiaries.

4. Employers Liability: This is a critical "Part Two" of the policy. It protects your business if you are sued by an injured employee's family for damages not covered by the standard Workers' Comp benefits, such as loss of consortium or gross negligence. It provides your legal defense and pays any resulting settlements. We also discuss "Stop Gap" coverage for businesses operating in multiple states.

Susan and her expert team take the time to explain these complex coverages in detail, ensuring you understand exactly how your business and your team are protected. We shop 56+ carriers to find the best service and the best rates, so you aren't left with dangerous gaps in your defense. We took care of us like nobody else could, and we are committed to doing the same for your company. We provide the security your team deserves. We also review your policy annually to ensure your coverage keeps pace with your business's growth.`
    },
    {
      id: 'cost-control-modifiers',
      title: 'Controlling Costs: Experience Modifiers and Safety',
      content: `Workers' Compensation premiums are not arbitrary; they are based on your payroll, your industry classification (class codes), and your "Experience Modifier" (E-Mod). The E-Mod is a numerical reflection of your business's safety record compared to others in your specific industry. It is essentially a "safety score" that directly impacts your bottom line.

A modifier of 1.0 is considered average for your industry. If your modifier is below 1.0, you receive a discount on your premiums; if it's above 1.0, you pay a surcharge. At Rainbow Insurance Agency, we help you implement safety programs, accident prevention strategies, and return-to-work programs that can lower your E-Mod and significantly reduce your premiums over time. We help you turn safety into a competitive advantage.

We also look for carriers that offer "Pay-As-You-Go" options. This modern approach allows you to pay your premium based on your *actual* payroll each month rather than an estimate. This dramatically improves your cash flow and eliminates the stress and financial surprise of year-end audits. Susan and her expert team are dedicated to finding you the absolute lowest rates in Fort Worth. We believe in providing the best service and the best policies, and that means helping you manage your total cost of risk. Believe in us to find you the best value in North Texas. We are your cost-control specialists.`
    },
    {
      id: 'ghost-policies-contractors',
      title: 'Ghost Policies and Specialized Contractor Needs',
      content: `For many small contractors, sole proprietors, and artisans in Fort Worth, a full Workers' Comp policy may seem unnecessary if they have no employees. However, many general contractors, project owners, and commercial landlords require proof of Workers' Comp before you can even step onto a job site or sign a contract. This is a common hurdle for growing businesses.

In these cases, we can provide what is often called a "Ghost Policy." This is a minimum-premium Workers' Comp policy that provides a Certificate of Insurance (COI) to satisfy contractual requirements, even if the owner is excluded from coverage. It's a vital tool for staying compliant, winning contracts, and growing your business in the competitive North Texas market. It allows you to compete for larger projects that require this specific proof of insurance.

Susan and her expert team are experts at the technical side of contractor insurance and the specific requirements of the DFW construction industry. We know that in the construction industry, time is money. We prioritize providing the COIs you need quickly and accurately, ensuring you never miss a deadline or a contract opportunity. Believe in us to find you the best value and the most professional support in North Texas. We keep your business moving forward.`
    },
    {
      id: 'claims-advocacy',
      title: 'Expert Claims Support: Your Advocate in the System',
      content: `When a workplace injury occurs, the claims process can be overwhelming, confusing, and emotionally charged for both the employer and the employee. You need an advocate who understands the intricacies of the Texas Workers' Compensation system and can ensure your employee gets the care they need while protecting your business's interests and your safety record.

Susan and her expert team have decades of experience handling Workers' Comp claims for Fort Worth businesses across all industries. We provide the best service and support, helping you navigate the paperwork, communicate with the carrier, manage the medical provider relationship, and facilitate the return-to-work process. We are your voice in the system.

We believe that our job doesn't end when the policy is written; that's when it truly begins. We are here to support you through every challenge, providing the expert advice and the personal touch that only a local agency can offer. We believe in providing the best service and the best rates, and that means being there for you when you need us most. Believe in us to safeguard your professional future. We are your claims advocates.`
    },
    {
      id: 'local-business-expertise',
      title: 'The Rainbow Advantage: Local Expertise Since 1993',
      content: `Rainbow Insurance Agency is proud to be a deeply rooted and active part of the Fort Worth business community. We've been serving local employers for over 30 years, and we understand the specific challenges and opportunities of managing a workforce in North Texas—from the local labor market to the specific risks of our region's diverse industries. We've seen the industries evolve, and we've been here for our neighbors through every economic cycle. We are invested in the success of our local economy because this is our home too.

Our independence is your greatest advantage. We don't work for a big corporate insurance company; we work for YOU. When you call our office on 8th Avenue, you aren't talking to a computer or a distant call center; you're talking to a local expert who knows the local business landscape, understands your specific needs, and cares about your success. We are your neighbors and your partners, dedicated to providing the personal touch that only a local agency can offer.

We represent 56 A+ rated carriers, allowing us to find the absolute best rates for every type of business—from small retail shops and restaurants to large construction firms, manufacturing plants, and industrial facilities. We provide the best service and the best rates because we are committed to this community. We don't just sell you a policy; we're here to support your business's growth and success, providing the expert advice and the personal touch that only a local agency can offer. They took care of us like nobody else could, and we are committed to doing the same for you. Believe in the Rainbow Insurance advantage and protect your team with the peace of mind you deserve. We are your partners in prosperity, now and always.`
    }
  ];

  const faqs = [
    {
      q: "Is Workers' Compensation required in Texas?",
      a: "No, Texas is the only state that allows private employers to 'opt out' of Workers' Compensation. However, employers who do not carry Workers' Comp (known as 'nonsubscribers') lose their legal protections and can be sued for unlimited damages if an employee is injured. We almost always recommend carrying Workers' Comp for the 'exclusive remedy' protection it provides."
    },
    {
      q: "How are Workers' Comp premiums calculated?",
      a: "Premiums are calculated using the formula: (Payroll / 100) x Class Code Rate x Experience Modifier. Your industry's risk level determines the Class Code Rate, and your safety record determines your Experience Modifier. Susan and her expert team can help you find the best rates from 56 carriers."
    },
    {
      q: "What is an 'Experience Modifier' (E-Mod)?",
      a: "An E-Mod is a factor that adjusts your premium based on your past claims history. A modifier of 1.0 is average. If your modifier is below 1.0, you get a discount; if it's above 1.0, you pay a surcharge. We help you implement safety programs to keep your E-Mod low and your costs down."
    },
    {
      q: "Does Workers' Comp cover my subcontractors?",
      a: "In Texas, if you hire a subcontractor who doesn't have their own Workers' Comp, you could be held responsible for their injuries. We always recommend requiring proof of Workers' Comp from all subcontractors or including them on your own policy to avoid unexpected liability."
    },
    {
      q: "What happens during a Workers' Comp audit?",
      a: "During an audit, the carrier reviews your actual payroll records for the policy period to ensure the premium you paid matches your actual exposure. Susan and her expert team provide expert support to ensure your audit is fair, accurate, and that you are using the correct class codes."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Workers' Compensation Insurance",
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
    "description": "Cheap workers' compensation insurance in Fort Worth. We shop 56 carriers to find the best rates for small businesses and contractors. Protect your team today."
  };

  const bodyImages = [
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop", alt: "Fort Worth construction workers following safety protocols" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", alt: "Manufacturing team protected by workers compensation" },
    { src: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?w=800&h=600&fit=crop", alt: "Office staff and workplace safety in Tarrant County" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop", alt: "Peace of mind for North Texas employers and employees" }
  ];

  return (
    <ProductPage
      title="Fort Worth Workers' Comp Insurance"
      seoTitle="Cheap Workers' Comp Fort Worth | Best Rates & Service"
      seoDescription="Protect your employees and your business with the best rates on Fort Worth Workers' Comp insurance. Susan and her expert team shop 56 carriers for you."
      heroImage="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=1600&h=900&fit=crop"
      heroSubtitle="Get the absolute lowest rates and best service for Fort Worth Workers' Comp Insurance in Fort Worth. Susan and her expert team shop 56 A+ rated carriers to find you the perfect coverage at the best price."
      mainContent="Your employees are your family. At Rainbow Insurance Agency, we provide the expert guidance and competitive rates you need to protect them. Susan and her expert team compare 56 A+ rated carriers to find the perfect Workers' Comp policy for your business."
      sections={sections}
      faqs={faqs}
      schema={schema}
      openQuoteForm={openQuoteForm}
      navigateTo={navigateTo}
      bodyImages={bodyImages}
    />
  );
}
