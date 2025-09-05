<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox-input"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      v-bind="$attrs"
    />
    <span class="checkbox-box">
      <svg v-if="modelValue" class="checkbox-icon" viewBox="0 0 24 24">
        <path fill="none" stroke="white" stroke-width="3" d="M4 12l6 6L20 6" />
      </svg>
    </span>
    <span class="checkbox-label"><slot /></span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-input {
  display: none;
}

.checkbox-box {
  width: 18px;
  height: 18px;
  border: 1px solid #999;
  border-radius: 4px;
  margin-right: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition:
    background 0.2s,
    border-color 0.2s;
}

.checkbox-input:checked + .checkbox-box {
  background: #252525;
  border-color: #252525;
}

.checkbox-icon {
  width: 14px;
  height: 14px;
}

.checkbox-label {
  font-size: 14px;
}
</style>
