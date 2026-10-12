/* Crea un array con cinque numeri interi.
Usa un ciclo for per scorrere l'array e stampare in console solo i numeri maggiori di 5.
Stampa anche la lunghezza totale dell'array.
*/

// INPUT
const numeriInteri = [3, 5, 7, 9, 14];

for (let i = 0; i < numeriInteri.length; i++) {
    if (numeriInteri[i] > 5) {
        console.log(numeriInteri[i]);
    }
}

// OUTPUT
console.log(`Lunghezza totale: ${numeriInteri.length}`);