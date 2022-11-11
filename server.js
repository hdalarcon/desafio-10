import express from 'express';
import config from './src/config.js'
import routerCarrito from './src/routes/carritosRouter.js'
import routerProducto from './src/routes/productosRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'));


//--------------- rutas ---------------//
app.use('/api/productos', routerProducto)
app.use('/api/carrito', routerCarrito)

app.get('*', (req, res) => {
    res.json("Error: La ruta especificada no existe.");
}
);

app.post('*', (req, res) => {
    res.json("Error: La ruta especificada no existe.");
}
);

//--------------- Running server ---------------//
const PORT = config.port;

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${server.address().port}`))
server.on('error', error => console.log(`Error en server ${error}`))