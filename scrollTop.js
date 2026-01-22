// Referencia al botón
const btnArriba = document.getElementById("btnArriba");

// Mostrar el botón al bajar 300px
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
};

// Volver arriba con desplazamiento suave
btnArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
