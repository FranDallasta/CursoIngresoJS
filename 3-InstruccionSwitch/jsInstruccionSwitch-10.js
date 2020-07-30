function mostrar() {
	let destino = document.getElementById("txtIdDestino").value;
	let estacion = document.getElementById("txtIdEstacion").value;
	let destinoFinal;

	switch (destino) {
		case "Bariloche":
			if (estacion == "Invierno" || estacion == "Otoño") {
				destinoFinal = "Se viaja";
			}
			else {
				destinoFinal = "No se viaja";
			}
			break;
		case "Mar del plata":
		case "Cataratas":
			if (estacion == "Verano" || estacion == "Otoño" || estacion == "Primavera") 
			{
				destinoFinal = "Se viaja";
			}
			else {
				destinoFinal = "No se viaja";
			}
			break;
		case "Cordoba":
			if ( estacion == "Otoño" || estacion == "Primavera") 
			{
				destinoFinal = "Se viaja";
			}
			else {
				destinoFinal = "No se viaja";
			}
			break;
	}
	alert (destinoFinal);
}//FIN DE LA FUNCIÓN