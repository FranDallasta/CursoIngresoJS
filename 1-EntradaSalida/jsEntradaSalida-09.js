/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var suledo = parseInt(document.getElementById("txtIdSueldo").value);
	var resultado = suledo + (suledo/10);
	document.getElementById("txtIdResultado").value = resultado;
}
