<template>
  <header class="navbar">
    <div class="navbar-inner">
      <!-- Logo -->
      <div class="logo">
        <h1>PERA LEGAL<br />& PARTNERS</h1>
      </div>

      <!-- Masaüstü Menü -->
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
        <RouterLink
          to="/hesaplama-araclari"
          class="menu-item"
          :class="{ active: isActive('/hesaplama-araclari') }"
        >
          {{ t('navbar.tools') }}
        </RouterLink>

        <span class="menu-item" @click="openEtahsilat">
          {{ t('navbar.etahsilat') }}
        </span>
      </nav>

      <!-- Sağ Taraf: Dil + UYAP + Hamburger -->
      <div class="right-side">
        <!-- Dil -->
        <div class="lang-switch">
          <span :class="{ active: locale === 'tr' }" @click="changeLang('tr')">TR</span>
          <span :class="{ active: locale === 'en' }" @click="changeLang('en')">EN</span>
        </div>

        <!-- UYAP -->
        <a
          href="https://vatandas.uyap.gov.tr/main/vatandas/giris.jsp"
          target="_blank"
          rel="noopener noreferrer"
          class="uyap-btn"
        >
          <i class="pi pi-lock"></i>
          {{ t('navbar.uyap') }}
        </a>

        <!-- Hamburger -->
        <button class="hamburger" type="button" @click="mobileOpen = !mobileOpen">
          <i class="pi pi-bars"></i>
        </button>
      </div>
    </div>

    <!-- 📱 Mobil Menü (tamamen header içinde, sayfa layout'una karışmıyor) -->
    <nav v-if="mobileOpen" class="mobile-menu">
      <RouterLink to="/" @click="closeMobile">{{ t('navbar.home') }}</RouterLink>
      <RouterLink to="/hakkimizda" @click="closeMobile">{{ t('navbar.about') }}</RouterLink>
      <RouterLink to="/ekibimiz" @click="closeMobile">{{ t('navbar.team') }}</RouterLink>
      <RouterLink to="/calisma-alanlarimiz" @click="closeMobile">{{ t('navbar.areas') }}</RouterLink>
      <RouterLink to="/kariyer" @click="closeMobile">{{ t('navbar.career') }}</RouterLink>
      <RouterLink to="/blog" @click="closeMobile">{{ t('navbar.blog') }}</RouterLink>
      <RouterLink to="/iletisim" @click="closeMobile">{{ t('navbar.contact') }}</RouterLink>
      <RouterLink to="/hesaplama-araclari" @click="closeMobile">{{ t('navbar.tools') }}</RouterLink>

      <button class="mobile-link" type="button" @click="openEtahsilat; closeMobile()">
        {{ t('navbar.etahsilat') }}
      </button>

      <a
        href="https://vatandas.uyap.gov.tr/main/vatandas/giris.jsp"
        target="_blank"
        rel="noopener noreferrer"
        class="mobile-uyap-btn"
      >
        <i class="pi pi-lock"></i>
        {{ t('navbar.uyap') }}
      </a>

      <div class="mobile-lang">
        <span :class="{ active: locale === 'tr' }" @click="changeLang('tr'); closeMobile()">TR</span>
        <span :class="{ active: locale === 'en' }" @click="changeLang('en'); closeMobile()">EN</span>
      </div>
    </nav>
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

const showPopup = ref(false)
const mobileOpen = ref(false)

const isActive = (path: string) => route.path === path

const changeLang = (lang: string) => {
  locale.value = lang
  localStorage.setItem('lang', lang)
}

const closeMobile = () => {
  mobileOpen.value = false
}

const openEtahsilat = () => {
  showPopup.value = true
}
</script>

<style scoped>
/* === POPUP === */
.popup-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
}

.popup {
  background: #fff;
  padding: 2rem 2.5rem;
  border-radius: 14px;
  text-align: center;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
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
}
.close-btn:hover {
  background: #d32626;
}

/* === NAVBAR GENEL === */
.navbar {
  position: fixed;
  inset: 0 0 auto 0; /* top:0, left:0, right:0 */
  background: #0b1b3f;
  color: #fff;
  z-index: 2000;
  font-family: 'Playfair Display', serif;
}

/* İçerik genişliği */
.navbar-inner {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo h1 {
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
}

/* Masaüstü Menü */
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

/* Sağ taraf */
.right-side {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* UYAP Button */
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
  white-space: nowrap;
}
.uyap-btn:hover {
  background: #d32424;
}

/* Dil seçici */
.lang-switch {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}
.lang-switch span {
  cursor: pointer;
  font-size: 0.85rem;
  opacity: 0.8;
  transition: 0.2s;
  font-weight: 500;
  color: #fff;
}
.lang-switch span.active {
  opacity: 1;
  border-bottom: 2px solid #b01c1c;
  font-weight: 700;
}

/* Hamburger */
.hamburger {
  display: none;
  font-size: 1.6rem;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #fff;
}

/* === MOBİL MENÜ === */
.mobile-menu {
  position: absolute;
  top: 100%; /* navbar'ın altı */
  left: 0;
  width: 100%;
  background: #0b1b3f;
  padding: 1.2rem 2rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.mobile-menu a,
.mobile-menu .mobile-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
}
.mobile-menu a:hover,
.mobile-menu .mobile-link:hover {
  opacity: 0.8;
}

.mobile-link {
  background: none;
  border: none;
  text-align: left;
  padding: 0;
  cursor: pointer;
}

/* Mobil UYAP */
.mobile-uyap-btn {
  margin-top: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #b01c1c;
  color: #fff;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  font-size: 1.02rem;
  font-weight: 600;
  text-decoration: none;
}
.mobile-uyap-btn:hover {
  background: #d32626;
}

/* Mobil dil */
.mobile-lang {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
.mobile-lang span {
  color: #fff;
  cursor: pointer;
  font-size: 0.95rem;
}

/* === RESPONSIVE === */
@media (max-width: 992px) {
  .menu {
    display: none;
  }

  .lang-switch,
  .uyap-btn {
    display: none;
  }

  .hamburger {
    display: inline-flex;
  }
}
</style>
