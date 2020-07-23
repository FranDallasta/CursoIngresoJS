function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;
	if (!(( edad >= 13)&&(edad <= 17)))
	{
		alert("Es no adolescente");
	}
	else 
	{
		alert("Es adolescente");
	}
}