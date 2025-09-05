<template>
  <div class="to-do--action">
    <Input full-width v-model="text" @keyup.enter="submit" label="Мне нужно сделать" />
    <Button variant="primary" @click="submit">Добавить</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTasks } from '@/entities/task/model/useTasks'
import Input from '@/shared/ui/input/input.vue'
import Button from '@/shared/ui/button.vue'

const { add } = useTasks()
const text = ref('')

function submit() {
  if (!text.value.trim()) return
  add(text.value)
  text.value = ''
}
</script>

<style src="./add-task-form.css" scoped />
