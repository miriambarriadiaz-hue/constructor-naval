// Toggle abrir / cerrar chat
const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");

chatToggle.addEventListener("click", () => {
  chatContainer.classList.toggle("active");
});

// Enviar mensaje
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const messagesDiv = document.getElementById("messages");

  // Mensaje del usuario
  const userMsg = document.createElement("div");
  userMsg.textContent = "👤 " + message;
  userMsg.style.margin = "5px 0";
  messagesDiv.appendChild(userMsg);

  input.value = "";

  // Respuesta automática
  const reply = getAutoReply(message.toLowerCase());

  const botMsg = document.createElement("div");
  botMsg.textContent = "🤖 " + reply;
  botMsg.style.color = "#0b3d91";
  botMsg.style.margin = "5px 0";
  messagesDiv.appendChild(botMsg);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// ===============================
// RESPUESTAS AUTOMÁTICAS
// ===============================
function getAutoReply(input) {
  if (input.includes("hola")) 
    return "¡Hola! 😊 Bienvenido al Constructor Naval Daniel Barría. ¿En qué podemos ayudarte?";

  if (input.includes("buenas")) 
    return "¡Buenas! ⚓ Gracias por visitarnos.";

  if (input.includes("nombre")) 
    return "Somos el taller Constructor Naval Daniel Barría, con tradición en carpintería de ribera chilota.";

  if (input.includes("servicio") || input.includes("hacen")) 
    return "Realizamos construcción y restauración de embarcaciones tradicionales de madera.";

  if (input.includes("ubicación") || input.includes("donde")) 
    return "Nos encontramos en San Juan, Dalcahue — Chiloé.";

  if (input.includes("contacto") || input.includes("correo") || input.includes("telefono")) 
    return "Puedes escribirnos a danielconstructornaval@gmail.com o llamarnos al +56 9 6815 2504 📞";

  if (input.includes("gracias")) 
    return "¡Gracias a ti por contactarnos! 🚤";

  if (input.includes("adiós") || input.includes("chao")) 
    return "Hasta pronto 👋. ¡Que tengas una excelente jornada!";

  return "Para consultas, puedes escribirnos a danielconstructornaval@gmail.com o llamarnos al +56 9 6815 2504.";
}
