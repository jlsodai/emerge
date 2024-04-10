"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  links: {
    title: string;
    url: string;
  }[];
}

const links = [
  { title: "overview", url: "#" },
  {
    title: "FAQs",
    url: "/faqs",
  },
  { title: "Contact Us", url: "#" },
];
const Navigation = ({ links }: Props) => {
  const [showTop, setShowTop] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const currentPath = usePathname();

  return (
    <div className="-md:hidden">
      {links.map((link, i) => (
        <Link
          href={link.url}
          className={`mx-6 hover:border-b-4 pt-6 pb-4 border-tender ${
            currentPath === link.url && "border-b-4"
          }`}
          key={i}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
