let menuresponsivo = document.querySelector (".hamburguer");
let movimento = document.querySelector (".menu-responsivo");

 
function menuX(){
    movimento.classList.toggle("movimento");
}

menuresponsivo.onclick = menuX;


let span1 = document.querySelector (".mae");
let span2 = document.querySelector (".pai");
let span3 = document.querySelector (".deus");
let hamburguer = document.querySelector (".hamburguer");

criarUmX = () =>{
    span1.classList.toggle("spanSuperior");
    span2.classList.toggle("spanMeio");
    span3.classList.toggle("spanInferior");
}
hamburguer.onclick=criarUmX;
