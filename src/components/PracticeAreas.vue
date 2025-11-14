<template>
  <section class="practice">
    <div class="container">
      <!-- 🔹 Başlık -->
      <div class="head">
        <h3 class="subtitle">Pera Legal & Partners</h3>
        <h2 class="title">Çalışma Alanlarımız</h2>
        <div class="divider"></div>
        <p class="desc">
          Müvekkillerimizin ihtiyaç duyduğu hukuki desteği doğru zamanda, doğru yöntemle ve yüksek standartlarda
          sunabilmek adına deneyimli avukat kadromuzla güvenilir, etkin ve sonuç odaklı çözümler üretiyoruz.
        </p>
      </div>

      <!-- 🔹 Grid Kartlar -->
      <div class="grid">
        <div
          v-for="(item, index) in practiceAreas"
          :key="index"
          class="card"
        >
          <div class="icon-wrapper">
            <i class="pi pi-balance-scale"></i>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <span class="underline"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { practiceAreas } from '../data/practiceAreas'
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

/* 🔹 Başlık alanı */
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
}

/* 🔹 Grid düzeni */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 2.2rem;
  margin-top: 2rem;
}

/* 🔹 Kartlar */
.card {
  background: #fff;
  border-radius: 12px;
  padding: 2.2rem 1.8rem;
  text-align: left;
  color: #222;
  position: relative;
  transition: all 0.35s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid transparent;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
  border-color: rgba(176, 28, 28, 0.15);
}

/* 🔸 Alt bordür animasyonu */
.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: #b01c1c;
  transition: width 0.3s ease;
}
.card:hover .underline {
  width: 100%;
}

/* 🔹 İkon alanı */
.icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(176, 28, 28, 0.1);
  color: #b01c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  transition: all 0.3s ease;
}

.card:hover .icon-wrapper {
  background: #b01c1c;
  color: #fff;
}

/* 🔹 Kart başlık ve metin */
.card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: #0b1b3f;
  line-height: 1.4;
}

.card p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: #444;
  margin: 0;
}

/* 🔹 Responsive */
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
