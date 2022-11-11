import ContendorFirebase from "../../contenedores/ContenedorFirebase.js";

class ProductosDaoFirebase extends ContendorFirebase{
    constructor(){
        super('productos')
    }
    async save(productos = { productos: [] }) {
        return super.save(productos);
    }
}

export default ProductosDaoFirebase