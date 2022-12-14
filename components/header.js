import Link from 'next/link'
import {signIn, signOut, useSession } from 'next-auth/react';

export default function Header(){
    const  {session, status}  = useSession();

    return (
        <div className="headerStyle" >
            <Link href={'/'} >
                <a className={'buttonMenu'}>
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
                <a onClick={
                (e)=>{
                    e.preventDefault();
                    signIn();
                }
                
            }
                className={'buttonMenu'}
            >
                    Sign in
                </a>
            </Link>}

            {(status === 'authenticated') && <Link href={'/api/auth/sign-out'} >
                <a  onClick={
                (e)=>{
                    e.preventDefault();
                    signOut();
                }
            }
                className={'buttonMenu'}
            >
                    Sign out
                </a>
            </Link>}
    </div>
    )
}
