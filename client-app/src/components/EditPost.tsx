import { useState } from "react";
import { categoryType, PostType } from "../lib/types";

export type EditPostType = {
  post: PostType;
  setCurrentPost?: React.Dispatch<React.SetStateAction<PostType | undefined>>;
};

export const EditPost = ({ post, setCurrentPost }: EditPostType) => {
  const [postForm, setPostForm] = useState<PostType>({
    id: post.id,
    author: post.author,
    image: post.image,
    title: post.title,
    date: post.date,
    content: post.content,
    category: post.category,
  });

  const options: categoryType[] = [
    { name: "Fashion", value: "fashion" },
    { name: "Culinary", value: "culinary" },
    { name: "Music", value: "music" },
    { name: "Technology", value: "technology" },
  ];

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setPostForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="w-screen h-screen flex flex-col items-center justify-start mt-5">
      <label className="text-lg">Post Title</label>
      <input
        className="w-96 h-10 rounded-lg"
        type="text"
        name="title"
        value={postForm.title}
        onChange={handleChange}
      />
      <label className="text-lg">Post Image</label>
      {/*Create cloudinary account and use cloudinary image upload tool*/}
      <input
        className="w-96 h-10 rounded-lg"
        type="text"
        name="image"
        value={postForm.image}
        onChange={handleChange}
      />
      <label className="text-lg">Post Category</label>
      {/* Should be a drop down selector, wait for PMS to give us what type of blog categorys */}
      <select
        name="category"
        className="w-96 h-10 rounded-lg"
        value={postForm.category}
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
        value={postForm.content}
        onChange={handleChange}
      />
      <button className="w-48 h-16 rounded-lg mt-5 mb-5 bg-slate-600">
        Finish Editing
      </button>
    </form>
  );
};
export default EditPost;
