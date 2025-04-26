
export interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  authorName: string;
  authorImage?: string;
  ingredients: string[];
  instructions: string[];
  description: string;
  servings: number;
  isFeatured?: boolean;
}
