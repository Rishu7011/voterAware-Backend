import express from "express";
import cors from "cors";
import dotenv from "dotenv";          
import { initAuth, auth } from "./betterAuth/auth.js";
import { toNodeHandler } from "better-auth/node";

import { signUpUser, signInUser, signOutUser } from "./controllers/auth.js";

dotenv.config();                    


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: true,        // allow all origins for dev
  credentials: true,   // allow cookies
}));



// Initialize Better Auth
await initAuth();

// Mount Better Auth handler
app.use("/api/auth", toNodeHandler(auth));

// JSON + CORS
app.use(cors());
app.use(express.json());

// ✔ Use your custom routes here
app.post("/auth/signup", signUpUser);
app.post("/auth/signin", signInUser);
app.post("/auth/signout", signOutUser);


app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://192.168.1.5:${PORT}`);
});
