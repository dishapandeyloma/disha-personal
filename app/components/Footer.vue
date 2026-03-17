<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">DP</div>
          <p class="brand-desc">{{ $t('footer.desc') }}</p>
        </div>
        
        <div class="footer-links">
          <div class="link-group">
            <h4>{{ $t('footer.nav') }}</h4>
            <a href="#hero">{{ $t('nav.home') }}</a>
            <a href="#about">{{ $t('nav.about') }}</a>
            <a href="#projects">{{ $t('experience.title') }}</a>
          </div>
          <div class="link-group">
            <h4>{{ $t('footer.connect') }}</h4>
            <a href="https://linkedin.com/in/disha-pandey" target="_blank">{{ $t('contact.methods.linkedin') }}</a>
            <a href="https://github.com/DishaPandey" target="_blank">{{ $t('footer.github') }}</a>
            <a href="https://wa.me/918755269268" target="_blank">{{ $t('contact.methods.whatsapp') }}</a>
            <a href="https://t.me/dishadp" target="_blank">{{ $t('contact.methods.telegram') }}</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} {{ $t('footer.copyrightName') }}. {{ $t('footer.crafted') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
.footer {
  padding: 6rem 0 3rem;
  border-top: 1px solid var(--border-color);
  background: var(--bg-color);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.logo {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 1rem;
}

.brand-desc {
  max-width: 280px;
  color: var(--text-secondary);
}

.footer-links {
  display: flex;
  gap: 4rem;
}

.link-group h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  letter-spacing: 0.1em;
}

.link-group a {
  display: block;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--primary);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
