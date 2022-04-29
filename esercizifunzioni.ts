//Scrivere un programma che preso in input Il nome e cognome di una persona e li restituisca tutto in maiuscolo

function maiuscolo (nome:string, cognome:string ) :string {
    let nomecognome:string = nome+ " " +cognome;
    return console.log (nomecognome.toUpperCase());
    }
    
    let input1:string = prompt ("inserisci nome");
    let input2:string = prompt ("inserisci il cognome")
    maiuscolo(input1, input2);


//Scrivere un programma che preso in input Il nome e cognome in maiuscolo li restituisca in minuscolo

    function minuscolo (nome:string, cognome:string ) :string {
        let nomecognome:string = nome+ " " +cognome;
        return console.log (nomecognome.toLowerCase());
        }
        
        let input1:string = prompt ("inserisci nome");
        let input2:string = prompt ("inserisci il cognome")
        minuscolo(input1, input2);

