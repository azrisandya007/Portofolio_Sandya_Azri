// =========================================================================
// KODE LAMA KAMU (Fitur Interaktif: Mengubah menu aktif saat scroll)
// =========================================================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// =========================================================================
// KODE BARU (Logika Tombol Dark / Light Mode)
// =========================================================================
const themeCheckbox = document.getElementById('theme-checkbox');

// 1. Cek apakah di browser kamu sebelumnya sudah pernah pilih dark mode
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeCheckbox.checked = true;
}

// 2. Efek ketika tombol toggle diklik/digerakkan
themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Simpan pilihan dark ke memori browser
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Simpan pilihan light ke memori browser
    }
});
