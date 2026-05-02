import { betterAuth } from "better-auth";
import { createAuthClient } from "better-auth/react";

export const auth = betterAuth({
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL 
});
export const { useSession, signIn, signOut } = authClient;