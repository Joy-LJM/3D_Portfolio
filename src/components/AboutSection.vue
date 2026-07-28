<script setup lang="ts">
import { ref, onMounted } from "vue";

const root = ref<HTMLElement | null>(null);
const visible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) visible.value = true;
    },
    { threshold: 0.15 },
  );
  if (root.value) observer.observe(root.value);
});
</script>

<template>
  <section id="about" class="section" ref="root">
    <span class="section-bg-number" aria-hidden="true">01</span>
    <div class="container">
      <p class="section-label">// about me</p>

      <div
        :class="['about-layout', { 'reveal in': visible, reveal: !visible }]"
      >
        <!-- Image column -->
        <div class="about-portrait">
          <div class="portrait-frame">
            <div class="portrait-inner">
              <img
                src="../img/personal_pic.jpg"
                alt="Portrait of the developer"
                class="portrait-img"
              />
            </div>
          </div>
          <div class="portrait-shadow-frame" aria-hidden="true" />
        </div>

        <!-- Text column -->
        <div class="about-content">
          <h2 class="about-heading">
            Building software that
            <br />
            <em>solves real problems</em>
            <br />for real users.
          </h2>

          <p class="about-body">
            I'm a Software Developer with 3+ years of experience building modern
            web applications using React, TypeScript, JavaScript, Node.js, and
            Express. I've developed enterprise software for global companies
            including HSBC and Lincoln Electric, delivering responsive user
            interfaces, RESTful APIs, and reliable software solutions.
          </p>

          <p class="about-body">
            I enjoy turning complex requirements into clean, maintainable code
            while continuously improving performance, usability, and code
            quality. I'm always looking to learn new technologies and grow as a
            full-stack developer.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-layout {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 80px;
  align-items: start;
  margin-top: 52px;
}

/* ── Portrait ── */
.about-portrait {
  position: relative;
}

.portrait-frame {
  width: 100%;
  aspect-ratio: 3 / 4;
  background: var(--bg-3);
  position: relative;
  overflow: hidden;
}
.portrait-frame::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, var(--accent-dim) 0%, transparent 55%);
}

.portrait-inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.portrait-shadow-frame {
  position: absolute;
  top: 16px;
  left: 16px;
  right: -16px;
  bottom: -16px;
  border: 1px solid var(--border);
  z-index: -1;
}

.portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* ── Content ── */
.about-heading {
  font-family: var(--font-serif);
  font-size: clamp(34px, 3.8vw, 50px);
  font-weight: 300;
  line-height: 1.18;
  letter-spacing: -0.015em;
  margin-bottom: 28px;
}
.about-heading em {
  font-style: italic;
  color: var(--accent);
}

.about-body {
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 300;
  line-height: 1.95;
  color: var(--muted);
  margin-bottom: 20px;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.stat-value {
  font-family: var(--font-serif);
  font-size: 44px;
  font-weight: 300;
  font-style: italic;
  line-height: 1;
}
.stat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (max-width: 900px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .about-portrait {
    max-width: 320px;
  }
}
</style>
