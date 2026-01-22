// Selecciona todas las imágenes de la galería
const imagenes = document.querySelectorAll(".galeria img");
let indiceActual = 0;

// Crea el contenedor del modal (ventana de zoom)
const modal = document.createElement("div");
modal.id = "modalZoom";
modal.innerHTML = `
  <div class="modal-contenido">
    <span id="cerrarZoom">&times;</span>
    <span id="anterior" class="flecha">&#10094;</span>
    <img id="imagenZoom" src="" alt="Imagen ampliada">
    <span id="siguiente" class="flecha">&#10095;</span>
  </div>
`;
document.body.appendChild(modal);

const modalImg = document.getElementById("imagenZoom");
const cerrarBtn = document.getElementById("cerrarZoom");
const anteriorBtn = document.getElementById("anterior");
const siguienteBtn = document.getElementById("siguiente");

// Mostrar imagen al hacer clic
imagenes.forEach((img, index) => {
  img.addEventListener("click", () => {
    indiceActual = index;
    modal.style.display = "flex";
    mostrarImagen();
  });
});

// Función para mostrar imagen según índice actual
function mostrarImagen() {
  modalImg.src = imagenes[indiceActual].src;
}

// Navegación entre imágenes
siguienteBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarImagen();
});

anteriorBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
});

// Cerrar modal al hacer clic en la “X”
cerrarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
