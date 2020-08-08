
function mostrar() {
	//Informacion de producto
	let tipoProducto;
	let precioProducto;
	let fabricanteProducto;
	let marcaProducto;
	let cantidadProducto;
	//A) Variables para buscar el alcohol mas barato
	let menorPrecioAlcohol = 300;
	let cantidadAlcohol;
	let fabricateAlcohol;
	//B) Variables para buscar el tipo con mas unidades
	let promedioTipos;
	let mayorCantidadTipo = 0;
	let mayorUnidadTipo;
	let mayorCantidadPrecio;
	//C) Variables para el total de jabones
	let totJabones = 0;

	for (let i = 0; i < 5; i++) { 
		do {
			tipoProducto = prompt("Ingrese el tipo de producto");
		} while (!(tipoProducto == "barbijo" || tipoProducto == "alcohol" || tipoProducto == "jabon"));
		do {
			precioProducto = parseInt(prompt("Ingrese el precio del producto"));
		} while (!(precioProducto > 100 && precioProducto < 300));
		do {
			cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto del producto"));
		} while (!(cantidadProducto > 0 && cantidadProducto < 1000));
		fabricanteProducto = prompt("Ingrese el nombre del fabricante");
		marcaProducto = prompt("Ingrese el nombre de la marca");

		if (tipoProducto == "alcohol") {		//A
			if (precioProducto < menorPrecioAlcohol) {
				menorPrecioAlcohol = precioProducto;
				cantidadAlcohol = cantidadProducto;
				fabricateAlcohol = fabricanteProducto;
			}
		}

		if (cantidadProducto > mayorCantidadTipo) { 		//B
			mayorCantidadTipo = cantidadProducto;
			mayorUnidadTipo = tipoProducto;
			mayorCantidadPrecio = precioProducto;
			promedioTipos = parseFloat(mayorCantidadPrecio / mayorCantidadTipo);
		}

		if (tipoProducto == "jabon") { //C
			totJabones = totJabones + cantidadProducto;
		}
	}
	alert(`El alcohol con menor precio vale ${menorPrecioAlcohol}, hay ${cantidadAlcohol}unidades y lo fabrica ${fabricateAlcohol}`);
	alert(`El ${mayorUnidadTipo} con mas unidades tiene ${mayorCantidadTipo} y da un promedio de ${promedioTipos}`);
	alert(`La cantitad total de jabones es de ${totJabones}`);
}

