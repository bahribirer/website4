<template>
  <section class="tools">
    <div class="container">
      <h1 class="title">Hesaplama Araçları</h1>
      <p class="subtitle">
        Pera Legal & Partners tarafından sunulan hesaplama araçlarıyla tazminat, harç ve vekalet ücretlerinizi kolayca hesaplayabilirsiniz.
      </p>

      <div class="grid">
        <!-- 🔹 Araç Değer Kaybı -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-car"></i>
            <h2>Araç Değer Kaybı Hesaplama</h2>
          </div>
          <div class="divider"></div>

          <label>Rayiç Değer (₺):</label>
          <input type="number" placeholder="Fiyat girin" />

          <label>Aracın Kilometresi:</label>
          <input type="number" placeholder="KM olarak giriniz" />

          <label>Model Yılı:</label>
          <input type="number" placeholder="Yıl olarak giriniz" />

          <label>Hasar Bedeli (₺):</label>
          <input type="number" placeholder="Hasar bedelini girin" />

          <label>Hasar Konumu:</label>
          <select>
            <option>Tamponlar / Kapı / Bagaj</option>
            <option>Kaput / Şasi / Podye / Tavan</option>
          </select>

          <label>Aynı Yerden Daha Önce Hasar Aldı mı?</label>
          <select>
            <option>Evet</option>
            <option>Hayır</option>
          </select>

          <div class="buttons">
            <button class="primary">HESAPLA</button>
            <button class="secondary">TEMİZLE</button>
          </div>
        </div>

        <!-- 🔹 Vekalet Ücreti -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-briefcase"></i>
            <h2>Vekalet Ücreti Hesaplama</h2>
          </div>
          <div class="divider"></div>

          <label>Mahkeme Türü Seçin:</label>
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

          <label>Tutarı Girin (₺):</label>
          <input type="number" placeholder="Tutarı girin" />

          <div class="buttons">
            <button class="primary">HESAPLA</button>
            <button class="secondary">TEMİZLE</button>
          </div>
        </div>

        <!-- 🔹 İhbar Tazminatı -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-calendar"></i>
            <h2>İhbar Tazminatı Hesaplama</h2>
          </div>
          <div class="divider"></div>

          <label>Brüt Maaşınızı Girin:</label>
          <input type="number" placeholder="Brüt maaşınızı girin" />
          <label>İşe Giriş Tarihi:</label>
          <input type="date" />
          <label>İşten Çıkış Tarihi:</label>
          <input type="date" />
          <div class="buttons">
            <button class="brown">HESAPLA</button>
          </div>
        </div>

        <!-- 🔹 Kıdem Tazminatı -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-clock"></i>
            <h2>Kıdem Tazminatı Hesaplama</h2>
          </div>
          <div class="divider"></div>

          <label>İşe Giriş Tarihi:</label>
          <input type="date" />
          <label>İşten Çıkış Tarihi:</label>
          <input type="date" />
          <label>Brüt Maaş (₺):</label>
          <input type="number" placeholder="Brüt maaş giriniz" />
          <div class="buttons">
            <button class="brown">HESAPLA</button>
          </div>
        </div>

        <!-- 🔹 Tapu Harcı -->
        <div class="card">
          <div class="card-head">
            <i class="pi pi-home"></i>
            <h2>Tapu Harcı Hesaplama</h2>
          </div>
          <div class="divider"></div>

          <label>Hesaplama Türü:</label>
          <select>
            <option>Satış Değeri ile Harç Tutarı Hesaplama</option>
            <option>Harç Tutarı ile Satış Değeri Hesaplama</option>
          </select>
          <label>Fiyat Bilgisi (₺):</label>
          <input type="number" placeholder="Fiyatı girin" />
          <div class="buttons">
            <button class="primary">HESAPLA</button>
            <button class="secondary">TEMİZLE</button>
          </div>
        </div>

        <!-- 🔹 Islah Harcı -->
        <div class="card dark">
          <div class="card-head">
            <i class="pi pi-percentage"></i>
            <h2>Islah Harcı Hesaplama</h2>
          </div>
          <div class="divider light"></div>

          <label>Artırılan Tutar (₺):</label>
          <input type="number" placeholder="Tutar giriniz" />
          <div class="buttons">
            <button class="light">HESAPLA</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.tools {
  background: #fff;
  padding: 6rem 0 8rem;
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

/* Grid düzeni */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.2rem;
}

/* Kart */
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

/* Koyu kart */
.card.dark {
  background: #0b1b3f;
  color: #fff;
}

/* Kart başlık kısmı */
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
  margin: 0;
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

/* Input ve Select */
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

/* Buton renkleri */
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

.primary:hover {
  background: #132a6a;
}

.secondary {
  background: #eaeaea;
  color: #333;
}

.secondary:hover {
  background: #d5d5d5;
}

.brown {
  background: #a67c52;
  color: #fff;
}

.brown:hover {
  background: #8a643f;
}

.light {
  background: #f4f4f4;
  color: #0b1b3f;
}

.light:hover {
  background: #fff;
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 1.7rem;
  }
  .grid {
    gap: 1.5rem;
  }
}
</style>
