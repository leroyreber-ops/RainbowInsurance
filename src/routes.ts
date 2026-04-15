export interface PageMetadata {
  path: string;
  title: string;
  description: string;
  component: string;
  category: 'main' | 'product' | 'location' | 'carrier' | 'blog';
}

export const routes: PageMetadata[] = [
  {
    path: '/',
    title: 'Fort Worth Auto Insurance & SR-22 Specialists',
    description: 'Rainbow Insurance Agency offers cheap car insurance in Fort Worth. We shop 56+ carriers to find you the best rates. Specializing in SR-22 and high-risk drivers.',
    component: 'Home',
    category: 'main'
  },
  {
    path: '/about',
    title: 'About Our Independent Insurance Agency',
    description: 'Meet Susan and her expert team. Serving Fort Worth since 1993 with personal care and the best insurance rates in Tarrant County.',
    component: 'AboutUs',
    category: 'main'
  },
  {
    path: '/fort-worth-car-insurance',
    title: 'Cheap Car Insurance Fort Worth | SR-22 & Auto Coverage',
    description: 'Get the best rates on Fort Worth car insurance. Susan and her expert team shop 56+ carriers to save you up to 40%. Instant SR-22 filings available.',
    component: 'FortWorthCarInsurance',
    category: 'location'
  },
  {
    path: '/carriers',
    title: 'Our Insurance Carriers | 56+ A+ Rated Partners',
    description: 'We represent over 56 top-rated insurance carriers including Progressive, GEICO, and Mercury. We shop them all to find you the best policy.',
    component: 'Carriers',
    category: 'main'
  }
  // More routes will be added here
];
