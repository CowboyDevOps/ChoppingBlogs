import { useState } from "react";
import UploadImage from "./components/UploadImage";
import { PostType, categoryType } from "./lib/types";
import { v4 as uuidv4 } from "uuid";

async function postBlog(dataToSend: PostType) {
  const headers = { "Content-type": "application/json" };
  const response = await fetch(`http://localhost:5000/api/posts`, {
    method: "POST",
    mode: "cors",
    headers: headers,
    body: JSON.stringify(dataToSend),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export type CreatePostType = {
  setUserPosts: React.Dispatch<React.SetStateAction<Array<PostType>>>;
};

export const CreatePost = ({ setUserPosts }: CreatePostType) => {
  const [post, setPost] = useState<PostType>({
    id: uuidv4(),
    title: "",
    content: "",
    category: "",
    date: new Date(),
  });

  console.log(post);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setPost((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await postBlog(post);
      setUserPosts!((prevState: any) => {
        return [...prevState, post];
      });
      alert("Success");
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  const options: categoryType[] = [
    { name: "Fashion", value: "fashion" },
    { name: "Culinary", value: "culinary" },
    { name: "Music", value: "music" },
    { name: "Technology", value: "technology" },
  ];
  return (
    <form
      onSubmit={handleSubmit}
      className="w-screen h-screen flex flex-col items-center justify-start mt-5 bg-gray-50 mr-5"
    >
      {/* will have two sides, 1 text inputs, 1 image input using cloudinary*/}
      <div className="w-full h-1/2 flex flex-col sm:flex-row">
        <div className="flex flex-col h-full w-1/2 ml-1 sm:ml-16 lg:items-start">
          {/* <div> */}
          <label className="text-lg">Post Title</label>
          <input
            className="w-96 h-10 rounded-lg bg-white ring ring-slate-300 my-1"
            type="text"
            name="title"
            value={post?.title}
            onChange={handleChange}
          />

          <label className="text-lg">Post Category</label>
          {/* Should be a drop down selector, wait for PMS to give us what type of blog categorys */}
          <select
            name="category"
            className="w-96 h-10 rounded-lg bg-white ring ring-slate-300 my-1"
            value={post?.category}
            onChange={handleChange}
          ></select>
        </div>
        {/* </div> */}
        <div>{/* <UploadImage post={post!} /> */}</div>
      </div>
      <label className="text-lg">Post Content</label>
      <textarea
        className="resize-none lg:w-11/12 w-full h-full bg-white ring ring-slate-300 my-5"
        name="content"
        value={post?.content}
        onChange={handleChange}
      />
      <button className="w-48 h-20 rounded-lg mt-5 mb-20 bg-slate-600 text-white">
        Finish Editing
      </button>
    </form>
  );
};
export default CreatePost;
