function getName() {
    const params = new URLSearchParams(document.location.search);
    const name = params.get("usuario");
    document.getElementById("name").innerHTML = name;
}
 
function setClass() {
 var tarjetas = document.querySelectorAll("div")
  for (var i = 0; i < tarjetas.length; i++) {
      tarjetas[i].classList.add("tarjeta")      
  }
}

setClass();
getName();