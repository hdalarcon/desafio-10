import admin from 'firebase-admin'
import config from '../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore()


class ContendorFirebase{
    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    async getAll(){
        try {
            const resultado = []
            const snapshot = await this.coleccion.get()
            snapshot.forEach(doc => {
                resultado.push({id: doc.id, ...doc.data()})
            });
            return resultado
        } catch (error) {
            throw new Error(`Error al listar todo: ${error}`)
        }
    }

    async getById(id) {
        try {
            const doc = await this.coleccion.doc(id).get()
            if (!doc.exists) {
                return this.getAll()
            } else {
                const data = doc.data()
                return { ...data, id }
            }
        } catch (error) {
            throw new Error(`Error al listar por id: ${error}`)
        }
    }

    async save(nuevoElem) {
        try {
            let timestamp = Date.now();
            let nuevoElemento = {...nuevoElem, timestamp: timestamp}
            const guardado = await this.coleccion.add(nuevoElemento)
            return { ...nuevoElem, id: guardado.id, timestamp: timestamp }
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    async modifyById(nuevoElem) {
        try {
            const actualizado = await this.coleccion.doc(nuevoElem.id).set(nuevoElem)
            return actualizado
        } catch (error) {
            throw new Error(`Error al actualizad: ${error}`)
        }
    }

    async deleteById(id) {
        try {
            const item = await this.coleccion.doc(id).delete()
            return item
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async deleteAll() {
        try {
            const docs = await this.getAll()
            const ids = docs.map(d => d.id)
            const promesas = ids.map(id => this.deleteById(id))
            const resultados = await Promise.allSettled(promesas)
            const errores = resultados.filter(r => r.status == 'rejected')
            if (errores.length > 0) {
                throw new Error('No se borro todo')
            } 
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async desconectar() {
    }
}




export default ContendorFirebase