import Link from "next/link";
import NavLogo from "./NavLogo";

interface MobileMenuProps {
  showMenu: boolean;
  setShowMenu: any;
}

export default function MobileMenu({ showMenu, setShowMenu }: MobileMenuProps) {
  return (
    <div
      className={showMenu ? "" : "hidden"}
      role="dialog"
      aria-modal="true"
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <NavLogo />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6">
              <Link href={"/signin"}>
                <p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Log in
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
