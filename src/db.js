import mongoose from 'mongoose';

// BD LOCAL
//const url = 'mongodb://localhost:27017/dbrn';	

// BD en MONGO ATLAS en la nube
const url = 'mongodb+srv://vale:ferc2007@cluster0.gmzzz.mongodb.net/dbrn'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log('DB CONECTED');
});