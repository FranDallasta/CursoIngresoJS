function mostrar()
{
	let vMin = 1;
	let vMax = 10;
	let nota = Math.round(Math.random()* (vMax - vMin)+vMin);
	if ((nota>=9))
	{
		alert(nota + " EXCELENTE");
	}
	else if((nota < 9) && (nota >= 4))
	{
		alert(nota + " APROBÓ");
	}
	else
	{
		alert(nota + " Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN