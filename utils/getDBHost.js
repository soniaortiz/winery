export default function getDBHost(){
    const environment = process.env.NODE_ENV;

    return environment === 'development' ? 'mongodb://localhost:27017/winery' : process.env.MONGO_URI_PROD;


}