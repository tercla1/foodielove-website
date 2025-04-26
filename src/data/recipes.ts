
import { Recipe } from './types';
import { breakfastRecipes } from './categories/breakfast';
import { lunchRecipes } from './categories/lunch';
import { dinnerRecipes } from './categories/dinner';
import { dessertRecipes } from './categories/dessert';
import { appetizerRecipes } from './categories/appetizers';
import { drinkRecipes } from './categories/drinks';

// Combine all recipes from different categories
export const recipes: Recipe[] = [
  ...breakfastRecipes,
  ...lunchRecipes,
  ...dinnerRecipes,
  ...dessertRecipes,
  ...appetizerRecipes,
  ...drinkRecipes
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.isFeatured);
};

export const getLatestRecipes = (count: number = 6): Recipe[] => {
  return [...recipes].slice(0, count);
};

export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
};
