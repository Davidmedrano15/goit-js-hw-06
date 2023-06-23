const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
function updateNameOutput() {
  const name = nameInput.value.trim();

  if (name === "") {
    nameOutput.textContent = "Anónimo";
  } else {
    nameOutput.textContent = name;
  }
}

nameInput.addEventListener("input", updateNameOutput);

// Tarea 5
// Escriba un script que, cuando se escriba el texto en el input de input#nombre-input (evento input), sustituya su valor actual en span#name-output. Si el input está vacío, el span debería mostrar la secuencia "Anónimo".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
