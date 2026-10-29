const boton = document.getElementById("miBoton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  mensaje.textContent = "¡Lo lograste! 🎉 Tu web ya funciona ahora come yupi.";
});