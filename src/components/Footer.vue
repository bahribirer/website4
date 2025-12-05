<template>
  <footer class="footer">
    <div class="container grid">

      <!-- Sol: Logo & Hakkında -->
      <div class="about">
        <h2 class="brand">PERA LEGAL<br />& PARTNERS</h2>
        <p class="info">
          Bu internet sitesinde yer alan tüm bilgiler ve logoya ilişkin tüm fikri mülkiyet hakları Pera Legal & Partners’a aittir.
        </p>

        <div class="social">
          <a href="https://x.com/peralegal" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-twitter"></i>
          </a>
          <a href="https://www.instagram.com/peralegalpartners/" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-instagram"></i>
          </a>
        </div>
      </div>

      <!-- Orta Menü -->
      <div class="links">
        <h3>Ana Menüler</h3>
        <ul>
          <li><RouterLink to="/">Ana Sayfa</RouterLink></li>
          <li><RouterLink to="/ekibimiz">Ekibimiz</RouterLink></li>
          <li><RouterLink to="/calisma-alanlarimiz">Çalışma Alanlarımız</RouterLink></li>
          <li><RouterLink to="/kariyer">Kariyer</RouterLink></li>
          <li><RouterLink to="/blog">Blog</RouterLink></li>
          <li><RouterLink to="/iletisim">İletişim</RouterLink></li>
        </ul>
      </div>

      <!-- Çalışma Saatleri -->
      <div class="hours">
        <h3>Çalışma Saatleri</h3>
        <ul>
          <li>Pazartesi: 09.00 – 18.00</li>
          <li>Salı: 09.00 – 18.00</li>
          <li>Çarşamba: 09.00 – 18.00</li>
          <li>Perşembe: 09.00 – 18.00</li>
          <li>Cuma: 09.00 – 18.00</li>
        </ul>
      </div>

      <!-- İletişim -->
      <div class="contact">
        <h3>İletişim</h3>
        <ul>
          <li><i class="pi pi-phone"></i> 0212 660 42 79</li>
          <li><i class="pi pi-envelope"></i> info@peralegal.com.tr</li>
          <li><i class="pi pi-globe"></i> peralegal.com.tr</li>
          <li>
            <i class="pi pi-map-marker"></i>
            Asmalımescit Mahallesi, İstiklal Caddesi, Korsan Çıkmazı,<br />
            No: 2/8 Beyoğlu / İstanbul
          </li>
        </ul>
      </div>

    </div>

    <!-- Alt -->
    <div class="bottom">
      <p>© 2025 — Pera Legal & Partners Tüm Hakları Saklıdır</p>
    </div>
  </footer>
</template>

<script setup>
// Bu test sürümünde i18n yok.
</script>

<style scoped>
/* —–– AYNEN SENİN CSS, DEĞİŞTİRMEDİM —–– */
.footer {
  background: #0b1b3f;
  color: #f2f5fa;
  font-family: 'Poppins', sans-serif;
  padding: 4rem 0 1.5rem;
  font-size: 0.95rem;
}
.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
}
.brand {
  color: #fff;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  letter-spacing: 0.5px;
}
.info {
  color: #cdd3de;
  line-height: 1.7;
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
}

.social { display: flex; gap: 0.8rem; }
.social a {
  background: #fff;
  color: #0b1b3f;
  width: 36px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.social a:hover { background: #b01c1c; color: #fff; }

h3 {
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

ul { list-style: none; padding: 0; margin: 0; }
ul li {
  color: #d7dce3;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
ul li i {
  margin-right: 0.6rem;
  color: #b01c1c;
}
a {
  color: #d7dce3;
  text-decoration: none;
  transition: 0.3s;
}
a:hover { color: #b01c1c; }

.bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 3rem;
  padding-top: 1.2rem;
}
.bottom p {
  color: #aeb6c5;
  font-size: 0.85rem;
}
</style>
