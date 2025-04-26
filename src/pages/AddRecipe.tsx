
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRecipeForm } from '@/hooks/useRecipeForm';
import { RecipeDetails } from '@/components/recipe/RecipeDetails';
import { RecipeIngredients } from '@/components/recipe/RecipeIngredients';
import { RecipeInstructions } from '@/components/recipe/RecipeInstructions';

const AddRecipe = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    title,
    setTitle,
    description,
    setDescription,
    ingredients,
    setIngredients,
    instructions,
    setInstructions,
    validateForm
  } = useRecipeForm();

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const removeIngredient = (index: number) => {
    if (ingredients.length > 1) {
      const newIngredients = [...ingredients];
      newIngredients.splice(index, 1);
      setIngredients(newIngredients);
    }
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const removeInstruction = (index: number) => {
    if (instructions.length > 1) {
      const newInstructions = [...instructions];
      newInstructions.splice(index, 1);
      setInstructions(newInstructions);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    toast({
      title: "Recipe submitted!",
      description: "Your recipe has been successfully submitted.",
    });

    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Share Your Recipe</h1>
            <p className="text-gray-600">Fill out the form below to share your culinary creation with the world.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <RecipeDetails
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
            />

            <RecipeIngredients
              ingredients={ingredients}
              updateIngredient={updateIngredient}
              removeIngredient={removeIngredient}
              addIngredient={addIngredient}
            />

            <RecipeInstructions
              instructions={instructions}
              updateInstruction={updateInstruction}
              removeInstruction={removeInstruction}
              addInstruction={addInstruction}
            />

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-recipe-orange hover:bg-amber-600">
                <Save className="h-4 w-4 mr-2" />
                Submit Recipe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
