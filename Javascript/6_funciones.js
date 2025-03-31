//Son bloques reutilizables que realizan una tarea específica

//Declaraciones funcion "normal"

function saludar(horario, nombre, apellido){

    let saludo1;    

    if(horario < 12){
        saludo1 = "Buenos días,";
    }else if(horario < 19){
        saludo1 = "Buenas Tardes,";
    }else {
        saludo1 = "Buenas noches,";
    }

    console.log(saludo1, nombre, apellido);
    //console.log(`${saludo1}, ${nombre} ${apellido}`)
}

//funcion en variable
let sumar = function(a, b){
    //console.log(`la suma de ${a} + ${b} es ${a+b}`)
    return a + b;
}

//arrow function
let duplicar = (x) => x * 2;

console.log(duplicar(6))

