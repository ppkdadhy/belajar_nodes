// src/bug-hunt.js
// Program simulasi perhitungan transaksi dan stok KasirKu dengan beberapa bug

const daftarBelanja = [
  { nama: "Minyak Goreng", harga: 18000, qty: 2 },
  { nama: "Beras 5kg", harga: 70000, qty: 1 },
  { nama: "Gula Pasir", harga: 15000, qty: 3 },
];

let totalBelanja = 0;
let jumlahItem = 0;

// Bug 1: Kesalahan pada kondisi perulangan (looping boundary)
for (let i = 0; i <= daftarBelanja.length; i++) {
  const item = daftarBelanja[i];

  // Bug 2: Variabel total tertimpa karena memakai operator "=" alih-alih "+="
  totalBelanja = item.harga * item.qty;

  // Bug 3: Salah menjumlahkan total kuantiti barang
  jumlahItem + item.qty;
}

console.log(`Total Item Barang : ${jumlahItem}`);
console.log(`Total Belanja     : Rp ${totalBelanja.toLocaleString("id-ID")}`);

// debugig yg sudah benar :
/**
 * // src/bug-hunt.js - Setelah Diperbaiki
const daftarBelanja = [
  { nama: "Minyak Goreng", harga: 18000, qty: 2 },
  { nama: "Beras 5kg", harga: 70000, qty: 1 },
  { nama: "Gula Pasir", harga: 15000, qty: 3 }
];

let totalBelanja = 0;
let jumlahItem = 0;

// Perbaikan Bug 1: Menggunakan operator < agar tidakOutOfBounds
for (let i = 0; i < daftarBelanja.length; i++) {
  const item = daftarBelanja[i];
  
  // Perbaikan Bug 2: Menggunakan += agar nilainya terakumulasi
  totalBelanja += item.harga * item.qty;
  
  // Perbaikan Bug 3: Menyimpan hasil penjumlahan ke variabel jumlahItem
  jumlahItem += item.qty;
}

console.log(`Total Item Barang : ${jumlahItem}`);
console.log(`Total Belanja     : Rp ${totalBelanja.toLocaleString("id-ID")}`);
 */
