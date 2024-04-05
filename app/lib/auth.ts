import prisma from "@/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { createHash } from "crypto";
import { compare, hash } from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },

      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        try {
          const isExistingUser = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });
          if (!isExistingUser) return null;
          const passMatch = await compare(credentials?.password as string, isExistingUser.password)
          if(!passMatch) return null
          return {
            id: isExistingUser.id.toString(),
            name: isExistingUser.name,
            email: isExistingUser.email,
          };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
