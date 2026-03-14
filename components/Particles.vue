<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div
      v-for="n in 30"
      :key="n"
      class="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
      :style="{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }"
    />
  </div>
</template>

<style>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh) translateX(20px);
    opacity: 0;
  }
}
.animate-float {
  animation: float linear infinite;
}
</style>
