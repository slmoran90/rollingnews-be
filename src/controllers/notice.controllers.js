import Notice from '../models/notices';

const noticeCtrl = {};

noticeCtrl.getTest = (req, res)=>{
	res.send('desde get');
}

noticeCtrl.newNotice = async (req, res) =>{
	try{
		const new_Notice = new Notice({
			tituloNoticia: req.body.tituloNoticia,
			noticiaBreve: req.body.noticiaBreve,
			noticiaDetallada: req.body.noticiaDetallada,
			imagenPrincipal: req.body.imagenPrincipal,
			categoria: req.body.categoria,
			autorNoticia: req.body.autorNoticia,
			fechaNoticia: req.body.fechaNoticia,
			destacada: req.body.destacada
		});

		await new_Notice.save();
		res.status(201).json({
			msg: 'La noticia se cargo con exito.'
		});
	}
	catch(error){
		console.log(error);
		res.status(500).json({
			msg: 'error al cargar una noticia nueva'
		});
	}
}

export default noticeCtrl;