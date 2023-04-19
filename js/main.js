alert("Bienvenido al deposito electro fernandez");

let deposito =prompt ("QUIERE EL STOCK DE CABLE/TERMICAS/FOCOS O EL STOCK TOTAL");

class Productos{
    constructor (precio){

        
        this.precio=precio;
       

    }
}

let miProducto =[
    new Productos  (10000),
    new Productos  (350),
    new Productos  (550),
];

if (deposito.toUpperCase()=="CABLE"){

    let resultado = "la canditad de metros de cable es 10000";
    alert(resultado);
    console.log(resultado);
}
if (deposito.toUpperCase()=="TERMICA"){

    let resultado = "la canditad de termicas de cable es 350";
    alert(resultado);
    console.log(resultado);
}
if (deposito.toUpperCase()=="FOCOS"){

    let resultado = "la canditad de focos de cable es 550";
    alert(resultado);
    console.log(resultado);
}
if (deposito.toUpperCase()=="TOTAL"){

    let precioTotal = miProducto.reduce ((acumulador,miProducto) => acumulador + miProducto.precio,0) ;
    alert(precioTotal);
    console.log(precioTotal);
}