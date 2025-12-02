<template>
  <section class="contact-page">
    <!-- HERO -->
    <div class="hero fade-hero">
      <div class="overlay">
        <h1>{{ t("contact.hero") }}</h1>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="container">
      <div class="head">
        <h3 class="subtitle">{{ t("contact.subtitle") }}</h3>
        <h2 class="title">{{ t("contact.title") }}</h2>
        <p class="desc">{{ t("contact.desc") }}</p>
      </div>

      <!-- Cards -->
      <div class="grid">
        <div class="card">
          <i class="pi pi-map-marker"></i>
          <h3>{{ t("contact.addressTitle") }}</h3>
          <p v-html="t('contact.address')"></p>
        </div>

        <div class="card">
          <i class="pi pi-phone"></i>
          <h3>{{ t("contact.phoneTitle") }}</h3>
          <p>{{ t("contact.phone") }}</p>
        </div>

        <div class="card">
          <i class="pi pi-envelope"></i>
          <h3>{{ t("contact.emailTitle") }}</h3>
          <p>{{ t("contact.email") }}</p>
        </div>

        <div class="card">
          <i class="pi pi-clock"></i>
          <h3>{{ t("contact.hoursTitle") }}</h3>
          <p v-html="t('contact.hours')"></p>
        </div>
      </div>

      <!-- Map -->
      <div class="map">
        <iframe
          src="https://www.google.com/maps?q=Pera%20Legal%20%26%20Partners%2C%20Beyo%C4%9Flu%2F%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="380"
          style="border:0;"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>


<style scoped>
.contact-page {
  font-family: 'Poppins', sans-serif;
  color: #222;
  background: #fff;
}

/* HERO */
.hero {
  position: relative;
  height: 45vh;
background: url('/src/assets/herosection/iletisim.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay {
  background: rgba(11, 27, 63, 0.6);
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay h1 {
  font-size: 2.4rem;
  font-weight: 600;
}

/* CONTENT */
.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: center;
}

.subtitle {
  color: #b01c1c;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
}

.title {
  color: #0b1b3f;
  font-size: 2.2rem;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.desc {
  color: #555;
  line-height: 1.7;
  font-size: 1rem;
  max-width: 850px;
  margin: 0 auto 3rem;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}
.card {
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  background: #fff;
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-5px);
}
.card i {
  color: #b01c1c;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}
.card h3 {
  color: #0b1b3f;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}
.card p {
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* MAP */
.map iframe {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .overlay h1 {
    font-size: 1.8rem;
  }
}

/* --- Hakkımızda Hero Fade Animasyonu (Blog ile aynı) --- */
.fade-hero {
  animation: fadeHero 1.5s ease;
}

@keyframes fadeHero {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
