function mostrar() {
	let contadorDivisores = 0;
	let numero;
	do{
		numero = parseInt(prompt("Ingrese un numero"));
	}while(numero < 0 || isNaN(numero));
	for (let i = 0; i != numero; i++) {
		if (numero % i == 0) {
			contadorDivisores++;
		}
	}
	if (contadorDivisores == 1) {
		alert(`El numero ${numero} es un numero primo`);
	}
	else {
		alert(`El numero ${numero} no es un numero primo`);
	}
}