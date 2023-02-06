
var boton_encriptar = document.querySelector(".boton-encriptar");
var boton_desencriptar = document.querySelector(".boton-desencriptar");
var boton_copiar = document.querySelector(".btn-copiar");


var resultado = document.getElementById("caja-aux");

var caja_aux = document.getElementById("caja-aux");
var input = document.querySelector(".input-texto");


var btn_copiar = document.getElementById("boton-copiar").style; 
var munieco = document.getElementById("imagen-muñeco").style;
var mensajeAdelante1 = document.getElementById("mensaje-rectangulo1").style;
var mensajeAdelante2 = document.getElementById("mensaje-rectangulo2").style;



function verificarTexto(){
    var texto = obtenerTexto();
    var esMayuscula = false;
    for(var i=0 ; i< texto.length;i++){
        if(texto[i] != texto[i].toLowerCase()){
            esMayuscula = true;
        }
        esMayuscula=esMayuscula||esMayuscula;
    }
    if(esMayuscula == true){
        return true;
    }
    else{
        return false;
    }

}
function resetText(){ 
    document.getElementById("input").value="";
}
function encriptar(){
    if(verificarTexto() == true){
        alert("NO SE ADMINTEN MAYUSCULAS");
        
    }
    else{
        esconderFiguras();
        mostrarCajaCopiar();
        caja_aux.value = encriptarText(obtenerTexto());
        resetText();

    }
    }
function desencriptar(){
    esconderFiguras();
    mostrarCajaCopiar();
    caja_aux.value  = desencriptarText(obtenerTexto());
    resetText();

}    


function esconderFiguras(){
    munieco.display="none";
    mensajeAdelante1.display="none";
    mensajeAdelante2.display="none";
        
    }
function mostrarCajaCopiar(){
    btn_copiar.visibility = "visible";
}    
    
function obtenerTexto(){
    var input = document.querySelector(".input-texto");
    return input.value;


}
function encriptarText(mensaje){
    var texto = mensaje;
    var textoFinal =" ";

    for( var i=0;i<texto.length;i++){
        if(texto[i] == "e" ){
            textoFinal = textoFinal + "enter";
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";  
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal= textoFinal + texto[i]; 
        }
    }
    return textoFinal;
    
}
function desencriptarText(mensaje){
    var texto = mensaje;
    var textoFinal =" ";

    for( var i=0;i<texto.length;i++){
        if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i=i+4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i=i+3;
        }
        else if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i=i+1;  
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i=i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i=i+3
        }
        else{
            textoFinal= textoFinal + texto[i]; 
        }
    }
    return textoFinal;
    

}

function copiarTexto(){
    resultado.select();
    resultado.setSelectionRange(0,99999);

    navigator.clipboard.writeText(resultado.value);
   
    
    alert("copiado");



    

}

boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;




