import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates.js";

/* -------------------------------------------------------------------------- */
/*                          Environment Validation                             */
/* -------------------------------------------------------------------------- */

const EMAIL_USER = process.env.NODEMAILER_EMAIL;
const EMAIL_PASS = process.env.NODEMAILER_PASSWORD;

if (!EMAIL_USER || !EMAIL_PASS) {
  throw new Error(
    "Missing NODEMAILER_EMAIL or NODEMAILER_PASSWORD environment variables"
  );
}

/* -------------------------------------------------------------------------- */
/*                              Transporter                                   */
/* -------------------------------------------------------------------------- */

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

/* -------------------------------------------------------------------------- */
/*                          Template Renderer                                  */
/* -------------------------------------------------------------------------- */

/**
 * @param {Object} data - Welcome email template data
 * @param {string} data.name - User's name
 * @param {string} data.dashboardUrl - Dashboard URL
 * @param {string} data.websiteUrl - Website URL
 * @param {string} data.unsubscribeUrl - Unsubscribe URL
 * @returns {string} Rendered HTML template
 */
const renderWelcomeTemplate = ({
  name,
  dashboardUrl,
  websiteUrl,
  unsubscribeUrl,
}) => {
  return WELCOME_EMAIL_TEMPLATE
    .replace(/{{name}}/g, name)
    .replace(/{{dashboardUrl}}/g, dashboardUrl)
    .replace(/{{websiteUrl}}/g, websiteUrl)
    .replace(/{{unsubscribeUrl}}/g, unsubscribeUrl);
};

/* -------------------------------------------------------------------------- */
/*                           Send Welcome Email                                */
/* -------------------------------------------------------------------------- */

/**
 * @param {Object} data - Welcome email data
 * @param {string} data.email - Recipient email address
 * @param {string} data.name - User's name
 * @param {string} data.dashboardUrl - Dashboard URL
 * @param {string} data.websiteUrl - Website URL
 * @param {string} data.unsubscribeUrl - Unsubscribe URL
 */
export const sendWelcomeEmail = async ({
  email,
  name,
  dashboardUrl,
  websiteUrl,
  unsubscribeUrl,
}) => {
  try {
    const html = renderWelcomeTemplate({
      name,
      dashboardUrl,
      websiteUrl,
      unsubscribeUrl,
    });

    await transporter.sendMail({
      from: `"VoterAware" <${EMAIL_USER}>`,
      to: email,
      subject: "Welcome to VoterAware – Stay informed. Stay protected.",
      text:
        "Welcome to VoterAware. Stay updated with verified election information and voter assistance.",
      html,
    });
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw new Error("Email delivery failed");
  }
};
