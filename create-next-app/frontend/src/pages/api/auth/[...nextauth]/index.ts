import NextAuth, { Account, NextAuthOptions, Profile, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios";
import { access } from "fs";

interface AuthenticatedUser extends User {
  refreshToken?: string;
  accessToken?: string;
}

type signInProps = {
    user: AuthenticatedUser;
    account?: Account;
    profile?: Profile;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn(params )  {
        const { user, account } = params as signInProps;
        if (account?.provider === 'google') {
            const { access_token: accessToken, id_token: idToken, refresh_token } = account as any;
            
            //console.log(id_token)
            try {
                const response = await axios.post('http://127.0.0.1:8000/users/oauth/google', {
                    access_token: idToken,
                    //id_token: accessToken,
                })


                
                const { access_token, refresh_token: refreshToken } = response.data;

                user.accessToken = access_token;

                return true
            }
            catch (err: any) {
                return false;
            }
        }
        
        return false;
    }
  }
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) 
  { await NextAuth(req, res, authOptions); }
