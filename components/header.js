import Link from 'next/Link'
import {signIn, signOut, useSession } from 'next-auth/react';

export default function Header(){
    const  {session, status}  = useSession();

    return (
        <div className="headerStyle">
                <Link href={'/'} >
                    <a className='buttonMenu'>
                        Home
                    </a>

                </Link>

                <Link href={'/admin/grape/grapes-list'}>
                    <a className={'buttonMenu'}>
                        Grapes List
                    </a>
                    
                </Link>
                
                <Link href={'/admin/grape/add-grape'}>
                    <a className={'buttonMenu'}>
                        Add Grape
                    </a>
                </Link>
                
                {(!session && status==='unauthenticated') && <Link href={'/api/auth/sign-in'} >
                    <a className={'buttonMenu'} onClick={
                    (e)=>{
                        e.preventDefault();
                        signIn();
                    }
                }>
                        Sign in
                    </a>
                </Link>}

                {(status === 'authenticated') && <Link href={'/api/auth/sign-out'} >
                    <a className={'buttonMenu'} onClick={
                    (e)=>{
                        e.preventDefault();
                        signOut();
                    }
                }>
                        Sign out
                    </a>
                </Link>}
        </div>
    )
}
