'use strict';
var a1=prompt("Dame una",'uno');
var a2=prompt('Dame otra','otra');
function MostrarConsola(n1,n2){
    console.log(n1+ " "+n2);
}
function EnDocument(c1,c2){
    document.write(c1+" "+c2);
}
function Mostrar(a1,a2,a3=false){
    if(a3==false){
MostrarConsola(a1,a2);
    }
    else{
        EnDocument(a1,a2)
    }
}
Mostrar(a1,a2,true);