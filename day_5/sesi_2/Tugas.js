/**
 * STUDI KASUS LATIHAN KELAS: "Aplikasi Katalog Produk"
Deskripsi Soal untuk Peserta:
Bayangkan Anda sedang membuat fitur pencarian produk sederhana untuk sebuah toko online. Anda memiliki data berupa Array of Objects yang berisi daftar produk.

Tugas peserta:

Buat fungsi untuk menampilkan daftar seluruh produk ke dalam format teks/string yang rapi menggunakan metode map().

Buat fungsi untuk mencari produk berdasarkan nama (atau sebagian kata dari nama) menggunakan metode filter().
 */
// Data awal: Array of Objects
const daftarProduk = [
  { id: 1, nama: "Laptop ASUS ROG", harga: 15000000, kategori: "Elektronik" },
  { id: 2, nama: "Mouse Wireless Logitech", harga: 250000, kategori: "Elektronik" },
  { id: 3, nama: "Kemeja Flanel Pria", harga: 175000, kategori: "Pakaian" },
  { id: 4, nama: "Tas Ransel Laptop", harga: 300000, kategori: "Aksesori" },
  { id: 5, nama: "Keyboard Mechanical", harga: 650000, kategori: "Elektronik" }
];

// ==========================================
// 1. FUNGSI MENAMPILKAN DAFTAR (Menggunakan map)
// ==========================================
function formatDaftarProduk(produks) {
  return produks.map(function(item) {
    return `[${item.kategori}] ${item.nama} - Rp ${item.harga}`;
  });
}

// ==========================================
// 2. FUNGSI MENCARI PRODUK (Menggunakan filter)
// ==========================================
function cariProdukOlehNama(produks, kataKunci) {
  return produks.filter(function(item) {
    // Mengubah ke huruf kecil (lowercase) agar pencarian tidak case-sensitive
    return item.nama.toLowerCase().includes(kataKunci.toLowerCase());
  });
}


// --- PENGUJIAN / EKSEKUSI KODE ---

console.log("=== 1. DAFTAR SELURUH PRODUK ===");
const hasilMap = formatDaftarProduk(daftarProduk);
hasilMap.forEach(function(teks) {
  console.log(teks);
});


console.log("\n=== 2. PENCARIAN PRODUK: 'Laptop' ===");
const hasilCari1 = cariProdukOlehNama(daftarProduk, "Laptop");
console.log(hasilCari1);
// Output akan memunculkan: Laptop ASUS ROG dan Tas Ransel Laptop


console.log("\n=== 3. PENCARIAN PRODUK: 'Mouse' ===");
const hasilCari2 = cariProdukOlehNama(daftarProduk, "Mouse");
console.log(hasilCari2);
// Output akan memunculkan: Mouse Wireless Logitech