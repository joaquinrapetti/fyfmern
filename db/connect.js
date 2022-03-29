import mongoose from "mongoose";
import { useLinkClickHandler } from "react-router-dom";

const connectDB = (url) => {
    return mongoose.connect(url)
}

export default connectDB; 