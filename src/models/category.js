import mongoose, {Schema} from 'mongoose';

const categorySchema = new Schema({
	nombreCategoria: {
		type: String,
		required: true,
		unique: true
	}
});

const Category = mongoose.model('category', categorySchema);

export default Category;