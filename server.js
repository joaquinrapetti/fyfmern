import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRoutes from './routes/authRoutes.js'
import travelRoutes from './routes/travelRoutes.js'

// middleware
notFoundMiddleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.use(express.json())

app.get('/', (req, res) => {
    // throw new Error('error')
    res.send('Welcome')
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/travels', travelRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()