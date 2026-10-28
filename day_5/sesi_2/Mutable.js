// push() — Menambah elemen di akhir
// 2. pop() — Menghapus elemen terakhir
// 3. shift() — Menghapus elemen pertama
// 4. unshift() — Menambah elemen di awal
// 5. splice() — Menambah, menghapus, atau mengubah elemen di posisi tertentu
// 6. sort() — Mengurutkan elemen

const buah = ["Apel", "Mangga", "Jeruk"];
console.log("Sebelum splice:", buah); // ["Apel", "Jeruk", "Mangga"]

// Mulai dari indeks 1 ("Jeruk"), hapus 0 elemen, lalu sisipkan "Anggur"
// buah.splice(1, 0, "Anggur");
// buah.push("Kelengkeng");
// buah.pop();
// buah.shift();
// buah.unshift("Matoa");
// buah.sort();

console.log("Sesudah splice:", buah);

// Contoh Kodingan Salinan / Immutability (Immutable)
// 1. Menggunakan Spread Operator (...)
const warnaAsli = ["Merah", "Biru"];
// Menyalin array asli dan menambahkan elemen baru di belakangnya
const warnaBaru = [...warnaAsli, "Hijau"];

console.log("Array Asli (Tetap Aman):", warnaAsli);
// Output: ["Merah", "Biru"]

console.log("Array Baru (Hasil Salinan):", warnaBaru);
// Output: ["Merah", "Biru", "Hijau"]

// 2. Menggunakan Metode map()
const angka = [1, 2, 3];
// Mengalikan setiap angka dengan 2
const angkaKaliDua = angka.map(function (num) {
  return num * 2;
});

console.log("Array Asli (Tetap Aman):", angka);
// Output: [1, 2, 3]

console.log("Array Hasil Map:", angkaKaliDua);

// 3. Menggunakan Metode filter()
const nilaiUjian = [75, 80, 55, 90, 60];
// Hanya mengambil nilai yang di atas atau sama dengan 75
const nilaiLulus = nilaiUjian.filter(function (nilai) {
  return nilai >= 75;
});

console.log("Array Asli (Tetap Aman):", nilaiUjian);
// Output: [75, 80, 55, 90, 60]

console.log("Array Hasil Filter:", nilaiLulus);

// 4. Menggunakan Metode concat()
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];

// Menggabungkan array frontend dan backend
const fullstack = frontend.concat(backend);

console.log("Array Frontend (Tetap Aman):", frontend);
// Output: ["HTML", "CSS"]

console.log("Array Gabungan Baru:", fullstack);

// 2. Metode Array Utama (find, filter, map, reduce)
// find: Mencari satu item pertama yang cocok (misal: cari siswa dengan ID tertentu). Mengembalikan 1 objek.

// filter: Menyaring banyak item berdasarkan kondisi tertentu (misal: saring siswa yang nilainya di atas 80). Mengembalikan array baru.

// map: Mengubah setiap item di dalam array menjadi bentuk baru (misal: mengubah array nama mentah menjadi elemen HTML <li>). Mengembalikan array baru dengan panjang yang sama.

// reduce: Mereduksi/meringkas array menjadi satu nilai akhir (misal: menghitung total harga belanjaan).

// 1. Metode find() — Mencari Satu Item Pertama
const daftarSiswa = [
  { id: 1, nama: "Budi", nilai: 85 },
  { id: 2, nama: "Ani", nilai: 90 },
  { id: 3, nama: "Siti", nilai: 75 },
];

// Mencari siswa yang memiliki ID = 2
const siswaDicari = daftarSiswa.find(function (siswa) {
  return siswa.id === 2;
});

console.log(siswaDicari);

// 2. Metode filter() — Menyaring Banyak Item
const daftarSiswa2 = [
  { id: 1, nama: "Budi", nilai: 70 },
  { id: 2, nama: "Ani", nilai: 90 },
  { id: 3, nama: "Siti", nilai: 85 },
];

// Menyaring siswa yang nilainya di atas atau sama dengan 80
const siswaLulus = daftarSiswa2.filter(function (siswa) {
  return siswa.nilai >= 80;
});

console.log(siswaLulus);

// 3. Metode map() — Mengubah Setiap Item
const namaSiswa = ["Budi", "Ani", "Siti"];

// Mengubah array nama mentah menjadi elemen HTML <li> untuk ditampilkan di web
const listHTML = namaSiswa.map(function (nama) {
  return `<li>${nama}</li>`;
});

console.log(listHTML);

// 4. Metode reduce() — Meringkas Menjadi Satu Nilai
const hargaBelanjaan = [50000, 25000, 10000];

// Menghitung total harga belanjaan
const totalHarga = hargaBelanjaan.reduce(function (akumulator, harga) {
  return akumulator + harga;
}, 0); // Angka 0 adalah nilai awal akumulator

console.log(totalHarga);
