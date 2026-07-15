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
const toggle = document.getElementById("theme-toggle");

// cek localStorage
const savedTheme = localStorage.getItem("theme");

// jika belum ada, ikuti sistem
if(!savedTheme){

    if(window.matchMedia("(prefers-color-scheme: dark)").matches){

        document.body.classList.add("dark-mode");
        toggle.textContent="☀️";

    }

}else{

    document.body.classList.toggle("dark-mode",savedTheme==="dark");
    toggle.textContent=savedTheme==="dark" ? "☀️":"🌙";

}

toggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    const dark=document.body.classList.contains("dark-mode");

    toggle.textContent=dark ? "☀️":"🌙";

    localStorage.setItem("theme",dark?"dark":"light");

});
