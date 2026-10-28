// Konsep: Komentar khusus berformat /** ... */ di atas fungsi agar IDE (seperti VS Code) bisa memunculkan autocomplete dan deteksi tipe data (walaupun JavaScript itu dinamis).
/**
 * Menjumlahkan dua angka.
 * @param {number} a - Angka pertama
 * @param {number} b - Angka kedua
 * @returns {number} Hasil penjumlahan
 */
function tambah(a, b) {
  return a + b;
}
console.log(tambah(4, 3));
