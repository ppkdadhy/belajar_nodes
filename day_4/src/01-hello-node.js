// src/01-hello-node.js
console.log("========================================");
console.log(" Halo, selamat datang di latihan Node.js KasirKu! ");
console.log("========================================");
console.log("JavaScript sekarang dijalankan langsung dari terminal laptop,");
console.log("bukan di dalam jendela browser (tanpa DOM/window).");

// src/02-template-literals.js
const namaProduk = "Minyak Goreng Sania 2 Liter";
const hargaSatuan = 18500;
const jumlahBeli = 2;

console.log("========================================");
console.log("       LATIHAN TEMPLATE LITERALS        ");
console.log("========================================");

// Cara lama menggabungkan teks dengan tanda plus (+)
console.log(
  "[Cara Lama] Produk: " + namaProduk + ", Total: " + hargaSatuan * jumlahBeli,
);

// Menggunakan Template Literal (${...}) yang jauh lebih bersih
console.log(`[Template Literal] Produk : ${namaProduk}`);
console.log(`[Template Literal] Jumlah : ${jumlahBeli} unit`);
console.log(
  `[Template Literal] Total  : Rp ${(hargaSatuan * jumlahBeli).toLocaleString("id-ID")}`,
);
console.log("========================================");

// src/03-objek-produk.js
const produkWarung = {
  id: 1,
  nama: "Beras Ramos 5kg",
  kategori: "Sembako",
  hargaBeli: 65000,
  hargaJual: 72000,
  stok: 15,
};

console.log("========================================");
console.log("       LATIHAN OBJEK PRODUK KASIRKU     ");
console.log("========================================");
console.log(`ID Produk   : SKU-${produkWarung.id}`);
console.log(`Nama Produk : ${produkWarung.nama}`);
console.log(`Kategori    : ${produkWarung.kategori}`);
console.log(
  `Harga Beli  : Rp ${produkWarung.hargaBeli.toLocaleString("id-ID")}`,
);
console.log(
  `Harga Jual  : Rp ${produkWarung.hargaJual.toLocaleString("id-ID")}`,
);
console.log(`Stok Gudang : ${produkWarung.stok} karung`);
console.log("========================================");

// src/04-kondisional-stok.js
const produk = {
  nama: "Gula Pasir 1kg",
  stok: 3,
  batasMin: 5,
};

console.log("========================================");
console.log("     LATIHAN KONDISIONAL BATAS STOK     ");
console.log("========================================");
console.log(`Nama Barang : ${produk.nama}`);
console.log(`Stok Saat Ini: ${produk.stok} unit`);
console.log(`Batas Minimum: ${produk.batasMin} unit`);

// Menggunakan operator ternary untuk mengevaluasi status stok
const statusStok =
  produk.stok <= produk.batasMin ? "⚠️ Perlu Restock Segera!" : "✓ Stok Aman";

console.log(`Status Gudang: ${statusStok}`);
console.log("========================================");

// src/05-looping-array.js
const daftarProduk = [
  { nama: "Minyak Goreng Sania 2L", harga: 37000, stok: 10 },
  { nama: "Beras Ramos 5kg", harga: 72000, stok: 15 },
  { nama: "Gula Pasir 1kg", harga: 16000, stok: 4 },
];

console.log("========================================");
console.log("     LATIHAN LOOPING ARRAY PRODUK       ");
console.log("========================================");

// Menggunakan perulangan for...of untuk membaca setiap item dalam array
for (const produk of daftarProduk) {
  const status = produk.stok <= 5 ? "⚠️ (Restock)" : "✓ (Aman)";
  console.log(`- ${produk.nama}`);
  console.log(
    `  Harga : Rp ${produk.harga.toLocaleString("id-ID")} | Stok: ${produk.stok} ${status}`,
  );
  console.log("----------------------------------------");
}

// src/06-fungsi-margin.js

// Fungsi mandiri untuk menghitung margin keuntungan per unit
function hitungMargin(hargaJual, hargaBeli) {
  return hargaJual - hargaBeli;
}

// Fungsi mandiri untuk mempermudah format mata uang Rupiah
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

const produk2 = {
  nama: "Beras Ramos 5kg",
  hargaBeli: 65000,
  hargaJual: 72000,
  stok: 15,
};

// Menggunakan fungsi yang sudah dibuat
const marginUnit = hitungMargin(produk2.hargaJual, produk2.hargaBeli);
const totalNilaiStok = produk2.stok * produk2.hargaJual;

console.log("========================================");
console.log("       LATIHAN FUNGSI BISNIS KASIRKU    ");
console.log("========================================");
console.log(`Produk      : ${produk2.nama}`);
console.log(`Harga Beli  : ${formatRupiah(produk2.hargaBeli)}`);
console.log(`Harga Jual  : ${formatRupiah(produk2.hargaJual)}`);
console.log(`Margin Laba : ${formatRupiah(marginUnit)} per unit`);
console.log(`Total Aset  : ${formatRupiah(totalNilaiStok)}`);
console.log("========================================");

// src/07-simulasi-kasir.js
const namaToko = "Toko Berkah Warung (KasirKu)";
const kasir = "Mbak Sri";

// Data inventaris produk dalam bentuk Array of Objects
const daftarProduk2 = [
  {
    nama: "Minyak Goreng Sania 2L",
    hargaBeli: 33000,
    hargaJual: 37000,
    stok: 10,
    batasMin: 5,
  },
  {
    nama: "Beras Ramos 5kg",
    hargaBeli: 65000,
    hargaJual: 72000,
    stok: 15,
    batasMin: 5,
  },
  {
    nama: "Gula Pasir 1kg",
    hargaBeli: 14000,
    hargaJual: 16000,
    stok: 3,
    batasMin: 5,
  },
];

// Fungsi bantu untuk format mata uang Rupiah
function formatRupiah2(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

console.log("==================================================");
console.log(`         LAPORAN HARIAN POS: ${namaToko}         `);
console.log(`         Kasir Bertugas: ${kasir}                 `);
console.log("==================================================");

let totalNilaiInventaris = 0;
let jumlahItemRestock = 0;

// Looping untuk memproses setiap produk
for (const item of daftarProduk2) {
  const margin = item.hargaJual - item.hargaBeli;
  const nilaiStokItem = item.stok * item.hargaJual;
  totalNilaiInventaris += nilaiStokItem;

  const status = item.stok <= item.batasMin ? "⚠️ Perlu Restock" : "✓ Aman";
  if (item.stok <= item.batasMin) {
    jumlahItemRestock++;
  }

  console.log(`Produk      : ${item.nama}`);
  console.log(
    `Harga Jual  : ${formatRupiah2(item.hargaJual)} (Margin: ${formatRupiah2(margin)})`,
  );
  console.log(`Stok Gudang : ${item.stok} unit | Status: ${status}`);
  console.log("--------------------------------------------------");
}

console.log(`Total Estimasi Aset Toko : ${formatRupiah2(totalNilaiInventaris)}`);
console.log(`Barang Butuh Perhatian   : ${jumlahItemRestock} item`);
console.log("==================================================");
