<template>
  <footer class="footer">
    <div class="container grid">
      <!-- Sol: Logo & Hakkında -->
      <div class="about">
        <h2 class="brand">PERA LEGAL<br />& PARTNERS</h2>
        <p class="info">
          {{ t('footer.aboutText') }}
        </p>

        <div class="social">
          <a
            href="https://x.com/peralegal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <i class="pi pi-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/peralegalpartners/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i class="pi pi-instagram"></i>
          </a>
        </div>
      </div>

      <!-- Orta: Menü -->
      <div class="links">
        <h3>{{ t('footer.menusTitle') }}</h3>
        <ul>
          <li><RouterLink to="/">{{ t('footer.menuHome') }}</RouterLink></li>
          <li><RouterLink to="/ekibimiz">{{ t('footer.menuTeam') }}</RouterLink></li>
          <li><RouterLink to="/calisma-alanlarimiz">{{ t('footer.menuPractice') }}</RouterLink></li>
          <li><RouterLink to="/kariyer">{{ t('footer.menuCareer') }}</RouterLink></li>
          <li><RouterLink to="/blog">{{ t('footer.menuBlog') }}</RouterLink></li>
          <li><RouterLink to="/iletisim">{{ t('footer.menuContact') }}</RouterLink></li>
        </ul>
      </div>

      <!-- Çalışma Saatleri -->
      <div class="hours">
        <h3>{{ t('footer.hoursTitle') }}</h3>
        <ul>
          <li>{{ t('footer.mon') }}</li>
          <li>{{ t('footer.tue') }}</li>
          <li>{{ t('footer.wed') }}</li>
          <li>{{ t('footer.thu') }}</li>
          <li>{{ t('footer.fri') }}</li>
        </ul>
      </div>

      <!-- İletişim -->
      <div class="contact">
        <h3>{{ t('footer.contactTitle') }}</h3>
        <ul>
          <li><i class="pi pi-phone"></i> {{ t('footer.phone') }}</li>
          <li><i class="pi pi-envelope"></i> {{ t('footer.email') }}</li>
          <li><i class="pi pi-globe"></i> {{ t('footer.web') }}</li>
          <li>
  <i class="pi pi-map-marker"></i>
  <span v-html="t('footer.address')"></span>
</li>

        </ul>
      </div>
    </div>

    <!-- Alt Kısım -->
    <div class="bottom">
      <p>{{ t('footer.copy') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.footer {
  background: #0b1b3f;
  color: #f2f5fa;
  font-family: 'Poppins', sans-serif;
  padding: 4rem 0 1.5rem;
  font-size: 0.95rem;
}

.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
}

/* Sol Kısım */
.brand {
  color: #fff;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  letter-spacing: 0.5px;
}
.info {
  color: #cdd3de;
  line-height: 1.7;
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
}
.social {
  display: flex;
  gap: 0.8rem;
}
.social a {
  background: #fff;
  color: #0b1b3f;
  width: 36px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.social a:hover {
  background: #b01c1c;
  color: #fff;
}

/* Orta ve Sağ Kolonlar */
h3 {
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 1rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  color: #d7dce3;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
ul li i {
  margin-right: 0.6rem;
  color: #b01c1c;
}
a {
  color: #d7dce3;
  text-decoration: none;
  transition: 0.3s;
}
a:hover {
  color: #b01c1c;
}

/* Alt Bilgi */
.bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 3rem;
  padding-top: 1.2rem;
}
.bottom p {
  color: #aeb6c5;
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    text-align: left;
  }
  .brand {
    text-align: left;
  }
}
</style>
