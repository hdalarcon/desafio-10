import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class CarritosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super('carrito')
    }
}

export default CarritosDaoMongoDb