/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let respuesta = 'si';
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	let promedio;
	let respuestaIngresada;

	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador++;
		respuestaIngresada = prompt("Quiere ingresar un numero ?");
	} while (respuestaIngresada == respuesta);

	document.getElementById("txtIdSuma").value = acumulador;
	promedio = acumulador / contador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN