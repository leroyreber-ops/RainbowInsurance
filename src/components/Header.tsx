import { Phone, Mail, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  navigateTo: (page: string) => void;
  openQuoteForm: () => void;
}

export default function Header({ navigateTo, openQuoteForm }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({
    products: false,
    carriers: false,
    cities: false
  });

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const products = [
    { id: 'fort-worth-car-insurance', name: 'Car Insurance', category: 'Personal' },
    { id: 'fort-worth-home-insurance', name: 'Home Insurance', category: 'Personal' },
    { id: 'fort-worth-bundles', name: 'Insurance Bundles', category: 'Personal' },
    { id: 'fort-worth-renters-insurance', name: 'Renters Insurance', category: 'Personal' },
    { id: 'fort-worth-condo-insurance', name: 'Condo Insurance', category: 'Personal' },
    { id: 'fort-worth-mobile-home-insurance', name: 'Mobile Home Insurance', category: 'Personal' },
    { id: 'fort-worth-landlord-insurance', name: 'Landlord Insurance', category: 'Personal' },
    { id: 'fort-worth-flood-insurance', name: 'Flood Insurance', category: 'Personal' },
    { id: 'fort-worth-umbrella-insurance', name: 'Umbrella Insurance', category: 'Personal' },
    { id: 'fort-worth-sr22', name: 'SR-22 Insurance', category: 'Personal' },
    
    { id: 'fort-worth-motorcycle-insurance', name: 'Motorcycle Insurance', category: 'Specialty' },
    { id: 'fort-worth-boat-insurance', name: 'Boat Insurance', category: 'Specialty' },
    { id: 'fort-worth-rv-insurance', name: 'RV Insurance', category: 'Specialty' },
    { id: 'fort-worth-classic-car-insurance', name: 'Classic Car Insurance', category: 'Specialty' },
    { id: 'fort-worth-mexico-insurance', name: 'Mexico Insurance', category: 'Specialty' },
    { id: 'fort-worth-hail-damage-insurance', name: 'Hail Damage Insurance', category: 'Specialty' },
    { id: 'fort-worth-notary-services', name: 'Notary Services', category: 'Specialty' },
    
    { id: 'fort-worth-business-insurance', name: 'Business Insurance', category: 'Business' },
    { id: 'fort-worth-commercial-auto-insurance', name: 'Commercial Auto', category: 'Business' },
    { id: 'fort-worth-general-liability', name: 'General Liability', category: 'Business' },
    { id: 'fort-worth-workers-comp', name: 'Workers\' Comp', category: 'Business' },
    { id: 'fort-worth-contractor-insurance', name: 'Contractor Insurance', category: 'Business' },
    { id: 'fort-worth-rideshare-insurance', name: 'Rideshare Insurance', category: 'Business' },
  ];

  const carriers = [
    { id: 'accc-insurance', name: 'ACCC Insurance' },
    { id: 'affirmative-insurance', name: 'Affirmative Insurance' },
    { id: 'agricultural-workers-mutual-auto-insurance', name: 'Ag Workers' },
    { id: 'american-access-casualty-insurance', name: 'American Access' },
    { id: 'american-casualty-insurance', name: 'American Casualty' },
    { id: 'american-mercury-insurance', name: 'American Mercury' },
    { id: 'american-modern-lloyds-insurance', name: 'American Modern Lloyds' },
    { id: 'american-modern-property-and-casualty-insurance', name: 'American Modern P&C' },
    { id: 'american-risk-insurance', name: 'American Risk' },
    { id: 'assuranceamerica-insurance', name: 'AssuranceAmerica' },
    { id: 'aventus-insurance', name: 'Aventus Insurance' },
    { id: 'berkshire-hathaway-homestate-insurance', name: 'Berkshire Hathaway' },
    { id: 'foremost-insurance', name: 'Foremost Insurance' },
    { id: 'geico-county-mutual-insurance', name: 'GEICO County Mutual' },
    { id: 'the-general-insurance', name: 'The General' },
    { id: 'home-state-county-mutual-insurance', name: 'Home State County Mutual' },
    { id: 'homebound-insurance', name: 'Homebound Insurance' },
    { id: 'homeowners-of-america-insurance', name: 'Homeowners of America' },
    { id: 'homesite-insurance', name: 'Homesite Insurance' },
    { id: 'incline-casualty-insurance', name: 'Incline Casualty' },
    { id: 'infinity-county-mutual-insurance', name: 'Infinity County Mutual' },
    { id: 'integon-national-insurance', name: 'Integon National' },
    { id: 'markel-american-insurance', name: 'Markel American' },
    { id: 'mercury-insurance', name: 'Mercury Insurance' },
    { id: 'mga-insurance', name: 'MGA Insurance' },
    { id: 'mic-general-insurance', name: 'MIC General' },
    { id: 'ms-transverse-insurance', name: 'MS Transverse' },
    { id: 'national-summit-insurance', name: 'National Summit' },
    { id: 'obsidian-insurance', name: 'Obsidian Insurance' },
    { id: 'old-american-insurance', name: 'Old American' },
    { id: 'palomar-specialty-insurance', name: 'Palomar Specialty' },
    { id: 'porch-insurance', name: 'Porch Insurance' },
    { id: 'progressive-insurance', name: 'Progressive' },
    { id: 'redpoint-county-mutual-insurance', name: 'Redpoint County Mutual' },
    { id: 'redwood-fire-and-casualty-insurance', name: 'Redwood Fire & Casualty' },
    { id: 'safeway-insurance', name: 'Safeway Insurance' },
    { id: 'southern-vanguard-insurance', name: 'Southern Vanguard' },
    { id: 'spinnaker-insurance', name: 'Spinnaker Insurance' },
    { id: 'sutton-national-insurance', name: 'Sutton National' },
    { id: 'trisura-insurance', name: 'Trisura Insurance' },
    { id: 'united-security-insurance', name: 'United Security' },
    { id: 'western-surety-insurance', name: 'Western Surety' },
    { id: 'carriers', name: 'View All 56 Carriers' },
  ];

  const cities = [
    { id: 'fort-worth-car-insurance', name: 'Fort Worth' },
    { id: 'dallas-insurance', name: 'Dallas' },
    { id: 'arlington-insurance', name: 'Arlington' },
    { id: 'plano-insurance', name: 'Plano' },
    { id: 'irving-insurance', name: 'Irving' },
    { id: 'garland-insurance', name: 'Garland' },
    { id: 'grand-prairie-insurance', name: 'Grand Prairie' },
    { id: 'mckinney-insurance', name: 'McKinney' },
    { id: 'frisco-insurance', name: 'Frisco' },
    { id: 'mesquite-insurance', name: 'Mesquite' },
    { id: 'carrollton-insurance', name: 'Carrollton' },
    { id: 'denton-insurance', name: 'Denton' },
    { id: 'richardson-insurance', name: 'Richardson' },
    { id: 'lewisville-insurance', name: 'Lewisville' },
    { id: 'allen-insurance', name: 'Allen' },
    { id: 'flower-mound-insurance', name: 'Flower Mound' },
    { id: 'north-richland-hills-insurance', name: 'North Richland Hills' },
    { id: 'mansfield-insurance', name: 'Mansfield' },
    { id: 'rowlett-insurance', name: 'Rowlett' },
    { id: 'euless-insurance', name: 'Euless' },
    { id: 'desoto-insurance', name: 'DeSoto' },
    { id: 'cedar-hill-insurance', name: 'Cedar Hill' },
    { id: 'coppell-insurance', name: 'Coppell' },
    { id: 'duncanville-insurance', name: 'Duncanville' },
    { id: 'hurst-insurance', name: 'Hurst' },
  ];

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Top Bar */}
      <div className="bg-rainbow-gray text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:817-922-8031" className="flex items-center gap-2 hover:text-rainbow-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span>817-922-8031</span>
            </a>
            <a href="mailto:rainbowins@hotmail.com" className="flex items-center gap-2 hover:text-rainbow-gold transition-colors">
              <Mail className="w-4 h-4" />
              <span>rainbowins@hotmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>2209 8th Ave, Fort Worth, TX 76110</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white shadow-lg border-b-2 border-rainbow-rose/20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="text-3xl font-bold">
                <span className="text-rainbow-pink group-hover:text-rainbow-rose transition-colors">Rainbow</span>
                <span className="text-rainbow-gold ml-1">Insurance</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-rainbow-pink font-medium transition-colors">Home</Link>
              
              <div className="relative group" onMouseEnter={() => setActiveDropdown('products')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center gap-1 text-gray-700 hover:text-rainbow-pink font-medium py-2">
                  Insurance Products <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-6 px-6 min-w-[600px] border border-gray-100 z-50 grid grid-cols-3 gap-8"
                    >
                      <div>
                        <h3 className="text-rainbow-pink font-bold text-xs uppercase tracking-wider mb-4 border-b pb-2">Personal</h3>
                        <div className="space-y-1">
                          {products.filter(p => p.category === 'Personal').map(p => (
                            <Link key={p.id} to={`/${p.id}`} className="block py-1.5 hover:text-rainbow-pink transition-colors text-sm font-medium text-gray-600">
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-rainbow-gold font-bold text-xs uppercase tracking-wider mb-4 border-b pb-2">Specialty</h3>
                        <div className="space-y-1">
                          {products.filter(p => p.category === 'Specialty').map(p => (
                            <Link key={p.id} to={`/${p.id}`} className="block py-1.5 hover:text-rainbow-pink transition-colors text-sm font-medium text-gray-600">
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-rainbow-rose font-bold text-xs uppercase tracking-wider mb-4 border-b pb-2">Business</h3>
                        <div className="space-y-1">
                          {products.filter(p => p.category === 'Business').map(p => (
                            <Link key={p.id} to={`/${p.id}`} className="block py-1.5 hover:text-rainbow-pink transition-colors text-sm font-medium text-gray-600">
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative group" onMouseEnter={() => setActiveDropdown('carriers')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center gap-1 text-gray-700 hover:text-rainbow-pink font-medium py-2">
                  Insurance Carriers <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'carriers' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[240px] max-h-[400px] overflow-y-auto border border-gray-100 z-50 custom-scrollbar"
                    >
                      {carriers.map(c => (
                        <Link 
                          key={c.id} 
                          to={`/${c.id}`} 
                          onClick={() => setActiveDropdown(null)}
                          className={`block px-4 py-2 hover:bg-pink-50 hover:text-rainbow-pink transition-colors text-sm font-medium ${c.id === 'carriers' ? 'border-t mt-2 text-rainbow-gold font-bold bg-gray-50' : ''}`}
                        >
                          {c.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative group" onMouseEnter={() => setActiveDropdown('cities')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center gap-1 text-gray-700 hover:text-rainbow-pink font-medium py-2">
                  DFW Cities <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'cities' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[200px] border border-gray-100 z-50"
                    >
                      {cities.map(c => (
                        <Link key={c.id} to={`/${c.id}`} className="block px-4 py-2 hover:bg-pink-50 hover:text-rainbow-pink transition-colors text-sm font-medium">
                          {c.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" className="text-gray-700 hover:text-rainbow-pink font-medium transition-colors">About Us</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-rainbow-pink font-medium transition-colors">Testimonials</Link>
              
              <button 
                onClick={openQuoteForm}
                className="bg-rainbow-pink text-white px-6 py-2 rounded-lg hover:bg-rainbow-rose transition-all font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact
              </button>
            </div>


            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 hover:bg-gray-50 rounded-lg font-bold text-gray-700">Home</Link>
                
                {/* Products Dropdown */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('products')}
                    className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 rounded-lg font-bold text-gray-700"
                  >
                    Insurance Products
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdowns.products ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileDropdowns.products && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 bg-gray-50/50 rounded-lg mt-1"
                      >
                        <div className="py-2 space-y-4">
                          <div>
                            <div className="px-4 text-xs font-black uppercase text-rainbow-pink mb-2">Personal</div>
                            {products.filter(p => p.category === 'Personal').map(p => (
                              <Link key={p.id} to={`/${p.id}`} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-600 hover:text-rainbow-pink text-sm font-medium">{p.name}</Link>
                            ))}
                          </div>
                          <div>
                            <div className="px-4 text-xs font-black uppercase text-rainbow-gold mb-2">Specialty</div>
                            {products.filter(p => p.category === 'Specialty').map(p => (
                              <Link key={p.id} to={`/${p.id}`} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-600 hover:text-rainbow-pink text-sm font-medium">{p.name}</Link>
                            ))}
                          </div>
                          <div>
                            <div className="px-4 text-xs font-black uppercase text-rainbow-rose mb-2">Business</div>
                            {products.filter(p => p.category === 'Business').map(p => (
                              <Link key={p.id} to={`/${p.id}`} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-600 hover:text-rainbow-pink text-sm font-medium">{p.name}</Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Carriers Dropdown */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('carriers')}
                    className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 rounded-lg font-bold text-gray-700"
                  >
                    Insurance Carriers
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdowns.carriers ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileDropdowns.carriers && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 bg-gray-50/50 rounded-lg mt-1"
                      >
                        <div className="py-2 grid grid-cols-1 gap-1">
                          {carriers.map(c => (
                            <Link 
                              key={c.id} 
                              to={`/${c.id}`} 
                              onClick={() => setIsMenuOpen(false)} 
                              className={`block px-4 py-2 text-gray-600 hover:text-rainbow-pink text-sm font-medium ${c.id === 'carriers' ? 'text-rainbow-gold font-bold' : ''}`}
                            >
                              {c.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Cities Dropdown */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('cities')}
                    className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 rounded-lg font-bold text-gray-700"
                  >
                    DFW Cities
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdowns.cities ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileDropdowns.cities && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 bg-gray-50/50 rounded-lg mt-1"
                      >
                        <div className="py-2 grid grid-cols-1 gap-1">
                          {cities.map(c => (
                            <Link key={c.id} to={`/${c.id}`} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-600 hover:text-rainbow-pink text-sm font-medium">{c.name}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 hover:bg-gray-50 rounded-lg font-bold text-gray-700">About Us</Link>
                <Link to="/testimonials" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 hover:bg-gray-50 rounded-lg font-bold text-gray-700">Testimonials</Link>
                
                <button onClick={() => { openQuoteForm(); setIsMenuOpen(false); }} className="w-full bg-rainbow-pink text-white py-4 rounded-xl font-black text-lg mt-4 shadow-xl">Get Free Quote</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
