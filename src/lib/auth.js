import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb"; 
import client from "./mongodb"; 

export const auth = betterAuth({
    database: mongodbAdapter(client), 
    
    baseURL: "https://sun-cart-enzr.vercel.app", 
    
    emailAndPassword: {  
        enabled: true, 
    },
    
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});