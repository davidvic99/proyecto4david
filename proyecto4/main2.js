
//Zona de variables 

cuad1C=[[2,6,5],[4,6,6],[3,4,1]];
cuad2C

/*fila1=Array(2,6,5,4,5,5);
fila2=Array(4,6,6,3,2,6);
fila3=Array(3,4,1,2,6,3);
fila4=Array(1,4,2,5,6,1);
fila5=Array(5,5,3,2,2,1);
fila6=Array(4,1,4,3,1,3);*/

filacolor1=Array("blue","yellow","pink","red","yellow","blue");
filacolor2=Array("blue","white","pink","red","yellow","blue");
filacolor3=Array("blue","yellow","blue","red","red","pink");
filacolor4=Array("pink","white","pink","red","green","red");
filacolor5=Array("green","white","green","green","white","yellow");
filacolor6=Array("green","white","pink","white","green","yellow");

var suma1 = 0;
var suma2 = 0;
var suma3 = 0;
var suma4 = 0;
var suma5 = 0;
var suma6 = 0;


filaycolor1 = Array();
filaycolor2 = Array();
filaycolor3 = Array();
filaycolor4 = Array();
filaycolor5 = Array();
filaycolor6 = Array();

x= 0;
k = 0;
aa = 0;
aaaa=0;
fila1print = 0;
filacolorprint = 0;

//Zona de funciones


function movimiento(fila,columna) {
    if (((fila>=1)&&(fila<=6)&&(columna>=1)&&(columna<=6))) {
  
      return true;
  
    }
  
     else if((1>fila)||(fila>6)){
       return false;
  
    }
  
  
     if((1>columna)||(columna>6)){
       return false;
  
  
    }
  
  
  }
  
  var fila = parseInt(prompt("Introduce la fila")) ;
  var columna = parseInt(prompt("Introduce la columna"));
  movimiento = movimiento(fila,columna);

  console.log(movimiento);

function iniciartablero(fila1,fila2,fila3,fila4,fila5,fila6,filacolor1,filacolor2,filacolor3,filacolor4,filacolor5,filacolor6) {


    for (let i = 0; i < fila1.length; i++) {
        suma1 = fila1[i] + filacolor1[i]
        filaycolor1.push(suma1)

    }
    for (let i = 0; i < fila2.length; i++) {
        suma2 = fila2[i] + filacolor2[i]
        filaycolor2.push(suma2)
    }
    for (let i = 0; i < fila3.length; i++) {
        suma3 = fila3[i] + filacolor3[i]
        filaycolor3.push(suma3)
    }
    for (let i = 0; i < fila4.length; i++) {
        suma4 = fila4[i] + filacolor4[i]
        filaycolor4.push(suma4)

    }
    for (let i = 0; i < fila5.length; i++) {
        suma5 = fila5[i] + filacolor5[i]
        filaycolor5.push(suma5)
    }
    for (let i = 0; i < fila6.length; i++) {
        suma6 = fila6[i] + filacolor6[i]
        filaycolor6.push(suma6)
    }
    
}

 

function compruebaTablero(filaycolor1, filaycolor2, filaycolor3, filaycolor4, filaycolor5, filaycolor6) {
    console.log(filaycolor1);
    console.log(filaycolor2);
    console.log(filaycolor3);
    console.log(filaycolor4);
    console.log(filaycolor5);
    console.log(filaycolor6);
  

}



//Inicamos y comprobamos tablero.

    iniciartablero(fila1, fila2, fila3, fila4, fila5, fila6, filacolor1, filacolor2, filacolor3, filacolor4, filacolor5, filacolor6)
compruebaTablero(filaycolor1, filaycolor2, filaycolor3, filaycolor4, filaycolor5, filaycolor6)  

var posInicial=[0,0];
var posFinal=[0,0];

var posicionnicial = 0;
var posicionfinal = 0;

var filalength = fila1.length;
var filalength2 = fila2.length;

casillaAleatoria(posInicial, posFinal);

function casillaAleatoria(posInicial, posFinal){

    
    posInicial.splice(0, 2);
    posFinal.splice(0, 2);
    
    for (let i = 0; i < 2; i++) {
        posicionnicial = Math.floor(Math.random(0)*(filalength));
        posInicial.push(posicionnicial);
        
    }

    for (let i = 0; i < 2; i++) {
        posicionfinal = Math.floor(Math.random(0)*(filalength2));
        posFinal.push(posicionfinal)
    }

    for (let i = 0; i < 2; i++) {

        if (posInicial[i] != posFinal[i]) {
            console.log(posInicial);
            console.log(posFinal);
            break;
        }else{
             
            return casillaAleatoria(posInicial, posFinal)
            
        }
         
    
}



}

/*

function pintartablero(fila1,fila2,fila3,fila4,fila5,fila6,filacolor1,filacolor2,filacolor3,filacolor4,filacolor5,filacolor6) {
    
   // document.write("<td><tr> "+ (fila1.sort(function() {return Math.random() - 0.5}) + filacolor1+" <td><tr>"))
   document.write("<table>");
   
   for (let i = 0; i < fila1.length; i++) {   
    document.write("<td><br><tr> "+ fila1[i] + filacolor1[i]+" <td><tr>")  
     
     

  }  
    document.write("<br>");
    for (let i = 0; i < fila1.length; i++) {
        fila2[i] = fila2[i];
        filacolor2[i] = filacolor2[i];
       // aaaa = fila1.sort(function() {return Math.random() - 0.5});
       document.write("<td><tr> "+ (fila2[i]) + filacolor2[i]+" <td><br><tr>")  
        
       

    }
    document.write("<br>");
    for (let i = 0; i < fila1.length; i++) {
        fila3[i] = fila3[i];
        filacolor3[i] = filacolor3[i];
       // aaaa = fila1.sort(function() {return Math.random() - 0.5});
       document.write("<td><tr> "+ (fila3[i]) + filacolor3[i]+" <td><tr>")  
        
       

    }
    document.write("<br>");
    for (let i = 0; i < fila1.length; i++) {
        fila4[i] = fila4[i];
        filacolor4[i] = filacolor4[i];
       // aaaa = fila1.sort(function() {return Math.random() - 0.5});
       document.write("<td><tr> "+ (fila4[i]) + filacolor4[i]+" <td><tr>")  
        
       

    }
    document.write("<br>");
    for (let i = 0; i < fila1.length; i++) {
        fila5[i] = fila5[i];
        filacolor4[i] = filacolor4[i];
       // aaaa = fila1.sort(function() {return Math.random() - 0.5});
       document.write("<td><tr> "+ (fila5[i]) + filacolor5[i]+" <td><tr>")  
        
       

    }
    document.write("<br>");
    for (let i = 0; i < fila1.length; i++) {
        fila6[i] = fila6[i];
        filacolor6[i] = filacolor6[i];
       // aaaa = fila1.sort(function() {return Math.random() - 0.5});
       document.write("<td><tr> "+ (fila6[i]) + filacolor6[i]+" <td><tr>")  
        
       

    }
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("</table>");
}

pintartablero(fila1,fila2,fila3,fila4,fila5,fila6,filacolor1,filacolor2,filacolor3,filacolor4,filacolor5,filacolor6); 
*/