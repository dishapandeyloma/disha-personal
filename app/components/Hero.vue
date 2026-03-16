<template>
  <section id="hero" class="hero-section">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="badge-wrapper">
          <span class="hero-badge">Available for Projects</span>
        </div>
        <h1 class="main-title">
          Developer <br />
          <span class="text-gradient">& Designer</span>
        </h1>
        <p class="description">
          I'm <strong>Disha Pandey</strong>, specialized in crafting <span class="highlight">premium</span> digital experiences that merge high-end aesthetics with robust engineering.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn-primary">View Projects</a>
          <a href="#contact" class="btn-secondary">Get in touch</a>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="image-box glass-card">
          <img src="/images/profile.png" alt="Disha Pandey" class="profile-img" />
          <div class="image-overlay"></div>
        </div>
        <div class="floating-chips">
          <div class="chip chip-1 glass-card"><Icon name="logos:vue" /> Vue Expert</div>
          <div class="chip chip-2 glass-card"><Icon name="logos:nodejs-icon" /> Node.js</div>
        </div>
      </div>
    </div>
    
    <div class="scroll-down">
      <span class="scroll-text">Scroll to explore</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })
  
  tl.from('.hero-badge', { opacity: 0, y: 20, delay: 0.5 })
    .from('.main-title', { opacity: 0, y: 40 }, '-=1')
    .from('.description', { opacity: 0, y: 30 }, '-=1')
    .from('.hero-actions', { opacity: 0, y: 30 }, '-=1.1')
    .from('.hero-visual', { opacity: 0, scale: 0.8, rotate: 5 }, '-=1.2')
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0 80px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 6rem;
  align-items: center;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: var(--surface-hover);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  color: var(--primary);
}

.main-title {
  margin-bottom: 2.5rem;
}

.description {
  font-size: 1.4rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 4rem;
  line-height: 1.6;
}

.highlight {
  color: var(--text-primary);
  text-decoration: underline;
  text-decoration-color: var(--primary);
  text-underline-offset: 4px;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

.btn-secondary {
  padding: 1rem 2rem;
  border-radius: 100px;
  font-weight: 700;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-body);
}

.btn-secondary:hover {
  background: var(--surface-hover);
  border-color: var(--primary);
}

.hero-visual {
  position: relative;
}

.image-box {
  position: relative;
  aspect-ratio: 0.9;
  padding: 0;
  overflow: hidden;
  border-radius: var(--radius-2xl);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.2);
  transition: filter 0.5s ease;
}

.image-box:hover .profile-img {
  filter: grayscale(0);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg-color) 0%, transparent 40%);
}

.floating-chips {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.chip {
  position: absolute;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 1rem;
}

.chip-1 { top: 10%; right: -10%; transform: rotate(5deg); }
.chip-2 { bottom: 20%; left: -15%; transform: rotate(-5deg); }

.scroll-down {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.scroll-text {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  opacity: 0.5;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--primary), transparent);
  animation: scrollLine 2s infinite;
}

@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 1024px) {
  .hero-section {
    padding: 100px 0 60px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
  }
  .description {
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-visual {
    max-width: 400px;
    margin: 0 auto;
  }
  .chip-1 { right: -5%; }
  .chip-2 { left: -5%; }
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 80px;
  }
  .main-title {
    font-size: 3.5rem;
  }
  .hero-badge {
    margin-bottom: 1.5rem;
    font-size: 0.75rem;
  }
  .description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  .btn-primary, .btn-secondary {
    width: 100%;
    justify-content: center;
  }
  .chip {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
