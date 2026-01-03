
export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}
