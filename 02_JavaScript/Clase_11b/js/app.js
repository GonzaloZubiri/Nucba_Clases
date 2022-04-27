const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};


const validarformulario = (e)=>{
    console.log(e.target.name);
};



inputs.forEach((input) => {
    input.addEventListener("blur", validarformulario);
    input.addEventListener("keyup", validarformulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
});



// inputs.addEventListener("blur", ()=> {
//     console.log("Funcionando blur");
// })