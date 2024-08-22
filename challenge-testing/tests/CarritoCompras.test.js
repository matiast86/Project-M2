const { CarritoCompras } = require("../index");


// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
describe("La clase 'CarritoCompras'", () => {
   
    let carrito;
    
    beforeEach(() => {
         carrito = new CarritoCompras();
    });

    it("Debe ser una clase", () => {
        expect(typeof CarritoCompras.prototype.constructor).toBe('function')
    });

    it("El carrito inicializado debe ser un array", () => {
        expect(Array.isArray(carrito.items)).toBe(true);
    });

    it("Debe tener el método 'agregarProducto()'", () => {
        expect(CarritoCompras.prototype.agregarProducto).toBeDefined();
    });

    it("Debe tener el método 'calcularTotal()'", () => {
        expect(CarritoCompras.prototype.calcularTotal).toBeDefined();
    });

    it("Debe tener el método 'aplicarDescuento()'", () => {
        expect(CarritoCompras.prototype.aplicarDescuento).toBeDefined();
    });

    it("El método 'agregarProducto()' debe agregar un producto al array", () => {
        carrito.agregarProducto({ name: "Producto A", price: 10, quantity: 2 });
        expect(carrito.items.length).toBe(1);
        expect(carrito.items[0].name).toBe("Producto A");
        expect(carrito.items[0].price).toBe(10);
        expect(carrito.items[0].quantity).toBe(2);
    });
    
    it("El método 'calcularTotal()' debe calcular el total a pagar de los items del carrito", () => {
        carrito.items = [
            { name: "Producto A", price: 10, quantity: 2 },
            { name: "Producto B", price: 5, quantity: 3 }
        ];
        
        expect(carrito.calcularTotal(carrito.items)).toBe(35);
    });

    it("El método 'aplicarDescuento()' debe aplicar un determinado descuento al total", () => {
        carrito.items = [
            { name: "Producto A", price: 10, quantity: 2 },
            { name: "Producto B", price: 5, quantity: 3 }
        ];

        expect(carrito.aplicarDescuento(10)).toBe(31.5);
        expect(carrito.aplicarDescuento(15)).toBe(29.75);
        expect(carrito.aplicarDescuento(20)).toBe(28);
    });
});
