"use client";
import { useState } from "react";
import { useAuth } from "../authContext";
import PrivateRoute from "../components/PrivateRoute";

const AdminPageContent = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated());

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmails = async () => {
    alert("sendEmails");

    // Post request to sendemailall
    try {
      const res = await fetch("/api/sendemailall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: subject,
          message: message,
        }),
      });

      if (res.ok) {
        const responseJson = await res.json();
        console.log("Response:", responseJson);
      } else {
        const error = await res.json();
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-20 space-y-5">
      <input
        type="text"
        value={subject}
        required
        className="w-full p-3 text-black bg-white md:p-6 md:text-xl focus:outline-none rounded-xl"
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
      />
      <textarea
        value={message}
        required
        className="w-full p-3 text-black bg-white md:p-6 md:text-xl focus:outline-none rounded-xl"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button
        className="flex mx-auto px-8 py-4 text-xl font-bold maven-font rounded-xl bg-primary"
        onClick={sendEmails}
      >
        Send Emails
      </button>
    </div>
  );
};

const AdminPage = PrivateRoute(AdminPageContent);
export default AdminPage;
