import mongoose from "mongoose";

export const connectMongo = async ()=>{
    const client = await mongoose.connect(process.env.MONGO_URI);
    return client;
}
