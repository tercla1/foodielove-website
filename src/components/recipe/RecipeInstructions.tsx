
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';

interface RecipeInstructionsProps {
  instructions: string[];
  updateInstruction: (index: number, value: string) => void;
  removeInstruction: (index: number) => void;
  addInstruction: () => void;
}

export const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({
  instructions,
  updateInstruction,
  removeInstruction,
  addInstruction
}) => {
  return (
    <div className="bg-recipe-lightGray p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold">Instructions</h2>

      <div className="space-y-4">
        {instructions.map((instruction, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 mt-2 rounded-full bg-recipe-orange text-white font-medium text-sm">
              {index + 1}
            </div>
            <Textarea
              value={instruction}
              onChange={(e) => updateInstruction(index, e.target.value)}
              placeholder={`Step ${index + 1}, e.g., Preheat the oven to 350°F...`}
              className="flex-grow"
              required
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeInstruction(index)}
              disabled={instructions.length === 1}
              className="mt-2"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addInstruction}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Step
        </Button>
      </div>
    </div>
  );
};
