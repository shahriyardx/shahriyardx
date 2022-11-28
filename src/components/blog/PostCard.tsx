import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { type IPost } from "types";
import { env } from "env/client.mjs";

type Props = {
  post: IPost;
};

const PostCard = ({ post }: Props) => {
  const { attributes } = post;
  const {
    slug,
    thumbnail: thumbnail_img,
    category,
    title,
    description,
    createdAt
  } = attributes;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div
        className={`grid cursor-pointer grid-cols-1 sm:grid-cols-[250px,auto] gap-5 px-5 py-10 border-b-[1px] border-zinc-700`}
      >
        <Image
          src={`${env.NEXT_PUBLIC_STRAPI_BASE}${thumbnail_img.data.attributes.formats.thumbnail?.url}`}
          alt="Image"
          width={300}
          height={200}
          className="h-full aspect-square overflow-hidden rounded-md object-cover"
        />

        <div className="flex flex-col">
          <span className="text-xs font-bold text-zinc-600">
            {category.data?.attributes?.title}
          </span>
          <h3
            className={`mt-2 font-montserrat font-bold text-xl md:text-3xl`}
          >
            {title}
          </h3>

          <p
            className={`mb-auto font-montserrat font-bold text-zinc-500 mt-2 text-xs md:mt-3 md:text-base`}
          >
            {description}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <Image
              src="/images/me.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt={"profile"}
            />

            <div className="flex flex-col font-montserrat">
              <span
                className={`font-bold text-zinc-400 text-sm md:text-base`}
              >
                Shahriyar
              </span>
              <span
                className={`text-zinc-500 text-xs md:text-sm`}
              >
                {moment(createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
