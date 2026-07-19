export interface Plant {
  id: string;
  name: string;
  category: 'Indoor' | 'Outdoor' | 'Flowering' | 'Succulents' | 'Air-Purifying';
  shortDescription: string;
  fullDescription: string;
  imagePath: string; // Required relative path as metadata, e.g. "/src/assets/images/plants/guava.jpg"
  imageUrl: string;  // High-resolution Unsplash CDN URL
  gallery: string[]; // Extra gallery image URLs
  careInstructions: {
    light: string;
    water: string;
    soil: string;
  };
  growthInfo: {
    height: string;
    fruitingTime?: string;
    difficulty: 'Easy' | 'Moderate' | 'Expert';
  };
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatarUrl?: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  options?: string[]; // Quick replies
}
