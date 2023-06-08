import sgMail from "@sendgrid/mail";
import { connectToDatabase } from "../../lib/mongodb";
import { NextResponse } from "next/server";
import { isValidEmail } from "@/app/lib/emailValidator";

//export const static = true;

const API_KEY = process.env.SENDGRID_API_KEY;
// console.log(API_KEY);
sgMail.setApiKey(API_KEY);

export async function POST(req, res) {
  const body = await req.json();
  const { subject, message } = body;

  const emailList = [
    { email: "khansaud150@gmail.com" },
    { email: "r.klassic44@gmail.com" },
  ];

  console.log("Sending email to all contacts");
  const { db } = await connectToDatabase();
  //get the emails from the database
  // const records = await db.collection("contacts").find({}).toArray();
  // const emailList = records.map((record) => ({ email: record.email }));

  console.log(emailList);

  const emailsToSend = emailList.map((recipient) => ({
    to: recipient.email,
    from: "tyler@manageher.io",
    subject: subject,
    // text: "test",
    html: message,
    // templateId: 'second-template-id', // The ID of the template you've created
    //we need to send the html and the name to the template
    //   dynamic_template_data: {
    //     name: name,
    //     html: html,
    //  },
  }));

  try {
    await Promise.all(emailsToSend.map((email) => sgMail.send(email)));
    console.log("Emails sent successfully");
  } catch (error) {
    console.error("Error sending emails", error);
    if (error.response && error.response.body && error.response.body.errors) {
      console.error("SendGrid API error details:", error.response.body.errors);
    }
    throw error;
  }

  // message submitted successfully using res
  return NextResponse.json(
    {
      message: "Message sent successfully!",
    },
    {
      status: 200,
    }
  );
}
