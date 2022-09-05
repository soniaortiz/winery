import {connectMongo} from '../../../../utils/connect';
import Grape from '../../../../models/Grape';

export default async function SaveGrape(req, res){
    try{
        await connectMongo();
        const response = await Grape.find();
        console.log('@@@@@@@@@@', response);
        res.send({status: 200, message: 'New grape added', data: 'hello'});
    } catch{
        res.send({status: 500, message: 'Someting went wrong'});
    }
}