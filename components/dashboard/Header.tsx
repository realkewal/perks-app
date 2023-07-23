"use client";

import { Disclosure } from "@headlessui/react";
import NavLogo from "@/components/NavLogo";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Dashboard", href: "/dashboard", current: true },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="border-b border-gray-200 bg-white">
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <NavLogo />
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"></div>
            </div>
            <div className="ml-6 -my-px  flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
