export default function getDBHost(){
    const environment = process.env.NODE_ENV;

    return 'mongodb://localhost:27017/winery';


}