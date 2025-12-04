<template>
  <section class="practice-page">

    <!-- 🌙 HERO -->
    <div class="hero fade-hero">
      <div class="overlay">
        <h1>{{ t("practicePage.hero") }}</h1>
      </div>
    </div>

    <!-- 🌙 İçerik -->
    <div class="container">
      <div class="head">
        <h3 class="subtitle">{{ t("practicePage.subtitle") }}</h3>
        <h2 class="title">{{ t("practicePage.title") }}</h2>
        <p class="desc">{{ t("practicePage.desc") }}</p>
      </div>

      <!-- 🌙 Grid Kartlar -->
      <div class="grid">
        <div
          v-for="(area, index) in practiceAreas"
          :key="index"
          class="card"
          @click="goDetail(area.key)"
           :data-read="t('practice.readMore')"
        >
          <div class="icon">
            <i class="pi pi-briefcase"></i>
          </div>

          <!-- Başlık -->
          <h3>{{ t(`areas.${area.key}.title`) }}</h3>

          <!-- Açıklama -->
          <p>{{ truncate(t(`areas.${area.key}.desc`), 200) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { practiceAreas } from "../data/practiceAreas"
import { useRouter } from "vue-router"
import { slugifyTR } from "../utils/slug"

const { t } = useI18n()
const router = useRouter()

// Metin kısaltıcı
const truncate = (text: string, length: number) =>
  text.length > length ? text.slice(0, length) + "..." : text

// Detay sayfasına yönlendirme
const goDetail = (key: string) => {
  router.push(`/calisma-alanlarimiz/${key}`)
}


</script>

<style scoped>
.practice-page {
  font-family: 'Poppins', sans-serif;
  background: #fff;
  color: #222;
}

/* === HERO === */
.hero {
  position: relative;
  height: 45vh;
background: url('/assets/herosection/alan.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: rgba(11, 27, 63, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.overlay h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

/* === CONTAINER === */
.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: center;
}

/* === HEAD === */
.head {
  max-width: 850px;
  margin: 0 auto 3.5rem;
}

.subtitle {
  color: #b01c1c;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
  letter-spacing: 1px;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: #0b1b3f;
  margin-bottom: 1.2rem;
}

.title::after {
  content: "";
  display: block;
  width: 75px;
  height: 3px;
  background: linear-gradient(90deg, #b01c1c, #8c1414);
  margin: 0.8rem auto 1.4rem;
  border-radius: 4px;
}

.desc {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* === GRID === */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2.6rem;
  margin-top: 3rem;
}

/* === CARD === */
.card {
  background: #fff;
  padding: 2.4rem 1.9rem 2.3rem;
  border-radius: 14px;
  text-align: left;
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 10px 28px rgba(0,0,0,0.07);
  transition: all 0.35s ease;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background: linear-gradient(90deg,#b01c1c,#7c1515);
  opacity: 0.7;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 16px 38px rgba(0,0,0,0.12);
}

/* Icon */
.icon {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, #b01c1c15, #b01c1c30);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #b01c1c;
  margin-bottom: 1.1rem;
}

/* Card Title */
.card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  color: #0b1b3f;
  font-weight: 700;
  margin-bottom: 0.8rem;
  letter-spacing: 0.3px;
}

/* Text */
.card p {
  font-size: 1rem;
  color: #555;
  line-height: 1.75;
  margin-bottom: 1.3rem;
}

/* Read more area */
.card::after {
  content: attr(data-read);
  position: absolute;
  bottom: 1.3rem;
  left: 1.9rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #b01c1c;
  opacity: 0.85;
  transition: opacity 0.25s ease;
}

.card:hover::after {
  opacity: 1;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .overlay h1 {
    font-size: 2rem;
  }
  .title {
    font-size: 2rem;
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

