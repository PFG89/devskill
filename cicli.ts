//Scrivere un programma che prenda in input una sequenza di numeri, e quando l'utente inserisce -1 termini
//restituendo il valore piu` grande inserito
//E.S 
// Input : 1 9 19 9 1 9 0 -1
// Output : 19


let input:number = prompt ("inserisci numero")*1;
let confronto : number = input;

if (input === -1) {console.log ("non hai nemmeno iniziato");}

while (input != -1) {
if (input > confronto) {confronto = input;}
input = prompt ("inserisci numero")*1;
}
console.log (confronto);



//Scrivere un programma che calcoli il massimo in un vettore di dimensione 10 (valori presi da input)
//E.S 
// Input A = [ 1 9 200 9 1 9 0 50]
// Output : 200

let input:number = prompt("inserisci un numero")*1;
let numeriDatiInInput : number [] = [];
let numeroMaggiore : number = input;


for (let i=0; i < 9; i++) {
    input= prompt ("inserisci un numero")*1;
    numeriDatiInInput.push(input);
    
    if (numeriDatiInInput[i] > numeroMaggiore) {
        numeroMaggiore = numeriDatiInInput[i];
    }
}

console.log (numeroMaggiore);