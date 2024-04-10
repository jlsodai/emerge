/* eslint-disable @next/next/no-img-element */
import Navigation from "@/app/components/Navigation";
import Link from "next/link";

const links = [
  { title: "Home", url: "/" },
  { title: "Overview", url: "/#overview" },
  {
    title: "FAQs",
    url: "/faqs",
  },
  { title: "Contact Us", url: "/#contact" },
];

const NavigationSection = () => {
  return (
    <>
      <section className="z-30 relative">
        <div className="container flex justify-between py-4 items-center">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1712736995/EMERGELogo_vyovkw.png"
              width="250px"
              alt=""
            />
          </Link>
          <Navigation links={links} />
        </div>
      </section>
    </>
  );
};

export default NavigationSection;
