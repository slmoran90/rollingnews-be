import Notice from '../models/notices';

const noticeCtrl = {};

noticeCtrl.newNotice = async (req, res) =>{
	try{
		const new_Notice = new Notice({
			tituloNoticia: req.body.tituloNoticia,
			noticiaBreve: req.body.noticiaBreve,
			noticiaDetallada: req.body.noticiaDetallada,
			imagenPrincipal: req.body.imagenPrincipal,
			imagenSec: req.body.imagenSec,
			categoria: req.body.categoria,
			autorNoticia: req.body.autorNoticia,
			fechaNoticia: req.body.fechaNoticia,
			destacada: req.body.destacada
		});

		await new_Notice.save();
		res.status(201).json({
			msg: 'La noticia se guardó con éxito.'
		});
	}
	catch(error){
		console.log(error);
		res.status(500).json({
			msg: 'Error: no pudo guardarse la noticia.'
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
			msg: 'Error: No se encontraron Noticias.'
		});
	}
};

noticeCtrl.deleteNotice = async (req, res)=> {
	try{
		await Notice.findByIdAndDelete(req.params.id);
		res.status(200).json({
			msg: 'La noticia seleccionada fue Eliminada.'
		});
	}
	catch(error){
		console.log(error);
		res.status(404).json({
			msg: 'Error: No se pudo eliminar la noticia seleccionada.'
		});
	}
}

// funcion editar PUT una noticia 
noticeCtrl.editNotice = async (req, res)=> {
	try{
		await Notice.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({
			msg: 'La noticia seleccionada fue modificada.'
		});
	}
	catch(error){
		console.log(error);
		res.status(404).json({
			msg: 'Error: No se pudo modificar la noticia seleccionada.'
		});
	}
}

noticeCtrl.getNotice = async (req, res)=>{
	try{
		const findNotice = await Notice.findById(req.params.id);
		res.status(200).json(findNotice);
	}
	catch(error){
		console.log(error);
		res.status(404).json({
			msg: 'Error: No se encontró la noticia con el ID seleccionado.'
		});
	}
}

noticeCtrl.findCategory = async (req, res)=>{
    try{
        const list = await Notice.find({categoria: req.params.categoria});
        res.status(200).json(list);
    }
    catch(error){
        console.log(error);
        res.status(404).json({
            msg: 'Error: No se encontraron noticias para la Categoria seleccionada.'
        })
    }
}

export default noticeCtrl;