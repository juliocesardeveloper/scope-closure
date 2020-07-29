//Ejemplo 1
a = 2;
var a;
console.log(a); // 2 (por el hoisting)

//Ejemplo 2
console.log(a); // undefined (porque estamos intentando acceder a la variable pero no esta disponible)
var a = 2;

//JS solo utiliza el hoisting en declaraciones y no en inicializaciones

//Ejemplo 3
nameOfDog('Niño');

function nameOfDog(name) {
  console.log(name);
}
