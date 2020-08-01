/* al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	var numeroIngresado = -1;

	while (numeroIngresado > 9 || numeroIngresado < 0) {
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	}
	document.getElementById("txtIdNumero").value = "El numero validado es "+numeroIngresado;
}//FIN DE LA FUNCIÓN