import prisma from "@/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { createHash } from "crypto";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "signin",
      credentials: {
        email: { label: "email", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },

      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        const hashedPassword = createHash("sha256")
          .update(credentials?.password + "salt")
          .digest("hex");
        try {
          const isExistingUser = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
              password: hashedPassword,
            },
          });
          if (!isExistingUser) return null;
          return {
            id: isExistingUser.id.toString(),
            name: isExistingUser.name,
            email: isExistingUser.email
          }
        } catch (e) {
          return null;
        }
      },
    }),
    CredentialsProvider({
      name: "signup",
      credentials: {
        name: { label: "name", type: "text", required: true },
        email: { label: "email", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },

      async authorize(
        credentials: Record<"name" | "email" | "password", string> | undefined
      ) {
        console.log("auth")
        const hashedPassword = createHash("sha256")
          .update(credentials?.password + "salt")
          .digest("hex");
        try {
          const isExistingUser = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });
          if (isExistingUser) {
            return null;
          }
          const newUser = await prisma.user.create({
            data: {
              name: credentials?.name as string,
              email: credentials?.email as string,
              password: hashedPassword,
            },
          });
          console.log(newUser)
          return {
            id: newUser.id.toString(),
            name: newUser.name,
            email: newUser.email
          };
        } catch (e: any) {
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
  pages:{
    signIn: "/signin",
    signUp: "/signUp"
  }
};
