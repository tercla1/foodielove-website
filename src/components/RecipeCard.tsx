
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ChefHat } from 'lucide-react';

export interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  authorName: string;
}

const RecipeCard = ({ id, title, image, prepTime, difficulty, category, authorName }: RecipeCardProps) => {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  }[difficulty];

  return (
    <Link to={`/recipe/${id}`}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge className="bg-recipe-orange hover:bg-amber-600">{category}</Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1 mb-2">{title}</h3>
          
          <div className="flex items-center text-sm text-gray-600 gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{prepTime}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <ChefHat className="h-4 w-4" />
              <span className={`px-2 py-0.5 rounded-full text-xs ${difficultyColor}`}>
                {difficulty}
              </span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 border-t text-xs text-gray-500">
          By {authorName}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;
