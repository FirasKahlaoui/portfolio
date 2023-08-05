const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "kahlaoui.look@outlook.fr",
        pass: "myMicrosoftAccount5@#",
      },
    });

    // Compose the email
    const emailContent = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    // Send the email
    await transporter.sendMail({
      from: "kahlaoui.look@outlook.fr",
      to: "kahlaouifiras2017@gmail.com",
      subject: "New Contact Form Submission",
      text: emailContent,
    });

    // Return success response
    res.status(200).json({ code: 200, message: "Email sent successfully" });
  } catch (error) {
    // Return error response
    console.error(error.message);
    res.status(500).json({ code: 500, message: "Something went wrong" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
