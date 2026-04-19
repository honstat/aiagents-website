export interface Product {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  category: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
