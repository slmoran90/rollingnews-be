import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './db';
import noticeRoutes from './routes/notice.routes';
import categoryRoutes from './routes/category.routes';
import photografyRoutes from './routes/photografy.routes';
import teamRoutes from './routes/team.routes';
import usersRoutes from './routes/users.routes';
import suscripRoutes from './routes/suscrip.routes';
import contactoRoutes from './routes/contacto.routes';

const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
	console.log(`desde el puerto ${app.get('port')}`);
});

//middelwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));

//routes
app.use('/api/noticias', noticeRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/fotografias', photografyRoutes);
app.use('/api/equipo', teamRoutes);
app.use('/api/usuarios', usersRoutes);
app.use('/api/suscripcion', suscripRoutes);
app.use('/api/contacto', contactoRoutes);