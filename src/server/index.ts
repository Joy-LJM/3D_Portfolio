import express, { type Express, type Request, type Response } from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.SENDGRID_API_KEY;
const fromEmail = process.env.SENDGRID_FROM_EMAIL;
const toEmail = process.env.MY_EMAIL;

if (apiKey) {
  console.log("Email server is configured.");
  sgMail.setApiKey(apiKey);
}

const app: Express = express();
const port = Number(process.env.PORT ?? 3001);

app.use(express.json());

app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Please complete all fields." });
  }

  if (!apiKey || !fromEmail || !toEmail) {
    return res.status(500).json({
      ok: false,
      error:
        "Email server is not configured. Check SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, and MY_EMAIL.",
    });
  }

  console.log("Contact form submission:", { name, email, message });

  const msg = {
    to: toEmail,
    from: fromEmail,
    replyTo: email,
    subject: "Contact form portfolio",
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ ok: true, message: "Message received." });
  } catch (error: unknown) {
    console.error(error);

    if (typeof error === "object" && error && "response" in error) {
      const response = error.response as { body?: unknown };
      console.error(response.body);
    }

    return res.status(500).json({ ok: false, error: "Failed to send email." });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
