<template>
  <section class="consultation">
    <div class="container">
      <div class="card dark">
        <span class="number">01</span>
        <h3>Güvenilir Hukuki Danışmanlık</h3>
      </div>

      <div class="card red">
        <span class="number">02</span>
        <h3>Hukuki Süreç Yönetimi</h3>
      </div>

      <div class="card light">
        <span class="number">03</span>
        <h3>Stratejik Hukuki Çözümler</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.consultation {
  background: #ffffff;
  padding: 5rem 0;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

/* 🔹 Kartlar */
.card {
  position: relative;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s ease;
  cursor: default;
}

.card h3 {
  position: relative;
  z-index: 2;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  max-width: 70%;
}

/* 🔸 Arka sayılar */
.number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 11rem;
  font-weight: 700;
  opacity: 0.08;
  z-index: 1;
  user-select: none;
  font-family: 'Playfair Display', serif;
}

/* 🔸 Renk temaları */
.dark {
  background: #1c1c1c;
}
.red {
  background: #8b1212;
}
.light {
  background: #f4f4f4;
  color: #8b1212;
}

/* 🔸 Hover efekti */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* 🔸 Responsive */
@media (max-width: 768px) {
  .card {
    height: 200px;
  }

  .number {
    font-size: 7rem;
  }

  .card h3 {
    font-size: 1.1rem;
    max-width: 90%;
  }
}
</style>
