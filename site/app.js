const copy = {
  en: {
    brand: "Vision Document Scanner",
    tagline: "OpenCV scan pipeline",
    repo: "Repository",
    usage: "Usage",
    eyebrow: "Computer vision utility",
    headline: "Turn a rough document photo into a clean scan.",
    lede: "The tool detects page edges, corrects perspective, and exports a high contrast image from one terminal command.",
    inputPhoto: "Input photo",
    detect: "detect",
    warp: "warp",
    threshold: "threshold",
    cleanScan: "Clean scan",
    edgeTitle: "Edge detection",
    edgeCopy: "Canny edges and contour ranking locate the strongest page-like shape in the image.",
    perspectiveTitle: "Perspective correction",
    perspectiveCopy: "A four point transform straightens the page and crops away the background.",
    outputTitle: "Readable output",
    outputCopy: "Adaptive thresholding produces a crisp black and white image ready for storage or sharing."
  },
  es: {
    brand: "Vision Document Scanner",
    tagline: "Pipeline de escaneo con OpenCV",
    repo: "Repositorio",
    usage: "Uso",
    eyebrow: "Herramienta de vision computacional",
    headline: "Convierte una foto torcida en un escaneo limpio.",
    lede: "Detecta bordes, corrige perspectiva y exporta una imagen de alto contraste con un solo comando.",
    inputPhoto: "Foto original",
    detect: "detectar",
    warp: "enderezar",
    threshold: "limpiar",
    cleanScan: "Escaneo limpio",
    edgeTitle: "Deteccion de bordes",
    edgeCopy: "Canny y ranking de contornos ubican la forma de pagina mas fuerte en la imagen.",
    perspectiveTitle: "Correccion de perspectiva",
    perspectiveCopy: "Una transformacion de cuatro puntos endereza la hoja y recorta el fondo.",
    outputTitle: "Salida legible",
    outputCopy: "El threshold adaptativo produce una imagen nitida lista para guardar o compartir."
  }
};

let lang = "en";
const toggle = document.querySelector(".language-switch");

function applyLanguage(nextLang) {
  lang = nextLang;
  document.documentElement.lang = lang;
  toggle.setAttribute("aria-pressed", String(lang === "es"));
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const value = copy[lang][node.dataset.i18n];
    if (value) node.textContent = value;
  });
}

toggle.addEventListener("click", () => applyLanguage(lang === "en" ? "es" : "en"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.18 });

document.querySelectorAll("[data-reveal]").forEach(node => observer.observe(node));
applyLanguage(lang);
