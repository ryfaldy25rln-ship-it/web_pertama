// Contoh JavaScript: Menambahkan efek saat scroll
// (Misalnya, mengubah ukuran header setelah scroll)

const header = document.querySelector('header');
const heroHeight = document.querySelector('.hero').offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > heroHeight - 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Tambahkan CSS ini ke style.css:
/*
.scrolled {
    padding: 0.5rem 0; // Mengurangi padding header saat di-scroll
}
*/ 
// Fungsi untuk membuka/menutup Keranjang (Cart Drawer)
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    
    // Toggle class 'active' untuk menampilkan/menyembunyikan
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Tambahan: Menonaktifkan scroll di body saat keranjang terbuka
    document.body.classList.toggle('no-scroll', drawer.classList.contains('active'));
}

// Tambahkan event listener ke ikon keranjang di header
document.addEventListener('DOMContentLoaded', () => {
    // Pastikan Anda menargetkan ikon keranjang yang benar di HTML (item 🛒 di nav)
    const cartIcon = document.querySelector('nav a[href="#"].nav-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah pindah halaman
            toggleCart();
        });
    }
});