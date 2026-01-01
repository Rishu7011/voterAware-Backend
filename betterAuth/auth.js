import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectDB } from "../database/mongoose.js";
import dotenv from "dotenv";
dotenv.config();

let auth;

async function initAuth() {
  const db = await connectDB();

  auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    database: mongodbAdapter(db),
    emailAndPassword: {
      enabled: true,
    },
  });

  console.log("🔐 Better Auth initialized");
}

export { auth, initAuth };
