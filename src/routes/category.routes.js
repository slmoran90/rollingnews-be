import {Router} from 'express';
import categoryCtrl from '../controllers/category.controllers';

const router = Router();

router
	.route('/')
	.get(categoryCtrl.getTest)
	.post(categoryCtrl.newCategory);

export default router;