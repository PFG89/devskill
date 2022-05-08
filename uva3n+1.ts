
//Uva 3n+1


let i : number = +prompt("inserisci il valore di i");
let j : number = +prompt("inserirsci il valore di j");
let n : number = i; 
let contatoreCiclo : number = 1; // il contatore parte dall'unità minima 1 //
let cicloMax : number = 0; 

function logaritmo(i:number,j:number):number {

    while(i <= j){  

        while(n != 1){  //il valore n(i) deve essere diverso da 1 //

            if(n%2!=0) {
                 n=3*n+1;
                 }
            
              
            else {
                n=n/2;
                }

            contatoreCiclo++; //per ogni ciclo while aggiorna incrementando il contatore ciclo//
        }
        
        if(contatoreCiclo > cicloMax) {  //tiene traccia del ciclo massimo
              cicloMax = contatoreCiclo;
        }
            
            
        contatoreCiclo = 1; //si tara il contatore ciclo
        i++; //incrementa il valore di i
        n = i; //il valore incrementato sarà uguale a n in modo da ripetere il ciclo while 
              //con i valori compresi tra i e j
   
    }
    
return cicloMax;

}

alert(i + " " + j + " " + logaritmo(i,j));