import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  links: {
    title: string;
    url: string;
  }[];
}

const MobileNav = ({ links }: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const currentPath = usePathname();
  return (
    <>
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        data-collapse-toggle="navbar-default"
        type="button"
        className="border border-tender inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${
          mobileMenu ? "block" : "hidden"
        } absolute top-[70px] right-[2rem] min-w-[200px]`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 border-tender">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.url}
                onClick={() => setMobileMenu(!mobileMenu)}
                className={`block py-2 px-3 rounded hover:bg-tender-200 ${
                  currentPath === link.url && "bg-tender text-white"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
