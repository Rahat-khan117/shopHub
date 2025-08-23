import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "1051024915389-7h7k1uqvsr93fiujmim7roorbtad7din.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "QvuI8ZcbsTlVBXYi/5nUBa27yc+kPSMGiZu671yUd3Q=",
});

export { handler as GET, handler as POST };