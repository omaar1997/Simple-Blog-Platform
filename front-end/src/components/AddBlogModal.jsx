// import { Modal } from "flowbite";
import axios from "axios";
import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddBlogModal = ({ show, close }) => {
  const [authorName, setAuthorName] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!show) {
      setAuthorName("");
      setBlogTitle("");
      setBlogContent("");
    }
  }, [show]);

  function handleUpdate(e) {
    e.preventDefault();

    if (!authorName || !blogTitle || !blogContent) {
      setError("All fields are required.");
      return;
    }

    const blogData = { authorName, blogTitle, blogContent };

    axios
      .post("http://localhost:5000/api/postBlog", blogData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Blog posted successfully:", response.data);
        toast.success("Blog posted successfully.");
        setAuthorName("");
        setBlogTitle("");
        setBlogContent("");
        setError("");
        close();
      })
      .catch((error) => {
        console.error("Error posting blog:", error);
        setError("Failed to post blog. Please try again.");
        toast.error("Failed to post blog. Please try again.");
      });
  }

  return (
    <div>
      <Modal show={show} onClose={close} popup>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          style={{ backdropFilter: "blur(6px)" }}
        />
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <Modal.Body className="p-10 bg-white rounded-md shadow-lg max-w-xl max-sm:max-w-sm">
            <div className="text-center">
              <div className="mb-4">
                <h3 className="font-mainBold text-black text-lg">
                  ADD A NEW BLOG
                </h3>
                <h3 className="font-main text-gray-600 text-xs">
                  Enter Your Name, Blog Title and Blog Content to publish your
                  new blog.
                </h3>
              </div>
              <div>
                <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
                  {error && (
                    <div className="text-red-500 mb-2 text-sm">{error}</div>
                  )}
                  <label className="flex flex-col gap-2 text-start text-gray-600 relative">
                    Name
                    <input
                      required
                      value={authorName}
                      onChange={(e) => {
                        if (/^[A-Za-z\s]*$/.test(e.target.value)) {
                          setAuthorName(e.target.value);
                        }
                      }}
                      className="rounded-md text-red-900 focus:border-none focus:ring-2 focus:ring-red-900 placeholder:opacity-50"
                      type="text"
                    />
                    {authorName.length < 0 && (
                      <span className="text-red-500 bg-white p-2 ring-2 ring-red-900 rounded-md font-main text-sm absolute top-20 left-0">
                        Invalid Name.
                      </span>
                    )}
                  </label>
                  <label className="flex flex-col gap-2 text-start text-gray-600 relative">
                    Blog Title
                    <input
                      required
                      value={blogTitle}
                      onChange={(e) => {
                        if (/^[A-Za-z\s]*$/.test(e.target.value)) {
                          setBlogTitle(e.target.value);
                        }
                      }}
                      className="rounded-md text-red-900 focus:border-none focus:ring-2 focus:ring-red-900 placeholder:opacity-50"
                      type="text"
                    />
                    {blogTitle.length < 0 && (
                      <span className="text-red-500 bg-white p-2 ring-2 ring-red-900 rounded-md font-main text-sm absolute top-20 left-0">
                        Invalid Title.
                      </span>
                    )}
                  </label>
                  <label className="flex flex-col gap-2 text-start text-gray-600 relative">
                    Blog Content
                    <input
                      required
                      value={blogContent}
                      onChange={(e) => {
                        if (/^[A-Za-z\s]*$/.test(e.target.value)) {
                          setBlogContent(e.target.value);
                        }
                      }}
                      className="rounded-md text-red-900 focus:border-none focus:ring-2 focus:ring-red-900 placeholder:opacity-50"
                      type="text"
                    />
                    {blogContent.length < 0 && (
                      <span className="text-red-500 bg-white p-2 ring-2 ring-red-900 rounded-md font-main text-sm absolute top-20 left-0">
                        Invalid Text.
                      </span>
                    )}
                  </label>
                  <div className="flex justify-center gap-4">
                    <button
                      className="text-white bg-gray-600 rounded-md px-16 py-2 border-gray-600 border-2 hover:bg-gray-500 hover:text-white hover:cursor-pointer hover:border-gray-500 duration-200"
                      onClick={close}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-red-900 rounded-md border-red-900 border-2 px-16 py-2 hover:bg-red-900 hover:text-white hover:cursor-pointer hover:border-red-900 duration-200"
                    >
                      Done
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddBlogModal;
