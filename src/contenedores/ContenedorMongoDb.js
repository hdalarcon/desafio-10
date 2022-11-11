import mongoose from 'mongoose'
import config from '../config.js'
import { productoModel } from '../models/producto.model.js'

await mongoose.connect(config.mongodb.connectionMongo)

class ContenedorMongoDb {

    constructor() {
    }

    async getById(id) {
        try {
            const doc = await productoModel.find({ '_id': id }, { __v: 0 })
            if (doc.length == 0 || doc == undefined) {
                const docs = await productoModel.find({})
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
            let docs = await productoModel.find({})
            return docs;
        } catch (error) {
            console.log(error);
            return false;
        }
    }



    async save(object) {
        try {
            const newProducto = new productoModel(object) 
            return await newProducto.save()
        } catch (error) {
            console.log(error);
            return false;
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
            await productoModel.deleteMany({})
        } catch (error) {
            throw new Error(`Error al borrar ${error}`)
        }
    }
}

export default ContenedorMongoDb