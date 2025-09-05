<template>
  <li class="to-do--list-item">
    <Checkbox v-model="task.done" />
    <span
      :style="{ textDecoration: task.done ? 'line-through' : 'none' }"
      class="to-do--list-item-text"
    >
      {{ task.text }}
    </span>
    <Button variant="text" @click="onRemove">✕</Button>
  </li>
</template>

<script setup lang="ts">
import type { Task } from '../model/task.types'
import Checkbox from '@/shared/ui/Checkbox.vue'
import Button from '@/shared/ui/Button.vue'

defineProps<{ task: Task; onRemove: () => void }>()
</script>

<style src="./task-item.css" scoped />
