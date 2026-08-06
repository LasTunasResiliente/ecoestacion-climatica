/*=========================================
    MENÚ HAMBURGUESA
=========================================*/

function abrirMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("activo");

}

/*=========================================
    CERRAR MENÚ AL HACER CLIC
=========================================*/

const enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        document.getElementById("menu").classList.remove("activo");

    });

});

/*=========================================
    BOTÓN VOLVER ARRIBA
=========================================*/

const botonArriba = document.getElementById("volver-arriba");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        botonArriba.style.display = "block";

    } else {

        botonArriba.style.display = "none";

    }

});

botonArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
    ANIMACIONES AL HACER SCROLL
=========================================*/

const elementos = document.querySelectorAll(".animar");

function mostrarElementos() {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if (posicion < pantalla - 120) {

            elemento.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

/*=========================================
    SOMBRA DEL HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "0 4px 15px rgba(0,0,0,.15)";

    }

});