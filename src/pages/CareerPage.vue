<template>
  <section class="career-page">
    <!-- Hero -->
    <div class="hero">
      <div class="overlay">
        <h1>Kariyer</h1>
      </div>
    </div>

    <!-- İçerik -->
    <div class="container">
      <div class="content">
        <!-- Sol taraf: metin -->
        <div class="left">
          <h3 class="section-title">BİZE KATILIN</h3>
          <p>
            Pera Legal & Partners Hukuk Bürosu olarak, geleceğe yönelik hedefler doğrultusunda
            <strong>avukat, stajyer avukat</strong> ve <strong>hukuk danışmanı</strong> pozisyonları için
            dinamik ve yetenekli ekip arkadaşları arıyoruz.
          </p>
          <p>
            Farklı deneyim seviyelerindeki adaylara, alanlarına göre yapılandırılmış kariyer olanakları
            sunmaktayız. 
          </p>
          <p>
            Başvurularınızı özgeçmiş ve açıklayıcı ön yazı ile birlikte
            <a href="mailto:info@peralegal.com.tr">info@peralegal.com.tr</a> adresine gönderebilirsiniz.
          </p>
        </div>

        <!-- Sağ taraf: form -->
        <div class="right">
          <h3 class="form-title">KARİYER ÖN BAŞVURU FORMU</h3>

          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" placeholder="Adınız Soyadınız *" v-model="form.name" required />
            </div>
            <div class="form-row">
              <input type="email" placeholder="E-posta Adresiniz *" v-model="form.email" required />
              <input type="tel" placeholder="Telefon Numaranız *" v-model="form.phone" required />
            </div>
            <div class="form-group">
              <textarea placeholder="Mesajınız *" rows="4" v-model="form.message" required></textarea>
            </div>
            <div class="form-group">
              <input type="file" @change="handleFileUpload" />
            </div>
            <button type="submit">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  file: null as File | null
})

const handleFileUpload = (e: Event) => {
  const target = e.target as HTMLInputElement
  form.value.file = target.files ? target.files[0] : null
}

const handleSubmit = () => {
  console.log('Başvuru gönderildi:', form.value)
  alert('Başvurunuz başarıyla alındı. Teşekkür ederiz!')
}
</script>

<style scoped>
.career-page {
  font-family: 'Poppins', sans-serif;
  color: #222;
  background: #fff;
}

/* Hero */
.hero {
  position: relative;
  height: 40vh;
  background: url('@/assets/images/banner.webp') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay {
  background: rgba(11, 27, 63, 0.6);
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.overlay h1 {
  font-size: 2.4rem;
  font-weight: 600;
}
.overlay p {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  opacity: 0.9;
}
.overlay a {
  color: #fff;
  text-decoration: none;
}

/* İçerik */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 0;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
.left {
  text-align: left;
  color: #444;
}
.section-title {
  background: #0b1b3f;
  color: #fff;
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.left p {
  margin-bottom: 1rem;
  line-height: 1.8;
  font-size: 1rem;
}
.left a {
  color: #b01c1c;
  font-weight: 500;
}

/* Form */
.right {
  background: #f7f7f7;
  padding: 2rem 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
.form-title {
  color: #0b1b3f;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.form-row {
  display: flex;
  gap: 1rem;
}
input,
textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: border-color 0.3s;
}
input:focus,
textarea:focus {
  border-color: #b01c1c;
  outline: none;
}
button {
  background: #b01c1c;
  color: #fff;
  padding: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
button:hover {
  background: #911818;
}

/* Responsive */
@media (max-width: 900px) {
  .content {
    grid-template-columns: 1fr;
  }
  .right {
    order: -1;
  }
  .overlay h1 {
    font-size: 1.8rem;
  }
}
</style>
