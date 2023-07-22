import { Field, Form } from "formik";

export default function SignUpFormFields() {
  return (
    <Form className="space-y-6">
      <div>
        <label htmlFor="name">Name</label>
        <Field
          id="name"
          name="name"
          placeholder="Bruce Wayne"
          type="name"
          className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="bruce@darkknight.com"
          type="email"
          className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <Field
          id="password"
          name="password"
          placeholder="*********"
          type="password"
          autoComplete="current-password"
          className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div>
        <label htmlFor="password">Referral code</label>
        <Field
          id="referralCode"
          name="referralCode"
          placeholder="promo-xxxxxx"
          type="text"
          className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign up
        </button>
      </div>
    </Form>
  );
}
