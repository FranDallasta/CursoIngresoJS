/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioA = parseFloat(document.getElementById("txtIdPrecioUno").value);
    var precioB = parseFloat(document.getElementById("txtIdPrecioDos").value);
    var precioC = parseFloat(document.getElementById("txtIdPrecioTres").value);
    var total = precioA + precioB + precioC;
    alert(total);
}
function Promedio () 
{
    var precioA = parseFloat(document.getElementById("txtIdPrecioUno").value);
    var precioB = parseFloat(document.getElementById("txtIdPrecioDos").value);
    var precioC = parseFloat(document.getElementById("txtIdPrecioTres").value);
    var prom = (precioA + precioB + precioC)/3;
    alert(prom);
}
function PrecioFinal () 
{
    var precioA = parseFloat(document.getElementById("txtIdPrecioUno").value);
    var precioB = parseFloat(document.getElementById("txtIdPrecioDos").value);
    var precioC = parseFloat(document.getElementById("txtIdPrecioTres").value);
    var sumaTotal = precioA + precioB + precioC;
    var iva = sumaTotal + sumaTotal *(21/100);
    alert(iva);
}