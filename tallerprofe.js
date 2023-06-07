//punto 3
var dia = parseInt(prompt("digite un numero del 1 al 7"));
switch (dia){
    case 1: document.write("dia 1 es lunes");
        break;
    case 2: document.write("dia 2 es martes");
        break;
    case 3: document.write("dia 3 es miercoles");
        break;
    case 4: document.write("dia 4 es Jueves");
        break;
    case 5: document.write("dia 5 es viernes");
        break;
    case 6: document.write("dia 6 es Sabado");
        break;
    case 7: document.write("dia 7 es domingo");
        break;
    default: document.write("el dia no es correcto")
}

//if ternal fuera del taller

var edad =17;
// if(edad >=18){
    // document.write("acceso permitido");
// }else{
    // document.write("acceso denegado");
// }

edad >= 18 ? "acceso permitido": "acceso denegado";
document.write(edad);
// permite guardar datos

//if anidado 
var num = parseInt(prompt("digite un numero"));
//forma anidasa
if (num > 0) {
    if (num % 2 == 0) {
        document.write("el numero " +num+ "es positivo y par");
    }else{
        document.write("en numero " +num+ "es positivo y impar");
    }
}else if (num < 0 ){
    if (num % 2 == 0){
        document.write("el numero "+num+ "es negativo y par");
    }else{
        document.write("el numero " +num+ "es negativo y impar");
    }
}else {
    document.write("el cero es positivo neutro");
}

// otra forma de respuesta 
if (num >0 && num % 2 == 0 ) {
    document.write("el numero" +num+ "es positivo y par");
}else if  (num < 0 && num % 2 == 0 ) {
    document.write("el numero" +num+ "es negativo y par");
}else if  (num > 0 && num % 2 != 0 ) {
    document.write("el numero" +num+ "es positivo y impar");
}else if  (num < 0 && num % 2 != 0 ) {
    document.write("el numero" +num+ "es negativo y impar");
}else{
    document.write("el cero es positivo neutro");
}

