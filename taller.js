//Respuesta 1
var salario = parseInt (prompt("digite salario del empleado"))
var salud = salario * 8/100; // salario * 0.08;
var pension = salario * 10/100 // salario * 0.1
var sueldoneto = salario - salud - pension // salario - (salud + pension)
document.write("<br><h1> RESPUESTA 1 </h1>")
document.write("el salario es : " +salario+"<br>");
document.write("el dto en salud es : " +salud+"<br>");
document.write("el dto en pension es : " +pension+"<br>");
document.write("el sueldo a pagar es : " +sueldoneto+"<br>");

//respuesta 2
var base1 = prompt("Ingrese la base del triangulo");
var altura1 = prompt("Ingrese la altura del triangulo");
var base = parseFloat(base1);
var altura = parseFloat(altura1);
var area = (base * altura) / 2;
document.write("<br><h1> RESPUESTA 2 </h1>")
document.write("el area del Triangulo es"+area+"<br>")

//respuesta 3
var numero1 = parseInt (prompt("ingrese nuemero 1"))
var numero2 = parseInt (prompt("ingrese nuemero 2"))
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1  % numero2;
document.write("<br><h1> RESPUESTA 3 </h1>")
document.write( "la suma es :" + suma+"<br>");
document.write( "la resta es :" + resta+"<br>");
document.write( "la multiplicacion es :" + multiplicacion+"<br>");
document.write( "la division es :" + division+"<br>");
document.write( "la modulo es :" + modulo+"<br>");

//respuesta 4
var HorasTRabajadas = parseInt (prompt("ingrese horas trabajadas"))
var valorhora = parseInt (prompt("ingrese valor de horas"))
var valorextra = parseInt (prompt("ingrese valor hora exta"))
var horasNormales = Math.min(HorasTRabajadas, 40);
var horasExtras = Math.max(HorasTRabajadas - 40, 0);
var sueldoNormal = horasNormales * valorhora;
var sueldoExtra = horasExtras * valorextra;
var sueldoMensual = sueldoNormal + sueldoExtra;
document.write("<br><h1> RESPUESTA 4 </h1>")
document.write( "el resultado mensual: $ :" +sueldoMensual+"<br>");

//respuesta 5
var precioPro = parseInt (prompt("ingrese el precio del producto"))
var precioProducto = parseInt (prompt("ingrese el precio del producto"))
var iva = precioPro * 0.10 
var precioSinIva = precioProducto - iva;
var totalPagar = precioProducto;
document.write("<br><h1> RESPUESTA 5 </h1>")
document.write( "el iva es :" + iva+"<br>");
document.write( "el precio sin iva es $ :" + precioSinIva+"<br>");
document.write( "toral a pagar es $ :" + totalPagar+"<br>");

//respuesta  6
var totalHombres = parseInt (prompt("ingrese el total de hombres"))
var totalMujeres = parseInt (prompt("ingrese el total de mujeres"))
var totalAlumnos = totalHombres + totalMujeres;
var porcentajeHombres = (totalHombres / totalAlumnos) * 30;
var porcentajeMujeres = (totalMujeres / totalAlumnos) * 30;
document.write("<br><h1> RESPUESTA 6 </h1>")
document.write( "porcentaje de hombres es :" + porcentajeHombres+"<br>");
document.write( "porcentaje de mujeres es $ :" + porcentajeMujeres+"<br>");

//respuesta 7
var nota1 = parseInt (prompt("ingrese nota 1"))
var nota2 = parseInt (prompt("ingrese nota 2"))
var nota3 = parseInt (prompt("ingrese nota 3"))
var notasValidas = nota1 >= 1 && nota1 <= 5 &&
                     nota2 >= 1 && nota2 <= 5 &&
                     nota3 >= 1 && nota3 <= 5;
document.write("<br><h1> RESPUESTA 7 </h1>")
if (notasValidas) {
  const promedio = (nota1 + nota2 + nota3) / 3;
  document.write("resultado de promedio es :" +promedio+"<br>")
} else {
  document.write("Las notas debe estar en 1 al 5")
}
