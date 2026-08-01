/**
 * src/data/packages.js
 *
 * Service packages for the Services page.
 * POPULAR flag highlights the Growth Engine tier.
 */

export const packages = [
  {
    id: 'foundation',
    emoji: '🔷',
    name: 'FOUNDATION',
    subtitle: '"The Launchpad"',
    
    price: '₹25,000',
    priceNote: 'Starting at',
    timeline: '2-3 weeks',
    popular: false,
    bestFor: 'First-time founders who need a solid digital presence, fast.',
    features: [
      'Custom Website (5-7 pages)',
      'Mobile Responsive',
      'Basic SEO Setup',
      '3 Blog Posts',
      'Contact Form Integration',
      '1 Round of Revisions',
      'Deployment + Handover',
    ],
    cta: 'Get Started →',
    ctaLink: '/contact',
  },
  {
    id: 'growth-engine',
    emoji: '💜',
    name: 'GROWTH ENGINE',
    subtitle: '"The Full Toolkit"',
    price: '₹60,000',
    priceNote: 'Starting at',
    timeline: '4-6 weeks',
    popular: true,
    bestFor: 'Growing businesses ready to compete online.',
    baseFeatures: 'Everything in Foundation, plus:',
    features: [
      'Advanced Animations (GSAP)',
      'Advanced SEO + Schema Markup',
      '10 SEO-Optimized Blog Posts',
      'Website Copy (full site)',
      'Performance Optimization',
      '3 Rounds of Revisions',
      '30-Day Post-Launch Support',
    ],
    cta: 'Get Started →',
    ctaLink: '/contact',
  },
  {
    id: 'premium-brand',
    emoji: '🟡',
    name: 'PREMIUM BRAND',
    subtitle: '"The Paradox Experience"',
    price: '₹1,00,000',
    priceNote: 'Starting at',
    timeline: '6-10 weeks',
    popular: false,
    bestFor: 'Established brands ready for a premium digital experience.',
    baseFeatures: 'Everything in Growth Engine, plus:',
    features: [
      '3D Web Experience (Three.js)',
      'Full Content Suite (20 articles + ghost writing)',
      'Multilingual Support (i18n)',
      'Custom Animations',
      'Brand Voice & Copy Guide',
      'Unlimited Revisions',
      '60-Day Post-Launch Support',
      'Priority Communication',
    ],
    cta: "Let's Talk →",
    ctaLink: '/contact',
  },
];
