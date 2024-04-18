import Markdown from "markdown-to-jsx";
import { faqs } from "@/app/utils";
import NavigationSection from "../sections/NavigationSection";

const page = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#000000] from-10% to-[#C89116] py-24">
        <div className="container">
          <h1 className="text-6xl text-white">
            Frequently asked questions (FAQs)
          </h1>
        </div>
      </section>

      <section className="container py-24">
        <div className="prose max-w-full">
          <Markdown>{faqs}</Markdown>
        </div>
      </section>
    </>
  );
};

export default page;
