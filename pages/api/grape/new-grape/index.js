import {connectMongo} from '../../../../utils/connect';
import Grape from '../../../../models/grape';

export default async function SaveGrape(req, res){
    try{
        await connectMongo();
        const {grapeDescription, grapeName} = JSON.parse(req.body);
        const newGrape = new Grape({grapeDescription, grapeName});
        const a = await newGrape.save();
        res.send({status: 200, message: 'New grape added'});
    } catch{
        res.send({status: 500, message: 'Someting went wrong'});
    }

}