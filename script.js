// JavaScript untuk navigasi
function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        sec.classList.remove('active');
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(20px)';
    });

    // Tampilkan section yang dipilih
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        setTimeout(() => {
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
        }, 50);
    }

    // Tutup menu hamburger jika terbuka (opsional untuk mobile)
    document.querySelector('.nav-container').classList.remove('open');
}

// Tampilkan beranda secara default
window.onload = () => showSection('beranda');

// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});