import {Router} from 'express';
import photografyCtrl from '../controllers/photografy.controllers';

const router = Router();

router
    .route('/')
    .get(photografyCtrl.listPhotografy)
    .post(photografyCtrl.newPhotografy);

    
router
    .route('/por-id-fotografia/:id')
    .delete(photografyCtrl.deletePhotografy);

export default router;