import logo from "@/assets/book.ico";
import Image from "next/image";
import Link from "next/link";

const Navber = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/books"}>Book</Link>
      </li>

      <li>
        <Link href={"/listItem"}> Listed Books</Link>
      </li>
      <li>
        <Link href={"/readBooks"}> Read Books</Link>
      </li>
    </>
  );

  return (
    <nav className="shadow-sm bg-base-100">
      <section className="container mx-auto sticky top-0">
        <div className="navbar  p-6 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="flex items-center gap-3 text-[#131313] text-3xl font-bold">
              <Image src={logo} alt="navber logo" />
              Online shop
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-3 items-center">
              <button className="btn btn-success">LongIn</button>
              <button className="btn btn-error">SignUp</button>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navber;
