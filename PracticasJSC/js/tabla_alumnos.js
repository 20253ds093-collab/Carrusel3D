var yo = {
    nombre: "Elias",
    edad: 19,
    matricula: "20253ds078",
    imagen: "/imgg/perrito.jpg",
};

var bd_alumnos= [];

bd_alumnos.push(yo);
bd_alumnos.push({
    nombre: "Ixaya",
    edad: 18,
    matricula: "20253ds077",
    imagen: "/imgg/gatito.jpg",
});

function add_alumno(){
    let alumno = bd_alumnos.pop();
    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${alumno.nombre}</td>
        <td>${alumno.edad}</td>
        <td>${alumno.matricula}</td>    
        <td><img width="50" src="${alumno.imagen}" /></td>
    `;
    let tabla = document.getElementById("tabla_alumnos");
    tabla.appendChild(fila);
}

document.getElementById("add").addEventListener(
    "click",add_alumno
);

function agregar_alumno(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let matricula = document.getElementById("matricula").value;
    let imagen = document.getElementById("imagen").value;


    let nuevo_alumno = {
        nombre: nombre,
        edad: edad,
        matricula: matricula,
        imagen: imagen,
    }
    bd_alumnos.push(nuevo_alumno);

    document.getElementById("AgregarAlumno").reset();
    alert("Alumno agregado correctamente");
}

document.getElementById("Add_alumno").addEventListener("click", agregar_alumno)
