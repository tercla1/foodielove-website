
import { Recipe } from '../types';

export const lunchRecipes: Recipe[] = [
  {
    id: '5',
    title: 'Fresh Greek Salad',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    prepTime: '15 min',
    cookTime: '0 min',
    difficulty: 'Easy',
    category: 'Lunch',
    authorName: 'Nikolas Papadopoulos',
    authorImage: 'https://randomuser.me/api/portraits/men/42.jpg',
    ingredients: [
      '1 cucumber, chopped',
      '4 large tomatoes, chopped',
      '1 red onion, thinly sliced',
      '1 green bell pepper, chopped',
      '200g feta cheese, cubed',
      '100g Kalamata olives',
      '2 tbsp fresh oregano',
      '4 tbsp extra virgin olive oil',
      '2 tbsp red wine vinegar',
      'Salt and freshly ground black pepper'
    ],
    instructions: [
      'In a large bowl, combine cucumber, tomatoes, red onion, and bell pepper.',
      'Add the olives and toss gently.',
      'In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper.',
      'Pour the dressing over the salad and toss to coat.',
      'Top with cubed feta cheese and additional oregano if desired.',
      'Serve immediately for the freshest flavor.'
    ],
    description: 'A refreshing and colorful salad featuring crisp vegetables, tangy feta, and a simple olive oil dressing.',
    servings: 4,
    isFeatured: false
  }
];
