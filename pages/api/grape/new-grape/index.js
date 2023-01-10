import {connectMongo} from 'utils/connect';
import Grape from 'models/grape';

export default async function SaveGrape(req, res){
    try{
        const client = await connectMongo();
        const {grapeDescription, grapeName} = JSON.parse(req.body);
        const newGrape = new Grape({grapeDescription, grapeName, grapeType: 1});
        const a = await newGrape.save();
        client.disconnect();
        res.send({status: 200, message: 'New grape added'});
    } catch(e){
        res.send({status: 500, message: 'Someting went wrong', error: e});
    }
}