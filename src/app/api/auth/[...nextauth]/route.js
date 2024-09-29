import NextAuth from "next-auth";
import FusionAuthProvider from "next-auth/providers/fusionauth";

export const authOptions = {
  providers: [
    FusionAuthProvider({
      clientId: process.env.FUSIONAUTH_CLIENT_ID,
      clientSecret: process.env.FUSIONAUTH_CLIENT_SECRET,
      issuer: process.env.FUSIONAUTH_DOMAIN,
      authorizationUrl: `${process.env.FUSIONAUTH_DOMAIN}/oauth2/authorize`,
      tokenUrl: `${process.env.FUSIONAUTH_DOMAIN}/oauth2/token`,
      userinfoUrl: `${process.env.FUSIONAUTH_DOMAIN}/oauth2/userinfo`,
      profile(profile) {
        console.log(profile);
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log(user);
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      console.log(token);
      console.log(session);

      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

//https://mondia.fusionauth.io/oauth2/authorize?client_id=355472c7-deaf-4ca8-9c5c-834882e701a3&scope=openid%20offline_access&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Ffusionauth&state=7fRyR6w_IxsuZLPeKvu3dmbhGHejI8py1a2yym3C0nM&code_challenge=Yi_2GKLiRNZi3NdJYkglLrqps9vZUPwG9nDHFjDYiw8&code_challenge_method=S256
//http://localhost:3000/api/auth/callback/fusionauth?code=3zPAlZ_V8of6AlQO0749BWOrUZKvw5MqULh5BFguNrw&locale=en_GB&state=7fRyR6w_IxsuZLPeKvu3dmbhGHejI8py1a2yym3C0nM&userState=AuthenticatedNotRegistered

//http%3A%2F%2Flocalhost%3A8080
