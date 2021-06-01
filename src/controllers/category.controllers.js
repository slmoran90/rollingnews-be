import Category from '../models/category';

const categoryCtrl = {};

categoryCtrl.getTest = (req, res)=>{
	res.send('test desde el controlador');
};

categoryCtrl.newCategory = async(req, res) => {
	try{
		const new_Category = new Category({
			nombreCategoria: req.body.nombreCategoria,
			descripCategoria: req.body.descripCategoria
		});

		await new_Category.save();
		res.status(201).json({
			msg: 'La categoria se cargo con exito.'
		});
	}
	catch(error){
		console.log(error);
		res.status(500).json({
			msg: 'Error al cargar una categoria nueva.'
		});
	}
}

export default categoryCtrl;