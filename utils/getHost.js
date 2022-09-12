export default function getHost (){
    const environment = process.env.NODE_ENV;
    return environment === 'development' ? 'http://localhost:3000' : 'https://winery-nine.vercel.app'
}