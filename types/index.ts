export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Award {
  name: string;
  body: string;
  year: string;
  category: string;
}

export interface Partner {
  name: string;
  full: string;
  desc: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface Stat {
  value: string;
  label: string;
  sub: string;
}
