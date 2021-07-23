import Team from '../models/team';

const teamCtrl = {};

teamCtrl.listTeam = async (req, res) => {
    try {
        const list = await Team.find();
        res.status(200).json(list);
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error: No te encontró la Persona del equipo.'
        });
    }
}

teamCtrl.newTeam = async (req, res) => {
    try {
        const new_Team = new Team({
            avatar: req.body.avatar,
            nombreApellido:req.body.nombreApellido,
            puesto:req.body.puesto
        });

        await new_Team.save();
        res.status(201).json({
            msg: 'La persona se cargó con éxito.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al cargar una nueva persona del equipo.'
        });
    }
}

teamCtrl.deleteTeam = async (req, res) => {
    try {
        const list = await Team.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg:'La persona fue eliminada correctamente.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'No se encontró la persona indicada y no pudo ser eliminada.'
        });
    }
}

export default teamCtrl;