<template>
  <div class="wrap" :class="{ full: fullWidth }">
    <input
      class="input"
      :class="{ text: variant === 'text' }"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label ? ' ' : ''"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label class="label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number
  fullWidth?: boolean
  label?: string
  variant?: 'default' | 'text'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
</script>

<style src="./Input.css" scoped />
