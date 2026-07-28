<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const activeId = ref('hero')
const isMobile = ref(false)
const lastScrollY = ref(0)

const links = [
  { id: 'about',    label: 'About'    },
  { id: 'projects', label: 'Projects' },
  { id: 'skills',   label: 'Skills'   },
  { id: 'contact',  label: 'Contact'  },
]

const onScroll = () => {
  const currentScrollY = window.scrollY
  scrolled.value = currentScrollY > 60

  if (window.innerWidth <= 768) {
    if (currentScrollY > lastScrollY.value && currentScrollY > 80) {
      isMobile.value = true
    } else if (currentScrollY < lastScrollY.value) {
      isMobile.value = false
    }
    lastScrollY.value = currentScrollY
  } else {
    isMobile.value = false
  }

  const ids = ['contact', 'skills', 'projects', 'about', 'hero']
  for (const id of ids) {
    const el = document.getElementById(id)
    console.log(window.scrollY, el?.offsetTop)
    if (el && window.scrollY >= el.offsetTop - 180) {
      activeId.value = id
      break
    }
  }
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav :class="['nav', { scrolled, 'mobile-hidden': isMobile }]" role="navigation" aria-label="Main navigation">
    <div class="nav-inner" >
      <button class="nav-brand" @click="scrollTo('hero')" aria-label="Go to top">
        JOY<span class="brand-dot">.</span>
      </button>

      <ul class="nav-links" role="list">
        <li v-for="link in links" :key="link.id">
          <button
            :class="['nav-link', { active: activeId === link.id }]"
            @click="scrollTo(link.id)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <a href="mailto:joy00ff00@gmail.com" class="nav-hire">
        <span>Hire me</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 28px 64px;
  transition: padding 0.4s var(--ease), background 0.4s, border-color 0.4s, transform 0.25s ease;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  padding: 16px 64px;
  background: rgba(253, 240, 247, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-color: var(--border);
}

.nav.mobile-hidden {
  transform: translateY(-100%);
}

.nav-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
}

.nav-brand {
  font-family: var(--font-serif);
  font-size: 20px; font-weight: 600; letter-spacing: 0.12em;
  color: var(--text);
  background: none; border: none;
  transition: color 0.3s;
}
.nav-brand:hover { color: var(--accent); }
.brand-dot { color: var(--accent); }

.nav-links {
  display: flex; gap: 36px; list-style: none;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--muted);
  background: none; border: none;
  position: relative; padding-bottom: 3px;
  transition: color 0.3s;
}
.nav-link::after {
  content: '';
  position: absolute; bottom: 0; left: 0;
  width: 0; height: 1px;
  background: var(--accent);
  transition: width 0.35s var(--ease);
}
.nav-link.active,
.nav-link:hover { color: var(--text); }
.nav-link.active::after,
.nav-link:hover::after { width: 100%; }

.nav-hire {
  font-family: var(--font-mono);
  font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--bg);
  background: var(--text);
  padding: 9px 18px;
  display: flex; align-items: center; gap: 8px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
}
.nav-hire:hover { background: var(--accent); }

@media (max-width: 768px) {
  .nav        { padding: 20px 24px; }
  .nav.scrolled { padding: 14px 24px; }
  .nav-links  { display: none; }
}
</style>
