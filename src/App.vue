<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'

const cursorX = ref(0)
const cursorY = ref(0)
const cursorLarge = ref(false)

const onMouseMove = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

const onMouseOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  cursorLarge.value = !!(target.closest('a, button, [data-cursor-large]'))
}
</script>

<template>
  <div class="portfolio" @mousemove="onMouseMove" @mouseover="onMouseOver">
    <div
      class="cursor"
      :class="{ large: cursorLarge }"
      :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    />
    <div class="grain" aria-hidden="true" />
    <NavBar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

<style>
/* ─── Reset ─────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ─── Design tokens ─────────────────────────────────── */
:root {
  --bg:          #FDF0F7;
  --bg-2:        #F5E4F0;
  --bg-3:        #EDCFE6;
  --text:        #1A0828;
  --muted:       #0f0317;
  --accent:      #7B2FBE;
  --accent-dim:  rgba(123, 47, 190, 0.10);
  --border:      rgba(123, 47, 190, 0.13);
  --font-serif:  'Cormorant Garamond', Georgia, serif;
  --font-mono:   'Fira Code', 'Courier New', monospace;
  --ease:        cubic-bezier(0.16, 1, 0.3, 1);
}

/* ─── Base ───────────────────────────────────────────── */
html  { scroll-behavior: smooth; cursor: none; }
body  {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-serif);
  font-size: 18px;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
a, button { cursor: none; }
::selection { background: var(--accent); color: var(--bg); }

/* ─── Custom cursor ──────────────────────────────────── */
.cursor {
  position: fixed;
  top: 0; left: 0;
  width: 10px; height: 10px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  translate: -50% -50%;
  transition: width 0.18s var(--ease), height 0.18s var(--ease), opacity 0.18s;
}
.cursor.large { width: 36px; height: 36px; opacity: 0.35; }

/* ─── Film grain overlay ─────────────────────────────── */
.grain {
  position: fixed; inset: -50%;
  width: 200%; height: 200%;
  pointer-events: none;
  z-index: 998;
  opacity: 0.025;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  animation: grain 0.4s steps(2) infinite;
}
@keyframes grain {
  0%   { transform: translate(0, 0) }
  25%  { transform: translate(-3%, 2%) }
  50%  { transform: translate(2%, -3%) }
  75%  { transform: translate(-2%, -2%) }
  100% { transform: translate(3%, 3%) }
}

/* ─── Layout utilities ───────────────────────────────── */
.section    { padding-top: 50px; position: relative; }
.container  { max-width: 1200px; margin: 0 auto; padding: 0 64px; }

.section-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.section-bg-number {
  position: absolute;
  font-family: var(--font-serif);
  font-size: clamp(110px, 17vw, 220px);
  font-weight: 700;
  color: rgba(123, 47, 190, 0.055);
  line-height: 1;
  pointer-events: none;
  user-select: none;
  top: 32px; right: 48px;
  letter-spacing: -0.04em;
}

/* ─── Scroll-reveal ──────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.85s var(--ease), transform 0.85s var(--ease);
}
.reveal.in { opacity: 1; transform: translateY(0); }

@media (max-width: 768px) {
  .container { padding: 0 24px; }
  .section   { padding-top: 80px; }
}
</style>
