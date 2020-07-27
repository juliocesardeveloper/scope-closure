const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};

helloWorld();
console.log(hello);//No se puede acceder a la variable hello por no ser global desde aquí, sino local


//Ámbito léxico
var scope = "I am global";

const functionScope = () => {
  var scope = "I am just a local";
  const func = () => {
    return scope
  }
  console.log(func());
}

functionScope();
console.log(scope);