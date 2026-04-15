/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FortWorthCarInsurance from './pages/FortWorthCarInsurance';
import AboutUs from './pages/AboutUs';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import Carriers from './pages/Carriers';
import Sitemap from './pages/Sitemap';
import DallasInsurance from './pages/DallasInsurance';
import ArlingtonInsurance from './pages/ArlingtonInsurance';
import PlanoInsurance from './pages/PlanoInsurance';
import IrvingInsurance from './pages/IrvingInsurance';
import GarlandInsurance from './pages/GarlandInsurance';
import GrandPrairieInsurance from './pages/GrandPrairieInsurance';
import McKinneyInsurance from './pages/McKinneyInsurance';
import FriscoInsurance from './pages/FriscoInsurance';
import MesquiteInsurance from './pages/MesquiteInsurance';
import CarrolltonInsurance from './pages/CarrolltonInsurance';
import DentonInsurance from './pages/DentonInsurance';
import RichardsonInsurance from './pages/RichardsonInsurance';
import LewisvilleInsurance from './pages/LewisvilleInsurance';
import AllenInsurance from './pages/AllenInsurance';
import FlowerMoundInsurance from './pages/FlowerMoundInsurance';
import NorthRichlandHillsInsurance from './pages/NorthRichlandHillsInsurance';
import MansfieldInsurance from './pages/MansfieldInsurance';
import RowlettInsurance from './pages/RowlettInsurance';
import EulessInsurance from './pages/EulessInsurance';
import DeSotoInsurance from './pages/DeSotoInsurance';
import CedarHillInsurance from './pages/CedarHillInsurance';
import CoppellInsurance from './pages/CoppellInsurance';
import DuncanvilleInsurance from './pages/DuncanvilleInsurance';
import HurstInsurance from './pages/HurstInsurance';
import HomeInsurance from './pages/HomeInsurance';
import BusinessInsurance from './pages/BusinessInsurance';
import SR22Insurance from './pages/SR22Insurance';
import RentersInsurance from './pages/RentersInsurance';
import InsuranceBundles from './pages/InsuranceBundles';
import MotorcycleInsurance from './pages/MotorcycleInsurance';
import BoatInsurance from './pages/BoatInsurance';
import RVInsurance from './pages/RVInsurance';
import CommercialAutoInsurance from './pages/CommercialAutoInsurance';
import GeneralLiabilityInsurance from './pages/GeneralLiabilityInsurance';
import WorkersCompInsurance from './pages/WorkersCompInsurance';
import UmbrellaInsurance from './pages/UmbrellaInsurance';
import CondoInsurance from './pages/CondoInsurance';
import FloodInsurance from './pages/FloodInsurance';
import ClassicCarInsurance from './pages/ClassicCarInsurance';
import RideshareInsurance from './pages/RideshareInsurance';
import MobileHomeInsurance from './pages/MobileHomeInsurance';
import LandlordInsurance from './pages/LandlordInsurance';
import AffirmativeInsurance from './pages/AffirmativeInsurance';
import AgriculturalWorkersInsurance from './pages/AgriculturalWorkersInsurance';
import AmericanAccessInsurance from './pages/AmericanAccessInsurance';
import AmericanCasualtyInsurance from './pages/AmericanCasualtyInsurance';
import AmericanMercuryInsurance from './pages/AmericanMercuryInsurance';
import AmericanModernLloydsInsurance from './pages/AmericanModernLloydsInsurance';
import AmericanModernPropertyInsurance from './pages/AmericanModernPropertyInsurance';
import AmericanRiskInsurance from './pages/AmericanRiskInsurance';
import AssuranceAmericaInsurance from './pages/AssuranceAmericaInsurance';
import AventusInsurance from './pages/AventusInsurance';
import BerkshireHathawayInsurance from './pages/BerkshireHathawayInsurance';
import GEICOInsurance from './pages/GEICOInsurance';
import TheGeneralInsurance from './pages/TheGeneralInsurance';
import HomeStateCountyMutualInsurance from './pages/HomeStateCountyMutualInsurance';
import HomeboundInsurance from './pages/HomeboundInsurance';
import HomeownersOfAmericaInsurance from './pages/HomeownersOfAmericaInsurance';
import HomesiteInsurance from './pages/HomesiteInsurance';
import InclineCasualtyInsurance from './pages/InclineCasualtyInsurance';
import InfinityCountyMutualInsurance from './pages/InfinityCountyMutualInsurance';
import IntegonNationalInsurance from './pages/IntegonNationalInsurance';
import MarkelAmericanInsurance from './pages/MarkelAmericanInsurance';
import MercuryInsurance from './pages/MercuryInsurance';
import MGAInsurance from './pages/MGAInsurance';
import MicGeneralInsurance from './pages/MicGeneralInsurance';
import MsTransverseInsurance from './pages/MsTransverseInsurance';
import NationalSummitInsurance from './pages/NationalSummitInsurance';
import OldAmericanInsurance from './pages/OldAmericanInsurance';
import ObsidianInsurance from './pages/ObsidianInsurance';
import PalomarSpecialtyInsurance from './pages/PalomarSpecialtyInsurance';
import PorchInsurance from './pages/PorchInsurance';
import RedpointCountyMutualInsurance from './pages/RedpointCountyMutualInsurance';
import RedwoodFireAndCasualtyInsurance from './pages/RedwoodFireAndCasualtyInsurance';
import SouthernVanguardInsurance from './pages/SouthernVanguardInsurance';
import SpinnakerInsurance from './pages/SpinnakerInsurance';
import SuttonNationalInsurance from './pages/SuttonNationalInsurance';
import TrisuraInsurance from './pages/TrisuraInsurance';
import UnitedSecurityInsurance from './pages/UnitedSecurityInsurance';
import WesternSuretyInsurance from './pages/WesternSuretyInsurance';
import GetQuote from './pages/GetQuote';
import BestInsuranceAgency from './pages/BestInsuranceAgency';
import ClaimsSupport from './pages/ClaimsSupport';
import FAQs from './pages/FAQs';
import Blog from './pages/Blog';
import FortWorthNotaryServices from './pages/FortWorthNotaryServices';
import FortWorthMexicoInsurance from './pages/FortWorthMexicoInsurance';
import FortWorthContractorInsurance from './pages/FortWorthContractorInsurance';
import FortWorthHailDamageInsurance from './pages/FortWorthHailDamageInsurance';
import FortWorthTexasMinimumAutoInsurance from './pages/FortWorthTexasMinimumAutoInsurance';
import FortWorthTeenDriverInsurance from './pages/FortWorthTeenDriverInsurance';
import FortWorthSeniorAutoInsurance from './pages/FortWorthSeniorAutoInsurance';
import InsuranceDeductiblesExplained from './pages/InsuranceDeductiblesExplained';
import FortWorthInsuranceClaimsProcess from './pages/FortWorthInsuranceClaimsProcess';
import FortWorthUninsuredMotoristCoverage from './pages/FortWorthUninsuredMotoristCoverage';
import FortWorthHomeInsuranceDiscounts from './pages/FortWorthHomeInsuranceDiscounts';
import FortWorthInsuranceAfterAccident from './pages/FortWorthInsuranceAfterAccident';
import UnderstandingTexasInsuranceLaws from './pages/UnderstandingTexasInsuranceLaws';
import FortWorthAutoInsuranceDiscounts from './pages/FortWorthAutoInsuranceDiscounts';
import FortWorthCommercialAutoInsurance from './pages/FortWorthCommercialAutoInsurance';
import FortWorthClassicCarInsurance from './pages/FortWorthClassicCarInsurance';
import FortWorthMotorcycleInsurance from './pages/FortWorthMotorcycleInsurance';
import FortWorthRVInsurance from './pages/FortWorthRVInsurance';
import FortWorthBoatInsurance from './pages/FortWorthBoatInsurance';
import FortWorthRentersInsurance from './pages/FortWorthRentersInsurance';
import FortWorthCondoInsurance from './pages/FortWorthCondoInsurance';
import FortWorthLandlordInsurance from './pages/FortWorthLandlordInsurance';
import FortWorthFloodInsurance from './pages/FortWorthFloodInsurance';
import FortWorthUmbrellaInsurance from './pages/FortWorthUmbrellaInsurance';
import ProgressiveInsurance from './pages/ProgressiveInsurance';
import ForemostInsurance from './pages/ForemostInsurance';
import SafewayInsurance from './pages/SafewayInsurance';
import ACCCInsurance from './pages/ACCCInsurance';
import QuoteForm from './components/QuoteForm';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('Current location:', location.pathname);

  const navigateTo = (page: string) => {
    console.log('Navigating to:', page);
    const path = page === 'home' ? '/' : `/${page}`;
    console.log('Path:', path);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/about" element={<AboutUs navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/testimonials" element={<Testimonials navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/contact" element={<ContactUs navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/carriers" element={<Carriers navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/fort-worth-car-insurance" element={<FortWorthCarInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-home-insurance" element={<HomeInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-business-insurance" element={<BusinessInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-sr22" element={<SR22Insurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-renters-insurance" element={<RentersInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-bundles" element={<InsuranceBundles navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-motorcycle-insurance" element={<MotorcycleInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-boat-insurance" element={<BoatInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-rv-insurance" element={<RVInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-commercial-auto-insurance" element={<CommercialAutoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-general-liability" element={<GeneralLiabilityInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-workers-comp" element={<WorkersCompInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-umbrella-insurance" element={<UmbrellaInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-condo-insurance" element={<CondoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-flood-insurance" element={<FloodInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-classic-car-insurance" element={<ClassicCarInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-rideshare-insurance" element={<RideshareInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-mobile-home-insurance" element={<MobileHomeInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-landlord-insurance" element={<LandlordInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          
          {/* Aliased Routes for SEO consistency */}
          <Route path="/sr-22-insurance" element={<SR22Insurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/car-insurance" element={<FortWorthCarInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/home-insurance" element={<HomeInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/business-insurance" element={<BusinessInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/renters-insurance" element={<RentersInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/motorcycle-insurance" element={<MotorcycleInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/boat-insurance" element={<BoatInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/rv-insurance" element={<RVInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/commercial-auto-insurance" element={<CommercialAutoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/general-liability" element={<GeneralLiabilityInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/workers-comp" element={<WorkersCompInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/umbrella-insurance" element={<UmbrellaInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/condo-insurance" element={<CondoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/flood-insurance" element={<FloodInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/classic-car-insurance" element={<ClassicCarInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/rideshare-insurance" element={<RideshareInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/mobile-home-insurance" element={<MobileHomeInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/landlord-insurance" element={<LandlordInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/mexico-insurance" element={<FortWorthMexicoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/notary-services" element={<FortWorthNotaryServices navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/contractor-insurance" element={<FortWorthContractorInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/hail-damage-insurance" element={<FortWorthHailDamageInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          
          {/* Carrier Pages */}
          <Route path="/affirmative-insurance" element={<AffirmativeInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/agricultural-workers-mutual-auto-insurance" element={<AgriculturalWorkersInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/american-access-casualty-insurance" element={<AmericanAccessInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/american-casualty-insurance" element={<AmericanCasualtyInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/american-mercury-insurance" element={<AmericanMercuryInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/american-modern-lloyds-insurance" element={<AmericanModernLloydsInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/american-modern-property-and-casualty-insurance" element={<AmericanModernPropertyInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/american-risk-insurance" element={<AmericanRiskInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/assuranceamerica-insurance" element={<AssuranceAmericaInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/aventus-insurance" element={<AventusInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/berkshire-hathaway-homestate-insurance" element={<BerkshireHathawayInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/geico-county-mutual-insurance" element={<GEICOInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/the-general-insurance" element={<TheGeneralInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/home-state-county-mutual-insurance" element={<HomeStateCountyMutualInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/homebound-insurance" element={<HomeboundInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/homeowners-of-america-insurance" element={<HomeownersOfAmericaInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/progressive-insurance" element={<ProgressiveInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/foremost-insurance" element={<ForemostInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/safeway-insurance" element={<SafewayInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/accc-insurance" element={<ACCCInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/homesite-insurance" element={<HomesiteInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/incline-casualty-insurance" element={<InclineCasualtyInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/infinity-county-mutual-insurance" element={<InfinityCountyMutualInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/integon-national-insurance" element={<IntegonNationalInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/markel-american-insurance" element={<MarkelAmericanInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/mercury-insurance" element={<MercuryInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/mga-insurance" element={<MGAInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/mic-general-insurance" element={<MicGeneralInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/ms-transverse-insurance" element={<MsTransverseInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/national-summit-insurance" element={<NationalSummitInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/old-american-insurance" element={<OldAmericanInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/obsidian-insurance" element={<ObsidianInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/palomar-specialty-insurance" element={<PalomarSpecialtyInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/porch-insurance" element={<PorchInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/redpoint-county-mutual-insurance" element={<RedpointCountyMutualInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/redwood-fire-and-casualty-insurance" element={<RedwoodFireAndCasualtyInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/southern-vanguard-insurance" element={<SouthernVanguardInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/spinnaker-insurance" element={<SpinnakerInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/sutton-national-insurance" element={<SuttonNationalInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/trisura-insurance" element={<TrisuraInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/united-security-insurance" element={<UnitedSecurityInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/western-surety-insurance" element={<WesternSuretyInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/get-quote" element={<GetQuote navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/best-insurance-agency" element={<BestInsuranceAgency navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/claims-support" element={<ClaimsSupport navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/faqs" element={<FAQs navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/blog" element={<Blog navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-notary-services" element={<FortWorthNotaryServices navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-mexico-insurance" element={<FortWorthMexicoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-contractor-insurance" element={<FortWorthContractorInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-hail-damage-insurance" element={<FortWorthHailDamageInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-texas-minimum-auto-insurance" element={<FortWorthTexasMinimumAutoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-teen-driver-insurance" element={<FortWorthTeenDriverInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-senior-auto-insurance" element={<FortWorthSeniorAutoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/insurance-deductibles-explained-fort-worth" element={<InsuranceDeductiblesExplained navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-insurance-claims-process" element={<FortWorthInsuranceClaimsProcess navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-uninsured-motorist-coverage" element={<FortWorthUninsuredMotoristCoverage navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-home-insurance-discounts" element={<FortWorthHomeInsuranceDiscounts navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-insurance-after-accident" element={<FortWorthInsuranceAfterAccident navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/understanding-texas-insurance-laws" element={<UnderstandingTexasInsuranceLaws navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-auto-insurance-discounts" element={<FortWorthAutoInsuranceDiscounts navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-commercial-auto-insurance" element={<FortWorthCommercialAutoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-classic-car-insurance" element={<FortWorthClassicCarInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-motorcycle-insurance" element={<FortWorthMotorcycleInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-rv-insurance" element={<FortWorthRVInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-boat-insurance" element={<FortWorthBoatInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-renters-insurance" element={<FortWorthRentersInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-condo-insurance" element={<FortWorthCondoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-landlord-insurance" element={<FortWorthLandlordInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-flood-insurance" element={<FortWorthFloodInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/fort-worth-umbrella-insurance" element={<FortWorthUmbrellaInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          
          {/* Location Pages */}
          <Route path="/dallas-insurance" element={<DallasInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/arlington-insurance" element={<ArlingtonInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/plano-insurance" element={<PlanoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/irving-insurance" element={<IrvingInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/garland-insurance" element={<GarlandInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/grand-prairie-insurance" element={<GrandPrairieInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/mckinney-insurance" element={<McKinneyInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/frisco-insurance" element={<FriscoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/mesquite-insurance" element={<MesquiteInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/carrollton-insurance" element={<CarrolltonInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/denton-insurance" element={<DentonInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/richardson-insurance" element={<RichardsonInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/lewisville-insurance" element={<LewisvilleInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/allen-insurance" element={<AllenInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/flower-mound-insurance" element={<FlowerMoundInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/north-richland-hills-insurance" element={<NorthRichlandHillsInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/mansfield-insurance" element={<MansfieldInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/rowlett-insurance" element={<RowlettInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/euless-insurance" element={<EulessInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/desoto-insurance" element={<DeSotoInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/cedar-hill-insurance" element={<CedarHillInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/coppell-insurance" element={<CoppellInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/duncanville-insurance" element={<DuncanvilleInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/hurst-insurance" element={<HurstInsurance navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />

          {/* Fallback */}
          <Route path="*" element={<Home navigateTo={navigateTo} openQuoteForm={() => setIsQuoteFormOpen(true)} />} />
        </Routes>
      </main>
      <Footer navigateTo={navigateTo} />
      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
        pageSource={location.pathname}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

