import mongoose from "mongoose";

export const connectMongo = async ()=>{
    console.log('$$$$$$$$$', process.env)
    mongoose.connect('mongodb://localhost:27017/winery')
}