/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
/*function operar()
{	
	var num1= parseFloat(document.getElementById("txtIdNumeroUno").value);
	var num2= parseFloat(document.getElementById("txtIdNumeroDos").value);
	var suma = num1+num2;
	var resta = num1-num2;
	var producto = num1*num2;
	var cociente = num1/num2;
	return suma,resta,producto,cociente;
}*/

function sumar()
{	
	var num1= parseFloat(document.getElementById("txtIdNumeroUno").value);
	var num2= parseFloat(document.getElementById("txtIdNumeroDos").value);
	var resultado = num1+num2;
	alert("La suma es "+resultado.toFixed(2));
}

function restar()
{
	var num1= parseFloat(document.getElementById("txtIdNumeroUno").value);
	var num2= parseFloat(document.getElementById("txtIdNumeroDos").value);
	var resultado = num1-num2;
	alert("La diferencia es "+resultado.toFixed(2));
}

function multiplicar()
{ 
	var num1= parseFloat(document.getElementById("txtIdNumeroUno").value);
	var num2= parseFloat(document.getElementById("txtIdNumeroDos").value);
	var resultado = num1*num2;
	alert("El producto es "+resultado.toFixed(2));
}

function dividir()
{
	var num1= parseFloat(document.getElementById("txtIdNumeroUno").value);
	var num2= parseFloat(document.getElementById("txtIdNumeroDos").value);
	var resultado = num1/num2;
	alert("El cociente es "+resultado.toFixed(2));
}

