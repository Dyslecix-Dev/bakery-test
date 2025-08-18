import Link from "next/link";

import { FaXTwitter, FaYelp } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

// TODO: Add links
export default function Footer() {
  return (
    <footer className="h-16 flex items-center px-20 font-jetbrains text-tertiary-brown bg-primary-pink-accent">
      <Link
        href="#"
        className="h-full flex items-center px-2 active:text-primary-pink-accent lg:hover:text-primary-pink-accent active:bg-tertiary-brown lg:hover:bg-tertiary-brown transition-all duration-500 ease-in-out"
      >
        <IoLogoFacebook className="text-4xl" />
      </Link>

      <Link
        href="#"
        className="h-full flex items-center px-2 active:text-primary-pink-accent lg:hover:text-primary-pink-accent active:bg-tertiary-brown lg:hover:bg-tertiary-brown transition-all duration-500 ease-in-out"
      >
        <IoLogoInstagram className="text-4xl" />
      </Link>

      <Link
        href="#"
        className="h-full flex items-center px-2 active:text-primary-pink-accent lg:hover:text-primary-pink-accent active:bg-tertiary-brown lg:hover:bg-tertiary-brown transition-all duration-500 ease-in-out"
      >
        <IoLogoTiktok className="text-4xl" />
      </Link>

      <Link
        href="#"
        className="h-full flex items-center px-2 active:text-primary-pink-accent lg:hover:text-primary-pink-accent active:bg-tertiary-brown lg:hover:bg-tertiary-brown transition-all duration-500 ease-in-out"
      >
        <FaXTwitter className="text-4xl" />
      </Link>

      <Link
        href="#"
        className="h-full flex items-center px-2 active:text-primary-pink-accent lg:hover:text-primary-pink-accent active:bg-tertiary-brown lg:hover:bg-tertiary-brown transition-all duration-500 ease-in-out"
      >
        <FaYelp className="text-4xl" />
      </Link>
    </footer>
  );
}
