function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	let estacion = document.getElementById("txtIdEstacion").value; 
	const tarifaBase = 15000;
	let tarifaFinal;

	switch (destino) {
		case "Bariloche":
			if (estacion == "Invierno")
			{
				tarifaFinal = tarifaBase * 1.2;
			}
			else if(estacion == "Verano")
			{
				tarifaFinal = tarifaBase * 0.8;
			}
			else 
			{
				tarifaFinal = tarifaBase * 1.1;
			}
			break;
		case "Cataratas":
			if (estacion == "Invierno")
			{
				tarifaFinal = tarifaBase * 0.9;
			}
			else 
			{
				tarifaFinal = tarifaBase * 1.1;
			}

			break;
		case "Mar del plata":
			if (estacion == "Invierno")
			{
				tarifaFinal = tarifaBase * 0.8;
			}
			else if(estacion == "Verano")
			{
				tarifaFinal = tarifaBase * 1.2;
			}
			else 
			{
				tarifaFinal = tarifaBase * 1.1;
			}
			break;
		case "Cordoba":
			if (estacion == "Invierno")
			{
				tarifaFinal = tarifaBase * 0.9;
			}
			else if(estacion == "Verano")
			{
				tarifaFinal = tarifaBase * 1.1;
			}
			else 
			{
				tarifaFinal = tarifaBase;
			}
			break;
	}
	alert(`La tarifa final del viaje sera de $${tarifaFinal}`);
}//FIN DE LA FUNCIÓN