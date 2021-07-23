import mongoose, {Schema} from 'mongoose';

const usersSchema = new Schema({
	nombre: {
		type: String,
		required: true,
		unique: true
	},
    password: {
		type: String,
		required: true
	}
});

const Users = mongoose.model('users', usersSchema);

export default Users;