import Suscrip from "../models/suscrip";

const contactoCtrl = {};

contactoCtrl.comparaEmail = (req, res) => {
    try {
        let emailDelFront = req.body.nombreCompleto;
        Suscrip.findOne({ emailDelFront }).then(user => {
                console.log("email de la base", user);
                console.log("texto para encontrar", user.nombreCompleto);
                if (!user) {
                    return res.status(404).send({
                        mensaje: "no se encontro email"
                    });
                }
                res.status(200).send({
                    mensaje: "se encontro el mail"
                })
                console.log(user);
            })
            .catch(error => { res.status(500).send(error) })
    } catch (error) {
        return error;
    }
}
export default contactoCtrl;