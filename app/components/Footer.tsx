"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const sourceCodeProStyles = Source_Code_Pro({ subsets: ["latin"] });

const sharedIconClass =
  "flex items-center mb-2 mr-1 sm:mb-0 hover:opacity-30 text-md md:text-lg md:mr-3";

const Footer = () => {
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Attach the scroll-to-top behavior to the button click
    const icon = document.getElementById("scrollToTopIcon");
    if (icon) {
      icon.addEventListener("click", handleClick);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (icon) {
        icon.removeEventListener("click", handleClick);
      }
    };
  }, []);
  return (
    <>
      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 p-6">
        {/* First Column */}
        <div className="flex-shrink-0 pr-8">
          <div
            id="scrollToTopIcon"
            className="cursor-pointer transition-transform transform hover:scale-95"
          >
            <Image src="/icon.png" alt="" width={80} height={80} />
          </div>
          <p className="text-md mt-6">Healthy intake of tech blogs</p>
          <p className="text-4xl font-bold mb-6">Get in the know</p>
          <p className={`${sourceCodeProStyles.className} text-sm`}>
            We're passionate about simplifying front-end topics for better
            understanding, continuously learning to enhance visuals and stay
            current with design trends - Subscribe to our newsletter for the
            latest updates!
          </p>
        </div>

        {/* Second Column */}
        <div className="grid grid-cols-2 mt-10 md:mt-6">
          <div className="flex-grow">
            <p className="font-semibold">Topic of intrested</p>
            <ul className={`${sourceCodeProStyles.className} text-sm mt-2 `}>
              <li className="hover:text-slate-400">React</li>
              <li className="hover:text-slate-400">Front-end</li>
              <li className="hover:text-slate-400">Github Tips</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Topic of intrested</p>
            <ul className={`${sourceCodeProStyles.className} text-sm mt-2 `}>
              <li className="hover:text-slate-400">React</li>
              <li className="hover:text-slate-400">Front-end</li>
              <li className="hover:text-slate-400">Github Tips</li>
            </ul>
          </div>
          <div className="flex justify-start items-end mt-4">
            <a
              href="https://hubertle.online/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink className={sharedIconClass} />
            </a>
            <a
              href="https://github.com/hubertle43100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={sharedIconClass} />
            </a>
            <a
              href="https://www.linkedin.com/in/hubertle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={sharedIconClass} />
            </a>
            <a
              href="mailto:hubertle43100@gmail.com?subject=👋%20Hello%20there!&body=Thanks%20for%20checking%20out%20my%20portfolio%20🙏"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail className={sharedIconClass} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
