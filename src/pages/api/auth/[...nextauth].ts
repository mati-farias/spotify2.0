import NextAuth, { Account, Profile, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';

import SpotifyProvider from 'next-auth/providers/spotify';

interface SpotifyUser extends User {
  id: string;
  displayName?: string;
  email?: string;
  images?: { url: string }[];
}

interface SpotifyAccount extends Account {
  id: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  user?: SpotifyUser;
}


const jwt = async ({ token, account, user }: any) => {
  if (account && user) {
    return {
      ...token,
      accessToken: account.access_token,
      refreshToken: account.refresh_token,
      username: account.providerAccountId,
      accessTokenExpires: account.expires_at * 1000,
  }};
  }
//     async jwt({ token, account }: {token: JWT, account: Account}): Promise<JWT> {
//         if (account) {
//             token.accessToken = account.access_token
//         }
//         return token
//     },
//     async session({ session, token, user }: {session: Session, token: JWT, user: User}): Promise<Session>{
//         session.accessToken = token.accessToken
//         return session
// }

export const session = async ({ session, token }: any) => {
  session.user.accessToken = token.accessToken;
  session.user.refreshToken = token.refreshToken;
  session.user.username = token.username;

  return session;
};


export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID!,
      clientSecret: process.env.SPOTIFY_SECRET!,
    }),
  ],
  secret: process.env.SECRET!,
  callbacks: {
    jwt: jwt
    }
  });
    




