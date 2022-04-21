//dichiarare quale, tra tre numeri, è il maggiore//

function numeroMaggiore (n1:number, n2:number, n3:number):string {

    if (n1 >= n2) {
       if (n1 >= n3) {return "il numero più grande è:" +n1;}
       if (n3 > n1) {return "il numero più grande è:" +n3;}
    
    }
    if (n2 > n1) {
       if (n2 >= n3) {return "il numero più grande è:" +n2;}
       if (n3 > n2) {return "il numero più grande è:" +n3;}
    }
    
    }
    
    let n1:number = prompt ("inserisci un primo valore numerico")*1;
    let n2:number = prompt ("inserisci un secondo valore numerico")*1;
    let n3:number = prompt ("inserisci un terzo valore numerico")*1;
    
    console.log (numeroMaggiore (n1, n2, n3));