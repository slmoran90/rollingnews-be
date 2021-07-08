import {Router} from 'express';
import categoryCtrl from '../controllers/category.controllers';

const router = Router();

router
    .route('/')
    .get(categoryCtrl.listCategory)
    .post(categoryCtrl.newCategory);

router
    .route('/por-nombre-categoria/:nombreCategoria')
    .get(categoryCtrl.findCategoryByName);    

router
    .route('/por-id-categoria/:id')
    .delete(categoryCtrl.deleteCategory)
    .get(categoryCtrl.findCategoryById)
    .put(categoryCtrl.editCategory);

export default router;