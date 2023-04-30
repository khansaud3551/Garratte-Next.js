import sgMail from "@sendgrid/mail";
import { connectToDatabase } from "../../lib/mongodb";
import { NextResponse } from "next/server";
import { isValidEmail } from "@/app/lib/emailValidator";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(
  "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"
);

export async function POST(req, res) {
  //get the form data name, email, message
  const body = await req.json();
  const { name, email, phoneNumber } = body;

  // Validate the form data
  if (
    !name ||
    name.length < 3 ||
    !email ||
    !isValidEmail(email) ||
    !phoneNumber
  ) {
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

    phoneNumber,

    submittedAt: new Date(),
  };

  const result = await db.collection("contacts").insertOne(formData);

  // Send the customized email to the user
  const msg = {
    to: email,
    from: "k.klassic44@gmail.com", // Update this with the verified email address or an email from the verified domain
    templateId: "d-886d0b0e96e94b64b6dea64acd28d6aa", // Your SendGrid template ID
    dynamic_template_data: {
      name: name,
      link: "https://your-link.com",
    },
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

  // message submitted successfully using res
  return NextResponse.json(
    {
      message: "Mssssessage sent successfully!",
    },
    {
      status: 200,
    }
  );
}