import { client } from "./lib/sanity";
import { Post } from "./lib/interface";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Source_Code_Pro } from "next/font/google";
import {
  FaRegCalendarCheck,
  FaGithub,
  FaLinkedin,
  FaBook,
} from "react-icons/fa";
import { RiFilePaperLine, RiAccountBoxFill, RiStackLine } from "react-icons/ri";
import { TbCircleLetterH } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { LuMenuSquare } from "react-icons/lu";

const sourceCodeProStyles = Source_Code_Pro({ subsets: ["latin"] });

const sharedIconClass =
  "flex items-center mb-2 mr-1 sm:mb-0 hover:opacity-30 text-md md:text-lg md:mr-3";

async function getData() {
  const query = `*[_type == "post"]{
    _id,
    title,
    overview,
    slug,
    _createdAt,
    thumbnail {
      asset -> {
        url
      },
      alts
    },
    content
  }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const data = (await getData()) as Post[];

  // Find the article with title "Mastering Tailwind CSS Basics"
  const featuredArticle = data.find(
    (post) => post.title === "Mastering Tailwind CSS Basics"
  );

  // Filter out the featured article from the list
  const otherPosts = data
    .filter((post) => post.title !== "Mastering Tailwind CSS Basics")
    .sort(
      (a, b) =>
        new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
    );

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Posts
        </h1>
      </div>

      <div className="pt-4 flex">
        {/* Featured Article */}
        {featuredArticle && (
          <div className="pr-4 ">
            <article className="space-y-2 p-8 border border-black border-t-4 border-t-yellow-400 rounded-md ">
              <div>
                <p className="mb-3">
                  <span className="bg-yellow-300 p-2 rounded-sm font-bold">
                    Featured
                  </span>
                </p>
                <p className="flex items-center text-base font-medium leading- mt-2">
                  <FaRegCalendarCheck className="mr-2 text-teal-500" />
                  {new Date(featuredArticle._createdAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
                {featuredArticle.thumbnail && (
                  <img
                    src={featuredArticle.thumbnail.asset.url}
                    alt={featuredArticle.thumbnail.alt}
                    className="w-full h-350 object-cover"
                  />
                )}
              </div>

              <Link
                href={`/post/${featuredArticle.slug.current}`}
                prefetch
                className="space-y-3 mb-4"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mt-4">
                    {featuredArticle.title}
                  </h3>
                </div>

                <p
                  className={` ${sourceCodeProStyles.className} prose max-w-none font-mono text-gray-500 dark:text-gray-400 line-clamp-6`}
                >
                  {featuredArticle.overview}
                </p>
                <div className="border-t my-4 mt-4 " />
                <div className="mt-5 flex flex-col-2 sm:flex-row items-center font-mono opacity-50 text-sm pt-5">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <FaBook className="mr-2" />
                    <span className="mr-3">3 mins</span>
                  </div>
                  <div className="flex items-center mb-2 sm:mb-0">
                    <LuMenuSquare className="mr-2 text-lg" />
                    <span className="mr-3">React.js</span>
                  </div>
                  <div className="flex items-center mb-2 sm:mb-0">
                    <RiAccountBoxFill className="mr-2 text-lg" />
                    <span className="mr-3">Hubert Le</span>
                  </div>
                  {/* Push this to the right */}
                  <div className="ml-auto flex items-center">
                    <FaLink className={sharedIconClass} />
                    <FaGithub className={sharedIconClass} />
                    <FaLinkedin className={sharedIconClass} />
                    <IoMdMail className={sharedIconClass} />
                  </div>
                </div>
              </Link>
            </article>

            <div className={featuredArticle ? "" : "w-full"}>
              <ul>
                {otherPosts.map((post) => (
                  <li
                    key={post._id}
                    className="py-4 transition duration-300 ease-in-out transform hover:text-teal-500"
                  >
                    <article className="space-y-2">
                      <div>
                        <p className="text-sm font-medium  text-teal-500">
                          {new Date(post._createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>

                      <Link
                        href={`/post/${post.slug.current}`}
                        prefetch
                        className="space-y-3"
                      >
                        <div>
                          <h3 className="text-1xl  font-bold text-gray-900 dark:text-gray-100">
                            {post.title}
                          </h3>
                        </div>

                        <p
                          className={`${sourceCodeProStyles.className} prose max-w-none text-sm text-gray-500 dark:text-gray-400 line-clamp-4`}
                        >
                          {post.overview}
                        </p>
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
