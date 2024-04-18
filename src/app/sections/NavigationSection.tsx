"use client";
/* eslint-disable @next/next/no-img-element */
import Navigation from "@/app/components/Navigation";
import Link from "next/link";
import MobileNav from "../components/MobileNav";

const links = [
  { title: "Home", url: "/" },
  { title: "Overview", url: "/#overview" },
  {
    title: "FAQs",
    url: "/faqs",
  },
  { title: "Contact Us", url: "/#contact" },
];

const NavigationSection = ({ mcard = false }) => {
  return (
    <>
      <section className="z-30 relative">
        <div className="container flex justify-between py-6 items-center">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1712736995/EMERGELogo_vyovkw.png"
              className="w-[200px] md:w-[250px] -mt-2"
              alt=""
            />
          </Link>
          <Navigation links={links} />
          {mcard ? (
            <div className="flex gap-8 items-center">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1713446626/mcPartnership_zyzbaj.svg"
                  className="w-[100px] mb-2"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1712579874/mastercard_o0bpqk.svg"
                  className="w-[90px]"
                  alt=""
                />
              </div>
              <MobileNav links={links} />
            </div>
          ) : (
            <MobileNav links={links} />
          )}
        </div>
      </section>
    </>
  );
};

export default NavigationSection;
