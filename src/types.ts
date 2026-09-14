export interface TechSpecs {
  chip: string;
  camera: string;
  weight: string;
  display: string;
  battery: string;
  sensors: string;
  connectivity: string;
  protection: string;
}

export interface RetailLink {
  platform: string;
  url: string;
  price: string;
  status: string;
}

export interface SentimentData {
  rating: number | null;
  reviewsCount: string;
  positiveSummary: string;
  negativeSummary: string;
  redditTopicVolume: string;
  typicalPositiveComments: string[];
  typicalNegativeComments: string[];
}

export interface VariantDetail {
  name: string;
  difference: string;
  targetUser: string;
  price?: string;
}

export interface ProductGalleryImage {
  src: string;
  label: string;
  caption?: string;
}

export interface AccessorySection {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  specs: Array<{
    label: string;
    value: string;
  }>;
  highlights: string[];
}

export interface Product {
  id: string;
  brandId: string;
  name: string;
  line: string;
  image: string;
  releaseDate?: string;
  priceUSD: number | null;
  priceSGD?: number;
  hasDisplay: boolean;
  hasCamera: boolean;
  controlMethod: string;
  techSpecs: TechSpecs;
  variants?: string[];
  imageGallery?: ProductGalleryImage[];
  variantDetails?: VariantDetail[];
  variantConfigNote?: string;
  accessorySection?: AccessorySection;
  evidenceNotes?: string[];
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  sentiment: SentimentData;
  retailLinks: RetailLink[];
}

export interface Brand {
  id: string;
  name: string;
  chineseName: string;
  logo: string;
  originCountry?: string;
  companyBackground?: string;
  description: string;
  focus: string;
  website: string;
  launchYear: number;
  marketRole: string;
  productLines: string[];
  analysisPoints: string[];
}

export interface ComparisonDimension {
  id: string;
  label: string;
  group: string;
}
