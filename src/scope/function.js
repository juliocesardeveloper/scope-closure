const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits();
console.log(fruit);


const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1; //Se está declarando y
  y = 2; //Se está reasignando un valor a y (No se puede con const)
  let y = 3; //se está redeclarando y (ésto no se puede ni con let ni con const)
  console.log(x);
  console.log(y);
}

anotherFunction();