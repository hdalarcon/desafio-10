import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class CarritosDaoMongoDb extends ContenedorMongoDb {
    constructor(carrito) {
        super(carrito)
    }
}

export default CarritosDaoMongoDb