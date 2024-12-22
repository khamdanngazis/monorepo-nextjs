import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from '../routes/userRoutes';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
