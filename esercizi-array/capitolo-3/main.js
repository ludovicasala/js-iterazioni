/* Parti dall'array ['rosso', 'verde', 'blu', 'giallo'].
Aggiungi 'viola' in coda,
rimuovi il primo elemento,
controlla se 'blu' è presente,
ottieni una copia dei primi due elementi con slice
e unisci tutto in una stringa con ' | ' come separatore.
*/

const colori = ['rosso', 'verde', 'blu', 'giallo'];

colori.push('viola');
colori.shift();

console.log(colori.includes('blu'));

const primiDue = colori.slice(0, 2);
const stringa = colori.join(' | ');

console.log(stringa);