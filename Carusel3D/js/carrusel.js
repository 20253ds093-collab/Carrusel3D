var imagenes = [

    "Img/1.jpg",
    "Img/2.jpg",
    "Img/3.jpg",
    "Img/4.jpg",
    "Img/5.jpg",

] ;

var i = 0;
document.getElementById("Siguiente").addEventListener("click", ()=>{
    if(i<4){
        i++;
    }
    document.getElementById("carrusel").setAttribute("src", imagenes[i]);
});
document.getElementById("Anterior").addEventListener("click", ()=>{
    if(i>0){
        i--;
    }
    document.getElementById("carrusel").setAttribute("src", imagenes[i]);
});
