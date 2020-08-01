/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let respuesta = 'si';
	let sumaPositivos = 0;
	let multiplicacionNegativos = 1;
	let numeroIngresado;
	let respuestaIngresada;

	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		if (numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else if (numeroIngresado <0) {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuestaIngresada = prompt("Quiere ingresar otro numero ?");
	} while (respuestaIngresada == respuesta);

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN