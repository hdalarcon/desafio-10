import mongoose from "mongoose";

const carritosCollection = 'productos';

const carritoSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  descripcion:{ type: String, require: true },
  codigo:{ type: Number, require: true },
  foto:{ type: String, require: true },
  precio:{ type: Number, require: true },
  stock:{ type: Number, require: true },
  timestamp:{type: Date, default: Date.now},
})

export const productoModel = mongoose.model(productosCollection, productoSchema);