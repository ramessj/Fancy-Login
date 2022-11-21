const inputs = document.querySelectorAll("input, select, textarea");

inputs.forEach((input) => {
  input.addEventListener(
    "invalid",
    (event) => {
      input.classList.add("error");
    },
    false
  );
});

let form = document.getElementById("registro");
let textoDer = document.getElementById("textoDer");
let loggedIn = document.getElementById("loggedIn");
let nombre = document.getElementById("nombre");




form.addEventListener("submit", (e) => {
  e.preventDefault();

  
      form.classList.add("hidden");
    textoDer.classList.add("hidden");

    loggedIn.innerHTML = `Bienvenido ${nombre.value}`;
    loggedIn.classList.remove("hidden");
  

   
  
});
