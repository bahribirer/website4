<template>
  <header class="navbar">
    <div class="container">
      <!-- 🔹 Sol: Logo -->
      <div class="logo">
        <h1>PERA LEGAL<br />& PARTNERS</h1>
      </div>

      <!-- 🔹 Menü -->
      <nav class="menu">
        <RouterLink to="/" class="menu-item" :class="{ active: isActive('/') }">Ana Sayfa</RouterLink>
        <RouterLink to="/ekibimiz" class="menu-item" :class="{ active: isActive('/ekibimiz') }">Ekibimiz</RouterLink>
        <RouterLink
          to="/calisma-alanlarimiz"
          class="menu-item"
          :class="{ active: isActive('/calisma-alanlarimiz') }"
        >
          Çalışma Alanlarımız
        </RouterLink>
        <RouterLink to="/kariyer" class="menu-item" :class="{ active: isActive('/kariyer') }">Kariyer</RouterLink>
        <RouterLink to="/blog" class="menu-item" :class="{ active: isActive('/blog') }">Blog</RouterLink>
        <RouterLink to="/iletisim" class="menu-item" :class="{ active: isActive('/iletisim') }">İletişim</RouterLink>
        <RouterLink to="/hesaplama-araclari" class="menu-item" :class="{ active: isActive('/hesaplama-araclari') }">
          Hesaplama Araçları
        </RouterLink>
      </nav>

      <!-- 🔸 Sağ: UYAP Butonu -->
      <a
        href="https://vatandas.uyap.gov.tr/main/vatandas/giris.jsp"
        target="_blank"
        rel="noopener noreferrer"
        class="uyap-btn"
      >
        <i class="pi pi-lock"></i>
        UYAP Girişi
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const isActive = (path: string) => route.path === path
</script>

<style scoped>
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
  .menu {
    display: none;
  }

  .uyap-btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
