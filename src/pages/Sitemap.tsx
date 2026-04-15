import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Sitemap() {
  const categories = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Our Carriers", path: "/carriers" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Contact Us", path: "/contact" },
      ]
    },
    {
      title: "Insurance Products",
      links: [
        { name: "Car Insurance", path: "/fort-worth-car-insurance" },
        { name: "Home Insurance", path: "/fort-worth-home-insurance" },
        { name: "Business Insurance", path: "/fort-worth-business-insurance" },
        { name: "SR-22 Filing", path: "/fort-worth-sr22" },
        { name: "Renters Insurance", path: "/fort-worth-renters-insurance" },
        { name: "Insurance Bundles", path: "/fort-worth-bundles" },
        { name: "Motorcycle Insurance", path: "/fort-worth-motorcycle-insurance" },
        { name: "Boat Insurance", path: "/fort-worth-boat-insurance" },
        { name: "RV Insurance", path: "/fort-worth-rv-insurance" },
        { name: "Commercial Auto Insurance", path: "/fort-worth-commercial-auto-insurance" },
        { name: "General Liability Insurance", path: "/fort-worth-general-liability" },
        { name: "Workers' Comp Insurance", path: "/fort-worth-workers-comp" },
        { name: "Umbrella Insurance", path: "/fort-worth-umbrella-insurance" },
        { name: "Condo Insurance", path: "/fort-worth-condo-insurance" },
        { name: "Flood Insurance", path: "/fort-worth-flood-insurance" },
        { name: "Classic Car Insurance", path: "/fort-worth-classic-car-insurance" },
        { name: "Rideshare Insurance", path: "/fort-worth-rideshare-insurance" },
        { name: "Mobile Home Insurance", path: "/fort-worth-mobile-home-insurance" },
        { name: "Pet Insurance", path: "/fort-worth-pet-insurance" },
        { name: "Landlord Insurance", path: "/fort-worth-landlord-insurance" },
        { name: "Mexico Insurance", path: "/fort-worth-mexico-insurance" },
        { name: "Contractor Insurance", path: "/fort-worth-contractor-insurance" },
        { name: "Hail Damage Insurance", path: "/fort-worth-hail-damage-insurance" },
        { name: "Notary Services", path: "/fort-worth-notary-services" },
      ]
    },
    {
      title: "Insurance Resources",
      links: [
        { name: "Auto Insurance Discounts", path: "/fort-worth-auto-insurance-discounts" },
        { name: "Home Insurance Discounts", path: "/fort-worth-home-insurance-discounts" },
        { name: "Texas Minimum Auto Insurance", path: "/fort-worth-texas-minimum-auto-insurance" },
        { name: "Teen Driver Insurance", path: "/fort-worth-teen-driver-insurance" },
        { name: "Senior Auto Insurance", path: "/fort-worth-senior-auto-insurance" },
        { name: "Insurance Deductibles Explained", path: "/insurance-deductibles-explained" },
        { name: "Insurance Claims Process", path: "/fort-worth-insurance-claims-process" },
        { name: "Insurance After an Accident", path: "/fort-worth-insurance-after-accident" },
        { name: "Uninsured Motorist Coverage", path: "/fort-worth-uninsured-motorist-coverage" },
        { name: "Understanding Texas Laws", path: "/understanding-texas-insurance-laws" },
      ]
    },
    {
      title: "DFW Locations",
      links: [
        { name: "Dallas Insurance", path: "/dallas-insurance" },
        { name: "Arlington Insurance", path: "/arlington-insurance" },
        { name: "Plano Insurance", path: "/plano-insurance" },
        { name: "Irving Insurance", path: "/irving-insurance" },
        { name: "Garland Insurance", path: "/garland-insurance" },
        { name: "Grand Prairie Insurance", path: "/grand-prairie-insurance" },
        { name: "McKinney Insurance", path: "/mckinney-insurance" },
        { name: "Frisco Insurance", path: "/frisco-insurance" },
        { name: "Mesquite Insurance", path: "/mesquite-insurance" },
        { name: "Carrollton Insurance", path: "/carrollton-insurance" },
        { name: "Denton Insurance", path: "/denton-insurance" },
        { name: "Richardson Insurance", path: "/richardson-insurance" },
        { name: "Lewisville Insurance", path: "/lewisville-insurance" },
        { name: "Allen Insurance", path: "/allen-insurance" },
        { name: "Flower Mound Insurance", path: "/flower-mound-insurance" },
        { name: "North Richland Hills", path: "/north-richland-hills-insurance" },
        { name: "Mansfield Insurance", path: "/mansfield-insurance" },
        { name: "Rowlett Insurance", path: "/rowlett-insurance" },
        { name: "Euless Insurance", path: "/euless-insurance" },
        { name: "DeSoto Insurance", path: "/desoto-insurance" },
        { name: "Cedar Hill Insurance", path: "/cedar-hill-insurance" },
        { name: "Coppell Insurance", path: "/coppell-insurance" },
        { name: "Duncanville Insurance", path: "/duncanville-insurance" },
        { name: "Hurst Insurance", path: "/hurst-insurance" },
      ]
    },
    {
      title: "Insurance Carriers",
      links: [
        { name: "Affirmative Insurance", path: "/affirmative-insurance" },
        { name: "Agricultural Workers", path: "/agricultural-workers-mutual-auto-insurance" },
        { name: "American Access", path: "/american-access-casualty-insurance" },
        { name: "American Casualty", path: "/american-casualty-insurance" },
        { name: "American Mercury", path: "/american-mercury-insurance" },
        { name: "American Modern Lloyds", path: "/american-modern-lloyds-insurance" },
        { name: "American Modern P&C", path: "/american-modern-property-and-casualty-insurance" },
        { name: "American Risk", path: "/american-risk-insurance" },
        { name: "AssuranceAmerica", path: "/assuranceamerica-insurance" },
        { name: "Aventus Insurance", path: "/aventus-insurance" },
        { name: "Berkshire Hathaway", path: "/berkshire-hathaway-homestate-insurance" },
        { name: "GEICO Insurance", path: "/geico-county-mutual-insurance" },
        { name: "The General", path: "/the-general-insurance" },
        { name: "Home State County Mutual", path: "/home-state-county-mutual-insurance" },
        { name: "Homebound Insurance", path: "/homebound-insurance" },
        { name: "Homeowners of America", path: "/homeowners-of-america-insurance" },
        { name: "Progressive Insurance", path: "/progressive-insurance" },
        { name: "Foremost Insurance", path: "/foremost-insurance" },
        { name: "Safeway Insurance", path: "/safeway-insurance" },
        { name: "ACCC Insurance", path: "/accc-insurance" },
        { name: "Homesite Insurance", path: "/homesite-insurance" },
        { name: "Incline Casualty", path: "/incline-casualty-insurance" },
        { name: "Infinity County Mutual", path: "/infinity-county-mutual-insurance" },
        { name: "Integon National", path: "/integon-national-insurance" },
        { name: "Markel American", path: "/markel-american-insurance" },
        { name: "Mercury Insurance", path: "/mercury-insurance" },
        { name: "MGA Insurance", path: "/mga-insurance" },
        { name: "MIC General", path: "/mic-general-insurance" },
        { name: "MS Transverse", path: "/ms-transverse-insurance" },
        { name: "National Summit", path: "/national-summit-insurance" },
        { name: "Old American", path: "/old-american-insurance" },
        { name: "Obsidian Insurance", path: "/obsidian-insurance" },
        { name: "Palomar Specialty", path: "/palomar-specialty-insurance" },
        { name: "Porch Insurance", path: "/porch-insurance" },
        { name: "Redpoint County Mutual", path: "/redpoint-county-mutual-insurance" },
        { name: "Redwood Fire & Casualty", path: "/redwood-fire-and-casualty-insurance" },
        { name: "Southern Vanguard", path: "/southern-vanguard-insurance" },
        { name: "Spinnaker Insurance", path: "/spinnaker-insurance" },
        { name: "Sutton National", path: "/sutton-national-insurance" },
        { name: "Trisura Insurance", path: "/trisura-insurance" },
        { name: "United Security", path: "/united-security-insurance" },
        { name: "Western Surety", path: "/western-surety-insurance" },
      ]
    }
  ];

  return (
    <div className="bg-white py-24">
      <SEO 
        title="Sitemap | Rainbow Insurance Agency"
        description="Full list of pages on the Rainbow Insurance Agency website. Find information on auto, home, and business insurance across Fort Worth and DFW."
      />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 border-b pb-6">Sitemap</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold mb-6 text-rainbow-pink">{cat.title}</h2>
              <ul className="space-y-4">
                {cat.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.path} className="text-gray-600 hover:text-rainbow-gold transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rainbow-gold rounded-full" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
