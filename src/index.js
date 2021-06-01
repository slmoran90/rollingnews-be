import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './db';

// creo una instancia de express
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
	console.log(`desde el puerto ${app.get('port')}`);
})

//herramientas extras middelwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));

//rutas
app.get('/', (req, res)=>{
	res.send('ruta de prueba');
})