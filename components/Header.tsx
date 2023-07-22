import NavLoginLink from "./NavLoginLink";
import NavLogo from "./NavLogo";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <NavLogo />
        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <NavLoginLink />
        </div>
      </nav>
    </header>
  );
}
