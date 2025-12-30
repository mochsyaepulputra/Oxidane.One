// Mengambil elemen tombol hamburger dan navigasi
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    // 1. Fungsi saat hamburger diklik (Buka/Tutup)
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah klik ini terdeteksi sebagai "klik luar"
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 2. Menutup menu jika salah satu link di dalam nav diklik
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 3. FITUR BARU: Menutup menu jika mengklik di luar area navbar
    window.addEventListener('click', (e) => {
        // Cek jika menu sedang aktif DAN yang diklik bukan navMenu DAN bukan hamburger
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}