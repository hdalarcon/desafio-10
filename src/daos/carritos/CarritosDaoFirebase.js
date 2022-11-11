import ContendorFirebase from "../../contenedores/ContenedorFirebase.js";

class CarritosDaoFirebase extends ContendorFirebase{
    constructor(){
        super('carritos')
    }

    async save(carrito = { productos: [] } ){
        return super.save(carrito)
    }
}

export default CarritosDaoFirebase