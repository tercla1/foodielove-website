
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';

interface RecipeIngredientsProps {
  ingredients: string[];
  updateIngredient: (index: number, value: string) => void;
  removeIngredient: (index: number) => void;
  addIngredient: () => void;
}

export const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({
  ingredients,
  updateIngredient,
  removeIngredient,
  addIngredient
}) => {
  return (
    <div className="bg-recipe-lightGray p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold">Ingredients</h2>

      <div className="space-y-4">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={ingredient}
              onChange={(e) => updateIngredient(index, e.target.value)}
              placeholder={`Ingredient ${index + 1}, e.g., 2 cups flour`}
              required
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeIngredient(index)}
              disabled={ingredients.length === 1}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addIngredient}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Ingredient
        </Button>
      </div>
    </div>
  );
};
