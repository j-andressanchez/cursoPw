//Sentencia if
// Condicional para ejecutar siempre que la evaluación = true

const condIf = () => {
    let edad = 16;
    if(edad > 18){
        console.log("Eres mayor de edad");
    }
}

//Sentencia if... else
//Permite ejecutar si la evaluación es verdadera o falsa

const condIfelse = ()=>{
    let edad = 19;
    if(edad > 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

//Sentencia if ... else if ... else
//Permite evaluar multiples condiciones y ejecutar los bloques según sea necesario
const condElif = ()=>{
    let hora = 12;
    if(hora < 12){
        console.log("Buenos días");
    }else if(hora < 19){
        console.log("Buenas Tardes");
    }else {
        console.log("Buenas noches");
    }
}

//Sentencia Switch ... case
//Permite evaluar multiples opciones y ejecutar código específico para cada caso
const switchCase = () => {
    let dia = 'lunes';
    switch (dia) {
        case "lunes":
            console.log("Hoy es lunes");
            break;
        case "martes":
            console.log("Hoy es martes");
            break;
        case "miercoles":
            console.log("Hoy es miercoles");
            break;
        default:
            console.log("No es lunes, martes ni miercoles");
    }
}

//Operador condicional ternario
//Es una forma abreviada del if ... else

const ternario = () => {
    let edad = 5;
    let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
    console.log(mensaje);
}

ternario();