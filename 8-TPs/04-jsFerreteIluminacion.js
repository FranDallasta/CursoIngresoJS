/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    let marcaLamparas = document.getElementById("Marca").value;
    const precioLampara = 35;
    let precio;
    let impuestito;

    switch (cantLamparas) {
        case 1:
        case 2:
            precio = (precioLampara * cantLamparas); // compra una o dos lamparas
            break;
        case 3:
            if (marcaLamparas == "ArgentinaLuz") {
                precio = (precioLampara * cantLamparas) * 0.85; // decuento del 15%
            }
            else if (marcaLamparas == "FelipeLamparas") {
                precio = (precioLampara * cantLamparas) * 0.9; // descuento del 10%
            }
            else {
                precio = (precioLampara * cantLamparas) * 0.95; // descuento del 5%
            }
            break;
        case 4:
            if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas") {
                precio = (precioLampara * cantLamparas) * 0.75; // decuento del 25%
            }
            else {
                precio = (precioLampara * cantLamparas) * 0.8; // descuento del 20%
            }
            break;
        case 5:
            if (marcaLamparas == "ArgentinaLuz") {
                precio = (precioLampara * cantLamparas) * 0.6; // decuento del 40%
            }
            else {
                precio = (precioLampara * cantLamparas) * 0.7; // descuento del 30%
            }
            break;
        case 6:
            precio = (precioLampara * cantLamparas) * 0.5; //descuento del 50 %
            break;
        default:
            impuestito = ((precioLampara * cantLamparas) * 0.5) * 0.1;
            precio = (precioLampara * cantLamparas) * 0.5 + impuestito;
            alert(`Usted pago ${impuestito.toFixed(2)} de IIBB`);
            break;
    }
    document.getElementById("txtIdprecioDescuento").value = precio.toFixed(2);
}
