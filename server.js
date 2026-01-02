import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initAuth, auth } from "./betterAuth/auth.js";
import { toNodeHandler } from "better-auth/node";
import { connectMongoose } from "./config/mongoose.js";

import { signUpUser, signInUser, signOutUser } from "./controllers/auth.js";
import reportRoutes from "./routes/report.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ CORS (ONLY ONCE)
app.use(cors({
  origin: [
    "http://localhost:8081",
    "http://192.168.1.5:8081",
  ],
  credentials: true,
}));

// ✅ JSON FIRST
app.use(express.json());

// ✅ DB
await connectMongoose();

// ✅ Better Auth
await initAuth();
app.use("/api/auth", toNodeHandler(auth));

// ✅ Routes
app.use(reportRoutes);
app.post("/auth/signup", signUpUser);
app.post("/auth/signin", signInUser);
app.post("/auth/signout", signOutUser);

// ✅ Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://192.168.1.5:${PORT}`);
});
