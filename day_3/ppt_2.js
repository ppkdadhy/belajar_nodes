// js/script.js - Hari 3 Bagian 2: Operator & Struktur Kontrol

// 1. Data contoh array objek produk (lanjutan dari tugas sebelumnya)
const daftarProduk = [
  { nama: "Minyak Goreng Sania 2 Liter", harga: 37000, stok: 24 },
  { nama: "Beras Ramos 5kg", harga: 72000, stok: 15 },
  { nama: "Indomie Goreng Original", harga: 3100, stok: 120 }
];

console.log("=== 1. DATA CONTOH PRODUK ===");
console.log(daftarProduk);

// 2. Aturan Bisnis Proyek dalam Kalimat:
// "Jika total belanja pelanggan mencapai Rp100.000 atau lebih, berikan diskon 10%. 
//  Jika mencapai Rp50.000 sampai di bawah Rp100.000, berikan diskon 5%. 
//  Di bawah itu, tidak ada diskon (0%)."

// Fungsi untuk menghitung diskon (Implementasi if / else if)
function hitungDiskon(totalBelanja) {
  let diskon = 0;
  if (totalBelanja >= 100000) {
    diskon = totalBelanja * 0.10;
  } else if (totalBelanja >= 50000) {
    diskon = totalBelanja * 0.05;
  } else {
    diskon = 0;
  }
  return diskon;
}

// 5. Uji 3 nilai berbeda, catat hasilnya di Console
console.log("=== 2. UJI ATURAN BISNIS (if / else if) ===");
console.log("Total belanja Rp120.000 -> Diskon:", hitungDiskon(120000)); // Uji nilai 1 (>= 100k)
console.log("Total belanja Rp75.000  -> Diskon:", hitungDiskon(75000));  // Uji nilai 2 (antara 50k - 100k)
console.log("Total belanja Rp30.000  -> Diskon:", hitungDiskon(30000));  // Uji nilai 3 (< 50k)


// 3. Tambahan 1 switch (Metode Pembayaran KasirKu)
function cekBiayaAdmin(metode) {
  let biayaAdmin = 0;
  switch (metode) {
    case "tunai":
      biayaAdmin = 0;
      break;
    case "qris":
      biayaAdmin = 1000; // Contoh biaya layanan QRIS
      break;
    case "transfer":
      biayaAdmin = 2500;
      break;
    default:
      biayaAdmin = 2000;
  }
  return biayaAdmin;
}

console.log("=== 3. UJI SWITCH (Metode Pembayaran) ===");
console.log("Metode 'tunai'   -> Biaya Admin:", cekBiayaAdmin("tunai"));
console.log("Metode 'qris'    -> Biaya Admin:", cekBiayaAdmin("qris"));
console.log("Metode 'lainnya' -> Biaya Admin:", cekBiayaAdmin("kartu"));


// 4. Hitung satu total dengan for...of dari data contoh (Total Aset Inventaris)
let totalNilaiInventaris = 0;
for (const produk of daftarProduk) {
  totalNilaiInventaris += produk.harga * produk.stok;
}

console.log("=== 4. PERHITUNGAN TOTAL DENGAN for...of ===");
console.log("Total Nilai Seluruh Stok Barang di Toko: Rp", totalNilaiInventaris);