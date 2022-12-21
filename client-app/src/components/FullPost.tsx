import { PostType } from "../lib/types";
import defaultPhoto from "../images/defaultPhoto.jpeg";

export type FullPostType = {
  post: PostType;
};

export const FullPost = ({ post }: FullPostType) => {
  return (
    <div className="h-screen w-screen mx-3 mt-8 mb-2 flex flex-col items-center justify-start overflow-y-auto">
      <div className="w-full flex justify-start items-center mb-10">
        <img
          className="w-14 h-14 rounded-full mr-5"
          src={post.image ? post.image : defaultPhoto}
          alt="author's photo"
        />
        <div className="flex flex-col">
          <h2 className="text-sm mr-3">
            {post.author ? post.author : "Anonymous"}
          </h2>
          <h3 className="text-xs font-thin">{post.date.toDateString()}</h3>
        </div>
      </div>
      <h1 className="text-4xl mb-5">{post.title}</h1>
      <p className="font-thin h-full w-full ">
        {post.content}
        {post.content}
      </p>
    </div>
  );
};
export default FullPost;
