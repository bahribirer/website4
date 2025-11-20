<template>
  <section v-if="area" class="practice-detail">
    <div class="hero">
      <div class="overlay">
        <h1>{{ area.title }}</h1>
      </div>
    </div>

    <div class="container">
      <nav class="breadcrumb">
        <RouterLink to="/">Ana Sayfa</RouterLink> /
        <RouterLink to="/calisma-alanlarimiz">Çalışma Alanlarımız</RouterLink> /
        <span>{{ area.title }}</span>
      </nav>

      <h2 class="title">{{ area.title }}</h2>
      <p class="desc">{{ area.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { practiceAreas } from '../data/practiceAreas'
import { slugifyTR } from '../utils/slug'

const route = useRoute()
const slug = String(route.params.slug)
const area = practiceAreas.find(a => slugifyTR(a.title) === slug)
</script>

<style scoped>
.practice-detail {
  font-family: 'Poppins', sans-serif;
  background: #fff;
  color: #222;
}

/* === HERO === */
.hero {
  position: relative;
  height: 42vh;
  background: url('@/assets/images/banner.webp') center/cover no-repeat;
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
  letter-spacing: 1px;
  text-align: center;
  font-family: 'Playfair Display', serif;
}

/* === CONTENT === */
.container {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 0 6rem;
  color: #333;
}

/* === BREADCRUMB === */
.breadcrumb {
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 1.4rem;
  display: flex;
  gap: 0.3rem;
  align-items: center;
}

.breadcrumb a {
  color: #0b1b3f;
  text-decoration: none;
  font-weight: 500;
}

.breadcrumb span {
  color: #b01c1c;
  font-weight: 600;
}

/* === TITLE === */
.title {
  font-size: 2.3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #0b1b3f;
  margin-bottom: 0.7rem;
}

/* === DIVIDER === */
.title::after {
  content: "";
  display: block;
  width: 70px;
  height: 3px;
  background: #b01c1c;
  border-radius: 3px;
  margin-top: 0.6rem;
}

/* === DESCRIPTION === */
.desc {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #555;
  margin-top: 1.5rem;
  white-space: pre-line;
  padding-left: 2px;
  border-left: 3px solid rgba(176, 28, 28, 0.15);
  padding-left: 1rem;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .overlay h1 {
    font-size: 2rem;
  }

  .title {
    font-size: 2rem;
  }

  .desc {
    font-size: 1.05rem;
  }
}
</style>

