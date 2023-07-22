import FormHeader from "@/components/form/FormHeader";
import LoginPrompt from "@/components/form/LogInPrompt";
import SignUpForm from "@/components/form/SignUpForm";

export default function SignUp() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <FormHeader />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignUpForm />
          <LoginPrompt />
        </div>
      </div>
    </>
  );
}
