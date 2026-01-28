<template>
  <section class="practice">
    <div class="container">
      
      <!-- Başlık Alanı -->
      <div class="head">
        <h3 class="subtitle">{{ t("practice.subtitle") }}</h3>
        <h2 class="title">{{ t("practice.title") }}</h2>
        <div class="divider"></div>
        <p class="desc">{{ t("practice.desc") }}</p>
      </div>

      <!-- Grid Kartlar -->
      <div class="grid">
        <div
          v-for="(item, index) in practiceAreas"
          :key="index"
          class="card"
          @click="goDetail(item.key)"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <div class="icon-wrapper">
            <i class="pi pi-balance-scale"></i>
          </div>

          <h3>{{ t(`areas.${item.key}.title`) }}</h3>

          <p class="excerpt">
            {{ truncate(t(`areas.${item.key}.desc`), 120) }}
          </p>

          <span class="read-more" @click.stop="goDetail(item.key)">
            {{ t("practice.readMore") }}
          </span>

          <span class="underline"></span>
        </div>
      </div>

    </div>
  </section>
</template>


<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { practiceAreas } from "../data/practiceAreas"
import router from "../router"
import { slugifyTR } from "../utils/slug"

const { t } = useI18n()

const truncate = (text: string, length: number) =>
  text.length > length ? text.slice(0, length) + "..." : text

const goDetail = (key: string) => {
  router.push(`/calisma-alanlarimiz/${key}`)
}

</script>


<style scoped>
.practice {
  background: #0b1b3f;
  color: #ffffff;
  padding: 6rem 0 7rem;
  font-family: 'Poppins', sans-serif;
  
  
}

.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
}

/* Başlık alanı */
.head {
  max-width: 800px;
  margin: 0 auto 3.5rem;
}

.subtitle {
  color: #b01c1c;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.4rem;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #fff;
}

.divider {
  width: 80px;
  height: 3px;
  background: #b01c1c;
  margin: 0.6rem auto 1.6rem;
  border-radius: 2px;
}

.desc {
  color: #c9cdd6;
  font-size: 1rem;
  line-height: 1.8;
  margin-top: 0.5rem;
  text-align: justify;
}

/* Grid düzeni */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 2.2rem;
  margin-top: 2rem;
}

/* ------------------------------------------------ */
/* 🔥 PREMIUM KART TASARIMI */
/* ------------------------------------------------ */

/* 🔥 Kart ana yapı */
.card {
  position: relative;
  border-radius: 16px;
  padding: 2.2rem 1.8rem;
  color: #fff;
  overflow: hidden;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Başta foto görünmesin */
  background-image: none;
}

/* 🔥 Fotoğrafa soldan slide-in efekti */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Foto başlangıçta solda görünmez */
  transform: translateX(-100%);
  transition: transform .55s ease-out;

  /* Vue inline style’dan gelen backgroundImage’i burada kullanmak için */
  background-image: inherit;
}

/* Hover — fotoğraf içeri kayar */
.card:hover::before {
  transform: translateX(0);
}

/* 📌 Fotoğraf karanlık filtre */
.card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(5, 14, 32, 0.55);
  z-index: 1;
  transition: background .35s ease;
}

.card:hover::after {
  background: rgba(5, 14, 32, 0.25);
}

/* İçerik üstte kalmalı */
.card > * {
  position: relative;
  z-index: 2;
}

/* 🔥 BAŞTA sadece başlık gözüksün, diğerleri gizli */
.excerpt,
.read-more,
.icon-wrapper {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity .4s ease, transform .4s ease;
  text-align: left;
  
}

/* Hover’da fade-in + yukarı kayma */
.card:hover .excerpt,
.card:hover .read-more,
.card:hover .icon-wrapper {
  opacity: 1;
  transform: translateY(0);
}

/* Başlık her zaman görünsün ama hafif animasyon eklenebilir */
.card h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: .4rem;
  color: #fff;
  line-height: 1.3;
  transition: transform .4s ease;
  
}

/* Hover’da başlık da biraz yükselir */
.card:hover h3 {
  transform: translateY(-4px);
}

/* Alt çizgi */
.underline {
  margin-top: .8rem;
  display: block;
  width: 0;
  height: 3px;
  background: #b01c1c;
  transition: width .3s ease;
}

.card:hover .underline {
  width: 40%;
}


.card:hover .underline {
  width: 40%;
}

/* Responsive */
@media (max-width: 992px) {
  .title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.7rem;
  }
  .desc {
    font-size: 0.95rem;
  }
  .icon-wrapper {
    width: 52px;
    height: 52px;
    font-size: 1.5rem;
  }
}


</style>
