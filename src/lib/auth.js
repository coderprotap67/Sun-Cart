import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.warn("Warning: MONGODB_URI is not defined. Database connection will fail at runtime.");
}

const client = new MongoClient(uri || "mongodb://localhost:27017/placeholder"); 
const db = client.db("SunCartDB");

export const auth = betterAuth({
    database: mongodbAdapter(db), 
    emailAndPassword: {
        enabled: true, 
    },
});