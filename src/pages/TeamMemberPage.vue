<template>
  <section class="member-detail" v-if="member">
    <div class="container">

      <!-- ÜST PROFİL -->
      <div class="profile-card">
        <img :src="member.image" :alt="t(member.name)" class="photo" />

        <div class="info">
          <h1>{{ t(member.name) }}</h1>
          <h3 class="role">{{ t(member.title) }}</h3>

          <p v-if="member.expertise" class="expertise">
            {{ member.expertise }}
          </p>
        </div>
      </div>

      <!-- ALT DETAY -->
      <div class="about-card">
        <h2>{{ t('teamPage.aboutTitle') }}</h2>
        <div class="divider"></div>

        <p class="about-text">
          {{ t(member.about) }}
        </p>
      </div>

    </div>
  </section>

  <!-- Eğer slug hatalıysa -->
  <section v-else class="not-found">
    <p>Aradığınız kişi bulunamadı.</p>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { teamMembers } from '../data/team'

const { t } = useI18n()
const route = useRoute()

// URL slug
const slug = route.params.slug as string

// teamMembers içinden eşleşen kişi
const member = teamMembers.find(m => m.slug === slug) || null
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
}

/* Animasyon */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Mobil */
@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>
