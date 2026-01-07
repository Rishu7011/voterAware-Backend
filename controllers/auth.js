import { auth } from "../betterAuth/auth.js";
import { fromNodeHeaders } from "better-auth/node";
import { sendWelcomeEmail } from "../nodemailer/index.js"


/**
 * Sign up
 */


export async function signUpUser(req, res) {
  try {
    const { email, password, name } = req.body;

    // 1️⃣ Create user using Better Auth
    const response = await auth.api.signUpEmail({
      body: { email, password, name },
      headers: fromNodeHeaders(req.headers), asResponse: true,
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

    const tokenArray = response.headers.getSetCookie();
    const token = tokenArray[0]

    return res.status(200).json({
      user: data.user,
      token,
    });


    // 4️⃣ Send response
    return res.status(201).json({
      user: data.user,
      token,
    });

  } catch (err) {
    console.error("SignUp Error:", err);
    return res.status(500).json({ error: "Sign up failed" });
  }
}


/**
 * Sign in
 */
export async function signInUser(req, res) {
  try {
    const { email, password } = req.body;
    console.log("SignIn Request:", {email, password: password ? "****" : null});

    const response = await auth.api.signInEmail({
      body: { email, password },
      headers: fromNodeHeaders(req.headers),
      asResponse: true,
    });

    // 2️⃣ Read response body
    const data = await response.json();

    // 3️⃣ If Better Auth rejected login
    if (!response.ok || !data?.user) {
      return res.status(response.status).json(data);
    }

    const tokenArray = response.headers.getSetCookie();
    const token = tokenArray[0]

    return res.status(200).json({
      user: data.user,
      token,
    });

  } catch (err) {
    console.error("SignIn Error:", err);
    return res.status(500).json({ error: "Sign in failed" });
  }
}


/**
 * Sign out
 */
export async function signOutUser(req, res) {
  try {
    console.log(req.headers);
    const response = await auth.api.signOut({
      headers: fromNodeHeaders(req.headers),
      asResponse: true,
    });

    return res.json({ message: "Signed out" });
  } catch (err) {
    console.error("SignOut Error:", err);
    res.status(500).json({ error: "Sign out failed" });
  }
}