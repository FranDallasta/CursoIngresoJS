/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let numeroIngresado = 0;
	let numeroMaximo = 0;
	let numeroMinimo = 0;
	let respuesta;
	respuesta = "si";

	respuesta = prompt("Quiere ingresar un numero ?");
	while (respuesta == "si") {

		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		}
		else if (numeroMinimo > numeroIngresado) {
			numeroMinimo = numeroIngresado;
		}
		respuesta = prompt("Quiere ingresar otro numero ?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}