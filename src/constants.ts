import { Project, Experience, Service, ToolCategory } from './types';

export const SERVICES: Service[] = [
  {
    title: 'Performance Marketing',
    description: 'Data-backed ad campaigns across Meta, Google, and TikTok.',
    outcome: 'Scalable ROAS and lower acquisition costs.'
  },
  {
    title: 'SEO Strategy',
    description: 'Technical optimization and high-intent content clusters.',
    outcome: 'Dominant organic visibility and sustainable lead flow.'
  },
  {
    title: 'Social Media Marketing',
    description: 'Strategic storytelling and community-driven engagement.',
    outcome: 'Brand authority and viral growth loops.'
  },
  {
    title: 'Web Design',
    description: 'Conversion-centered UI/UX built for performance.',
    outcome: 'Seamless user journeys and higher conversion rates.'
  },
  {
    title: 'Branding',
    description: 'Visual identity and positioning for market leaders.',
    outcome: 'Unforgettable brand presence and market differentiation.'
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  { category: 'Analytics', tools: ['Google Analytics 4', 'Google Tag Manager', 'Google Search Console'] },
  { category: 'SEO', tools: ['SEMrush', 'Google Business Profile'] },
  { category: 'Ads', tools: ['Meta Ads Manager', 'Google Ads'] },
  { category: 'Content', tools: ['ChatGPT', 'Grammarly'] },
  { category: 'CMS', tools: ['WordPress', 'Shopify'] }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'The 4x ROAS Blueprint',
    category: 'Performance Marketing',
    problem: 'A premium lifestyle brand was seeing a steady decline in ad performance and rising CAC.',
    strategy: 'Restructured the funnel to prioritize high-LTV customer segments and implemented dynamic creative testing.',
    execution: 'Deployed a full-funnel Meta Ads strategy combined with automated retargeting loops.',
    results: [
      { label: 'ROAS Increase', value: '4.2x' },
      { label: 'CAC Reduction', value: '28%' },
      { label: 'Monthly Revenue', value: '+140%' }
    ],
    tools: ['Meta Ads', 'GA4', 'GTM'],
    image: 'https://picsum.photos/seed/perf1/800/600'
  },
  {
    id: '2',
    name: 'Organic Dominance',
    category: 'SEO Growth',
    problem: 'A fintech startup was invisible in search results for its most profitable keywords.',
    strategy: 'Executed a technical SEO overhaul and a "Topic Cluster" content strategy.',
    execution: 'Optimized site architecture and produced 20+ high-authority pillars targeting bottom-funnel intent.',
    results: [
      { label: 'Organic Traffic', value: '+210%' },
      { label: 'Keyword Rankings', value: 'Top 3' },
      { label: 'Inbound Leads', value: '+85%' }
    ],
    tools: ['SEMrush', 'Search Console', 'WordPress'],
    image: 'https://picsum.photos/seed/seo1/800/600'
  },
  {
    id: '3',
    name: 'Viral Engagement Loop',
    category: 'Social Media Campaign',
    problem: 'A D2C brand had a large following but zero engagement and stagnant sales.',
    strategy: 'Shifted from product-centric posts to community-driven storytelling and influencer collaborations.',
    execution: 'Launched a 30-day "Challenge" campaign that leveraged user-generated content.',
    results: [
      { label: 'Engagement Rate', value: '+400%' },
      { label: 'UGC Submissions', value: '1.2k+' },
      { label: 'Direct Sales', value: '+65%' }
    ],
    tools: ['Instagram', 'TikTok', 'Canva'],
    image: 'https://picsum.photos/seed/social1/800/600'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'GrowthFlow Agency',
    role: 'Senior Performance Marketer',
    period: '2022 - Present',
    achievements: [
      'Scaled 10+ e-commerce brands to 7-figure monthly revenues.',
      'Optimized $2M+ in annual ad spend with a focus on unit economics.',
      'Built automated reporting dashboards that saved 20+ hours of manual work weekly.'
    ]
  },
  {
    company: 'Independent Consultant',
    role: 'Digital Growth Strategist',
    period: '2020 - 2022',
    achievements: [
      'Consulted for 15+ startups on full-stack marketing strategies.',
      'Achieved 100% client retention rate through transparent, ROI-driven reporting.',
      'Developed custom SEO frameworks that consistently outranked industry giants.'
    ]
  }
];
