// 1. Object Parameter & Destructuring

// Tanpa destructuring
function tampilkanProfile(users) {
  users.map((user, index) => {
    console.log(user.nama, user.usia);
  });
}
// Dengan destructuring (lebih bersih)
function tampilkanProfil2({ nama, usia }) {
  console.log(`Nama: ${nama}, Usia: ${usia}`);
}
tampilkanProfil2({ nama: "Budi", usia: 25 });
const users = [
  {
    nama: "Andik",
    usia: 27,
  },
  {
    nama: "Santi",
    usia: 45,
  },
];
tampilkanProfile(users);

// 2. Rest & Spread Operator (...)
// Rest Operator dalam fungsi
function hitungSemua(...angka) {
  return angka.reduce((total, num) => total + num, 0);
  // .reduce() adalah metode bawaan JavaScript yang bertugas untuk meringkas atau mereduksi seluruh isi array menjadi satu nilai akhir (dalam hal ini, total penjumlahan).
}
console.log(hitungSemua(20, 30, 50));
// Spread Operator (...) adalah salah satu fitur modern di JavaScript (ES6) yang sangat sering dipakai. Sesuai namanya, operator ini berfungsi untuk "membuka" atau "menyebarkan" isi dari sebuah array atau object ke tempat baru.
// 1 Menyalin (Copying) Array
const buahAwal = ["Apel", "Jeruk"];
const salinanBuah = [...buahAwal, "Mangga"];
console.log(salinanBuah);
// 2 Menggabungkan (Combining) Array
const kelompokA = ["Budi", "Ani"];
const kelompokB = ["Siti", "Joko"];
const semuaPeserta = [...kelompokA, ...kelompokB];
console.log(semuaPeserta);
// 3 Menyalin & Menambah Properti Object
const user = { nama: "Rian", peran: "Instruktur" };
const userUpdate = { ...user, status: "Aktif" };
console.log(userUpdate);
// 4 Menggabungkan Dua Object
const dataPribadi = { nama: "Dewi", usia: 24 };
const dataPekerjaan = { profesi: "Web Developer", lokasi: "Jakarta" };

const profilLengkap = { ...dataPribadi, ...dataPekerjaan };

console.log(profilLengkap);

// Bagian 1: Scope (Cakupan Variabel)
// Global Scope (bisa diakses di mana saja)
const namaInstruktur = "Andi";

function cekScope() {
  // Local Scope (hanya hidup di dalam fungsi ini)
  const materiHariIni = "JavaScript Lanjutan";

  console.log(namaInstruktur); // Berhasil! Bisa akses variabel global
  console.log(materiHariIni); // Berhasil! Bisa akses variabel local
}

cekScope();

// Bagian 2: Closure
function buatPenghitung() {
  let angka = 0; // Variabel ini terlindungi (private)

  return function() {
    angka++; // Fungsi di dalam mengakses dan mengubah variabel 'angka' di luar
    return angka;
  };
}

// Memanggil fungsi utama
const hitungSiswa = buatPenghitung();

console.log(hitungSiswa());
console.log(hitungSiswa());
console.log(hitungSiswa()); 