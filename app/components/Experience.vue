<template>
  <section id="experience" class="section-padding experience-section">
    <div class="container">
      <h2 class="section-title text-center">My <span class="text-gradient">Journey</span></h2>
      
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

const experiences = [
  {
    company: 'LomaTechnology',
    role: 'Frontend Developer',
    period: '2023 - Present',
    logo: 'ri:terminal-window-line',
    tasks: [
      'Designed admin panel of a CMS system.',
      'Worked on HRMS system.',
      'Designed responsive landing page of KK Group.',
      'Worked on responsive development of gaming platform website.',
      'Maintained legacy codebases and implemented enhancements.'
    ]
  },
  {
    company: 'smartData Enterprises Ltd.',
    role: 'Associate Developer',
    period: '2021 - 2023',
    logo: 'ri:code-box-line',
    tasks: [
      'Worked on Trained.ai (AI/ML Response System) using React.js and Redux.',
      'Developed major functionalities for Jikapu.com (E-commerce Platform).',
      'Implemented JWT Authentication, Token, and Auth validation.',
      'Developed number of APIs and integrated with frontend using React Hooks.'
    ]
  },
  {
    company: 'KNKSoftInfotech Pvt Ltd.',
    role: 'Junior Web Developer',
    period: '2020 - 2021',
    logo: 'ri:html5-line',
    tasks: [
      'Worked on car rental project using HTML/CSS, PHP, and MySQL.',
      'Explored MERN stack by doing maintenance work for developed websites.'
    ]
  }
]

onMounted(() => {
  gsap.from('.experience-card', {
    scrollTrigger: {
      trigger: '.experience-list',
      start: 'top 80%',
    },
    opacity: 0,
    x: -30,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
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
  opacity: 0.9;
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
  opacity: 0.85;
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
