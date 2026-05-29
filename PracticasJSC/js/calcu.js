function suma (){
    //obtener info del html
    let input_numero1=document.getElementById("numero1");
    let numero1 = input_numero1.value;

    let input_numero2=document.getElementById("numero2");
    let numero2 = input_numero2.value;

    //procesar info

    let resultado = (+numero1) + (+numero2);//<-------REGRESAMOS DESPUES

    //regresar info al html

    let resultado_p = document.getElementById("resultado");
    resultado_p.innerText = "El resultado es " + resultado;
}
document.getElementById("sumar").addEventListener(
    "click", suma
);
function resta(){
    //OBTENER INFO DEL HTML
    let input_numero1=document.getElementById("numero1");
    let numero1 = input_numero1.value;

    let input_numero2=document.getElementById("numero2");
    let numero2 = input_numero2.value;
    //PROCESAR INFO
    let resultado = numero1-numero2;

    //REGRESAR INFO AL HTML
    let resultado_p = document.getElementById("resultado");
    resultado_p.innerText = "El resultado es " + resultado;
}
document.getElementById("restar").addEventListener("click", resta);

function multiplicacion(){
    //OBTENER INFO DEL HTML
    let input_numero1=document.getElementById("numero1");
    let numero1 = input_numero1.value;

    let input_numero2=document.getElementById("numero2");
    let numero2 = input_numero2.value;
    //PROCESAR INFO
    let resultado = numero1*numero2;

    //REGRESAR INFO AL HTML
    let resultado_p = document.getElementById("resultado");
    resultado_p.innerText = "El resultado es " + resultado;
}
document.getElementById("multiplicar").addEventListener("click", multiplicacion);

function division(){
    //OBTENER INFO DEL HTML
    let input_numero1=document.getElementById("numero1");
    let numero1 = input_numero1.value;

    let input_numero2=document.getElementById("numero2");
    let numero2 = input_numero2.value;
    //PROCESAR INFO
    let resultado = numero1/numero2;

    //REGRESAR INFO AL HTML
    let resultado_p = document.getElementById("resultado");
    resultado_p.innerText = "El resultado es " + resultado;
}
document.getElementById("dividir").addEventListener("click", division);