// 1. Pilih form, isian, tabel, dan elemen pesan dengan querySelector
const form = document.querySelector("form");
const inputNama = document.querySelector("#nama_product");
const inputHarga = document.querySelector("#harga_jual");
const tabelBody = document.querySelector("table.data-table tbody");

// Membuat elemen penampung pesan dinamis secara otomatis di bawah header halaman
const pageHeader = document.querySelector(".page-header");
const elemenPesan = document.createElement("div");
elemenPesan.style.margin = "12px 0";
elemenPesan.style.fontWeight = "bold";
pageHeader.after(elemenPesan);

// Fungsi bantu untuk menampilkan pesan (sukses / error)
function tampilPesan(teks, error = false) {
  elemenPesan.textContent = teks;
  elemenPesan.style.color = error ? "#ef4444" : "#10b981"; // Merah untuk error, Hijau untuk sukses
}

// Fungsi bantu untuk menambahkan sel <td> ke dalam baris <tr>
function tambahSel(tr, isi) {
  const td = document.createElement("td");
  td.textContent = isi;
  tr.append(td);
}

// 2. Tangani event submit + preventDefault
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah halaman reload otomatis

    // Ambil nilai input dan bersihkan spasi berlebih
    const namaProduk = inputNama ? inputNama.value.trim() : "";
    const hargaProduk = inputHarga ? Number(inputHarga.value) : 0;

    // 3. Validasi minimal 2 aturan dengan pesan yang jelas
    if (namaProduk === "") {
      tampilPesan("⚠️ Gagal: Nama produk wajib diisi!", true);
      return;
    }

    if (Number.isNaN(hargaProduk) || hargaProduk <= 0) {
      tampilPesan("⚠️ Gagal: Harga harus berupa angka lebih besar dari 0!", true);
      return;
    }

    // 4. Tambah baris baru ke tabel dengan createElement + textContent
    if (tabelBody) {
      const tr = document.createElement("tr");
      
      // Kolom 1: Checkbox
      const tdCheck = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      tdCheck.append(checkbox);
      tr.append(tdCheck);

      // Kolom 2: Nama Produk
      tambahSel(tr, namaProduk);

      // Kolom 3: Kategori / Satuan (Contoh default)
      tambahSel(tr, "Sembako / Pcs");

      // Kolom 4: Harga Jual
      tambahSel(tr, "Rp " + hargaProduk.toLocaleString("id-ID"));

      // Kolom 5: Stok (Contoh default)
      tambahSel(tr, "10");

      // Kolom 6: Status Ketersediaan
      const tdStatus = document.createElement("td");
      const spanBadge = document.createElement("span");
      spanBadge.className = "badge badge-success";
      spanBadge.textContent = "● Tersedia";
      tdStatus.append(spanBadge);
      tr.append(tdStatus);

      // Kolom 7: Aksi
      tambahSel(tr, "✏️ 🗑️");

      // Tempel baris ke dalam tabel
      tabelBody.append(tr);
    }

    // 5. Kosongkan form dan tampilkan pesan sukses
    form.reset();
    tampilPesan("✅ Sukses: Produk baru berhasil ditambahkan!");
  });
}