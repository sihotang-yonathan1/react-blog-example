# Blog React Website sederhana
Proyek ini adalah proyek sederhana dalam implementasi React dan Tailwind CSS dalam membuat website.  
Proyek ini menggunakan beberapa dependencies utama seperti `vite`, `react`, `tailwind`, dengan bahasa pemograman yang digunakan `Typescript`.  

Mohon kritik dan sarannya!

# KNOWN BUGS
- Routing pada program ini tidak bekerja ketika di luar lokal

# TODO:
- Sistem routing yang lebih baik  
  - Menggunakan routing asli (bukan fake berdasarkan `window.location.pathname`)
  - Mengatasi reload yang tidak perlu (mungkin dengan `event.preventDefault`)
  - Wajib bisa mengatasi pattern matching (contoh: `/blog/[id]`)
  
- Memecah peran `backend` and `frontend`
- Membuat sistem dark mode dan juga setting
- Mengunakan sistem kontainer (supaya tidak dapat masalah `it's work in my machine`, wkwkwk)
- Menambah sistem penambahan blog sekaligus login (mungkin bisa dengan sistem parsing dari HTML dan API yang umum)
- Menetapkan dan mewajibkan `code-style` dan `linting`
- Menambah testing
- Menambah dokumentasi fungsi

