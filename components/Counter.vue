<template>
  <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700">
    <div class="text-5xl font-bold mb-2" :class="`text-${color}-400`">
      {{ displayCount.toLocaleString() }}
    </div>
    <div class="text-gray-400">{{ title }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  count: { type: Number, required: true },
  title: { type: String, required: true },
  color: { type: String, default: 'indigo' }
})
const displayCount = ref(0)

onMounted(() => {
  const duration = 2000
  const steps = 60
  const increment = props.count / steps
  let current = 0
  
  const timer = setInterval(() => {
    current += increment
    if (current >= props.count) {
      displayCount.value = props.count
      clearInterval(timer)
    } else {
      displayCount.value = Math.floor(current)
    }
  }, duration / steps)
})
</script>
