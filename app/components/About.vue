<template>
  <section id="about" class="section-padding about-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <h2 class="section-title">About <span class="text-gradient">Me</span></h2>
          <p class="lead">
            {{ $t('about.lead') }}
          </p>
          <div class="skills-mini">
            <div v-for="tag in ['fullstack', 'vue', 'node', 'kafka']" :key="tag" class="skill-tag">
              {{ $t('about.tags.' + tag) }}
            </div>
          </div>
          <p class="main-text">
            {{ $t('about.mainText') }}
          </p>
          <div class="stats-grid">
            <div v-for="stat in stats" :key="stat.key" class="stat-card glass-card">
              <span class="stat-num">{{ stat.num }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
        
        <div class="about-visual">
          <div class="visual-container glass-card">
            <div class="experience-badge">
              <span class="years">5</span>
              <span class="text" v-html="$t('about.philosophy.badge')"></span>
            </div>
            <div class="philosophy-box">
              <Icon name="ri:code-s-slash-line" size="40" class="icon" />
              <h3>{{ $t('about.philosophy.title') }}</h3>
              <p>{{ $t('about.philosophy.text') }}</p>
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

const stats = computed(() => [
  { num: '5+', label: t('about.stats.experience'), key: 'exp' },
  { num: '20+', label: t('about.stats.projects'), key: 'proj' },
  { num: '10+', label: t('about.stats.clients'), key: 'client' }
])

onMounted(() => {
  gsap.from('.about-content > *', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    clearProps: 'all'
  })

  gsap.from('.about-visual', {
    scrollTrigger: {
      trigger: '.about-visual',
      start: 'top 80%',
    },
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: 'power2.out',
    clearProps: 'all'
  })
})
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 5rem;
  align-items: center;
}

.lead {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.skills-mini {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.skill-tag {
  padding: 0.5rem 1.25rem;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary);
}

.main-text {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 3.5rem;
  line-height: 1.7;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.stat-card {
  text-align: center;
  padding: 2rem 1.5rem;
}

.stat-num {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  font-weight: 700;
}

.visual-container {
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3rem;
  background: linear-gradient(135deg, var(--surface-color), var(--bg-color));
}

.experience-badge {
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 1.5rem;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 1.5rem;
  text-align: center;
}

.experience-badge .years {
  display: block;
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary);
  line-height: 1;
}

.experience-badge .text {
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--text-secondary);
}

.philosophy-box h3 {
  font-size: 1.75rem;
  margin: 1rem 0;
}

.philosophy-box p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

.icon {
  color: var(--primary);
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 768px) {
  .lead {
    font-size: 1.25rem;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .visual-container {
    height: auto;
    min-height: 400px;
    padding: 2rem;
  }
  .experience-badge {
    top: 1rem;
    right: 1rem;
    padding: 1rem;
  }
  .experience-badge .years {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
