import { useState } from "react";
import EditPost from "./components/EditPost";
import FullPost from "./components/FullPost";
import Modal from "./components/modal";
import Post from "./components/Post";
import { PostType, UserType } from "./lib/types";

export type UserProfileType = {
  userPosts: PostType[];
  setUserPosts?: React.Dispatch<React.SetStateAction<PostType[]>>;
  user: UserType;
};

export const UserProfile = ({
  userPosts,
  setUserPosts,
  user,
}: UserProfileType) => {
  const handleDelete = async () => {};
  const handleEdit = async () => {};

  const [currentPost, setCurrentPost] = useState<PostType | undefined>({
    id: -11,
    image: user.image,
    author: user.fName + " " + user.lName,
    title: "Initial Title",
    date: new Date(),
    content: "Initial content",
    category: "initial category",
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleEditClick = (post: PostType) => {
    setCurrentPost(post);
    setOpenModal(true);
  };

  console.log(currentPost);
  console.log(openModal);
  return (
    <section className="w-screen h-screen md:flex md:flex-row-reverse overflow-auto">
      <Modal opened={openModal} setOpened={setOpenModal}>
        <EditPost post={currentPost!} setCurrentPost={setCurrentPost} />
      </Modal>
      <div className=" h-full w-full md:w-1/3">
        <div className="flex pt-10 items-start ml-2">
          <img
            className="w-32 h-32 rounded-md "
            src={user.image}
            alt="User Image"
          />
          <div className="ml-5">
            <h3 className="text-2xl">{user.fName + " " + user.lName}</h3>
            <h4 className="font-thin">{user.occupation}</h4>
            <h4 className="font-thin">{user.company}</h4>
          </div>
        </div>
        <div className="mt-10 h-48 flex flex-col items-center">
          <h3 className="self-start text-xl">About</h3>
          <p className="mt-3 overflow-y-auto border-y-2 w-full border-y-black h-5/6">
            {user.about}
          </p>
        </div>
      </div>
      <div className="bg-red-100 h-full w-full md:w-2/3 lg:w-2/3 overflow-y-auto flex flex-col justify-start items-center">
        <h2 className="mt-5 text-2xl">{user.fName}'s Blog Articles</h2>
        {userPosts.map((post: PostType) => {
          return (
            <div className="w-full h-full flex justify-center mb-2">
              <Post
                post={post}
                setCurrentPost={setCurrentPost}
                setOpenModal={setOpenModal}
              />
              <button
                onClick={() => handleEditClick(post)}
                className="self-start mt-16 mr-5"
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default UserProfile;
