
const somar= document.getElementById("somarBtn");
const subtrair= document.getElementById("subtrairBtn");
const dividir= document.getElementById("dividirBtn");
const multiplicar= document.getElementById("multiplicarBtn");
const exibirResultado=document.getElementById("resultadoSpan");


somar.onclick= () =>{
    const inputNumero1= parseInt(document.getElementById("inputNumero1").value);
    const inputNumero2= parseInt(document.getElementById("inputNumero2").value);

    if(isNaN(inputNumero1)||isNaN(inputNumero2))
    {

        exibirResultado.textContent="Campos em branco Insira Números ";
        return;

    }
   
let resultado= inputNumero1+inputNumero2;

exibirResultado.textContent=resultado;


};
subtrair.onclick= () =>{
    const inputNumero1= parseInt(document.getElementById("inputNumero1").value);
    const inputNumero2= parseInt(document.getElementById("inputNumero2").value);

    if(isNaN(inputNumero1)||isNaN(inputNumero2))
    {

        exibirResultado.textContent="Campos em branco Insira Números ";
        return;

    }
let resultado= inputNumero1-inputNumero2;
exibirResultado.textContent=resultado;

};
dividir.onclick= () =>{
    const inputNumero1= parseInt(document.getElementById("inputNumero1").value);
    const inputNumero2= parseInt(document.getElementById("inputNumero2").value);

    if(isNaN(inputNumero1)||isNaN(inputNumero2))
    {

        exibirResultado.textContent="Campos em branco Insira Números ";
        return;

    }
   
let resultado= inputNumero1/inputNumero2;

exibirResultado.textContent=resultado;


};
multiplicar.onclick= () =>{
    const inputNumero1= parseInt(document.getElementById("inputNumero1").value);
    const inputNumero2= parseInt(document.getElementById("inputNumero2").value);

    if(isNaN(inputNumero1)||isNaN(inputNumero2))
    {

        exibirResultado.textContent="Campos em branco Insira Números ";
        return;

    }
   
let resultado= inputNumero1*inputNumero2;

exibirResultado.textContent=resultado;


};