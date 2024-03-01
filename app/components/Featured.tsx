import Link from "next/link";
//import Themebutton from "./ThemeButton";
import ArticleFooter from "./ArticleFooter";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Source_Code_Pro } from "next/font/google";
import { Post } from "../lib/interface";
import Image from "next/image";

const sourceCodeProStyles = Source_Code_Pro({ subsets: ["latin"] });

interface FeaturedArticleDetailsProps {
  featuredArticle: Post;
}

const Featured: React.FC<FeaturedArticleDetailsProps> = ({
  featuredArticle,
}) => {
  return (
    <article className="space-y-2 p-8 border border-black border-t-4 border-t-yellow-400 rounded-md ">
      <div>
        <p className="mb-3">
          <span className="bg-yellow-400 p-2 rounded-sm font-bold">
            Featured
          </span>
        </p>
        <p className="flex items-center text-base font-medium leading- mt-2 text-yellow-400 pb-4 pt-2">
          <FaRegCalendarCheck className="mr-2 text-yellow-400" />
          {new Date(featuredArticle._createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <Link
        href={`/post/${featuredArticle.slug.current}`}
        prefetch
        className="space-y-3 mb-4"
      >
        <div>
          {featuredArticle.thumbnail && (
            <Image
              src={featuredArticle.thumbnail.asset.url}
              alt={featuredArticle.thumbnail.alt}
              width={200}
              height={200}
              className="w-1/2 object-cover hover:scale-95 transition-transform duration-600"
            />
          )}
          <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mt-4 hover:text-gray-500">
            {featuredArticle.title}
          </h3>
        </div>
        <p
          className={` ${sourceCodeProStyles.className} prose max-w-none font-mono text-gray-500 dark:text-gray-400 line-clamp-6`}
        >
          {featuredArticle.overview}
        </p>
      </Link>
      <ArticleFooter Article={featuredArticle} />
    </article>
  );
};

export default Featured;
