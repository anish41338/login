import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

dotenv.config();           // ✅ Load env first
connectDB();               // ✅ Connect DB

const app = express();     // ✅ Define app before using it

app.use(cors({
  origin: 'http://localhost:5173',  // Frontend port
  credentials: true,
}));

app.use(express.json());

app.use('/api/auth', authRoutes);   // ✅ Auth routes

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
