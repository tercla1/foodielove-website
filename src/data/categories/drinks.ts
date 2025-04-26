
import { Recipe } from '../types';

export const drinkRecipes: Recipe[] = [
  {
    id: 'fresh-fruit-smoothie',
    title: 'Fresh Fruit Smoothie',
    image: 'https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: 'Easy',
    category: 'Drinks',
    authorName: 'Emma Thompson',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    ingredients: [
      '1 cup frozen mixed berries',
      '1 banana',
      '1 cup milk or plant-based alternative',
      '1 tablespoon honey or maple syrup',
      '1/2 cup Greek yogurt'
    ],
    instructions: [
      'Add all ingredients to a blender.',
      'Blend until smooth and creamy.',
      'Pour into a glass and enjoy immediately.'
    ],
    description: 'Start your day with this refreshing and nutritious fruit smoothie, packed with vitamins and antioxidants.',
    servings: 1,
    isFeatured: true
  },
  {
    id: 'iced-mint-tea',
    title: 'Refreshing Iced Mint Tea',
    image: 'https://images.unsplash.com/photo-1556679343-c1c4b8b505b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    prepTime: '5 mins',
    cookTime: '10 mins',
    difficulty: 'Easy',
    category: 'Drinks',
    authorName: 'Michael Chen',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    ingredients: [
      '4 tea bags (black or green tea)',
      '4 cups water',
      '1/2 cup fresh mint leaves, plus more for garnish',
      '1/4 cup honey or to taste',
      'Ice cubes',
      'Lemon slices for garnish'
    ],
    instructions: [
      'Bring water to a boil in a pot.',
      'Remove from heat and add tea bags and mint leaves.',
      'Steep for 5-7 minutes, then remove tea bags.',
      'Stir in honey until dissolved.',
      'Let the tea cool to room temperature.',
      'Strain the tea to remove mint leaves.',
      'Refrigerate until chilled.',
      'Serve over ice with fresh mint and lemon slices.'
    ],
    description: 'A cooling and refreshing mint tea that\'s perfect for hot summer days. The fresh mint adds a delightful burst of flavor.',
    servings: 4
  }
];
