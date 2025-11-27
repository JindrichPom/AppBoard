import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import type { NextAuthOptions } from "next-auth";

const allowedEmails = (process.env.ALLOWED_APPLE_IDS || "")
  .split(",")
  .map((email) => email.trim())
  .filter(Boolean);

export const authOptions: NextAuthOptions = {
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID ?? "",
      clientSecret: process.env.APPLE_CLIENT_SECRET ?? ""
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async signIn({ user }) {
      if (allowedEmails.length === 0) {
        return true;
      }
      const normalizedEmail = user.email?.toLowerCase();
      return normalizedEmail ? allowedEmails.includes(normalizedEmail) : false;
    }
  },
  pages: {
    signIn: "/"
  },
  secret: process.env.NEXTAUTH_SECRET
};

export const { handlers, auth } = NextAuth(authOptions);
