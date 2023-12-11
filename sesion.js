//TIPOS DE DATOS PRIMITIVOS EN JAVASCRIPT//
/*var palabra = 'hola';
var palabranueva = 'hola';
var a= 12.45

var num1 = 10;

var num2 = 20;
var num3 = 53;

var signo;


console.log(palabra)
console.log(palabranueva)
console.log(a)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(a)

//BOOLEANO//
var valor = 'true'
console.log (typeof valor);
var valor = 'false'
console.log (typeof valor);

var entero = 15
var palabra = '15'
var decimal = 78.38
console.log = (typeof entero)
console.log = (typeof palabra)
console.log = (typeof decimal)
*/
function obtenerDatos() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var fecha_nacimiento = document.getElementById("fecha-nacimiento").value;
    var fem = document.getElementById("f").checked;
    var masc = document.getElementById("m").checked;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;
    var deporte = document.getElementById("deporte").checked;

    //  var nombres = document.getElementById("nombres").value; o .checked

    var datos = "Nombres             : " + nombres +
                "\nApellidos           : " + apellidos +
                "\nCorreo              : " + email +
                "\nFecha de nacimiento : " + fecha_nacimiento +
                "\nEs mujer?           : " + fem +
                "\nEs hombre?          : " + masc +
                "\nEstatura            : " + estatura + " cm" +
                "\nPeso                : " + peso + " Kg" +
                "\nRealiza deporte?    : " + deporte;
    
    console.log(datos);
};
