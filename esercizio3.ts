//dichiarare se un numero è pari o dispari//

function pariOdispari (numero:number):string {

    if ((numero % 2)==0) {return "il numero è PARI"}
    if ((numero % 2)!=0){ return "il numero è DISPARI"};
    
    }
    
    
    let input:number = prompt ("inserisci un valore numerico")*1;
    
    console.log (pariOdispari (input));