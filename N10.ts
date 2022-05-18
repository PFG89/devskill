//PROBLEMA N10//

let input= prompt("inserisci il valore di N");
let stringa:number=input;
let tmp:number=input;

function reverse(numero:number):string{
return numero.split("").reverse().join("");
}

input= reverse(stringa);

let n1:number=tmp;
let n2:number=input;

console.log(n1-n2);

