import { PostType } from "../lib/types";

export type PostComponentType = {
  post: PostType;
  setCurrentPost?: React.Dispatch<React.SetStateAction<PostType | undefined>>;
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Post = ({
  post,
  setCurrentPost,
  setOpenModal,
}: PostComponentType) => {
  const contentPreview = post.content.slice(0, 146);
  const handleOpen = () => {
    setCurrentPost?.(post);
    setOpenModal?.(true);
  };
  return (
    <div className="sm:w-3/4 lg:w-1/2 xl:w-2/3 h-72 border-y mt-8 mb-2 flex flex-col items-center justify-center">
      <div className="w-full flex justify-start items-center">
        <img
          className="w-14 h-14 rounded-full mr-5"
          src={post.image}
          alt="author's photo"
        />
        <h2 className="text-sm mr-3">{post.author}</h2>{" "}
        <h3 className="text-xs font-thin">{post.date.toDateString()}</h3>
      </div>
      <h1 className="text-2xl">{post.title}</h1>
      <p className="font-thin">{contentPreview}...</p>
      <button onClick={handleOpen}>View this article</button>
    </div>
  );
};
export default Post;
