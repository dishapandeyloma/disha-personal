<template>
  <Transition name="fade-slide">
    <div 
      v-if="show" 
      class="scroll-to-top-container md:hidden fixed bottom-8 right-6 z-[100]"
    >
      <button
        class="glass-button"
        @click="scrollToTop"
        aria-label="Scroll to top"
      >
        <Icon
          name="ri:arrow-up-s-line"
          size="28"
        />
      </button>
    </div>
  </Transition>
</template>

<script setup>
const { $lenis } = useNuxtApp()
const show = ref(false)

const handleScroll = () => {
    // Show only on mobile (width < 768px) and when scrolled > 300px
    if (window.innerWidth < 768) {
        show.value = window.scrollY > 300
    } else {
        show.value = false
    }
}

const scrollToTop = () => {
    if ($lenis) {
        $lenis.scrollTo(0)
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
})
</script>

<style scoped>
.glass-button {
  background: var(--surface-color);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 0;
}

.glass-button:hover {
  background: var(--surface-hover);
  border-color: var(--primary);
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  color: var(--primary);
}

.glass-button:active {
  transform: translateY(-2px) scale(0.95);
}

/* Transition animations matching the premium feel of the site */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.8) rotate(10deg);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.8) rotate(-10deg);
}
</style>
