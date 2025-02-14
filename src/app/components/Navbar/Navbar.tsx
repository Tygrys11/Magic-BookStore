"use client"
import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Buttons } from "../Buttons";
import styles from "../../styles/navbar.module.css";
import Banner from "../Banner";

const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "Books", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <Disclosure
        as="nav"
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-indigo-950 bg-opacity-90 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">

            {/* Hamburger Menu - Right side */}
            <div className="absolute inset-y-0 right-0 flex items-center lg-custom:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-purple-950 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>

            {/* Logo + Title - Left side */}
            <div className="flex items-center space-x-2">
              <img alt="Logo" src="/assets/book.png" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-yellow-400">
                Magic BookStore
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg-custom:ml-6 lg-custom:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-indigo-950 text-white"
                        : "text-gray-300 hover:bg-indigo-950 hover:text-yellow-400",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg-custom:flex lg-custom:ml-6">
              <div className={styles.buttonContainer}>
                <Buttons className={styles.SignUp}>
                  Sign Up
                </Buttons>
                <Buttons className={`${styles.logIn} py-2 px-4 rounded`}>
                  Log In
                </Buttons>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <DisclosurePanel className="lg-custom:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 text-center">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-purple-400",
                  "block rounded-md px-3 py-2 text-base font-medium w-full hover:bg-gray-700"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            {/* Mobile Buttons */}
            <div className="mt-4 space-y-2">
              <Buttons className={`${styles.SignUp} py-2 px-4 w-full rounded`}>
                Sign Up
              </Buttons>
              <br />
              <Buttons className={`${styles.logIn} w-full`}>Log In</Buttons>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <br /><br />
      {/* Banner below the Navbar */}
      <Banner />
    </>
  );
}
