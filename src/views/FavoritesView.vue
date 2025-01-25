<template>
  <div>
    <h1>Favorites Recipes</h1>
    <RecipeList :recipe="store.favoriteRecipes" />
  </div>
</template>

<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe';

const store = useRecipeStore();
</script>
