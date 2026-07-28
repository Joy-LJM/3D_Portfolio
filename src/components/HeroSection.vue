<script setup lang="ts">
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section id="hero" class="hero">
    <!-- Background grid -->
    <div class="hero-grid" aria-hidden="true" />

    <!-- Huge watermark text -->
    <p class="hero-watermark" aria-hidden="true">DEV</p>

    <div class="hero-body container">
      <h1 class="hero-name">
        Hello, I'm
        <br />
        <em>Jiamin Luo.</em>
      </h1>

      <p class="hero-tagline">
        A software developer passionate about building modern 
       applications 
      </p>

      <div class="hero-cta">
        <button class="btn-primary" @click="scrollTo('projects')">
          View my work
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="btn-ghost" @click="scrollTo('contact')">Get in touch</button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-hint" aria-hidden="true">
      <div class="scroll-track">
        <div class="scroll-thumb" />
      </div>
      <span class="scroll-text">SCROLL</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 96px;
}

/* Subtle dot grid */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(123, 47, 190, 0.14) 1px,
    transparent 1px
  );
  background-size: 40px 40px;
  mask-image: radial-gradient(
    ellipse 80% 80% at 50% 50%,
    black 30%,
    transparent 100%
  );
  pointer-events: none;
}

.hero-watermark {
  position: absolute;
  font-family: var(--font-serif);
  font-size: clamp(160px, 28vw, 480px);
  font-weight: 700;
  letter-spacing: -0.06em;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(123, 47, 190, 0.06);
  right: -2vw;
  bottom: -4vw;
  pointer-events: none;
  user-select: none;
}

.hero-body {
  position: relative;
  z-index: 1;
  padding-top: 32px;
  padding-bottom: 80px;
}
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(123, 47, 190, 0.5);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(123, 47, 190, 0);
  }
}

.hero-name {
  font-family: var(--font-serif);
  font-size: clamp(60px, 9.5vw, 132px);
  font-weight: 300;
  line-height: 0.92;
  letter-spacing: -0.025em;
  margin-bottom: 28px;
}
.hero-name em {
  font-style: italic;
  color: var(--accent);
  display: block;
}

.hero-role {
  font-family: var(--font-mono);
  font-size: clamp(14px, 1.8vw, 20px);
  color: var(--muted);
  margin-bottom: 32px;
  min-height: 1.6em;
  display: flex;
  align-items: center;
  gap: 8px;
}
.role-prefix {
  color: var(--accent);
}
.role-typed {
  color: var(--text);
}
.role-caret {
  color: var(--accent);
  animation: blink 0.9s step-end infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.hero-tagline {
  font-family: var(--font-serif);
  font-size: clamp(16px, 1.7vw, 19px);
  font-weight: 300;
  line-height: 1.85;
  color: var(--muted);
  max-width: 520px;
  margin-bottom: 48px;
}

.hero-cta {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.btn-primary {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--bg);
  border: none;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.3s, transform 0.3s var(--ease);
}
.btn-primary:hover {
  background: var(--text);
  transform: translateX(4px);
}

.btn-ghost {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  background: none;
  border: none;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s;
}
.btn-ghost::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
}
.btn-ghost:hover {
  color: var(--text);
}

.tech-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tech-chip {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 5px 12px;
  transition: border-color 0.3s, color 0.3s;
}
.tech-chip:hover {
  border-color: rgba(232, 56, 32, 0.4);
  color: var(--text);
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 44px;
  left: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.scroll-track {
  width: 1px;
  height: 56px;
  background: var(--border);
  position: relative;
  overflow: hidden;
}
.scroll-thumb {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--muted);
  animation: scroll-drop 2s ease-in-out infinite;
}
@keyframes scroll-drop {
  0% {
    top: -100%;
  }
  60% {
    top: 100%;
  }
  61% {
    top: -100%;
  }
  100% {
    top: -100%;
  }
}
.scroll-text {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.3em;
  color: var(--muted);
  writing-mode: vertical-rl;
}

@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
  }
  .scroll-hint {
    left: 24px;
  }
  .hero-name {
    font-size: clamp(52px, 14vw, 80px);
  }
}
</style>
