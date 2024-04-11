/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const PageButton = ({
  href = "#",
  title = "",
  className = "",
  variation = "dusk",
  target = "",
}) => {
  return (
    <div
      className={`${
        variation !== "white"
          ? "p-[2px] bg-gradient-to-r from-[#000000] from-10% to-[#C89116]"
          : ""
      }`}
    >
      <Link
        target={target}
        href={href}
        className={`flex gap-4 items-center w-[220px] pl-8 py-4 font-bold ${className}`}
      >
        {variation === "white" ? (
          <img
            src="https://res.cloudinary.com/dhhw72iwq/image/upload/co_rgb:ffffff,e_colorize:100/v1712306665/ext-link_o62nnb.png"
            alt=""
            className="h-6"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1712306665/ext-link_o62nnb.png"
            alt=""
            className="h-6"
          />
        )}
        {title}
      </Link>
    </div>
  );
};

export default PageButton;
