
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { containsProfanity } from '@/utils/profanityFilter';

export const useRecipeForm = () => {
  const { toast } = useToast();
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [instructions, setInstructions] = useState<string[]>(['']);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const validateContent = (content: string): boolean => {
    if (containsProfanity(content)) {
      toast({
        title: "Inappropriate Content Detected",
        description: "Please remove any inappropriate language from your recipe.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const validateForm = (): boolean => {
    if (!validateContent(title) || !validateContent(description)) {
      return false;
    }

    for (const ingredient of ingredients) {
      if (!validateContent(ingredient)) {
        return false;
      }
    }

    for (const instruction of instructions) {
      if (!validateContent(instruction)) {
        return false;
      }
    }

    return true;
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    ingredients,
    setIngredients,
    instructions,
    setInstructions,
    validateForm
  };
};
