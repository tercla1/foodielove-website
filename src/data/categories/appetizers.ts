
import { Recipe } from '../types';

export const appetizerRecipes: Recipe[] = [
  {
    id: '13',
    title: 'Bruschetta with Tomato and Basil',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b71f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    prepTime: '15 min',
    cookTime: '5 min',
    difficulty: 'Easy',
    category: 'Appetizers',
    authorName: 'Antonio Romano',
    authorImage: 'https://randomuser.me/api/portraits/men/29.jpg',
    ingredients: [
      '1 baguette, sliced into 1/2 inch pieces',
      '3 tablespoons olive oil, divided',
      '2 cloves garlic, halved',
      '4 large tomatoes, diced',
      '1/4 cup fresh basil leaves, chopped',
      '2 tablespoons balsamic vinegar',
      'Salt and freshly ground black pepper to taste'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Brush baguette slices with 1 tablespoon olive oil and arrange on a baking sheet.',
      'Bake for 5-7 minutes until lightly toasted.',
      'While still warm, rub each slice with the cut side of garlic halves.',
      'In a bowl, combine diced tomatoes, chopped basil, remaining olive oil, and balsamic vinegar.',
      'Season with salt and pepper and gently toss.',
      'Let the mixture sit for at least 10 minutes to allow flavors to blend.',
      'Top each toasted bread slice with the tomato mixture just before serving.'
    ],
    description: 'A classic Italian appetizer featuring toasted bread topped with fresh tomatoes and basil. Simple, fresh, and bursting with flavor.',
    servings: 8,
    isFeatured: true
  }
];
