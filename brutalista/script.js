// Gaming Center - Brutalist Interactive Script

// Cases Portfolio Database
const eventDatabase = {
  cocacola: {
    title: "Coca-Cola",
    client: "Coca-Cola / Torneo & Arte",
    desc: "Desplegamos una experiencia inmersiva de Graffiti en Realidad Virtual donde los asistentes crearon arte digital que luego imprimimos físicamente al instante como stickers y posters. Complementamos la activación con la renta e instalación de un set completo de cómputo de alto rendimiento para el torneo oficial de eSports del evento.",
    tags: ["Realidad Virtual", "Graffiti VR", "Impresión en Vivo", "Torneo eSports", "Renta de Equipo"],
    images: [
      "../fotos_p/eventos/cocacola/20230614_193516.jpg",
      "../fotos_p/eventos/cocacola/20230614_155936.jpg",
      "../fotos_p/eventos/cocacola/20230614_193504.jpg",
      "../fotos_p/eventos/cocacola/Gemini_Generated_Image_nzr72nnzr72nnzr7.png"
    ]
  },
  doritos: {
    title: "Doritos",
    client: "Doritos / Experiencias VR",
    desc: "Diseñamos y programamos dos experiencias en Realidad Virtual personalizadas con los assets gráficos y branding de Doritos: 1) Simulación de Skysurfing, donde los participantes volaban a través de checkpoints de Doritos hasta llegar al campamento principal. 2) Richie's Plank Walk, recreando una viga de acero suspendida a 80 pisos de altura donde el reto era caminar al vacío, agarrar una bolsa de Doritos y regresar a salvo al ascensor.",
    tags: ["Desarrollo VR", "Branding a Medida", "Simuladores", "Experiencia Extrema"],
    images: [
      "../fotos_p/eventos/doritos/doritos.jpg",
      "../fotos_p/eventos/doritos/2.jpg"
    ]
  },
  takisedc: {
    title: "Takis EDC",
    client: "Takis / EDC Festival",
    desc: "Instalamos una espectacular cabina interactiva de baile en el festival EDC, integrando tecnología de tracking corporal completo (full body tracking). Los participantes bailaban al ritmo del juego y veían su avatar 3D en tiempo real vistiendo la marca Takis. También implementamos Graffiti VR e impresión instantánea de stickers memorables.",
    tags: ["Full Body Tracking", "Graffiti VR", "Edición de Stickers", "Activación Musical"],
    images: [
      "../fotos_p/eventos/takisedc/20250222_182708.jpg",
      "../fotos_p/eventos/takisedc/20250222_182358.jpg",
      "../fotos_p/eventos/takisedc/20250222_182728.jpg",
      "../fotos_p/eventos/takisedc/20250223_202822.jpg",
      "../fotos_p/eventos/takisedc/20250223_203619.jpg"
    ]
  },
  ccxp: {
    title: "CCXP México",
    client: "CCXP / Renta VR",
    desc: "Operamos un stand masivo de Realidad Virtual para miles de fanáticos del entretenimiento en la CCXP. Proveímos lentes de Realidad Virtual autónomos con contenido de entretenimiento preconfigurado y staff técnico especializado para gestionar las filas de espera rápidas, garantizando una rotación constante y óptimo cuidado sanitario del equipo.",
    tags: ["Renta de Lentes VR", "Soporte Técnico", "Gestión de Filas", "Masivo"],
    images: [
      "../fotos_p/eventos/ccxp/20240505_193808.jpg",
      "../fotos_p/eventos/ccxp/20240505_193828.jpg",
      "../fotos_p/eventos/ccxp/20240505_193856.jpg"
    ]
  },
  f1nascar: {
    title: "F1 & NASCAR",
    client: "F1 - Nascar / Racing Simulators",
    desc: "Instalamos cockpits de carreras profesionales equipados con volantes de torque directo, pedales hidráulicos y pantallas curvas Ultra-Wide. Los simuladores corrían circuitos oficiales con el branding de los patrocinadores integrados dentro del propio juego, ofreciendo a los entusiastas de la velocidad la experiencia más realista posible de conducir un monoplaza.",
    tags: ["Simuladores de Carreras", "Volantes Direct Drive", "Branding In-Game", "Competición"],
    images: [
      "../fotos_p/eventos/f1/20240521_135831.jpg"
    ]
  },
  halo: {
    title: "Halo Championship",
    client: "Halo Championship / LAN & Broadcast",
    desc: "Llevamos a cabo la producción técnica y de red para uno de los torneos competitivos de eSports más grandes del año. Diseñamos elementos gráficos animados de transición de escenas y desarrollamos un switch inteligente de transmisiones en tiempo real de la cámara de los jugadores. Garantizamos una infraestructura LAN estructurada con fibra óptica local interna, logrando latencia de 0 ms entre competidores.",
    tags: ["Redes Estructuradas", "Broadcast eSports", "Switcher Inteligente", "Transiciones en Vivo"],
    images: [
      "../fotos_p/eventos/halo/IMG_20220724_230538.jpg",
      "../fotos_p/eventos/halo/IMG_20191220_171900.jpg",
      "../fotos_p/eventos/halo/IMG_20191220_171939.jpg"
    ]
  },
  liverpool: {
    title: "Liverpool",
    client: "Liverpool / Activaciones en Tienda",
    desc: "Configuramos múltiples islas interactivas de videojuegos en tiendas departamentales de Liverpool de todo el país. La activación incluyó la renta e instalación de pantallas UHD, consolas de última generación (PS5/Xbox Series), mobiliario gamer a medida y embajadores de marca que coordinaban retos rápidos 'Torneos Flash' para atraer y enganchar a clientes potenciales.",
    tags: ["Activación Departamental", "Consolas eSports", "Torneo Flash", "Retención de Clientes"],
    images: [
      "../fotos_p/eventos/liverpool/20240818_142735.jpg",
      "../fotos_p/eventos/liverpool/20240818_140430.jpg",
      "../fotos_p/eventos/liverpool/20240818_141330.jpg",
      "../fotos_p/eventos/liverpool/20240818_142246.jpg"
    ]
  }
};

// State Variables for Modal Gallery
let currentEventKey = "";
let currentImgIndex = 0;

// Elements DOM
const modal = document.getElementById("galleryModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTags = document.getElementById("modalTags");
const modalImg = document.getElementById("modalMainImg");
const modalThumbs = document.getElementById("modalThumbs");
const closeBtn = document.getElementById("modalClose");
const prevBtn = document.getElementById("modalPrev");
const nextBtn = document.getElementById("modalNext");

// Setup Modal Click listeners
document.querySelectorAll("[data-event]").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-event");
    openGalleryModal(key);
  });
});

function openGalleryModal(key) {
  const data = eventDatabase[key];
  if (!data) return;
  
  currentEventKey = key;
  currentImgIndex = 0;
  
  modalTitle.textContent = data.client;
  modalDesc.textContent = data.desc;
  
  // Clean tags
  modalTags.innerHTML = "";
  data.tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "portfolio-tag";
    span.textContent = tag;
    modalTags.appendChild(span);
  });
  
  // Set Main Image
  updateModalImage();
  
  // Thumbnails
  modalThumbs.innerHTML = "";
  data.images.forEach((imgSrc, idx) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.className = `modal-thumb ${idx === 0 ? "active" : ""}`;
    img.alt = `Thumbnail ${idx + 1}`;
    img.addEventListener("click", () => {
      currentImgIndex = idx;
      updateModalImage();
    });
    modalThumbs.appendChild(img);
  });
  
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // disable scroll
}

function updateModalImage() {
  const images = eventDatabase[currentEventKey].images;
  modalImg.src = images[currentImgIndex];
  
  // Update thumb highlight
  const thumbs = modalThumbs.querySelectorAll(".modal-thumb");
  thumbs.forEach((thumb, idx) => {
    if (idx === currentImgIndex) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

// Nav Buttons inside Modal
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const images = eventDatabase[currentEventKey].images;
  currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
  updateModalImage();
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const images = eventDatabase[currentEventKey].images;
  currentImgIndex = (currentImgIndex + 1) % images.length;
  updateModalImage();
});

// Close Modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = ""; // enable scroll
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ESC key closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});


// ----------------------------------------------------
// MOBILE MENU TOGGLER
// ----------------------------------------------------

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
  
  // Close menu when clicking any link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

// ----------------------------------------------------
// CONTACT FORM SUBMISSION HOOK
// ----------------------------------------------------

const contactForm = document.getElementById("quotesForm");
const toast = document.getElementById("toastNotification");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById("formName").value;
    const email = document.getElementById("formEmail").value;
    
    // Simulate send
    showToast(`¡Gracias ${name}! Hemos recibido tu solicitud de cotización. Nos pondremos en contacto al correo: ${email}`);
    
    // Reset Form
    contactForm.reset();
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

