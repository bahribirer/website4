<template>
  <section class="hero">
    
    <video 
      autoplay 
      muted 
      loop 
      playsinline 
      class="bg-video"
    >
      <source src="/videos/peralegal.mp4" type="video/mp4" />
    </video>

    <div class="overlay"></div>

    <div class="content">
      <h1 class="title">{{ t("homeHero.title") }}</h1>
      
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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 🎬 Video tam ekran doldursun */
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;           /* 🔥 Video kırpılmadan ekranı doldurur */
  z-index: 0;
  animation: heroZoomIn 2.8s ease forwards;
  transform-origin: center;
}

/* 🎨 Koyu overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
  animation: fadeOverlay 1.8s ease forwards;
}

/* 🌟 İçerik */
.content {
  position: relative;
  z-index: 2;
  text-align: center;
  opacity: 0;
  animation: fadeUp 1.6s ease forwards;
  animation-delay: 0.4s;

  margin-top: 400px;  /* 🔥 İçeriği aşağı kaydırır */
  margin-right: 800px;
}


/* 🎯 Başlık */
.content h1 {
  color: #fff;
  font-size: 2.4rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
}

/* 🔹 VIDEO ZOOM-IN ANİMASYONU */
@keyframes heroZoomIn {
  0% {
    opacity: 0;
    transform: scale(1.12);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 🔹 Overlay fade animasyonu */
@keyframes fadeOverlay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 🔹 Başlık fade-up animasyonu */
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

/* 📱 Mobil uyum */
@media (max-width: 768px) {
  .hero {
    height: 60vh;
  }

  .content h1 {
    font-size: 1.7rem;
    padding: 0 1rem;
  }
}
</style>
