export default function getDBHost(){
    const environment = process.env.NODE_ENV;

    return process.env.MONGO_URI_PROD;

}