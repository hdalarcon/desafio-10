import mongoose from 'mongoose'
import config from '../config.js'
import { productoModel } from '../models/producto.model.js'
import { carritoModel } from '../models/carrito.model.js'

await mongoose.connect(config.mongodb.connectionMongo)

class ContenedorMongoDb {

    constructor(modelo) {
        console.log('modelo', modelo)
        modelo == 'carrito' ? this.modelo = carritoModel : this.modelo =  productoModel      
    }

    async getById(id) {
        try {
            const doc = await this.modelo.find({ '_id': id }, { __v: 0 })
            if (doc.length == 0 || doc == undefined) {
                const docs = await this.modelo.find({})
                return docs
            } else {
                return doc
            }
        } catch (error) {
            throw new Error(`Error al listar por id: ${id}`)
        }
    }

    async getAll() {
        try {
            let docs = await this.modelo.find({})
            return docs;
        } catch (error) {
            console.log(error);
            return false;
        }
    }



    async save(object) {
        try {
            const newProducto = new this.modelo(object) 
            return await newProducto.save()
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async modifyById(nuevoElem) {
        try {
            renameField(nuevoElem, 'id', '_id')
            const { n, nModified } = await this.modelo.replaceOne({ '_id': nuevoElem._id}, nuevoElem)
            if (n == 0 || nModified == 0) {
                throw new Error('Error al actualizar: no encontrado')
            } else {
                renameField(nuevoElem, '_id', 'id')
                removeField(nuevoElem, '__v')
                return asPOJO(nuevoElem)
            }
        } catch (error) {
            throw new Error(`Error al actualizar: ${error}`)
        }
    }


    async delete(id) {
        try {
            const { n, nDeleted } = await this.coleccion.deleteOne({ '_id': id})
            if (n == 0 || nDeleted == 0) {
                throw new Error('Error al borrar: no encontrado')
            } 
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }
    
    async deleteAll() {
        try {
            await this.modelo.deleteMany({})
        } catch (error) {
            throw new Error(`Error al borrar ${error}`)
        }
    }
}

export default ContenedorMongoDb