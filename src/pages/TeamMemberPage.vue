<template>
  <section class="member-detail" v-if="member">
    <div class="container">

      <!-- ÜST PROFİL ALANI -->
      <div class="profile-card">
        <img :src="member.image" :alt="member.name" class="photo" />

        <div class="info">
          <h1>{{ member.name }}</h1>
          <h3 class="role">{{ member.title }}</h3>

          <p v-if="member.expertise" class="expertise">
            {{ member.expertise }}
          </p>
        </div>
      </div>

      <!-- ALT DETAY ALANI -->
      <div class="about-card">
        <h2>Hakkında</h2>
        <div class="divider"></div>

        <p class="about-text">
          {{ member.about }}
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { teamMembers } from '../data/team'

const route = useRoute()
const slug = route.params.slug as string
const member = teamMembers.find(m => m.slug === slug)
</script>

<style scoped>
.member-detail {
  padding: 5rem 0;
  background: #f9f9fb;
  font-family: "Poppins", sans-serif;
}

/* Container */
.container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
}

/* Üst Kart */
.profile-card {
  display: flex;
  gap: 2rem;
  background: #fff;
  padding: 2.5rem;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  align-items: center;
  border: 1px solid #eee;
  animation: fadeIn 0.4s ease;
}

.photo {
  width: 170px;
  height: 170px;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.info h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #0b1b3f;
  margin-bottom: 0.4rem;
}

.role {
  font-size: 1.1rem;
  font-weight: 600;
  color: #b01c1c;
  margin-bottom: 0.3rem;
}

.expertise {
  font-size: 0.95rem;
  color: #555;
  margin-top: 0.6rem;
}

/* Hakkında Kartı */
.about-card {
  background: white;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #eee;
}

.about-card h2 {
  font-family: "Playfair Display", serif;
  color: #0b1b3f;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
}

.divider {
  width: 60px;
  height: 3px;
  background: #b01c1c;
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.9;
  color: #444;
  white-space: pre-line;
}

/* Animasyon */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Mobil Uyumu */
@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
    text-align: center;
  }

  .photo {
    width: 150px;
    height: 150px;
  }
}
</style>
