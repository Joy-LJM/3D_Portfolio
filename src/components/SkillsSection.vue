<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Skill {
  name: string;
  level: number;
}
interface Group {
  category: string;
  icon: string;
  skills: Skill[];
}

const groups: Group[] = [
  {
    category: "Frontend",
    icon: "⬡",
    skills: [
      { name: "React", level: 94 },
      { name: "Vue", level: 78 },
      { name: "Typescript", level: 85 },
      { name: "Material UI", level: 87 },
      { name: "Webpack", level: 88 },
    ],
  },
  {
    category: "Backend & Database",
    icon: "◈",
    skills: [
      { name: "Node.js / Express", level: 82 },
      { name: "RESTful APIs", level: 90 },
      { name: "MongoDB", level: 78 },
      { name: "MS SQL / Oracle", level: 72 },
    ],
  },
  {
    category: "Testing & DevOps",
    icon: "◇",
    skills: [
      { name: "Jest / RTL", level: 90 },
      { name: "Playwright", level: 80 },
      { name: "Jenkins / Docker", level: 78 },
      { name: "Git / CI-CD", level: 92 },
    ],
  },
];

const root = ref<HTMLElement | null>(null);
const visible = ref(false);
const animated = ref(false);

// when the section is in the viewport,trigger the skill level bar animation
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        setTimeout(() => {
          animated.value = true;
        }, 450);
      }
    },
    { threshold: 0.18 },
  );
  if (root.value) observer.observe(root.value);
});
</script>

<template>
  <section id="skills" class="section" ref="root">
    <span class="section-bg-number" aria-hidden="true">03</span>
    <div class="container">
      <p class="section-label">// expertise</p>

      <div :class="['skills-layout reveal', { in: visible }]">
        <!-- Left: heading -->
        <div class="skills-intro">
          <h2 class="skills-title">Skills &amp;<br /><em>Stack.</em></h2>
        </div>

        <!-- Right: skill bars -->
        <div class="skills-groups">
          <div
            v-for="(g, gi) in groups"
            :key="g.category"
            class="skill-group"
            :style="{ transitionDelay: `${gi * 0.14}s` }"
          >
            <h3 class="group-heading">
              <span class="group-icon" aria-hidden="true">{{ g.icon }}</span>
              {{ g.category }}
            </h3>
            <div class="skill-rows">
              <div
                v-for="(s, si) in g.skills"
                :key="s.name"
                class="skill-row"
                :style="{ transitionDelay: `${gi * 0.14 + si * 0.07}s` }"
              >
                <div class="skill-meta">
                  <span class="skill-name">{{ s.name }}</span>
                  <span class="skill-pct">{{ s.level }}<small>%</small></span>
                </div>
                <div
                  class="skill-track"
                  role="progressbar"
                  :aria-valuenow="s.level"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="skill-fill"
                    :style="{ width: animated ? s.level + '%' : '0%' }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 80px;
  align-items: start;
  margin-top: 52px;
}

.skills-title {
  font-family: var(--font-serif);
  font-size: clamp(40px, 4.5vw, 58px);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}
.skills-title em {
  font-style: italic;
  color: var(--accent);
}

/* Groups */
.skills-groups {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.group-heading {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.group-icon {
  font-size: 14px;
}

.skill-rows {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.skill-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
}
.skill-name {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 400;
}
.skill-pct {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted);
}
.skill-pct small {
  font-size: 10px;
}

.skill-track {
  height: 2px;
  background: var(--border);
  position: relative;
  overflow: visible;
}
.skill-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #d4a8f0);
  transition: width 1.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.skill-fill::after {
  content: "";
  position: absolute;
  right: -1px;
  top: -3px;
  width: 8px;
  height: 8px;
  background: var(--text);
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(123, 47, 190, 0.6);
}

@media (max-width: 900px) {
  .skills-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
</style>
