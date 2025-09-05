<template>
  <div class="app">
    <ToDoList />
  </div>
</template>

<script setup>
import ToDoList from './widgets/to-do/ui/to-do-list.vue'
</script>

<style>
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 600px;
    margin: 40px auto;
    font-family: sans-serif;
  }
</style>
