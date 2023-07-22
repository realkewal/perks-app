"use client";

import * as Yup from "yup";

import { Formik } from "formik";
import SignUpFormFields from "./SignUpFormFields";
import { useState } from "react";

interface Values {
  name: string;
  email: string;
  password: string;
  referredBy: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
  referredBy: Yup.string(),
});

const initialValues: Values = {
  name: "",
  email: "",
  password: "",
  referredBy: "",
};

export default function SignUpForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (values: Values) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("Registration failed");
      }
      // Registration successful, perform any necessary actions
    } catch (error) {
      console.error(error);
      setSubmitError("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <SignUpFormFields />
      </Formik>
      {submitError && <div className="text-red-600 mt-2">{submitError}</div>}
    </>
  );
}
