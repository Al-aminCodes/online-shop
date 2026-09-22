import logo from "@/assets/book.ico";
import Image from "next/image";
import Link from "next/link";

import CartButton from "../booksDatails/navCartButton";
import NavLinks from "./linkStyle";

const Navber = () => {
  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <section className="container mx-auto">
        <div className="navbar p-6">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Mobile menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                ☰
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <NavLinks />
              </ul>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 text-2xl font-bold"
            >
              <Image src={logo} alt="Book Vibe logo" width={35} height={35} />
              Book Vibe
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <NavLinks />
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end gap-3">
            <Link href="/cart">
              <CartButton />
            </Link>

            <div className="flex gap-2">
              <button className="btn btn-success text-white">Sign In</button>

              <button className="btn bg-cyan-500 text-white border-none">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navber;
