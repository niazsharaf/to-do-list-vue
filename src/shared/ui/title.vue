<template>
  <span class="title--text"> {{ text }} </span>
</template>

<script setup lang="ts">
  defineProps<{ text: string }>()
</script>

<style scoped>
.title--text {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}
</style>