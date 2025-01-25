<template>
  <div>
    <nav v-if="recipe.length > 0">
      <ul>
        <li class="mb-2" v-for="recipe in recipe" :key="recipe.id">
          <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }" class="text-amber-600 hover:underline">{{
            recipe.name
          }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else class="text-gray-500">No recipe found!</div>
  </div>
</template>

<script lang="ts" setup>
import type { Recipe } from '@/stores/recipe';

defineProps<{
  recipe: Recipe[];
}>();
</script>
