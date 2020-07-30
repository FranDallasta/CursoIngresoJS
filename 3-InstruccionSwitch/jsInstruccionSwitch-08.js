function mostrar() {
	let destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Ushuaia":
		case "Bariloche":
			alert("Frio");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Calor");
			break;
	}

}//FIN DE LA FUNCIÓN