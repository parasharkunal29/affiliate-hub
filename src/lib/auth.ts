import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Demo auth — replace with real DB lookup
        if (credentials?.email === "demo@affiliatehub.com" && credentials?.password === "demo123") {
          return {
            id: "1",
            name: "Demo User",
            email: "demo@affiliatehub.com",
            image: null,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET ?? "affiliate-hub-secret-key-change-in-prod",
};

export default NextAuth(authOptions);
