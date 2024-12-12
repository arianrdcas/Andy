function initMenuToggle() {
  // Selecciona el botón y el menú usando querySelector y añade tipos explícitos
  const boton = document.querySelector("#boton");
  const menu = document.querySelector("#menu");

  // Selecciona los íconos de hamburguesa y de cruz
  const hamburgerIcon = document.querySelector("#hamburger-icon");
  const closeIcon = document.querySelector("#close-icon");

  // Verifica que los elementos no sean nulos antes de agregar el event listener
  if (boton && menu && hamburgerIcon && closeIcon) {
    console.log("Elementos encontrados, inicializando menú...");
    boton.addEventListener("click", () => {
      console.log("Botón clicado");
      menu.classList.toggle("hidden");
      hamburgerIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });
  } else {
    console.error(
      "El botón, el menú o los íconos no se encontraron en el DOM."
    );
  }
}

// Inicializa el menú cuando el contenido esté cargado
document.addEventListener("DOMContentLoaded", initMenuToggle);

// Vuelve a inicializar el menú después de una navegación con ViewTransition
document.addEventListener("astro:after-swap", initMenuToggle);
