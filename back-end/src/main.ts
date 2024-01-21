import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const password = encodeURIComponent('1239865a')
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || `mongodb+srv://root:${password}@ness.ngzzayx.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
