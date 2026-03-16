<template>
  <div class="app-wrapper">
    <div class="noise-overlay"></div>
    <div class="bg-glow glow-1"></div>
    <div class="bg-glow glow-2"></div>
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <CustomCursor />
  </div>
</template>

<script setup>
// Global scripts or layouts initialization
</script>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
