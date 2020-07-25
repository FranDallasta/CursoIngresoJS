function mostrar()
{
	let vMes = document.getElementById("txtIdMes").value;
	switch (vMes)
	{	
		case "Febrero":
	 		alert("Este mes tiene más de 28 días");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días.");
			break;
		default :
		alert( "Este mes tiene 30 días");
			break;
	}

}//FIN DE LA FUNCIÓN