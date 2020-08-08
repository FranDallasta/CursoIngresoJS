function mostrar() {
  let respuesta = "s";
  let tipo; // arena, cal, cemento
  let cantidadBolsas;
  let precioBolsas;
  //A) Precio total de bolsas a pagar
  let totalSinDesc = 0;
  //B) Precio total a pagar con descuento
  let cantidadBolsasTotal = 0;
  let totalConDesc = 0;
  //C) Informar el tipo con mas cantidad de bolsas
  let arenasBolsasTot = 0;
  let calBolsasTot = 0;
  let cementoBolsasTot = 0;
  //D) El tipo mas caro
  let arenaCara = 0;
  let cementoCaro = 0;
  let calCara = 0;

  do {
    do {
      tipo = prompt("Ingrese el tipo de producto");
    } while (!(tipo == "arena" || tipo == "cemento" || tipo == "cal"));

    do {
      cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));
    } while (isNaN(cantidadBolsas));

    do {
      precioBolsas = parseInt(prompt("Ingrese el precio de bolsas"));
    } while (!(precioBolsas > 0));

    respuesta = prompt("Quiere ingresar otro producto ?");

    totalSinDesc = totalSinDesc + precioBolsas; //A
    cantidadBolsasTotal = cantidadBolsasTotal + cantidadBolsas; // B

    switch (tipo) { // C
      case "arena":
        arenasBolsasTot = arenasBolsasTot + cantidadBolsas;
        if (precioBolsas > arenaCara) {
          arenaCara = precioBolsas;
        }
        break;
      case "cemento":
        cementoBolsasTot = cementoBolsasTot + cantidadBolsas;
        if (precioBolsas > cementoCaro) {
          cementoCaro = precioBolsas;
        }
        break;
      case "cal":
        calBolsasTot = calBolsasTot + cantidadBolsas;
        if (precioBolsas > calCara) {
          calCara = precioBolsas;
        }
        break;
    }
  } while (respuesta == "s");

  alert(`La cantidad total a pagar (sin descuento) es de ${totalSinDesc}`);

  if (cantidadBolsasTotal >= 15 && cantidadBolsasTotal < 30) {
    totalConDesc = totalSinDesc * 0.85;
    alert(`El total a pagar con descuento es de ${totalConDesc}`);
  }
  else if (cantidadBolsasTotal > 30) {
    totalConDesc = totalSinDesc * 0.75;
    alert(`El total a pagar con descuento es de ${totalConDesc}`);
  }
  else {
    alert(`No hay descuento`);
  }

  if (arenasBolsasTot > cementoBolsasTot && arenasBolsasTot > calBolsasTot) {
    alert(`El tipo con mayor cantidadde bolsas es la arena.`);
  }
  else if (cementoBolsasTot > arenasBolsasTot && cementoBolsasTot > calBolsasTot) {
    alert(`El tipo con mayor cantidadde bolsas es el cemento.`);
  }
  else {
    alert(`El tipo con mayor cantidadde bolsas es la cal.`);
  }

  if (arenaCara > cementoCaro && arenaCara > calCara) {
    alert(`El tipo con mas caro es la arena.`);
  }
  else if (cementoCaro> arenaCara && cementoCaro > calCara) {
    alert(`El tipo mas caro es el cemento.`);
  }
  else {
    alert(`El tipo mas caro es la cal.`);
  }

}

