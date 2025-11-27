<template>
  <section class="about">

    <!-- 🎯 HERO -->
    <div class="hero fade-hero">
      <div class="overlay">
        <h1>{{ t("about.heroTitle") }}</h1>
        <p>{{ t("about.heroSubtitle") }}</p>
      </div>
    </div>

    <!-- 🎯 BİZ KİMİZ – SOL METİN + SAĞ FOTOĞRAF KOLAJI -->
    <div class="container about-section">
      
      <div class="text-block">
        <div class="text-card">
          <span class="accent-bar"></span>
          <h2 class="title">{{ t("about.whoWeAreTitle") }}</h2>

          <p>{{ t("about.whoWeAreP1") }}</p>
          <p>{{ t("about.whoWeAreP2") }}</p>
        </div>
      </div>

      <!-- PREMIUM FOTO KOLAJ -->
      <div class="photo-collage">
        <div class="big-image" :style="{ backgroundImage: `url(${h1})` }"></div>

        <div class="small-images">
          <div class="img" :style="{ backgroundImage: `url(${h2})` }"></div>
          <div class="img" :style="{ backgroundImage: `url(${h3})` }"></div>
          <div class="img" :style="{ backgroundImage: `url(${h4})` }"></div>
        </div>
      </div>

    </div>

    <!-- 🎯 MİSYON & VİZYON -->
    <div class="mv-wrapper">
      <div class="mv-box">
        <h3>{{ t("about.missionTitle") }}</h3>
        <p>{{ t("about.missionText") }}</p>
      </div>

      <div class="mv-box">
        <h3>{{ t("about.visionTitle") }}</h3>
        <p>{{ t("about.visionText") }}</p>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import h1 from '../assets/hak/h1.webp'
import h2 from '../assets/hak/h2.jpg'
import h3 from '../assets/hak/h3.jpg'
import h4 from '../assets/hak/h4.jpg'

const { t } = useI18n()
</script>


<style scoped>
.about {
  font-family: 'Poppins', sans-serif;
  color: #333;
}

/* HERO --------------------------------------------------*/
.hero {
  position: relative;
  height: 45vh;
  background: url('/src/assets/herosection/hakkımızda.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay {
  background: rgba(11, 27, 63, 0.65);
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}
.overlay h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
}
.overlay p {
  opacity: 0.9;
  font-size: 1.1rem;
}

/* --------------------------------------------------------- */
/* ABOUT SECTION – Premium Alignment */
/* --------------------------------------------------------- */

/* --------------------------------------------------------- */
/* ABOUT SECTION – Premium Alignment */
/* --------------------------------------------------------- */

.about-section {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr; /* ⭐ Daha dengeli genişlik */
  gap: 3rem;
  align-items: center;
}

/* TEXT BLOCK */
.text-block {
  display: flex;
  justify-content: flex-start; /* Artık merkeze değil */
}

.text-card {
  position: relative;
  background: linear-gradient(145deg, #ffffff, #f6f7fb);
  padding: 3rem 3rem 3rem 3.5rem; /* ⭐ Daha ferah padding */
  border-radius: 18px;
  max-width: 620px;
  margin-left: 2rem; /* ⭐ Soldan nefes payı */
  box-shadow: 0 14px 30px rgba(0,0,0,0.09);
  border: 1px solid #e6e6e6;
}

/* Sol accent bar */
.accent-bar {
  position: absolute;
  left: -1px; /* ⭐ Kartın biraz dışından başlasın */
  top: 20px;
  height: calc(100% - 40px);
  width: 6px;
  background: #b01c1c;
  border-radius: 10px;
}

/* Başlık */
.text-card .title {
  font-size: 2.4rem;
  font-family: 'Playfair Display', serif;
  color: #0b1b3f;
  margin-bottom: 1.4rem;
}

/* Paragraflar */
.text-card p {
  color: #444;
  font-size: 1.12rem;
  line-height: 1.9;
  margin-bottom: 1.4rem;
}


/* PHOTO COLLAGE ------------------------------ */

.photo-collage {
  display: grid;
  grid-template-rows: 300px 150px;
  gap: 1.2rem;
}

.big-image {
  border-radius: 14px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 22px rgba(0,0,0,0.15);
}

.small-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.small-images .img {
  height: 150px;
  border-radius: 14px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  transition: transform .25s;
}
.small-images .img:hover {
  transform: scale(1.04);
}

/* --------------------------------------------------------- */
/* MISYON VIZYON */
/* --------------------------------------------------------- */

.mv-wrapper {
  margin: 5rem auto;
  width: 90%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  gap: 2rem;
}

.mv-box {
  background: #f6f8fc;
  padding: 2.2rem;
  border-radius: 16px;
  box-shadow: 0 8px 22px rgba(0,0,0,0.06);
  text-align: center;
  transition: transform .3s ease;
}
.mv-box:hover {
  transform: translateY(-5px);
}

.mv-box h3 {
  font-family: 'Playfair Display', serif;
  color: #b01c1c;
  font-size: 1.6rem;
  margin-bottom: .7rem;
}
.mv-box p {
  color: #555;
  line-height: 1.75;
}

/* Responsive */
@media (max-width: 850px) {
  .about-section {
    grid-template-columns: 1fr;
  }
  .photo-collage {
    grid-template-rows: 250px 130px;
  }
}
/* --------------------------------------------------------- */
/* TEXT BLOCK PREMIUM CARD */
/* --------------------------------------------------------- */

.text-block {
  display: flex;
  justify-content: center;
}

.text-card {
  position: relative;
  background: linear-gradient(145deg, #ffffff, #f6f7fb);
  padding: 2.5rem 2.8rem;
  border-radius: 16px;
  max-width: 600px;
  box-shadow: 0 10px 26px rgba(0,0,0,0.08);
  border: 1px solid #e8e8e8;
}

/* Sol ince accent bar */
.accent-bar {
  position: absolute;
  left: 0;
  top: 16px;
  height: calc(100% - 32px);
  width: 5px;
  background: #b01c1c;
  border-radius: 6px;
}

/* Başlık */
.text-card .title {
  font-size: 2.2rem;
  font-family: 'Playfair Display', serif;
  color: #0b1b3f;
  margin-bottom: 1.2rem;
  padding-left: 0.5rem;
}

/* Paragraflar */
.text-card p {
  color: #555;
  font-size: 1.05rem;
  line-height: 1.85;
  margin-bottom: 1.2rem;
  padding-left: 0.5rem;
}
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

