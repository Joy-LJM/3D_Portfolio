<script setup lang="ts">
import { ref, reactive } from "vue";
import emailjs from "emailjs-com";

const form = reactive({ name: "", email: "", message: "", spamCheck: "" });
const isNameFieldEmpty = ref(false);
const isEmailFieldEmpty = ref(false);
const isMsgFieldEmpty = ref(false);
const sent = ref(false);
const isSending = ref(false);
const sendError = ref("");

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
if (publicKey) {
  emailjs.init(publicKey);
}

const onSubmit = async () => {
  isNameFieldEmpty.value = !form.name;
  isEmailFieldEmpty.value = !form.email;
  isMsgFieldEmpty.value = !form.message;

  if (form.name && form.email && form.message) {
    if (form.spamCheck) {
      return;
    }
    isSending.value = true;
    sendError.value = "";

    if (!serviceId || !templateId || !publicKey) {
      sendError.value = "EmailJS is not configured yet.";
      isSending.value = false;
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey,
      );

      sent.value = true;
    } catch (error) {
      console.error("EmailJS failed", error);
      sendError.value = "Unable to send message right now.";
    } finally {
      isSending.value = false;
    }
  }
};

const socials = [
  { label: "GitHub", handle: "@Joy-LJM", href: "https://github.com/Joy-LJM" },
  {
    label: "LinkedIn",
    handle: "https://www.linkedin.com/in/jiamin-luo/",
    href: "https://linkedin.com",
  },
];
</script>

<template>
  <section id="contact" class="section contact-section">
    <span class="section-bg-number" aria-hidden="true">04</span>
    <div class="container">
      <p class="section-label">// let's talk</p>

      <div class="contact-layout">
        <!-- Left -->
        <div class="contact-left">
          <h2 class="contact-heading">
            Got a project<br />in mind?<br />
            <em>Let's build it.</em>
          </h2>

          <a class="contact-email" href="mailto:joy00ff00@gmail.com">
            joy00ff00@gmail.com
          </a>

          <ul class="contact-socials" role="list">
            <li v-for="s in socials" :key="s.label">
              <a
                :href="s.href"
                class="social-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="social-label">{{ s.label }}</span>
                <span class="social-handle">{{ s.handle }}</span>
                <svg
                  class="social-arrow"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10L10 2M10 2H4M10 2v6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Right: form -->
        <div class="contact-right">
          <form
            v-if="!sent"
            class="contact-form"
            @submit.prevent="onSubmit"
            novalidate
          >
            <div class="field">
              <label for="cf-name">Name</label>
              <input
                id="cf-name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                autocomplete="name"
                required
              />
              <span class="error-msg" v-show="isNameFieldEmpty && !form.name"
                >Name is required.</span
              >
            </div>
            <div class="field">
              <label for="cf-email">Email</label>
              <input
                id="cf-email"
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                autocomplete="email"
                required
              />
              <span class="error-msg" v-show="isEmailFieldEmpty && !form.email"
                >Email is required.</span
              >
            </div>
            <div class="field">
              <label for="cf-message">Message</label>
              <textarea
                id="cf-message"
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project"
                required
              />
              <span class="error-msg" v-show="isMsgFieldEmpty && !form.message"
                >Message is required.</span
              >
            </div>
            <input
              type="hidden"
              name="spam_check"
              autocomplete="off"
              tabindex="-1"
              class="hidden"
              v-model="form.spamCheck"
            />
            <button type="submit" class="form-btn" :disabled="isSending">
              <span v-if="!isSending">Send message</span>
              <span v-else>Sending...</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p class="error-msg" v-if="sendError">{{ sendError }}</p>
          </form>

          <div v-else class="sent-state" role="status">
            <span class="sent-check">✓</span>
            <p class="sent-message">
              Message received. I'll reply within one business day.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-row">
        <span class="footer-copy">© 2026 Joy. All rights reserved.</span>
        <span class="footer-tag">
          <span class="footer-tag-dot" aria-hidden="true" />
          Crafted with passion.
        </span>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact-section {
  padding-bottom: 0;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  margin-top: 52px;
  padding-bottom: 80px;
}

/* ── Left ── */
.contact-heading {
  font-family: var(--font-serif);
  font-size: clamp(38px, 4.2vw, 54px);
  font-weight: 300;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 36px;
}
.contact-heading em {
  font-style: italic;
  color: var(--accent);
}

.contact-email {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: clamp(12px, 1.2vw, 14px);
  letter-spacing: 0.04em;
  color: var(--text);
  text-decoration: none;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--muted);
  margin-bottom: 44px;
  transition:
    border-color 0.3s,
    color 0.3s;
}
.contact-email:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.contact-socials {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.social-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  color: var(--text);
  transition: padding-left 0.3s var(--ease);
}
.contact-socials li:first-child .social-row {
  border-top: 1px solid var(--border);
}
.social-row:hover {
  padding-left: 8px;
}

.social-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  min-width: 68px;
}
.social-handle {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted);
  flex: 1;
}
.social-arrow {
  color: var(--muted);
  opacity: 0;
  transition: opacity 0.3s;
}
.social-row:hover .social-arrow {
  opacity: 1;
}

/* ── Form ── */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.field label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}

.field input,
.field textarea {
  background: var(--bg-2);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 300;
  padding: 14px 16px;
  outline: none;
  resize: none;
  transition: border-color 0.3s;
}
.field input::placeholder,
.field textarea::placeholder {
  color: var(--muted);
}
.field input:focus,
.field textarea:focus {
  border-color: var(--accent);
}
.error-msg {
  color: red;
}
.form-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--bg);
  border: none;
  padding: 15px 32px;
  align-self: flex-start;
  transition:
    background 0.3s,
    transform 0.3s var(--ease);
}
.form-btn:hover {
  background: var(--text);
  transform: translateX(4px);
}

/* Sent state */
.sent-state {
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  border: 1px solid var(--border);
  background: var(--accent-dim);
}
.sent-check {
  font-family: var(--font-mono);
  font-size: 40px;
  color: var(--accent);
}
.sent-message {
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 300;
  line-height: 1.7;
  color: var(--muted);
  text-align: center;
  max-width: 280px;
}
@media( max-width :401px ){
  .contact-right ,.contact-socials{
    width:90%;
  }
}
/* ── Footer ── */
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
}
.footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.footer-copy,
.footer-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--muted);
}
.footer-tag {
  display: flex;
  align-items: center;
  gap: 8px;
}
.footer-tag-dot {
  width: 6px;
  height: 6px;
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
    box-shadow: 0 0 0 6px rgba(123, 47, 190, 0);
  }
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 52px;
  }
  .footer-row {
    flex-direction: column;
    text-align: center;
  }
}
</style>
