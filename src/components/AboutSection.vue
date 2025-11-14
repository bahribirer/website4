<template>
  <section class="about">
    <div class="container">
      <div class="meta">
        <span class="line"></span>
        <span class="year">2024 | İSTANBUL</span>
        <span class="line"></span>
      </div>

      <h2 class="title">Pera Legal & Partners</h2>

      <p class="desc">
        Pera Legal & Partners, kimi 20 yılı aşkın süredir hukuk alanında kamu hizmeti ifa etmekte olan deneyimli
        avukatlarımız ve kimi de genç, dinamik ve başarılarla dolu akademik hayatı olan avukatlarımızın bir araya gelmesi
        ile birlikte kurulmuştur. Alanlarında uzman olan kurucu avukatlarımız, tecrübeli çalışanlarımız ile birlikte
        hızlı, yasal ve doğru sonuca ulaşmayı hedefleyen hukuk firmamız, müvekkillerini her gelişmeden haberdar edip
        güncel tutarak ve atılması gereken adımları doğru zamanda atarak problemleri rahatça çözüme kavuşturmayı
        hedefler.
      </p>

      <p class="desc">
        Pera Legal & Partners, Beyoğlu’nda hizmet vermektedir. Randevu, öneri ve şikayetleriniz için İletişim sayfasında
        yer alan bilgilerden faydalanabilirsiniz.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about {
  background: #fff;
  padding: 6rem 0 5rem;
  text-align: center;
  color: #333;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

.meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.meta .line {
  width: 40px;
  height: 1px;
  background: #b01c1c;
}

.meta .year {
  color: #b01c1c;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.title {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  color: #111;
}

.desc {
  font-size: 1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
  font-weight: 400;
}

.desc strong {
  color: #000;
  font-weight: 600;
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 1.2rem;
  }

  .title {
    font-size: 1.8rem;
  }

  .desc {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}
</style>
