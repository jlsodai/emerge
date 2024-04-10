import React from "react";

const FooterSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#000000] from-10% to-[#C89116]"
    >
      <div className="container py-24">
        <div className="bg-white p-4 md:p-16 rounded-xl">
          <p className="text-3xl md:text-7xl">
            Contact <br /> Information
          </p>
          <p className="font-bold mt-2 md:mt-8">Email:</p>
          <p>info@emergeleaders.com</p>
          <div className="flex flex-col gap-2 mt-8 md:mt-16">
            <p className="text-2xl md:text-4xl">Subscribe</p>
            <p>Sign up to our newsletter to hear the latest updates</p>
            <iframe
              src="https://embeds.beehiiv.com/2c798a68-6d53-45ea-a891-e599ff3a8295?slim=true"
              data-test-id="beehiiv-embed"
              style={{
                margin: 0,
                borderRadius: "0 !important; background-color: transparent",
                maxWidth: "480px",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
