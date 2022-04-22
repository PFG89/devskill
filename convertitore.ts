/// FUNZIONI LOGIHE DI CONVERSIONE ///

function convertitoreCelsiusFahr (temperatura:number): number {

    return (temperatura * (9 / 5)) + 32;}
    
function convertitoreFahrCelsius (temperatura:number): number {
    
    return (temperatura - 32) * (5 / 9);}
    
function convertitorekmMiglia (distanza:number): number {
    
    return (distanza) * 1.609;}
    
function convertitoreMigliaKm (distanza:number): number {
    
    return (distanza) / 1.609;}
    
    
    ///// CODICE ////
    
    let misurazione:string = prompt ("Che tipo di misurazione vuoi convertire? premi 1 per TEMPERATURA, premi 2 per DISTANZA");
    
    if (misurazione == 1) {
        let valore:number= prompt ("Inserisci il valore")*1;
        let temperatura: string = prompt ("Inserisci c se il valore è espresso in gradi celsius e vuoi convertirlo in gradi fahrenheit, altrimenti inserisci f se il valore è espresso in gradi fahrenheit e vuoi convertirlo in gradi celsius");
        let c: string = "c"
        let f : string = "f"
    
      if (temperatura == c) {console.log ("il valore convertito è di " + convertitoreCelsiusFahr (valore) + " fahrenheit");
    
      }
      if (temperatura == f) {console.log ("il valore convertito è di " + convertitoreFahrCelsius (valore) + " gradi celsius");
    
      }
      }
    
    if (misurazione == 2) {
        let valore:number= prompt ("Inserisci il valore")*1;
        let distanza: string = prompt ("Inserisci km se il valore è espresso in kilometri e vuoi convertirlo in miglie nautiche, altrimenti inserisci mi se il valore è espresso in miglie nautiche e vuoi convertirlo in kilometri");
        let km: string = "km"
        let mi : string = "mi"
    
        if (distanza == km) {console.log ("il valore convertito è di " +  convertitorekmMiglia(valore) + " miglia nautiche";
    
    }
    if (distanza == mi) {console.log ("il valore convertito è di " + convertitoreMigliaKm(valore) + " kilometri");
    
    }
    }