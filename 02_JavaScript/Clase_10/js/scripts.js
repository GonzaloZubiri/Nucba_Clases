// document.addEventListener('DOMContentLoaded', () => {

//     /** Obtiene el hero con las imagenes */
//     const imagenHero = document.querySelector('.hero');

//     /** Arreglo de imagenes con fondo */
//     const imagenes = ['arriba2.jpg', 'arriba.jpg' ];

//     /**Inicializadores */
//     let i = 0;
//     let tiempo = 0;
//     setInterval( () => {
//         imagenHero.style.backgroundPositionY =  '-'+tiempo+'px';
//         // console.log(tiempo);
//         if(tiempo > 40) {
//             tiempo = 0;
//             imagenHero.style.backgroundImage = "url(../img/"+imagenes[i]+")";

//             if(i === imagenes.length - 1) {
//                 i = 0;
//             } else {
//                 i++;
//             }
//         }

//         tiempo += 1;
//     }, 100);
// });



// Boton Flotante con el footer
// const btnFlotante = document.querySelector('.btn-flotante');

// btnFlotante.addEventListener('click', function() {


//     const footer = document.querySelector('.footer');


//     if( footer.classList.contains('activo') ) {
//         footer.classList.remove('activo');
//         this.classList.remove('activo');
//         this.innerText = 'Idioma y Moneda';
//     } else {
//         footer.classList.add('activo');
//         this.classList.add('activo');
//         this.innerText = 'X Cerrar';
//     }

// });



/*--------------------------------------------------------------------------*/




//captura el evento cuando pasa el cursor sobre el NavBar
// const nav = document.querySelector("body > div > header > nav");
// nav.addEventListener("mouseenter", ()=> {
//     console.log("Entrando en el Nav");
//     nav.style = "background:blue";
// });

// nav.addEventListener("mouseout", ()=> {
//     console.log("Saliendo del nav");
//     nav.style = "background:red";
// });


// nav.addEventListener("click", ()=> {
//     console.log("Entrando en el Nav");
//     nav.style = "background:blue";
// });


// window.addEventListener("scroll", () => {
//     // const scrollY = window.scrollY;
//     // // console.log(scrollY);
//     // if (scrollY >= 1500) {
//     //     console.log(scrollY);
//     // }


//     const premium = document.querySelector(".premium");
//     // console.log(premium);
//     const ubicacion = premium.getBoundingClientRect();
//     // console.log(ubicacion);
//     if (ubicacion.top < 760) {
//         console.log("Elemento visible");
//     } else {
//         console.log("No esta visible");
//     };

// });


// const input = document.querySelector(".busqueda");
// console.log(input);
// input.addEventListener("blur", (e) => {  //Es lo mismo utilizar la letra "e" como parametro que la palabra "event"
//     // console.log(e);
//     // console.log("Ejecuta el blur");
//     e.target.placeholder = "Nuevas modificaciones del placeholder";
//     e.target.style.background = "red";
//     e.target.className = "contenedor";
// });

// input.addEventListener("focus", (e) => {
//     // console.log(e);
//     e.target.style.background = "";
//     e.target.placeholder = "New York, Londres, Roma, Guadalajara";
//     e.target.className = "";
// });


// Otra forma de hacerlo con funciones (osea llamando a funciones para no tener que hacr tanto codigo repetido en cada AddEventlistener) ES LO MISMO QUE LO DE ARRIBA PERO MAS ORDENADO Y MENOS CODIGO

// input.addEventListener("blur", desenfocar);

// input.addEventListener("focus", enfocar);

// function enfocar (e){
//     e.target.style.background = "";
//     e.target.placeholder = "New York, Londres, Roma, Guadalajara";
//     e.target.className = "";
// }

// function desenfocar (e){
//     e.target.placeholder = "Nuevas modificaciones del placeholder";
//     e.target.style.background = "red";
//     e.target.className = "contenedor";
// }

// const input = document.querySelector(".busqueda");

// input.addEventListener("input", (e) => {
//     // console.log(e.target.value);
//     if (e.target.value === "") {
//         console.log("Debe completar el campo");
//         e.target.style.background = "red";
//     }else {
//         e.target.style.background = "";
//     }
// });




/*-------------------------------------------------------------*/

//CLASE 10

//SUBMIT

// const form = document.querySelector("#formulario");

// form.addEventListener("submit", ejecutarAPI);

// function ejecutarAPI(e){
//     e.preventDefault();
//     console.log(e.target);
// }



// const cardDiv = document.querySelector(".card");
// const consiertodDiv = document.querySelector(".concierto");
// const tituloDiv = document.querySelector(".titulo");
// const precioDiv = document.querySelector(".precio");

// cardDiv.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Click en card");
// });

// consiertodDiv.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Click en concierto");
// });

// tituloDiv.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Click en titulo");
// });

// precioDiv.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Click en precio");
// });



// const img3 = document.querySelector("section.modulo:nth-child(1) > div:nth-child(2) > div:nth-child(3) > img:nth-child(1)");

// img3.addEventListener("click", ()=> {
//     img3.alt= "IMG no disponible";
//     img3.classList.add("nuevaClase");
//     img3.src="img/hacer2.jpg";
// });

// img3.alt= "IMG no disponible";
// img3.src="img/hacer2.jpg";
// img3.src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg";



const enlace = document.querySelector(".navegacion");

console.log(enlace.children);

enlace.children[3].style = "display:none";

