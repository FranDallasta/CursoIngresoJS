function mostrar()
{
	let nota = Math.floor(Math.random()* 10);
	if ((nota <= 10) && (nota>=9))
	{
		alert("EXCELENTE");
	}
	else if((nota < 9) && (nota >= 4))
	{
		alert("APROBÓ");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN