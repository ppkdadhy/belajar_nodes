// src/08-input-terminal.js
import readline from 'readline';

// Membuat antarmuka (interface) untuk input dan output terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menanyakan input ke pengguna
rl.question('Masukkan nama produk kasir baru: ', (namaProduk) => {
  console.log(`\nBerhasil! Produk "${namaProduk}" telah direkam di sistem.`);
  
  // Menutup interface readline agar program berhenti berjalan
  rl.close();
});