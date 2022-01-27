
const button = document.getElementById("btn-cripto");
const button2 = document.getElementById("btn-descripto");
const button3 = document.getElementById("btn-copy");
var texto = document.getElementById("input-texto");
var texto2 = document.getElementById("msg");
button.addEventListener('click', criptogafar);
button2.addEventListener('click', descriptografar);
button3.addEventListener('click', copiar);


function criptogafar(){
 var text= texto.value;
 let letra = text.replace("e","enter");
 letra = letra.replace("i","imes");
 letra = letra.replace("a", "ai");
 letra = letra.replace("o", "obter");
 letra = letra.replace("u", "ufat");
 alert(letra); 
 texto2.setAttribute('value', letra);  
 

}
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/


function descriptografar(){
  var text= texto.value;
 let letra = text.replace("enter","e");
 letra = letra.replace("imes","i");
 letra = letra.replace("ai", "a");
 letra = letra.replace("obter", "o");
 letra = letra.replace("ufat", "u");
 alert(letra); 
 
 

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
}

function copiar(letra){

  
}


