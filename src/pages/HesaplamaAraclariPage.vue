<template>
  <section class="tools">

    <!-- ⭐ HERO SECTION -->
    <div class="hero fade-hero">
      <div class="overlay">
        <h1>{{ t("toolsPage.heroTitle") }}</h1>
        <p>{{ t("toolsPage.heroSubtitle") }}</p>
      </div>
    </div>

    <!-- 🔹 CONTENT -->
    <div class="container">
      <div class="grid">

        <!-- 🔹 Araç Değer Kaybı -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-car"></i>
            <h2>{{ t("toolsPage.carLossTitle") }}</h2>
          </div>
          <div class="divider"></div>

          <label>{{ t("toolsPage.carValue") }}</label>
          <input type="number" :placeholder="t('toolsPage.carValuePlaceholder')" />

          <label>{{ t("toolsPage.carKm") }}</label>
          <input type="number" :placeholder="t('toolsPage.carKmPlaceholder')" />

          <label>{{ t("toolsPage.carYear") }}</label>
          <input type="number" :placeholder="t('toolsPage.carYearPlaceholder')" />

          <label>{{ t("toolsPage.damageCost") }}</label>
          <input type="number" :placeholder="t('toolsPage.damageCostPlaceholder')" />

          <label>{{ t("toolsPage.damageLocation") }}</label>
          <select>
            <option>{{ t("toolsPage.damageLocation1") }}</option>
            <option>{{ t("toolsPage.damageLocation2") }}</option>
          </select>

          <label>{{ t("toolsPage.repeatDamage") }}</label>
          <select>
            <option>{{ t("toolsPage.yes") }}</option>
            <option>{{ t("toolsPage.no") }}</option>
          </select>

          <div class="buttons">
            <button class="primary" @click="openModal(t('toolsPage.carLossTitle'))">
              {{ t("toolsPage.calculate") }}
            </button>
            <button class="secondary">{{ t("toolsPage.clear") }}</button>
          </div>
        </div>

        <!-- 🔹 Vekalet Ücreti -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-briefcase"></i>
            <h2>{{ t("toolsPage.attorneyTitle") }}</h2>
          </div>
          <div class="divider"></div>

          <label>{{ t("toolsPage.courtType") }}</label>
          <select>
            <option>İcra Takipleri</option>
            <option>İcra Mahkemeleri</option>
            <option>Sulh Hukuk Mahkemeleri</option>
            <option>Tüketici Mahkemeleri</option>
            <option>Sulh Ceza / İnfaz Hakimlikleri</option>
            <option>Asliye Mahkemeleri</option>
            <option>Fikri ve Sınai Haklar Mahkemeleri</option>
            <option>İdare ve Vergi Mahkemeleri (Duruşmalı)</option>
            <option>İdare ve Vergi Mahkemeleri (Duruşmasız)</option>
          </select>

          <label>{{ t("toolsPage.amount") }}</label>
          <input type="number" :placeholder="t('toolsPage.amountPlaceholder')" />

          <div class="buttons">
            <button class="primary" @click="openModal(t('toolsPage.attorneyTitle'))">
              {{ t("toolsPage.calculate") }}
            </button>
            <button class="secondary">{{ t("toolsPage.clear") }}</button>
          </div>
        </div>

        <!-- 🔹 İhbar Tazminatı -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-calendar"></i>
            <h2>{{ t("toolsPage.noticeTitle") }}</h2>
          </div>
          <div class="divider"></div>

          <label>{{ t("toolsPage.grossSalary") }}</label>
          <input type="number" :placeholder="t('toolsPage.grossSalaryPlaceholder')" />

          <label>{{ t("toolsPage.startDate") }}</label>
          <input type="date" />

          <label>{{ t("toolsPage.endDate") }}</label>
          <input type="date" />

          <div class="buttons">
            <button class="brown" @click="openModal(t('toolsPage.noticeTitle'))">
              {{ t("toolsPage.calculate") }}
            </button>
          </div>
        </div>

        <!-- 🔹 Kıdem Tazminatı -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-clock"></i>
            <h2>{{ t("toolsPage.severanceTitle") }}</h2>
          </div>
          <div class="divider"></div>

          <label>{{ t("toolsPage.severanceStartDate") }}</label>
          <input type="date" />

          <label>{{ t("toolsPage.severanceEndDate") }}</label>
          <input type="date" />

          <label>{{ t("toolsPage.severanceGross") }}</label>
          <input type="number" :placeholder="t('toolsPage.severanceGrossPlaceholder')" />

          <div class="buttons">
            <button class="brown" @click="openModal(t('toolsPage.severanceTitle'))">
              {{ t("toolsPage.calculate") }}
            </button>
          </div>
        </div>

        <!-- 🔹 Tapu Harcı -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-home"></i>
            <h2>{{ t("toolsPage.tapuTitle") }}</h2>
          </div>
          <div class="divider"></div>

          <label>{{ t("toolsPage.tapuType") }}</label>
          <select>
            <option>{{ t("toolsPage.tapuOption1") }}</option>
            <option>{{ t("toolsPage.tapuOption2") }}</option>
          </select>

          <label>{{ t("toolsPage.tapuPrice") }}</label>
          <input type="number" :placeholder="t('toolsPage.tapuPricePlaceholder')" />

          <div class="buttons">
            <button class="primary" @click="openModal(t('toolsPage.tapuTitle'))">
              {{ t("toolsPage.calculate") }}
            </button>
            <button class="secondary">{{ t("toolsPage.clear") }}</button>
          </div>
        </div>

        <!-- 🔹 Islah Harcı -->
        <div class="card dark">
          <div class="card-head">
            <i class="pi pi-percentage"></i>
            <h2>{{ t("toolsPage.islahTitle") }}</h2>
          </div>
          <div class="divider light"></div>

          <label>{{ t("toolsPage.islahAmount") }}</label>
          <input type="number" :placeholder="t('toolsPage.islahAmountPlaceholder')" />

          <div class="buttons">
            <button class="light" @click="openModal(t('toolsPage.islahTitle'))">
              {{ t("toolsPage.calculate") }}
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- MODAL -->
    <div v-if="modalOpen" class="modal-backdrop" @click.self="closeModal">
      <div class="modal">
        <button class="close" @click="closeModal"><i class="pi pi-times"></i></button>

        <i class="pi pi-check-circle modal-icon"></i>

        <h2>{{ t("toolsPage.modalTitle") }}</h2>
        <p>{{ t("toolsPage.modalText") }}</p>

        <button class="ok-btn" @click="closeModal">{{ t("toolsPage.ok") }}</button>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const modalOpen = ref(false)
const selectedTool = ref("")

const openModal = (name: string) => {
  selectedTool.value = name
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
}
</script>


<style scoped>

/* ================= HERO ================= */
.hero {
  position: relative;
  height: 38vh;
  background: url('/src/assets/herosection') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: rgba(11, 27, 63, 0.65);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 1rem;
}

.overlay h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.overlay p {
  opacity: 0.9;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Fade-in animasyon */
.fade-hero {
  animation: fadeHero 1.5s ease;
}

@keyframes fadeHero {
  from {
    opacity: 0;
    transform: scale(1.04);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ======================================
   TEMA + GRID
====================================== */

.tools {
  background: #fff;
  padding: 4rem 0 7rem;
  font-family: 'Poppins', sans-serif;
}

.title {
  color: #0b1b3f;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.8rem;
}

.subtitle {
  color: #666;
  text-align: center;
  max-width: 750px;
  margin: 0 auto 3.5rem;
  line-height: 1.6;
  font-size: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.2rem;
}

.card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.07);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  transition: all 0.35s ease;
  border: 1px solid rgba(11, 27, 63, 0.05);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
}

.card.dark {
  background: #0b1b3f;
  color: #fff;
}

.card-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.card-head i {
  font-size: 1.2rem;
  color: #b01c1c;
}

.card.dark .card-head i {
  color: #fff;
}

.card h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #0b1b3f;
}

.card.dark h2 {
  color: #fff;
}

.divider {
  height: 2px;
  background: rgba(11, 27, 63, 0.1);
  margin: 0.5rem 0 1rem;
}

.divider.light {
  background: rgba(255, 255, 255, 0.2);
}

label {
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
}

.card.dark label {
  color: #eee;
}

input,
select {
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
  background: #fafafa;
}

input:focus,
select:focus {
  border-color: #b01c1c;
  outline: none;
  background: #fff;
}

.card.dark input {
  background: #fff;
  color: #000;
}

.buttons {
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
}

button {
  flex: 1;
  padding: 0.7rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.primary {
  background: #0b1b3f;
  color: #fff;
}

.secondary {
  background: #eaeaea;
  color: #333;
}

.brown {
  background: #a67c52;
  color: #fff;
}

.light {
  background: #f4f4f4;
  color: #0b1b3f;
}

/* ======================================
   MODAL
====================================== */

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
}

.modal {
  background: #fff;
  border-radius: 16px;
  width: 90%;
  max-width: 420px;
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  animation: fadeIn 0.25s ease;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.modal-icon {
  color: #0b1b3f;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.modal h2 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.modal p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.4rem;
}

.ok-btn {
  background: #0b1b3f;
  color: #fff;
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.4rem;
  color: #888;
  cursor: pointer;
}

.close:hover {
  color: #b01c1c;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* HERO sonrası ilk container boşluk bırakmasın */
.tools .container {
  margin-top: 0 !important;
  padding-top: 2rem; /* istersen 0 yapabilirsin */
}
.tools {
  padding-top: 0 !important;
}

</style>
