import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { PostType, UserType } from "./lib/types";
import Splash from "./Splash";
import { Routes, Route } from "react-router-dom";
import {
  homeRoute,
  feedRoute,
  profileRoute,
  CreatePostRoute,
  signUpRoute,
  logInRoute,
} from "./lib/routes";
import Feed from "./Feed";
import { loren } from "./blogging-text/lorenIpsum";
import bigDAWG from "./images/bigDAWG.jpeg";
import defaultPhoto from "./images/defaultPhoto.jpeg";
import UserProfile from "./UserProfile";
import CreatePost from "./NewPost";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

declare global {
  interface Window {
    cloudinary: any;
  }
}

function App() {
  //if image === undefined, image = defaultPhoto
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: "a",
      author: "Dan Weiner",
      image: bigDAWG,
      title: "Practice",
      date: new Date(),
      content: loren,
      category: "Post",
    },
  ]);
  //pull all posts from database
  useEffect(() => {
    var headers = {};
    fetch("http://localhost:5000/api/posts", {
      method: "GET",
      headers: headers,
      mode: "cors",
    })
      .then((res) => {
        if (res.status !== 200) {
          console.log("error");
        } else {
          return res.json();
        }
      })
      .then((data) =>
        setPosts((prevState) => {
          return data.map((entry: PostType) => {
            return {
              ...entry,
              date: new Date(entry.date),
            };
          });
        })
      );
  }, []);

  const [userPosts, setUserPosts] = useState<PostType[]>(posts);
  //pull all user posts from database
  useEffect(() => {
    var headers = {};
    fetch("http://localhost:5000/api/posts", {
      method: "GET",
      headers: headers,
      mode: "cors",
    })
      .then((res) => {
        if (res.status !== 200) {
          console.log("error");
        } else {
          return res.json();
        }
      })
      .then((data) =>
        setUserPosts((prevState) => {
          return data.map((entry: PostType) => {
            return {
              ...entry,
              date: new Date(entry.date),
            };
          });
        })
      );
  }, []);
  //userData
  const [user, setUser] = useState<UserType>({
    id: 0,
    image: bigDAWG,
    fName: "Henrik",
    lName: "Weiner",
    about: "Just an MSSA student, trying to live the dream",
    occupation: "Software Engineer",
    company: "Microsoft",
    email: "",
    displayName: "Henrik",
    username: "Henrik",
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
        <Route
          path={CreatePostRoute}
          element={<CreatePost setUserPosts={setUserPosts} />}
        />
        {/* AUTH PAGES */}
        <Route path={signUpRoute} element={<SignUp />} />
        <Route path={logInRoute} element={<LogIn />} />
        {/* AUTH PAGES */}
      </Routes>
    </div>
  );
}

export default App;
