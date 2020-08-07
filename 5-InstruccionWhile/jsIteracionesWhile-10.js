function mostrar() {
	let numeroIngresado = 0;
	let sumaPos = 0;
	let sumaNeg = 0;
	let acumualadorPos = 0;
	let acumualadorNeg = 0;
	let respuesta = "s";
	let promedioPos = 0;
	let promedioNeg = 0;
	let diferenciaEntre = 0;
	let numerosPares = 0;

	respuesta = prompt("Quiere ingresar un numero ?");
	while (respuesta == "s") {

		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		if (numeroIngresado > 0) {
			sumaPos = sumaPos + numeroIngresado;
			acumualadorPos++;

		}
		else if (numeroIngresado < 0) {
			sumaNeg = sumaNeg + numeroIngresado;
			acumualadorNeg++;
		}
		if (numeroIngresado % 2 == 0) {
			numerosPares++;
		}
		respuesta = prompt("Quiere ingresar otro numero ?");
	}

	if (acumualadorPos == 0) {
		promedioPos = 0;
	}
	else {
		promedioPos = sumaPos / acumualadorPos;
	}
	if (acumualadorNeg == 0) {
		promedioNeg = 0;
	}
	else {
		promedioNeg = sumaNeg / acumualadorNeg;
	}

	diferenciaEntre = promedioPos - promedioNeg;

	document.writeln(`La suma de ${acumualadorPos} positivos es de ${sumaPos}, la de ${acumualadorNeg} negativos es de ${sumaNeg} ` + "<br>");
	document.writeln(`El promedio de psotivos es de ${promedioPos.toFixed(2)} y el de negativos ${promedioNeg.toFixed(2)}` + "<br>");
	document.writeln(`La diferencia entre Positivos y Negativos ${diferenciaEntre.toFixed(2)}` + "<br>");
	document.writeln(`Hay ${numerosPares} numeros pares` + "<br>");
}