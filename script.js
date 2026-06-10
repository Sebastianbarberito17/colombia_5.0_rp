document.addEventListener("DOMContentLoaded", () => {
  // --- MENÚ RESPONSIVE ---
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      
      // Cambiar icono del menú responsive de barras a X al abrir
      const icon = menuToggle.querySelector("i");
      if(icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Cerrar el menú al hacer click en algún enlace (Mobile)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const icon = menuToggle.querySelector("i");
        if(icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // --- EFECTO SCROLL REVEAL ANIMATIONS ---
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  const checkReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("revealed");
      }
    });
  };

  // Escuchar evento de scroll y ejecutar inicialmente
  window.addEventListener("scroll", checkReveal);
  checkReveal();
});document.addEventListener("DOMContentLoaded", () => {
  // --- MENÚ RESPONSIVE ---
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      
      // Cambiar icono del menú responsive de barras a X al abrir
      const icon = menuToggle.querySelector("i");
      if(icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Cerrar el menú al hacer click en algún enlace (Mobile)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const icon = menuToggle.querySelector("i");
        if(icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // --- EFECTO SCROLL REVEAL ANIMATIONS ---
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  const checkReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("revealed");
      }
    });
  };

  // Escuchar evento de scroll y ejecutar inicialmente
  window.addEventListener("scroll", checkReveal);
  checkReveal();
});