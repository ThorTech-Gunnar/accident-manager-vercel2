import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/authRoutes';
import caseRoutes from './routes/caseRoutes';
import franchiseRoutes from './routes/franchiseRoutes';
import floorPlanRoutes from './routes/floorPlanRoutes';
import chatbotRoutes from './routes/chatbotRoutes';

const app = express();

// ... (keep existing middleware and routes)

app.use('/api/chatbot', csrfProtection, chatbotRoutes);

// ... (keep existing MongoDB connection and server start)