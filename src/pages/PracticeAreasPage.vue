<template>
  <section class="practice-page">
    <!-- Hero Bölümü -->
    <div class="hero">
      <div class="overlay">
        <h1>Çalışma Alanlarımız</h1>
      </div>
    </div>

    <!-- İçerik -->
    <div class="container">
      <div class="head">
        <h3 class="subtitle">Pera Legal & Partners Hukuk Bürosu</h3>
        <h2 class="title">Çalışma Alanlarımız</h2>
        <p class="desc">
          Müvekkillerimizin talepleri doğrultusunda, konusunda uzman avukatlarımız ile hizmet verdiğimiz başlıca alanlar:
        </p>
      </div>

      <!-- Grid Kartlar -->
      <div class="grid">
        <div
          v-for="(area, index) in practiceAreas"
          :key="index"
          class="card"
          @click="goDetail(area.title)"
        >
          <div class="icon">
            <i class="pi pi-briefcase"></i>
          </div>
          <h3>{{ area.title }}</h3>
          <p>{{ truncate(area.description, 200) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { practiceAreas } from '../data/practiceAreas'
import { useRouter } from 'vue-router'
import { slugifyTR } from '../utils/slug'

const router = useRouter()

// Uzun açıklamaları kısaltmak için
const truncate = (text: string, length: number) =>
  text.length > length ? text.slice(0, length) + '...' : text

// Tıklanınca detay sayfasına yönlendir
const goDetail = (title: string) => {
  const slug = slugifyTR(title)
  router.push(`/calisma-alanlarimiz/${slug}`)
}
</script>

<style scoped>
.practice-page {
  font-family: 'Poppins', sans-serif;
  background: #fff;
  color: #222;
}

/* Hero */
.hero {
  position: relative;
  height: 45vh;
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
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
}

/* İçerik */
.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: center;
}

.head {
  max-width: 800px;
  margin: 0 auto 3rem;
}

.subtitle {
  color: #b01c1c;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}

.title {
  color: #0b1b3f;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.desc {
  color: #555;
  font-size: 1rem;
  line-height: 1.7;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  border: 1px solid #e5e5e5;
  background: #fff;
  padding: 2rem 1.6rem;
  border-radius: 8px;
  text-align: left;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  cursor: pointer;
}

.card:hover {
  border-color: #b01c1c;
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.icon {
  color: #b01c1c;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1b3f;
  margin-bottom: 0.6rem;
}

.card p {
  color: #555;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 768px) {
  .overlay h1 {
    font-size: 1.8rem;
  }
  .title {
    font-size: 1.8rem;
  }
  .desc {
    font-size: 0.95rem;
  }
}
</style>
