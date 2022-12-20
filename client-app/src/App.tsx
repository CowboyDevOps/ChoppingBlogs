import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { PostType, UserType } from "./lib/types";
import Splash from "./Splash";
import { Routes, Route } from "react-router-dom";
import { homeRoute, feedRoute, profileRoute } from "./lib/routes";
import Feed from "./Feed";
import { loren } from "./blogging-text/lorenIpsum";
import bigDAWG from "./images/bigDAWG.jpeg";
import defaultPhoto from "./images/defaultPhoto.jpeg";
import UserProfile from "./UserProfile";

function App() {
  //if image === undefined, image = defaultPhoto
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 0,
      author: "Dan Weiner",
      image: bigDAWG,
      title: "Practice",
      date: new Date(),
      content: loren,
      category: "Post",
    },
    {
      id: 1,
      image: defaultPhoto,
      author: "Random User",
      title: "Practice1",
      date: new Date(),
      content: loren,
      category: "Post",
    },
    {
      id: 0,
      image: bigDAWG,
      author: "Dan Weiner",
      title: "Practice",
      date: new Date(),
      content: loren,
      category: "Post",
    },
  ]);
  const [userPosts, setUserPosts] = useState<PostType[]>([
    {
      id: 0,
      author: "Dan Weiner",
      image: bigDAWG,
      title: "Practice",
      date: new Date(),
      content: loren,
      category: "Post",
    },
    {
      id: 1,
      image: defaultPhoto,
      author: "Random User",
      title: "Practice1",
      date: new Date(),
      content: loren,
      category: "Post",
    },
    {
      id: 0,
      image: bigDAWG,
      author: "Dan Weiner",
      title: "Practice",
      date: new Date(),
      content: loren,
      category: "Post",
    },
  ]);

  const [user, setUser] = useState<UserType>({
    id: 0,
    image: bigDAWG,
    fName: "Henrik",
    lName: "Weiner",
    about: "Just an MSSA student, trying to live the dream",
    occupation: "Software Engineer",
    company: "Microsoft",
  });
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Routes>
        <Route path={homeRoute} element={<Splash />} />
        <Route
          path={feedRoute}
          element={<Feed posts={posts} setPosts={setPosts} />}
        />

        <Route
          path={profileRoute}
          element={
            <UserProfile
              userPosts={userPosts}
              setUserPosts={setUserPosts}
              user={user}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
