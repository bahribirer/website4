export const slugifyTR = (str: string) =>
  str
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i') // 🔥 EKLENDİ
    .replace(/ğ/g, 'g').replace(/Ğ/g, 'g') // 🔥 EKLENDİ
    .replace(/ü/g, 'u').replace(/Ü/g, 'u') // 🔥 EKLENDİ
    .replace(/ş/g, 's').replace(/Ş/g, 's') // 🔥 EKLENDİ
    .replace(/ö/g, 'o').replace(/Ö/g, 'o') // 🔥 EKLENDİ
    .replace(/ç/g, 'c').replace(/Ç/g, 'c') // 🔥 EKLENDİ
    .normalize("NFD")                      // 🔥 Unicode combining dot FIX
    .replace(/[\u0300-\u036f]/g, "")       // 🔥 Tüm accents temizleniyor 
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
