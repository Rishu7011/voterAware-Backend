import { auth } from "../betterAuth/auth.js";
import { fromNodeHeaders } from "better-auth/node";
import { sendWelcomeEmail } from "../nodemailer/index.js"


/**
 * Sign up
 */
export async function signUpUser(req, res) {
  try {
    const { email, password, name } = req.body;
    console.log("SignUp Request Body:", req.body);

    const response = await auth.api.signUpEmail({
      body: { email, password, name },
      headers: fromNodeHeaders(req.headers),
      asResponse: true,
    });
    console.log("SignUp Response Status:", response.status);

    // forward cookie if present
    response.headers.forEach((value, key) => {
      if (key.toLowerCase().includes("set-cookie")) {
        res.setHeader(key, value);
      }
    });

    const data = await response.json();
    if (response.ok && data?.user) {
      sendWelcomeEmail({
        email: data.user.email,
        name: data.user.name || "User",
        dashboardUrl: "https://voteraware.in/dashboard",
        websiteUrl: "https://voteraware.in",
        unsubscribeUrl: "https://voteraware.in/unsubscribe",
      }).catch((err) =>
        console.error("Welcome email failed:", err)
      )
    }

    console.log("Welcome email sent to:", data.user.email)

    return res.status(response.status).json(data);
  } catch (err) {
    console.error("SignUp Error:", err);
    res.status(500).json({ error: "Sign up failed" });
  }
}

/**
 * Sign in
 */
export async function signInUser(req, res) {
  try {
    const { email, password } = req.body;

    const response = await auth.api.signInEmail({
      body: { email, password },
      headers: fromNodeHeaders(req.headers),
      asResponse: true,
    });

    response.headers.forEach((value, key) => {
      if (key.toLowerCase().includes("set-cookie")) {
        res.setHeader(key, value);
      }
    });

    const data = await response.json();
    console.log("SignIn Response Status:", data);
    return res.status(response.status).json(data);
  } catch (err) {
    console.error("SignIn Error:", err);
    res.status(500).json({ error: "Sign in failed" });
  }
}

/**
 * Sign out
 */
export async function signOutUser(req, res) {
  try {
    const response = await auth.api.signOut({
      headers: fromNodeHeaders(req.headers),
      asResponse: true,
    });

    response.headers.forEach((value, key) => {
      if (key.toLowerCase().includes("set-cookie")) {
        res.setHeader(key, value);
      }
    });

    return res.json({ message: "Signed out" });
  } catch (err) {
    console.error("SignOut Error:", err);
    res.status(500).json({ error: "Sign out failed" });
  }
}
