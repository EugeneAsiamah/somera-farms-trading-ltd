import { ManagementMember, ProductItem, GalleryImage, CoreValue, ValueChainStep } from '../types';

// Asset Image Imports (Tells Vite to compile them into dist/assets)
import heroPlantationImg from '../assets/images/hero_palm_plantation_1790541494634.jpg';
import fruitBunchesImg from '../assets/images/oil_palm_fruit_bunches_1790541506024.jpg';
import nurseryImg from '../assets/images/seedling_nursery_1790541516899.jpg';
import processingPlantImg from '../assets/images/processing_plant_1790541525606.jpg';
import palmOilBottlesImg from '../assets/images/palm_oil_bottles_1790541536335.jpg';
import gariImg from '../assets/images/gari.jpg';

export {
  heroPlantationImg,
  fruitBunchesImg,
  nurseryImg,
  processingPlantImg,
  palmOilBottlesImg
};

export const COMPANY_INFO = {
  name: 'Somera Farms & Trading Ltd',
  shortName: 'Somera Farms',
  established: 'July 2005',
  incorporated: '2006 (Companies Code, Act 179)',
  founder: 'Mr. Daniel Aforo',
  location: 'Techimantia, Ahafo Region, Ghana',
  landmark: 'Opposite Arise and Shine Hotel, Techimantia',
  businessEmail: 'somerafarms.trading@gmail.com',
  administrativeEmail: 'alexyeboahsomerafarms@gmail.com',
  telephone: 'Available upon direct inquiry',
  whatsapp: 'Available upon direct inquiry',
  website: 'https://somerafarms.com',
  
  headline: 'Growing Agriculture. Creating Value. Building a Sustainable Future.',
  
  aboutSummary:
    'Somera Farms & Trading Ltd is a Ghanaian agricultural and agro-processing company established in July 2005 and incorporated in 2006 under the Companies Code, Act 179. The company is based in Techimantia in the Ahafo Region of Ghana and is engaged in agricultural production, oil palm cultivation, agro-processing, and the development of value-added agricultural products.',
  
  integratedVision:
    'The company operates several farms across different locations and is developing an integrated agricultural value chain connecting farm production, raw material supply, processing, and finished products.',
  
  history:
    'Somera Farms & Trading Ltd was established in July 2005 by Mr. Daniel Aforo, with a focus on agricultural production and the development of sustainable farming activities. Since its establishment, the company has expanded its agricultural operations and developed plans to move beyond primary farming into agro-processing.',
  
  vision:
    'To become a leading Ghanaian agricultural and agro-processing company that produces quality agricultural products and creates sustainable value from farm to finished product.',
  
  mission:
    'To produce quality agricultural raw materials, process them efficiently, create value-added products, support local farmers, create employment, and contribute to sustainable agricultural development in Ghana.',
  
  identityTags: [
    'Agriculture',
    'Processing',
    'Innovation',
    'Sustainability',
    'Value Addition',
    'Growth'
  ]
};

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Quality',
    description: 'Maintaining high standards throughout farming and processing operations.',
    iconName: 'Award'
  },
  {
    title: 'Integrity',
    description: 'Conducting business with honesty, transparency, and accountability.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Sustainability',
    description: 'Promoting responsible agricultural practices for long-term value.',
    iconName: 'Leaf'
  },
  {
    title: 'Innovation',
    description: 'Embracing modern farming, processing technologies, and better ways of creating value.',
    iconName: 'Zap'
  },
  {
    title: 'Community Development',
    description: 'Creating employment and contributing to communities around our operations.',
    iconName: 'Users'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Providing reliable and quality products that meet customer and partner needs.',
    iconName: 'Smile'
  }
];

export const KEY_METRICS = [
  {
    label: 'Oil Palm Plantation Base',
    value: '1,500',
    unit: 'Acres',
    subtext: 'Across multiple strategic farm holdings in Ahafo Region'
  },
  {
    label: 'Teak Plantation Reserve',
    value: '50',
    unit: 'Acres',
    subtext: 'Sustainable forestry and agro-ecological balance'
  },
  {
    label: 'Annual Nursery Seedlings',
    value: '100,000',
    unit: 'Seedlings/yr',
    subtext: 'Supplying internal acreage & local outgrower farmers'
  },
  {
    label: 'Processing Plant Capacity',
    value: '3',
    unit: 'Tonnes/hr',
    subtext: 'Up to 72 tonnes FFB/day across 3 shifts in Techimantia'
  },
  {
    label: 'Years of Experience',
    value: '20+',
    unit: 'Years',
    subtext: 'Agricultural operations established July 2005'
  }
];

export const MANAGEMENT_TEAM: ManagementMember[] = [
  {
    id: 'daniel-aforo',
    name: 'Mr. Daniel Aforo',
    role: 'Founder & Chief Executive Officer',
    bio: 'Founder of Somera Farms & Trading Ltd with experience in agricultural business and company management. Provides executive leadership and spearheads the strategic transformation from primary farming to industrial agro-processing.',
    category: 'Executive',
    imageDivId: 'div-mgmt-daniel-aforo'
  },
  {
    id: 'dr-jude-aziz',
    name: 'Dr. Jude Aziz',
    role: 'Non-Executive Director',
    bio: 'Provides board-level experience and strategic oversight to the organisation, ensuring high standards of corporate governance, commercial strategy, and long-term sustainability.',
    category: 'Board',
    imageDivId: 'div-mgmt-dr-jude-aziz'
  },
  {
    id: 'alex-yeboah',
    name: 'Mr. Alex Yeboah',
    role: 'Director & Secretary / Administrative Officer',
    bio: "Supports the company's administrative, coordination, operational and company secretarial functions, managing official regulatory compliance and executive workflow.",
    category: 'Executive',
    imageDivId: 'div-mgmt-alex-yeboah'
  },
  {
    id: 'benjamin-sackey',
    name: 'Mr. Benjamin Sackey',
    role: 'Head of Finance',
    bio: "Supports the company's financial management and accounting functions, overseeing capital allocation, farm budgeting, fiscal accountability, and operational liquidity.",
    category: 'Executive',
    imageDivId: 'div-mgmt-benjamin-sackey'
  },
  {
    id: 'ali-adams-dominic',
    name: 'Mr. Ali Adams Dominic',
    role: 'Production Manager',
    bio: 'Oversees day-to-day milling and agro-processing operations at the Techimantia facility, supervising throughput, machinery efficiency, quality assurance, and production safety.',
    category: 'Operations',
    imageDivId: 'div-mgmt-ali-adams-dominic'
  }
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'palm-oil',
    name: 'Palm Oil',
    description: 'Production of high-grade unrefined and refined palm oil extracted directly from freshly harvested fruit bunches at our Techimantia processing facility.',
    category: 'Oil Palm',
    status: 'Active Processing',
    specifications: [
      'Extracted within hours of harvest for low FFA',
      'Rich in natural carotenoids & vitamins',
      'Suitable for culinary, food manufacture & industrial use',
      'Locally sourced and processed in Ahafo Region'
    ],
    image: palmOilBottlesImg
  },
  {
    id: 'fresh-fruit-bunches',
    name: 'Fresh Fruit Bunches (FFB)',
    description: 'Sustainably cultivated high-yielding fresh fruit bunches harvested from our 1,500 acres plantation and vetted outgrower network.',
    category: 'Oil Palm',
    status: 'In Production',
    specifications: [
      'High oil-to-bunch ratio genetics',
      'Continuous harvest cycle across three locations',
      'Direct sourcing feed for commercial milling',
      'Rigorous quality grading and ripeness screening'
    ],
    image: fruitBunchesImg
  },
  {
    id: 'palm-kernel-products',
    name: 'Palm Kernel Products',
    description: 'Recovery and commercial utilization of palm kernel nuts from oil palm processing, yielding valuable palm kernel oil (PKO) and animal feed meal.',
    category: 'Agro-Processing',
    status: 'Active Processing',
    specifications: [
      'High-energy palm kernel cake for livestock feed',
      'Unrefined crude palm kernel oil for soap and cosmetics',
      'Zero waste byproduct circular recovery model',
      'Clean separated nuts ready for secondary pressing'
    ],
    image: processingPlantImg
  },
  {
    id: 'gari',
    name: 'Cassava Gari',
    description: 'Nutritious, crispy gari processed from mature, healthy cassava roots grown in our subsidiary farm clusters in the fertile Ahafo soils.',
    category: 'Agro-Processing',
    status: 'In Production',
    specifications: [
      'Thoroughly fermented and properly roasted',
      'Fine golden-cream texture free from sand and impurities',
      'Hygienically packaged for retail and bulk supply',
      'High swelling capacity and extended shelf-life'
    ],
    image: gariImg
  },
  {
    id: 'soap',
    name: 'Handcrafted & Commercial Soap',
    description: 'Planned expansion into soap and detergent production utilizing suitable processed agricultural raw materials including palm oil and palm kernel extracts.',
    category: 'Planned Line',
    status: 'Planned Expansion',
    specifications: [
      'Natural vegetable oil-based formulation',
      'Rich moisturizing lather without harsh synthetics',
      'Supports local Ghanaian hygiene & consumer markets',
      'Direct value addition from our palm oil byproduct streams'
    ],
    image: heroPlantationImg
  }
];

export const VALUE_CHAIN_STEPS: ValueChainStep[] = [
  {
    stepNumber: 1,
    name: 'Farming',
    oilPalmDetail: 'Oil Palm Plantation (1,500 Acres) & Teak Reserve (50 Acres)',
    generalDetail: 'Cultivating crops across multiple locations with prime soil & rainfall management',
    focus: 'Good agricultural practices, seed selection, land stewardship'
  },
  {
    stepNumber: 2,
    name: 'Harvesting',
    oilPalmDetail: 'Fresh Fruit Bunches (FFB) picked at peak ripeness',
    generalDetail: 'Timely harvesting of mature produce to safeguard oil content and nutrients',
    focus: 'Skilled farm workers, quality grading on field'
  },
  {
    stepNumber: 3,
    name: 'Raw Material Supply',
    oilPalmDetail: 'Nursery seedlings + internal harvest + outgrower haulage',
    generalDetail: 'Reliable logistics linking field collection points to central milling',
    focus: 'Traceable supply chain, cold/dry transport, local aggregators'
  },
  {
    stepNumber: 4,
    name: 'Processing',
    oilPalmDetail: '3 Tonnes/hour milling plant in Techimantia',
    generalDetail: 'Mechanical extraction, sterilization, threshing, and pressing',
    focus: 'Industrial safety, consistent throughput (24-72 tonnes/day)'
  },
  {
    stepNumber: 5,
    name: 'Value Addition',
    oilPalmDetail: 'Palm Oil, Palm Kernel Recovery, Gari, Planned Soap production',
    generalDetail: 'Transforming perishable agricultural raw crops into shelf-stable commodities',
    focus: 'High margin finished goods, circular economy, waste reduction'
  },
  {
    stepNumber: 6,
    name: 'Finished Products',
    oilPalmDetail: 'Pure Palm Oil drums/bottles, Kernel products, Gari bags',
    generalDetail: 'Standardized commercial packaging meeting national standards',
    focus: 'Quality assurance, hygienic sealing, batch labeling'
  },
  {
    stepNumber: 7,
    name: 'Market & Distribution',
    oilPalmDetail: 'Domestic consumer wholesale, commercial food processors & export',
    generalDetail: 'Connecting Ghanaian agricultural output to strong local and international buyers',
    focus: 'Fair pricing, sustained demand, regional trade'
  }
];

export const WHY_SOMERA = [
  {
    title: 'Integrated Agricultural Value Chain',
    description: 'Connecting farming, raw material sourcing, processing, and value addition under one cohesive operational model to ensure end-to-end quality and cost efficiencies.'
  },
  {
    title: 'Agricultural Experience Dating to 2005',
    description: 'Over two decades of proven farming heritage in Ghana, evolving from primary cultivation into a structured commercial agro-processor.'
  },
  {
    title: 'Commercial Processing Capacity',
    description: 'Planned 3 tonnes per hour FFB processing facility in Techimantia, delivering 24 tonnes/day (single shift) and up to 72 tonnes/day (three shifts).'
  },
  {
    title: 'Strategic Local Production',
    description: 'Deeply anchored in Techimantia in the fertile Ahafo Region, creating local agricultural employment and boosting Ghanaian food sovereignty.'
  },
  {
    title: 'Empowering Farmer Partnerships',
    description: 'Structured outgrower programme distributing certified seedlings and guaranteed market off-take to elevate smallholder farmer incomes.'
  },
  {
    title: 'Value Addition Focus',
    description: 'Moving decisively beyond exporting raw commodities to industrial processing, creating palm oil, kernel products, gari, and planned soap lines.'
  }
];

export const FUTURE_EXPANSION_PILLARS = [
  'Expansion of oil palm plantations across new contiguous acreages',
  'Expansion of the oil palm nursery programme to exceed 100,000 seedlings annually',
  'Increased collaboration with outgrower farmers across the Ahafo Region',
  'Expansion of commercial oil palm processing throughput capacity',
  'Development and market launch of domestic soap production lines',
  'Increased production and diversification of value-added agricultural products',
  'Development of stronger local Ghanaian and regional West African markets',
  'Strategic expansion into global export markets for finished certified products'
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Oil Palm Plantation Canopy',
    category: 'Plantation',
    description: 'Over 1,500 acres of thriving oil palm plantations in the fertile Ahafo Region of Ghana.',
    image: heroPlantationImg
  },
  {
    id: 'gal-2',
    title: 'Fresh Fruit Bunches (FFB)',
    category: 'Products',
    description: 'Freshly harvested oil palm bunches displaying optimal ripeness and high oil content.',
    image: fruitBunchesImg
  },
  {
    id: 'gal-3',
    title: 'Oil Palm Seedling Nursery',
    category: 'Nursery',
    description: 'Annual 100,000 seedling nursery programme in Techimantia supporting outgrowers.',
    image: nurseryImg
  },
  {
    id: 'gal-4',
    title: 'Commercial Milling Facility',
    category: 'Processing',
    description: 'Techimantia agro-processing plant designed for 3 tonnes of FFB throughput per hour.',
    image: processingPlantImg
  },
  {
    id: 'gal-5',
    title: 'Pure Palm Oil & Gari Packaging',
    category: 'Products',
    description: 'High-purity golden red palm oil and wholesome roasted cassava gari ready for market.',
    image: palmOilBottlesImg
  },
  {
    id: 'gal-6',
    title: 'Sustainable Teak Plantation',
    category: 'Plantation',
    description: '50-acre sustainable teak plantation complementing our oil palm agricultural footprint.',
    image: heroPlantationImg
  }
];