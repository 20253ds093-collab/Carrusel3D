var yo = {
    nombre: "Emely Castañeda",
    edad: 20,
    matricula: "20253ds093",
    imagen: "https://www.korosenai.es/wp-content/uploads/2022/09/cerdo-minecraft.jpg ",
}
var bd_alumnos = [
    yo,
    {nombre: "Monserrath", edad: 18, matricula: "20253ds100", imagen: "https://ih1.redbubble.net/image.5327076443.8508/st,small,507x507-pad,600x600,f8f8f8.jpg"},
    {nombre: "Alan", edad: 19, matricula: "20253ds114", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/73/Chris_Bumstead_on_Gymshark.jpg"},
    {nombre: "Juan", edad: 18, matricula: "20253ds110", imagen: "https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/4/4f/Gato_tuxedo.png/revision/latest/scale-to-width/360?cb=20180711175014"},
    {nombre: "Leo", edad: 19, matricula: "20253ds121", imagen: "https://www.smartnfinal.com.mx/wp-content/uploads/2016/08/MANZNA-ROJA.jpg"},
    {nombre: "Liz", edad: 18, matricula: "20253ds153", imagen: "https://p.turbosquid.com/ts-thumb/de/BGPpW3/4xNRuWG8/img_01/jpg/1472072876/1920x1080/fit_q87/be3b955a90fb6bd3c09b65bec752185d347b00c0/img_01.jpg"},
    {nombre: "Vane", edad: 20, matricula: "20253ds175", imagen: "https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/4/4f/Gato_tuxedo.png/revision/latest/scale-to-width/360?cb=20180711175014"},
    {nombre: "Axel", edad: 20, matricula: "20253ds151", imagen: "https://www.smartnfinal.com.mx/wp-content/uploads/2016/08/MANZNA-ROJA.jpg"},
];

function add_alumno() {
    let tabla = document.getElementById("tabla_alumnos");
    let fila = document.createElement("tr");
    let alumno = bd_alumnos.pop();
    fila.innerHTML = `
    <td>${alumno.nombre}</td>
        <td>${alumno.edad}</td>
        <td>${alumno.matricula}</td>
        <td><img width="50" src ="${alumno.imagen}"/></td>
    `;
    tabla.appendChild(fila);
}
document.getElementById("agregar").addEventListener("click", add_alumno);

function create_alumno() {
    let nombre =document.getElementById("nombre").value;
    let nuevo_alumno={nombre:nombre,edad:0,matricula:"", imagen:""};
    bd_alumnos.push(nuevo_alumno);
    document.getElementById("formulario").reset();
}
document.getElementById("create").addEventListener("click", create_alumno);