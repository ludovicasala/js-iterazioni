/* Dichiara fuori dal ciclo una variabile soglia con il valore 18.
Chiedi all'utente di inserire 4 voti con prompt.
Per ogni voto, stampa se è sufficiente o insufficiente confrontandolo con la soglia.
Dopo il ciclo, stampa il valore di soglia e verifica che la variabile voto non sia accessibile fuori dal blocco.
*/

// INPUT
const soglia = 18;

for (let i = 1; i <= 4; i++) {
    const voto = Number(prompt(`Inserisci il tuo voto ${i}:`));

    if (voto >= soglia) {
        console.log(`${voto} è sufficiente`);
    } else {
        console.log(`${voto} è insufficiente`);
    }
}

// OUTPUT
console.log(`Soglia di sufficienza: ${soglia}`);