//Ciclo While
//Se desconoce el número de iteraciones a realizar

const cicloWhile = function(){
    let i = 5;
    while (i < 5){
        console.log(i);
        i++;
    }
}

//Ciclo do While
//Se desconoce el número de iteraciones, pero se asegura mínimo una ejecución
const cicloDoWhile = function(){
    let i = 0;
    do{
        console.log(i);
        i++;
    } while(i < 5);
}

//Ciclo For
//Iterar arrays o un número determinado de iteraciones
const cicloFor = function(){
    for(let i = 0 ; i < 5 ; i++){
        console.log(i);
    }
}

//Ciclo For in
//Iterar sobre propiedades de un objeto
const cicloForin = function(){
    const perro = {
        raza: 'labrador', 
        edad: 1
    };
    
    for (const propiedad in perro){
        console.log(`${propiedad}: ${perro[propiedad]}`)
    }
}

//Ciclo for ... of
//Ideal para iterar sobre elementos de un array
const cicloForof = function(){
    const frutas = ['manzana', 'fresa', 'lulo', 'pera'];
    
    for (const fruta of frutas){
        console.log(fruta);
    }
}

//Ciclo foreach
//Ideal para iterar  sobre arrays
const cicloForeach = function(){
    const frutas = ['manzana', 'fresa', 'lulo'];

    frutas.forEach((fruta, indice) => {
        console.log(`Fruta ${indice}: ${fruta}`)
    })
}

cicloForeach()