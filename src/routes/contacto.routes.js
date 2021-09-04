import { Router } from 'express';
import contactoCtrl from '../controllers/contacto.controllers';

const router = Router();

router.route('/').post(contactoCtrl.comparaEmail);

export default router;