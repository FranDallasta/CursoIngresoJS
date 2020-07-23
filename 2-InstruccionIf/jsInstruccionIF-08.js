function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	let estadoCivil = document.getElementById("estadoCivil").value;
	/*if ((edad > 18) && (estadoCivil == "Soltero"))
	{
		alert("Es soltero y no es menor");
	}*/
	if (!(edad < 18 || estadoCivil != "Soltero"))
	{
		alert("Es soltero y no es menor");
	}
}