import Suscrip from "../models/sucrip";

const suscripCtrl = {};

suscripCtrl.newSuscrip = async(req, res) => {
    try {
        const new_Suscrip = new Suscrip({
            nombreCompleto: req.body.nombreCompleto,
            email: req.body.email,
            direccion: req.body.direccion,
            localidad: req.body.localidad,
            numeros: req.body.numeros,
            codArea: req.body.codArea,
            contraseña: req.body.contraseña
        });
        await new_Suscrip.save();
        res.status(201).json({
            msg: 'Se suscribió exitosamente'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al suscribirse'
        });
    }
};

export default suscripCtrl;