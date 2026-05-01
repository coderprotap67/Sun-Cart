import { betterAuth } from "better-auth";
import { createAuthClient } from "better-auth/react";

// সার্ভার সাইড কনফিগারেশন
export const auth = betterAuth({
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});

// ক্লায়েন্ট সাইড কনফিগারেশন
export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL 
});

// এই লাইনটি অবশ্যই যোগ করুন, যাতে MyProfile পেজটি useSession খুঁজে পায়
export const { useSession, signIn, signOut } = authClient;