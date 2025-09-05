<template>
  <section class="to-do--container">
    <Title text="Список дел" />
    <AddTaskForm />

    <transition-group name="fade" tag="ul" class="to-do--list">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        :onRemove="() => remove(task.id)"
      />
    </transition-group>
  </section>
</template>

<script setup lang="ts">
import { useTasks } from '@/entities/task/model/useTasks'
import AddTaskForm from '@/features/add-task/ui/add-task-form.vue'
import TaskItem from '@/entities/task/ui/task-item.vue'
import Title from '@/shared/ui/title.vue'

const { tasks, remove } = useTasks()
</script>

<style src="./to-do-list.css" scoped />
