 // Efectos al hacer scroll
 document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    sections.forEach((section) => observer.observe(section));
});

//efectos de las imagenes
    const images = ["img/logoapp.png", "img/img2.jpg", "img/img3.jpg"];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById("myImage").src = images[currentIndex];
    }, 3000); // Cambia cada 3 segundos

    
    