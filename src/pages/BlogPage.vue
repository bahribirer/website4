<template>
  <section class="blog-page">
    <!-- 🔹 Hero -->
    <div class="hero">
      <div class="overlay fade-in">
        <h1>Blog</h1>
      </div>
    </div>

    <!-- 🔹 İçerik -->
    <div class="container content">
      <div class="left">
        <h2 class="section-title">Blog Yazılarımız</h2>

        <!-- Blog Kartları -->
        <div class="posts">
          <div
            v-for="(post, i) in posts"
            :key="i"
            class="post-card"
          >
            <div class="date">
              <span class="day">{{ post.dateDay }}</span>
              <span class="month">{{ post.dateMonth }}</span>
            </div>

            <div class="info">
              <h3>{{ post.title }}</h3>
              <p>{{ truncate(post.summary, 250) }}</p>
              <button class="read-btn" @click="openPost(post)">
                Devamını Oku
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
          <h3>Kategoriler</h3>
          <ul>
            <li v-for="(cat, i) in categories" :key="i" @click="goToCategory(cat.slug)">
              {{ cat.name }}
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

const router = useRouter()

interface BlogPost {
  title: string
  summary: string
  fullText: string
  dateDay: string
  dateMonth: string
}

const posts = ref<BlogPost[]>([
  {
    title: 'Emlak Vergisi Rayiç Bedeller Hakkında İptal Davası',
    summary:
      'Türkiye’deki taşınmaz maliklerinin her yıl ödemekle yükümlü olduğu emlak vergisinin hesaplanmasında, taşınmazların emlak rayiç değerleri esas alınmaktadır. Bu değerler, Vergi Usul Kanunu uyarınca takdir komisyonları tarafından belirlenmektedir. 2025 yılında yapılan değerleme çalışmaları ile birlikte bazı bölgelerde %1400’e varan artışlar görülmüştür...',
    fullText: `Türkiye’deki taşınmaz maliklerinin her yıl ödemekle yükümlü olduğu emlak vergisinin hesaplanmasında, taşınmazların emlak rayiç değerleri esas alınmaktadır. Emlak rayiç değerleri ise, 213 sayılı Vergi Usul Kanunu (“VUK”) uyarınca takdir komisyonları tarafından belirlenen gayrimenkul metrekare birim fiyatı üzerinden her dört yılda bir tespit edilmektedir.

Bu kapsamda 2025 yılında yürütülen değerleme çalışmaları da tamamlandı. Takdir komisyonlarının belirlediği arsa ve arazi birim değerleri, ilgililere başvuru üzerine ve ayrıca Muhtarlık ve Belediyelerde ilan edilerek duyurulmaya başladı.

Takdir edilen emlak rayiç değerlerinde ciddi bir artış gözlemlendi. Örneğin İstanbul için %1400’e varan artış oranları söz konusu. Bu durum emlak vergisi yükünün de artması anlamına geliyor. Fakat artışın fahiş olduğunu düşünenler için yeni rayiç değerlere karşı itiraz yolu açık.

İtiraz için vergi mahkemelerinde iptal davası açmak gerekiyor. Şayet dava neticesinde takdir komisyonunun kararı iptal edilirse, karara konu cadde/sokak ya da ilgili bölgede bulunan tüm mükellefler etkilenecek.

Dava açmak için yasal süre kural olarak takdir komisyonu kararının öğrenilme tarihinden itibaren otuz gündür. Öğrenme tarihi ise kararın ilgili belediye veya muhtarlıkta ilan edildiği tarih olarak kabul edilmektedir. Otuz günlük itiraz süresinin son gününün adli tatile -20 Temmuz 2025 ila 31 Ağustos 2025- denk gelmesi halinde 7 Eylül 2025 tarihine kadar dava açmak mümkün olacak. Dolayısıyla, ilgililerin her belediye/muhtarlık özelinde ilan sürecini ayrıca takip etmesinde büyük fayda bulunuyor.

Yeni rayiç değerler 2026 yılı için uygulanacak ve müteakip 2027-2028-2029 yılları için yeniden değerleme oranının yarısı nispetinde artırılacak.`,
    dateDay: '08',
    dateMonth: 'Ekim',
  },
  {
    title: 'Velayeti Elinde Bulundurmayan Eş Aleyhine İştirak Nafakası',
    summary:
      'Evlilik birliğinin sona ermesiyle, velayeti elinde bulundurmayan eşin müşterek çocuğun eğitim, sağlık ve bakım giderlerine katkı sağlaması zorunludur. Bu katkı, iştirak nafakası olarak adlandırılır. Türk Medeni Kanunu’nun 182. maddesi kapsamında hakim, çocuğun menfaati gereği resen de iştirak nafakasına hükmedebilir...',
    fullText: `Evlilik birliğinin boşanma, ayrılık ya da butlanı ile sona ermesiyle müşterek çocuk için velayeti elinde bulundurmayan eş aleyhine, müşterek çocuğun eğitim, sağlık ve bakım giderlerinin karşılanması için iştirak nafakasına hükmolunur.

Anne ve baba, çocuklarının eğitim, sağlık ve bakım ihtiyaçlarını müştereken maddi ve manevi yüklenmek zorundadır. Boşanma davası ile birlikte karı ve koca evlilik birliğini sonlandırırken, müşterek çocuğun bakım, eğitim ve sağlık konularındaki ihtiyaçları bakımından tarafların sorumlulukları devam etmektedir.

Yargıtay kararları uyarınca iştirak nafakası, eğitim giderlerini de kapsamakta olup, ayrıca okul, servis, yemek giderleri gibi yükümlülüklerin ayrı hükme bağlanması usule aykırı kabul edilmektedir.`,
    dateDay: '30',
    dateMonth: 'Eylül',
  },
])

const categories = ref([
  { name: 'Aile Hukuku', slug: 'aile-hukuku' },
  { name: 'Bilişim Hukuku', slug: 'bilisim-hukuku' },
  { name: 'Ceza Hukuku', slug: 'ceza-hukuku' },
  { name: 'Gayrimenkul Hukuku', slug: 'gayrimenkul-hukuku' },
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
  background: url('@/assets/images/banner.webp') center/cover no-repeat;
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
