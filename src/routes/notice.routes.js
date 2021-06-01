import {Router} from 'express';
import noticeCtrl from '../controllers/notice.controllers';

const router = Router();

router
	.route('/')
	.get(noticeCtrl.getTest)
	.post(noticeCtrl.newNotice);

export default router;