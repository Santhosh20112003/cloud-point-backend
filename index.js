import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiroutes from './api/index.js';
import multer from 'multer';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL,{
	useNewUrlParser:true,
	useUnifiedTopology: true
})
.then(()=>{console.log("Mongodb Connected")})
.catch(err=>{console.error(`Mongodb Connection Error ${err}`);process.exit(1);});

app.get('/', (req, res) => {
 res.send('Welcome to the Cloud Point server!');
});

app.use('/api',apiroutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));