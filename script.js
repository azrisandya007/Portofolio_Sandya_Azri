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
/* ===========================
   DARK MODE
=========================== */

const btn = document.getElementById("theme-toggle");

// Load theme
const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){

    document.body.classList.add("dark");
    btn.textContent="☀️";

}

// Toggle
btn.onclick=()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        btn.textContent="☀️";

        localStorage.setItem("theme","dark");

    }else{

        btn.textContent="🌙";

        localStorage.setItem("theme","light");

    }

};


