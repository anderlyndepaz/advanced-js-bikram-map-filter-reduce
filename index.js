// RESUELVE LOS EJERCICIOS AQUI
// function elevados(arr) {
//     // Elevar cada número al cuadrado
//     let elevaNumeroArray = arr.map(num => num * num);
//     return elevaNumeroArray;
// }

// // Uso de la función
// let numbers = [4, 5, 6, 7, 8, 9, 10];
// let result1 = elevaNumeroArray(numbers);
// console.log(result1);



// let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];


// function result2(arr){
// return arr.map(food => {
//     if (food === 'Pizza') {
//         return 'Como soy de Italia, amo comer Pizza'
//     } else if (food === 'Ramen') {
//         return 'Como soy de Japón, amo comer Ramen'
//     } else if (food === 'Paella') {
//         return 'Como soy de Valencia, amo comer Paella'
//     } else if (food === 'Entrecot') {
//         return 'Aunque no como carne, el Entrecot es sabroso'
//     }
// })};

// console.log(result2(foodList));

// const staff = [
//     {
//       name: 'Pepe',
//       role: 'The Boss',
//       hobbies: ['leer', 'ver pelis']
//     },
//     {
//       name: 'Ana',
//       role: 'becaria',
//       hobbies: ['nadar', 'bailar']
//     },
//     {
//       name: 'Luis',
//       role: 'programador',
//       hobbies: ['dormir', 'comprar']
//     },
//     {
//       name: 'Carlos',
//       role: 'secretario',
//       hobbies: ['futbol', 'queso']
//     }
//   ];
  
//   let frases = staff.map(persona => {
//     let hobbies = persona.hobbies.join(' y '); // Unir hobbies con 'y'
//     return `${persona.name} es ${persona.role} y le gusta ${hobbies}`;
//   });
  
//   console.log(frases);
  

//   const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   let newNumbers = numbers2.filter(number => number % 2 !== 0);

//   console.log(newNumbers);

//   const foodList2 =[
//     {
//       name: 'Tempeh',
//       isVeggie: true
//     },
//     {
//       name: 'Cheesbacon burguer',
//       isVeggie: false
//     },
//     {
//       name: 'Tofu burguer',
//       isVeggie: true
//     },
//     {
//       name: 'Entrecot',
//       isVeggie: false
//     }];


//     let result5 = foodList2
    
//     .filter(food => food.isVeggie)  // Filtra solo los platos que son vegano
    
//     .map(food => `Que rico ${food.name} me voy a comer!`);  // Crea la frase
    
//     console.log(result5);

 
// const inventory = [
//     {
//       name: 'Mobile phone',
//       price: 199
//     },
//     {
//       name: 'TV Samsung',
//       price: 459
//     },
//     {
//       name: 'Viaje a cancún',
//       price: 600
//     },
//     {
//       name: 'Mascarilla',
//       price: 1
//     }
//   ];
  
//   /*
//     [
//       'TV Samsung,',
//       'Viaje a Cancún'
//     ]
//   */

//     let result = inventory
//     .filter(item => item.price > 300)  // Filtra los elementos que valen más de 300
//     .map(item => item.name);           // Extrae los nombres
  
//   console.log(result);


// const numeros = [39, 2, 4, 25, 62];

// // Usar reduce para multiplicar todos los elementos
// const resultado = numeros.reduce((acumulador, valorActual) => {
//     return acumulador * valorActual;
// }, 1); // Comenzamos con 1 porque es el elemento neutro de la multiplicación

// console.log(resultado);

// const numbers = [4, 5, 6, 7, 8, 9, 10];

// // Función que eleva cada número a sí mismo
// function elevados(arr) {
//     if (!Array.isArray(arr)){
//         throw new TypeError('Se esperaba un array');
//     }
//     return arr.map(num => Math.pow(num, num)); // Eleva cada número a sí mismo
// }

// const resultado = elevados(numbers);
// console.log(resultado);


// Define el array de números
const numbers = [4, 5, 6, 7, 8, 9, 10];

// Función que eleva cada número a sí mismo
function elevados(arr) {
    
    return numbers.map(num => Math.pow(num, num)); // Eleva cada número a sí mismo
}

// Llama a la función con el array definido
const resultado = elevados(numbers);
console.log(resultado);



const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const contenido = {
    Pizza: 'Como soy de Italia, amo comer Pizza',
    Ramen: 'Como soy de Japón, amo comer Ramen',
    Paella: 'Como soy de Valencia, amo comer Paella',
    Entrecot: 'Aunque no como carne, el Entrecot es sabroso'
};

const result2 = foodList.map(food => contenido[food]);

console.log(result2);



const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];
  
  let result3 = staff.map(persona => {
    let hobbies = persona.hobbies.join(' y '); // Unir hobbies con 'y'
    return `${persona.name} es ${persona.role} y le gusta ${hobbies}`;
  });
  
  console.log(result3);

  const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let result4 = numbers2.filter(number => number % 2 !== 0);

  console.log(result4);


  const foodList2 =[
        {
          name: 'Tempeh',
          isVeggie: true
        },
        {
          name: 'Cheesbacon burguer',
          isVeggie: false
        },
        {
          name: 'Tofu burguer',
          isVeggie: true
        },
        {
          name: 'Entrecot',
          isVeggie: false
        }];
          
          let result5 = foodList2
            .filter(food => food.isVeggie)  // Filtra solo los platos veganos
            .map(food => {
              // Determina si el nombre del plato es femenino o masculino para usar "rico" o "rica"
              let genero = food.name.toLowerCase().includes('burguer') ? 'rica' : 'rico';
              return `Que ${genero} ${food.name} me voy a comer!`;
            });
          
          console.log(result5);


          const inventory = [
            {
                  name: 'Mobile phone',
                  price: 199
                },
                {
                  name: 'TV Samsung',
                  price: 459
                },
                {
                  name: 'Viaje a Cancún',
                  price: 600
                },
                {
                  name: 'Mascarilla',
                  price: 1
                }
              ];
              
              /*
                [
                  'TV Samsung,',
                  'Viaje a Cancún'
                ]
              */
                const result6 = inventory
                .filter(({ price }) => price > 300)
                .map(({ name }) => name);
                console.log(result6);
            
                // -------------6.1---------------
    const numeros3 = [39, 2, 4, 25, 62];
    const result7 = numeros3.reduce((acumulador, numeros) => acumulador * numeros, 1);
    console.log(result7);
    //---------------7-----------------
    const sentenceElements = [
        'Me',
        'llamo',
        'Anderlyn',
        'y',
        'quiero',
        'sentir',
        'la',
        'fuerza',
        'con',
        'javascript'
      ];

      const result8 = sentenceElements.reduce((accumulator, current) => {
        return `${accumulator} ${current}`.trim(); // Concatenar y eliminar espacios extra
    }, '');
    
    console.log(result8);
    

    const books = [
        {
          name: ' JS for dummies',
          author: 'Emily A. Vander Veer',
          price: 20,
          category: 'code'
        },
        {
          name: 'Don Quijote de la Mancha',
          author: 'Cervantes',
          price: 14,
          category: 'novel'
        },
        {
          name: 'Juego de tronos',
          author: 'George R. Martin',
          price: 32,
          category: 'Fantasy'
        },
        {
          name: 'javascript the good parts',
          author: 'Douglas Crockford',
          price: 40,
          category: 'code'
        }
      ];
      // Resultado --> 60

      const result9 = books
      .
     
    filter(book => book.category === 'code')  // Filtra los libros que tienen la categoría "code"
      .reduce((total, book) => total + book.price, 0);  // Suma los precios de esos libros
    
    
    
    console.log(result9);  

          

