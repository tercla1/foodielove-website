
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeById } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, ChefHat, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = getRecipeById(id || '');

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <p className="mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  }[recipe.difficulty];

  return (
    <div className="bg-white">
      {/* Hero Section with Recipe Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{recipe.title}</h1>
            <Badge className="bg-recipe-orange hover:bg-amber-600">{recipe.category}</Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-recipe-orange hover:text-amber-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Recipes
        </Link>

        {/* Recipe Info */}
        <div className="flex flex-wrap gap-6 justify-center mb-8 p-4 bg-recipe-lightGray rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-recipe-orange" />
            <div>
              <p className="text-sm text-gray-500">Prep Time</p>
              <p className="font-medium">{recipe.prepTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-recipe-orange" />
            <div>
              <p className="text-sm text-gray-500">Cook Time</p>
              <p className="font-medium">{recipe.cookTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="h-5 w-5 text-recipe-orange" />
            <div>
              <p className="text-sm text-gray-500">Difficulty</p>
              <p className={`px-2 py-0.5 rounded-full text-xs ${difficultyColor}`}>{recipe.difficulty}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-recipe-orange" />
            <div>
              <p className="text-sm text-gray-500">Servings</p>
              <p className="font-medium">{recipe.servings}</p>
            </div>
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-8">
          {recipe.authorImage && (
            <img 
              src={recipe.authorImage} 
              alt={recipe.authorName} 
              className="w-10 h-10 rounded-full"
            />
          )}
          <div>
            <p className="text-sm text-gray-500">Recipe by</p>
            <p className="font-medium">{recipe.authorName}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">About this Recipe</h2>
          <p className="text-gray-700">{recipe.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ingredients */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-recipe-orange mt-2"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-recipe-orange text-white font-medium text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
