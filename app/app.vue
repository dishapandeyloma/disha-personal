<template>
  <UApp>
    <div class="app-wrapper">
      <div class="noise-overlay"></div>
      <div class="bg-glow glow-1"></div>
      <div class="bg-glow glow-2"></div>
      
      <UMain>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UMain>

      <CustomCursor />
    </div>
  </UApp>
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
