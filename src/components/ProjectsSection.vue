<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Project {
  num:   string
  title: string
  desc:  string
  stack: string[]
  href:  string
}

const projects: Project[] = [
  {
    num:   '01',
    title: 'Cooper App',
    desc:  'Industrial welding application with welder scan features and robot API integration. Translated Figma designs into responsive Vue interfaces and validated position/weld APIs between software and robot controllers.',
    stack: ['Vue', 'TypeScript', 'fp-ts','Azure DevOps', 'Tailwind CSS'],
    href:  'https://lered.info/m/cobotresources?r=qr',
  },
  {
    num:   '02',
    title: 'MediBridge',
    desc:  'Team capstone project: scalable healthcare frontend with reusable React components, backend service integration, and performance optimization via React Query caching and minimized re-renders.',
    stack: ['React', 'Material UI', 'React Query', 'Node.js', 'MongoDB'],
    href:  'https://medi-bridge-1.vercel.app/',
  },
  {
    num:   '03',
    title: 'SME Financing Guarantee Scheme',
    desc:  'Migrated the SFGS loan platform from Angular to React at HSBC Hang Seng, supporting multiple loan products. Implemented Jenkins CI/CD security scans achieving 100% compliance with internal security standards.',
    stack: ['React', 'Redux Toolkit', 'Material UI', 'Jenkins', 'React-Hook-Form'],
    href:  'https://www.biz-application.hangseng.com/portalserver/en-hk/sfgs',
  },
]

const root    = ref<HTMLElement | null>(null)
const visible = ref(false)
const hovered = ref<number | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.08 }
  )
  if (root.value) observer.observe(root.value)
})
</script>

<template>
  <section id="projects" class="section" ref="root">
    <span class="section-bg-number" aria-hidden="true">03</span>
    <div class="container">
      <p class="section-label">// selected work</p>

      <div class="projects-header">
        <h2 :class="['projects-title reveal', { in: visible }]">
          Things I've<br /><em>built.</em>
        </h2>
      </div>

      <div class="project-list">
        <article
          v-for="(p, i) in projects"
          :key="p.num"
          :class="['project-row reveal', { in: visible, hot: hovered === i }]"
          :style="{ transitionDelay: `${i * 0.09}s` }"
          @mouseenter="hovered = i"
          @mouseleave="hovered = null"
        >
          <div class="pr-left">
            <span class="pr-num">{{ p.num }}</span>
            <div class="pr-info">
              <h3 class="pr-title">{{ p.title }}</h3>
              <p class="pr-desc">{{ p.desc }}</p>
              <ul class="pr-stack" aria-label="Tech stack">
                <li v-for="t in p.stack" :key="t">{{ t }}</li>
              </ul>
            </div>
          </div>
          <div class="pr-right">
            <a :href="p.href" class="pr-arrow" aria-label="View project">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 15L15 3M15 3H7M15 3v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-header {
  display: flex; align-items: flex-end; justify-content: space-between;
  gap: 40px; margin-bottom: 56px;
  flex-wrap: wrap;
}
.projects-title {
  font-family: var(--font-serif);
  font-size: clamp(44px, 6vw, 76px);
  font-weight: 300; line-height: 1.04; letter-spacing: -0.025em;
}
.projects-title em { font-style: italic; color: var(--accent); }

/* ── Rows ── */
.project-list { display: flex; flex-direction: column; }

.project-row {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 40px; padding: 32px 0;
  border-top: 1px solid var(--border);
  transition:
    opacity 0.7s var(--ease),
    transform 0.7s var(--ease),
    border-top-color 0.3s;
}
.project-row:last-child { border-bottom: 1px solid var(--border); }
.project-row.hot { border-top-color: var(--accent); }

.pr-left {
  display: flex; gap: 28px; align-items: flex-start; flex: 1;
}

.pr-num {
  font-family: var(--font-mono);
  font-size: 11px; color: var(--accent);
  padding-top: 4px; min-width: 22px;
}

.pr-type {
  font-family: var(--font-mono);
  font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--muted); display: block; margin-bottom: 8px;
}

.pr-title {
  font-family: var(--font-serif);
  font-size: clamp(22px, 2.4vw, 28px);
  font-weight: 400; letter-spacing: -0.01em;
  margin-bottom: 10px;
  transition: color 0.3s;
}
.project-row.hot .pr-title { color: var(--accent); }

.pr-desc {
  font-family: var(--font-serif);
  font-size: 15px; font-weight: 300; line-height: 1.75;
  color: var(--muted); max-width: 540px;
  margin-bottom: 16px;
}

.pr-stack {
  list-style: none; display: flex; flex-wrap: wrap; gap: 8px;
}
.pr-stack li {
  font-family: var(--font-mono);
  font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 3px 10px;
  transition: border-color 0.3s, color 0.3s;
}
.project-row.hot .pr-stack li {
  border-color: rgba(232,56,32,0.25);
  color: var(--text);
}

.pr-right {
  display: flex; flex-direction: column;
  align-items: flex-end; gap: 16px;
  min-width: 72px; padding-top: 4px;
}

.pr-year {
  font-family: var(--font-mono);
  font-size: 11px; color: var(--muted);
}

.pr-arrow {
  width: 42px; height: 42px;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  color: var(--muted); text-decoration: none;
  transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s;
}
.project-row.hot .pr-arrow {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg);
  transform: rotate(45deg);
}

@media (max-width: 768px) {
  .project-row   { flex-direction: column; gap: 16px; }
  .pr-right      { flex-direction: row; align-items: center; }
  .projects-sub  { text-align: left; max-width: 100%; }
}
</style>
