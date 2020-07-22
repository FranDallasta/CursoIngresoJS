/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var suledo = parseInt(document.getElementById("txtIdImporte").value);
	var resultado = suledo - (suledo/4);
	document.getElementById("txtIdResultado").value = resultado;
}
