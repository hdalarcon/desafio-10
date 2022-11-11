import { promises as fs } from 'fs'
import config from '../config.js'


class ContenedorArchivo{
    constructor(ruta){
        this.ruta = `${config.fileSystem.path}/${ruta}`
    }


    async getAll(){
        try {
            const objs = await fs.readFile(this.ruta, 'utf-8')
            return JSON.parse(objs)
        } catch (error) {
            return []
        }         
    }

    async getById(id){
        const objs = await this.getAll()
        const busca = objs.find(o => o.id == id)

        let result

        if(busca != undefined || busca != null){
            result = busca 
        }else{
            result = objs
        }  
        return result
    }

    async save(obj){
        const objs = await this.getAll()

        let newId
        let timestamp = Date.now();
        
        if(objs.length == 0){
            newId = 1
        }else{
            newId = objs[objs.length -1].id + 1
        }

        const newObj = {...obj, id: newId, timestamp: timestamp}
        objs.push(newObj)

        try {
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            return newObj
        } catch (error) {
            throw new Error(`Error al guardar : ${error}`)
        }

    }

    async modifById(obj){
        const objs = await this.getAll()
        const index = objs.findIndex(o => o.id == obj.id)
        if(index == -1){
            throw new Error(`Error al borrar no se encontró el id ${id}`)
        }else{
            objs[index]= obj
            try {
                await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            } catch (error) {
                throw new Error(`Error al actualizar: ${error}`)
            }
        }
    } 

    async deleteById(id){
        const objs = await this.getAll()
        const index = objs.findIndex(o => o.id == id)
        if(index == -1){
            throw new Error(`Error al borrar no se encontró el id ${id}`)
        }
        
        objs.splice(index, 1)
        try {
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }

    }

    async deleteAll(){
        try {
            await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(`Error al borrar todo: ${error}`)
        }
    }

}

export default ContenedorArchivo
