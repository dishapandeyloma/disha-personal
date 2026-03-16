<template>
  <section id="contact" class="contact-section">
    <div class="background-blobs">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>

    <div class="container relative">
      <div class="section-header">
        <h2 class="section-title">Let's Connect</h2>
        <p class="section-desc">
          Interested in working together or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div class="contact-grid">
        <div class="contact-methods-grid">
          <a v-for="method in contactMethods" 
             :key="method.name" 
             :href="method.link" 
             target="_blank"
             class="method-card glass-card"
             :style="{ '--accent-color': method.color, '--accent-color-rgb': method.colorRgb }">
            <div class="method-icon-wrapper">
              <Icon :name="method.icon" size="28" />
            </div>
            <div class="method-info">
              <span class="method-label">{{ method.name }}</span>
              <span class="method-value">{{ method.value }}</span>
            </div>
            <div class="method-arrow">
              <Icon name="ri:arrow-right-up-line" size="20" />
            </div>
          </a>
        </div>

        <div class="contact-form-container glass-card">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-header">
              <h3>Send a Message</h3>
              <p>I'll get back to you within 24 hours.</p>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name</label>
                <div class="input-wrapper">
                  <Icon name="ri:user-3-line" class="input-icon" />
                  <input id="name" v-model="form.name" type="text" placeholder="Your Name" required />
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <div class="input-wrapper">
                  <Icon name="ri:mail-line" class="input-icon" />
                  <input id="email" v-model="form.email" type="email" placeholder="Your Email" required />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <div class="input-wrapper">
                <Icon name="ri:chat-3-line" class="input-icon textarea-icon" />
                <textarea id="message" v-model="form.message" rows="4" placeholder="How can I help you?" required></textarea>
              </div>
            </div>
            <button type="submit" class="submit-btn" :disabled="isSending">
              <span class="btn-content" v-if="!isSending">
                Send Message
                <Icon name="ri:send-plane-fill" />
              </span>
              <span class="btn-content" v-else>
                Sending...
                <Icon name="ri:loader-4-line" class="spin" />
              </span>
              <div class="btn-glow"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
const isSending = ref(false)

const form = ref({
  name: '',
  email: '',
  message: ''
})

const contactMethods = [
  {
    name: 'Email',
    value: 'disha4037@gmail.com',
    icon: 'ri:mail-send-line',
    link: 'mailto:disha4037@gmail.com',
    color: '#ea4335',
    colorRgb: '234, 67, 53'
  },
  {
    name: 'WhatsApp',
    value: '+91 87552 69268',
    icon: 'ri:whatsapp-line',
    link: 'https://wa.me/918755269268',
    color: '#25d366',
    colorRgb: '37, 211, 102'
  },
  {
    name: 'Telegram',
    value: '@dishadp',
    icon: 'ri:telegram-line',
    link: 'https://t.me/dishadp',
    color: '#0088cc',
    colorRgb: '0, 136, 204'
  },
  {
    name: 'LinkedIn',
    value: 'disha-pandey',
    icon: 'ri:linkedin-box-line',
    link: 'https://www.linkedin.com/in/disha-pandey-117717152/',
    color: '#0077b5',
    colorRgb: '0, 119, 181'
  }
]

const handleSubmit = async () => {
  isSending.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form submitted:', form.value)
    alert('Thank you for your message! I will get back to you soon.')
    form.value = { name: '', email: '', message: '' }
  } finally {
    isSending.value = false
  }
}

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 70%',
    }
  })

  tl.from('.section-header > *', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })
  .from('.method-card', {
    opacity: 0,
    x: -30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.contact-form-container', {
    opacity: 0,
    x: 30,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')

  // Background blobs animation
  gsap.to('.blob-1', {
    x: '30vw',
    y: '20vh',
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  gsap.to('.blob-2', {
    x: '-20vw',
    y: '-10vh',
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 2
  })
})
</script>

<style scoped>
.contact-section {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
  background: var(--bg-color);
}

.background-blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  filter: blur(80px);
  opacity: 0.15;
}

.blob {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
}

.blob-1 {
  background: var(--primary);
  top: -100px;
  left: -100px;
}

.blob-2 {
  background: #6366f1;
  bottom: -100px;
  right: -100px;
}

.relative {
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.section-desc {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: start;
}

.contact-methods-grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.method-card {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  text-decoration: none;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.method-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.method-card:hover {
  transform: translateX(10px) scale(1.02);
  border-color: var(--accent-color);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
}

.method-card:hover::before {
  transform: translateX(100%);
}

.method-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  margin-right: 1.5rem;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.method-card:hover .method-icon-wrapper {
  background: var(--accent-color);
  color: white;
  transform: rotate(10deg);
}

.method-info {
  flex: 1;
}

.method-label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
}

.method-value {
  font-size: 1.15rem;
  color: var(--text-primary);
  font-weight: 700;
}

.method-arrow {
  color: var(--text-secondary);
  opacity: 0.3;
  transition: all 0.3s ease;
}

.method-card:hover .method-arrow {
  opacity: 1;
  color: var(--accent-color);
  transform: translate(3px, -3px);
}

.contact-form-container {
  padding: 3rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-header {
  margin-bottom: 2.5rem;
}

.form-header h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.form-header p {
  color: var(--text-secondary);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  padding-left: 0.5rem;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  opacity: 0.5;
  transition: all 0.3s ease;
}

.textarea-icon {
  top: 1.25rem;
  transform: none;
}

.input-wrapper input,
.input-wrapper textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1.25rem 3.5rem;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-wrapper textarea {
  resize: none;
}

.input-wrapper input:focus,
.input-wrapper textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
}

.input-wrapper input:focus + .input-icon,
.input-wrapper textarea:focus + .input-icon {
  color: var(--primary);
  opacity: 1;
}

.submit-btn {
  position: relative;
  width: 100%;
  padding: 1.25rem;
  border-radius: 16px;
  border: none;
  background: var(--primary);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.btn-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140%;
  height: 0;
  padding-bottom: 140%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s ease-out;
  pointer-events: none;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -5px rgba(var(--primary-rgb), 0.4);
}

.submit-btn:hover .btn-glow {
  transform: translate(-50%, -50%) scale(1);
}

.submit-btn:active {
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contact-form-container {
    padding: 2rem 1.5rem;
  }
  
  .method-card {
    padding: 1.25rem;
  }
  
  .method-icon-wrapper {
    width: 48px;
    height: 48px;
    margin-right: 1rem;
  }
}
</style>

