export type ProductType = 'ebook' | 'template' | 'marketing' | 'automation' | 'prompt_pack' | 'design';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: ProductType;
  image: string;
  isAiGenerated: boolean;
  agentName?: string;
  rating: number;
  reviews: number;
  features: string[];
  toc?: string[]; // Table of Contents for E-books
  dateAdded: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AiAgent {
  id: string;
  name: string;
  role: string;
  type: ProductType;
  description: string;
  color: string;
  icon: string;
}

export interface GenerationRequest {
  agentId: string;
  topic: string;
  targetAudience: string;
}