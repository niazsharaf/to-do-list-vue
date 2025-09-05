<template>
  <button class="button" :class="variant" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'text' | 'primary'
}>()
</script>

<style scoped>
.button {
  font-family: inherit;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  will-change: hover;
  transition: hover 0.2s ease;
}

.text {
  background: transparent;
  color: #333;
}

.text:hover {
  background: #f5f5f5;
}

.primary {
  background: #252525;
  color: #fff;
}

.primary:hover {
  background: #252525cc;
}
</style>
