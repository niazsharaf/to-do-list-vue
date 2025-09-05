import { ref, watch } from 'vue'
import { STORAGE_KEY } from '@/shared/constants'

export interface Task {
  id: number
  text: string
  done: boolean
}

const saved = localStorage.getItem(STORAGE_KEY)
const initial: Task[] = saved ? JSON.parse(saved) : []

const tasks = ref<Task[]>(initial)

watch(
  tasks,
  (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  },
  { deep: true }
)

export function useTasks() {
  function add(text: string) {
    tasks.value.unshift({ id: Date.now(), text, done: false })
  }

  function remove(id: number) {
    tasks.value = tasks.value.filter((t) => t.id !== id)
  }

  return { tasks, add, remove }
}
