import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface Recipe {
  id: string;
  name: string;
  description: string;
}

type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);
  const favoritesIds = ref<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favoritesIds.value.includes(id)) {
      favoritesIds.value = favoritesIds.value.filter((recipeId) => recipeId !== id);
    } else {
      favoritesIds.value.push(id);
    }
  };

  const isFavorite = (id: string) => favoritesIds.value.includes(id);

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

  const favoriteRecipes = computed(() =>
    recipes.value.filter((recipe) => favoritesIds.value.includes(recipe.id)),
  );
  return {
    recipes,
    addRecipe,
    getRecipeById,
    filteredRecipes,
    editRecipe,
    favoritesIds,
    toggleFavorite,
    isFavorite,
    favoriteRecipes,
  };
});
