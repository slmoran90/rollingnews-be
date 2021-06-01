import mongoose, {Schema} from 'mongoose';

const teamSchema = new Schema({
	avatar: {
		type: String,
		required: true
	},
	nombreApellido: {
		type: String,
		required: true,
		unique: true
	},
	puesto: String
});

const Team = mongoose.model('team', teamSchema);

export default Team;