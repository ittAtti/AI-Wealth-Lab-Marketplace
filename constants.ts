import { AiAgent, Product } from './types';

export const APP_NAME = "AI Wealth Lab";
export const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_eVq5kCfUW55C0LXduf4ZG00";

export const AGENTS: AiAgent[] = [
  {
    id: 'agent-1',
    name: 'PdfForge AI',
    role: 'E-Book Generator',
    type: 'ebook',
    description: 'Creates complete multi-page PDF e-books with structured chapters.',
    color: 'emerald',
    icon: 'BookOpen'
  },
  {
    id: 'agent-2',
    name: 'GrowthKit AI',
    role: 'Marketing Kit Generator',
    type: 'marketing',
    description: 'Generates social media packs, ad templates, and brand strategy PDFs.',
    color: 'blue',
    icon: 'Megaphone'
  },
  {
    id: 'agent-3',
    name: 'AutoFlow AI',
    role: 'Automation Blueprint',
    type: 'automation',
    description: 'Designs workflow diagrams and SOPs for business automation.',
    color: 'purple',
    icon: 'Workflow'
  },
  {
    id: 'agent-4',
    name: 'PromptMaster AI',
    role: 'Prompt Pack Creator',
    type: 'prompt_pack',
    description: 'Compiles high-value prompt libraries for LLMs and Image Gens.',
    color: 'lime',
    icon: 'Terminal'
  },
  {
    id: 'agent-5',
    name: 'CanvasPro AI',
    role: 'Template Architect',
    type: 'template',
    description: 'Builds printable worksheets, planners, and business forms.',
    color: 'orange',
    icon: 'LayoutTemplate'
  },
  {
    id: 'agent-6',
    name: 'PixelCrafter AI',
    role: 'Cover Designer',
    type: 'design',
    description: 'Generates professional, high-conversion product covers and thumbnails.',
    color: 'pink',
    icon: 'Palette'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'The Solopreneur AI Scaling Guide',
    description: 'A comprehensive 50-page guide on scaling a one-person business using AI tools.',
    price: 29.99,
    category: 'ebook',
    image: 'https://picsum.photos/seed/prod1/600/600',
    isAiGenerated: true,
    agentName: 'PdfForge AI',
    rating: 4.8,
    reviews: 124,
    features: ['50+ Pages', 'Tool List', 'Action Plan'],
    dateAdded: '2023-10-15',
    seo: {
      title: 'The Solopreneur AI Scaling Guide PDF — AI Tools for Solo Businesses | AI Wealth Lab',
      description: 'Download “The Solopreneur AI Scaling Guide” — a 50-page comprehensive guide to scaling your one-person business with AI tools. Includes strategies, workflows, and step-by-step tactics.',
      altText: 'Professional ebook cover featuring AI business scaling theme with dark background and emerald accents titled The Solopreneur AI Scaling Guide'
    }
  },
  {
    id: 'prod-2',
    title: 'Ultimate SaaS Marketing Kit',
    description: 'Complete set of email templates, social posts, and ad copy for SaaS launches.',
    price: 49.99,
    category: 'marketing',
    image: 'https://picsum.photos/seed/prod2/600/600',
    isAiGenerated: false,
    rating: 4.9,
    reviews: 89,
    features: ['Email Sequences', 'Ad Copy', 'Canva Links'],
    dateAdded: '2023-10-18',
    seo: {
      title: 'Ultimate SaaS Marketing Kit PDF — Email + Social + Ad Templates | AI Wealth Lab',
      description: 'Grow your SaaS with the Ultimate SaaS Marketing Kit — complete set of email templates, social media posts, and ad copy designed for SaaS product launches.',
      altText: 'Marketing kit cover with email, social, and SaaS icons titled Ultimate SaaS Marketing Kit PDF'
    }
  },
  {
    id: 'prod-3',
    title: 'MidJourney V6 Master Prompts',
    description: 'Over 1000 high-fidelity prompts for photorealistic AI image generation.',
    price: 19.99,
    category: 'prompt_pack',
    image: 'https://picsum.photos/seed/prod3/600/600',
    isAiGenerated: true,
    agentName: 'PromptMaster AI',
    rating: 4.7,
    reviews: 210,
    features: ['1000+ Prompts', 'Style Guide', 'Parameter Cheat Sheet'],
    dateAdded: '2023-11-01',
    seo: {
      title: 'MidJourney V6 Master Prompts PDF — 1000+ AI Image Prompts | AI Wealth Lab',
      description: 'Get the MidJourney V6 Master Prompts PDF — over 1000 high-fidelity prompts for photorealistic AI image generation. Perfect for creators, designers, and AI enthusiasts.',
      altText: 'Futuristic AI prompt book cover with neural network graphics titled MidJourney V6 Master Prompts'
    }
  },
  {
    id: 'prod-4',
    title: 'Notion Business OS Template',
    description: 'All-in-one workspace for managing projects, CRM, and finances.',
    price: 35.00,
    category: 'template',
    image: 'https://picsum.photos/seed/prod4/600/600',
    isAiGenerated: false,
    rating: 4.6,
    reviews: 55,
    features: ['Dashboard', 'CRM', 'Finance Tracker'],
    dateAdded: '2023-11-05',
    seo: {
      title: 'Notion Business OS Template PDF — Project, CRM & Finance | AI Wealth Lab',
      description: 'Boost productivity with the Notion Business OS Template — all-in-one workspace for managing projects, CRM, finances, and operations.',
      altText: 'Clean business template cover with workspace icons titled Notion Business OS Template'
    }
  },
  {
    id: 'prod-5',
    title: 'Automated Email Funnel Blueprint',
    description: 'Visual flowchart and SOPs for setting up a 7-figure email funnel.',
    price: 24.99,
    category: 'automation',
    image: 'https://picsum.photos/seed/prod5/600/600',
    isAiGenerated: true,
    agentName: 'AutoFlow AI',
    rating: 4.9,
    reviews: 32,
    features: ['Flowcharts', 'Zapier Setup', 'Copy Templates'],
    dateAdded: '2023-11-10',
    seo: {
      title: 'Automated Email Funnel Blueprint PDF — Sales Funnel SOPs',
      description: 'Visual flowchart and SOPs for setting up a 7-figure email funnel. Automate your sales process today.',
      altText: 'Blueprint diagram for automated email marketing funnels'
    }
  },
  {
    id: 'prod-6',
    title: 'Instagram Growth 2024 Strategy',
    description: 'Data-backed strategy for growing to 100k followers in 6 months.',
    price: 15.00,
    category: 'ebook',
    image: 'https://picsum.photos/seed/prod6/600/600',
    isAiGenerated: true,
    agentName: 'PdfForge AI',
    rating: 4.5,
    reviews: 40,
    features: ['Content Calendar', 'Reels Guide', 'Hashtag Sets'],
    dateAdded: '2023-11-12',
     seo: {
      title: 'Instagram Growth 2024 Strategy PDF — 100k Followers Guide',
      description: 'Data-backed strategy for growing to 100k followers in 6 months. Includes content calendars and reel guides.',
      altText: 'Modern cover design for Instagram Growth Strategy ebook'
    }
  },
   {
    id: 'prod-7',
    title: 'Freelance Contract Templates',
    description: 'Bulletproof legal contracts for designers, developers, and writers.',
    price: 39.00,
    category: 'template',
    image: 'https://picsum.photos/seed/prod7/600/600',
    isAiGenerated: false,
    rating: 4.8,
    reviews: 110,
    features: ['MSA', 'SOW', 'NDA'],
    dateAdded: '2023-11-15',
     seo: {
      title: 'Freelance Contract Templates — MSA, SOW, NDA Legal Forms',
      description: 'Bulletproof legal contracts for designers, developers, and writers. Protect your freelance business.',
      altText: 'Professional legal document binder cover for freelance contracts'
    }
  },
  {
    id: 'prod-8',
    title: 'Crypto Trading Bot Logic',
    description: 'Python scripts and logic flow for algorithmic trading.',
    price: 99.00,
    category: 'automation',
    image: 'https://picsum.photos/seed/prod8/600/600',
    isAiGenerated: true,
    agentName: 'AutoFlow AI',
    rating: 4.7,
    reviews: 15,
    features: ['Python Code', 'Backtesting Data', 'Strategy PDF'],
    dateAdded: '2023-11-20',
     seo: {
      title: 'Crypto Trading Bot Logic — Python Algo Trading Scripts',
      description: 'Python scripts and logic flow for algorithmic trading. Includes backtesting data and strategy PDF.',
      altText: 'Digital tech abstract cover for crypto trading bot algorithms'
    }
  }
];

export const MOCK_BLOG_POSTS = [
  {
    id: 1,
    title: "How Multi-Agent Systems Are Replacing Standard Automation",
    excerpt: "Why single-purpose bots are dead and how cohesive AI swarms are the future of digital product creation.",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    author: "AI Writing Agent",
    image: "https://picsum.photos/seed/blog1/800/600"
  },
  {
    id: 2,
    title: "Generating $5k/Month with Passive PDF Assets",
    excerpt: "A breakdown of the exact E-books and templates that are selling comfortably on the marketplace right now.",
    date: "Nov 02, 2023",
    readTime: "8 min read",
    author: "Founder",
    image: "https://picsum.photos/seed/blog2/800/600"
  },
  {
    id: 3,
    title: "The Prompt Engineering Guide for 2024",
    excerpt: "Advanced techniques for getting mid-journey and GPT-4 to produce production-ready assets instantly.",
    date: "Nov 15, 2023",
    readTime: "6 min read",
    author: "PromptMaster AI",
    image: "https://picsum.photos/seed/blog3/800/600"
  }
];