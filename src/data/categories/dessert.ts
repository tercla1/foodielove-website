
import { Recipe } from '../types';

export const dessertRecipes: Recipe[] = [
  {
    id: '4',
    title: 'Homemade Chocolate Chip Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80',
    prepTime: '15 min',
    cookTime: '10 min',
    difficulty: 'Easy',
    category: 'Dessert',
    authorName: 'Emily Parker',
    authorImage: 'https://randomuser.me/api/portraits/women/12.jpg',
    ingredients: [
      '225g butter, softened',
      '220g brown sugar',
      '100g granulated sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '385g all-purpose flour',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '300g chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C) and line baking trays with parchment paper.',
      'In a large bowl, cream together butter and both sugars until light and fluffy.',
      'Beat in eggs one at a time, then stir in vanilla.',
      'In a separate bowl, combine flour, baking soda, and salt.',
      'Gradually mix the dry ingredients into the wet mixture until just combined.',
      'Fold in chocolate chips.',
      'Drop rounded tablespoons of dough onto the prepared baking trays, spacing cookies about 2 inches apart.',
      'Bake for 9-11 minutes until edges are golden but centers are still soft.',
      'Allow to cool on baking trays for 5 minutes before transferring to wire racks.'
    ],
    description: 'Classic chocolate chip cookies with a perfect balance of crispy edges and chewy centers.',
    servings: 24,
    isFeatured: false
  }
];
