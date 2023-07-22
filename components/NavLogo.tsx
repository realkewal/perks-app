import Image from "next/image";

export default function NavLogo() {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Perks - Start earning rewards</span>
        <Image
          className="h-8 w-auto"
          src="/images/perks.svg"
          alt=""
          width={200}
          height={50}
        />
      </a>
    </div>
  );
}
