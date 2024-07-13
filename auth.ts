import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import Resend from 'next-auth/providers/resend';
import Google from 'next-auth/providers/google';

// import Credentials from 'next-auth/providers/credentials';
// import { saltAndHashPassword } from '@/utils/password';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { User } from './app/lib/definitions';
// import { sql } from '@vercel/postgres';
// import type { User } from '@/app/lib/definitions';

const prisma = new PrismaClient().$extends(withAccelerate());

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Resend,
    // Credentials({
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     let user = null;

    //     // logic to salt and hash password
    //     const pwHash = saltAndHashPassword(credentials.password);

    //     // logic to verify if user exists
    //     user = await getUserFromDb(credentials.email, pwHash);

    //     if (!user) {
    //       // No user found, so this is their first attempt to signin
    //       // meaning this is also the place you could do registration
    //       throw new Error('User not found.');
    //     }

    //     // return user object with the their profile data
    //     return user;
    //   },
    // }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});

// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }
