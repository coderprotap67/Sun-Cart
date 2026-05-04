import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: "https://sun-cart-enzr.vercel.app" 
});


export const { 
    useSession, 
    signIn, 
    signOut, 
    signUp 
} = authClient;