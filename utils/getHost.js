export default function getHost (){
    const environment = process.env.NODE_ENV;
    return environment === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_VERCEL_URL;
}