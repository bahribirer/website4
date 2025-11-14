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

.hero {
  position: relative;
  height: 40vh;
  background: url('@/assets/images/banner.webp') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: rgba(11, 27, 63, 0.55);
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay h1 {
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
}

.container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 0;
  text-align: left;
}

.breadcrumb {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.4rem;
}

.breadcrumb a {
  color: #0b1b3f;
  text-decoration: none;
}

.title {
  color: #0b1b3f;
  font-size: 1.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.desc {
  color: #444;
  line-height: 1.8;
  font-size: 1rem;
}
</style>
