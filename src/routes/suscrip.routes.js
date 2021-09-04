import { Router } from 'express';
import suscripCtrl from '../controllers/suscrip.controllers';

const rutas = Router();

rutas.route('/').post(suscripCtrl.newSuscrip);

export default rutas;