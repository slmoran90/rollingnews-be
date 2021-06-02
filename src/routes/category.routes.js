import {Router} from 'express';
import categoryCtrl from '../controllers/category.controllers';

const router = Router();

router
	.route('/')
	// .get(categoryCtrl.getCategory)
	.post(categoryCtrl.newCategory);

export default router;