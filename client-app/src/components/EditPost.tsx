import { useState } from "react";
import { categoryType, PostType } from "../lib/types";

async function postUpdatedBlog(dataToSend: PostType) {
  const headers = {};
  const response = await fetch(
    `http://localhost:5000/api/posts/${dataToSend.id}`,
    {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(dataToSend),
    }
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export type EditPostType = {
  post: PostType;
  setCurrentPost: React.Dispatch<React.SetStateAction<PostType | undefined>>;
  setAllPosts: React.Dispatch<React.SetStateAction<PostType[]>> | undefined;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditPost = ({
  post,
  setCurrentPost,
  setAllPosts,
  setOpenModal,
}: EditPostType) => {
  const options: categoryType[] = [
    { name: "Fashion", value: "fashion" },
    { name: "Culinary", value: "culinary" },
    { name: "Music", value: "music" },
    { name: "Technology", value: "technology" },
  ];

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setCurrentPost((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await postUpdatedBlog(post);
      setAllPosts!((prevState: PostType[]) =>
        prevState.map((entry: PostType) => {
          if (post.id === entry.id) {
            return { ...entry, ...post };
          }
          return entry;
        })
      );
      alert("Success");
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      setAllPosts!((prevState: PostType[]) =>
        prevState.filter((entry) => {
          return entry.id !== post.id;
        })
      );
      alert("success");
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="w-screen h-screen flex flex-col items-center justify-start mt-5">
      <button
        onClick={handleDelete}
        className="w-32 bg-red-500 rounded-xl h-14 self-start ml-5 hover:underline hover:bg-red-700 focus:bg-red-700"
      >
        Delete
      </button>
      <label className="text-lg">Post Title</label>
      <input
        className="w-96 h-10 rounded-lg"
        type="text"
        name="title"
        value={post.title}
        onChange={handleChange}
      />
      <label className="text-lg">Post Image</label>
      {/*Create cloudinary account and use cloudinary image upload tool*/}
      <input
        className="w-96 h-10 rounded-lg"
        type="text"
        name="image"
        value={post.image}
        onChange={handleChange}
      />
      <label className="text-lg">Post Category</label>
      {/* Should be a drop down selector, wait for PMS to give us what type of blog categorys */}
      <select
        name="category"
        className="w-96 h-10 rounded-lg"
        value={post.category}
        onChange={handleChange}
      >
        {options.map((option: categoryType) => {
          return <option value={option.value}>{option.name}</option>;
        })}
      </select>
      <label className="text-lg">Post Content</label>
      <textarea
        className="resize-none w-full h-full"
        name="content"
        value={post.content}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="w-48 h-16 rounded-lg mt-5 mb-5 bg-slate-600"
      >
        Finish Editing
      </button>
    </form>
  );
};
export default EditPost;
