function mostrar() {
	let contadorDivisores = 0;
	let numero;
	numero = parseInt(prompt("Ingrese un numero"));
	for (let i = 0; i != numero; i++) {
		if (numero % i == 0) {
			alert(`El numero ${i} es un divisor de ${numero}`);
			contadorDivisores++;
		}
	}
	alert(`La cantidad de divisores es de ${contadorDivisores}`);
}