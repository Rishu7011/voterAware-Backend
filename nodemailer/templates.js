export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />
  <title>Voter Awareness Platform – Registration Confirmation</title>

  <!--[if mso]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f3f6fb;
      font-family: Arial, Helvetica, sans-serif;
    }
    .container {
      max-width: 600px;
      background-color: #ffffff;
      border: 1px solid #d1d5db;
      border-radius: 6px;
    }
    .header {
      background-color: #0f2a44;
      padding: 24px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      font-size: 20px;
      margin: 0;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
    .content {
      padding: 32px;
      color: #1f2937;
      font-size: 15px;
      line-height: 1.6;
    }
    .content h2 {
      font-size: 17px;
      margin-bottom: 14px;
      color: #0f2a44;
    }
    .features {
      margin: 18px 0;
      padding-left: 18px;
    }
    .features li {
      margin-bottom: 10px;
    }
    .cta-button {
      display: inline-block;
      background-color: #0f62fe;
      color: #ffffff;
      padding: 14px 28px;
      text-decoration: none;
      font-size: 15px;
      border-radius: 4px;
      margin-top: 22px;
    }
    .footer {
      padding: 22px;
      font-size: 12.5px;
      text-align: center;
      color: #6b7280;
      background-color: #f9fafb;
      border-top: 1px solid #e5e7eb;
    }
    .footer a {
      color: #0f62fe;
      text-decoration: underline;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 20px;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 30px 12px;">
        <table class="container" width="100%" cellspacing="0" cellpadding="0">

          <!-- Header -->
          <tr>
            <td class="header">
              <h1>Voter Awareness & Assistance Platform</h1>
            </td>
          </tr>

          <!-- Banner Image -->
          <tr>
            <td align="center">
              <img
                src="https://imgs.search.brave.com/qUHUzd1M-N8zZjrQ0N9rWASx7NRFOI29Yt4RZturx9M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/NjIwNTcwMS9waG90/by92b3RlLWluZGlh/LXZvdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWZfYW9C/MEc5UlE1cU5uLVN5/Y1JvUGI1WVdvUzNs/U1BOaXYwWlBUQUlS/RTA9"
                alt="Voter Awareness"
                width="100%"
                style="max-width: 600px; display: block; border-bottom: 1px solid #d1d5db;"
              />
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td class="content">
              <h2>Registration Confirmation – {{name}}</h2>

              <p>
                This email is to confirm that your account has been successfully created on the
                <strong>Voter Awareness & Assistance Platform</strong>.
              </p>

              <p>
                This platform is intended to support citizens by providing verified, factual, and
                publicly available information related to elections, voter services, and official announcements.
              </p>

              <h2>Services Available Through This Platform</h2>

              <ul class="features">
                <li>Access verified election-related updates and public notices</li>
                <li>Identify and verify information that may be misleading or inaccurate</li>
                <li>Obtain guidance on voter identification, registration, and status verification</li>
                <li>Submit general queries through the automated assistance system</li>
              </ul>

              <p>
                Users are advised to rely only on verified sources for election-related information.
                If conflicting or unclear information is encountered elsewhere, it should be verified
                through official channels before taking action.
              </p>

              <p style="font-weight: 600;">
                This platform is strictly non-partisan and does not endorse or oppose any political
                party, candidate, or ideology.
              </p>

              <a href="{{dashboardUrl}}" class="cta-button">
                Access Your Account
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer">
              Voter Awareness & Assistance Initiative<br />
              Public information and citizen support service<br /><br />

              <a href="{{unsubscribeUrl}}">Unsubscribe</a> |
              <a href="{{websiteUrl}}">Visit Official Website</a><br /><br />

              © 2025 Voter Awareness Platform
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
