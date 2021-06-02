import {Router} from 'express';
import noticeCtrl from '../controllers/notice.controllers';

const router = Router();

router
	.route('/')
	.get(noticeCtrl.listNotices)
	.post(noticeCtrl.newNotice);

router
	.route('/:id')
	.delete(noticeCtrl.deleteNotice)
	.put(noticeCtrl.editNotice)
	.get(noticeCtrl.getNews);

export default router;