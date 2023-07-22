import Image from "next/image";

export default function FormHeader() {
  return (
    <>
      <div className="flex justify-center">
        <Image
          className="h-8 w-auto"
          src="/images/perks.svg"
          alt=""
          width={200}
          height={50}
        />
      </div>

      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
        Sign up for a Perks account
      </h2>
    </>
  );
}
