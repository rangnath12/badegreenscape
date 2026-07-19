import { Plant } from '../types';

export const plants: Plant[] = [
  // --- OUTDOOR FRUIT-BEARING / SHADE PLANTS ---
  {
    id: 'mango',
    name: 'Mango (Kesar / Alphonso)',
    category: 'Outdoor',
    shortDescription: 'The King of Fruits. An evergreen canopy tree yielding sweet, pulpy, and delicious tropical mangoes.',
    fullDescription: 'Bade Greenscape brings you premium grafted mango saplings that bear fruit significantly sooner than seed-grown trees. Grafted from high-yielding mother plants of famous Alphonso and Kesar varieties, these thrive in warm climates and make an majestic addition to any homestead or orchard.',
    imagePath: '/src/assets/images/plants/mango.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1601493700631-2b16ec4bc820?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Full direct sunlight (6-8 hours daily).',
      water: 'Moderate watering when young; drought-tolerant once established. Avoid waterlogging.',
      soil: 'Deep, rich, well-draining loamy soil with a pH of 5.5 to 7.5.'
    },
    growthInfo: {
      height: '15 - 30 feet (Can be pruned to maintain compact shape)',
      fruitingTime: '2 - 3 years for grafted saplings',
      difficulty: 'Moderate'
    }
  },
  {
    id: 'guava',
    name: 'Guava (L-49 / VNR Bihi)',
    category: 'Outdoor',
    shortDescription: 'Extremely hardy, high-yielding fruit tree producing sweet, crisp guava fruit loaded with Vitamin C.',
    fullDescription: 'Our hybrid Guava saplings are adapted to diverse soil conditions and climates. They produce large, crisp, white/pink fleshed fruits that are highly nutritious and delicious. Perfect for home gardens or large plantations.',
    imagePath: '/src/assets/images/plants/guava.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534431958223-999338902b4d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Thrives in bright, direct sunlight.',
      water: 'Regular, deep watering during the growing and fruiting season.',
      soil: 'Highly adaptable, but thrives in organic-rich, well-drained sandy loam.'
    },
    growthInfo: {
      height: '10 - 15 feet (Excellent for backyard sizing)',
      fruitingTime: '1 - 2 years',
      difficulty: 'Easy'
    }
  },
  {
    id: 'coconut',
    name: 'Coconut (Dwarf Orange / West Coast Tall)',
    category: 'Outdoor',
    shortDescription: 'The quintessential tropical tree offering fresh coconut water and a coastal, breezy vibe.',
    fullDescription: 'We provide premium coconut seedlings raised from selected disease-free mother palms. Ideal for sandy shorelines, farm boundaries, and spacious backyards, providing sweet, hydrating coconut water and rich kernels.',
    imagePath: '/src/assets/images/plants/coconut.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Unobstructed full sunlight throughout the day.',
      water: 'High moisture requirements. Water deeply twice a week, more in dry summers.',
      soil: 'Sandy, porous soil that drains rapidly. Highly salt-tolerant.'
    },
    growthInfo: {
      height: '30 - 60 feet (Dwarf varieties remain much shorter)',
      fruitingTime: '3 - 5 years for Dwarf, 7 years for Tall',
      difficulty: 'Moderate'
    }
  },
  {
    id: 'fig',
    name: 'Fig (Anjeer / Poona Fig)',
    category: 'Outdoor',
    shortDescription: 'A sweet, nutrient-dense Mediterranean delight that produces luscious figs in pots or the ground.',
    fullDescription: 'The Fig tree (Anjeer) is highly valued for its sweet, honey-like fruits. It develops a gorgeous ornamental canopy and can even be grown in large containers on sunny balconies. Our selection is heat-tolerant and quick to bear fruit.',
    imagePath: '/src/assets/images/plants/fig.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601574391157-55dfbd9b048d?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Prefers full sun, but handles afternoon light shade in extreme heat.',
      water: 'Moderate watering. Keep soil evenly moist but never soggy.',
      soil: 'Well-drained loamy soil, slightly alkaline or neutral.'
    },
    growthInfo: {
      height: '8 - 12 feet',
      fruitingTime: '1 year',
      difficulty: 'Easy'
    }
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate (Bhagwa / Ganesh)',
    category: 'Outdoor',
    shortDescription: 'Produces highly prized, ruby-red juicy arils inside a gorgeous flowering bush or small tree.',
    fullDescription: 'Bhagwa is the premier pomegranate variety, famous for its deep red, soft seeds and exceptionally sweet flavor. Pomegranates are drought-resistant and flourish in hot, dry climates, featuring stunning bright orange flowers before fruiting.',
    imagePath: '/src/assets/images/plants/pomegranate.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1582283995897-47b7dfc89d97?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601574945395-5858cf08fcbc?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Thrives in the hottest, sunniest spots of your garden.',
      water: 'Low to moderate water needs. Irrigate thoroughly during fruit development.',
      soil: 'Adapts well to calcareous, rocky, or sandy-clay well-draining soils.'
    },
    growthInfo: {
      height: '8 - 15 feet',
      fruitingTime: '1 - 2 years',
      difficulty: 'Easy'
    }
  },
  {
    id: 'banana',
    name: 'Banana (G9 / Robusta)',
    category: 'Outdoor',
    shortDescription: 'Fast-growing herbaceous plant that adds instant tropical lushness and reliable heavy fruit yields.',
    fullDescription: 'Our Grand Naine (G9) tissue-culture banana plants are highly disease-resistant and uniform in growth. They yield massive, high-quality banana bunches with delicious sweet yellow fruits in a very short span.',
    imagePath: '/src/assets/images/plants/banana.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1566393028639-d108a42c46a7?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Full sun to light partial shade. Shelter from high winds.',
      water: 'Heavy water needs. Keep soil consistently moist but never waterlogged.',
      soil: 'Rich, fertile soil with substantial organic compost and excellent drainage.'
    },
    growthInfo: {
      height: '8 - 12 feet',
      fruitingTime: '10 - 12 months',
      difficulty: 'Moderate'
    }
  },
  {
    id: 'lemon',
    name: 'Lemon (Kagzi / Seedless)',
    category: 'Outdoor',
    shortDescription: 'Zesty, juicy lemons all year round from an aromatic, beautifully flowering citrus shrub.',
    fullDescription: 'The Kagzi Lemon is an indispensable addition to any garden, yielding small, thin-skinned fruits packed with sour juice. It flowers continuously, filling the surrounding air with a sublime citrus fragrance.',
    imagePath: '/src/assets/images/plants/lemon.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520023617154-15f16e4566ef?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Direct sunlight is essential for heavy flowering and fruiting.',
      water: 'Regular watering. Let the topsoil dry out slightly between waterings.',
      soil: 'Well-aerated, acidic to neutral soil. Citrus loves good drainage.'
    },
    growthInfo: {
      height: '6 - 10 feet (Perfect for medium pots or home gardens)',
      fruitingTime: '1 year',
      difficulty: 'Easy'
    }
  },
  {
    id: 'orange',
    name: 'Orange (Nagpur Mandarin)',
    category: 'Outdoor',
    shortDescription: 'Famous sweet, easy-to-peel mandarin orange tree with shiny leaves and highly aromatic blossoms.',
    fullDescription: 'Nagpur Mandarin oranges are legendary for their sweet, juicy flavor. They do exceptionally well in sunny tropical and sub-tropical environments, producing dense orange clusters in late winter.',
    imagePath: '/src/assets/images/plants/orange.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Requires 6+ hours of intense daily sunshine.',
      water: 'Water deeply but infrequently, allowing the roots to breathe.',
      soil: 'Rich loam with plenty of organic matter and great drainage.'
    },
    growthInfo: {
      height: '10 - 15 feet',
      fruitingTime: '2 - 3 years',
      difficulty: 'Moderate'
    }
  },
  {
    id: 'apple',
    name: 'HRMN-99 Apple (Warm Climate Apple)',
    category: 'Outdoor',
    shortDescription: 'A revolutionary low-chill apple variety that fruits beautifully even in hot, plains environments.',
    fullDescription: 'The HRMN-99 is an incredible breakthrough apple cultivar that does not require freezing winter temperatures to fruit. It grows and produces sweet, crisp apples in low-altitude, warm tropical/subtropical areas with outstanding success.',
    imagePath: '/src/assets/images/plants/apple.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Full morning sun with some light afternoon shade in blistering hot regions.',
      water: 'Consistent moderate moisture. Do not let the root zone completely dry out.',
      soil: 'Rich, deeply cultivated organic soil with standard drainage.'
    },
    growthInfo: {
      height: '10 - 15 feet',
      fruitingTime: '2 - 3 years',
      difficulty: 'Expert'
    }
  },
  {
    id: 'papaya',
    name: 'Papaya (Red Lady 786)',
    category: 'Outdoor',
    shortDescription: 'High-yielding dwarf papaya variety known for its exceptionally sweet, thick orange flesh.',
    fullDescription: 'Red Lady is a premium self-pollinating dwarf papaya that yields high quantities of large fruits. It is virus-tolerant and perfect for rapid backyard orchard establishment.',
    imagePath: '/src/assets/images/plants/papaya.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610450949065-9f28cf69e96e?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Needs maximum possible direct sunlight.',
      water: 'Keep moderately moist. Susceptible to root rot if sitting in stagnant water.',
      soil: 'Extremely well-drained, sandy-loam with plenty of nitrogen.'
    },
    growthInfo: {
      height: '6 - 10 feet (Dwarf profile)',
      fruitingTime: '8 - 10 months',
      difficulty: 'Easy'
    }
  },
  {
    id: 'custard-apple',
    name: 'Custard Apple (Golden Sitaphal)',
    category: 'Outdoor',
    shortDescription: 'Delightful tropical fruit with sweet, custard-like creamy white segments inside a bumpy green skin.',
    fullDescription: 'Our Golden Sitaphal saplings produce large custard apples with minimal seeds and highly fragrant, velvety sweet pulp. Extremely hardy and well-suited for arid and rocky areas.',
    imagePath: '/src/assets/images/plants/custard_apple.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1629115917926-258296a2ca39?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Thrives in bright, full, unobstructed sunlight.',
      water: 'Low water requirement. Water occasionally, increase during flowering.',
      soil: 'Highly tolerant of poor, gravelly, dry soils but requires good drainage.'
    },
    growthInfo: {
      height: '10 - 15 feet',
      fruitingTime: '2 years',
      difficulty: 'Easy'
    }
  },
  {
    id: 'curry-leaf',
    name: 'Curry Leaf (Sweet Neem)',
    category: 'Outdoor',
    shortDescription: 'A highly aromatic culinary herb prized for its distinctive, flavorful leaves used in premium dishes.',
    fullDescription: 'The organic Curry Leaf plant is a staple herb shrub. It offers highly fragrant leaves that enhance culinary dishes, while emitting a delightful herbal scent in the garden.',
    imagePath: '/src/assets/images/plants/curry_leaf.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
    gallery: [],
    careInstructions: {
      light: 'Warm direct sun to light partial shade.',
      water: 'Moderate. Allow topsoil to dry before watering again.',
      soil: 'Slightly acidic, well-draining soil with regular compost feed.'
    },
    growthInfo: {
      height: '5 - 10 feet',
      fruitingTime: 'Continuous harvest of leaves',
      difficulty: 'Easy'
    }
  },
  {
    id: 'amla',
    name: 'Amla (Indian Gooseberry)',
    category: 'Outdoor',
    shortDescription: 'A highly revered medicinal tree yielding sour, translucent green fruits packed with antioxidants.',
    fullDescription: 'Amla is famous in traditional wellness systems. The tree features beautiful fine-feathered foliage and yields high amounts of super-nutritious gooseberries perfect for preserves and health juices.',
    imagePath: '/src/assets/images/plants/amla.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1543157148-f411b794bf34?auto=format&fit=crop&w=1000&q=80',
    gallery: [],
    careInstructions: {
      light: 'Thrives in full blazing tropical sun.',
      water: 'Very low water needs once established.',
      soil: 'Extremely tolerant of sandy, alkaline, or poor dry soils.'
    },
    growthInfo: {
      height: '15 - 25 feet',
      fruitingTime: '3 years',
      difficulty: 'Easy'
    }
  },
  {
    id: 'sapota',
    name: 'Sapota (Chiku / Kalipatti)',
    category: 'Outdoor',
    shortDescription: 'Produces exceptionally sweet, brown-skinned fruits with a texture similar to pear-honey.',
    fullDescription: 'Kalipatti is the most famous sapota variety with dark green leaves and high-quality, rich, sweet fruits. Extremely durable, wind-resistant, and heavy-fruiting.',
    imagePath: '/src/assets/images/plants/sapota.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=1000&q=80',
    gallery: [],
    careInstructions: {
      light: 'Full sun is required for optimal fruit sugar concentration.',
      water: 'Regular moderate watering. Drought resistant.',
      soil: 'Grows in all soil types, excels in rich coastal sandy alluvium.'
    },
    growthInfo: {
      height: '15 - 20 feet',
      fruitingTime: '2 years',
      difficulty: 'Easy'
    }
  },

  // --- INDOOR PLANTS ---
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    category: 'Indoor',
    shortDescription: 'The classic Swiss Cheese plant with striking fenestrated leaves that adds instant jungle energy.',
    fullDescription: 'A darling of interior design, the Monstera Deliciosa is a climbing evergreen prized for its iconic perforated leaves. It grows quickly, is simple to care for, and elevates the aesthetic of any room.',
    imagePath: '/src/assets/images/plants/monstera.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&w=1000&q=80'
    ],
    careInstructions: {
      light: 'Bright indirect sunlight. Direct hot sun can scorch the beautiful leaves.',
      water: 'Water when the top 2 inches of soil feels completely dry.',
      soil: 'Chunky, well-aerated potting mix containing peat, perlite, and orchid bark.'
    },
    growthInfo: {
      height: '6 - 10 feet indoors (with climbing pole support)',
      difficulty: 'Easy'
    }
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily (Spathiphyllum)',
    category: 'Indoor',
    shortDescription: 'Elegant white blooms paired with glossy deep-green foliage. Exceptional air filtration.',
    fullDescription: 'Peace Lilies are famous for their elegant white spathes and high resilience to lower light settings. They filter harmful indoor toxins efficiently while telling you exactly when they need water by gently drooping.',
    imagePath: '/src/assets/images/plants/peace_lily.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&w=1000&q=80',
    gallery: [],
    careInstructions: {
      light: 'Medium to low indirect light. Thrives under standard fluorescent indoor bulbs too.',
      water: 'Keep soil evenly moist. Will droop dramatically when dry and rebound quickly after watering.',
      soil: 'Standard well-draining indoor potting soil.'
    },
    growthInfo: {
      height: '2 - 3 feet',
      difficulty: 'Easy'
    }
  },

  // --- FLOWERING PLANTS ---
  {
    id: 'lavender',
    name: 'French Lavender',
    category: 'Flowering',
    shortDescription: 'Incredible purple spikes carrying a legendary soothing aroma. Beautiful garden accent.',
    fullDescription: 'French Lavender produces beautiful, highly aromatic purple blossoms above soft silver-green foliage. Famous for promoting relaxation and attracting positive pollinators to your flower beds.',
    imagePath: '/src/assets/images/plants/lavender.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80',
    gallery: [],
    careInstructions: {
      light: 'Maximum direct daily sunlight (at least 6-8 hours).',
      water: 'Low water requirement. Let soil dry completely between deep soakings.',
      soil: 'Sandy, rocky, poor soil that drains perfectly. Hates wet roots.'
    },
    growthInfo: {
      height: '1.5 - 3 feet',
      difficulty: 'Moderate'
    }
  },
  {
    id: 'jasmine',
    name: 'Mogra (Arabian Jasmine)',
    category: 'Flowering',
    shortDescription: 'Intensely fragrant pure-white flowers that bloom heavily during warm summer months.',
    fullDescription: 'Mogra is world-renowned for its sweet, captivating fragrance. A beautiful climbing shrub that produces clusters of stellar white double blooms. Ideal for entryways and sunny patios.',
    imagePath: '/src/assets/images/plants/jasmine.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=1000&q=80',
    gallery: [],
    careInstructions: {
      light: 'Prefers 4-6 hours of direct sunlight for dense flowering.',
      water: 'Regular watering. Keep soil moist but not soggy.',
      soil: 'Fertile, organic-rich, well-draining loamy soil.'
    },
    growthInfo: {
      height: '3 - 6 feet (Can be trained as climber or kept as bush)',
      difficulty: 'Easy'
    }
  },

  // --- SUCCULENTS ---
  {
    id: 'jade-plant',
    name: 'Jade Plant (Crassula Ovata)',
    category: 'Succulents',
    shortDescription: 'The classic "Good Luck" succulent featuring thick, spoon-shaped emerald green leaves.',
    fullDescription: 'Jade plants are iconic, long-lived succulents that develop thick, woody stems resembles miniature bonsai trees. They store water in their plump leaves and are incredibly tolerant of neglect.',
    imagePath: '/src/assets/images/plants/jade_plant.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80',
    gallery: [],
    careInstructions: {
      light: 'Very bright indirect light to 4 hours of direct morning sun.',
      water: 'Very sparse watering. Let soil dry 100% before watering.',
      soil: 'Gritty, loose cactus and succulent potting mix.'
    },
    growthInfo: {
      height: '1 - 3 feet (Slow growing)',
      difficulty: 'Easy'
    }
  },

  // --- AIR-PURIFYING ---
  {
    id: 'snake-plant',
    name: 'Snake Plant (Laurentii)',
    category: 'Air-Purifying',
    shortDescription: 'Virtually indestructible upright spear leaves. Outstanding air-cleaning powerhouse.',
    fullDescription: 'Snake Plants (Sansevieria) are renowned NASA-approved air purifiers that actively absorb toxins like formaldehyde and nitrogen oxides. They produce oxygen even at night, making them the ultimate bedroom plant.',
    imagePath: '/src/assets/images/plants/snake_plant.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=1000&q=80',
    gallery: [],
    careInstructions: {
      light: 'Extremely tolerant. Excels in low, medium, or bright light.',
      water: 'Water once every 2-3 weeks. Allow soil to dry bone-dry.',
      soil: 'Fast-draining, sandy succulent soil.'
    },
    growthInfo: {
      height: '2 - 4 feet',
      difficulty: 'Easy'
    }
  }
];
