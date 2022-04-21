//dichiarare l'età inputando l'anno di nascita//

function dataNascita (anno:number):number {
    if (anno <= 2022) return (2022-anno);
}


let input:number = prompt ("inserisci la tua data di nascita");
console.log (dataNascita(input));