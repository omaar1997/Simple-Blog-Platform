import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import AddBlogModal from "../components/AddBlogModal";

const HomePage = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getBlogs")
      .then((response) => {
        setBlogsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="flex flex-col gap-4 pt-8">
      <div className="flex justify-end px-6 max-sm:px-2">
        <button
          onClick={() => setOpenModal(true)}
          className="w-fit flex justify-center items-center bg-red-900 text-white gap-2 bg-primary rounded-md border-primary border-2 py-2 px-10 hover:bg-red-800 hover:text-white hover:cursor-pointer hover:border-red-800 duration-300
            max-sm:p-1 max-sm:text-sm"
        >
          <FaPlus />
          <span>Add Credit Package</span>
        </button>
        <AddBlogModal show={openModal} close={() => setOpenModal(false)} />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-6 max-sm:px-2 max-sm:gap-2">
        {blogsData &&
          blogsData.map((blog, index) => (
            <Blog
              key={index}
              authorName={blog.authorName}
              blogTitle={blog.blogTitle}
              blogContent={blog.blogContent}
              created_time={blog.created_time}
            />
          ))}
      </div>
    </section>
  );
};

export default HomePage;
