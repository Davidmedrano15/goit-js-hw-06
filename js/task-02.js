const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.getElementById("ingredients"); // Obtener la lista <ul> por su ID

ingredients.forEach((ingredient) => {
  const li = document.createElement("li"); // Crear un elemento <li>
  li.textContent = ingredient; // Añadir el nombre del ingrediente como contenido de texto
  li.classList.add("item"); // Añadir la clase "item" al elemento <li>
  ul.appendChild(li); // Insertar el elemento <li> dentro de la lista <ul>
});

// Tarea 2
// HTML tiene una lista vacía ul#ingredients.

// <ul id="ingredients"></ul>

// En JavaScript hay una array de secuencias.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Escriba un script que para cada elemento del array ingredients:

// Cree un elemento separado <li>. Asegúrese de usar el método document.createElement().
// Añada el nombre de un ingrediente como contenido de texto.
// Añada una clase item al elemento.
// Después, inserte todos los <li> en una sola operación en la lista ul#ingredients.