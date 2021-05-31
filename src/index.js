import express from 'express';

// creo una instancia de express
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
	console.log(`desde el puerto ${app.get('port')}`);
})
