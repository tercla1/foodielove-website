import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipeCard from '@/components/RecipeCard';
import { getLatestRecipes, getRecipesByCategory } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Appetizers', 'Drinks'];

const Recipes = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (categoryParam === null) {
      setActiveCategory('All');
    }
  }, [categoryParam]);
  
  const allRecipes = getLatestRecipes(100);
  
  const filteredRecipes = allRecipes.filter(recipe => {
    const matchesCategory = activeCategory === 'All' ? true : recipe.category === activeCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && (searchQuery === '' || matchesSearch);
  }).sort((a, b) => {
    if (activeCategory !== 'All') {
      return b.id.localeCompare(a.id);
    }
    return 0;
  });
  
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Explore Recipes</h1>
          <p className="text-gray-600">Discover delicious recipes from our community of food lovers.</p>
        </div>
        
        <div className="mb-8">
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search recipes..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-recipe-orange hover:bg-amber-600" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
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
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No recipes found</h3>
            <p className="text-gray-600 mb-6">Try changing your search or filter criteria.</p>
            <Link to="/add-recipe">
              <Button className="bg-recipe-orange hover:bg-amber-600">
                Share Your Own Recipe
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
