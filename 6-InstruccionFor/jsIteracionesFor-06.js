function mostrar3() {
	let repeticiones;
	let numerosPares = 0;
	repeticiones = parseInt(prompt("Ingrese un numero"));
	for (let i = 0; i <= repeticiones; i = i + 2) {
		document.writeln(i + "<br>");
		numerosPares++
	}
	document.writeln(`La cantidad de numeros pares es de ${numerosPares}` + "<br>");
}//FIN DE LA FUNCIÓN


function mostrar() {
	let num;
	let cont = 0;
	num = parseInt(prompt("ingrese un numero"));
	for (let i = 1; i <= num; i++) {
		if (i % 2 == 0) // numero par
		{
			alert(`El numero ${i} es par`);
			cont++;
		}
	}
	alert(`La cantidad de numeros pares es de ${cont}`);
}