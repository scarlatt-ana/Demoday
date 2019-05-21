let menuresponsivo = document.querySelector (".hamburguer");
let movimento = document.querySelector (".menu-responsivo");

 
function menuX(){
    movimento.classList.toggle("movimento");
}

menuresponsivo.onclick = menuX;


let mae = document.querySelector (".mae");
let pai = document.querySelector (".pai");
let deus = document.querySelector (".deus");
let hamburguer = document.querySelector (".hamburguer");


transformarX = () =>{
    hamburguer.classList.toggle("aventura");

}

hamburguer.onclick =  transformarX;


transformarO = () =>{
    mae.classList.toggle("billy");

}

mae.onclick =  transformarO;

