//dati 3 numeri in input, stampare il maggiore tra i 3. esercizio svolto con utilizzando gli array

let n1:number = prompt ("inserisci un primo valore numerico")*1;
let n2:number = prompt ("inserisci un secondo valore numerico")*1;
let n3:number = prompt ("inserisci un terzo valore numerico")*1;
let array : number [] = [n1, n2, n3];


if (array[0] >= array[1]) {
 if (array[0] >= array[2]) {console.log ("il numero più grande è:" +array[0]);}
 if (array[2] > array[0]) {console.log ("il numero più grande è:" +array[2]);}

}
if (array[1] > array[0]) {
 if (array[1] >= array[2]) {console.log ("il numero più grande è:" +array[1]);}
 if (array[2] > array[1]) {console.log ("il numero più grande è:" +array[2]);}