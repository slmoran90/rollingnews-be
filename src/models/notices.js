import mongoose, {Schema} from 'mongoose';

const noticeSchema = new Schema({
	tituloNoticia: {
		type: String,
		maxlength: 150,
		required: true,
		unique: true
	},
	noticiaBreve: {
		type: String,
		maxlength: 200,
		required: true,
		unique: true
	},
	noticiaDetallada: {
		type: String,
		required: true,
		unique: true
	},
	imagenPrincipal: {
		type: String,
		required: true,
		unique: true
	},
	categoria: {
		type: String,
		required: true,
		unique: true
	},
	autorNoticia: {
		type: String,
		required: true
	},
	fechaNoticia: {
		type: Date,
		required: true
	},
	destacada: Boolean
});

const Notice = mongoose.model('notice', noticeSchema);

export default Notice;