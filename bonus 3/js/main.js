/*Creare una funzione che dato un array di stringhe o di numeri mi restituisca il numero di volte che un elemento
 è presente dentro quell'array. Ad esempio se ho un array con dei numeri mi dica quante volte il numero 2 compare dentro l'array.*/

let userInput = prompt("inserisci una parola o un numero");
let elementToSearchFor = prompt("quale elemento vuoi cercare nell'input?");

let array = Array.from(String(userInput));

console.log(findElement(array, elementToSearchFor));

function findElement(array, elementToSearchFor) {
  let elementFound = [];
  let numberElements = 0;

  for (i = 0; i < array.length; i++) {
    if (elementToSearchFor == array[i]) {
      elementFound.push(array[i]);
    }

    numberElements = elementFound.length;
  }

  return numberElements;
}
