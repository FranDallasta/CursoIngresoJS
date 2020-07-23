function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;
	var estadoCivil = document.getElementById("estadoCivil").value;
	if ((edad > 18) && (estadoCivil= "Soltero"))
	{
		alert("Es soltero y no es menor");
	}
}