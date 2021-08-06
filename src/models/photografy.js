import mongoose, {Schema} from 'mongoose';

const photoSchema = new Schema({
	urlFotografia: {
		type: String
	}
})

const Photografy = mongoose.model('photografy', photoSchema);

export default Photografy;