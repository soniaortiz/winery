import {connectMongo} from '../../../../utils/connect';
import Grape from '../../../../models/Grape';

export default async function SaveGrape(req, res){
    try{
        const client = await connectMongo();
        const response = await Grape.find();
        client.disconnect();
        res.send({status: 200, message: 'New grape added', data: response});
    } catch{
        res.send({status: 500, message: 'Someting went wrong'});
    }
}