<template>
  <div>Recipe {{ $route.params.id }}</div>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">Recipe1</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 2 } }">Recipe2</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 3 } }">Recipe3</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute();
console.log('🚀 ~ route:', route);

watch(
  () => route.params.id,
  () => console.log('Fetching inside watch'),
  {
    immediate: true,
  },
);
</script>
