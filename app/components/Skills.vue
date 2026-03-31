<template>
  <section id="skills" class="section-padding skills-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('skills.titlePrimary') }} <span class="text-gradient">{{ $t('skills.titleSecondary') }}</span></h2>
        <p class="section-desc">{{ $t('skills.subtitle') }}</p>
      </div>
      
      <div class="bento-grid">
        <!-- Main Stack Card -->
        <div class="bento-card main-stack glass-card">
          <div class="card-content">
            <h3>{{ $t('skills.core') }}</h3>
            <div class="tech-icons">
              <Icon v-for="tech in coreTech" :key="tech.icon" :name="tech.icon" size="48" class="tech-icon" />
            </div>
            <p>{{ $t('skills.coreDesc') }}</p>
          </div>
        </div>
 
        <!-- Experience Stat Card -->
        <div class="bento-card stat-card glass-card">
          <div class="stat-content">
            <span class="stat-number">{{ $t('skills.experienceStat') }}</span>
            <span class="stat-label">{{ $t('skills.statLabel') }}</span>
          </div>
        </div>

        <!-- Cloud & DevOps Card -->
        <div class="bento-card tools-card glass-card">
          <h3>{{ $t('skills.tools') }}</h3>
          <div class="tools-list">
            <span v-for="tool in tools" :key="tool" class="tool-tag">{{ tool }}</span>
          </div>
        </div>

        <!-- Quote/Philosophy Card -->
        <div class="bento-card philosophy-card glass-card">
          <p class="philosophy-text">"{{ $t('skills.philosophy') }}"</p>
        </div>

        <!-- Backend Expertise Card -->
        <div class="bento-card backend-card glass-card">
          <h3>{{ $t('skills.backend') }}</h3>
          <div class="backend-content">
            <div class="backend-item">
              <Icon name="ri:server-line" size="24" />
              <span>{{ $t('skills.backendItems.node') }}</span>
            </div>
            <div class="backend-item">
              <Icon name="ri:database-2-line" size="24" />
              <span>{{ $t('skills.backendItems.db') }}</span>
            </div>
            <div class="backend-item">
              <Icon name="ri:bubble-chart-line" size="24" />
              <span>{{ $t('skills.backendItems.microservices') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()

const coreTech = [
  { icon: 'logos:vue', name: 'Vue' },
  { icon: 'logos:nuxt-icon', name: 'Nuxt' },
  { icon: 'logos:react', name: 'React' },
  { icon: 'logos:nextjs-icon', name: 'Next.js' }
]

const tools = ['Git', 'Docker', 'Vite', 'GSAP', 'Tailwind', 'Vercel']

onMounted(() => {
  gsap.from('.section-header > *', {
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    clearProps: 'all'
  })

  gsap.from('.bento-card', {
    scrollTrigger: {
      trigger: '.bento-grid',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    clearProps: 'all'
  })
})
</script>

<style scoped>
.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 5rem;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 1.5rem;
}

.main-stack {
  grid-column: span 2;
  grid-row: span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.tech-icons {
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
  justify-content: center;
}

.tech-icon {
  filter: grayscale(1);
  transition: all 0.4s ease;
}

.bento-card:hover .tech-icon {
  filter: grayscale(0);
  transform: translateY(-5px);
}

.stat-card {
  grid-column: span 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-number {
  display: block;
  font-size: 4rem;
  font-weight: 900;
  color: var(--primary);
  line-height: 1;
}

.stat-label {
  font-family: var(--font-body);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.7;
}

.tools-card {
  grid-column: span 1;
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.tool-tag {
  padding: 0.4rem 1rem;
  background: var(--surface-hover);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
}

.philosophy-card {
  grid-column: span 2;
  display: flex;
  align-items: center;
  padding: clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, var(--surface-color), var(--surface-hover));
}

.philosophy-text {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  font-style: italic;
  opacity: 0.9;
}

.backend-card {
  grid-column: span 2;
}

.backend-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.backend-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.backend-item span {
  color: var(--text-primary);
}

@media (max-width: 1024px) {
  .section-header {
    margin-bottom: 3rem;
  }
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  .main-stack, .stat-card, .tools-card, .philosophy-card, .backend-card {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .section-header {
    margin-bottom: 3rem;
  }
  .stat-number {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
  }
  .philosophy-text {
    font-size: clamp(1.2rem, 4vw, 1.75rem);
  }
  .philosophy-card {
    padding: 2rem;
  }
  .tech-icons {
    gap: 1.25rem;
    flex-wrap: wrap;
  }
  .tech-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .bento-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .main-stack, .stat-card, .tools-card, .philosophy-card, .backend-card {
    grid-column: span 1;
    padding: 1.5rem;
  }
  .philosophy-text {
    font-size: 1.1rem;
  }
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>
