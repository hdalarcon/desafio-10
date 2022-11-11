import express from 'express'
import { productosDao as productosApi } from '../daos/index.js'

const productosRouter = express.Router()

productosRouter.get('/', async (req, res) => {
    res.json(await productosApi.getAll())
})

productosRouter.get('/:id?', async (req, res) => {
    res.json(await productosApi.getById(req.params.id))
})

productosRouter.post('/', async (req, res) => {
    const product = req.body;
    res.json(await productosApi.save(product))
})



export default productosRouter