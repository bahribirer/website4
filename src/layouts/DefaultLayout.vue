<template>
  <div class="layout">
    <Navbar />
    <main class="page-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
}

/* 🔹 Sayfa içeriği navbar altından başlasın */
.page-content {
  flex: 1;
  padding-top: 70px; /* Navbar yüksekliği */
}

.page-content {
  flex: 1;
  padding-top: 70px;
  min-height: calc(100vh - 70px); /* Footer her zaman aşağı itilsin */
  display: block;
}


/* 🔹 Mobilde navbar biraz daha kısa olabilir */
@media (max-width: 992px) {
  .page-content {
    padding-top: 60px;
    min-height: calc(100vh - 60px);
  }
}

</style>
