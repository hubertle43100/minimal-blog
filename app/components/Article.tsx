import Link from "next/link";
//import Themebutton from "./ThemeButton";
import ArticleFooter from "./ArticleFooter";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Source_Code_Pro } from "next/font/google";
import { Post } from "../lib/interface";

const sourceCodeProStyles = Source_Code_Pro({ subsets: ["latin"] });

interface ArticleDetailsProps {
  otherPosts: Post[];
}

const Article: React.FC<ArticleDetailsProps> = ({ otherPosts }) => {
  return (
    <div className={"w-full"}>
      <ul>
        {otherPosts.map((post) => (
          <li
            key={post._id}
            className="py-4 transition duration-300 ease-in-out transform "
          >
            <article className="space-y-2 p-8 border border-black border-t-4 border-t-blue-400 rounded-md">
              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="space-y-3"
              >
                <div className="flex items-center">
                  <FaRegCalendarCheck className="mr-2 text-blue-400" />
                  <p className="text-sm font-medium  text-blue-400">
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <h3 className="text-1xl  font-bold text-gray-900 dark:text-gray-100 hover:text-gray-500">
                    {post.title}
                  </h3>
                </div>

                <p
                  className={`${sourceCodeProStyles.className} prose max-w-none text-sm text-gray-500 dark:text-gray-400 line-clamp-4`}
                >
                  {post.overview}
                </p>
              </Link>
              <ArticleFooter />
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Article;
