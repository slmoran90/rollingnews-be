import Photografy from '../models/photografy';

const photografyCtrl = {};

photografyCtrl.listPhotografy = async (req, res) => {
    try {
        const list = await Photografy.find();
        res.status(200).json(list);
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error: No te encontró la fotografía.'
        });
    }
}

photografyCtrl.newPhotografy = async (req, res) => {
    try {
        const new_Photografy = new Photografy({
            urlFotografia: req.body.urlFotografia
        });

        await new_Photografy.save();
        res.status(201).json({
            msg: 'La Fotografía se cargó con éxito.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al cargar una nueva fotografía.'
        });
    }
}

photografyCtrl.deletePhotografy = async (req, res) => {
    try {
        const list = await Photografy.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg:'La Fotografía fue eliminada correctamente.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'No se encontró la fotografía indicada y no pudo ser eliminada.'
        });
    }
}

export default photografyCtrl;