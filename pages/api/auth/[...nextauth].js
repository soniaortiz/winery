import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.NEXTAUTH_GITHUB_ID,
            clientSecret: process.env.NEXTAUTH_GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})