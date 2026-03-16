<template>
  <div class="cursor-wrapper" v-if="!isTouchDevice">
    <div ref="cursor" class="custom-cursor"></div>
    <div ref="follower" class="cursor-follower"></div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const cursor = ref(null)
const follower = ref(null)
const isTouchDevice = ref(true) // Default to true to avoid flash

const onMouseMove = (e) => {
  const { clientX, clientY } = e
  
  gsap.to(cursor.value, {
    left: clientX,
    top: clientY,
    duration: 0.1,
    ease: 'none'
  })
  
  gsap.to(follower.value, {
    left: clientX,
    top: clientY,
    duration: 0.4,
    ease: 'power2.out'
  })
}

const handleMouseEnter = () => {
  gsap.to(follower.value, { scale: 2, background: 'var(--primary)', opacity: 0.1, duration: 0.3 })
}

const handleMouseLeave = () => {
  gsap.to(follower.value, { scale: 1, background: 'transparent', opacity: 0.3, duration: 0.3 })
}

onMounted(() => {
  // Robust touch device detection
  isTouchDevice.value = window.matchMedia('(pointer: coarse)').matches
  
  if (isTouchDevice.value) return

  window.addEventListener('mousemove', onMouseMove)
  
  setTimeout(() => {
    const interactives = document.querySelectorAll('a, button, .glass-card, .bento-card, .experience-card')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
  }, 1000)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.cursor-wrapper {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 999999;
}

.custom-cursor {
  position: fixed;
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.cursor-follower {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--primary);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
  pointer-events: none;
  transition: background 0.3s ease, transform 0.3s ease;
}
</style>
