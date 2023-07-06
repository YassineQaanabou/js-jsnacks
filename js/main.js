/*Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array,
 restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato.
 L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N), 
 e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().
 */

let N = parseInt(prompt("Quanti numeri vuoi sommare?"));
let numbers = creaArray(N);

let result = sommaNumeri(N, numbers);

console.log(result);

function creaArray(N) {
  let numbers = [];

  for (let i = 0; i < N; i++) {
    let number = parseInt(prompt("inserisci il" + (i + 1) + "° numero"));

    numbers.push(number);
  }

  return numbers;
}

function sommaNumeri(N, numbers) {
  let result = 0;

  for (let i = 0; i < N; i++) {
    result = result + numbers[i];
  }

  return result;
}
