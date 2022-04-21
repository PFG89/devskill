//dichiarare se un anno è bisestile//

function annoBisestile (anno:number):string {

    if (anno%400==0) {
        return "l'anno è bisestile";
    }
    
    else if (anno%4==0) {
        if (anno%100!=0) {
            return "l'anno è bisestile";
        }else {
            return "l'anno non è bisestile";
        }
     
    } else {
        return "l'anno non è bisestile";}
    }
    
    
    let input:number = prompt ("inserisci un anno");
    console.log (annoBisestile(input));