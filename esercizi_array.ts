//////////////////////////////////// E S E R C I Z I O  1 ///////////////////////////////////////////////////

//Scrivere un programma che popoli due array A , B di dimensione N identica ed arbitraria ( min 5 , Max 10 ) 
//i cui valori sono presi in input.
//Successivamente creare un terzo array C di dimensione N dove nelle posizioni pari verranno inseriti i valori dell'array A 
//e in quelle dispari i valori dell'array B
//Considerare 0 come pari
//Input: 5
// popolare il vettore
//A = [ 1, 3, 4,  5, 6];
//B = [ 7, 8, 9, 10,11];
//Output: C = [ 1, 8, 4 ,10 ,6];

function messaggio() : string {
    if (scelta<5 || scelta>10) {return "la tua scelta non e' valida";}
    else { 
        return "ecco il risultato";
    }
}

function input () : number {
    return +prompt ("inserisci un numero");
   }

let scelta : number = +prompt ("scegli la dimensione dell'array da 5 a 10");


    let arrayA : number [] = [];
    let arrayB : number [] = [];
    let arrayC : number [] = [];
   

if (scelta<5 || scelta>10) {alert (messaggio());}
else { 

    for (let i = 0; i<scelta; i++) {
        arrayA.push(input());
    }

    for (let i = 0; i<scelta; i++) {
        arrayB.push(input());
    }

    for (let i = 0; i<scelta; i++) {
        if (i%2==0) {arrayC.push(arrayA[i]);}
        else {arrayC.push(arrayB[i]);}
    }

    console.log (messaggio()+ ": " +arrayC);
    

}

//////////////////////////////////// E S E R C I Z I O  2 ///////////////////////////////////////////////////

//Scrivere un programma che popoli due array A , B di dimensione N,M arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
//Successivamente creare un terzo array C di dimensione N+M dove nelle posizioni 
//da 0 a N inserite i valori A e nelle posizioni da N+1 a M inserite i valori di B al contrario
//Considerare 0 come pari
//esempio:
//Input N : 5
//Input M : 5
// popolare il vettore
//A = [ 1, 3, 4, 5, 6];
//B = [ 7, 8, 9, 10,11];
//Output: C = [ 1, 3, 4 ,5, 6, 11,1 0, 9, 8, 7];

//PRIMA SOLUZIONE//

function messaggio() : string {
    if (scelta1<5 || scelta1>10 || scelta2<5 || scelta2>10) {return "la tua scelta non e' valida";}
    else { 
    return "ecco il risultato";
    }
}

function input () : number {
    if (scelta1>=5 || scelta1<=10) {
    return +prompt("popola il primo array");
   }
   if (scelta1>=5 || scelta1<=10) {
       return +prompt("popola il secondo array");
   }
}

let scelta1 : number = +prompt ("scegli la dimensione dell'array da 5 a 10");
let scelta2 : number = +prompt ("scegli la dimensione dell'array da 5 a 10");


    let arrayA : number [] = [];
    let arrayB : number [] = [];
    let arrayC : number [] = [];
   

if (scelta1<5 || scelta1>10 || scelta2<5 || scelta2>10) {alert (messaggio());}
else { 

    for (let i = 0; i<scelta1; i++) {
        arrayA.push(input());
    
    }

    for (let i = 0; i<scelta2; i++) {
        arrayB.push(input());
         
    }

    for (let i=0; i <scelta1; i++) {
        arrayC.push(arrayA[i]);
    }

    for (let i=scelta2 -1; i>=0; i-- ) {
        arrayC.push(arrayB[i]);
    }

}

console.log (arrayA, arrayB);
console.log (messaggio()+ ": " arrayC);

//SECONDA SOLUZIONE CON FUNZIONI FACILITANTI//

function messaggio() : string {
    if (scelta1<5 || scelta1>10 || scelta2<5 || scelta2>10) {return "la tua scelta non e' valida";}
    else { 
    return "ecco il risultato";
    }
}

function input () : number {
    if (scelta1>=5 || scelta1<=10) {
    return +prompt ("popola il primo array");
   }
   if (scelta1>=5 || scelta1<=10) {
       return +prompt ("popola il secondo array");
   }
}

let scelta1 : number = +prompt ("scegli la dimensione dell'array da 5 a 10");
let scelta2 : number = +prompt ("scegli la dimensione dell'array da 5 a 10");


    let arrayA : number [] = [];
    let arrayB : number [] = [];
    let arrayC : number [] = [];
   

if (scelta1<5 || scelta1>10 || scelta2<5 || scelta2>10) {alert (messaggio());}
else { 

    for (let i = 0; i<scelta1; i++) {
        arrayA.push(input());
    
    }

    for (let i = 0; i<scelta2; i++) {
        arrayB.push(input());
         
    }

}

     //la funzione concat() crea un terzo array in cui concatena gli elementi  dei due array da concatenare; 
    //la funzione reverse() inverte la disposizione degli elementi che compongono un array. 

let abreverse:number [] = arrayA.concat(arrayB.reverse());  
arrayC = abreverse;
console.log (messaggio()+ ": " arrayC);
