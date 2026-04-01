<template>
  <Transition name="fade-scale-slide">
    <div 
      v-if="show && !isMenuOpen" 
      class="scroll-to-top-container fixed bottom-6 right-6 z-[90]"
    >
      <button
        class="progress-ring-btn group"
        @click="scrollToTop"
        aria-label="Scroll to top"
      >
        <!-- Background Glow -->
        <div class="glow-bg group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- SVG Progress Ring -->
        <svg
          class="progress-ring"
          width="60"
          height="60"
          viewBox="0 0 60 60"
        >
          <circle
            class="progress-ring__bg"
            cx="30"
            cy="30"
            r="26"
            fill="transparent"
            stroke-width="2"
          />
          <circle
            class="progress-ring__circle transition-all duration-150 ease-out"
            cx="30"
            cy="30"
            r="26"
            fill="transparent"
            stroke-width="2"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="strokeDashoffset"
          />
        </svg>

        <!-- Inner Content -->
        <div class="inner-circle">
          <Icon
            name="ri:arrow-up-line"
            size="24"
            class="arrow-icon group-hover:-translate-y-1 transition-transform duration-300"
          />
        </div>
      </button>
    </div>
  </Transition>
</template>

<script setup>
const { $lenis } = useNuxtApp()
const show = ref(false)
const scrollProgress = ref(0)
const isMenuOpen = useState('isMenuOpen', () => false)

// SVG Circle radius is 26
const radius = 26
const circumference = 2 * Math.PI * radius

const strokeDashoffset = computed(() => {
    return circumference - (scrollProgress.value / 100) * circumference
})

const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    
    // Calculate progress percentage
    if (height > 0) {
        scrollProgress.value = (winScroll / height) * 100
    } else {
        scrollProgress.value = 0
    }

    // Show button after 300px
    show.value = winScroll > 300
}

const scrollToTop = () => {
    if ($lenis) {
        $lenis.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial check
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
})
</script>

<style scoped>
.scroll-to-top-container {
  will-change: transform, opacity;
}

.progress-ring-btn {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  outline: none;
}

.glow-bg {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--primary);
  filter: blur(15px);
  opacity: 0;
  z-index: -1;
}

.progress-ring {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg); /* Start from top */
  pointer-events: none;
}

.progress-ring__bg {
  stroke: var(--border-color);
}

.progress-ring__circle {
  stroke: var(--primary);
  stroke-linecap: round;
}

.inner-circle {
  position: relative;
  width: 46px;
  height: 46px;
  background: var(--surface-color);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}

.progress-ring-btn:hover .inner-circle {
  background: var(--surface-hover);
  border-color: var(--primary);
  color: var(--primary);
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.progress-ring-btn:active .inner-circle {
  transform: scale(0.95);
}

/* Entering and leaving animations */
.fade-scale-slide-enter-active,
.fade-scale-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-scale-slide-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.6) rotate(-15deg);
}

.fade-scale-slide-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.6) rotate(15deg);
}

@media (max-width: 768px) {
  .progress-ring-btn {
    width: 50px;
    height: 50px;
  }
  .progress-ring {
    width: 50px;
    height: 50px;
    viewBox: 0 0 50 50; /* Needs SVG attributes adjusting if fully dynamic but css scale is easier */
    transform: scale(0.833) rotate(-90deg);
    transform-origin: center;
  }
  .inner-circle {
    width: 38px;
    height: 38px;
  }
  .scroll-to-top-container {
    bottom: 20px;
    right: 20px;
  }
}
</style>
