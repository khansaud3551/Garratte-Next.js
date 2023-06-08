import sgMail from "@sendgrid/mail";
import { connectToDatabase } from "../../lib/mongodb";
import { NextResponse } from "next/server";
import { isValidEmail } from "@/app/lib/emailValidator";

//export const static = true;

const API_KEY = process.env.SENDGRID_API_KEY;
// console.log(API_KEY);
sgMail.setApiKey(API_KEY);

export async function POST(req, res) {
  // Handle preflight request
  if (req.method === "OPTIONS") {
    return NextResponse.empty()
      .setHeader("Access-Control-Allow-Origin", "https://manageher.io") // Update this line
      .setHeader("Access-Control-Allow-Methods", "POST")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  //get the form data name, email, message
  const body = await req.json();
  const { name, email } = body;

  // Validate the form data
  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json({
      error: true,
      message: "Invalid form data.",
    });
  }

  // Save the form data to MongoDB
  const { db } = await connectToDatabase();
  const formData = {
    name,
    email,
    submittedAt: new Date(),
  };

  // Check if the email already exists in the database
  const existingEmail = await db
    .collection("contacts")
    .findOne({ email: email });

  if (existingEmail) {
    return NextResponse.json(
      {
        error: true,
        message: "Email already exists.",
      },
      {
        status: 401,
      }
    );
  }

  // If email doesn't exist, insert it into the database
  const result = await db.collection("contacts").insertOne(formData);

  // Send the customized email to the user
  const msg = {
    to: email,
    from: "tyler@manageher.io",
    templateId: "d-41f5092e7c2f454d841924091f168799", // Your SendGrid template ID
    subject:
      "Unlock the Secrets to Managing OnlyFans Models and Skyrocket Your Business",
  };
  console.log(msg);

  try {
    await sgMail.send(msg);
    return NextResponse.json(
      {
        message: "Message sent successfully!",
        error: false,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("SendGrid API error:", error);
    if (error.response && error.response.body && error.response.body.errors) {
      console.error("SendGrid API error details:", error.response.body.errors);
    }
    //use Response to send error
    Response.json({ error: "Message not sent." });
  }
}
