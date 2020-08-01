function mostrar() {
	var contador = 0;
	var acumulador = 0;
	var numeroIngresado;
	var promedio;

	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador++;
	} while (contador < 5)
	document.getElementById("txtIdSuma").value = acumulador
	promedio = acumulador / contador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN