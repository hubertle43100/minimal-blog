import Link from "next/link";
import ArticleFooter from "./ArticleFooter";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Source_Code_Pro } from "next/font/google";
import { Post } from "../lib/interface";
import Image from "next/image";

const sourceCodeProStyles = Source_Code_Pro({ subsets: ["latin"] });

interface PictureArticleDetailsProps {
  otherPosts: Post[];
}

const PictureArticle: React.FC<PictureArticleDetailsProps> = ({
  otherPosts,
}) => {
  const postsWithThumbnail = otherPosts.filter(
    (post) => post.thumbnail?.asset !== undefined
  );

  return (
    <div className="w-full overflow-x-auto p-8 bg-gray-50 mt-8 rounded-md">
      <p className="text-3xl font-bold mb-2">Featured articles</p>
      <div className="flex flex-wrap">
        {postsWithThumbnail.slice(0, 4).map((post) => (
          <div key={post._id} className="w-1/2 p-2 pl-0">
            <article>
              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="flex flex-col h-full space-y-2 mb-8"
              >
                {post.thumbnail && (
                  <div className="h-48 sm:h-56 md:h-64 w-full flex-shrink-0 overflow-hidden rounded-md border transition-all duration-300 border-gray-200">
                    <Image
                      src={post.thumbnail.asset.url}
                      alt={post.thumbnail.alt}
                      width={400}
                      height={400}
                      objectFit="cover"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                <h3 className="w-48 text-1xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-500">
                  <p className="text-sm font-medium text-secondary">
                    {post.category}
                  </p>
                  {post.title}
                  {/* error removed */}
                </h3>
              </Link>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureArticle;
