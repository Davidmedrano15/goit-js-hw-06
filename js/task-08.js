document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
      alert("Todos los campos deben ser completados");
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      console.log(formData);
      loginForm.reset();
    }
  });
});

// Tarea 8
// Escriba un script para controlar el formulario de acceso.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// El procesamiento de form.login-form debe ser por el evento submit.
// La página no debe recargarse cuando se envía el formulario.
// Si hay espacios en blanco en el formulario, aparecerá alert con una advertencia diciendo que todos los espacios deben ser rellenados.
// Si el usuario ha rellenado todos los espacios y ha enviado el formulario, reúne los valores de los espacios en donde el nombre del espacio es el nombre de la propiedad y el valor del espacio es la propiedad. Use la propiedad elements para acceder a los elementos del formulario.
// Muestre el objeto con los datos introducidos en la consola y borre los valores de los camposespacio del formulario usando el método reset.