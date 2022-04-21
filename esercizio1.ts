// Scrivere un programma che:
// prende in input un numero a rappresentante la base di un rettangolo  
// prende in input un numero b rappresentante l'altezza di un rettangolo
// Output:
// calcolare e restituire l'area del rettangolo
// calcolare il perimetro del rettangolo

function areaRettangolo (altezza:number, base:number) :number {
 
    let area:number = base * altezza

    return area;
}

function perimetroRettangolo (base:number, altezza:number) :number {
 
    let perimetro:number = base *2 + altezza *2

    return perimetro;
}

    let base:number = prompt ("inserisci base");
    let altezza:number = prompt ("inserisci altezza");
    console.log (areaRettangolo (altezza, base));
    console.log (perimetroRettangolo (altezza, base));


        