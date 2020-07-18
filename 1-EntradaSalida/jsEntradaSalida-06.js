/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	// VERSION 1
	//var numeroA=parseInt(document.getElementById("txtIdNumeroUno").value);
	//var numeroB=parseInt(document.getElementById("txtIdNumeroDos").value); 
	//alert(numeroA+numeroB); 
	// VERSION 2
	// el contnido de las variables se suman dentro del alert
	alert(parseInt(document.getElementById("txtIdNumeroUno").value)+parseInt(document.getElementById("txtIdNumeroDos").value));
}

//parseInt(variable)   meto algo y me da un numero intero y se lo puedo asignar a algo
//ej: edad=parseInt(edad);