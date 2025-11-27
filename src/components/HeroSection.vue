<template>
  <section class="hero">
    <div class="overlay">
      <div class="content">
        <h1>{{ t('homeHero.title') }}</h1>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 85vh;
  background: url('../assets/banner.webp') center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: heroZoomIn 2.8s ease forwards;
  transform-origin: center center;
  overflow: hidden;
}

/* 🔹 Arka planın yavaşça belirmesi ve yakınlaşması */
@keyframes heroZoomIn {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 🔹 Üstte yarı saydam koyu katman */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeOverlay 2s ease forwards;
}

@keyframes fadeOverlay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 🔹 İçerik */
.content {
  position: relative;
  z-index: 2;
  text-align: center;
  animation: fadeUp 1.8s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

/* 🔹 Başlık animasyonu (yukarıdan süzülme) */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.content h1 {
  color: #fff;
  font-size: 2.2rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
}

/* 🔹 Mobil uyum */
@media (max-width: 768px) {
  .hero {
    height: 65vh;
  }

  .content h1 {
    font-size: 1.6rem;
    padding: 0 1rem;
  }
}
</style>
