<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
const recipeStore = useRecipeStore();
const searchQuery = ref('');
const filteredRecipes = computed(() => recipeStore.filteredRecipes(searchQuery.value));
</script>

<template>
  <main class="bg-red-500">
    <h1>Home</h1>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Search ..." />
    </div>
    <nav v-if="filteredRecipes.length > 0">
      <ul>
        <li v-for="recipe in filteredRecipes" :key="recipe.id">
          <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">{{
            recipe.name
          }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else>No recipe found!</div>
    <RecipeList :recipe="filteredRecipes" />
  </main>
</template>
