
//Sin closure
const alcancia = (monedas) => {
  var monedasGuardadas = 0;
  monedasGuardadas += monedas;
  console.log(`Alcancía: $${monedasGuardadas}`);
}

alcancia(5);
alcancia(10);

//Consola
// Alcancía: $5
// Alcancía: $10



//Con closure
const alcancia = () => {
  let monedasGuardadas = 0; //se puede usar también let, const no
  const contarMonedas = (monedas) => {
    monedasGuardadas += monedas;
    console.log(`Alcancía: $${monedasGuardadas}`);
  }
  return contarMonedas;
}

let miAlcancia = alcancia(); //se puede usar también var y const

miAlcancia(4);
miAlcancia(6);
miAlcancia(5);