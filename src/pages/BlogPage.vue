<template>
  <section class="blog-page">
    <!-- 🔹 Hero -->
    <div class="hero">
      <div class="overlay fade-in">
        <h1>{{ t('blog.heroTitle') }}</h1>
      </div>
    </div>

    <!-- 🔹 İçerik -->
    <div class="container content">
      <div class="left">
        <h2 class="section-title">{{ t('blog.sectionTitle') }}</h2>

        <!-- YAKINDA GELİYOR BOX -->
        <div class="coming-soon-box">
          <i class="pi pi-clock"></i>
          <h2>{{ t('blog.comingSoonTitle') }}</h2>
          <p>{{ t('blog.comingSoonDesc') }}</p>
        </div>
      </div>

      <!-- 🔹 Sağ Sidebar -->
      <aside class="sidebar">
        <div class="categories">
          <h3>{{ t('blog.categories') }}</h3>
          <ul>
            <li v-for="(cat, i) in categories" :key="i" @click="goToCategory(cat.slug)">
              {{ t(`blog.categoriesList.${cat.slug}`) }}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

/* ----------------------------------------------------------
   KATEGORİLER (Slug bazlı, dil desteği key ile geliyor)
-----------------------------------------------------------*/
const categories = ref([
  { slug: 'ceza' },
  { slug: 'bilişim' },
  { slug: 'aile' },
  { slug: 'ticaret' },
  { slug: 'iş' },
  { slug: 'gayri' },
  { slug: 'miras' },
  { slug: 'idare' },
  { slug: 'saglık' },
  { slug: 'icra' },
  { slug: 'sozlesme' },
  { slug: 'vatan' },
  { slug: 'sigorta' }
])

const goToCategory = (slug: string) => router.push(`/calisma-alanlarimiz/${slug}`)
</script>

<style scoped>
.blog-page {
  background: #fff;
  font-family: 'Poppins', sans-serif;
}

/* Hero */
.hero {
  position: relative;
  height: 45vh;
  background: url('/assets/herosection/blog.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.overlay {
  background: rgba(11, 27, 63, 0.55);
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 1.5s ease;
}
.overlay h1 {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(1.05); }
  to { opacity: 1; transform: scale(1); }
}

/* İçerik */
.container {
  width: 90%;
  max-width: 1300px;
  margin: 3rem auto;
  display: flex;
  gap: 3rem;
}
.left {
  flex: 2;
}
.sidebar {
  flex: 1;
}
.section-title {
  color: #0b1b3f;
  font-size: 1.9rem;
  margin-bottom: 2rem;
  position: relative;
}
.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #b01c1c;
  margin-top: 0.6rem;
}

/* COMING SOON UI */
.coming-soon-box {
  background: #f9fafc;
  border: 1px solid #e5e8ef;
  padding: 3rem 2rem;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 8px 18px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
  animation: fadeIn 1s ease;
}

.coming-soon-box i {
  font-size: 3rem;
  color: #b01c1c;
  margin-bottom: 1rem;
}

.coming-soon-box h2 {
  color: #0b1b3f;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.coming-soon-box p {
  color: #555;
  font-size: 1rem;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

/* Sidebar */
.categories h3 {
  color: #0b1b3f;
  font-size: 1.15rem;
  margin-bottom: 1rem;
}
.categories ul {
  list-style: none;
  padding: 0;
}
.categories li {
  margin-bottom: 0.6rem;
  color: #333;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  padding-left: 0.8rem;
}
.categories li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #b01c1c;
}
.categories li:hover {
  color: #b01c1c;
}

/* Responsive */
@media (max-width: 992px) {
  .container {
    flex-direction: column;
  }
  .section-title {
    text-align: center;
  }
}
</style>
