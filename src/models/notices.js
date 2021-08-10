import mongoose, {Schema} from 'mongoose';

const noticeSchema = new Schema({
	tituloNoticia: {
		type: String,
		maxlength: 150,
		required: true
	},
	noticiaBreve: {
		type: String,
		maxlength: 200,
		required: true
	},
	noticiaDetallada: {
		type: String,
		required: true
	},
	imagenPrincipal: {
		type: String,
		required: true
	},
	imagenSec: {
		type: String
	},
	categoria: {
		type: String,
		required: true
	},
	autorNoticia: {
		type: String,
		required: true
	},
	fechaNoticia: {
		type: Date,
		//fecha_noticia: Date
		required: true
	},
	destacada: {
		type: String,
		enum: ['off', 'on']
	}	
});

// noticeSchema.virtual('fecha_noticia')
// .set(function(fecha){
// 	this.fecha_noticia = new Date(fecha)
// })

// .get(function(){
// 	return this.fecha_noticia.toISOString().substring(0,10)
// });

const Notice = mongoose.model('notice', noticeSchema);

export default Notice;