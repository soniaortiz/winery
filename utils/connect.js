import {connect} from "mongoose";
import getDBHost from "./getDBHost";

export const connectMongo = async ()=>{

    const client = await connect(getDBHost());
    return client;
}
