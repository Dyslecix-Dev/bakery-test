import Link from "next/link";
import { ReactNode } from "react";

export default function NavLink({ children, href, download }: { children: ReactNode; href: string; download?: string }) {
  return (
    <div className="relative h-fit w-fit group">
      <Link href={href} download={download} className="relative text-2xl md:text-3xl lg:text-5xl text-tertiary-brown">
        {children}

        <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full  bg-tertiary-brown transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </Link>
    </div>
  );
}
