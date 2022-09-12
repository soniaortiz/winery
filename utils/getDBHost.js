export default function getDBHost(){
    const environment = process.env.NODE_ENV;

    return environment === 'development' ? 'mongodb://localhost:27017/winery' : 'mongodb+srv://satlasadmin:AtmiperritoB17@cluster0.v0kvhlq.mongodb.net/winery'


}