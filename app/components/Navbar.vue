<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="nav-content">
      <div class="logo" @click="scrollToTop">
        <span class="logo-text">DISHA</span>
        <span class="logo-dot">.</span>
      </div>

      <div class="nav-links-wrapper">
        <div
          ref="navLinksRef"
          class="nav-links"
          :class="{ active: isMenuOpen }"
        >
          <div ref="navPillRef" class="nav-pill"></div>
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="'#' + link.id"
            :class="{ active: activeSection === link.id }"
            @mouseenter="movePill($event)"
            @mouseleave="resetPill"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </div>
      </div>

      <div class="nav-actions">
        <ThemeToggle />
        <div class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
          <Icon
            :name="isMenuOpen ? 'ri:close-line' : 'ri:menu-3-line'"
            size="28"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const activeSection = ref("hero");
const navLinksRef = ref(null);
const navPillRef = ref(null);

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const movePill = (e) => {
  if (!navPillRef.value || !e.target) return;

  const rect = e.target.getBoundingClientRect();
  const parentRect = navLinksRef.value.getBoundingClientRect();

  gsap.to(navPillRef.value, {
    left: rect.left - parentRect.left,
    width: rect.width,
    opacity: 1,
    duration: 0.4,
    ease: "expo.out",
  });
};

const resetPill = () => {
  const activeLink = navLinksRef.value?.querySelector(".active");
  if (activeLink) {
    const rect = activeLink.getBoundingClientRect();
    const parentRect = navLinksRef.value.getBoundingClientRect();
    gsap.to(navPillRef.value, {
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
      duration: 0.4,
      ease: "expo.out",
    });
  } else {
    gsap.to(navPillRef.value, {
      opacity: 0,
      duration: 0.3,
    });
  }
};

watch(activeSection, () => {
  nextTick(() => {
    resetPill();
  });
});

let scrollTriggers = [];

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Set initial pill position
  setTimeout(() => {
    resetPill();
  }, 100);

  // GSAP ScrollTrigger for Scroll-Spy
  navLinks.forEach((link) => {
    const section = document.getElementById(link.id);
    if (section) {
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 30%",
        end: "bottom 30%",
        onToggle: (self) => {
          if (self.isActive) {
            activeSection.value = link.id;
          }
        },
        onEnter: () => (activeSection.value = link.id),
        onEnterBack: () => (activeSection.value = link.id),
      });
      scrollTriggers.push(st);
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  scrollTriggers.forEach((st) => st.kill());
});
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

nav.scrolled {
  background: hsla(240, 10%, 4%, 0.4);
  backdrop-filter: blur(12px);
}

.light-mode nav.scrolled {
  background: hsla(0, 0%, 98%, 0.4);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--glass-color);
  padding: 1rem 2rem;
  width: 100%;

  backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}

.logo {
  display: flex;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  background: linear-gradient(
    120deg,
    var(--primary),
    var(--secondary),
    var(--primary),
    #a7ff83
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-flow 6s ease infinite;
}

.logo-dot {
  font-size: 1.8rem;
  line-height: 1;
  color: var(--primary);
  text-shadow: 0 0 15px
    hsla(var(--h-primary), var(--s-primary), var(--l-primary), 0.5);
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

.nav-links-wrapper {
  position: relative;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  position: relative;
  padding: 0.25rem;
  background: hsla(0, 0%, 100%, 0.03);
  border-radius: 100px;
  border: 1px solid hsla(0, 0%, 100%, 0.05);
}

.light-mode .nav-links {
  background: hsla(240, 10%, 10%, 0.03);
  border: 1px solid hsla(240, 10%, 10%, 0.05);
}

.nav-pill {
  position: absolute;
  top: 0.25rem;
  bottom: 0.25rem;
  left: 0;
  border-radius: 100px;
  background: var(--primary);
  opacity: 0;
  pointer-events: none;
  z-index: 0;
  box-shadow: 0 4px 15px
    hsla(var(--h-primary), var(--s-primary), var(--l-primary), 0.4);
}

.nav-links a {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  position: relative;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  z-index: 1;
  border-radius: 100px;
}

.nav-links a:hover,
.nav-links a.active {
  color: hsl(240, 10%, 4%);
}

.light-mode .nav-links a:hover,
.light-mode .nav-links a.active {
  color: white;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 10;
  padding-right: 0.5rem;
}

.menu-toggle {
  display: none;
  cursor: pointer;
  color: var(--text-primary);
  transition: transform 0.3s ease;
}

.menu-toggle:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .nav-content {
    padding: 0.75rem 1.5rem;
    border-radius: 0 0 24px 24px;
    margin: 0;
  }

  .nav-links-wrapper {
    display: contents;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: hsla(240, 10%, 4%, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    border: none;
    border-radius: 0;
    padding: 0;
    z-index: 1000;
  }

  .light-mode .nav-links {
    background: hsla(0, 0%, 98%, 0.98);
  }

  .nav-links.active {
    right: 0;
  }

  .nav-pill {
    display: none;
  }

  .nav-links a {
    font-size: 1.75rem;
    font-weight: 700;
    padding: 1rem 2rem;
    color: var(--text-secondary);
  }

  .nav-links a.active {
    color: var(--primary);
  }

  .light-mode .nav-links a.active {
    color: var(--primary);
  }

  .nav-links a:hover {
    background: none;
    transform: none;
  }
}
</style>
