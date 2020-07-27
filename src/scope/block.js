const frutas = () => {
  if (true) {
    var fruta1 = 'manzana'; //var queda establecido dentro de la función
    let fruta2 = 'banano'; //let queda establecido dentro del bloque (bloque del if)
    const fruta3 = 'kiwi'; //const queda establecido dentro del bloque (bloque del if)
  }
  console.log(fruta1); // manzana
  console.log(fruta2); // ReferenceError
  console.log(fruta3); // ReferenceError
}

frutas();

//Block scope
const frutas = () => {
  if (true) {
    var fruta1 = 'manzana'; //var queda establecido dentro de la función
    let fruta2 = 'banano'; //let queda establecido dentro del bloque (bloque del if)
    const fruta3 = 'kiwi'; //const queda establecido dentro del bloque (bloque del if)
    console.log(fruta2); // banano
    console.log(fruta3); // kiwi
  }
  console.log(fruta1); // manzana
}

frutas();


let x = 1;
{
  let x = 2;
  console.log(x);
}

console.log(x);

//2
//1

var x = 1;
{
  var x = 2;
  console.log(x);
}

console.log(x);

//2
//2


//Con var
const otraFuncion = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
};

otraFuncion();

//Consola
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10


//Con let
const otraFuncion = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
};

otraFuncion();

//Consola
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9