import React from "react";
import { useLocation } from "react-router-dom";

const PostPage = () => {
  const location = useLocation();
  const { authorName, blogTitle, blogContent } = location.state || {};

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-600 mt-8 rounded-lg">
      <h1 className="text-2xl bg-white w-fit p-2 rounded-md font-bold text-red-900 break-words">
        {blogTitle}
      </h1>
      <p className="bg-red-900 text-xl w-fit p-2 rounded-xl mt-2 break-words">Written by: {authorName}</p>
      <p className="mt-4 text-secondary break-words whitespace-normal overflow-wrap-break-word">
        {blogContent}
      </p>
    </div>
  );
};

export default PostPage;
