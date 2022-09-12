import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        }),

    ]
})