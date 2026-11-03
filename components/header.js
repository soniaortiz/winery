import Link from 'next/link'
import {signIn, signOut, useSession } from 'next-auth/react';

export default function Header(){
    const  {session, status}  = useSession();

    return (
        <div className="headerStyle" >
            <Link href={'/'} >
                    Home
            </Link>

            <Link href={'/admin/grape/grapes-list'}>
                    Grapes List                
            </Link>
            
            <Link href={'/admin/grape/add-grape'}>
                    Add Grape
            </Link>
            
            {(!session && status==='unauthenticated') && <Link href={'/api/auth/sign-in'} onClick={(e)=>{
                    e.preventDefault();
                    signIn();
                }}>
                    Sign in
            </Link>}

            {(status === 'authenticated') && <Link href={'/api/auth/sign-out'}  onClick={
                (e)=>{
                    e.preventDefault();
                    signOut();
                }
            }>
               
                    Sign out            </Link>}
    </div>
    )
}
