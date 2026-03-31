<template>
  <section id="experience" class="section-padding experience-section">
    <div class="container">
      <h2 class="section-title text-center">
        {{ $t('experience.titlePrimary') }}
        <span class="text-gradient">{{ $t('experience.titleSecondary') }}</span>
      </h2>
      
      <div class="experience-list">
        <div v-for="(job, index) in experiences" :key="index" class="experience-card glass-card">
          <div class="card-header">
            <div class="role-group">
              <span class="period">{{ job.period }}</span>
              <h3 class="role">{{ job.role }}</h3>
              <h4 class="company">{{ job.company }}</h4>
            </div>
            <div class="company-logo" v-if="job.logo">
              <Icon :name="job.logo" size="48" />
            </div>
          </div>
          <ul class="responsibilities">
            <li v-for="(task, tIndex) in job.tasks" :key="tIndex">{{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t, tm, rt } = useI18n()

const experiences = computed(() => [
  {
    company: 'LomaTechnology',
    role: t('experience.jobs.lomatechnology.role'),
    period: '2023 - ' + t('experience.present'),
    logo: 'ri:terminal-window-line',
    tasks: tm('experience.jobs.lomatechnology.tasks').map(task => rt(task))
  },
  {
    company: 'smartData Enterprises Ltd.',
    role: t('experience.jobs.smartdata.role'),
    period: '2021 - 2023',
    logo: 'ri:code-box-line',
    tasks: tm('experience.jobs.smartdata.tasks').map(task => rt(task))
  },
  {
    company: 'KNKSoftInfotech Pvt Ltd.',
    role: t('experience.jobs.knksoft.role'),
    period: '2020 - 2021',
    logo: 'ri:html5-line',
    tasks: tm('experience.jobs.knksoft.tasks').map(task => rt(task))
  }
])

onMounted(() => {
  gsap.from('.section-title', {
    scrollTrigger: {
      trigger: '.experience-section',
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: 'power3.out',
    clearProps: 'all'
  })

  gsap.fromTo('.experience-card', 
    { opacity: 0, x: -30 },
    {
      scrollTrigger: {
        trigger: '.experience-list',
        start: 'top 85%',
      },
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'all' // Clear GSAP styles after animation
    }
  )
})
</script>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.experience-card {
  position: relative;
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.period {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 0.5rem;
}

.role {
  font-size: 2rem;
  margin-bottom: 0.25rem;
}

.company {
  color: var(--primary);
  opacity: 1;
  font-weight: 700;
}

.company-logo {
  opacity: 0.2;
  transition: opacity 0.3s ease;
}

.experience-card:hover .company-logo {
  opacity: 1;
  color: var(--primary);
}

.responsibilities {
  list-style: none;
}

.responsibilities li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-primary);
  opacity: 1; /* Fully visible */
  margin-bottom: 0.75rem;
  font-size: 1.05rem;
}

.responsibilities li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75rem;
  width: 8px;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
}

@media (max-width: 768px) {
  .role {
    font-size: 1.5rem;
  }
  .card-header {
    flex-direction: column;
    gap: 1rem;
  }
  .company-logo {
    display: none;
  }
  .experience-card {
    padding: 1.5rem;
  }
  .responsibilities li {
    font-size: 0.95rem;
  }
}
</style>
