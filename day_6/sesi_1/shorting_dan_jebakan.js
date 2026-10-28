// 1. Jebakan Metode sort() Bawaan JavaScript
// Jebakannya: Secara default, metode .sort() di JavaScript mengurutkan elemen dengan mengubahnya menjadi string terlebih dahulu, lalu dibaca berdasarkan karakter alfabet (UTF-16), bukan secara nilai angka.
const angka = [10, 2, 5, 1];
angka.sort();
console.log(angka); 
// Output: [1, 10, 2, 5] -> SALAH! Karena '10' dibaca lebih dulu dari '2'.

// Solusi (Sorting Angka yang Benar):

const angka2 = [10, 2, 5, 1];
angka2.sort(function(a, b) {
  return a - b; // Mengurutkan dari kecil ke besar (Ascending)
});
console.log(angka2); 
// Output: [1, 2, 5, 10] -> BENAR!

/**
 * 2. Pengurutan Teks dengan localeCompare
Untuk mengurutkan data teks/string (terutama yang mengandung huruf kapital atau karakter khusus), gunakan localeCompare agar urutan alfabetnya akurat:
 */

const nama = ["Budi", "ani", "Siti"];
nama.sort(function(a, b) {
  return a.localeCompare(b);
});
console.log(nama);