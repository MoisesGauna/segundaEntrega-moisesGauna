let precioCero = 80000;
let precioUno = 100000;
let precioDos = 150000;
let precioTres = 250000;

const product =[
    {
        id: 1,
        modelo: "GTX1660",
        precio: 100000,

    },
    {
        id: 2,
        modelo: "RTX3060", 
        precio: 150000,

    },
    {
        id: 3,
        modelo: "RTX3080",
        precio: 250000,

    },
    {
        id: 4,
        modelo: "GTX1060",
        precio: 80000,
    }
];



function iniciarCompra(nombre, apellido) {
    console.log("Hola" + nombre)
    alert("Hola" + " " + nombre)
    alert("Somos una pagina de ventas de placas de video");
    
    let resp = prompt("Si desea ver las placas en stock eliga SI de lo contrario NO").toUpperCase();

    if (resp == "SI"){
        let element = product.map(
            (producto) => producto.modelo +": $" + producto.precio);
            alert("Nuestras placas en Stock son: \n" + element.join("\n"))
    };

    let placaVideo = prompt("Ingrese la placa de video que busca").toUpperCase();




    while (placaVideo != "GTX1660" && placaVideo != "RTX3060" && placaVideo != "RTX3080" && placaVideo != "GTX1060") {
        alert("No se encuentra en stock");
        placaVideo = prompt("Ingrese la placa de video que busca").toUpperCase();
    };



    let placa = product.filter((item) => item.modelo === placaVideo);

    placa.forEach((item) => {
        alert(`
        Placa seleccionada: 🔘${item.modelo}
        Precio de la placa: $${item.precio}
        `
        );
        precioUno = (item.precio);
    });



    let cantidad = parseInt(prompt("ingrese la cantidad que desa comprar"));
    let formaPago = prompt("Ingrese forma de pago = $ o u$d");
    if (formaPago == "$") {
        function calculadora(cantidad, placaVideo) {
            switch (placaVideo) {
                case "GTX1660":
                    return cantidad * precioUno;
                    break;

                case "RTX3060":
                    return cantidad * precioDos;
                    break;

                case "RTX3080":
                    return cantidad * precioTres;
                    break;

                case "GTX1060":
                    return cantidad * precioCero;
                    break;
            }
        }

    } else if (formaPago == "u$d") {
        function calculadora(cantidad, placaVideo) {
            switch (placaVideo) {
                case "GTX1660":
                    return ((cantidad * precioUno) / 540);
                    break;

                case "RTX3060":
                    return ((cantidad * precioDos) / 540);
                    break;

                case "RTX3080":
                    return ((cantidad * precioTres) / 540);
                    break;

                case "GTX1060":
                    return ((cantidad * precioCero) / 540);
                    break;
            }
        }
    }

    let resultado = calculadora(cantidad, placaVideo);
    alert(`El monto a pagar es: $ ${parseInt(resultado)}`);



    alert("Gracias por su compra nos vemos pronto 👌👌")
}

