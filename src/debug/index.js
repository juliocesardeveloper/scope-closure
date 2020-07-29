var a = 'Hello';

function hello(){
  let b = 'Hello World';
  const c = 'Hello World!'
  if (true) {
    let d = 'Hello World!!'
    debugger
  }
}

hello();

const alcancia = () => {
  let monedasGuardadas = 0;
  const contarMonedas = (monedas) => {
    monedasGuardadas += monedas;
    console.log(`Alcancía: $${monedasGuardadas}`);
  }
  return contarMonedas;
}

let miAlcancia = alcancia();

miAlcancia(4);
miAlcancia(6);
miAlcancia(5);