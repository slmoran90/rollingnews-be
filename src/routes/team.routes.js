import {Router} from 'express';
import teamCtrl from '../controllers/team.controllers';

const router = Router();

router
    .route('/')
    .get(teamCtrl.listTeam)
    .post(teamCtrl.newTeam);

    
router
    .route('/por-id-persona/:id')
    .delete(teamCtrl.deleteTeam);

export default router;