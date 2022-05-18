//PROBLEMA NB7//

function input():number {
    return +prompt("inserisci un numero");}

let x:number = +prompt("inserisci il valore di X");
let n:number= +prompt("inserisci un valore per stabilire la lunghezza dell'array");
let array:number[]=[];
let contenitoreNumeriMinoriPari:number[]=[];

for (let i=0; i<n; i++) {
    array.push(input());
}

for (let i=0; i<array.length; i++) {
    if(array[i]<x && array[i]%2==0) {contenitoreNumeriMinoriPari.push(array[i])}
}

console.log(contenitoreNumeriMinoriPari.join(""));