/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    var aCentigrados= (5*(fahrenheit -32))/9;
    alert (`${fahrenheit} grados fahrenheit son ${aCentigrados.toFixed(2)} grados Centigrados`);
}

function CentigradosFahrenheit () 
{
    var centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
    var aFahrenheit= ((9 * centigrados)/5 )+ 32;
    alert (`${centigrados} grados centigrados son ${aFahrenheit.toFixed(2)} grados fahrenheit`);
}
