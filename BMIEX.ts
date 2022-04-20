let altezza:number = prompt ("inserisci la tua altezza espressa in piedi") *0.30;

  if (altezza < 1) {console.log prompt("Non ti vediamo!");}
  if (altezza >= 10) {console.log prompt("Sultan Kosen scansate");}

let peso:number = prompt ("inserisci il tuo peso espresso in libre") *0.45;

  if (peso < 1 || peso > 700 ) {console.log prompt("Non hai inserito un valore corretto");}

let bmi:number = (peso) / (altezza*altezza)

if (bmi !=0 && bmi <= 16.5) {console.log prompt("Sottopeso severo - premi invio per continuare");} 
if (bmi >= 16.5 && bmi <= 18.4) {console.log prompt ("Sottopeso - premi invio per continuare");}
if (bmi >= 18.5 && bmi <= 24.9) {console.log prompt ("Normale - premi invio per continuare");}
if (bmi >= 25 && bmi <= 30) {console.log prompt ("sovrappeso - premi invio per continuare");}
if (bmi >= 30.1 && bmi <= 34.9) {console.log prompt ("Obesità di primo grado - premi invio per continuare");}
if (bmi >= 35 && bmi <= 40) {console.log prompt ("Obesità di secondo grado - premi invio per continuare");}
if (bmi > 40) {console.log prompt ("Per noi è importante la tua salute, ti consigliamo di consultare un medico");}


let answer:string = prompt ("vuoi effettuare una misurazione piu precisa? Digita si oppure no");

if (answer=="si") {
    let cp:number= prompt ("Inserisci la circonferenza del tuo polso espressa in cm digitando solo il valore");
    let sex: string = prompt ("Inserisci il tuo sesso digitando m/f");

   if (sex=="f"){

     if (cp < 15){console.log prompt ("Esile");}
              
     if (cp >= 15 && cp <= 16) {console.log prompt ("Normale");}
              
     if (cp > 16){console.log prompt ("Robusta");}
            
                 }

   if (sex=="m"){

     if (cp < 17) {console.log prompt ("Esile");}
              
     if (cp >= 17 && cp <= 18) {console.log prompt ("Normale");}
              
     if (cp > 18) {console.log prompt ("Robusta");}
               
                 }

   if (sex != "m" && sex != "f") { console.log prompt ("Error");}

} 
if (answer == "no") { console.log prompt ("Arrivederci!");

} 
if (answer !="si" && answer !="no") {console.log prompt ("Mi dispiace, non hai digitato correttamente! Premi invio e ripeti");}
     



