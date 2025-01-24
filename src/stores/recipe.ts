import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Recipe {
  id: string;
  name: string;
  description: string;
}

type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);

  const addRecipe = (recipe: NewRecipe) => {
    const newRecipe = { id: Date.now().toString(), ...recipe };
    recipes.value.push(newRecipe);
    return newRecipe;
  };

  const getRecipeById = (id: string) => {
    return recipes.value.find((recipe) => recipe.id === id);
  };

  const editRecipe = (updatedRecipe: Recipe) => {
    const index = recipes.value.findIndex((recipe) => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      recipes.value[index] = updatedRecipe;
    }
  };

  const filteredRecipes = (searchQuery: string) =>
    recipes.value.filter((recipe) => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return { recipes, addRecipe, getRecipeById, filteredRecipes, editRecipe };
});
