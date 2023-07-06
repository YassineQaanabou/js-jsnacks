/*Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array,
 restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato.
 L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N), 
 e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().
 */

let N = parseInt(prompt("Quanti numeri vuoi sommare?"));
let numbers = creaArray(N);

let sum = sommaNumeri(N, numbers);

let arithmeticAverage = mediaAritmetica(sum, N);

console.log(sum);
console.log(arithmeticAverage);

function creaArray(N) {
  let numbers = [];

  for (let i = 0; i < N; i++) {
    let number = parseInt(prompt("inserisci il " + (i + 1) + "° numero"));

    numbers.push(number);
  }

  return numbers;
}

function sommaNumeri(N, numbers) {
  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}

/*Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri
 e restituisca la media aritmetica dei numeri contenuti nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che vanno chiesti all'utente 
attraverso dei prompt.*/

function mediaAritmetica(sum, N) {
  let arithmeticAverage = sommaNumeri(N, numbers) / N;

  return arithmeticAverage;
}
