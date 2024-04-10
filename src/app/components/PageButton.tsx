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
    <Link
      target={target}
      href={href}
      className={`flex gap-4 items-center w-[220px] pl-8 py-4 border-2 border-dusk font-bold ${className}`}
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
  );
};

export default PageButton;
