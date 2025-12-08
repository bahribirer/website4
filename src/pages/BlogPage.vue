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

        <!-- Blog Kartları -->
        <div class="posts">
          <div
            v-for="(post, i) in posts"
            :key="i"
            class="post-card"
          >
            <div class="date">
              <span class="day">{{ post.dateDay }}</span>
              <span class="month">{{ t(`blog.months.${post.dateMonth}`) }}</span>
            </div>

            <div class="info">
              <h3>{{ post.title }}</h3>
              <p>{{ truncate(post.summary, 250) }}</p>
              <button class="read-btn" @click="openPost(post)">
                {{ t('blog.readMore') }}
              </button>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div v-if="selectedPost" class="modal-backdrop" @click.self="selectedPost = null">
          <div class="modal">
            <button class="close" @click="selectedPost = null">
              <i class="pi pi-times"></i>
            </button>
            <h2>{{ selectedPost.title }}</h2>
            <div class="divider"></div>
            <p class="full-text">{{ selectedPost.fullText }}</p>
          </div>
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
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

interface BlogPost {
  title: string
  summary: string
  fullText: string
  dateDay: string
  dateMonth: string
}

/* ----------------------------------------------------------
   BLOG POSTLAR (Dil destekli metinler i18n JSON'a taşınabilir)
-----------------------------------------------------------*/
const posts = ref<BlogPost[]>([
  {
    title: 'Emlak Vergisi Rayiç Bedeller Hakkında İptal Davası',
    summary:
      'Türkiye’deki taşınmaz maliklerinin her yıl ödemekle yükümlü olduğu emlak vergisinin hesaplanmasında...',
    fullText: `Türkiye’deki taşınmaz maliklerinin her yıl ödemekle yükümlü olduğu emlak vergisinin...`,
    dateDay: '08',
    dateMonth: 'Ekim', 
  },
  {
    title: 'Velayeti Elinde Bulundurmayan Eş Aleyhine İştirak Nafakası',
    summary:
      'Evlilik birliğinin sona ermesiyle, velayeti elinde bulundurmayan eşin müşterek çocuğun eğitim...',
    fullText: `Evlilik birliğinin boşanma, ayrılık ya da butlanı ile sona ermesiyle müşterek çocuk için...`,
    dateDay: '30',
    dateMonth: 'Eylül',
  },
])

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


const selectedPost = ref<BlogPost | null>(null)
const openPost = (post: BlogPost) => (selectedPost.value = post)
const goToCategory = (slug: string) => router.push(`/calisma-alanlarimiz/${slug}`)

const truncate = (text: string, length: number) =>
  text.length > length ? text.slice(0, length) + '...' : text
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
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
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

/* Blog Kartları */
.post-card {
  display: flex;
  gap: 1.2rem;
  background: #f9fafc;
  padding: 1.6rem;
  border-radius: 10px;
  margin-bottom: 1.8rem;
  border: 1px solid #eee;
  transition: 0.3s ease;
}
.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}
.date {
  background: #b01c1c;
  color: #fff;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  text-align: center;
}
.date .day {
  font-weight: 700;
  font-size: 1.2rem;
}
.date .month {
  font-size: 0.9rem;
}
.info h3 {
  color: #0b1b3f;
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.info p {
  color: #555;
  line-height: 1.7;
  margin-bottom: 1rem;
}
.read-btn {
  background: #b01c1c;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.read-btn:hover {
  background: #8c1414;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 2000;
}
.modal {
  background: #fff;
  border-radius: 12px;
  padding: 2.2rem;
  max-width: 800px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
.modal h2 {
  color: #0b1b3f;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.divider {
  width: 80px;
  height: 3px;
  background: #b01c1c;
  margin: 0 auto 1.5rem;
}
.full-text {
  color: #444;
  font-size: 1rem;
  line-height: 1.8;
  white-space: pre-line;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #666;
}
.close:hover {
  color: #b01c1c;
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
