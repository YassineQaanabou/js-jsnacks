/* Chiedi un numero di 4 cifre all’utente. Usa la funzione sommaNumeri per calcolare la somma di tutte le cifre che compongono il numero
 e ritorni il risultato.
 Usa questa funzione per stampare poi a video il risultato ottenuto. Ad es: 1286 la somma di tutti le sue cifre sarà 17! */

let userNumber = parseInt(prompt("inserisci un numero di 4 cifre"));

let cifre = Array.from(String(userNumber), Number);

console.log(cifre);

console.log(sommaNumeri(cifre));

function sommaNumeri(cifre) {
  let sum = 0;

  for (let i = 0; i < cifre.length; i++) {
    if (cifre.length == 4) {
      sum = sum + cifre[i];
    } else {
      console.log("hai inserito un numero di cifre diverso da 4");
    }
  }

  return sum;
}
