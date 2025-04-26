
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChefHat } from 'lucide-react';

interface RecipeDetailsProps {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
}

export const RecipeDetails: React.FC<RecipeDetailsProps> = ({
  title,
  setTitle,
  description,
  setDescription
}) => {
  return (
    <div className="bg-recipe-lightGray p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <ChefHat className="h-5 w-5 text-recipe-orange" />
        Recipe Details
      </h2>

      <div className="space-y-4">
        <div className="grid gap-3">
          <Label htmlFor="title">Recipe Title*</Label>
          <Input
            id="title"
            placeholder="e.g., Classic Chocolate Chip Cookies"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="description">Description*</Label>
          <Textarea
            id="description"
            placeholder="Briefly describe your recipe..."
            rows={3}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-3">
            <Label htmlFor="category">Category*</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="dessert">Dessert</SelectItem>
                <SelectItem value="snack">Snack</SelectItem>
                <SelectItem value="beverage">Beverage</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3">
            <Label htmlFor="difficulty">Difficulty*</Label>
            <Select>
              <SelectTrigger id="difficulty">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="grid gap-3">
            <Label htmlFor="prepTime">Prep Time*</Label>
            <Input id="prepTime" placeholder="e.g., 15 minutes" required />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="cookTime">Cook Time*</Label>
            <Input id="cookTime" placeholder="e.g., 30 minutes" required />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="servings">Servings*</Label>
            <Input id="servings" type="number" min="1" placeholder="e.g., 4" required />
          </div>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="image">Recipe Image URL*</Label>
          <Input id="image" placeholder="Paste the URL of your recipe image" required />
          <p className="text-xs text-gray-500">
            Tip: Use a high-quality image that shows your dish clearly.
          </p>
        </div>
      </div>
    </div>
  );
};
