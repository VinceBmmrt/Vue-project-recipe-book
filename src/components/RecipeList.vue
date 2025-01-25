<template>
  <div>
    <nav v-if="recipe.length > 0">
      <ul>
        <li v-for="recipe in recipe" :key="recipe.id">
          <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">{{
            recipe.name
          }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else>No recipe found!</div>
  </div>
</template>

<script lang="ts" setup>
import type { Recipe } from '@/stores/recipe';

defineProps<{
  recipe: Recipe[];
}>();
</script>
