import Link from "next/link";

import { FaXTwitter, FaYelp } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="h-16 flex items-center px-20 font-jetbrains text-tertiary-brown bg-primary-pink-accent">
      {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full flex items-center px-2 active:text-primary-pink-accent lg:hover:text-primary-pink-accent active:bg-tertiary-brown lg:hover:bg-tertiary-brown transition-all duration-500 ease-in-out"
        >
          <Icon className="text-4xl" />
        </Link>
      ))}
    </footer>
  );
}

// TODO: Add links
const SOCIAL_LINKS = [
  {
    href: "#",
    icon: IoLogoFacebook,
  },
  {
    href: "#",
    icon: IoLogoInstagram,
  },
  {
    href: "#",
    icon: IoLogoTiktok,
  },
  {
    href: "#",
    icon: FaXTwitter,
  },
  {
    href: "#",
    icon: FaYelp,
  },
];
