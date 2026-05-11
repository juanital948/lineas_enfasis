const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brandNavy": "#0B2638",
  "brandGold": "#F3D941",
  "footerRed": "#850B0E",
  "cardRadius": "34px",
  "density": 1
}/*EDITMODE-END*/;

const ASSETS = {
  // Agrega aquí tus rutas locales cuando tengas los archivos oficiales.
  // Ejemplos: "assets/logo-superior.png", "assets/hero-inicio.jpg".
  topLogo: "",
  footerLogo: "",
  heroImage: "",
  newsOne: "",
  newsTwo: ""
};

const emphasisLines = [
  {
    title: "Desarrollo de Software",
    text: "Diseña, construye y despliega soluciones web, móviles y empresariales con prácticas modernas de ingeniería."
  },
  {
    title: "Analítica de Datos",
    text: "Convierte datos académicos y organizacionales en visualizaciones, modelos predictivos y decisiones accionables."
  },
  {
    title: "Ciberseguridad",
    text: "Protege infraestructuras, aplicaciones y datos mediante análisis de riesgos, pruebas y controles de seguridad."
  }
];

const news = [
  {
    image: ASSETS.newsOne,
    title: "Nuevo calendario para inscripción de líneas de énfasis",
    text: "Consulta fechas, requisitos y recomendaciones para seleccionar tu ruta académica.",
    date: "Actualización académica"
  },
  {
    image: ASSETS.newsTwo,
    title: "Encuentro con docentes asesores del programa",
    text: "Espacio para resolver dudas sobre perfiles, proyectos y continuidad curricular.",
    date: "Comunidad UdeMedellín"
  }
];

function applyAssets() {
  document.querySelectorAll("[data-asset]").forEach((slot) => {
    const key = slot.dataset.asset;
    const src = ASSETS[key];
    if (!src) return;
    slot.replaceChildren(Object.assign(document.createElement("img"), {
      src,
      alt: slot.getAttribute("aria-label") || "Imagen institucional"
    }));
  });
}

function renderEmphasisLines() {
  const container = document.querySelector("#emphasis-lines");
  container.innerHTML = emphasisLines.map((line) => `
    <article class="program-card">
      <div class="card-icon" aria-hidden="true"><span></span></div>
      <div>
        <h3>${line.title}</h3>
        <p>${line.text}</p>
        <button class="text-link" type="button">Ver más</button>
      </div>
    </article>
  `).join("");
}

function renderNews() {
  const container = document.querySelector("#news-list");
  container.innerHTML = news.map((item) => `
    <article class="news-item">
      <div class="image-slot news-image" aria-label="Imagen de noticia">
        ${item.image ? `<img src="${item.image}" alt="Imagen de noticia" />` : "<span>Imagen de noticia</span>"}
      </div>
      <div class="news-copy">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <time>${item.date}</time>
      </div>
    </article>
  `).join("");
}

function init() {
  applyAssets();
  renderEmphasisLines();
  renderNews();
}

document.addEventListener("DOMContentLoaded", init);
