//THIS CODE IS FOR AN INTEREST-FREE MONTH PAYMENT SIMULATOR.


function calcular_pagos(compra, plazo){

    let mensualidad;

    if(plazo == 9){
        mensualidad = compra / plazo;
        return mensualidad;
    }

    else if(plazo == 12){
        mensualidad = compra / plazo;
        return mensualidad;
    }

    else if(plazo == 18){
        mensualidad = compra / plazo;
        return mensualidad;
    }

    else{
        console.log("PLAZO INCORRECTO");
    }
}


console.log("Bienvenida/o. Calcula tu compra a meses sin intereses");

let compra = parseFloat(prompt("Ingrese el monto de su compra"));
let plazo = parseInt(prompt("Elija su plazo: 9, 12 y 18 meses"));

console.log("Su compra será por un total de:", compra , "pesos mexicanos");
console.log("A", plazo , "meses");
console.log("Su pago mensual será de:", calcular_pagos(compra, plazo));