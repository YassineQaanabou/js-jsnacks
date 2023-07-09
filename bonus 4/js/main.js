/*Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.
 Per palindroma di intende una parola che letta da sinistra a destra e da destra a sinistra si legge uguale. 
 Trovate in internet un sacco di parole palindrome, un esempio è ANNA.
Fate un programma in cui chiedete la parola all'utente e gli comunicate dunque se la parola è palindroma o meno
 usando la funzione appena creata!
*/

let word = prompt("inserisci una parola");
console.log(word);
let array = Array.from(String(word));
console.log(array);
let arrayToString = array.toString();
console.log(arrayToString);
let reverseArray = array.reverse(array);
console.log(reverseArray);
let reverseWord = reverseArray.toString();
console.log(reverseWord);
console.log(checkPalindrome(arrayToString, reverseWord));

function checkPalindrome(arrayToString, reverseWord) {
  let response = " ";

  if (arrayToString === reverseWord) {
    response = "la parola è palindroma";
    document.getElementById("printResponse").innerHTML = response;
  } else {
    response = "la parola non è palindroma";
    document.getElementById("printResponse").innerHTML = response;
  }

  return response;
}
