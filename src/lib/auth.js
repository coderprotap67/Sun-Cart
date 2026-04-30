import { betterAuth } from "better-auth";
// আপনার পছন্দমতো অ্যাডাপ্টার ব্যবহার করুন (যেমন Prisma বা MongoDB)

export const auth = betterAuth({
    // সোশ্যাল লগইন কনফিগারেশন
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});

// ক্লায়েন্ট সাইড হুক
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL // আপনার সাইটের URL
});