import mongoose, {Schema} from 'mongoose';

const photoSchema = new Schema({
	urlFotografia: String
})

const Photografy = mongoose.model('photografy', photoSchema);

export default Photografy;