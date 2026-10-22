export interface ManagementMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  category: 'Executive' | 'Board' | 'Operations';
  imageDivId: string;
  defaultImage?: string;
  userImage?: string | null;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  category: 'Oil Palm' | 'Agro-Processing' | 'Planned Line';
  status: 'In Production' | 'Active Processing' | 'Planned Expansion';
  specifications: string[];
  image: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Plantation' | 'Nursery' | 'Processing' | 'Products' | 'Community';
  description: string;
  image: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface ValueChainStep {
  stepNumber: number;
  name: string;
  oilPalmDetail: string;
  generalDetail: string;
  focus: string;
}
