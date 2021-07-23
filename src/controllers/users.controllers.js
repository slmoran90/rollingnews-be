import Users from '../models/Users';

const usersCtrl = {};

usersCtrl.listUsers = async (req, res) => {
    try {
        const list = await Users.find();
        res.status(200).json(list);
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error: No te encontró el Usuario.'
        });
    }
}

usersCtrl.newUsers = async (req, res) => {
    try {
        const new_Users = new Users({
            nombre:req.body.nombre,
            password:req.body.password
        });

        await new_Users.save();
        res.status(201).json({
            msg: 'el usuario se cargó con éxito.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al cargar un nuevo usuario.'
        });
    }
}

usersCtrl.deleteUsers = async (req, res) => {
    try {
        const list = await Users.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg:'el usuario fue eliminado correctamente.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'No se encontró el usuario indicado y no pudo ser eliminado.'
        });
    }
}

export default usersCtrl;