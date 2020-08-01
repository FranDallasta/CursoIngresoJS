/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	while (sexoIngresado != "f" && sexoIngresado != "m") {
		sexoIngresado = prompt("ingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN