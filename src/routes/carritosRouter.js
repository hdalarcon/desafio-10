import express from 'express'
import { carritosDao as carritosApi } from '../daos/index.js'
import { productosDao as productosApi } from '../daos/index.js'

const carritosRouter = express.Router()


    carritosRouter.get('/', async (req, res) => {
        res.json((await carritosApi.getAll()).map(c => c.id))
    })

    carritosRouter.post('/', async (req, res) => {
        const cart = req.body;
        res.json(await carritosApi.save(cart))
    })

    carritosRouter.delete('/:id', async (req, res) => {
        res.json(await carritosApi.deleteById(req.params.id))
    })


    carritosRouter.get('/:id/productos', async (req, res) => {
        const carrito = await carritosApi.getById(req.params.id)
        res.json(carrito.productos)
    })

    carritosRouter.post('/:id/productos', async (req, res) => {
        const carrito = await carritosApi.getById(req.params.id)
        const producto = await productosApi.getById(req.body.id)
        carrito.productos.push(producto)
        await productosApi.modifById(carrito)
        res.end()
    })

    carritosRouter.delete('/:id/productos/:idProd', async (req, res) => {
        const carrito = await carritosApi.getById(req.params.id)
        const index = carrito.productos.findIndex(p => p.id == req.params.idProd)
        if(index != -1){
            carrito.productos.splice(index,1)
            await carritosApi.modifById(carrito)
        }
        res.end()
    })

    

export default carritosRouter