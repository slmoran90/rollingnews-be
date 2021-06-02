import Notice from '../models/notices';

const noticeCtrl = {};

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
};

noticeCtrl.listNotices = async (req, res)=>{
	try{
		const arrNotices = await Notice.find();
		res.status(200).json(arrNotices);
	}
	catch(error){
		console.log(error);
		res.status(404).json({
			msg: 'error al enviar las noticias'
		});
	}
};

noticeCtrl.deleteNotice = async (req, res)=> {
	try{
		await Notice.findByIdAndDelete(req.params.id);
		res.status(200).json({
			msg: 'TODO OK. se elimino el objeto.'
		});
	}
	catch(error){
		console.log(error);
		res.status(404).json({
			msg: 'no se encontro el objeto.'
		});
	}
}

noticeCtrl.editNotice = async (req, res)=> {
	try{
		await Notice.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({
			msg: 'Todo OK'
		});
	}
	catch(error){
		console.log(error);
		res.status(404).json({
			msg: 'no se encontro el objeto.'
		});
	}
}

noticeCtrl.getNews = async (req, res)=>{
	try{
		const findNotice = await Notice.findById(req.params.id);
		res.status(200).json(findNotice);
	}
	catch(error){
		console.log(error);
		res.status(404).json({
			msg: 'no se encuentra el objeto.'
		});
	}
}

export default noticeCtrl;