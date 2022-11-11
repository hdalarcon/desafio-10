import mongoose from "mongoose";

const carritosCollection = 'productos';

const carritoSchema = new mongoose.Schema({
    productos:[],
    timestamp:{type: Date, default: Date.now},
})

export const carritoModel = mongoose.model(carritosCollection, carritoSchema);
