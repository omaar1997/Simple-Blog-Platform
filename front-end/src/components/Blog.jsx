import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ authorName, blogTitle, blogContent, created_time }) => {
  return (
    <div className="bg-white p-7 max-sm:p-3 rounded flex flex-1 flex-col gap-4 justify-between max-md:justify-stretch">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center font-mainBold">
          <span className="text-red-900 text-lg">{blogTitle}</span>
          <span className="bg-red-900 text-white rounded-md py-1 px-4 max-lg:px-[0.5rem]">
            Written By: {authorName}
          </span>
        </div>
        <div className="flex justify-end">
          <span className="text-red-900 text-lg">{created_time}</span>
        </div>
        <div>
          <p className="text-gray-600 text-sm font-main leading-6 break-words whitespace-normal line-clamp-3">
            {blogContent}
          </p>
        </div>
      </div>
      <div>
        <Link
          to={"/blog-post"}
          state={{ authorName, blogTitle, blogContent }}
          className="bg-red-900 text-white font-mainBold rounded-md py-2 flex justify-center items-center"
        >
          View Full Blog
        </Link>
      </div>
    </div>
  );
};

export default Blog;
