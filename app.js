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
let nombre = document.getElementById("nombre")


const checkPasswd = ()=>{
  let password1 = document.getElementById("passwd").value;
  let password2 = document.getElementById("passwd2").value;
  if (password1 === password2){
    return true;
  }
  else {return false};
  
}


const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e)=> {

  e.preventDefault();

 let pass =  checkPasswd();

  if (pass){   
    
    form.classList.add("hidden")
    textoDer.classList.add("hidden")
    
    loggedIn.innerHTML = `Bienvenido ${nombre.value}`
    loggedIn.classList.remove("hidden");




  }
  else{
    
        
    return
  }
   
  }
);


