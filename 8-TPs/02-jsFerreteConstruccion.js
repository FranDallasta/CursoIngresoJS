/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseFloat(document.getElementById("txtIdLargo").value);
    var ancho = parseFloat(document.getElementById("txtIdAncho").value);
    var alambre = 6* (largo + ancho);
    alert(alambre);
}
function Circulo () 
{
    var radio = parseFloat(document.getElementById("txtIdRadio").value);
    var albreCircular = 6* radio* Math.PI;
    alert(albreCircular);
}
function Materiales () 
{
    var largo = parseFloat(document.getElementById("txtIdLargo").value);
    var ancho = parseFloat(document.getElementById("txtIdAncho").value);
    var superficie = largo * ancho; 
    var cementoTotal = 2 * superficie;
    var calTotal = 3 * superficie; 
    alert(`Se necesitaran ${cementoTotal} bolsas de cemento y ${calTotal} bolsas de cal`);
}