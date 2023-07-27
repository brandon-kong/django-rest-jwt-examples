import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

import { NextApiRequest, NextApiResponse } from "next"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) 
  { await NextAuth(req, res, authOptions); }
