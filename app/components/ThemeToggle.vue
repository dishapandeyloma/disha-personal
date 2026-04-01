<template>
  <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle Theme">
    <div class="icon-container">
      <Icon 
        :name="colorMode.preference === 'dark' ? 'ri:moon-clear-line' : 'ri:sun-line'" 
        size="20" 
        class="theme-icon"
      />
    </div>
    <div class="toggle-bg"></div>
  </button>
</template>

<script setup>
import { gsap } from 'gsap'

const colorMode = useColorMode()

const toggleTheme = (event) => {
  const isDark = colorMode.preference === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'
  
  // High-end Transition Animation (Circular Expand)
  if (!document.startViewTransition) {
    colorMode.preference = nextTheme
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )

  const transition = document.startViewTransition(() => {
    colorMode.preference = nextTheme
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`
    ]

    document.documentElement.animate(
      {
        clipPath: isDark ? clipPath.reverse() : clipPath,
      },
      {
        duration: 500,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
      }
    )
  })
}
</script>

<style scoped>
.theme-toggle {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--text-primary);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.theme-toggle:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  background: var(--surface-hover);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.icon-container {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-icon {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.theme-toggle:hover .theme-icon {
  transform: rotate(15deg) scale(1.1);
}
</style>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 9999;
}

.light ::view-transition-old(root) {
  z-index: 9999;
}

.light ::view-transition-new(root) {
  z-index: 1;
}
</style>
