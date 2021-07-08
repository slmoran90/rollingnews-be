import Category from '../models/category';

const categoryCtrl = {};

categoryCtrl.listCategory = async (req, res) => {
    try {
        const list = await Category.find();
        res.status(200).json(list);
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'error al encontrar el objeto.'
        });
    }
}

categoryCtrl.newCategory = async (req, res) => {
    try {
        const new_Category = new Category({
            nombreCategoria: req.body.nombreCategoria
        });

        await new_Category.save();
        res.status(201).json({
            msg: 'La categoria se cargo con exito.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al cargar una categoria nueva.'
        });
    }
}

categoryCtrl.deleteCategory = async (req, res) => {
    try {
        const list = await Category.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg:'La Categoría fue eliminada correctamente.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'No se encontró la categoría indicada y no pudo ser eliminada.'
        });
    }
}


//==== Agregado por Valentina, para buscar 1 categoria por su nombre =====
categoryCtrl.findCategoryByName = async (req, res) => {
    try {
        //obtener un arreglo con la categoria encontrada
        const list = await Category.findOne({ nombreCategoria: req.params.nombreCategoria });
        // envio respuesta al front-end con los datos encontrados
        res.status(200).json(list);

    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'No se encontró la categoría indicada.'
        })
    }
}

categoryCtrl.findCategoryById = async (req, res) => {
    try {
        //obtener un arreglo con la categoria encontrada
        const list = await Category.findById(req.params.id);
        // envio respuesta al front-end con los datos encontrados
        res.status(200).json(list);

    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'No se encontró la categoría indicada.'
        })
    }
}

// funcion editar PUT una categoria 
categoryCtrl.editCategory = async (req, res)=> {
	try{
		await Category.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({
			msg: 'La Categoría seleccionada fue modificada.'
		});
	}
	catch(error){
		console.log(error);
		res.status(404).json({
			msg: 'Error: No se pudo modificar la categoría seleccionada.'
		});
	}
}

//=========================================================================


export default categoryCtrl;