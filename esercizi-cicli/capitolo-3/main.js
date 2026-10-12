/* Chiedi all'utente di inserire un numero N.
Calcola la somma di tutti i numeri interi da 1 a N e stampa il risultato.
*/

// PRODUZIONE e INPUT
const N = Number(prompt(`Inserisci un numero`));
let somma = 0;

for (let i = 1; i <= N; i++) {
    somma = somma + i;
}

// OUTPUT
console.log(`Somma da 1 a ${N} : ${somma} `);