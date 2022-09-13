export default function getDBHost(){
    const environment = process.env.NODE_ENV;

    return environment === 'development'? process.env.MONGO_URI: process.env.MONGO_URI_PROD;

}