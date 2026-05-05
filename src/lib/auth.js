import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./mongodb";

export const auth = betterAuth({
    
    database: mongodbAdapter(clientPromise, {
        dbName: "SunCartDB",
    }),

    baseURL: process.env.BETTER_AUTH_URL, 
    secret: process.env.BETTER_AUTH_SECRET, 

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