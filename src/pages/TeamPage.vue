<template>
  <section class="team-page">
    <!-- 🔹 HERO -->
    <div class="hero">
      <div class="overlay">
        <h1>Ekibimiz</h1>
      </div>
    </div>

    <!-- 🔹 İçerik -->
    <div class="container">
      <div class="head">
        <h3 class="subtitle">Pera Legal & Partners</h3>
        <h2 class="title">Uzman Kadromuz</h2>
        <div class="divider"></div>
        <p class="desc">
          Alanında uzman, deneyimli ve çözüm odaklı avukatlarımız ile hukukun her alanında müvekkillerimize etkin,
          güvenilir ve profesyonel destek sunuyoruz.
        </p>
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
            <img :src="member.image" :alt="member.name" />
          </div>
          <div class="info">
            <h3>{{ member.name }}</h3>
            <p class="title-text">{{ member.title }}</p>
            <p class="expertise">{{ member.expertise }}</p>
          </div>
          <p class="about">{{ truncate(member.about, 120) }}</p>
        </div>
      </div>

      <!-- 🔹 Modal -->
      <div v-if="selectedMember" class="modal-backdrop" @click.self="selectedMember = null">
        <div class="modal">
          <button class="close" @click="selectedMember = null">
            <i class="pi pi-times"></i>
          </button>
          <img :src="selectedMember.image" :alt="selectedMember.name" class="modal-img" />
          <h3>{{ selectedMember.name }}</h3>
          <p class="title-text">{{ selectedMember.title }}</p>
          <p class="expertise">{{ selectedMember.expertise }}</p>
          <div class="divider small"></div>
          <p class="about-full">{{ selectedMember.about }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { teamMembers } from '../data/team'
import type { TeamMember } from '../data/team'
import router from '../router'

const goProfile = (slug: string) => {
  router.push(`/team/${slug}`)
}

const selectedMember = ref<TeamMember | null>(null)
const openMember = (member: TeamMember) => (selectedMember.value = member)
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
  height: 45vh;
  background: url('@/assets/images/banner.webp') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: rgba(11, 27, 63, 0.55);
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay h1 {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
}

/* === BAŞLIK === */
.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 0 6rem;
}

.head {
  max-width: 800px;
  margin: 0 auto 3.5rem;
}

.subtitle {
  color: #b01c1c;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.4rem;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 600;
  color: #0b1b3f;
  margin-bottom: 0.6rem;
}

.divider {
  width: 70px;
  height: 3px;
  background: #b01c1c;
  border-radius: 2px;
  margin: 0.5rem auto 1.6rem;
}

.desc {
  color: #555;
  font-size: 1rem;
  line-height: 1.8;
}

/* === GRID === */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 2.2rem;
}

/* === KART === */
.card {
  background: #fff;
  border-radius: 12px;
  padding: 2.2rem 1.6rem 1.8rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  border-color: rgba(176, 28, 28, 0.2);
}

/* === Görsel === */
.image-wrapper {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #b01c1c20;
  transition: all 0.3s ease;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card:hover .image-wrapper img {
  transform: scale(1.06);
  border-color: #b01c1c;
}

/* === Bilgi Alanı === */
.info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #0b1b3f;
  margin-bottom: 0.3rem;
}

.title-text {
  font-size: 0.9rem;
  color: #b01c1c;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.expertise {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.7rem;
}

.about {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
}

/* === MODAL === */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal {
  background: #fff;
  border-radius: 12px;
  max-width: 620px;
  width: 100%;
  padding: 3rem 2rem 2rem;
  text-align: center;
  position: relative;
  animation: fadeIn 0.3s ease;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.modal-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #b01c1c30;
}

.modal h3 {
  font-size: 1.4rem;
  color: #0b1b3f;
  margin-bottom: 0.3rem;
}

.modal .title-text {
  color: #b01c1c;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.modal .expertise {
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.divider.small {
  width: 50px;
  height: 3px;
  background: #b01c1c;
  border-radius: 2px;
  margin: 0.6rem auto 1.3rem;
}

.about-full {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.8;
}

.close {
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #999;
  transition: color 0.2s;
}

.close:hover {
  color: #b01c1c;
}

/* === Animasyon === */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* === Responsive === */
@media (max-width: 768px) {
  .overlay h1 {
    font-size: 1.9rem;
  }
  .title {
    font-size: 1.9rem;
  }
  .card {
    padding: 2rem 1.4rem;
  }
}
</style>
