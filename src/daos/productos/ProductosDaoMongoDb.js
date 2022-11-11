import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class ProductosDaoMongoDb extends ContenedorMongoDb {
    constructor(productos) {
        super(productos)
    }
    async save(productos = { productos: [] }) {
        return super.save(productos);
    }
}

export default ProductosDaoMongoDb