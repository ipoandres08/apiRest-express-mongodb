import express from "express";
import 'dotenv/config';
import "./database/connect_db.js";
import authRouter from './routes/auth.route.js';

const app = express();

app.use(express.json());
app.use('/api/v1', authRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("http://localhost:"+ PORT));

