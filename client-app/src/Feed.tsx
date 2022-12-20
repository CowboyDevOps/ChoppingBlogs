import { useState } from "react";
import FullPost from "./components/FullPost";
import Modal from "./components/modal";
import Post from "./components/Post";
import { PostType } from "./lib/types";

export type feedType = {
  posts: PostType[];
  setPosts?: React.Dispatch<React.SetStateAction<PostType[]>>;
};

export const Feed = ({ posts, setPosts }: feedType) => {
  const [currentPost, setCurrentPost] = useState<PostType>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <section className="w-full h-screen  flex flex-col items-center overflow-y-auto">
      <Modal opened={openModal} setOpened={setOpenModal}>
        <FullPost post={currentPost!} />
      </Modal>
      {/* This will get smaller once we set a design idea on what to put next to it after a certain width in the window */}
      {posts.map((post: PostType) => {
        return (
          <div className="w-full flex justify-center border-y ">
            <Post
              post={post}
              setCurrentPost={setCurrentPost}
              setOpenModal={setOpenModal}
            />
          </div>
        );
      })}
    </section>
  );
};
export default Feed;
