import {Router} from 'express';
import noticeCtrl from '../controllers/notice.controllers';

const router = Router();

router
	.route('/')
	.get(noticeCtrl.listNotices)
	.post(noticeCtrl.newNotice);

router
	.route('/noticias-por-id/:id')
	.delete(noticeCtrl.deleteNotice)
	.put(noticeCtrl.editNotice)
	.get(noticeCtrl.getNotice);

router
    .route('/noticias-por-categoria/:categoria')
    .get(noticeCtrl.findCategory);


export default router;