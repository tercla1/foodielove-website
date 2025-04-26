
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { getLatestRecipes } from '@/data/recipes';
import { ChevronRight } from 'lucide-react';

const LatestRecipes = () => {
  const latestRecipes = getLatestRecipes(6);

  return (
    <section className="py-12 bg-recipe-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Recipes</h2>
          <Link to="/recipes" className="text-recipe-orange hover:text-amber-600 flex items-center text-sm font-medium">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              prepTime={recipe.prepTime}
              difficulty={recipe.difficulty}
              category={recipe.category}
              authorName={recipe.authorName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestRecipes;
