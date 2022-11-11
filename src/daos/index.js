import 'dotenv/config'
let productosDao
let carritosDao

switch (process.env.PERS) {
    case 'json':
        const { default: ProductosDaoArchivo } = await import('./productos/ProductosDaoArchivo.js')
        const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')
        productosDao = new ProductosDaoArchivo()
        carritosDao = new CarritosDaoArchivo()
        break;
    case 'firebase':
        const { default: ProductosDaoFirebase } = await import('./productos/ProductosDaoFirebase.js')
        const { default: CarritosDaoFirebase } = await import('./carritos/CarritosDaoFirebase.js')
        productosDao = new ProductosDaoFirebase
        carritosDao = new CarritosDaoFirebase
    default:
        break;
}

export { productosDao, carritosDao }