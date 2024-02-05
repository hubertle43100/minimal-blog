import React from "react";
import { FaLink } from "react-icons/fa6";
import { FaBook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LuMenuSquare } from "react-icons/lu";
import { RiAccountBoxFill } from "react-icons/ri";
import { Post } from "../lib/interface";

const sharedIconClass =
  "flex items-center mb-2 mr-1 sm:mb-0 hover:opacity-30 text-md md:text-lg md:mr-3";

interface FeaturedArticleDetailsProps {
  Article: Post;
}

const ArticleFooter: React.FC<FeaturedArticleDetailsProps> = ({ Article }) => {
  return (
    <>
      {/* <div className="border-t my-4 mt-4 " /> */}

      <div className="mt-5 flex flex-col-2 sm:flex-row items-center font-mono opacity-50 text-sm pt-5">
        <div className="flex items-center mb-2 sm:mb-0">
          <FaBook className="mr-2" />
          <span className="mr-3">{Article.readingTime} mins</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <LuMenuSquare className="mr-2 text-lg" />
          <span className="mr-3">{Article.category}</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <RiAccountBoxFill className="mr-2 text-lg" />
          <span className="mr-3">Hubert Le</span>
        </div>
        <div className="ml-auto flex items-center">
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
            {" "}
            <IoMdMail className={sharedIconClass} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ArticleFooter;
