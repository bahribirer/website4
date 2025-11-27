<template>
  <section class="career-page">
    <!-- Hero -->
    <div class="hero fade-hero">
      <div class="overlay">
        <h1>{{ t("career.hero") }}</h1>
      </div>
    </div>

    <!-- İçerik -->
    <div class="container">
      <div class="content">

        <!-- Sol taraf -->
        <div class="left">
          <h3 class="section-title">{{ t("career.joinTitle") }}</h3>

          <p v-html="t('career.p1')"></p>
          <p>{{ t("career.p2") }}</p>

          <p>
            {{ t("career.p3") }}
            <a href="mailto:info@peralegal.com.tr">info@peralegal.com.tr</a>
          </p>
        </div>

        <!-- Sağ taraf: Form -->
        <div class="right">
          <h3 class="form-title">{{ t("career.formTitle") }}</h3>

          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input 
                type="text" 
                :placeholder="t('career.name')" 
                v-model="form.name" 
                required 
              />
            </div>

            <div class="form-row">
              <input 
                type="email" 
                :placeholder="t('career.email')" 
                v-model="form.email" 
                required 
              />
              <input 
                type="tel" 
                :placeholder="t('career.phone')" 
                v-model="form.phone" 
                required 
              />
            </div>

            <div class="form-group">
              <textarea 
                :placeholder="t('career.message')" 
                rows="4" 
                v-model="form.message" 
                required
              ></textarea>
            </div>

            <div class="form-group file-upload">
  <input type="file" id="cvFile" @change="handleFileUpload" />
  
  <label for="cvFile" class="file-label">
    <i class="pi pi-upload"></i>
    <span>{{ selectedFileName || t("career.file") }}</span>
  </label>
</div>


            <button type="submit">{{ t("career.send") }}</button>
          </form>
        </div>

      </div>
    </div>

    <!-- ⭐ POP-UP ⭐ -->
    <div v-if="showPopup" class="popup-backdrop">
      <div class="popup">
        <i class="pi pi-check-circle icon"></i>
        <h2>{{ t("career.popupTitle") }}</h2>
        <p>{{ t("career.popupText") }}</p>
        <button @click="showPopup = false">{{ t("career.ok") }}</button>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import emailjs from "@emailjs/browser";

const { t } = useI18n();

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
  file: null as File | null
});

const showPopup = ref(false);
const selectedFileName = ref("");


const handleFileUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];

  form.value.file = file || null;
  selectedFileName.value = file ? file.name : "";
};


const handleSubmit = async () => {
  try {
    await emailjs.send(
      "service_23xayhn",
      "template_bvwn8p5",
      {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message
      },
      "FvWfF-9UyWzNMdKFs"
    );

    await emailjs.send(
      "service_23xayhn",
      "template_6cdsg8d",
      {
        name: form.value.name,
        email: form.value.email,
        to_email: form.value.email
      },
      "FvWfF-9UyWzNMdKFs"
    );

    showPopup.value = true;

    form.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
      file: null
    };
  } catch (error) {
    console.error("EmailJS error:", error);
    alert(t("career.error"));
  }
};
</script>


<style scoped>
.career-page {
  font-family: "Poppins", sans-serif;
  color: #222;
  background: #fff;
}

/* ===== HERO ===== */
.hero {
  position: relative;
  height: 42vh;
background: url('/src/assets/herosection/kariyer.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: rgba(11, 27, 63, 0.55);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay h1 {
  font-size: 2.6rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
}

/* ===== CONTAINER ===== */
.container {
  width: 90%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 5rem 0;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
}

/* ===== LEFT TEXT ===== */
.left {
  text-align: left;
  color: #444;
  line-height: 1.8;
}

.section-title {
  background: #0b1b3f;
  color: #fff;
  display: inline-block;
  padding: 0.45rem 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  margin-bottom: 1rem;
}

.left p {
  margin-bottom: 1.1rem;
  font-size: 1.05rem;
}

.left strong {
  color: #0b1b3f;
}

.left a {
  color: #b01c1c;
  font-weight: 600;
  text-decoration: none;
}

/* ===== FORM CARD ===== */
.right {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  padding: 2.5rem 2rem 3rem;
  border-radius: 14px;
  border: 1px solid rgba(11, 27, 63, 0.08);
  box-shadow: 0 18px 35px rgba(0,0,0,0.08);
  position: relative;
}

.form-title {
  color: #0b1b3f;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  margin-bottom: 2rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

/* ===== INPUTS ===== */
input,
textarea {
  width: 100%;
  padding: 0.95rem 1.1rem;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 0.95rem;
  background: #fff;
  transition: 0.25s ease;
}

input:focus,
textarea:focus {
  border-color: #b01c1c;
  box-shadow: 0 0 0 3px rgba(176, 28, 28, 0.2);
  outline: none;
}

/* ===== BUTTON ===== */
button {
  background: linear-gradient(135deg, #b01c1c, #8c1515);
  color: #fff;
  padding: 0.95rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.25s ease;
}

button:hover {
  background: linear-gradient(135deg, #8c1515, #b01c1c);
  transform: translateY(-1px);
}

/* ======= POP-UP (KALDI) ======= */
/* Bunu değiştirmedim; şu an zaten şahane. */

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .content {
    grid-template-columns: 1fr;
  }
  .right {
    order: -1;
  }
  .overlay h1 {
    font-size: 2rem;
  }
}
/* --- Hakkımızda Hero Fade Animasyonu (Blog ile aynı) --- */
.fade-hero {
  animation: fadeHero 1.5s ease;
}

@keyframes fadeHero {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
/* Gizle */
.file-upload input[type="file"] {
  display: none;
}

/* Label tasarımı */
.file-label {
  width: 100%;
  padding: 0.9rem 1.1rem;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: 0.25s ease;
}

.file-label:hover {
  border-color: #b01c1c;
  box-shadow: 0 0 0 3px rgba(176, 28, 28, 0.15);
}

.file-label i {
  color: #b01c1c;
  font-size: 1.2rem;
}

/* === POPUP OVERLAY === */
.popup-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* === POPUP CARD === */
.popup {
  background: #fff;
  padding: 2rem 2.2rem;
  border-radius: 14px;
  max-width: 420px;
  width: 90%;
  text-align: center;
  box-shadow: 0 18px 40px rgba(0,0,0,0.25);
  animation: popupScale 0.25s ease;
}

.popup .icon {
  font-size: 3.2rem;
  color: #28a745;
  margin-bottom: 1rem;
}

.popup h2 {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: .6rem;
  color: #0b1b3f;
}

.popup p {
  color: #555;
  margin-bottom: 1.4rem;
  font-size: 1rem;
}

.popup button {
  background: #b01c1c;
  color: white;
  border: none;
  padding: .85rem 1.8rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s ease;
}

.popup button:hover {
  background: #8c1515;
}

/* Animasyon */
@keyframes popupScale {
  0% { transform: scale(0.85); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}


</style>

