import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './db';
import noticeRoutes from './routes/notice.routes';
import categoryRoutes from './routes/category.routes';

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