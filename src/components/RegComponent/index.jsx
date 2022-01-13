import React from "react";
import { Form } from "./Form";
import "./form.css";

export default function index({status}) {
  return (
    <div className="signupForm">
      <Form changeForm={status} />
    </div>
  );
}
