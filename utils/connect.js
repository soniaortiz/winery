import mongoose from "mongoose";
import getDBHost from "./getDBHost";

export const connectMongo = async ()=>{

    const client = await mongoose.connect(getDBHost());
    return client;
}
