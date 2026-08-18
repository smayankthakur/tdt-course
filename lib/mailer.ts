import nodemailer from "nodemailer";

export function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP settings are missing. Check .env.local");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 465),
    secure: SMTP_SECURE !== "false",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendBookingFormEmail(toEmail: string, name: string) {
  const transporter = getTransporter();
  const formUrl = process.env.GOOGLE_FORM_URL || "https://forms.gle/pxDsLcTv16qWMhUA7";
  const fromAddress = process.env.SMTP_FROM || `"The Divine Tarot" <${process.env.SMTP_USER}>`;

  await transporter.sendMail({
    from: fromAddress,
    to: toEmail,
    subject: "Payment Received — Your Appointment Form | The Divine Tarot",
    html: `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color:#1b1330;">
        <h2 style="color:#6d28d9;">Namaste ${name || ""} 🙏</h2>
        <p>Aapka payment successfully receive ho gaya hai. Thank you for booking your Call Reading with
        <strong>The Divine Tarot</strong>.</p>
        <p>Apna appointment confirm karne ke liye, neeche diye gaye form ko dhyan se bharein
        (naam, birthdate, aur jinke baare mein aap poochna chahte hain unki details):</p>
        <p style="text-align:center; margin: 28px 0;">
          <a href="${formUrl}"
             style="background:#6d28d9;color:#fff;padding:14px 28px;border-radius:6px;
             text-decoration:none;font-weight:600;display:inline-block;">
            Fill Appointment Form
          </a>
        </p>
        <p>Form submit karne ke 2 dino ke andar aapko appointment ki date & time email par mil jayegi.
        Appointment 7-10 working days ke andar, Mon-Fri, 12PM-8PM (IST) schedule hoga.</p>
        <p style="font-size:13px;color:#666;margin-top:32px;">
          No refund policy applies. All details shared are kept strictly confidential.<br/>
          Contact: thedivinetarothindi@gmail.com | +91 88281 16545
        </p>
      </div>
    `,
  });
}
