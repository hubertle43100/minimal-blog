import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";

const sourceCodeProStyles = Source_Code_Pro({ subsets: ["latin"] });

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"] | order(_createdAt desc) [0] `;

  const headers = {
    "Cache-Control": "public, max-age=3600",
  };

  const data = await client.fetch(query, { headers });

  return data;
}
export const revalidate = 10;
export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;
  const uniqueQueryParam = `?timestamp=${new Date().getTime()}`;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={`${urlFor(value).url()}${uniqueQueryParam}`}
          alt="Image"
          className="rounded-lg"
          width={600}
          height={600}
          loading="lazy"
        />
      ),
    },
  };

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 text-teal-500">
                {new Date(data._createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {data.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div
            className={`${sourceCodeProStyles.className} prose max-w-none pb-8 pt-10 dark:prose-invert prose-sm `}
          >
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
