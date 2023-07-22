export default function LoginPrompt() {
  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      Already have an account?&nbsp;
      <a
        href="/signin"
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        Log in
      </a>
    </p>
  );
}
