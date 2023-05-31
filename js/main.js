// Agrega un articulo al carrito y devuelve el precio seleccionado
function agregarCelular(){
    let marca = prompt("Ingrese marca: ")
    let modelo = prompt("Ingrese modelo: ")
    let precio = parseInt(prompt("Ingrese precio: "))
    return precio
}

// Calcula el precio total con iva y le permite al usuario seleccionar en cuantas cuotas dessea pagar.
function pagar(subtotal){
    let total = subtotal * 1.2
    let cantidadCuotas = parseInt(prompt(`El total es: ${total}. 
    En cuantas cuotas desea pagar?`))
    alert("Debera pagar " + total / cantidadCuotas + " durante los proximos " + cantidadCuotas + " meses.")
}

// Contexto: Para mi proyecto final elegi hacer un e-commerce de celulares.

// Definicion de variables
let subtotal = 0;
let opc = 1
do{
    opc = parseInt(prompt(`Ingrese una opcion:"
        "1) Agregar celular"
        "2) Quitar celular"
        "3) Mostrar subtotal"
        "4) Pagar"
        "5) Vaciar carrito"
        "0) Salir`))

    switch(opc){
        case 1:
            subtotal+=agregarCelular()
        break
        case 2:
            //To be defined
        break
        case 3:
            alert(`El subtotal actual es: ${subtotal}`)
        break
        case 4:
            pagar(subtotal)
        break
        case 5:
            subtotal = 0;
        break
        case 0:
            alert("Gracias por elegirnos")
        break
        default:
            alert("Opcion invalida, por favor ingrese una presente en el menu")
    }
}while(opc != 0)