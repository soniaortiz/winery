import {connectMongo} from 'utils/connect';
import Grape from 'models/grape';
import {getSession} from 'next-auth/react';

export default async function RetriveGrapes(req, res){

    const session = await getSession({req});
    if(!session){
        res.send({status: 200, message: 'Unauthenticated user'});
    }
    try{
        const client = await connectMongo();
        const response = await Grape.find();
        client.disconnect();
        res.send({status: 200, data: response});
    } catch{
        res.send({status: 500, message: 'Someting went wrong'});
    }
}