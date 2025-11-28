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

/* 🔹 Navbar boşluğu bıraktırıyoruz */
.page-content {
  flex: 1;
  padding-top: 70px;
}

/* 🔹 Mobilde navbar kısa */
@media (max-width: 992px) {
  .page-content {
    padding-top: 60px;
  }
}
</style>

