import {Router} from 'express';
import usersCtrl from '../controllers/Users.controllers';

const router = Router();

router
    .route('/')
    .get(usersCtrl.listUsers)
    .post(usersCtrl.newUsers);

    
router
    .route('/por-id-usuario/:id')
    .delete(usersCtrl.deleteUsers);

export default router;