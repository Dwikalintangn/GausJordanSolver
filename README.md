# 🧮 Gauss-Jordan Matrix Solver

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

Aplikasi kalkulator berbasis web untuk menyelesaikan sistem persamaan linear dan operasi matriks menggunakan metode **Eliminasi Gauss-Jordan**. Aplikasi ini dirancang untuk membantu pelajar dan mahasiswa memahami proses eliminasi langkah demi langkah (step-by-step).

## ✨ Fitur Utama

- **Penyelesaian Step-by-Step**: Menampilkan perubahan matriks pada setiap tahapan (Normalisasi & Eliminasi).
- **Grid Dinamis**: Pengguna dapat menentukan jumlah baris dan kolom sesuai kebutuhan (hingga 6x7).
- **Partial Pivoting**: Menggunakan teknik pertukaran baris untuk menjaga akurasi perhitungan dan menghindari pembagian dengan nol.
- **Dark Mode**: Dukungan mode gelap/terang yang mandiri dan nyaman di mata.
- **Responsive Design**: Tampilan optimal di berbagai perangkat berkat Tailwind CSS.

## 🚀 Teknologi yang Digunakan

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Struktur halaman.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS untuk styling cepat dan modern.
- [JavaScript (Vanilla)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Logika algoritma Gauss-Jordan dan manipulasi DOM.

## 🛠️ Instalasi & Penggunaan

Tidak perlu instalasi rumit! Cukup ikuti langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/Dwikalintangn/GausJordanSolver.git](https://github.com/Dwikalintangn/GausJordanSolver.git)
    ```
2.  **Masuk ke direktori project:**
    ```bash
    cd GausJordanSolver
    ```
3.  **Buka file `index.html`:**
    Klik dua kali pada file `index.html` di browser favorit kamu (Chrome, Firefox, atau Edge).

## 📖 Cara Menggunakan

1.  Masukkan jumlah **Baris** dan **Kolom** pada bagian atas.
2.  Klik tombol **Update Grid** untuk membuat kotak input matriks.
3.  Isi angka-angka matriks kamu ke dalam kotak yang tersedia.
4.  Klik **Mulai Hitung** untuk melihat proses eliminasi langkah demi langkah hingga hasil akhir (Matriks Eselon Baris Tereduksi).

## 📸 Tampilan Aplikasi

| Light Mode                                                                         | Dark Mode                                                                        |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ![Light Mode Preview](asset/img/views_Lightmode.png) | ![Dark Mode Preview](asset/img/views_Darkmode.png) |

## 🤝 Kontribusi

Kontribusi selalu terbuka! Jika Anda ingin meningkatkan algoritma atau mempercantik tampilan:

1. Fork proyek ini.
2. Buat branch fitur baru (`git checkout -b fitur-baru`).
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`).
4. Push ke branch (`git push origin fitur-baru`).
5. Buat Pull Request.

## 📄 Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat file `LICENSE` untuk informasi lebih lanjut.

---

Dibuat dengan ❤️ oleh [Dwikalintangn](https://github.com/Dwikalintangn)


