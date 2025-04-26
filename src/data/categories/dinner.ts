
import { Recipe } from '../types';

export const dinnerRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    prepTime: '10 min',
    cookTime: '15 min',
    difficulty: 'Medium',
    category: 'Dinner',
    authorName: 'Marco Rossi',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    ingredients: [
      '350g spaghetti',
      '150g pancetta or guanciale, diced',
      '4 large eggs',
      '50g pecorino cheese, grated',
      '50g parmesan cheese, grated',
      'Black pepper, freshly ground',
      'Salt to taste'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti according to package instructions.',
      'While pasta cooks, heat a large skillet over medium heat. Add the pancetta and cook until crispy, about 5-7 minutes.',
      'In a bowl, whisk together eggs, both cheeses, and plenty of freshly ground black pepper.',
      'When pasta is done, reserve 1 cup of pasta water, then drain pasta.',
      'Working quickly, add hot pasta to the skillet with pancetta, toss to combine.',
      'Remove skillet from heat and quickly pour in egg mixture, stirring constantly to create a creamy sauce. Add a splash of reserved pasta water if needed to loosen.',
      'Serve immediately with extra cheese and black pepper on top.'
    ],
    description: 'A rich and creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.',
    servings: 4,
    isFeatured: true
  },
  {
    id: '3',
    title: 'Thai Green Curry',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    prepTime: '15 min',
    cookTime: '20 min',
    difficulty: 'Medium',
    category: 'Dinner',
    authorName: 'Lily Chan',
    authorImage: 'https://randomuser.me/api/portraits/women/26.jpg',
    ingredients: [
      '400ml coconut milk',
      '3-4 tbsp green curry paste',
      '500g chicken breast, sliced',
      '1 zucchini, sliced',
      '1 red bell pepper, sliced',
      '1 handful of Thai basil leaves',
      '2 tbsp fish sauce',
      '1 tbsp palm sugar or brown sugar',
      '2-3 kaffir lime leaves',
      'Jasmine rice, to serve'
    ],
    instructions: [
      'Heat a large pan over medium heat. Add a little coconut milk and the curry paste. Stir-fry for 1-2 minutes until fragrant.',
      'Add the chicken and stir to coat with the curry paste. Cook for 3-4 minutes until the chicken starts to change color.',
      'Pour in the rest of the coconut milk and add the kaffir lime leaves. Bring to a simmer.',
      'Add the zucchini and bell pepper. Simmer for 10-12 minutes until the chicken is cooked through and vegetables are tender.',
      'Stir in fish sauce, palm sugar, and Thai basil leaves. Adjust seasoning to taste.',
      'Serve hot with steamed jasmine rice.'
    ],
    description: 'A fragrant and spicy Thai curry with the perfect balance of creamy coconut milk and aromatic herbs.',
    servings: 4,
    isFeatured: true
  },
  {
    id: '6',
    title: 'Homemade Beef Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80',
    prepTime: '20 min',
    cookTime: '15 min',
    difficulty: 'Medium',
    category: 'Dinner',
    authorName: 'Jack Wilson',
    authorImage: 'https://randomuser.me/api/portraits/men/22.jpg',
    ingredients: [
      '750g ground beef (80% lean)',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '1 egg',
      '1 tbsp Worcestershire sauce',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '6 burger buns',
      'Cheese slices',
      'Lettuce, tomato, onion, pickles for serving',
      'Ketchup, mustard, mayo for serving'
    ],
    instructions: [
      'In a large bowl, combine ground beef, onion, garlic, egg, Worcestershire sauce, salt, and pepper. Mix gently with your hands.',
      'Divide the mixture into 6 equal portions and form into patties about 1/2 inch thick.',
      'Press a slight depression in the center of each patty to prevent it from puffing up during cooking.',
      'Heat a grill or skillet to medium-high heat.',
      'Cook the patties for about 4-5 minutes on each side for medium doneness.',
      'If adding cheese, place a slice on each patty during the last minute of cooking.',
      'Toast the burger buns lightly on the grill.',
      'Assemble burgers with your choice of toppings and condiments.'
    ],
    description: 'Juicy homemade beef burgers that are perfect for grilling season or any time you want a delicious meal.',
    servings: 6,
    isFeatured: false
  }
];
