// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.


class CarritoCompras {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto) {
        this.items.push(producto);
    };

    calcularTotal(items) {
        
        
        let total = 0;
        for(let item of items){
            total += item.price * item.quantity;   
        }
        return total;
    };

    aplicarDescuento(porcentaje) {
        const subtotal = this.calcularTotal(this.items);
        const descuento = subtotal * (porcentaje/100);
        return subtotal - descuento;
    };
};

module.exports = {
    CarritoCompras,
}