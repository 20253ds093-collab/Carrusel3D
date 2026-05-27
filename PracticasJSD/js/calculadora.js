console.log("hola3d");

function sumar () {
    //obtener num form
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    //hacer
    let res = (+numero1) + (+numero2);

    document.getElementById("resultado").innerHTML = "el resultado es: " + res;
}
document.getElementById("btn_suma").addEventListener("click", sumar);

    function restar (){
        //obtener num form
        let numero1 = document.getElementById("numero1").value;
        let numero2 = document.getElementById("numero2").value;
        //hacer
        let res= (+numero1) - (+numero2);


        document.getElementById("resultadoresta").innerHTML="el resultado es: " + res;


}
document.getElementById("btn_resta").addEventListener("click", restar);

function dividir (){
    //obtener num form
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    //hacer
    let res= (+numero1) / (+numero2);


    document.getElementById("resultadodividir").innerHTML="el resultado es: " + res;


}
document.getElementById("btn_dividir").addEventListener("click", dividir);


function multiplicar (){
    //obtener num form
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    //hacer
    let res= (+numero1) * (+numero2);


    document.getElementById("resultadomultiplicar").innerHTML="el resultado es: " + res;


}
document.getElementById("btn_multiplicar").addEventListener("click", multiplicar);

