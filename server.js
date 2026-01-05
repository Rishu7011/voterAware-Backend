import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initAuth, auth } from "./betterAuth/auth.js";
import { fromNodeHeaders } from "better-auth/node";
import { connectMongoose } from "./config/mongoose.js";

import { signUpUser, signInUser, signOutUser } from "./controllers/auth.js";

import reportRoutes from "./routes/report.routes.js";

dotenv.config();


const app = express();

// ✅ REQUIRED for Vercel
app.set("trust proxy", 1);

// ✅ CORS
app.use(
  cors({
    origin: true, // allow all origins (mobile-safe)
    credentials: true,
  })
);


// ✅ JSON
app.use(express.json());

// ✅ DB (important: runs once per cold start)
await connectMongoose();

// ✅ Better Auth
await initAuth();


app.get("/", (req, res) => {
  res.send("Server Started 🚀🚀🚀🚀");
});
app.post("/auth/signup", signUpUser);
app.post("/auth/signin", signInUser);
app.post("/auth/signout", signOutUser);

// Protected route (Expo)
app.get("/api/me", async (req, res) => {
 	const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
    console.log("Session:", {session});
	return res.json(session);
});

app.use(reportRoutes);

// // ✅ EXPORT (instead of listen)
export default app;





