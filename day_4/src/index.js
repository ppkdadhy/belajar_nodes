// src/index.js - Logika Bisnis KasirKu
const namaToko = "Toko Berkah Warung (KasirKu)";
const kasir = "Mbak Sri";

// Data contoh produk
const produk = {
  nama: "Minyak Goreng Sania 2 Liter",
  hargaBeli: 33000,
  hargaJual: 37000,
  stok: 24,
  batasMin: 5
};

// Aturan bisnis: Hitung potensi keuntungan (margin) per unit & total nilai stok
const marginUnit = produk.hargaJual - produk.hargaBeli;
const totalNilaiStok = produk.stok * produk.hargaJual;
const statusStok = produk.stok <= produk.batasMin ? "⚠️ Perlu Restock Segera!" : "✓ Stok Aman";

// Tampilkan hasil menggunakan console.log & template literal
console.log(`========================================`);
console.log(`  SISTEM POS: ${namaToko}`);
console.log(`  Kasir Bertugas: ${kasir}`);
console.log(`========================================`);
console.log(`Produk        : ${produk.nama}`);
console.log(`Harga Jual    : Rp ${produk.hargaJual.toLocaleString("id-ID")}`);
console.log(`Margin Laba   : Rp ${marginUnit.toLocaleString("id-ID")} per unit`);
console.log(`Sisa Stok     : ${produk.stok} unit`);
console.log(`Status        : ${statusStok}`);
console.log(`Nilai Inventaris : Rp ${totalNilaiStok.toLocaleString("id-ID")}`);
console.log(`========================================`);