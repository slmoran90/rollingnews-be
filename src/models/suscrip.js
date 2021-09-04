import mongoose, { Schema } from 'mongoose';

const suscripSchema = new Schema({
    nombreCompleto: {
        type: String,
        maxlength: 40,
        minlength: 8,
        required: true
    },
    email: {
        type: String,
        maxlength: 40,
        minlength: 10,
        required: true,
        unique: true
    },
    localidad: {
        type: String,
        maxlength: 40,
        minlength: 4,
        required: true
    },
    direccion: {
        type: String,
        maxlength: 50,
        minlength: 10,
        required: true
    },
    numeros: {
        type: Number,
        maxlength: 10,
        minlength: 10,
        required: true,
        unique: true
    },
    codArea: {
        type: Number,
        maxlength: 4,
        minlength: 3,
        required: true
    },
    contraseña: {
        type: String,
        maxlength: 12,
        minlength: 8,
        required: true
    }

});

const Suscrip = mongoose.model('suscripcion', suscripSchema);

export default Suscrip;