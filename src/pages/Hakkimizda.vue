<template>
  <section class="about">

    <!-- 🎯 HERO -->
    <div class="hero fade-hero">
      <div class="overlay">
        <h1>{{ t("about.heroTitle") }}</h1>
        <p>{{ t("about.heroSubtitle") }}</p>
      </div>
    </div>

    <!-- 🎯 BİZ KİMİZ — SOL METİN / SAĞ FOTO -->
    <div class="container about-row">
      <div class="left-text">
        <h2>{{ t("about.whoWeAreTitle") }}</h2>
        <p v-html="t('about.whoWeAreP1')"></p>
        <p v-html="t('about.whoWeAreP3')"></p>
        <p v-html="t('about.whoWeAreP2')"></p>
      </div>

      <div class="right-photo">
        <img src="/assets/hak/ofis3.jpeg" @click="openImage('/assets/hak/ofis3.jpeg')" />
      </div>
    </div>

    <!-- 🎯 KURULUŞ & VİZYON — SOL FOTO / SAĞ METİN -->
    <div class="container about-row reverse">
      <div class="photo-left">
        <img src="/assets/hak/ofis1.jpeg" @click="openImage('/assets/hak/ofis1.jpeg')" />
      </div>

      <div class="text-right">
        <h2>{{ t("about.visionBlockTitle") }}</h2>
        <p v-html="t('about.visionBlockP1')"></p>
        <p v-html="t('about.visionBlockP2')"></p>
      </div>
    </div>

    <!-- MODAL -->
    <div v-if="showModal" class="modal" @click="closeModal">
      <img :src="selectedImage" class="modal-img" />
    </div>

    <!-- 🎯 DEĞERLERİMİZ -->
<!-- 🎯 DEĞERLERİMİZ -->
<div class="values-section">
  <h2 class="values-title">{{ t("about.valuesTitle") }}</h2>

  <div class="values-grid">

    <!-- Row 1 -->
    <div class="value-image">
      <img src="/assets/hak/image1.png" />
    </div>

    <div class="value-box">
      <h3>{{ t("about.value1Title") }}</h3>
      <p>{{ t("about.value1Text") }}</p>
    </div>

    <div class="value-image">
      <img src="/assets/hak/image2.png" />
    </div>

    <!-- Row 2 -->
    <div class="value-box">
      <h3>{{ t("about.value2Title") }}</h3>
      <p>{{ t("about.value2Text") }}</p>
    </div>

    <div class="value-image">
      <img src="/assets/hak/image3.png" />
    </div>

    <div class="value-box">
      <h3>{{ t("about.value3Title") }}</h3>
      <p>{{ t("about.value3Text") }}</p>
    </div>

  </div>
</div>



  </section>
</template>


<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { ref } from "vue"

const { t } = useI18n()

const showModal = ref(false)
const selectedImage = ref("")

const openImage = (img: string) => {
  selectedImage.value = img
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<style scoped>
.about {
  font-family: 'Inter', sans-serif;
  color: #1f1f1f;
}

/* HERO */
.hero {
  height: 45vh;
  background: url('/assets/herosection/image.png') center/cover no-repeat;
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
  justify-content: center;
  text-align: center;
}

.overlay h1 {
  font-size: 2.7rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.4px;
}

.overlay p {
  opacity: 0.9;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.3px;
}

/* --- ABOUT SECTION (foto büyük + metin kompakt) --- */
.about-row {
  margin: 5rem auto;
  width: 90%;
  max-width: 1350px;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 3rem;
  align-items: center;
}

.about-row.reverse {
  grid-template-columns: 0.85fr 1.15fr;
}


/* TEXT BLOKLARINI DAHA TOPARLI HALE GETİRDİM */
.left-text,
.text-right {
  padding: 0.5rem 0 0.5rem 1rem; /* soldan iç boşluk */
}


.left-text h2,
.text-right h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;     /* küçültüldü */
  font-weight: 700;
  color: #0b1b3f;
  margin-bottom: 1.3rem;
  letter-spacing: 0.3px;
  text-align: left;
}

/* YAZILARIN DAĞINIKLIĞINI GİDEREN ASIL KISIM */
.left-text p,
.text-right p {
  font-size: 0.97rem;      /* daha küçük ve kurumsal */
  line-height: 1.6;        /* daha profesyonel ve daha az boşluklu */
  font-weight: 400;
  color: #3c3c3c;
  margin-bottom: 0.85rem;  /* paragraflar arasındaki boşluk azaltıldı */
  letter-spacing: 0.15px;
  text-align: justify;     /* BLOK DÜZENİ TAM PROFESYONEL GÖRÜNÜR */
}

/* FOTOĞRAFLAR */
.right-photo img,
.photo-left img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 16px 32px rgba(0,0,0,0.18);
  cursor: zoom-in;
  transition: transform .25s ease;
}

.right-photo img:hover,
.photo-left img:hover {
  transform: scale(1.02);
}

/* MODAL */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}

.modal-img {
  max-width: 85%;
  max-height: 85vh;
  border-radius: 14px;
}
.values-section {
  width: 90%;
  max-width: 1300px;
  margin: 6rem auto 3rem auto;
}

.values-title {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2.6rem;
  color: #0b1b3f;
  margin-bottom: 3.5rem;
  letter-spacing: 0.7px;
  font-weight: 700;
  position: relative;
  padding: 1.2rem 0;

  /* Arka plan highlight */
  background: linear-gradient(
    to bottom,
    rgba(11, 27, 63, 0) 0%,
    rgba(11, 27, 63, 0.08) 100%
  );
  border-radius: 14px;
}

/* İnce alt çizgi (premium görünüm) */
.values-title::after {
  content: "";
  width: 120px;
  height: 3px;
  background: #0b1b3f;
  display: block;
  margin: 0.8rem auto 0 auto;
  border-radius: 3px;
}


.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

/* VALUE BOX (Metin) */
.value-box {
  background: #fafafa;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.value-box h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #0b1b3f;
  font-family: 'Playfair Display', serif;
}

.value-box p {
  font-size: 0.95rem;
  color: #3c3c3c;
  line-height: 1.6;
}

/* IMAGES */
.value-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 14px 30px rgba(0,0,0,0.15);
}

/* MOBILE */
@media (max-width: 900px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}



/* MOBİL */
@media (max-width: 900px) {
  .about-row,
  .about-row.reverse {
    grid-template-columns: 1fr;
  }
}
</style>


