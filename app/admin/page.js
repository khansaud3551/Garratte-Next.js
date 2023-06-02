"use client";
import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { useAuth } from "../authContext";
import PrivateRoute from "../components/PrivateRoute";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Link from "next/link";

const AdminPageContent = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated());

  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const sendEmails = async () => {
    alert("sendEmails");

    const message = draftToHtml(convertToRaw(editorState.getCurrentContent()));

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
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <div className="flex justify-center gap-3">
        <button
          className="flex mx-auto px-8 py-4 text-xl font-bold maven-font rounded-xl bg-primary"
          onClick={sendEmails}
        >
          Send Emails
        </button>

        <Link
          href="/"
          className="flex mx-auto px-8 py-4 text-xl font-bold maven-font rounded-xl bg-primary"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

const AdminPage = PrivateRoute(AdminPageContent);
export default AdminPage;
