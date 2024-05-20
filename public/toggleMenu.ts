// toggleMenu.ts

// Selecciona el botón y el menú usando querySelector y añade tipos explícitos
const boton = document.querySelector<HTMLButtonElement>("#boton");
const menu = document.querySelector<HTMLElement>("#menu");

// Verifica que los elementos no sean nulos antes de agregar el event listener
if (boton && menu) {
  boton.addEventListener("click", () => {
    console.log("click");
    menu.classList.toggle("hidden");
  });
} else {
  console.error("El botón o el menú no se encontraron en el DOM.");
}
export {};