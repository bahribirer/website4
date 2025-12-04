<template>
  <section class="team-page">
    <!-- 🔹 HERO -->
    <div class="hero fade-hero">
      <div class="overlay">
        <h1>{{ t("teamPage.hero") }}</h1>
      </div>
    </div>

    <!-- 🔹 İçerik -->
    <div class="container">
      <div class="head">
        <h3 class="subtitle">{{ t("teamPage.subtitle") }}</h3>
        <h2 class="title">{{ t("teamPage.title") }}</h2>
        <div class="divider"></div>
        <p class="desc">{{ t("teamPage.desc") }}</p>
      </div>

      <!-- 🔹 Grid -->
      <div class="grid">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="card"
          @click="goProfile(member.slug)"
        >
          <div class="image-wrapper">
            <img :src="member.image" :alt="t(member.name)" />
          </div>

          <div class="info">
            <h3>{{ t(member.name) }}</h3>
            <p class="title-text">{{ t(member.title) }}</p>

            <p v-if="member.expertise" class="expertise">
              {{ member.expertise }}
            </p>
          </div>

          <p class="about">
            {{ truncate(t(member.about), 120) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { teamMembers } from '../data/team'
import router from '../router'

const { t } = useI18n()

const goProfile = (slug: string) => {
  router.push(`/team/${slug}`)
}

const truncate = (text: string, length: number) =>
  text.length > length ? text.slice(0, length) + '...' : text
</script>


<style scoped>
.team-page {
  background: #ffffff;
  color: #333;
  font-family: 'Poppins', sans-serif;
}

/* === HERO === */
.hero {
  position: relative;
  height: 42vh;
background: url('/assets/herosection/ekip.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: rgba(11, 27, 63, 0.58);
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay h1 {
  font-size: 2.7rem;
  font-weight: 700;
  letter-spacing: .5px;
}

/* === CONTENT === */
.container {
  width: 88%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 0 6rem;
  text-align: center;
}

.head {
  max-width: 750px;
  margin: 0 auto 3.5rem;
}

.subtitle {
  color: #b01c1c;
  font-size: .9rem;
  letter-spacing: 1.5px;
  font-weight: 600;
  text-transform: uppercase;
}

.title {
  font-size: 2.4rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #0b1b3f;
  margin: .4rem 0 .8rem;
}

.divider {
  width: 70px;
  height: 3px;
  background: #b01c1c;
  border-radius: 3px;
  margin: 0.5rem auto 1.7rem;
}

.desc {
  font-size: 1.05rem;
  line-height: 1.9;
  color: #666;
}

/* === GRID === */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 2.4rem;
}

/* === CARD === */
.card {
  background: #fff;
  border-radius: 18px;
  padding: 2.5rem 1.8rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 15px 32px rgba(0, 0, 0, 0.06);
  transition: .3s ease;
  cursor: pointer;
  position: relative;
  text-align: center;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(176, 28, 28, 0.5);
}

/* === PHOTO === */
.image-wrapper {
  width: 140px;
  height: 140px;
  margin: 0 auto 1.4rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(176, 28, 28, 0.25);
  transition: all .3s ease;
}

.card:hover .image-wrapper {
  border-color: #b01c1c;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s ease;
}

.card:hover img {
  transform: scale(1.07);
}

/* === TEXTS === */
.info h3 {
  font-size: 1.25rem;
  color: #0b1b3f;
  font-weight: 600;
  margin-bottom: .35rem;
}

.title-text {
  font-size: .98rem;
  color: #b01c1c;
  font-weight: 600;
}

.expertise {
  font-size: .95rem;
  margin-top: .2rem;
  color: #666;
}

.about {
  font-size: .92rem;
  color: #777;
  line-height: 1.7;
  margin-top: 1rem;
}

/* === MODAL === */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal {
  background: #fff;
  border-radius: 18px;
  padding: 3rem 2rem 2rem;
  max-width: 640px;
  width: 100%;
  text-align: center;
  animation: fadeIn .3s ease;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
}

.modal-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1.2rem;
  object-fit: cover;
  border: 3px solid rgba(176, 28, 28, 0.3);
}

.modal h3 {
  font-size: 1.5rem;
  color: #0b1b3f;
  font-weight: 700;
}

.modal .title-text {
  font-size: 1rem;
  margin-bottom: .4rem;
}

.about-full {
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  margin-top: 1.2rem;
}

.close {
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 1.4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #777;
  transition: .2s;
}

.close:hover {
  color: #b01c1c;
}

/* === ANIMATION === */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .overlay h1 { font-size: 2rem; }
  .title { font-size: 2rem; }
  .card { padding: 2rem 1.4rem; }
  .image-wrapper { width: 120px; height: 120px; }
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

