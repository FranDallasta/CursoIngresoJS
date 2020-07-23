function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	let estadoCivil = document.getElementById("estadoCivil").value;
	if ((edad < 18) && (estadoCivil!= "Soltero"))
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}