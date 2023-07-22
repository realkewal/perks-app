"use client";

import { Formik, FormikHelpers } from "formik";

import SignUpFormFields from "./SignUpFormFields";

interface Values {
  name: string;
  email: string;
  password: string;
  referralCode: string;
}

export default function SignUpForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        referralCode: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          setSubmitting(false);
        }, 500);
      }}
    >
      <SignUpFormFields />
    </Formik>
  );
}
