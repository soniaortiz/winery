import '../styles/globals.css'
import Header from '../components/header';
import {SessionProvider} from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <SessionProvider>
      <Header/>
       <Component {...pageProps} />
    </SessionProvider>
    </>
    
     
    )
}

export default MyApp
