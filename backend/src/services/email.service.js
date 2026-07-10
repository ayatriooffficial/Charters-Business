// Email Service using Google SMTP
import nodemailer from "nodemailer";

/**
 * Escape special HTML characters to prevent injection in email templates.
 * User-supplied values (name, email, subject, etc.) must be escaped
 * before interpolation into HTML strings.
 */
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

// Sender email (your Gmail address)
const senderEmail = process.env.GOOGLE_EMAIL || "noreply@chartersbusiness.com";

/**
 * Send notification to admin when someone starts an instant meeting
 */
export const sendInstantMeetingNotification = async ({
  hostName,
  hostEmail,
  meetingLink,
  meetingNumber,
}) => {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@chartersbusiness.com";

  // SECURITY: Escape all user-supplied values before interpolating into HTML.
  const safeName = escapeHtml(hostName);
  const safeEmail = escapeHtml(hostEmail);
  const safeNumber = escapeHtml(meetingNumber);

  try {
    await transporter.sendMail({
      from: `"Charters Business" <${senderEmail}>`,
      to: adminEmail,
      subject: `Someone is waiting in a meeting - ${safeNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B30437;">Someone is waiting in a meeting</h2>
          <p><strong>${safeName}</strong> (${safeEmail}) has started an instant meeting and is waiting for you to join.</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Meeting Number:</strong> ${safeNumber}</p>
            <p style="margin: 5px 0;"><strong>Host:</strong> ${safeName}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${safeEmail}</p>
          </div>
          <p>
            <a href="${meetingLink}" style="background:#B30437;color:white;padding:12px 24px;text-decoration:none;border-radius:5px;display:inline-block;">
              Join Meeting
            </a>
          </p>
        </div>
      `,
    });

    console.log(`✅ Instant meeting notification sent to ${adminEmail}`);
    return { success: true, message: "Notification email sent successfully" };
  } catch (error) {
    console.error(
      "❌ Failed to send instant meeting notification:",
      error.message,
    );
    return { success: false, message: error.message };
  }
};

/**
 * Send confirmation email when a meeting is scheduled
 */
export const sendScheduledMeetingConfirmation = async ({
  hostName,
  hostEmail,
  meetingLink,
  meetingNumber,
  scheduledDate,
  scheduledTime,
  subject,
}) => {
  const formattedDate = new Date(scheduledDate).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const adminEmail = process.env.ADMIN_EMAIL || "admin@chartersbusiness.com";
  const meetingSubject = subject || "Charters Business Meeting";

  // SECURITY: Escape all user-supplied values before interpolating into HTML.
  const safeName = escapeHtml(hostName);
  const safeEmail = escapeHtml(hostEmail);
  const safeSubject = escapeHtml(meetingSubject);
  const safeTime = escapeHtml(scheduledTime);
  const safeNumber = escapeHtml(meetingNumber);

  try {
    // Send confirmation to the host
    await transporter.sendMail({
      from: `"Charters Business" <${senderEmail}>`,
      to: hostEmail,
      subject: `Meeting Confirmed - ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B30437;">Meeting Scheduled Successfully!</h2>
          <p>Hello ${safeName},</p>
          <p>Your meeting has been confirmed.</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${safeSubject}</p>
            <p style="margin: 5px 0;"><strong>Date:</strong> ${formattedDate}</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${safeTime}</p>
            <p style="margin: 5px 0;"><strong>Meeting Number:</strong> ${safeNumber}</p>
          </div>
          <p>
            <a href="${meetingLink}" style="background:#B30437;color:white;padding:12px 24px;text-decoration:none;border-radius:5px;display:inline-block;">
              Join Meeting
            </a>
          </p>
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Add this to your calendar and join at the scheduled time.
          </p>
        </div>
      `,
    });

    // Also notify admin
    await transporter.sendMail({
      from: `"Charters Business" <${senderEmail}>`,
      to: adminEmail,
      subject: `New Meeting Scheduled - ${safeNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B30437;">New Meeting Scheduled</h2>
          <p><strong>${safeName}</strong> (${safeEmail}) has scheduled a meeting.</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${safeSubject}</p>
            <p style="margin: 5px 0;"><strong>Date:</strong> ${formattedDate}</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${safeTime}</p>
            <p style="margin: 5px 0;"><strong>Meeting Number:</strong> ${safeNumber}</p>
          </div>
          <p>
            <a href="${meetingLink}" style="background:#B30437;color:white;padding:12px 24px;text-decoration:none;border-radius:5px;display:inline-block;">
              Join Meeting
            </a>
          </p>
        </div>
      `,
    });

    console.log(
      `✅ Meeting confirmation sent to ${hostEmail} and ${adminEmail}`,
    );
    return { success: true, message: "Confirmation emails sent successfully" };
  } catch (error) {
    console.error("❌ Failed to send meeting confirmation:", error.message);
    return { success: false, message: error.message };
  }
};

export default {
  sendInstantMeetingNotification,
  sendScheduledMeetingConfirmation,
};
