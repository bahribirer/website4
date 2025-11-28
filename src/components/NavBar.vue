<template>
  <header class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <h1>PERA LEGAL<br />& PARTNERS</h1>
      </div>

      <!-- Menü -->
      <nav class="menu">
        <RouterLink to="/" class="menu-item" :class="{ active: isActive('/') }">
          {{ t('navbar.home') }}
        </RouterLink>

        <RouterLink to="/hakkimizda" class="menu-item" :class="{ active: isActive('/hakkimizda') }">
          {{ t('navbar.about') }}
        </RouterLink>

        <RouterLink to="/ekibimiz" class="menu-item" :class="{ active: isActive('/ekibimiz') }">
          {{ t('navbar.team') }}
        </RouterLink>

        <RouterLink to="/calisma-alanlarimiz" class="menu-item" :class="{ active: isActive('/calisma-alanlarimiz') }">
          {{ t('navbar.areas') }}
        </RouterLink>

        <RouterLink to="/kariyer" class="menu-item" :class="{ active: isActive('/kariyer') }">
          {{ t('navbar.career') }}
        </RouterLink>

        <RouterLink to="/blog" class="menu-item" :class="{ active: isActive('/blog') }">
          {{ t('navbar.blog') }}
        </RouterLink>

        <RouterLink to="/iletisim" class="menu-item" :class="{ active: isActive('/iletisim') }">
          {{ t('navbar.contact') }}
        </RouterLink>

        <RouterLink to="/hesaplama-araclari" class="menu-item" :class="{ active: isActive('/hesaplama-araclari') }">
          {{ t('navbar.tools') }}
        </RouterLink>

        <span class="menu-item" @click="showPopup = true">
          {{ t('navbar.etahsilat') }}
        </span>
      </nav>

      <!-- Dil seçici -->
      <div class="lang-switch">
        <span :class="{ active: locale === 'tr' }" @click="changeLang('tr')">TR</span>
        <span :class="{ active: locale === 'en' }" @click="changeLang('en')">EN</span>
      </div>

      <!-- UYAP Butonu -->
      <a
        href="https://vatandas.uyap.gov.tr/main/vatandas/giris.jsp"
        target="_blank"
        rel="noopener noreferrer"
        class="uyap-btn"
      >
        <i class="pi pi-lock"></i>
        {{ t('navbar.uyap') }}
      </a>
    </div>
  </header>

  <!-- Popup Modal -->
  <div v-if="showPopup" class="popup-backdrop" @click.self="showPopup = false">
    <div class="popup">
      <h2>{{ t('popup.title') }}</h2>
      <p>{{ t('popup.desc') }}</p>
      <button class="close-btn" @click="showPopup = false">{{ t('popup.close') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const route = useRoute()
const isActive = (path: string) => route.path === path

const showPopup = ref(false)

const changeLang = (lang: string) => {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>



<style scoped>

/* === POPUP === */
.popup-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.popup {
  background: #fff;
  padding: 2rem 2.5rem;
  border-radius: 14px;
  text-align: center;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 12px 28px rgba(0,0,0,0.2);
}

.popup h2 {
  color: #0b1b3f;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.popup p {
  color: #555;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.close-btn {
  background: #b01c1c;
  color: #fff;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background .2s ease;
}

.close-btn:hover {
  background: #d32626;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #0b1b3f;
  color: #fff;
  z-index: 1000;
  padding: 1rem 0;
  font-family: 'Playfair Display', serif;
}

.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 🔹 Logo */
.logo h1 {
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 🔹 Menü */
.menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.menu-item {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.menu-item:hover {
  opacity: 0.75;
}

.menu-item.active {
  font-weight: 600;
  border-bottom: 2px solid #ffffff;
  padding-bottom: 2px;
}

/* 🔹 UYAP Butonu */
.uyap-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #b01c1c;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s;
  white-space: nowrap;
}

.uyap-btn:hover {
  background: #d32424;
  transform: translateY(-1px);
}

.uyap-btn i {
  font-size: 0.95rem;
}

/* 🔹 Mobil görünüm */
@media (max-width: 992px) {
  .container {
    flex-wrap: wrap; /* ⭐ Elemanlar alta geçsin */
    gap: 0.8rem;
  }

  .logo {
    width: 100%;
    text-align: center;
  }

  .lang-switch {
    order: 2;
  }

  .uyap-btn {
    order: 3;
  }
}

</style>
