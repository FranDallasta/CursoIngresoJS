function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;
	if (( edad >= 13)&&(edad <= 17))
	{
		alert("Es adolescente");
	}
	else if(edad>17)
	{
		alert("Es adulto");
	}
	else
	{
		alert("Es un niño");
	}

}//FIN DE LA FUNCIÓN