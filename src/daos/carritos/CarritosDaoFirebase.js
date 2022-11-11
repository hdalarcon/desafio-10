import ContendorFirebase from "../../contenedores/ContenedorFirebase.js";

class CarritosDaoFirebase extends ContendorFirebase{
    constructor(){
        super('carritos')
    }

    async guardar(carrito = { productos: [] } ){
        return super.guardar(carrito)
    }
}

export default CarritosDaoFirebase