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


let password = document.getElementById("passwd");
let password2 = document.getElementById("passwd2").value;

// no puedo leer el password desde el js

const checkPasswd = ()=>{
  console.log(password);
}


const submitButton = document.getElementById("submit");
submitButton.addEventListener("submit", checkPasswd);


