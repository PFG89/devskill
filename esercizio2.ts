//dichiarare se un numero è positivo o negativo//

function numPoN (numero:number):string {

    if (numero >= 0) {return "Positivo";}
    return "Negativo";
 }
 
 function message (mss:string):void {
     
     console.log ("Il numero è " + mss);
 }
 
 let input:number = prompt ("inserisci un numero")*1;
 
 message(numPoN (input));