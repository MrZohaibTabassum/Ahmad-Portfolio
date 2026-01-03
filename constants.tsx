
import { NavItem, Skill, PortfolioItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Resources', href: '#resources' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const SKILLS: Skill[] = [
  {
    name: 'AI Automation',
    description: 'Building custom workflows with n8n to streamline marketing operations and boost ROI.',
    icon: 'Bot',
  },
  {
    name: 'Digital Strategy',
    description: 'Data-driven growth strategies for B2B SaaS and e-commerce scale-ups.',
    icon: 'BarChart3',
  },
  {
    name: 'Brand Storytelling',
    description: 'Connecting brands with audiences through narrative-led content marketing.',
    icon: 'PenTool',
  },
  {
    name: 'Lead Generation',
    description: 'Optimizing funnels to convert cold traffic into loyal brand advocates.',
    icon: 'Target',
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'SaaS Growth Engine',
    category: 'AI Automation',
    image: 'https://picsum.photos/seed/tech1/800/600',
    description: 'Implemented an n8n-powered lead nurturing sequence that increased conversion by 40%.',
    tags: ['n8n', 'Automation', 'SaaS'],
  },
  {
    id: '2',
    title: 'E-commerce Brand Story',
    category: 'Content Strategy',
    image: 'https://picsum.photos/seed/tech2/800/600',
    description: 'A full-scale brand identity and storytelling campaign for a premium streetwear label.',
    tags: ['Branding', 'Content', 'Social'],
  },
  {
    id: '3',
    title: 'Influencer Synergy',
    category: 'Digital Marketing',
    image: 'https://picsum.photos/seed/tech3/800/600',
    description: 'Managed 50+ micro-influencers to drive a 3x ROI on a seasonal product launch.',
    tags: ['Influencer', 'ROI', 'Strategy'],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Yash Pratap Singh',
    role: 'Startup Founder',
    company: 'NextGen AI',
    content: 'Saim transformed our outreach. His automation workflows save us hours every week.',
    image: 'https://picsum.photos/seed/user1/200/200',
  },
  {
    name: 'Sobhan Tariq',
    role: 'Marketing Lead',
    company: 'EcomFlow',
    content: 'The storytelling approach Saim brought to our brand was exactly what we needed to stand out.',
    image: 'https://picsum.photos/seed/user2/200/200',
  },
  {
    name: 'Abdul Moeed',
    role: 'Business Developer',
    company: 'Freelance Solutions',
    content: 'His understanding of the intersection between AI and marketing is truly ahead of its time.',
    image: 'https://picsum.photos/seed/user3/200/200',
  }
];
