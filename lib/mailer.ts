// import nodemailer from "nodemailer";

// export function getTransporter() {
//   const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

//   if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
//     throw new Error("SMTP settings are missing. Check .env.local");
//   }

//   return nodemailer.createTransport({
//     host: SMTP_HOST,
//     port: Number(SMTP_PORT || 465),
//     secure: SMTP_SECURE !== "false",
//     auth: { user: SMTP_USER, pass: SMTP_PASS },
//   });
// }

// export async function sendBookingFormEmail(toEmail: string, name: string) {
//   const transporter = getTransporter();
//   const formUrl =
//     process.env.GOOGLE_FORM_URL ||
//     "https://docs.google.com/forms/d/e/1FAIpQLScOt9_M6dXtizMxsHsP9tyQ3hLUUXx2J9NrV_Naq7KyloKjAA/viewform";
//   const fromAddress = process.env.SMTP_FROM || `"The Divine Tarot" <${process.env.SMTP_USER}>`;

//   await transporter.sendMail({
//     from: fromAddress,
//     to: toEmail,
//     subject: "Payment Received — Fill Your Appointment Form | The Divine Tarot",
//     html: `
//       <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color:#1b1330;">
//         <h2 style="color:#6d28d9;">Namaste ${name || ""} 🙏</h2>
//         <p>Aapka payment successfully receive ho gaya hai. Thank you for booking your Call
//         Reading with <strong>The Divine Tarot</strong>.</p>

//         <p>Apna appointment confirm karne ke liye, neeche diye gaye <strong>Personal Reading
//         Form</strong> ko dhyan se bharein — naam, birth details, aur jinke baare mein aap
//         poochna chahte hain unki details:</p>

//         <p style="text-align:center; margin: 28px 0;">
//           <a href="${formUrl}"
//              style="background:#6d28d9;color:#fff;padding:14px 28px;border-radius:6px;
//              text-decoration:none;font-weight:600;display:inline-block;">
//             Fill Personal Reading Form
//           </a>
//         </p>

//         <div style="background:#f6f3fb;border-left:3px solid #6d28d9;padding:16px 20px;margin:24px 0;font-size:14px;line-height:1.7;">
//           <strong style="display:block;margin-bottom:8px;color:#4c1d95;">Important Note:</strong>
//           <ul style="margin:0;padding-left:18px;">
//             <li>Reading ke liye aapko WhatsApp par call kiya jayega.</li>
//             <li>Appointment ke doran proper wifi/network mein rahein — call baar-baar cut hui toh appointment ussi samay cancel kar di jayegi.</li>
//             <li>Aapke sawal aapko call ke doraan poochne hote hain — form/kahin aur likhne ki zaroorat nahi.</li>
//             <li>Call appointment ke din humari taraf se kiya jata hai.</li>
//             <li>Aap call par sirf do logon ke baare mein pooch sakte hain.</li>
//             <li>Form mein aap jinki details dete hain, reading sirf unhi ki hoti hai.</li>
//             <li>Hum black magic ya vashikaran jaisi cheezein support nahi karte.</li>
//             <li>Kisi bhi prakar ka refund nahi diya jayega.</li>
//             <li>Bacche ke gender, lottery, death, ya sexual related sawal allowed nahi hain.</li>
//           </ul>
//         </div>

//         <p>Form submit karne ke 2 dino ke andar aapko appointment ki date &amp; time email
//         par mil jayegi. Appointment 7-10 working days ke andar, Mon-Fri, 12PM-8PM (IST)
//         schedule hoga.</p>

//         <p style="font-size:13px;color:#666;margin-top:32px;">
//           No refund policy applies. All details shared are kept strictly confidential.<br/>
//           Contact: thedivinetarothindi@gmail.com | +91 88281 16545
//         </p>
//       </div>
//     `,
//   });
// }
