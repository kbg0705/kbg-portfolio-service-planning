export type ProjectTier = 'featured' | 'compact' | 'archive';
export type ProjectStatus = 'measured' | 'delivered' | 'recognition' | 'simulated';
export type ImageKind = 'cover' | 'evidence' | 'decision' | 'product' | 'artifact' | 'outcome';

export type ProjectImage = {
  src?: string;
  alt: string;
  caption: string;
  type: ImageKind;
  aspectRatio: '16:10' | '4:3' | '9:16' | '2:1' | '1:1';
  isConfidential?: boolean;
  placeholderTitle: string;
  placeholderDescription: string;
};

export type Outcome = {
  value: string;
  label: string;
  description: string;
  type: ProjectStatus;
};

export type Evidence = {
  label: string;
  description: string;
};

export type ProductDecision = {
  number: string;
  title: string;
  evidence: string;
  decision: string;
  specification: string;
  effect: string;
  image?: ProjectImage;
};

export type Project = {
  slug: string;
  order: number;
  tier: ProjectTier;
  service: string;
  category: string[];
  title: string;
  tagline: string;
  thumbnail?: ProjectImage;
  period: string;
  role: string;
  contribution: string;
  team?: string;
  status: string;
  tools: string[];
  tags: string[];
  problem: string;
  decision: string;
  impact: Outcome[];
  detailPageEnabled: boolean;
  description?: string;
};

export type ProjectDetail = {
  slug: string;
  overview: string;
  context: string;
  executiveSummary: {
    problem: string;
    decision: string;
    outcome: string;
  };
  evidence: Evidence[];
  feedbackBacklog?: {
    title: string;
    subtitle: string;
    body: string;
    flow: string[];
    image: ProjectImage;
    secondaryCaption?: string;
  };
  keyQuestion: string;
  decisions: ProductDecision[];
  artifacts: ProjectImage[];
  collaboration: string[];
  outcomes: Outcome[];
  learnings: string[];
  confidentialityNote?: string;
  images: ProjectImage[];
  previousProject?: string;
  nextProject?: string;
};
