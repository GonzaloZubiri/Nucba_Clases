// Crear el array de objetos

const pizzas = [
    //Objetos
    {
        "id": 1,
        "nombre": "Margarita",
        "ingredientes": ["salsa de tomate", "mozzarella", "albahaca", "oregano", "aceite de oliva"],
        "precio": 400,
    },
    {
        "id": 2,
        "nombre": "Napolitana",
        "ingredientes": ["salsa de tomate", "queso mozzarella", "anchoas", "oregano", "alcaparras", "aceite de oliva"],
        "precio": 550,
    },
    {
        "id": 3,
        "nombre": "Hawaiana",
        "ingredientes": ["Salsa de tomate", "piña", "jamon cocido", "oregano", "cebolla", "queso mozzarella"],
        "precio": 600,
    },
    {
        "id": 4,
        "nombre": "Caprese",
        "ingredientes": ["Salsa de tomate", "tomate cherry", "tomate perla", "albahaca", "mozzarella"],
        "precio": 750,
    },
    {
        "id": 5,
        "nombre": "Caprichosa",
        "ingredientes": ["aceite de oliva", "mozzarella", "tomate triturado", "alcachofa", "champiñones", "anchoas"],
        "precio": 800,
    },
    {
        "id": 6,
        "nombre": "Pizza Verde",
        "ingredientes": ["aceite de oliva", "mozzarella", "queso azul", "brocoli", "semola", "albahaca", "calabacin", "oregano"],
        "precio": 950,
    },
]


//a) Las pizzas que tengan un id impar.
console.log(`Las pizzas que tienen un ID impar son: ${pizzas.filter(pizza => pizza.id % 2 !== 0).map(pizza => pizza.nombre)}`);

//b) ¿Hay alguna pizza que valga menos de $600?
console.log(`Las pizzas que valen menos de $600 son: ${pizzas.filter(pizza => pizza.precio < 600).map(pizza => pizza.nombre)}`);

//c) Los nombres de todos las pizzas.
for (let i = 0; i < pizzas.length; i++) {
    console.log(
        "El nombre de la pizza es:",
        pizzas[i].nombre
    );
}

//d) Los precios de las pizzas.
for (let i = 0; i < pizzas.length; i++) {
    console.log(
        "El precio de la pizza es de $:",
        pizzas[i].precio
    );
}

//e) El nombre de cada pizza con su respectivo precio.
for (let i = 0; i < pizzas.length; i++) {
    console.log(
        "La pizza",
        pizzas[i].nombre,
        "tiene un valor de $:",
        pizzas[i].precio,
    );
}

//f) El número y nombre de cada pizza con su respectivo precio. (PLUS DE PRUEBA)
for (let i = 0; i < pizzas.length; i++) {
    console.log(
        "La pizza número",
        pizzas[i].id,
        "se llama",
        pizzas[i].nombre,
        "y tiene un valor de $:",
        pizzas[i].precio,
    );
}


