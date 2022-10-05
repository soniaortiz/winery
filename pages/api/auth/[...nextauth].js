import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.NEXTAUTH_GITHUB_ID,
            clientSecret: process.env.NEXTAUTH_GITHUB_SECRET
        }),
        FacebookProvider({
            clientId: process.env.NEXTAUTH_FACEBOOK_ID,
            clientSecret: process.env.NEXTAUTH_FACEBOOK_SECRET
        }),
        GoogleProvider({
            clientId: process.env.NEXTAUTH_GOOGLE_ID,
            clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET            
        })

    ],
    secret: process.env.NEXTAUTH_SECRET
})