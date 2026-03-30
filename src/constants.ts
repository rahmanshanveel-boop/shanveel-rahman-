import { Project, Experience, Service, ToolCategory, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    title: 'Performance Marketing',
    description: 'Data-backed ad campaigns across Meta, Google, and TikTok.',
    outcome: 'Scalable ROAS and lower acquisition costs.',
    impact: 'Predictable revenue streams and market dominance.'
  },
  {
    title: 'SEO Strategy',
    description: 'Technical optimization and high-intent content clusters.',
    outcome: 'Dominant organic visibility and sustainable lead flow.',
    impact: 'Reduced CAC and long-term market authority.'
  },
  {
    title: 'Social Media Marketing',
    description: 'Strategic storytelling and community-driven engagement.',
    outcome: 'Brand authority and viral growth loops.',
    impact: 'High-intent community building and organic reach.'
  },
  {
    title: 'Web Design',
    description: 'Conversion-centered UI/UX built for performance.',
    outcome: 'Seamless user journeys and higher conversion rates.',
    impact: 'Maximum ROI from every visitor.'
  },
  {
    title: 'Branding',
    description: 'Visual identity and positioning for market leaders.',
    outcome: 'Unforgettable brand presence and market differentiation.',
    impact: 'Premium positioning and customer trust.'
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  { category: 'Analytics', tools: ['Google Analytics', 'Google Tag Manager'] },
  { category: 'SEO', tools: ['SEMrush', 'Google Search Console'] },
  { category: 'Marketing & Content', tools: ['ChatGPT', 'Grammarly'] },
  { category: 'CMS', tools: ['WordPress', 'Google Business Profile'] }
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
      { label: 'ROAS Increase', value: '3x' },
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
      { label: 'Organic Traffic', value: '+120%' },
      { label: 'Keyword Rankings', value: 'Top 3' },
      { label: 'Inbound Leads', value: '+85%' }
    ],
    tools: ['SEMrush', 'Search Console', 'WordPress'],
    image: 'https://picsum.photos/seed/seo1/800/600'
  },
  {
    id: '3',
    name: 'Conversion Optimization',
    category: 'Web Design & Branding',
    problem: 'A D2C brand had a large following but zero engagement and stagnant sales.',
    strategy: 'Shifted from product-centric posts to community-driven storytelling and influencer collaborations.',
    execution: 'Launched a 30-day "Challenge" campaign that leveraged user-generated content.',
    results: [
      { label: 'Conversion Rate', value: '+40%' },
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

export const PROCESS = [
  {
    step: '01',
    title: 'Audit & Analysis',
    description: 'Deep dive into your current data, identifying leaks in your funnel and untapped growth opportunities.'
  },
  {
    step: '02',
    title: 'Strategy Engineering',
    description: 'Building a bespoke growth roadmap focused on high-intent customer acquisition and sustainable scaling.'
  },
  {
    step: '03',
    title: 'Execution & Optimization',
    description: 'Deploying high-performance campaigns and content clusters with relentless A/B testing and data monitoring.'
  },
  {
    step: '04',
    title: 'Scaling & Growth',
    description: 'Aggressively scaling winning strategies while maintaining unit economics and maximizing long-term ROI.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Shanveel doesn't just run ads; he understands the business logic behind growth. Our ROAS tripled within the first quarter.",
    author: "Sarah Jenkins",
    position: "CEO, TechScale"
  },
  {
    quote: "The most data-driven marketer we've ever worked with. His SEO strategy alone brought us more leads than all our paid channels combined.",
    author: "Marcus Thorne",
    position: "Marketing Director, FinEdge"
  },
  {
    quote: "A rare talent who bridges the gap between creative storytelling and hard analytics. The results speak for themselves.",
    author: "Elena Rossi",
    position: "Founder, Aura Fashion"
  }
];
