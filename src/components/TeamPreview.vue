<template>
  <section class="team-preview">
    <div class="container">
      <!-- Sol Başlık -->
      <div class="left">
        <h3 class="subtitle">HUKUKİ ÇÖZÜMLERİNİZ İÇİN</h3>
        <h2 class="title">Ekibimiz</h2>
      </div>

      <!-- Orta Açıklama -->
      <div class="middle">
        <p>
          Pera Legal & Partners ekibinde yer alan, konularında uzman, başarılı ve donanımlı avukatlarımız;
          müvekkillerimize ihtiyaç duydukları hukuki desteği güncel bilgi ve deneyimleriyle güvenilir, şeffaf ve
          sonuç odaklı bir şekilde sunmaktadır.
        </p>
      </div>

      <!-- Sağ Buton -->
      <div class="right">
        <RouterLink to="/ekibimiz" class="btn">Ekibimiz</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.team-preview {
  background: #ffffff;
  padding: 4rem 0 2rem;
  font-family: 'Poppins', sans-serif;
  border-top: 1px solid #eee;
}

.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr auto;
  align-items: center;
  gap: 2rem;
}

/* Başlık */
.subtitle {
  color: #b01c1c;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.4rem;
}

.title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #0b1b3f;
}

/* Açıklama */
.middle p {
  color: #555;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
}

/* Buton */
.btn {
  background: #b01c1c;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  padding: 0.9rem 2rem;
  border-radius: 2px;
  display: inline-block;
  transition: background 0.2s ease;
}

.btn:hover {
  background: #8d1515;
}

/* Responsive */
@media (max-width: 992px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .btn {
    margin-top: 1.5rem;
  }

  .title {
    font-size: 1.8rem;
  }

  .middle p {
    font-size: 0.95rem;
  }
}
</style>
