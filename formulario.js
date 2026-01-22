// formulario.js — manejo del formulario de contacto

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");
  const estado = document.getElementById("estadoEnvio");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Mensaje de confirmación
    estado.textContent = "📨 Gracias por contactarnos. Te responderemos lo más pronto posible.";
    estado.style.color = "#0b3d91";
    estado.style.fontWeight = "bold";

    // Limpia los campos después de un par de segundos
    setTimeout(() => {
      form.reset();
    }, 2000);
  });
});
