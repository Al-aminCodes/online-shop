"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Books",
      href: "/books",
    },
    {
      name: "Listed Books",
      href: "/listItem",
    },
    {
      name: "Read Books",
      href: "/readBooks",
    },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                isActive
                  ? "border border-green-500 text-green-600 rounded-md font-medium"
                  : ""
              }
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
