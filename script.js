
const opciones = document.querySelector(".opciones");
const icono_navegacion = document.querySelector(".icono_navegacion");
const salir = document.querySelector(".salir");

icono_navegacion.addEventListener("click", () => {
    opciones.classList.remove("cerrar"); 
    opciones.classList.add("flex"); 
});

salir.addEventListener("click", () =>{
    opciones.classList.add("cerrar");
    opciones.classList.remove("flex");
})

window.addEventListener("scroll", function(){
    const opciones = document.querySelector(".opciones");
    const barra_navegacion = document.querySelector(".barra_navegacion");
    const scroll = barra_navegacion.getBoundingClientRect();

    if(scroll.top <= 0 && scroll.bottom>=0){
        barra_navegacion.classList.add("opacidad");
    }else{
        barra_navegacion.classList.remove("opacidad"); 
    };
});

window.addEventListener('resize', changeScreen);

function changeScreen(e) {
    const width = e.target.innerWidth;

    if (width > 412 ) {
        opciones.classList.remove("cerrar"); 
        opciones.classList.remove("flex"); 
    }
}


const llamado_accion = document.querySelector(".llamado-accion")
const padre = document.querySelector(".cuerpo");
padre.appendChild(llamado_accion);




