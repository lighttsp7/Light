:root {
  --bg: #081120;
  --bg-soft: #111b2d;
  --card: rgba(17, 27, 45, 0.9);
  --panel: rgba(19, 32, 52, 0.92);
  --panel-strong: rgba(29, 48, 72, 0.95);
  --border: rgba(171, 198, 255, 0.18);
  --text: #eaf2ff;
  --muted: #b4c0de;
  --accent: #7c9dff;
  --accent-2: #8effd6;
  --gradient: linear-gradient(135deg, #7c9dff, #8ad4ff, #8effd6);
  --shadow: 0 24px 60px rgba(71, 118, 255, 0.22);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 157, 255, 0.28), transparent 32%),
    radial-gradient(circle at bottom right, rgba(142, 255, 214, 0.18), transparent 24%),
    var(--bg);
  color: var(--text);
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

img,
video {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.page-shell {
  padding-bottom: 60px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand-mark {
  width: 30px;
  height: 30px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: var(--gradient);
  color: #090d15;
  box-shadow: var(--shadow);
}

.nav {
  display: inline-flex;
  align-items: center;
  gap: 26px;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--text);
}

.ghost-button,
.secondary-button,
.primary-button {
  border-radius: 14px;
  border: 1px solid var(--border);
  padding: 12px 20px;
  font-weight: 600;
  transition: transform 0.2s ease, border-color 0.2s ease, filter 0.2s ease;
}

.ghost-button,
.secondary-button {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.primary-button {
  background: var(--gradient);
  border: none;
  color: #091521;
  box-shadow: var(--shadow);
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 28px;
  padding: 48px 0 40px;
}

.eyebrow,
.section-tag {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(124, 157, 255, 0.12);
  border: 1px solid rgba(124, 157, 255, 0.24);
  color: #dfe7ff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 18px 0 14px;
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin: 0;
  max-width: 620px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.cta-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 28px;
}

.mini-stats {
  display: flex;
  list-style: none;
  gap: 34px;
  padding: 0;
  margin: 38px 0 0;
  flex-wrap: wrap;
}

.mini-stats li {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mini-stats strong {
  font-size: 1.6rem;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.preview-card,
.generator-card,
.result-card,
.feature-item,
.template-card,
.price-card {
  background: rgba(15, 24, 37, 0.86);
  border: 1px solid var(--border);
  border-radius: 26px;
  box-shadow: var(--shadow);
}

.preview-card {
  padding: 18px;
}

.video-window {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  min-height: 520px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.video-window img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-pill {
  position: absolute;
  left: 24px;
  bottom: 24px;
  background: rgba(9, 13, 21, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 600;
}

.studio {
  padding-top: 18px;
}

.studio-header,
.result-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.studio-header h2,
.section-heading h2 {
  margin: 10px 0 0;
  font-size: clamp(2rem, 4vw, 2.6rem);
  letter-spacing: -0.05em;
}

.badge,
.result-badge {
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(142, 255, 214, 0.25);
  background: rgba(142, 255, 214, 0.08);
  color: #dffef3;
  font-size: 0.8rem;
  font-weight: 700;
}

.generator-card {
  margin-top: 26px;
  padding: 24px;
  display: grid;
  gap: 18px;
}

.field-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--muted);
}

.field.wide {
  grid-column: 1 / -1;
}

.field span {
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

textarea,
select {
  width: 100%;
  background: rgba(5, 10, 18, 0.8);
  border: 1px solid var(--border);
  border-radius: 18px;
  color: var(--text);
  padding: 16px 18px;
  resize: vertical;
}

textarea:focus,
select:focus {
  outline: 2px solid rgba(124, 157, 255, 0.48);
  border-color: rgba(124, 157, 255, 0.6);
}

.style-chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chip {
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 9px 12px;
}

.chip.active {
  background: rgba(124, 157, 255, 0.18);
  color: #f0f5ff;
  border-color: rgba(124, 157, 255, 0.36);
}

.submit-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.large {
  padding-inline: 28px;
}

#statusText {
  color: #c3d1ff;
  font-size: 0.94rem;
}

.result-card {
  margin-top: 30px;
  padding: 22px;
}

.result-preview {
  margin-top: 18px;
  min-height: 280px;
  width: 100%;
  background: rgba(6, 13, 20, 0.9);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  display: grid;
  place-items: center;
}

.placeholder-panel,
.loading-panel {
  display: grid;
  place-items: center;
  text-align: center;
  padding: 24px;
  color: var(--muted);
  gap: 12px;
}

.placeholder-icon {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.7rem;
  font-weight: 700;
  background: rgba(124, 157, 255, 0.18);
  color: #eaf2ff;
}

.spinner {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid rgba(124, 157, 255, 0.2);
  border-top-color: rgba(124, 157, 255, 1);
  animation: spin 0.8s linear infinite;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #000;
}

.features,
.templates,
.pricing {
  padding-top: 92px;
}

.section-heading {
  margin-bottom: 22px;
}

.section-heading.center {
  text-align: center;
}

.feature-grid,
.template-grid,
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.feature-item,
.template-card,
.price-card {
  padding: 24px;
}

.feature-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(124, 157, 255, 0.12);
  margin-bottom: 18px;
  font-size: 1.5rem;
}

.feature-item h3,
.price-card h3 {
  margin: 0 0 10px;
  font-size: 1.35rem;
}

.feature-item p,
.price-card li,
.template-card span {
  color: var(--muted);
  line-height: 1.6;
}

.template-card {
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 180px;
  background:
    linear-gradient(180deg, rgba(16, 26, 36, 0.1), rgba(16, 26, 36, 0.9)),
    url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
}

.template-card strong {
  margin-top: 8px;
  font-size: 1.5rem;
}

.price-card {
  position: relative;
  display: flex;
  flex-direction: column;
}

.price {
  font-size: 2.3rem;
  font-weight: 800;
  letter-spacing: -0.06em;
  margin: 14px 0 18px;
}

.price span {
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 600;
}

.price-card ul {
  margin: 0;
  padding: 0 0 18px;
  list-style: none;
  display: grid;
  gap: 10px;
}

.price-card li::before {
  content: '✓';
  color: var(--accent-2);
  margin-right: 8px;
}

.featured {
  background: linear-gradient(180deg, rgba(39, 62, 104, 0.8), rgba(15, 24, 37, 0.9));
}

.most-popular {
  position: absolute;
  right: 18px;
  top: 18px;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(142, 255, 214, 0.12);
  border: 1px solid rgba(142, 255, 214, 0.2);
  color: #dffef5;
  font-size: 0.72rem;
  font-weight: 700;
}

.full {
  width: 100%;
  margin-top: auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 920px) {
  .hero,
  .feature-grid,
  .pricing-grid,
  .template-grid {
    grid-template-columns: 1fr;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }

  .video-window {
    min-height: 360px;
  }

  .nav {
    display: none;
  }
}

@media (max-width: 560px) {
  .topbar {
    padding-top: 16px;
  }

  .cta-row,
  .submit-row {
    flex-direction: column;
    align-items: stretch;
  }

  .primary-button,
  .secondary-button,
  .ghost-button {
    width: 100%;
  }
}
